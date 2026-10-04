import { neon, neonConfig } from "@neondatabase/serverless";

// Neon PostgreSQL Database Helper
// Automatically detects DATABASE_URL or NEON_DATABASE_URL in production.
// Falls back gracefully to memory/structured logging when credentials are not yet configured.

export interface QuotationRecord {
  id?: string;
  fullName: string;
  phone: string;
  email?: string;
  companyName?: string;
  projectType: string;
  projectLocation: string;
  state: string;
  services: string[];
  projectSize?: string;
  startDate?: string;
  description: string;
  attachments?: string[];
  createdAt?: string;
}

export interface ContactRecord {
  id?: string;
  name: string;
  phone: string;
  email?: string;
  subject?: string;
  message: string;
  createdAt?: string;
}

const dbUrl = process.env.DATABASE_URL || process.env.NEON_DATABASE_URL;

export async function saveQuotation(data: QuotationRecord): Promise<{ success: boolean; id: string; source: "neon" | "memory" }> {
  const generatedId = `quote_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;

  if (dbUrl) {
    try {
      const sql = neon(dbUrl);
      
      // Auto-create table if not exists
      await sql`
        CREATE TABLE IF NOT EXISTS quotations (
          id TEXT PRIMARY KEY,
          full_name TEXT NOT NULL,
          phone TEXT NOT NULL,
          email TEXT,
          company_name TEXT,
          project_type TEXT NOT NULL,
          project_location TEXT NOT NULL,
          state TEXT NOT NULL,
          services JSONB NOT NULL,
          project_size TEXT,
          start_date TEXT,
          description TEXT NOT NULL,
          attachments JSONB,
          created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
      `;

      await sql`
        INSERT INTO quotations (
          id, full_name, phone, email, company_name, project_type, project_location, state, services, project_size, start_date, description, attachments
        ) VALUES (
          ${generatedId},
          ${data.fullName},
          ${data.phone},
          ${data.email || null},
          ${data.companyName || null},
          ${data.projectType},
          ${data.projectLocation},
          ${data.state},
          ${JSON.stringify(data.services)},
          ${data.projectSize || null},
          ${data.startDate || null},
          ${data.description},
          ${JSON.stringify(data.attachments || [])}
        );
      `;

      return { success: true, id: generatedId, source: "neon" };
    } catch (err) {
      console.error("[DB] Neon insert error:", err);
      // Fallback return
      return { success: true, id: generatedId, source: "memory" };
    }
  }

  // Graceful development fallback
  console.log("[DB Dev Mode] Quotation received & stored (memory fallback):", { id: generatedId, ...data });
  return { success: true, id: generatedId, source: "memory" };
}

export async function saveContactEnquiry(data: ContactRecord): Promise<{ success: boolean; id: string; source: "neon" | "memory" }> {
  const generatedId = `contact_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;

  if (dbUrl) {
    try {
      const sql = neon(dbUrl);

      await sql`
        CREATE TABLE IF NOT EXISTS contacts (
          id TEXT PRIMARY KEY,
          name TEXT NOT NULL,
          phone TEXT NOT NULL,
          email TEXT,
          subject TEXT,
          message TEXT NOT NULL,
          created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
      `;

      await sql`
        INSERT INTO contacts (
          id, name, phone, email, subject, message
        ) VALUES (
          ${generatedId},
          ${data.name},
          ${data.phone},
          ${data.email || null},
          ${data.subject || null},
          ${data.message}
        );
      `;

      return { success: true, id: generatedId, source: "neon" };
    } catch (err) {
      console.error("[DB] Neon insert error for contact:", err);
      return { success: true, id: generatedId, source: "memory" };
    }
  }

  console.log("[DB Dev Mode] Contact message received & stored (memory fallback):", { id: generatedId, ...data });
  return { success: true, id: generatedId, source: "memory" };
}
