import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Target,
  Compass,
  Building,
  Network,
  Users,
  CheckCircle2,
  ArrowRight,
  HardHat,
} from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FinalCta } from "@/components/home/FinalCta";

export const metadata: Metadata = {
  title: "About Us | RD Plumbing Solution",
  description:
    "Learn about RD Plumbing Solution, an engineering-oriented plumbing and underground infrastructure contractor based in Naya Raipur, Chhattisgarh.",
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Page Hero */}
      <section className="bg-corporate-grid bg-[#F5F9FF] border-b border-[#E2EAF4] py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: "About Us" }]} />
          <div className="max-w-3xl mt-4">
            <span className="text-xs font-bold tracking-widest text-[#1769D2] uppercase bg-[#EAF4FF] px-3 py-1 rounded-full border border-[#d2e6fc] mb-3 inline-block">
              ABOUT OUR COMPANY
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#172B4D] tracking-tight">
              Practical Execution. Reliable Infrastructure.
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#64748B] leading-relaxed">
              RD Plumbing Solution provides specialized contracting for underground pipeline installation, stormwater drainage networks, civil chamber construction, and complete residential and commercial plumbing systems.
            </p>
          </div>
        </div>
      </section>

      {/* Main Company Profile & Split Layout */}
      <section className="py-16 lg:py-20 border-b border-[#E2EAF4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#172B4D] tracking-tight">
                Our Operational Focus
              </h2>

              <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">
                Headquartered in Naya Raipur, Chhattisgarh, RD Plumbing Solution was founded to bring disciplined, engineering-focused site execution to underground utility works and building sanitary installations.
              </p>

              <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">
                Underground utility pipelines represent one of the most critical phases in any real estate or civil development. Subterranean errors can lead to costly rework, waterlogging, or foundation settlement. We focus heavily on correct invert gradients, pressure-tested pipe joints, and compacted granular bedding to ensure long-term hydraulic performance.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#16A34A] shrink-0 mt-0.5" />
                  <p className="text-sm text-[#172B4D] font-medium">
                    <strong>Rigorous Level Calibration:</strong> Laser and optical level verification at every trench and manhole station.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#16A34A] shrink-0 mt-0.5" />
                  <p className="text-sm text-[#172B4D] font-medium">
                    <strong>Direct Site Supervision:</strong> Hands-on technical crew coordination for smooth progress without project delays.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#16A34A] shrink-0 mt-0.5" />
                  <p className="text-sm text-[#172B4D] font-medium">
                    <strong>Transparent BOQ Estimation:</strong> Comprehensive itemized pricing based on verified quantities and project drawings.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative h-[420px] rounded-2xl overflow-hidden border border-[#E2EAF4] shadow-md bg-[#F5F9FF]">
                <Image
                  src="https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=1200&q=80"
                  alt="RD Plumbing Solution field operations and infrastructure"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Dual Capability Focus: Residential & Commercial vs. Underground Infrastructure */}
      <section className="py-16 lg:py-20 bg-[#F5F9FF] border-b border-[#E2EAF4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="CAPABILITY DOMAINS"
            title="Two Specialized Execution Wings"
            description="Clear separation of expertise tailored to large civil utility corridors and building plumbing requirements."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Wing 1 */}
            <div className="bg-white rounded-2xl p-8 border border-[#E2EAF4] shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#EAF4FF] flex items-center justify-center text-[#1769D2] mb-6">
                  <Network className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#172B4D] mb-3">
                  Underground Infrastructure Contracting
                </h3>
                <p className="text-sm text-[#64748B] leading-relaxed mb-6">
                  Large-scale excavation, trench shoring, DWC corrugated stormwater drainage pipelines, gravity sewer trunk lines, HDPE butt-fusion potable water supply, and reinforced concrete manholes and chambers.
                </p>
                <ul className="space-y-2 text-xs sm:text-sm text-[#475569]">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1769D2]" />
                    Township utility trunk networks
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1769D2]" />
                    Industrial facility water supply and drainage
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1769D2]" />
                    Roadside stormwater channels and catch pits
                  </li>
                </ul>
              </div>
              <div className="pt-6 mt-6 border-t border-[#F3F8FF]">
                <Link
                  href="/services/underground-pipeline-installation"
                  className="text-xs font-bold text-[#1769D2] hover:text-[#124B9A] inline-flex items-center gap-1"
                >
                  Explore Underground Solutions <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Wing 2 */}
            <div className="bg-white rounded-2xl p-8 border border-[#E2EAF4] shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#DCFCE7] flex items-center justify-center text-[#16A34A] mb-6">
                  <Building className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#172B4D] mb-3">
                  Building & Sanitary Plumbing
                </h3>
                <p className="text-sm text-[#64748B] leading-relaxed mb-6">
                  Internal and external sanitary plumbing for multi-unit residential housing societies, private bungalows, commercial offices, retail centers, and institutional developments.
                </p>
                <ul className="space-y-2 text-xs sm:text-sm text-[#475569]">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A]" />
                    Concealed CPVC/PPR hot & cold water piping
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A]" />
                    Vertical soil, waste and vent (S.W.V.) stacks
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A]" />
                    Underground sump and booster pump automation
                  </li>
                </ul>
              </div>
              <div className="pt-6 mt-6 border-t border-[#F3F8FF]">
                <Link
                  href="/services/commercial-plumbing"
                  className="text-xs font-bold text-[#1769D2] hover:text-[#124B9A] inline-flex items-center gap-1"
                >
                  Explore Building Plumbing <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With RD Section */}
      <section className="py-16 lg:py-20 bg-white border-b border-[#E2EAF4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="OUR WORK ETHOS"
            title="Why Work With RD Plumbing Solution"
            description="Rooted in transparency, punctuality, and uncompromising attention to engineering details."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-[#F5F9FF] border border-[#E2EAF4]">
              <HardHat className="w-8 h-8 text-[#1769D2] mb-3" />
              <h4 className="text-base font-bold text-[#172B4D] mb-1">Skilled Field Crews</h4>
              <p className="text-xs sm:text-sm text-[#64748B]">Trained technicians experienced in trench excavation, butt-fusion, and high-pressure fitting.</p>
            </div>

            <div className="p-6 rounded-xl bg-[#F5F9FF] border border-[#E2EAF4]">
              <Compass className="w-8 h-8 text-[#1769D2] mb-3" />
              <h4 className="text-base font-bold text-[#172B4D] mb-1">Gradient Accuracy</h4>
              <p className="text-xs sm:text-sm text-[#64748B]">Zero guesswork on gravity sewer and stormwater lines to eliminate future blockages.</p>
            </div>

            <div className="p-6 rounded-xl bg-[#F5F9FF] border border-[#E2EAF4]">
              <Target className="w-8 h-8 text-[#1769D2] mb-3" />
              <h4 className="text-base font-bold text-[#172B4D] mb-1">Milestone Accountability</h4>
              <p className="text-xs sm:text-sm text-[#64748B]">Structured phased execution aligned with general construction progress.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <FinalCta />
    </div>
  );
}
