"use client";

import * as React from "react";
import Image from "next/image";
import { Maximize2, MapPin } from "lucide-react";
import { galleryData, galleryCategories, GalleryItem } from "@/data/galleryData";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Lightbox } from "@/components/ui/Lightbox";
import { Badge } from "@/components/ui/Badge";
import { FinalCta } from "@/components/home/FinalCta";

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = React.useState<string>("All");
  const [lightboxOpen, setLightboxOpen] = React.useState(false);
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const filteredItems = React.useMemo(() => {
    if (selectedCategory === "All") return galleryData;
    return galleryData.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  const openLightboxAt = (item: GalleryItem) => {
    const idx = galleryData.findIndex((g) => g.id === item.id);
    setCurrentIndex(idx !== -1 ? idx : 0);
    setLightboxOpen(true);
  };

  return (
    <div className="bg-white">
      {/* Page Hero */}
      <section className="bg-corporate-grid bg-[#F5F9FF] border-b border-[#E2EAF4] py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: "Gallery" }]} />
          <div className="max-w-3xl mt-4">
            <span className="text-xs font-bold tracking-widest text-[#1769D2] uppercase bg-[#EAF4FF] px-3 py-1 rounded-full border border-[#d2e6fc] mb-3 inline-block">
              WORKSITE PHOTOGRAPHS
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#172B4D] tracking-tight">
              Inside Our Worksites & Operations
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#64748B] leading-relaxed">
              Explore authentic execution photographs covering trenching, pipeline laying, chamber construction, and completed infrastructure installations.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-12 lg:py-20 border-b border-[#E2EAF4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 mb-10">
            {galleryCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold tracking-wide transition-all ${
                  selectedCategory === cat
                    ? "bg-[#1769D2] text-white shadow-sm"
                    : "bg-[#F5F9FF] text-[#172B4D] hover:bg-[#EAF4FF] border border-[#E2EAF4]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => openLightboxAt(item)}
                className="group relative h-72 rounded-2xl overflow-hidden border border-[#E2EAF4] bg-[#F5F9FF] cursor-pointer card-hover-effect"
              >
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#172B4D]/85 via-[#172B4D]/25 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

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
                  <h3 className="text-base font-bold text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-white/70 line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <Lightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        items={galleryData}
        currentIndex={currentIndex}
        onNavigate={(newIdx) => setCurrentIndex(newIdx)}
      />

      {/* Final CTA */}
      <FinalCta />
    </div>
  );
}
