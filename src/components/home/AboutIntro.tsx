import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function AboutIntro() {
  return (
    <section className="py-16 lg:py-24 bg-white border-b border-[#E2EAF4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Image Stack */}
          <div className="lg:col-span-6 relative">
            <div className="relative h-[380px] sm:h-[460px] w-full rounded-2xl overflow-hidden border border-[#E2EAF4] shadow-md bg-[#F5F9FF]">
              <Image
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80"
                alt="RD Plumbing Solution engineering execution on site"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            {/* Small floating caption card */}
            <div className="absolute -bottom-6 right-4 sm:right-8 bg-white rounded-xl p-4 shadow-lg border border-[#E2EAF4] max-w-xs">
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#1769D2] shrink-0 mt-0.5" />
                <p className="text-xs text-[#475569] font-medium leading-relaxed">
                  Practical site coordination, level calibration & reliable contractor delivery.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-block">
              <span className="text-xs font-bold tracking-widest text-[#1769D2] uppercase bg-[#EAF4FF] px-3 py-1 rounded-full border border-[#d2e6fc]">
                WHO WE ARE
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#172B4D] tracking-tight leading-tight">
              Building the Systems That Keep Developments Moving.
            </h2>

            <p className="text-base sm:text-lg text-[#64748B] leading-relaxed">
              RD Plumbing Solution provides plumbing, pipeline installation and associated civil execution services for residential, commercial and infrastructure projects. Based in Naya Raipur, Chhattisgarh, the company aims to support projects through practical site execution, reliable coordination and quality-focused workmanship.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="flex items-center gap-2.5 text-sm text-[#172B4D] font-semibold">
                <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0" />
                <span>Underground Utilities</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-[#172B4D] font-semibold">
                <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0" />
                <span>Stormwater & Sewer Mains</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-[#172B4D] font-semibold">
                <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0" />
                <span>Civil Trenching & Chambers</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-[#172B4D] font-semibold">
                <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0" />
                <span>Pan-India Project Reach</span>
              </div>
            </div>

            <div className="pt-4">
              <Button href="/about" variant="primary" size="lg">
                Discover Our Company
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
