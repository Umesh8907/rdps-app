import Link from "next/link";
import { MapPin, Navigation, ArrowRight, CheckCircle } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export function ServiceAreasSection() {
  const hubs = [
    {
      city: "Naya Raipur (Atal Nagar)",
      role: "Operational Base & Headquarters",
      details: "Comprehensive underground drainage, utility pipelines, smart development infrastructure.",
    },
    {
      city: "Raipur Metropolitan Area",
      role: "Core Execution Zone",
      details: "Commercial towers, housing societies, industrial estates (Urla & Siltara), water mains.",
    },
    {
      city: "Durg & Bhilai Corridor",
      role: "Industrial & Urban Utility Hub",
      details: "Heavy industrial water pipelines, gravity sewer networks, chamber casting.",
    },
    {
      city: "Bilaspur & Northern CG",
      role: "Regional Contract Hub",
      details: "Commercial complexes, storm drainage channels, institutional campuses.",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white border-b border-[#E2EAF4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left info */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-bold tracking-widest text-[#1769D2] uppercase bg-[#EAF4FF] px-3 py-1 rounded-full border border-[#d2e6fc]">
              GEOGRAPHIC REACH
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#172B4D] tracking-tight leading-tight">
              Based in Chhattisgarh. Ready for Projects Across India.
            </h2>

            <p className="text-base text-[#64748B] leading-relaxed">
              With our operational base located in Naya Raipur, we deploy experienced site execution crews and machinery rapidly across central India, while managing turnkey pipeline contracts nationwide.
            </p>

            <div className="p-4 rounded-xl bg-[#F5F9FF] border border-[#E2EAF4] space-y-2">
              <div className="flex items-center gap-2 text-sm font-bold text-[#172B4D]">
                <Navigation className="w-4 h-4 text-[#1769D2]" />
                Pan-India Mobilization
              </div>
              <p className="text-xs text-[#64748B]">
                Equipped to deploy crew leaders, fusion technicians, and machinery for qualified tenders throughout India.
              </p>
            </div>

            <div className="pt-2">
              <Button href="/areas-we-serve" variant="primary" size="md">
                Discuss Your Project Location
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Button>
            </div>
          </div>

          {/* Right Hub Cards */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {hubs.map((hub, index) => (
                <div
                  key={index}
                  className="p-5 rounded-xl bg-[#F5F9FF] border border-[#E2EAF4] hover:border-[#1769D2] transition-colors flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-2 text-[#1769D2] mb-2">
                      <MapPin className="w-4 h-4 shrink-0" />
                      <span className="text-xs font-bold uppercase tracking-wider">
                        {hub.role}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-[#172B4D] mb-1.5">
                      {hub.city}
                    </h3>
                    <p className="text-xs text-[#64748B] leading-relaxed">
                      {hub.details}
                    </p>
                  </div>
                  <div className="pt-3 mt-3 border-t border-[#E2EAF4]/60 flex items-center text-xs font-semibold text-[#1769D2]">
                    <CheckCircle className="w-3.5 h-3.5 mr-1 text-[#16A34A]" />
                    Active Mobilization
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
