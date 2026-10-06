import { NextRequest, NextResponse } from "next/server";
import { getAdminSessionFromRequest } from "@/lib/auth";
import { updateContact, deleteContact, ContactStatus } from "@/lib/db";

export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = await getAdminSessionFromRequest(req);
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  const body = await req.json();

  const updates: { status?: ContactStatus; notes?: string } = {};
  if (body.status) updates.status = body.status;
  if (body.notes !== undefined) updates.notes = body.notes;

  const ok = await updateContact(id, updates);
  if (!ok) {
    return NextResponse.json({ error: "Failed to update contact enquiry" }, { status: 404 });
  }

  return NextResponse.json({ success: true, message: "Contact inquiry updated" });
}

export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = await getAdminSessionFromRequest(req);
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  const ok = await deleteContact(id);
  if (!ok) {
    return NextResponse.json({ error: "Failed to delete contact enquiry" }, { status: 404 });
  }

  return NextResponse.json({ success: true, message: "Contact inquiry deleted" });
}
