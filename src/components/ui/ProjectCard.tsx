import Image from "next/image";
import Link from "next/link";
import { MapPin, ArrowRight, CheckCircle2, Images, Building2 } from "lucide-react";
import { ProjectItem } from "@/data/projectsData";

interface ProjectCardProps {
  project: ProjectItem;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const isInProgress = project.status === "In Progress";
  const photoCount = project.galleryImages?.length || 1;

  return (
    <div className="group bg-white rounded-2xl border border-[#E2EAF4] hover:border-[#1769D2] shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full overflow-hidden">
      {/* Taller Cinematic Showcase Image Container */}
      <div className="relative h-56 sm:h-60 w-full bg-[#EAF4FF] overflow-hidden">
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Gradient dark scrim for readable badges & bottom location */}
        <div className="absolute inset-0 bg-linear-to-t from-[#172B4D]/90 via-[#172B4D]/25 to-black/30" />

        {/* Top Badges: Category on Left, Status on Right */}
        <div className="absolute top-3 inset-x-3 flex items-center justify-between z-10">
          <span className="inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-bold bg-[#172B4D]/85 text-white backdrop-blur-md border border-white/20 shadow-sm">
            {project.executionCategory || project.category}
          </span>

          {isInProgress ? (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#1769D2]/95 text-white border border-[#3988E8] shadow-sm backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-cyan-300 animate-pulse" />
              In Progress
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#16A34A]/95 text-white border border-emerald-400 shadow-sm backdrop-blur-md">
              <CheckCircle2 className="w-3.5 h-3.5 text-white" />
              Completed
            </span>
          )}
        </div>

        {/* Bottom of Photo: Location & Photos Counter */}
        <div className="absolute bottom-3 inset-x-3 z-10 flex items-end justify-between gap-2 text-white">
          <div className="flex items-center gap-1 text-xs font-medium bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10 max-w-[70%]">
            <MapPin className="w-3.5 h-3.5 text-[#3988E8] shrink-0" />
            <span className="truncate">{project.location}</span>
          </div>

          {photoCount > 1 && (
            <div className="flex items-center gap-1 text-[11px] font-semibold bg-black/40 backdrop-blur-md px-2 py-1 rounded-lg border border-white/10 shrink-0">
              <Images className="w-3 h-3 text-[#3988E8]" />
              <span>{photoCount} Photos</span>
            </div>
          )}
        </div>
      </div>

      {/* Card Content Body */}
      <div className="p-6 flex flex-col grow">
        {/* Client / Project Type Sub-headline */}
        {project.client && (
          <div className="flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wider text-[#64748B] mb-1.5">
            <Building2 className="w-3 h-3 text-[#1769D2]" />
            <span className="truncate">{project.client}</span>
          </div>
        )}

        {/* Project Title */}
        <h3 className="text-lg font-bold text-[#172B4D] group-hover:text-[#1769D2] transition-colors mb-2 line-clamp-2 leading-snug">
          <Link href={`/projects/${project.slug}`}>
            {project.title}
          </Link>
        </h3>

        {/* Scope Summary */}
        <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed mb-4 line-clamp-2 grow">
          {project.scopeSummary}
        </p>

        {/* Highlight Callout Pill */}
        {project.keyHighlights && project.keyHighlights.length > 0 && (
          <div className="mb-4 text-xs font-medium text-[#172B4D] bg-[#F5F9FF] border-l-2 border-[#1769D2] px-3 py-1.5 rounded-r-lg truncate">
            {project.keyHighlights[0]}
          </div>
        )}

        {/* Action Button */}
        <div className="pt-3 border-t border-[#F3F8FF] mt-auto">
          <Link
            href={`/projects/${project.slug}`}
            className="w-full py-2 px-3 rounded-xl bg-[#F5F9FF] group-hover:bg-[#1769D2] text-[#1769D2] group-hover:text-white flex items-center justify-between text-xs font-bold transition-all duration-200"
          >
            <span>View Case Study</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
