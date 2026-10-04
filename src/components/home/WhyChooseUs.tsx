import {
  Layers,
  Building2,
  HardHat,
  Target,
  FileCheck2,
  Globe2,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function WhyChooseUs() {
  const benefits = [
    {
      icon: Layers,
      title: "Integrated Execution",
      description: "Combining excavation, pipeline laying, chamber casting, and sanitary plumbing under a single accountable team.",
    },
    {
      icon: Building2,
      title: "Residential & Commercial Expertise",
      description: "Proven capability spanning multi-unit residential developments, commercial establishments, and civil utility networks.",
    },
    {
      icon: HardHat,
      title: "Practical Site Coordination",
      description: "Direct on-site alignment with structural contractors, MEP consultants, and project engineers to maintain steady progress.",
    },
    {
      icon: Target,
      title: "Project-Focused Approach",
      description: "Careful attention to slope gradients, joint watertightness, pipe bedding, and structural safety standards.",
    },
    {
      icon: FileCheck2,
      title: "Clear Quotation Process",
      description: "Itemized BOQ-based estimation with clear scope breakdowns and transparent cost structures.",
    },
    {
      icon: Globe2,
      title: "Service Reach Across India",
      description: "Headquartered in Naya Raipur, Chhattisgarh, with the operational capability to mobilize field teams pan-India.",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white border-b border-[#E2EAF4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="WHY RD PLUMBING SOLUTION"
          title="Why Project Owners Choose RD Plumbing Solution"
          description="A dependable execution partner focused on structural integrity, precision alignment, and practical delivery."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="p-8 rounded-2xl bg-white border border-[#E2EAF4] hover:border-[#3988E8] transition-all duration-200 card-hover-effect flex flex-col"
              >
                <div className="w-12 h-12 rounded-xl bg-[#EAF4FF] border border-[#d2e6fc] flex items-center justify-center text-[#1769D2] mb-6 shadow-sm">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#172B4D] mb-3">
                  {benefit.title}
                </h3>
                <p className="text-sm text-[#64748B] leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
