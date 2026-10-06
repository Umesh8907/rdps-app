import { NextRequest, NextResponse } from "next/server";
import { createAdminToken, DEFAULT_ADMIN, COOKIE_NAME } from "@/lib/auth";

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    const expectedEmail = DEFAULT_ADMIN.email.toLowerCase().trim();
    const expectedPassword = DEFAULT_ADMIN.password;

    const inputEmail = (email || "").toLowerCase().trim();
    const inputPassword = password || "";

    if (inputEmail !== expectedEmail || inputPassword !== expectedPassword) {
      return NextResponse.json(
        { error: "Invalid credentials. Please verify your email and password." },
        { status: 401 }
      );
    }

    const token = await createAdminToken({
      id: "admin_root_1",
      email: DEFAULT_ADMIN.email,
      name: DEFAULT_ADMIN.name,
      role: DEFAULT_ADMIN.role,
    });

    const response = NextResponse.json({
      success: true,
      user: {
        email: DEFAULT_ADMIN.email,
        name: DEFAULT_ADMIN.name,
        role: DEFAULT_ADMIN.role,
      },
      message: "Login successful",
    });

    response.cookies.set({
      name: COOKIE_NAME,
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 7 * 24 * 60 * 60, // 7 days
    });

    return response;
  } catch (error) {
    console.error("Login API Error:", error);
    return NextResponse.json({ error: "Server error during authentication." }, { status: 500 });
  }
}
