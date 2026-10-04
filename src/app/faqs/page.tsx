"use client";

import * as React from "react";
import { Search, HelpCircle, ArrowRight } from "lucide-react";
import { faqsData } from "@/data/faqsData";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { Button } from "@/components/ui/Button";
import { FinalCta } from "@/components/home/FinalCta";

export default function FaqsPage() {
  const [selectedCategory, setSelectedCategory] = React.useState<string>("All");
  const [searchQuery, setSearchQuery] = React.useState<string>("");

  const categories = ["All", "General", "Services", "Quotations & Process", "Execution"];

  const filteredFaqs = React.useMemo(() => {
    return faqsData.filter((faq) => {
      const matchesCategory =
        selectedCategory === "All" || faq.category === selectedCategory;
      const matchesSearch =
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="bg-white">
      {/* Page Hero */}
      <section className="bg-corporate-grid bg-[#F5F9FF] border-b border-[#E2EAF4] py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: "FAQs" }]} />
          <div className="max-w-3xl mt-4">
            <span className="text-xs font-bold tracking-widest text-[#1769D2] uppercase bg-[#EAF4FF] px-3 py-1 rounded-full border border-[#d2e6fc] mb-3 inline-block">
              HELP & QUESTIONS
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#172B4D] tracking-tight">
              Frequently Asked Questions
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#64748B] leading-relaxed">
              Find detailed answers about our underground pipeline installations, civil drainage work, project quotation procedures, and on-site execution capabilities.
            </p>
          </div>
        </div>
      </section>

      {/* Main FAQ Content */}
      <section className="py-12 lg:py-20 border-b border-[#E2EAF4]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search & Category Filter */}
          <div className="space-y-4 mb-10">
            <div className="relative">
              <Search className="w-5 h-5 text-[#64748B] absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search FAQs by question or keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3.5 rounded-2xl border border-[#E2EAF4] bg-white text-sm focus:outline-none focus:border-[#1769D2] focus:ring-1 focus:ring-[#1769D2] shadow-xs"
              />
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold tracking-wide transition-all ${
                    selectedCategory === cat
                      ? "bg-[#1769D2] text-white shadow-xs"
                      : "bg-[#F5F9FF] text-[#475569] hover:bg-[#EAF4FF] border border-[#E2EAF4]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Accordion List */}
          {filteredFaqs.length > 0 ? (
            <FaqAccordion items={filteredFaqs} defaultOpenIndex={0} />
          ) : (
            <div className="text-center py-12 bg-[#F5F9FF] rounded-2xl border border-[#E2EAF4] p-8">
              <HelpCircle className="w-10 h-10 text-[#64748B] mx-auto mb-3" />
              <h3 className="text-lg font-bold text-[#172B4D]">No Matching Questions</h3>
              <p className="text-sm text-[#64748B] mt-1">
                Have a specific question not listed here? Connect with our engineers directly.
              </p>
              <div className="mt-4">
                <Button href="/contact" variant="primary" size="sm">
                  Ask a Question
                </Button>
              </div>
            </div>
          )}

          {/* Bottom Help Box */}
          <div className="mt-12 p-8 rounded-3xl bg-[#EAF4FF] border border-[#d2e6fc] flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-lg font-bold text-[#172B4D]">
                Have a specific project question or custom requirement?
              </h4>
              <p className="text-sm text-[#64748B] mt-1">
                Our site engineers can review your drawings and provide technical advice.
              </p>
            </div>
            <Button href="/contact" variant="primary" size="md" className="shrink-0">
              Contact Engineering Team
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <FinalCta />
    </div>
  );
}
