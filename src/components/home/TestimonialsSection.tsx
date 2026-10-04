import { MessageSquare, ShieldCheck, CheckCircle2 } from "lucide-react";
import { testimonialsData } from "@/data/testimonialsData";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export function TestimonialsSection() {
  return (
    <section className="py-16 lg:py-24 bg-[#F5F9FF] border-b border-[#E2EAF4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="CLIENT REPUTATION"
          title="Trusted Through Workmanship and Collaboration"
          description="Built on clear communication, technical adherence to drawings, and accountable field execution."
        />

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
          <div className="bg-white rounded-2xl border border-[#E2EAF4] p-8 sm:p-12 text-center max-w-2xl mx-auto shadow-sm">
            <div className="w-14 h-14 rounded-2xl bg-[#EAF4FF] text-[#1769D2] flex items-center justify-center mx-auto mb-4 border border-[#d2e6fc]">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-[#172B4D] mb-2">
              Verified Client Sign-Offs & Reviews
            </h3>
            <p className="text-sm text-[#64748B] leading-relaxed mb-6">
              RD Plumbing Solution values authenticated feedback. Client performance certificates and verified reviews for recently completed drainage and pipeline contracts will be published as project documentation is finalized.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button href="/contact" variant="outline" size="md">
                Contact Our Team
              </Button>
              <Button href="/request-a-quotation" variant="primary" size="md">
                Discuss Your Project
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
