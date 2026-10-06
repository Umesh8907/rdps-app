import { NextRequest, NextResponse } from "next/server";
import { getAdminSessionFromRequest } from "@/lib/auth";
import { getQuotationById, updateQuotation, deleteQuotation, QuotationStatus } from "@/lib/db";

export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = await getAdminSessionFromRequest(req);
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  const quote = await getQuotationById(id);
  if (!quote) {
    return NextResponse.json({ error: "Quotation not found" }, { status: 404 });
  }

  return NextResponse.json({ success: true, quotation: quote });
}

export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = await getAdminSessionFromRequest(req);
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  const body = await req.json();

  const updates: { status?: QuotationStatus; notes?: string } = {};
  if (body.status) updates.status = body.status;
  if (body.notes !== undefined) updates.notes = body.notes;

  const ok = await updateQuotation(id, updates);
  if (!ok) {
    return NextResponse.json({ error: "Failed to update quotation or not found" }, { status: 404 });
  }

  const updatedRecord = await getQuotationById(id);
  return NextResponse.json({ success: true, message: "Quotation updated", quotation: updatedRecord });
}

export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = await getAdminSessionFromRequest(req);
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  const ok = await deleteQuotation(id);
  if (!ok) {
    return NextResponse.json({ error: "Failed to delete quotation" }, { status: 404 });
  }

  return NextResponse.json({ success: true, message: "Quotation deleted" });
}
