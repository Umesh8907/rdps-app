import { cookies } from "next/headers";
import { NextRequest } from "next/server";

const ADMIN_SECRET = process.env.ADMIN_JWT_SECRET || "rdps-infrastructure-secure-secret-key-2026-xyz";
export const COOKIE_NAME = "rdps_admin_session";

export interface AdminSession {
  id: string;
  email: string;
  name: string;
  role: "superadmin" | "admin" | "manager";
  expiresAt: number;
}

// Default credentials if not specified in .env
export const DEFAULT_ADMIN = {
  email: process.env.ADMIN_EMAIL || "admin@rdps.in",
  password: process.env.ADMIN_PASSWORD || "Admin@RDPS2026",
  name: "RDPS Administrator",
  role: "superadmin" as const,
};

// Web Crypto HMAC-SHA256 based lightweight JWT implementation (Edge & Node compatible)
async function getCryptoKey(): Promise<CryptoKey> {
  const encoder = new TextEncoder();
  return await crypto.subtle.importKey(
    "raw",
    encoder.encode(ADMIN_SECRET),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign", "verify"]
  );
}

function base64UrlEncode(str: string): string {
  const base64 = btoa(str);
  return base64.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function base64UrlDecode(str: string): string {
  let base64 = str.replace(/-/g, "+").replace(/_/g, "/");
  while (base64.length % 4) {
    base64 += "=";
  }
  return atob(base64);
}

export async function createAdminToken(session: Omit<AdminSession, "expiresAt">, durationDays = 7): Promise<string> {
  const key = await getCryptoKey();
  const header = { alg: "HS256", typ: "JWT" };
  const expiresAt = Date.now() + durationDays * 24 * 60 * 60 * 1000;
  const payload: AdminSession = { ...session, expiresAt };

  const encodedHeader = base64UrlEncode(JSON.stringify(header));
  const encodedPayload = base64UrlEncode(JSON.stringify(payload));
  const data = `${encodedHeader}.${encodedPayload}`;

  const signature = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(data));
  const binarySignature = String.fromCharCode(...new Uint8Array(signature));
  const encodedSignature = base64UrlEncode(binarySignature);

  return `${data}.${encodedSignature}`;
}

export async function verifyAdminToken(token: string): Promise<AdminSession | null> {
  try {
    const parts = token.split(".");
    if (parts.length !== 3) return null;

    const [encodedHeader, encodedPayload, encodedSignature] = parts;
    const data = `${encodedHeader}.${encodedPayload}`;

    const key = await getCryptoKey();
    const signatureBytes = Uint8Array.from(base64UrlDecode(encodedSignature), (c) => c.charCodeAt(0));

    const isValid = await crypto.subtle.verify("HMAC", key, signatureBytes, new TextEncoder().encode(data));
    if (!isValid) return null;

    const payload: AdminSession = JSON.parse(base64UrlDecode(encodedPayload));
    if (Date.now() > payload.expiresAt) {
      return null;
    }

    return payload;
  } catch {
    return null;
  }
}

export async function getAdminSessionFromCookies(): Promise<AdminSession | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get(COOKIE_NAME)?.value;
  if (!token) return null;
  return await verifyAdminToken(token);
}

export async function getAdminSessionFromRequest(req: NextRequest): Promise<AdminSession | null> {
  const token = req.cookies.get(COOKIE_NAME)?.value || req.headers.get("Authorization")?.replace("Bearer ", "");
  if (!token) return null;
  return await verifyAdminToken(token);
}
