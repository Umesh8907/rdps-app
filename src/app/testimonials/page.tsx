import type { Metadata } from "next";
import { ShieldCheck, CheckCircle2, MessageSquare, Award } from "lucide-react";
import { testimonialsData } from "@/data/testimonialsData";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { FinalCta } from "@/components/home/FinalCta";

export const metadata: Metadata = {
  title: "Client Feedback & Reputation | RD Plumbing Solution",
  description:
    "Read genuine project feedback, completion certificates, and client sign-offs from our worksites across Chhattisgarh.",
};

export default function TestimonialsPage() {
  return (
    <div className="bg-white">
      {/* Page Hero */}
      <section className="bg-corporate-grid bg-[#F5F9FF] border-b border-[#E2EAF4] py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: "Testimonials" }]} />
          <div className="max-w-3xl mt-4">
            <span className="text-xs font-bold tracking-widest text-[#1769D2] uppercase bg-[#EAF4FF] px-3 py-1 rounded-full border border-[#d2e6fc] mb-3 inline-block">
              CLIENT REPUTATION
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#172B4D] tracking-tight">
              Trusted Through Workmanship and Collaboration
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#64748B] leading-relaxed">
              We build long-term relationships with project owners, builders, and developers through accountable field execution, technical precision, and clear communication.
            </p>
          </div>
        </div>
      </section>

      {/* Main Reviews Section */}
      <section className="py-16 lg:py-20 border-b border-[#E2EAF4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {testimonialsData.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonialsData.map((t) => (
                <div
                  key={t.id}
                  className="bg-white p-8 rounded-2xl border border-[#E2EAF4] shadow-sm flex flex-col justify-between"
                >
                  <p className="text-sm text-[#475569] leading-relaxed italic mb-6">
                    &ldquo;{t.feedback}&rdquo;
                  </p>
                  <div className="border-t border-[#F3F8FF] pt-4 flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-[#172B4D]">
                        {t.clientName}
                      </h4>
                      <p className="text-xs text-[#64748B]">
                        {t.companyName || t.projectCategory} • {t.location}
                      </p>
                    </div>
                    {t.isVerified && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#16A34A] bg-[#DCFCE7] px-2 py-0.5 rounded-full">
                        <CheckCircle2 className="w-3 h-3" /> Verified
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-[#F5F9FF] rounded-3xl border border-[#E2EAF4] p-8 sm:p-14 text-center max-w-3xl mx-auto shadow-sm">
              <div className="w-16 h-16 rounded-2xl bg-white text-[#1769D2] flex items-center justify-center mx-auto mb-5 border border-[#E2EAF4] shadow-xs">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black text-[#172B4D] mb-3">
                Verified Project Testimonials & Sign-Offs
              </h3>
              <p className="text-sm sm:text-base text-[#64748B] leading-relaxed mb-8 max-w-xl mx-auto">
                RD Plumbing Solution is dedicated to maintaining high standards of data integrity. Genuine customer reviews, engineer endorsements, and project performance certificates are currently being compiled and will be added here as client approvals are received.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button href="/request-a-quotation" variant="primary" size="lg">
                  Submit a Project Quotation
                </Button>
                <Button href="/contact" variant="outline" size="lg" className="bg-white">
                  Contact Our Office
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Final CTA */}
      <FinalCta />
    </div>
  );
}
