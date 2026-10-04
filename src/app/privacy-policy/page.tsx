import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Privacy Policy | RD Plumbing Solution",
  description: "Privacy policy and data handling information for RD Plumbing Solution.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white">
      <section className="bg-corporate-grid bg-[#F5F9FF] border-b border-[#E2EAF4] py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: "Privacy Policy" }]} />
          <div className="max-w-3xl mt-4">
            <h1 className="text-3xl sm:text-4xl font-black text-[#172B4D] tracking-tight">
              Privacy Policy
            </h1>
            <p className="mt-2 text-sm text-[#64748B]">
              Last updated: {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 border-b border-[#E2EAF4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate max-w-none space-y-8 text-sm sm:text-base text-[#475569] leading-relaxed">
          <div>
            <h2 className="text-xl font-bold text-[#172B4D] mb-3">1. Information We Collect</h2>
            <p>
              When you submit a quotation request, project enquiry, or contact form on the {siteConfig.name} website, we collect information such as your name, telephone number, email address, company affiliation, project location, drawings, and scope specifications.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#172B4D] mb-3">2. How We Use Your Information</h2>
            <p>
              We use the collected information exclusively to evaluate project feasibility, prepare itemized quotations, communicate technical recommendations, coordinate on-site assessments, and execute contracting services.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#172B4D] mb-3">3. Data Protection & Confidentiality</h2>
            <p>
              We treat all architectural layouts, engineering drawings, BOQs, and customer contact details with strict confidentiality. We do not sell, rent, or trade your personal or project data with unauthorized third parties.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#172B4D] mb-3">4. Communication Channels</h2>
            <p>
              By submitting your telephone number or contacting us via WhatsApp, you consent to receive direct project updates, quotation documents, and site coordination messages from our authorized personnel.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#172B4D] mb-3">5. Contact Information</h2>
            <p>
              If you have any questions regarding this Privacy Policy or wish to request data updates, please contact us at:
            </p>
            <p className="font-semibold text-[#172B4D] mt-2">
              RD Plumbing Solution<br />
              Naya Raipur, Chhattisgarh, India<br />
              Email: {siteConfig.contact.email}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
