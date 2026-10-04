import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, CheckCircle2, ShieldCheck, Compass, HardHat } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/siteConfig";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-corporate-grid bg-hero-radial py-12 lg:py-20 border-b border-[#E2EAF4]">
      {/* Subtle architectural ambient accent */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-[#EAF4FF] blur-3xl opacity-70 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Small Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF4FF] border border-[#d2e6fc]">
              <HardHat className="w-4 h-4 text-[#1769D2]" />
              <span className="text-xs font-bold tracking-widest text-[#1769D2] uppercase">
                PLUMBING • PIPELINE • INFRASTRUCTURE
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#172B4D] tracking-tight leading-[1.12]">
              Reliable Infrastructure.{" "}
              <span className="text-[#1769D2] inline-block">Seamless Flow.</span>
            </h1>

            {/* Supporting Paragraph */}
            <p className="text-base sm:text-lg text-[#64748B] leading-relaxed max-w-2xl">
              From underground pipeline installation and drainage networks to commercial and residential plumbing, RD Plumbing Solution delivers dependable execution for projects across Chhattisgarh and India.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
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
                href="/projects"
                variant="outline"
                size="lg"
                className="bg-white"
              >
                Explore Our Projects
              </Button>
            </div>

            {/* Supporting Location Bar */}
            <div className="pt-4 flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#475569]">
              <div className="w-6 h-6 rounded-full bg-[#EAF4FF] flex items-center justify-center text-[#1769D2] shrink-0">
                <MapPin className="w-3.5 h-3.5" />
              </div>
              <span>Naya Raipur, Chhattisgarh | Serving Across India</span>
            </div>
          </div>

          {/* Right Column: Hero Visual with Real Construction Image & Floating Tags */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Image Container */}
              <div className="relative h-[360px] sm:h-[460px] w-full rounded-2xl overflow-hidden border border-[#E2EAF4] shadow-xl bg-white p-2">
                <div className="relative h-full w-full rounded-xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=1200&q=80"
                    alt="Underground pipeline installation and infrastructure execution by RD Plumbing Solution"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#172B4D]/30 via-transparent to-transparent" />
                </div>
              </div>

              {/* Floating Card 1: Top Left */}
              <div className="absolute -top-4 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md rounded-xl p-3.5 shadow-lg border border-[#E2EAF4] flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#EAF4FF] flex items-center justify-center text-[#1769D2]">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#172B4D]">Underground Infrastructure</div>
                  <div className="text-[11px] text-[#64748B]">Pipelines • Drainage • Chambers</div>
                </div>
              </div>

              {/* Floating Card 2: Bottom Right */}
              <div className="absolute -bottom-4 -right-4 sm:-right-6 bg-white/95 backdrop-blur-md rounded-xl p-3.5 shadow-lg border border-[#E2EAF4] flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#DCFCE7] flex items-center justify-center text-[#16A34A]">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#172B4D]">Residential & Commercial</div>
                  <div className="text-[11px] text-[#64748B]">Practical On-Site Execution</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
