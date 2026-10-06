import { NextRequest, NextResponse } from "next/server";
import { getAdminSessionFromRequest } from "@/lib/auth";
import { getContacts } from "@/lib/db";

export async function GET(req: NextRequest) {
  const session = await getAdminSessionFromRequest(req);
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const status = searchParams.get("status") || "all";
  const search = searchParams.get("search") || "";

  try {
    const contacts = await getContacts({ status, search });
    return NextResponse.json({ success: true, contacts });
  } catch (error) {
    console.error("Admin Contacts API Error:", error);
    return NextResponse.json({ error: "Failed to fetch contact inquiries" }, { status: 500 });
  }
}
