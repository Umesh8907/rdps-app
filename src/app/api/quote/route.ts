import { NextRequest, NextResponse } from "next/server";
import { saveQuotation } from "@/lib/db";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    if (!body.fullName || !body.phone || !body.projectType || !body.projectLocation || !body.description) {
      return NextResponse.json(
        { error: "Please provide all required fields (Full Name, Phone, Project Type, Location, Description)." },
        { status: 400 }
      );
    }

    const result = await saveQuotation({
      fullName: body.fullName,
      phone: body.phone,
      email: body.email || "",
      companyName: body.companyName || "",
      projectType: body.projectType,
      projectLocation: body.projectLocation,
      state: body.state || "Chhattisgarh",
      services: Array.isArray(body.services) ? body.services : [],
      projectSize: body.projectSize || "",
      startDate: body.startDate || "",
      description: body.description,
      attachments: Array.isArray(body.attachments) ? body.attachments : [],
    });

    return NextResponse.json({
      success: true,
      message: "Quotation request submitted successfully. Our team will review the scope and contact you promptly.",
      referenceId: result.id,
      storage: result.source,
    });
  } catch (error) {
    console.error("API Quote Error:", error);
    return NextResponse.json(
      { error: "Failed to process quotation request. Please reach out via WhatsApp or phone." },
      { status: 500 }
    );
  }
}
