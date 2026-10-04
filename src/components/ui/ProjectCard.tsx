import Image from "next/image";
import Link from "next/link";
import { MapPin, ArrowRight, Activity, CheckCircle2 } from "lucide-react";
import { ProjectItem } from "@/data/projectsData";
import { Badge } from "./Badge";

interface ProjectCardProps {
  project: ProjectItem;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const isInProgress = project.status === "In Progress";

  return (
    <div className="group bg-white rounded-xl border border-[#E2EAF4] overflow-hidden flex flex-col h-full card-hover-effect">
      <div className="relative h-56 w-full bg-[#EAF4FF] overflow-hidden">
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 right-3 z-10">
          {isInProgress ? (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#EAF4FF]/95 text-[#1769D2] border border-[#3988E8]/40 shadow-sm backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-[#1769D2] animate-pulse" />
              In Progress
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#DCFCE7]/95 text-[#166534] border border-[#bbf7d0] shadow-sm backdrop-blur-sm">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#16A34A]" />
              Completed
            </span>
          )}
        </div>
        <div className="absolute bottom-3 left-3 z-10">
          <Badge variant="outline" className="bg-white/95 backdrop-blur-sm text-xs py-0.5 shadow-sm">
            {project.category}
          </Badge>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center text-xs text-[#64748B] mb-2 font-medium">
          <MapPin className="w-3.5 h-3.5 mr-1 text-[#1769D2] shrink-0" />
          <span>{project.location}</span>
        </div>

        <h3 className="text-lg font-bold text-[#172B4D] group-hover:text-[#1769D2] transition-colors mb-2 line-clamp-2">
          <Link href={`/projects/${project.slug}`}>
            {project.title}
          </Link>
        </h3>

        <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed mb-4 flex-grow line-clamp-2">
          {project.scopeSummary}
        </p>

        <div className="pt-4 border-t border-[#F3F8FF] flex items-center justify-between mt-auto">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center text-sm font-semibold text-[#1769D2] group-hover:text-[#124B9A] transition-all"
          >
            View Project Details
            <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
