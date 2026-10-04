import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Building,
  HelpCircle,
  FolderKanban,
  Layers,
  FileCheck,
} from "lucide-react";
import { servicesData, ServiceItem } from "@/data/servicesData";
import { projectsData } from "@/data/projectsData";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { FinalCta } from "@/components/home/FinalCta";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);
  if (!service) return { title: "Service Not Found" };

  return {
    title: `${service.title} | RD Plumbing Solution`,
    description: service.shortDescription,
    keywords: [service.title, "Raipur", "Naya Raipur", "Chhattisgarh", "Infrastructure Contractor"],
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  // Related projects
  const relatedProjects = projectsData.filter((p) =>
    service.relatedProjects.includes(p.id)
  );

  // Related other services (3 other services)
  const otherServices = servicesData.filter((s) => s.id !== service.id).slice(0, 3);

  return (
    <div className="bg-white">
      {/* 1 & 2. Breadcrumbs & Service Hero */}
      <section className="bg-corporate-grid bg-[#F5F9FF] border-b border-[#E2EAF4] py-10 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { name: "Services", href: "/services" },
              { name: service.title },
            ]}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mt-6">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold tracking-widest text-[#1769D2] uppercase bg-[#EAF4FF] px-3.5 py-1 rounded-full border border-[#d2e6fc] inline-block">
                SERVICE CAPABILITY
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#172B4D] tracking-tight">
                {service.headline}
              </h1>
              <p className="text-base sm:text-lg text-[#64748B] leading-relaxed">
                {service.introduction}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <Button href="/request-a-quotation" variant="primary" size="lg">
                  Request Quotation For This Service
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button href="/contact" variant="outline" size="lg" className="bg-white">
                  Consult an Engineer
                </Button>
              </div>
            </div>

            {/* Service Hero Photograph */}
            <div className="lg:col-span-5">
              <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden border border-[#E2EAF4] shadow-md bg-white p-2">
                <div className="relative h-full w-full rounded-xl overflow-hidden">
                  <Image
                    src={service.heroImage}
                    alt={service.title}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6 & 7. Detailed Service Scope and Applications */}
      <section className="py-16 lg:py-20 border-b border-[#E2EAF4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Scope Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2 text-[#1769D2]">
                <Layers className="w-5 h-5" />
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#172B4D]">
                  Detailed Scope of Work
                </h2>
              </div>
              <p className="text-sm text-[#64748B]">
                Our standard execution scope covers end-to-end technical procedures aligned with project drawings and civil benchmarks:
              </p>

              <div className="space-y-3">
                {service.scope.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-3.5 rounded-xl bg-[#F5F9FF] border border-[#E2EAF4]"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#1769D2] shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-[#172B4D]">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Applications Column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center gap-2 text-[#1769D2]">
                <Building className="w-5 h-5" />
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#172B4D]">
                  Applications & Project Types
                </h2>
              </div>
              <p className="text-sm text-[#64748B]">
                Tailored execution for real estate, commercial, municipal, and industrial developments:
              </p>

              <div className="space-y-3">
                {service.applications.map((app, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-xl bg-white border border-[#E2EAF4] hover:border-[#1769D2] transition-colors shadow-xs"
                  >
                    <h4 className="text-sm font-bold text-[#172B4D] flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#1769D2]" />
                      {app}
                    </h4>
                  </div>
                ))}
              </div>

              {/* Quotation Quick Box */}
              <div className="p-6 rounded-2xl bg-[#EAF4FF] border border-[#d2e6fc] space-y-3 mt-6">
                <h4 className="text-base font-bold text-[#172B4D]">
                  Need a Customized BOQ for {service.title}?
                </h4>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  Share your drawings or pipe schedule for an itemized quotation tailored to your site location.
                </p>
                <Button href="/request-a-quotation" variant="primary" size="md" className="w-full">
                  Submit BOQ for Review
                </Button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 8. Execution Approach */}
      <section className="py-16 lg:py-20 bg-[#F5F9FF] border-b border-[#E2EAF4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold tracking-widest text-[#1769D2] uppercase bg-[#EAF4FF] px-3 py-1 rounded-full border border-[#d2e6fc] mb-3 inline-block">
              METHODOLOGY
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#172B4D]">
              Execution Approach & Quality Steps
            </h2>
            <p className="mt-2 text-sm text-[#64748B]">
              Standardized step-by-step procedures ensuring precision, safety, and longevity.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.executionApproach.map((step, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-[#E2EAF4] hover:border-[#1769D2] transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 rounded-lg bg-[#EAF4FF] text-[#1769D2] font-black text-sm flex items-center justify-center mb-4">
                    {idx + 1}
                  </div>
                  <h3 className="text-base font-bold text-[#172B4D] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-16 lg:py-20 bg-white border-b border-[#E2EAF4]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10">
              <div>
                <span className="text-xs font-bold tracking-widest text-[#1769D2] uppercase bg-[#EAF4FF] px-3 py-1 rounded-full border border-[#d2e6fc] mb-2 inline-block">
                  REPRESENTATIVE WORKS
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#172B4D]">
                  Related Projects & Case Studies
                </h2>
              </div>
              <div className="mt-4 sm:mt-0">
                <Button href="/projects" variant="outline" size="sm">
                  View All Projects
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 10. Relevant FAQs */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="py-16 lg:py-20 bg-[#F5F9FF] border-b border-[#E2EAF4]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <span className="text-xs font-bold tracking-widest text-[#1769D2] uppercase bg-[#EAF4FF] px-3 py-1 rounded-full border border-[#d2e6fc] mb-2 inline-block">
                TECHNICAL FAQS
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#172B4D]">
                Frequently Asked Questions for {service.title}
              </h2>
            </div>

            <FaqAccordion
              items={service.faqs.map((f, i) => ({
                id: `svc-faq-${i}`,
                question: f.question,
                answer: f.answer,
                category: "Services",
              }))}
            />
          </div>
        </section>
      )}

      {/* 11. Related Services */}
      <section className="py-16 bg-white border-b border-[#E2EAF4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-xl font-bold text-[#172B4D] mb-8 text-center">
            Other Infrastructure Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherServices.map((other) => (
              <div
                key={other.id}
                className="p-6 rounded-2xl bg-[#F5F9FF] border border-[#E2EAF4] hover:border-[#3988E8] transition-colors flex flex-col justify-between"
              >
                <div>
                  <h4 className="text-base font-bold text-[#172B4D] mb-2">
                    {other.title}
                  </h4>
                  <p className="text-xs text-[#64748B] line-clamp-2 mb-4">
                    {other.shortDescription}
                  </p>
                </div>
                <Link
                  href={`/services/${other.slug}`}
                  className="text-xs font-bold text-[#1769D2] hover:underline inline-flex items-center gap-1"
                >
                  View Details <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. Quotation CTA */}
      <FinalCta />
    </div>
  );
}
