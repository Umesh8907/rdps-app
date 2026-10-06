import { neon } from "@neondatabase/serverless";

export type QuotationStatus = "new" | "reviewing" | "quote_sent" | "won" | "lost" | "archived";
export type ContactStatus = "new" | "read" | "replied" | "archived";

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
  status?: QuotationStatus;
  notes?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface ContactRecord {
  id?: string;
  name: string;
  phone: string;
  email?: string;
  subject?: string;
  message: string;
  status?: ContactStatus;
  notes?: string;
  createdAt?: string;
  updatedAt?: string;
}

const dbUrl = process.env.DATABASE_URL || process.env.NEON_DATABASE_URL;

// Initial sample records for dev/memory mode
const memoryQuotations: QuotationRecord[] = [
  {
    id: "quote_1712001001_demo1",
    fullName: "Rajesh Sharma",
    companyName: "Sharma Infracon Pvt Ltd",
    phone: "+91 98261 44552",
    email: "rajesh.sharma@sharmainfra.com",
    projectType: "Commercial Complex Foundation",
    projectLocation: "Sector 24, Naya Raipur",
    state: "Chhattisgarh",
    services: ["Bored Cast In-Situ Piling", "Static Pile Load Testing", "Rotary Drilling"],
    projectSize: "120 Piles (800mm dia, 18m depth)",
    startDate: "2026-11-15",
    description: "Multi-storey commercial mall foundation requires 120 bored cast-in-situ piles with automated static load testing. Hard rock layer at 14m depth.",
    attachments: [],
    status: "new",
    notes: "Urgent site visit requested next Tuesday. Client has soil report ready.",
    createdAt: new Date(Date.now() - 2 * 3600000).toISOString(),
    updatedAt: new Date(Date.now() - 2 * 3600000).toISOString(),
  },
  {
    id: "quote_1712001002_demo2",
    fullName: "Er. Amit Verma",
    companyName: "NHAI EPC Contractor (Joint Venture)",
    phone: "+91 94252 88712",
    email: "amit.verma@infraepc.in",
    projectType: "Flyover & Bridge Pier Piling",
    projectLocation: "Bilaspur - Raipur Expressway NH-130",
    state: "Chhattisgarh",
    services: ["Bridge & Flyover Piling", "Rotary Hydraulic Rig Works", "Sonic Logging Test"],
    projectSize: "48 Large Diameter Piles (1200mm dia, 24m depth)",
    startDate: "2026-12-01",
    description: "4-lane highway expansion bridge over river bed. Requires high-capacity hydraulic rotary rigs with temporary steel casing.",
    attachments: [],
    status: "reviewing",
    notes: "BOQ submitted. Need price estimation for 1200mm casing driving.",
    createdAt: new Date(Date.now() - 14 * 3600000).toISOString(),
    updatedAt: new Date(Date.now() - 10 * 3600000).toISOString(),
  },
  {
    id: "quote_1712001003_demo3",
    fullName: "Vikram Singhania",
    companyName: "Singhania Steel & Power Ltd",
    phone: "+91 97555 12390",
    email: "vikram@singhaniasteel.com",
    projectType: "Industrial Heavy Machine Foundation",
    projectLocation: "Urla Industrial Area, Raipur",
    state: "Chhattisgarh",
    services: ["Industrial Heavy Machine Foundation", "Micropiling / Underpinning", "Core Drilling & Soil Investigation"],
    projectSize: "60 Micropiles for Vibratory Equipment",
    startDate: "2026-10-25",
    description: "Heavy rolling mill equipment foundation retrofitting. Low headroom access area requiring micropiles.",
    attachments: [],
    status: "quote_sent",
    notes: "Quotation of INR 18.5 Lakhs sent via email and WhatsApp. Awaiting approval from director.",
    createdAt: new Date(Date.now() - 48 * 3600000).toISOString(),
    updatedAt: new Date(Date.now() - 24 * 3600000).toISOString(),
  },
  {
    id: "quote_1712001004_demo4",
    fullName: "Praveen Patel",
    companyName: "Patel Construction & Real Estate",
    phone: "+91 98930 77114",
    email: "praveen@patelconstructions.co.in",
    projectType: "Residential Tower Piling",
    projectLocation: "Durg - Bhilai Twin City",
    state: "Chhattisgarh",
    services: ["Bored Cast In-Situ Piling", "Integrity Testing (PIT)"],
    projectSize: "80 Piles (600mm dia, 15m depth)",
    startDate: "2026-10-18",
    description: "G+14 Residential apartment block with basement parking.",
    attachments: [],
    status: "won",
    notes: "Contract signed. Mobilization advance of 20% received. Rigs moving to site on Monday.",
    createdAt: new Date(Date.now() - 96 * 3600000).toISOString(),
    updatedAt: new Date(Date.now() - 30 * 3600000).toISOString(),
  },
];

const memoryContacts: ContactRecord[] = [
  {
    id: "contact_1712002001_demo1",
    name: "Sunil Deshmukh",
    phone: "+91 98220 11990",
    email: "sunil.d@geotechlab.com",
    subject: "Subcontracting / Rig Rental Enquiry",
    message: "We have an ongoing project in Korba thermal power plant. Do you have hydraulic rotary rigs available for rental with operators for 2 months?",
    status: "new",
    notes: "",
    createdAt: new Date(Date.now() - 5 * 3600000).toISOString(),
    updatedAt: new Date(Date.now() - 5 * 3600000).toISOString(),
  },
  {
    id: "contact_1712002002_demo2",
    name: "Mahesh Agrawal",
    phone: "+91 94060 33441",
    email: "agrawal.m@gmail.com",
    subject: "Soil Testing and Geotechnical Report",
    message: "Looking for soil investigation and SPT testing for a 2-acre commercial warehouse in Ring Road No 2 Raipur.",
    status: "replied",
    notes: "Spoke on phone, sent standard rate card.",
    createdAt: new Date(Date.now() - 36 * 3600000).toISOString(),
    updatedAt: new Date(Date.now() - 12 * 3600000).toISOString(),
  },
];

let tablesInitialized = false;

async function ensureTables() {
  if (!dbUrl || tablesInitialized) return;
  try {
    const sql = neon(dbUrl);
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
        status TEXT DEFAULT 'new',
        notes TEXT DEFAULT '',
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `;

    await sql`
      CREATE TABLE IF NOT EXISTS contacts (
        id TEXT PRIMARY KEY,
        name TEXT NOT NULL,
        phone TEXT NOT NULL,
        email TEXT,
        subject TEXT,
        message TEXT NOT NULL,
        status TEXT DEFAULT 'new',
        notes TEXT DEFAULT '',
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `;
    tablesInitialized = true;
  } catch (err) {
    console.error("[DB] Table check error:", err);
  }
}

// ----------------- QUOTATIONS -----------------

export async function saveQuotation(data: QuotationRecord): Promise<{ success: boolean; id: string; source: "neon" | "memory" }> {
  const generatedId = `quote_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
  const now = new Date().toISOString();

  const record: QuotationRecord = {
    ...data,
    id: generatedId,
    status: data.status || "new",
    notes: data.notes || "",
    createdAt: now,
    updatedAt: now,
  };

  if (dbUrl) {
    try {
      await ensureTables();
      const sql = neon(dbUrl);
      await sql`
        INSERT INTO quotations (
          id, full_name, phone, email, company_name, project_type, project_location, state, services, project_size, start_date, description, attachments, status, notes, created_at, updated_at
        ) VALUES (
          ${generatedId},
          ${record.fullName},
          ${record.phone},
          ${record.email || null},
          ${record.companyName || null},
          ${record.projectType},
          ${record.projectLocation},
          ${record.state},
          ${JSON.stringify(record.services || [])},
          ${record.projectSize || null},
          ${record.startDate || null},
          ${record.description},
          ${JSON.stringify(record.attachments || [])},
          ${record.status},
          ${record.notes},
          ${now},
          ${now}
        );
      `;
      return { success: true, id: generatedId, source: "neon" };
    } catch (err) {
      console.error("[DB] Neon insert quotation error:", err);
    }
  }

  memoryQuotations.unshift(record);
  return { success: true, id: generatedId, source: "memory" };
}

export async function getQuotations(filters?: { status?: string; search?: string }): Promise<QuotationRecord[]> {
  if (dbUrl) {
    try {
      await ensureTables();
      const sql = neon(dbUrl);
      const rows = await sql`
        SELECT 
          id,
          full_name AS "fullName",
          phone,
          email,
          company_name AS "companyName",
          project_type AS "projectType",
          project_location AS "projectLocation",
          state,
          services,
          project_size AS "projectSize",
          start_date AS "startDate",
          description,
          attachments,
          status,
          notes,
          created_at AS "createdAt",
          updated_at AS "updatedAt"
        FROM quotations
        ORDER BY created_at DESC;
      `;

      let results: QuotationRecord[] = rows.map((r: any) => ({
        ...r,
        services: typeof r.services === "string" ? JSON.parse(r.services) : r.services || [],
        attachments: typeof r.attachments === "string" ? JSON.parse(r.attachments) : r.attachments || [],
        createdAt: r.createdAt ? new Date(r.createdAt).toISOString() : undefined,
        updatedAt: r.updatedAt ? new Date(r.updatedAt).toISOString() : undefined,
      }));

      if (filters?.status && filters.status !== "all") {
        results = results.filter((q) => q.status === filters.status);
      }
      if (filters?.search) {
        const query = filters.search.toLowerCase();
        results = results.filter(
          (q) =>
            q.fullName.toLowerCase().includes(query) ||
            (q.companyName && q.companyName.toLowerCase().includes(query)) ||
            q.phone.includes(query) ||
            (q.email && q.email.toLowerCase().includes(query)) ||
            q.projectLocation.toLowerCase().includes(query) ||
            q.projectType.toLowerCase().includes(query)
        );
      }

      return results;
    } catch (err) {
      console.error("[DB] Neon fetch quotations error, falling back to memory:", err);
    }
  }

  let list = [...memoryQuotations];
  if (filters?.status && filters.status !== "all") {
    list = list.filter((q) => q.status === filters.status);
  }
  if (filters?.search) {
    const query = filters.search.toLowerCase();
    list = list.filter(
      (q) =>
        q.fullName.toLowerCase().includes(query) ||
        (q.companyName && q.companyName.toLowerCase().includes(query)) ||
        q.phone.includes(query) ||
        (q.email && q.email.toLowerCase().includes(query)) ||
        q.projectLocation.toLowerCase().includes(query) ||
        q.projectType.toLowerCase().includes(query)
    );
  }
  return list;
}

export async function getQuotationById(id: string): Promise<QuotationRecord | null> {
  if (dbUrl) {
    try {
      await ensureTables();
      const sql = neon(dbUrl);
      const rows = await sql`
        SELECT 
          id, full_name AS "fullName", phone, email, company_name AS "companyName",
          project_type AS "projectType", project_location AS "projectLocation", state,
          services, project_size AS "projectSize", start_date AS "startDate",
          description, attachments, status, notes, created_at AS "createdAt", updated_at AS "updatedAt"
        FROM quotations WHERE id = ${id} LIMIT 1;
      `;
      if (rows.length > 0) {
        const r: any = rows[0];
        return {
          ...r,
          services: typeof r.services === "string" ? JSON.parse(r.services) : r.services || [],
          attachments: typeof r.attachments === "string" ? JSON.parse(r.attachments) : r.attachments || [],
        } as QuotationRecord;
      }
    } catch (err) {
      console.error("[DB] Neon get quotation by id error:", err);
    }
  }

  return memoryQuotations.find((q) => q.id === id) || null;
}

export async function updateQuotation(id: string, updates: Partial<QuotationRecord>): Promise<boolean> {
  const now = new Date().toISOString();

  if (dbUrl) {
    try {
      await ensureTables();
      const sql = neon(dbUrl);
      await sql`
        UPDATE quotations 
        SET 
          status = COALESCE(${updates.status || null}, status),
          notes = COALESCE(${updates.notes !== undefined ? updates.notes : null}, notes),
          updated_at = ${now}
        WHERE id = ${id};
      `;
      return true;
    } catch (err) {
      console.error("[DB] Neon update quotation error:", err);
    }
  }

  const idx = memoryQuotations.findIndex((q) => q.id === id);
  if (idx !== -1) {
    memoryQuotations[idx] = {
      ...memoryQuotations[idx],
      ...updates,
      updatedAt: now,
    };
    return true;
  }
  return false;
}

export async function deleteQuotation(id: string): Promise<boolean> {
  if (dbUrl) {
    try {
      await ensureTables();
      const sql = neon(dbUrl);
      await sql`DELETE FROM quotations WHERE id = ${id};`;
      return true;
    } catch (err) {
      console.error("[DB] Neon delete quotation error:", err);
    }
  }

  const idx = memoryQuotations.findIndex((q) => q.id === id);
  if (idx !== -1) {
    memoryQuotations.splice(idx, 1);
    return true;
  }
  return false;
}

// ----------------- CONTACTS -----------------

export async function saveContactEnquiry(data: ContactRecord): Promise<{ success: boolean; id: string; source: "neon" | "memory" }> {
  const generatedId = `contact_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
  const now = new Date().toISOString();

  const record: ContactRecord = {
    ...data,
    id: generatedId,
    status: data.status || "new",
    notes: data.notes || "",
    createdAt: now,
    updatedAt: now,
  };

  if (dbUrl) {
    try {
      await ensureTables();
      const sql = neon(dbUrl);
      await sql`
        INSERT INTO contacts (
          id, name, phone, email, subject, message, status, notes, created_at, updated_at
        ) VALUES (
          ${generatedId},
          ${record.name},
          ${record.phone},
          ${record.email || null},
          ${record.subject || null},
          ${record.message},
          ${record.status},
          ${record.notes},
          ${now},
          ${now}
        );
      `;
      return { success: true, id: generatedId, source: "neon" };
    } catch (err) {
      console.error("[DB] Neon insert contact error:", err);
    }
  }

  memoryContacts.unshift(record);
  return { success: true, id: generatedId, source: "memory" };
}

export async function getContacts(filters?: { status?: string; search?: string }): Promise<ContactRecord[]> {
  if (dbUrl) {
    try {
      await ensureTables();
      const sql = neon(dbUrl);
      const rows = await sql`
        SELECT 
          id, name, phone, email, subject, message, status, notes,
          created_at AS "createdAt", updated_at AS "updatedAt"
        FROM contacts
        ORDER BY created_at DESC;
      `;
      let results: ContactRecord[] = rows.map((r: any) => ({
        ...r,
        createdAt: r.createdAt ? new Date(r.createdAt).toISOString() : undefined,
        updatedAt: r.updatedAt ? new Date(r.updatedAt).toISOString() : undefined,
      }));

      if (filters?.status && filters.status !== "all") {
        results = results.filter((c) => c.status === filters.status);
      }
      if (filters?.search) {
        const query = filters.search.toLowerCase();
        results = results.filter(
          (c) =>
            c.name.toLowerCase().includes(query) ||
            c.phone.includes(query) ||
            (c.email && c.email.toLowerCase().includes(query)) ||
            (c.subject && c.subject.toLowerCase().includes(query)) ||
            c.message.toLowerCase().includes(query)
        );
      }
      return results;
    } catch (err) {
      console.error("[DB] Neon fetch contacts error, falling back to memory:", err);
    }
  }

  let list = [...memoryContacts];
  if (filters?.status && filters.status !== "all") {
    list = list.filter((c) => c.status === filters.status);
  }
  if (filters?.search) {
    const query = filters.search.toLowerCase();
    list = list.filter(
      (c) =>
        c.name.toLowerCase().includes(query) ||
        c.phone.includes(query) ||
        (c.email && c.email.toLowerCase().includes(query)) ||
        (c.subject && c.subject.toLowerCase().includes(query)) ||
        c.message.toLowerCase().includes(query)
    );
  }
  return list;
}

export async function updateContact(id: string, updates: Partial<ContactRecord>): Promise<boolean> {
  const now = new Date().toISOString();

  if (dbUrl) {
    try {
      await ensureTables();
      const sql = neon(dbUrl);
      await sql`
        UPDATE contacts 
        SET 
          status = COALESCE(${updates.status || null}, status),
          notes = COALESCE(${updates.notes !== undefined ? updates.notes : null}, notes),
          updated_at = ${now}
        WHERE id = ${id};
      `;
      return true;
    } catch (err) {
      console.error("[DB] Neon update contact error:", err);
    }
  }

  const idx = memoryContacts.findIndex((c) => c.id === id);
  if (idx !== -1) {
    memoryContacts[idx] = {
      ...memoryContacts[idx],
      ...updates,
      updatedAt: now,
    };
    return true;
  }
  return false;
}

export async function deleteContact(id: string): Promise<boolean> {
  if (dbUrl) {
    try {
      await ensureTables();
      const sql = neon(dbUrl);
      await sql`DELETE FROM contacts WHERE id = ${id};`;
      return true;
    } catch (err) {
      console.error("[DB] Neon delete contact error:", err);
    }
  }

  const idx = memoryContacts.findIndex((c) => c.id === id);
  if (idx !== -1) {
    memoryContacts.splice(idx, 1);
    return true;
  }
  return false;
}

// ----------------- ADMIN METRICS -----------------

export async function getAdminMetrics() {
  const quotes = await getQuotations();
  const contacts = await getContacts();

  const totalQuotes = quotes.length;
  const newQuotes = quotes.filter((q) => q.status === "new" || !q.status).length;
  const reviewingQuotes = quotes.filter((q) => q.status === "reviewing").length;
  const sentQuotes = quotes.filter((q) => q.status === "quote_sent").length;
  const wonQuotes = quotes.filter((q) => q.status === "won").length;
  const lostQuotes = quotes.filter((q) => q.status === "lost").length;

  const totalContacts = contacts.length;
  const newContacts = contacts.filter((c) => c.status === "new" || !c.status).length;

  // Services distribution
  const serviceCounts: Record<string, number> = {};
  quotes.forEach((q) => {
    (q.services || []).forEach((s) => {
      serviceCounts[s] = (serviceCounts[s] || 0) + 1;
    });
  });

  const popularServices = Object.entries(serviceCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([name, count]) => ({ name, count }));

  return {
    quotations: {
      total: totalQuotes,
      new: newQuotes,
      reviewing: reviewingQuotes,
      sent: sentQuotes,
      won: wonQuotes,
      lost: lostQuotes,
    },
    contacts: {
      total: totalContacts,
      new: newContacts,
    },
    popularServices,
    recentQuotations: quotes.slice(0, 5),
    recentContacts: contacts.slice(0, 5),
    dbConnected: !!dbUrl,
  };
}
