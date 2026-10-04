import { ArrowRight, MessageSquare, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/siteConfig";

export function FinalCta() {
  return (
    <section className="py-16 lg:py-24 bg-[#EAF4FF] border-b border-[#E2EAF4]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 lg:p-16 border border-[#d2e6fc] shadow-xl text-center relative overflow-hidden">
          {/* Subtle background element */}
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-[#F3F8FF] pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 rounded-full bg-[#F3F8FF] pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <span className="text-xs font-bold tracking-widest text-[#1769D2] uppercase bg-[#EAF4FF] px-3.5 py-1 rounded-full border border-[#d2e6fc] inline-block">
              GET IN TOUCH
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#172B4D] tracking-tight">
              Have a Project in Mind?
            </h2>

            <p className="text-base sm:text-lg text-[#64748B] leading-relaxed">
              Let&apos;s discuss your plumbing, pipeline or infrastructure requirements and identify the right execution approach.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Button
                href="/request-a-quotation"
                variant="primary"
                size="lg"
                className="shadow-md"
              >
                Request a Quotation
                <ArrowRight className="w-5 h-5 ml-1.5" />
              </Button>

              <Button
                href="/contact"
                variant="outline"
                size="lg"
                className="bg-white"
              >
                <PhoneCall className="w-4 h-4 mr-2 text-[#1769D2]" />
                Contact Us
              </Button>
            </div>

            <p className="text-xs text-[#64748B] pt-2">
              Fast response • Detailed BOQ breakdown • On-site level assessment
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
