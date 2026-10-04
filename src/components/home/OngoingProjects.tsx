import Link from "next/link";
import { ArrowRight, Activity } from "lucide-react";
import { projectsData } from "@/data/projectsData";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export function OngoingProjects() {
  const ongoing = projectsData.filter((p) => p.status === "In Progress");

  return (
    <section className="py-16 lg:py-20 bg-[#F5F9FF] border-b border-[#E2EAF4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF4FF] border border-[#d2e6fc] mb-3">
              <span className="w-2 h-2 rounded-full bg-[#1769D2] animate-pulse" />
              <span className="text-xs font-bold tracking-widest text-[#1769D2] uppercase">
                CURRENT EXECUTION
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#172B4D] tracking-tight">
              Progress You Can See.
            </h2>
            <p className="mt-2 text-base text-[#64748B]">
              Active worksites currently under execution with regular on-site supervision and milestone tracking.
            </p>
          </div>

          <div className="mt-6 md:mt-0 shrink-0">
            <Button href="/projects/ongoing" variant="outline" size="md">
              View Ongoing Works
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Button>
          </div>
        </div>

        {ongoing.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ongoing.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-2xl border border-[#E2EAF4] p-8 max-w-lg mx-auto">
            <Activity className="w-10 h-10 text-[#1769D2] mx-auto mb-3" />
            <h3 className="text-lg font-bold text-[#172B4D]">No Active Ongoing Contracts Marked</h3>
            <p className="text-sm text-[#64748B] mt-1">
              New project execution phases will appear here as worksites are mobilized.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
