import { servicesData } from "@/data/servicesData";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ServicesGrid() {
  return (
    <section className="py-16 lg:py-24 bg-[#F5F9FF] border-b border-[#E2EAF4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="OUR EXPERTISE"
          title="Comprehensive Plumbing & Infrastructure Solutions"
          description="Integrated services for underground utilities, drainage systems and building plumbing."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
