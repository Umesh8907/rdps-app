import { NextRequest, NextResponse } from "next/server";
import { getAdminSessionFromRequest } from "@/lib/auth";
import { getQuotations } from "@/lib/db";

export async function GET(req: NextRequest) {
  const session = await getAdminSessionFromRequest(req);
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const status = searchParams.get("status") || "all";
  const search = searchParams.get("search") || "";

  try {
    const list = await getQuotations({ status, search });

    // Build CSV content
    const headers = [
      "Quotation ID",
      "Date",
      "Client Name",
      "Company Name",
      "Phone",
      "Email",
      "Project Type",
      "Location",
      "State",
      "Services",
      "Project Size",
      "Start Date",
      "Status",
      "Notes",
      "Description",
    ];

    const escapeCsv = (str: string | undefined | null) => {
      if (!str) return '""';
      const clean = String(str).replace(/"/g, '""').replace(/\r?\n/g, " ");
      return `"${clean}"`;
    };

    const rows = list.map((q) => [
      escapeCsv(q.id),
      escapeCsv(q.createdAt ? new Date(q.createdAt).toLocaleDateString("en-IN") : ""),
      escapeCsv(q.fullName),
      escapeCsv(q.companyName),
      escapeCsv(q.phone),
      escapeCsv(q.email),
      escapeCsv(q.projectType),
      escapeCsv(q.projectLocation),
      escapeCsv(q.state),
      escapeCsv((q.services || []).join("; ")),
      escapeCsv(q.projectSize),
      escapeCsv(q.startDate),
      escapeCsv(q.status),
      escapeCsv(q.notes),
      escapeCsv(q.description),
    ]);

    const csvContent = [headers.join(","), ...rows.map((r) => r.join(","))].join("\n");

    return new Response(csvContent, {
      status: 200,
      headers: {
        "Content-Type": "text/csv; charset=utf-8",
        "Content-Disposition": `attachment; filename="RDPS_Quotations_${new Date().toISOString().split("T")[0]}.csv"`,
      },
    });
  } catch (error) {
    console.error("Export CSV Error:", error);
    return NextResponse.json({ error: "Failed to generate CSV export" }, { status: 500 });
  }
}
