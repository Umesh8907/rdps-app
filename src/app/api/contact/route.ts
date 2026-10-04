import { NextRequest, NextResponse } from "next/server";
import { saveContactEnquiry } from "@/lib/db";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    if (!body.name || !body.phone || !body.message) {
      return NextResponse.json(
        { error: "Please provide your Name, Phone Number, and Message." },
        { status: 400 }
      );
    }

    const result = await saveContactEnquiry({
      name: body.name,
      phone: body.phone,
      email: body.email || "",
      subject: body.subject || "General Project Enquiry",
      message: body.message,
    });

    return NextResponse.json({
      success: true,
      message: "Your message has been received. Our team will contact you shortly.",
      referenceId: result.id,
      storage: result.source,
    });
  } catch (error) {
    console.error("API Contact Error:", error);
    return NextResponse.json(
      { error: "Failed to submit enquiry. Please call or WhatsApp our team directly." },
      { status: 500 }
    );
  }
}
