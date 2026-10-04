import { Building, Network, Shovel, FileCheck } from "lucide-react";

export function TrustStrip() {
  const items = [
    {
      icon: Building,
      title: "Residential & Commercial Projects",
      subtitle: "Multi-Unit & Enterprise Plumbing",
    },
    {
      icon: Network,
      title: "Underground Pipeline Solutions",
      subtitle: "HDPE, DWC & DI Utility Mains",
    },
    {
      icon: Shovel,
      title: "Civil Execution",
      subtitle: "Trenching, Manholes & Chambers",
    },
    {
      icon: FileCheck,
      title: "Project-Based Quotations",
      subtitle: "Clear BOQ & Scope Assessment",
    },
  ];

  return (
    <section className="bg-white border-b border-[#E2EAF4] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-4 p-4 rounded-xl bg-[#F5F9FF] border border-[#E2EAF4] hover:border-[#3988E8] transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-white border border-[#E2EAF4] flex items-center justify-center text-[#1769D2] shrink-0 shadow-sm">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#172B4D] leading-tight">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#64748B] mt-0.5">{item.subtitle}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
