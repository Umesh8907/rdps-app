import type { Metadata } from "next";
import { projectsData } from "@/data/projectsData";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { FinalCta } from "@/components/home/FinalCta";

export const metadata: Metadata = {
  title: "Completed Projects | RD Plumbing Solution",
  description:
    "Explore successfully delivered underground pipeline networks, stormwater drainage, and commercial plumbing projects.",
};

export default function CompletedProjectsPage() {
  const completedProjects = projectsData.filter((p) => p.status === "Completed");

  return (
    <div className="bg-white">
      <section className="bg-corporate-grid bg-[#F5F9FF] border-b border-[#E2EAF4] py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { name: "Projects", href: "/projects" },
              { name: "Completed Works" },
            ]}
          />
          <div className="max-w-3xl mt-4">
            <span className="text-xs font-bold tracking-widest text-[#16A34A] uppercase bg-[#DCFCE7] px-3 py-1 rounded-full border border-[#bbf7d0] mb-3 inline-block">
              DELIVERED INFRASTRUCTURE
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#172B4D] tracking-tight">
              Completed Projects & Handed Over Systems
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#64748B] leading-relaxed">
              Showcasing delivered underground pipeline networks, gravity sewerage mains, and building plumbing systems operating reliably.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 border-b border-[#E2EAF4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {completedProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      <FinalCta />
    </div>
  );
}
