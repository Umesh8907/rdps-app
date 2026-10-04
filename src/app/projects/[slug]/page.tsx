import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Building,
  Layers,
  Calendar,
  Activity,
} from "lucide-react";
import { projectsData, ProjectItem } from "@/data/projectsData";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Badge } from "@/components/ui/Badge";
import { FinalCta } from "@/components/home/FinalCta";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} | RD Plumbing Solution`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const isInProgress = project.status === "In Progress";
  const otherProjects = projectsData.filter((p) => p.id !== project.id).slice(0, 3);

  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="bg-corporate-grid bg-[#F5F9FF] border-b border-[#E2EAF4] py-10 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { name: "Projects", href: "/projects" },
              { name: project.title },
            ]}
          />

          <div className="max-w-4xl mt-6 space-y-4">
            <div className="flex flex-wrap items-center gap-2.5">
              {isInProgress ? (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#EAF4FF] text-[#1769D2] border border-[#3988E8]/40 shadow-xs">
                  <span className="w-2 h-2 rounded-full bg-[#1769D2] animate-pulse" />
                  Execution In Progress
                </span>
              ) : (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#DCFCE7] text-[#166534] border border-[#bbf7d0] shadow-xs">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#16A34A]" />
                  Delivered & Completed
                </span>
              )}

              <Badge variant="outline" className="text-xs">
                {project.category}
              </Badge>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#172B4D] tracking-tight">
              {project.title}
            </h1>

            <div className="flex items-center gap-2 text-sm text-[#64748B] font-medium pt-1">
              <MapPin className="w-4 h-4 text-[#1769D2] shrink-0" />
              <span>{project.location}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content & Gallery */}
      <section className="py-16 lg:py-20 border-b border-[#E2EAF4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column: Details, Scope & Gallery */}
            <div className="lg:col-span-8 space-y-10">
              {/* Primary Cover Image */}
              <div className="relative h-[360px] sm:h-[460px] rounded-2xl overflow-hidden border border-[#E2EAF4] shadow-md bg-[#F5F9FF]">
                <Image
                  src={project.coverImage}
                  alt={project.title}
                  fill
                  priority
                  sizes="(max-width: 1200px) 100vw, 800px"
                  className="object-cover"
                />
              </div>

              {/* Project Description */}
              <div className="space-y-4">
                <h2 className="text-2xl font-extrabold text-[#172B4D]">
                  Project Overview & Objectives
                </h2>
                <p className="text-base text-[#64748B] leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Detailed Scope */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#172B4D] flex items-center gap-2">
                  <Layers className="w-5 h-5 text-[#1769D2]" />
                  Execution Scope of Work
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.detailedScope.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-[#F5F9FF] border border-[#E2EAF4] flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5" />
                      <span className="text-sm font-medium text-[#172B4D]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Execution Highlights */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#172B4D] flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-[#1769D2]" />
                  Technical Highlights
                </h3>
                <div className="space-y-2.5">
                  {project.keyHighlights.map((hl, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-white border border-[#E2EAF4] flex items-center gap-3 text-sm text-[#475569]"
                    >
                      <span className="w-2 h-2 rounded-full bg-[#1769D2]" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Project Image Gallery */}
              {project.galleryImages && project.galleryImages.length > 1 && (
                <div className="space-y-4 pt-4">
                  <h3 className="text-xl font-bold text-[#172B4D]">
                    Worksite Photographs
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {project.galleryImages.map((img, idx) => (
                      <div
                        key={idx}
                        className="relative h-60 rounded-xl overflow-hidden border border-[#E2EAF4] bg-[#F5F9FF]"
                      >
                        <Image
                          src={img}
                          alt={`${project.title} photo ${idx + 1}`}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-cover hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Column: Project Summary Card & Quotation Trigger */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-[#F5F9FF] rounded-2xl p-6 border border-[#E2EAF4] space-y-5">
                <h3 className="text-lg font-bold text-[#172B4D] border-b border-[#E2EAF4] pb-3">
                  Project Summary
                </h3>

                <div className="space-y-3.5 text-xs sm:text-sm">
                  <div>
                    <span className="text-[#64748B] block text-xs">Category</span>
                    <span className="font-bold text-[#172B4D]">{project.category}</span>
                  </div>

                  <div>
                    <span className="text-[#64748B] block text-xs">Location</span>
                    <span className="font-bold text-[#172B4D]">{project.location}</span>
                  </div>

                  <div>
                    <span className="text-[#64748B] block text-xs">Current Status</span>
                    <span className="font-bold text-[#172B4D]">{project.status}</span>
                  </div>

                  <div>
                    <span className="text-[#64748B] block text-xs">Domain</span>
                    <span className="font-bold text-[#172B4D]">{project.executionCategory}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E2EAF4] space-y-2.5">
                  <Button
                    href="/request-a-quotation"
                    variant="primary"
                    size="md"
                    className="w-full justify-center"
                  >
                    Request Similar Project Quote
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                  <Button
                    href="/contact"
                    variant="outline"
                    size="md"
                    className="w-full justify-center bg-white"
                  >
                    Discuss With Engineer
                  </Button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Related Projects */}
      {otherProjects.length > 0 && (
        <section className="py-16 bg-[#F5F9FF] border-b border-[#E2EAF4]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-xl sm:text-2xl font-bold text-[#172B4D] mb-8 text-center">
              Other Featured Projects
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {otherProjects.map((p) => (
                <ProjectCard key={p.id} project={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Final CTA */}
      <FinalCta />
    </div>
  );
}
