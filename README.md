# RD Plumbing Solution — Corporate Website

A premium corporate website for **RD Plumbing Solution**, a plumbing, underground pipeline and civil infrastructure contractor based in Naya Raipur, Chhattisgarh, India.

Built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, **Lucide Icons**, and **Framer Motion**, featuring serverless PostgreSQL support via **Neon** and media management via **Cloudinary**.

---

## 🏗 Key Features

- **Strict Corporate Light Theme:** Blue (#1769D2) and white architectural visual styling with zero dark-mode compromises.
- **23 Structured Pages:**
  - **Home:** Split-hero, Trust strip, About, 9 Services, Featured Projects, Ongoing Projects, Why Choose Us, 5-Step Process, Worksites Gallery, Testimonials, Service Areas, 10 FAQs, and Final CTA.
  - **About Us:** Corporate profile, dual-capability focus, and field ethos.
  - **Services Hub & 9 Individual Service Detail Pages:** Comprehensive scopes, applications, execution approaches, technical FAQs, and project links.
  - **Projects Portfolio, Ongoing & Completed Pages:** Filterable project cards with status badges, technical scopes, and galleries.
  - **Interactive Worksites Gallery:** Masonry image layout, category filters, and an accessible Lightbox modal.
  - **Client Reputation:** Verified review framework adhering to strict data integrity.
  - **Frequently Asked Questions:** Searchable accordion with category filters.
  - **Areas We Serve:** Naya Raipur, Raipur, Durg, Bhilai, Bilaspur, Chhattisgarh, and Pan-India mobilization.
  - **Request a Quotation Portal:** Multi-section form with drawing/document attachment upload, validation, and direct WhatsApp sync.
  - **Contact Page & Privacy Policy.**
- **Local & National SEO:** Auto-generated `sitemap.xml`, `robots.txt`, OpenGraph tags, and JSON-LD schema (`LocalBusiness` & `Organization`).
- **Mobile First:** Sticky bottom action bar (Call, WhatsApp, Get Quote) and floating WhatsApp button.
- **Backend Ready:** Neon Serverless PostgreSQL integration for storing quotations and contact inquiries with graceful fallback in development.

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment Variables (Optional)
Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```

Configure:
- `DATABASE_URL` / `NEON_DATABASE_URL`: Neon PostgreSQL connection string.
- `NEXT_PUBLIC_WHATSAPP_NUMBER`: Official WhatsApp number.
- `NEXT_PUBLIC_CONTACT_PHONE`: Official business phone number.
- `NEXT_PUBLIC_CONTACT_EMAIL`: Inquiries email.

*(If database variables are not set, the application will operate seamlessly using memory/logging fallback mode).*

### 3. Run the Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Production Build
```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
src/
├── app/                  # Next.js App Router (Pages, Layouts, API routes, SEO)
│   ├── about/
│   ├── services/         # Hub & individual [slug] detail pages
│   ├── projects/         # Portfolio, ongoing, completed & individual [slug]
│   ├── gallery/
│   ├── testimonials/
│   ├── faqs/
│   ├── areas-we-serve/
│   ├── request-a-quotation/
│   ├── contact/
│   ├── privacy-policy/
│   ├── api/              # /api/quote, /api/contact, /api/gallery
│   ├── sitemap.ts
│   └── robots.ts
├── components/
│   ├── home/             # Homepage section components
│   ├── layout/           # Header, Footer, MobileStickyBar, FloatingWhatsApp, Breadcrumbs
│   ├── ui/               # Button, Badge, SectionHeading, ServiceCard, ProjectCard, Lightbox, etc.
│   ├── forms/            # QuoteForm, ContactForm
│   └── seo/              # JsonLd structured data
├── data/                 # Centralized business, services, projects, gallery, and FAQ data
└── lib/                  # Database (Neon), Cloudinary, and utility helpers
```
