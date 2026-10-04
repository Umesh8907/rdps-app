"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Maximize2, MapPin } from "lucide-react";
import { galleryData, GalleryItem } from "@/data/galleryData";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Lightbox } from "@/components/ui/Lightbox";
import { Badge } from "@/components/ui/Badge";

export function GalleryPreview() {
  const [activeCategory, setActiveCategory] = React.useState<string>("All");
  const [lightboxOpen, setLightboxOpen] = React.useState(false);
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  const categories = ["All", "Pipeline", "Excavation", "Chambers", "Plumbing"];

  const filteredItems = React.useMemo(() => {
    if (activeCategory === "All") return galleryData.slice(0, 6);
    return galleryData.filter((item) => item.category === activeCategory).slice(0, 6);
  }, [activeCategory]);

  const openLightboxAt = (item: GalleryItem) => {
    const originalIndex = galleryData.findIndex((g) => g.id === item.id);
    setCurrentImageIndex(originalIndex !== -1 ? originalIndex : 0);
    setLightboxOpen(true);
  };

  return (
    <section className="py-16 lg:py-24 bg-white border-b border-[#E2EAF4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
          <div>
            <span className="text-xs font-bold tracking-widest text-[#1769D2] uppercase bg-[#EAF4FF] px-3 py-1 rounded-full border border-[#d2e6fc] mb-3 inline-block">
              WORKSITE SNAPSHOTS
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#172B4D] tracking-tight">
              Inside Our Worksites
            </h2>
            <p className="mt-2 text-base text-[#64748B]">
              Visual evidence of underground pipeline installation, trenching, and civil execution.
            </p>
          </div>

          <div className="mt-6 md:mt-0 shrink-0">
            <Button href="/gallery" variant="outline" size="md">
              Explore Full Gallery
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Button>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-lg text-xs font-bold tracking-wide transition-all ${
                activeCategory === cat
                  ? "bg-[#1769D2] text-white shadow-sm"
                  : "bg-[#F5F9FF] text-[#172B4D] hover:bg-[#EAF4FF] border border-[#E2EAF4]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => openLightboxAt(item)}
              className="group relative h-64 rounded-2xl overflow-hidden border border-[#E2EAF4] bg-[#F5F9FF] cursor-pointer card-hover-effect"
            >
              <Image
                src={item.imageUrl}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#172B4D]/80 via-[#172B4D]/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              <div className="absolute top-3 left-3 z-10">
                <Badge variant="blue" className="bg-white/95 text-[#1769D2] shadow-sm">
                  {item.categoryLabel}
                </Badge>
              </div>

              <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="p-2 rounded-full bg-white text-[#1769D2] shadow-md">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>

              <div className="absolute bottom-0 inset-x-0 p-5 z-10 text-white">
                <div className="flex items-center text-xs text-white/80 mb-1">
                  <MapPin className="w-3.5 h-3.5 mr-1 text-[#3988E8]" />
                  {item.location}
                </div>
                <h3 className="text-sm font-bold text-white line-clamp-1">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        <Lightbox
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
          items={galleryData}
          currentIndex={currentImageIndex}
          onNavigate={(index) => setCurrentImageIndex(index)}
        />
      </div>
    </section>
  );
}
