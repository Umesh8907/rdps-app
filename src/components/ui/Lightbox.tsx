"use client";

import * as React from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { GalleryItem } from "@/data/galleryData";

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  items: GalleryItem[];
  currentIndex: number;
  onNavigate: (newIndex: number) => void;
}

export function Lightbox({
  isOpen,
  onClose,
  items,
  currentIndex,
  onNavigate,
}: LightboxProps) {
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onNavigate((currentIndex - 1 + items.length) % items.length);
      if (e.key === "ArrowRight") onNavigate((currentIndex + 1) % items.length);
    };

    window.addEventListener("keydown", handleKeyDown);
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, currentIndex, items.length, onClose, onNavigate]);

  if (!isOpen || !items[currentIndex]) return null;

  const currentItem = items[currentIndex];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      {/* Top Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-50 p-2.5 rounded-full bg-white/20 hover:bg-white text-white hover:text-[#172B4D] transition-colors focus:outline-none"
        aria-label="Close Lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Navigation Buttons */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNavigate((currentIndex - 1 + items.length) % items.length);
        }}
        className="absolute left-4 z-50 p-3 rounded-full bg-white/20 hover:bg-white text-white hover:text-[#172B4D] transition-colors focus:outline-none"
        aria-label="Previous Image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onNavigate((currentIndex + 1) % items.length);
        }}
        className="absolute right-4 z-50 p-3 rounded-full bg-white/20 hover:bg-white text-white hover:text-[#172B4D] transition-colors focus:outline-none"
        aria-label="Next Image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Center Image and Card */}
      <div
        className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl border border-white/20"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-[55vh] sm:h-[65vh] w-full bg-[#172B4D]/10">
          <Image
            src={currentItem.imageUrl}
            alt={currentItem.title}
            fill
            className="object-contain"
            sizes="(max-width: 1200px) 100vw, 1200px"
            priority
          />
        </div>

        <div className="p-5 sm:p-6 bg-white border-t border-[#E2EAF4]">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1769D2] bg-[#EAF4FF] px-2.5 py-1 rounded-full">
              {currentItem.categoryLabel}
            </span>
            <div className="flex items-center text-xs text-[#64748B]">
              <MapPin className="w-3.5 h-3.5 mr-1 text-[#1769D2]" />
              {currentItem.location}
            </div>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-[#172B4D] mb-1">
            {currentItem.title}
          </h3>
          <p className="text-sm text-[#64748B]">{currentItem.description}</p>
          <div className="mt-3 text-xs text-[#94A3B8]">
            Image {currentIndex + 1} of {items.length}
          </div>
        </div>
      </div>
    </div>
  );
}
