import type { Metadata } from "next";
import { projectsData } from "@/data/projectsData";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { FinalCta } from "@/components/home/FinalCta";

export const metadata: Metadata = {
  title: "Ongoing Infrastructure Projects | RD Plumbing Solution",
  description:
    "Explore current worksites and ongoing underground pipeline, stormwater drainage and plumbing execution contracts.",
};

export default function OngoingProjectsPage() {
  const ongoingProjects = projectsData.filter((p) => p.status === "In Progress");

  return (
    <div className="bg-white">
      <section className="bg-corporate-grid bg-[#F5F9FF] border-b border-[#E2EAF4] py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { name: "Projects", href: "/projects" },
              { name: "Ongoing Execution" },
            ]}
          />
          <div className="max-w-3xl mt-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF4FF] border border-[#d2e6fc] mb-3">
              <span className="w-2 h-2 rounded-full bg-[#1769D2] animate-pulse" />
              <span className="text-xs font-bold tracking-widest text-[#1769D2] uppercase">
                ACTIVE WORKSITES
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#172B4D] tracking-tight">
              Ongoing Infrastructure Execution
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#64748B] leading-relaxed">
              Real-time snapshot of active projects where trench excavation, pipeline alignment, chamber construction, and plumbing works are underway.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 border-b border-[#E2EAF4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ongoingProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      <FinalCta />
    </div>
  );
}
