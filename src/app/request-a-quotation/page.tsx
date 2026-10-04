import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { ShieldCheck, FileSpreadsheet, Clock, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Request a Project Quotation | RD Plumbing Solution",
  description:
    "Submit your plumbing, underground pipeline, or stormwater drainage requirements for a transparent, itemized quotation from our engineering team.",
};

export default function RequestQuotationPage() {
  return (
    <div className="bg-white">
      {/* Page Hero */}
      <section className="bg-corporate-grid bg-[#F5F9FF] border-b border-[#E2EAF4] py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: "Request a Quotation" }]} />
          <div className="max-w-3xl mt-4">
            <span className="text-xs font-bold tracking-widest text-[#1769D2] uppercase bg-[#EAF4FF] px-3 py-1 rounded-full border border-[#d2e6fc] mb-3 inline-block">
              PROJECT ESTIMATION PORTAL
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#172B4D] tracking-tight">
              Tell Us About Your Project
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#64748B] leading-relaxed">
              Share your requirements, upload project drawings or BOQ sheets, and our technical team will review the scope and discuss the next steps.
            </p>
          </div>
        </div>
      </section>

      {/* Main Quotation Form Area */}
      <section className="py-12 lg:py-20 border-b border-[#E2EAF4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Trust Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <div className="p-4 rounded-xl bg-[#F5F9FF] border border-[#E2EAF4] flex items-center gap-3">
              <Clock className="w-5 h-5 text-[#1769D2] shrink-0" />
              <div>
                <div className="text-xs font-bold text-[#172B4D]">24-Hour Review</div>
                <div className="text-[11px] text-[#64748B]">Prompt response from engineers</div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#F5F9FF] border border-[#E2EAF4] flex items-center gap-3">
              <FileSpreadsheet className="w-5 h-5 text-[#1769D2] shrink-0" />
              <div>
                <div className="text-xs font-bold text-[#172B4D]">Itemized BOQ</div>
                <div className="text-[11px] text-[#64748B]">Transparent scope breakdowns</div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#F5F9FF] border border-[#E2EAF4] flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-[#1769D2] shrink-0" />
              <div>
                <div className="text-xs font-bold text-[#172B4D]">Confidential</div>
                <div className="text-[11px] text-[#64748B]">Strict privacy protection</div>
              </div>
            </div>
          </div>

          {/* Multi-Section Quotation Form */}
          <QuoteForm />
        </div>
      </section>
    </div>
  );
}
