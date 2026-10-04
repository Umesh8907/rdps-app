import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projectsData } from "@/data/projectsData";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export function FeaturedProjects() {
  const featured = projectsData.filter((p) => p.featured).slice(0, 3);

  return (
    <section className="py-16 lg:py-24 bg-white border-b border-[#E2EAF4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs font-bold tracking-widest text-[#1769D2] uppercase bg-[#EAF4FF] px-3 py-1 rounded-full border border-[#d2e6fc] mb-3 inline-block">
              OUR PROJECTS
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#172B4D] tracking-tight">
              Real Work. Practical Execution.
            </h2>
            <p className="mt-2 text-base text-[#64748B]">
              Showcasing underground pipelines, drainage corridors, and plumbing execution across worksites.
            </p>
          </div>

          <div className="mt-6 md:mt-0 shrink-0">
            <Button href="/projects" variant="outline" size="md">
              View All Projects
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
