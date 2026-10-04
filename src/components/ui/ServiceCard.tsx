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

  return (
    <div className="group bg-white rounded-xl border border-[#E2EAF4] overflow-hidden flex flex-col h-full card-hover-effect">
      {/* Image container */}
      <div className="relative h-48 w-full bg-[#EAF4FF] overflow-hidden">
        <Image
          src={service.heroImage}
          alt={service.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#172B4D]/40 via-transparent to-transparent opacity-60" />
        <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-sm p-2 rounded-lg shadow-sm border border-[#E2EAF4]">
          <IconComponent className="w-5 h-5 text-[#1769D2]" />
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-[#172B4D] group-hover:text-[#1769D2] transition-colors mb-2">
          <Link href={`/services/${service.slug}`} className="focus:outline-none">
            {service.title}
          </Link>
        </h3>
        <p className="text-sm text-[#64748B] leading-relaxed mb-5 flex-grow">
          {service.shortDescription}
        </p>

        <div className="pt-4 border-t border-[#F3F8FF] flex items-center justify-between mt-auto">
          <Link
            href={`/services/${service.slug}`}
            className="inline-flex items-center text-sm font-semibold text-[#1769D2] group-hover:text-[#124B9A] group-hover:translate-x-0.5 transition-all"
          >
            Explore Service
            <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
