"use client";

import * as React from "react";
import { projectsData } from "@/data/projectsData";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { FinalCta } from "@/components/home/FinalCta";
import { Search, Filter } from "lucide-react";

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = React.useState<string>("All");
  const [selectedStatus, setSelectedStatus] = React.useState<string>("All");
  const [searchQuery, setSearchQuery] = React.useState<string>("");

  const categories = [
    "All",
    "Underground Infrastructure",
    "Drainage & Sewerage",
    "Water Supply",
    "Residential",
  ];

  const filteredProjects = React.useMemo(() => {
    return projectsData.filter((project) => {
      const matchesCategory =
        selectedCategory === "All" || project.executionCategory === selectedCategory;
      const matchesStatus =
        selectedStatus === "All" || project.status === selectedStatus;
      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.category.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesStatus && matchesSearch;
    });
  }, [selectedCategory, selectedStatus, searchQuery]);

  return (
    <div className="bg-white">
      {/* Page Hero */}
      <section className="bg-corporate-grid bg-[#F5F9FF] border-b border-[#E2EAF4] py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: "Projects Portfolio" }]} />
          <div className="max-w-3xl mt-4">
            <span className="text-xs font-bold tracking-widest text-[#1769D2] uppercase bg-[#EAF4FF] px-3 py-1 rounded-full border border-[#d2e6fc] mb-3 inline-block">
              PORTFOLIO & EXECUTION
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#172B4D] tracking-tight">
              Projects That Reflect Our Work
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#64748B] leading-relaxed">
              Explore pipeline installations, drainage infrastructure, chamber construction and plumbing execution across worksites in Chhattisgarh and India.
            </p>
          </div>
        </div>
      </section>

      {/* Filter and Project Grid Section */}
      <section className="py-12 lg:py-20 border-b border-[#E2EAF4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Controls Bar */}
          <div className="p-4 sm:p-6 rounded-2xl bg-[#F5F9FF] border border-[#E2EAF4] mb-10 space-y-4">
            <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
              
              {/* Search Box */}
              <div className="relative flex-grow max-w-md">
                <Search className="w-4 h-4 text-[#64748B] absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search by project title, location, or scope..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#E2EAF4] bg-white text-sm focus:outline-none focus:border-[#1769D2] focus:ring-1 focus:ring-[#1769D2]"
                />
              </div>

              {/* Status Filter */}
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-[#64748B] uppercase tracking-wider">
                  Status:
                </span>
                <div className="flex rounded-xl bg-white border border-[#E2EAF4] p-1">
                  {["All", "In Progress", "Completed"].map((st) => (
                    <button
                      key={st}
                      onClick={() => setSelectedStatus(st)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                        selectedStatus === st
                          ? "bg-[#1769D2] text-white"
                          : "text-[#475569] hover:bg-[#F3F8FF]"
                      }`}
                    >
                      {st}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Category Tabs */}
            <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-[#E2EAF4]">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold tracking-wide transition-all ${
                    selectedCategory === cat
                      ? "bg-[#1769D2] text-white shadow-xs"
                      : "bg-white text-[#475569] hover:bg-[#EAF4FF] border border-[#E2EAF4]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-[#F5F9FF] rounded-2xl border border-[#E2EAF4] p-8 max-w-lg mx-auto">
              <Filter className="w-10 h-10 text-[#64748B] mx-auto mb-3" />
              <h3 className="text-lg font-bold text-[#172B4D]">No Projects Found</h3>
              <p className="text-sm text-[#64748B] mt-1">
                Try adjusting your search criteria or category filter.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Final CTA */}
      <FinalCta />
    </div>
  );
}
