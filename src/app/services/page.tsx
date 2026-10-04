import type { Metadata } from "next";
import { servicesData } from "@/data/servicesData";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FinalCta } from "@/components/home/FinalCta";

export const metadata: Metadata = {
  title: "Services & Capabilities | RD Plumbing Solution",
  description:
    "Explore comprehensive plumbing, underground pipeline laying, stormwater drainage, sewer line installation, excavation and RCC chamber construction services in Chhattisgarh and pan-India.",
};

export default function ServicesHubPage() {
  return (
    <div className="bg-white">
      {/* Page Hero */}
      <section className="bg-corporate-grid bg-[#F5F9FF] border-b border-[#E2EAF4] py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: "Services" }]} />
          <div className="max-w-3xl mt-4">
            <span className="text-xs font-bold tracking-widest text-[#1769D2] uppercase bg-[#EAF4FF] px-3 py-1 rounded-full border border-[#d2e6fc] mb-3 inline-block">
              OUR CAPABILITIES
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#172B4D] tracking-tight">
              Comprehensive Plumbing & Civil Infrastructure Services
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#64748B] leading-relaxed">
              From subterranean utility corridors and stormwater trunk mains to high-precision building sanitary piping, RD Plumbing Solution delivers dependable execution across all sectors.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24 border-b border-[#E2EAF4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <FinalCta />
    </div>
  );
}
