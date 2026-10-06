"use client";

import * as React from "react";
import Link from "next/link";
import { FolderKanban, Plus, Sparkles, HardHat, CheckCircle2, ArrowRight } from "lucide-react";
import { projectsData } from "@/data/projectsData";

export default function AdminProjectsPage() {
  return (
    <div className="space-y-6">
      {/* Banner */}
      <div className="bg-[#0B132B] border border-slate-800 p-6 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-lg font-bold text-white">Projects & Portfolio CMS</h2>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-slate-800 text-amber-400 font-bold border border-slate-700">
              Phase 2 Ready
            </span>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Currently rendering static projects ({projectsData.length} active). Dynamic CRUD editor will activate in Phase 2.
          </p>
        </div>

        <Link
          href="/projects"
          target="_blank"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold border border-slate-700 transition-colors"
        >
          <span>View Live Projects</span>
          <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
        </Link>
      </div>

      {/* Existing Projects Preview List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projectsData.map((p) => (
          <div
            key={p.id}
            className="bg-[#0B132B] border border-slate-800 p-4 rounded-2xl space-y-3 group hover:border-slate-700 transition-all"
          >
            <div className="flex items-start justify-between gap-2">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/20">
                  {p.category}
                </span>
                <h4 className="text-sm font-bold text-white mt-1.5 line-clamp-1">{p.title}</h4>
              </div>
            </div>

            <p className="text-xs text-slate-400 line-clamp-2">{p.description}</p>

            <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-500">
              <span>{p.location}</span>
              <span className="text-slate-400 font-medium">{p.client}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
