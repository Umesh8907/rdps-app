import { MessageSquare, MapPin, Calculator, Cog, ClipboardCheck } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ExecutionProcess() {
  const steps = [
    {
      number: "01",
      icon: MessageSquare,
      title: "Initial Discussion",
      description: "Reviewing project scope, site blueprints, drawings, and utility requirements.",
    },
    {
      number: "02",
      icon: MapPin,
      title: "Site Assessment",
      description: "On-site level verification, soil profiling, and identification of subterranean utilities.",
    },
    {
      number: "03",
      icon: Calculator,
      title: "Scope & Quotation",
      description: "Providing detailed BOQ breakdowns, pipe specifications, and execution schedule.",
    },
    {
      number: "04",
      icon: Cog,
      title: "Project Execution",
      description: "Precision trenching, pipe bedding, jointing, chamber casting, and safety management.",
    },
    {
      number: "05",
      icon: ClipboardCheck,
      title: "Inspection & Handover",
      description: "Hydrostatic testing, gravity flow checks, manhole finishing, and documentation.",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-[#F5F9FF] border-b border-[#E2EAF4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="OUR WORKFLOW"
          title="A Clear Approach From Planning to Handover"
          description="A structured, engineering-first methodology ensuring transparency, safety, and milestone completion."
        />

        {/* Process Timeline */}
        <div className="relative mt-8">
          {/* Connecting line on desktop */}
          <div className="hidden lg:block absolute top-1/2 left-12 right-12 h-0.5 bg-[#E2EAF4] -translate-y-6 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 border border-[#E2EAF4] hover:border-[#1769D2] transition-colors flex flex-col h-full card-hover-effect"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xl font-black text-[#1769D2]">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#EAF4FF] flex items-center justify-center text-[#1769D2]">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-[#172B4D] mb-2">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed flex-grow">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
