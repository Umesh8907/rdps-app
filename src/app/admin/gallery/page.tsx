"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Image as ImageIcon, ArrowRight, Sparkles } from "lucide-react";
import { galleryData } from "@/data/galleryData";

export default function AdminGalleryPage() {
  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="bg-[#0B132B] border border-slate-800 p-6 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-lg font-bold text-white">Media Gallery Manager</h2>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-slate-800 text-amber-400 font-bold border border-slate-700">
              Phase 2 Ready
            </span>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Browse on-site rig operations, soil testing, and equipment photographs ({galleryData.length} items). Multi-upload triggers in Phase 2.
          </p>
        </div>

        <Link
          href="/gallery"
          target="_blank"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold border border-slate-700 transition-colors"
        >
          <span>View Public Gallery</span>
          <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
        </Link>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {galleryData.map((item) => (
          <div
            key={item.id}
            className="group relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 aspect-4/3 flex flex-col justify-end p-3"
          >
            <Image
              src={item.imageUrl}
              alt={item.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300 opacity-70 group-hover:opacity-90"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
            <div className="absolute inset-0 bg-linear-to-t from-slate-950/90 via-slate-950/40 to-transparent" />
            <div className="relative z-10">
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400">
                {item.category}
              </span>
              <p className="text-xs font-semibold text-white line-clamp-1 mt-0.5">{item.title}</p>
              <p className="text-[10px] text-slate-400 truncate">{item.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
