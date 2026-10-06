import Image from "next/image";
import Link from "next/link";
import {
  Network,
  CloudRain,
  Waves,
  Droplet,
  Shovel,
  Layers,
  Building2,
  Home,
  Trees,
  ArrowRight,
  Check,
  LucideIcon,
} from "lucide-react";
import { ServiceItem } from "@/data/servicesData";

const iconMap: Record<string, LucideIcon> = {
  Network,
  CloudRain,
  Waves,
  Droplet,
  Shovel,
  Layers,
  Building2,
  Home,
  Trees,
};

interface ServiceCardProps {
  service: ServiceItem;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const IconComponent = iconMap[service.iconName] || Network;
  // Pick up to 3 core capabilities from service.scope
  const keyDeliverables = service.scope ? service.scope.slice(0, 3) : [];

  return (
    <div className="group relative bg-white rounded-2xl border border-[#E2EAF4] hover:border-[#3988E8] shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full overflow-hidden">
      {/* Top Accent Gradient Bar on hover */}
      <div className="h-1.5 w-full bg-linear-to-r from-[#1769D2] via-[#3988E8] to-[#1769D2] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Header with Image & Floating Discipline Icon */}
      <div className="relative h-44 w-full bg-[#EAF4FF] overflow-hidden">
        <Image
          src={service.heroImage}
          alt={service.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter group-hover:brightness-105"
        />
        {/* Subtle Dark Vignette */}
        <div className="absolute inset-0 bg-linear-to-t from-[#172B4D]/60 via-[#172B4D]/20 to-transparent" />
        
        {/* Discipline Type Tag */}
        <div className="absolute top-3 left-3 z-10">
          <span className="inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-white/95 text-[#1769D2] shadow-sm backdrop-blur-sm border border-white/40">
            Core Service
          </span>
        </div>

        {/* Floating Gradient Icon Badge */}
        <div className="absolute -bottom-3 right-5 z-20 w-12 h-12 rounded-xl bg-linear-to-br from-[#1769D2] to-[#124B9A] text-white flex items-center justify-center shadow-lg shadow-[#1769D2]/30 ring-4 ring-white group-hover:scale-110 transition-transform duration-300">
          <IconComponent className="w-6 h-6 text-white" />
        </div>
      </div>

      {/* Card Content Body */}
      <div className="p-6 pt-5 flex flex-col grow">
        {/* Title */}
        <h3 className="text-lg font-bold text-[#172B4D] group-hover:text-[#1769D2] transition-colors mb-2 leading-snug pr-8">
          <Link href={`/services/${service.slug}`} className="focus:outline-none">
            {service.title}
          </Link>
        </h3>

        {/* Description */}
        <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed mb-4 line-clamp-2">
          {service.shortDescription}
        </p>

        {/* Key Deliverables / Capabilities checklist */}
        {keyDeliverables.length > 0 && (
          <div className="mb-5 bg-[#F5F9FF] border border-[#E2EAF4] rounded-xl p-3 space-y-1.5 mt-auto">
            <div className="text-[11px] font-bold text-[#1769D2] uppercase tracking-wider mb-1 flex items-center gap-1">
              <span>Key Capabilities</span>
            </div>
            {keyDeliverables.map((item, idx) => (
              <div key={idx} className="flex items-start text-xs text-[#475569] gap-1.5 leading-tight">
                <Check className="w-3.5 h-3.5 text-[#16A34A] shrink-0 mt-0.5" />
                <span className="truncate">{item}</span>
              </div>
            ))}
          </div>
        )}

        {/* Action Footer */}
        <div className="pt-3 border-t border-[#F3F8FF] flex items-center justify-between">
          <Link
            href={`/services/${service.slug}`}
            className="w-full flex items-center justify-between text-xs sm:text-sm font-semibold text-[#1769D2] group-hover:text-[#124B9A] transition-colors"
          >
            <span>Explore Technical Scope</span>
            <div className="w-7 h-7 rounded-full bg-[#EAF4FF] group-hover:bg-[#1769D2] group-hover:text-white flex items-center justify-center transition-all duration-300">
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
