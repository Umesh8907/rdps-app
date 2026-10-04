import type { Metadata } from "next";
import Link from "next/link";
import {
  MapPin,
  Navigation,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Building,
  Globe2,
} from "lucide-react";
import { areasData } from "@/data/areasData";
import { siteConfig } from "@/data/siteConfig";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { FinalCta } from "@/components/home/FinalCta";

export const metadata: Metadata = {
  title: "Areas We Serve | Chhattisgarh & Pan-India Coverage | RD Plumbing Solution",
  description:
    "Explore our operational service coverage across Naya Raipur, Raipur, Durg, Bhilai, Bilaspur, and nationwide infrastructure contracting across India.",
};

export default function AreasWeServePage() {
  return (
    <div className="bg-white">
      {/* Page Hero */}
      <section className="bg-corporate-grid bg-[#F5F9FF] border-b border-[#E2EAF4] py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: "Areas We Serve" }]} />
          <div className="max-w-3xl mt-4">
            <span className="text-xs font-bold tracking-widest text-[#1769D2] uppercase bg-[#EAF4FF] px-3 py-1 rounded-full border border-[#d2e6fc] mb-3 inline-block">
              SERVICE REGIONS & MOBILIZATION
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#172B4D] tracking-tight">
              Based in Chhattisgarh. Ready for Projects Across India.
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#64748B] leading-relaxed">
              With our operational base in Naya Raipur, we offer swift mobilization of technical crews and machinery across Chhattisgarh and accept infrastructure utility contracts nationwide.
            </p>
          </div>
        </div>
      </section>

      {/* Main Areas Grid */}
      <section className="py-16 lg:py-20 border-b border-[#E2EAF4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {areasData.map((area) => (
              <div
                key={area.id}
                id={area.id}
                className="scroll-mt-24 p-6 sm:p-8 rounded-3xl bg-[#F5F9FF] border border-[#E2EAF4] hover:border-[#1769D2] transition-colors"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Left Area Header */}
                  <div className="lg:col-span-4 space-y-3">
                    <div className="flex items-center gap-2">
                      <Badge variant={area.type === "Primary Base" ? "blue" : "outline"}>
                        {area.type}
                      </Badge>
                      <span className="text-xs font-semibold text-[#64748B]">
                        {area.region}
                      </span>
                    </div>

                    <h2 className="text-2xl font-extrabold text-[#172B4D]">
                      {area.name}
                    </h2>

                    <div className="p-3 rounded-xl bg-white border border-[#E2EAF4] text-xs font-semibold text-[#1769D2] flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0" />
                      <span>{area.highlight}</span>
                    </div>
                  </div>

                  {/* Middle Description & Key Services */}
                  <div className="lg:col-span-8 space-y-4">
                    <p className="text-sm text-[#475569] leading-relaxed">
                      {area.description}
                    </p>

                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#172B4D] mb-2">
                        Available Execution Services:
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {area.servicesAvailable.map((svc, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-2 text-xs text-[#172B4D] bg-white p-2.5 rounded-lg border border-[#E2EAF4]"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#1769D2]" />
                            <span>{svc}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {area.keyDistricts && (
                      <div className="pt-2">
                        <span className="text-xs font-bold text-[#64748B]">Key Districts: </span>
                        <span className="text-xs text-[#475569]">
                          {area.keyDistricts.join(" • ")}
                        </span>
                      </div>
                    )}
                  </div>

                </div>
              </div>
            ))}
          </div>

          {/* Location Clarification Card */}
          <div className="mt-12 p-6 rounded-2xl bg-white border border-[#E2EAF4] text-center max-w-2xl mx-auto shadow-xs">
            <p className="text-xs text-[#64748B]">
              <strong className="text-[#172B4D]">Notice:</strong> Our registered operational base is in Naya Raipur, Chhattisgarh. Services in other cities and states are executed via project-based site mobilization and specialized field crews.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <FinalCta />
    </div>
  );
}
