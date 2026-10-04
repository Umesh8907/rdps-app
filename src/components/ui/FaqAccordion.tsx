"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { FaqItem } from "@/data/faqsData";
import { cn } from "@/lib/utils";

interface FaqAccordionProps {
  items: FaqItem[];
  defaultOpenIndex?: number;
}

export function FaqAccordion({ items, defaultOpenIndex }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = React.useState<number | null>(
    typeof defaultOpenIndex === "number" ? defaultOpenIndex : 0
  );

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="divide-y divide-[#E2EAF4] rounded-xl border border-[#E2EAF4] bg-white shadow-sm overflow-hidden">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.id || index} className="transition-colors">
            <button
              onClick={() => toggle(index)}
              className="flex w-full items-center justify-between py-5 px-6 text-left font-semibold text-[#172B4D] hover:text-[#1769D2] transition-colors focus:outline-none focus-visible:bg-[#F3F8FF]"
              aria-expanded={isOpen}
            >
              <span className="text-base sm:text-lg pr-4 font-bold">{item.question}</span>
              <div
                className={cn(
                  "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#E2EAF4] bg-[#F3F8FF] text-[#1769D2] transition-transform duration-200",
                  isOpen && "rotate-180 bg-[#1769D2] text-white border-[#1769D2]"
                )}
              >
                <ChevronDown className="h-4 w-4" />
              </div>
            </button>
            {isOpen && (
              <div className="px-6 pb-5 pt-1 text-sm sm:text-base text-[#64748B] leading-relaxed animate-in fade-in-50 duration-200">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
