import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { faqsData } from "@/data/faqsData";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export function FaqSection() {
  // Select top 6 FAQs for homepage
  const homepageFaqs = faqsData.slice(0, 6);

  return (
    <section className="py-16 lg:py-24 bg-[#F5F9FF] border-b border-[#E2EAF4]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          title="Clear Answers About Our Services & Process"
          description="Everything you need to know about our underground utility pipeline, drainage, and plumbing execution."
        />

        <FaqAccordion items={homepageFaqs} defaultOpenIndex={0} />

        <div className="mt-10 text-center">
          <Button href="/faqs" variant="outline" size="md" className="bg-white">
            View All 10 Frequently Asked Questions
            <ArrowRight className="w-4 h-4 ml-1.5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
