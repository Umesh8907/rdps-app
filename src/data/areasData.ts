export interface AreaItem {
  id: string;
  name: string;
  region: string;
  type: "Primary Base" | "Core Service Region" | "Statewide Coverage" | "National Coverage";
  description: string;
  servicesAvailable: string[];
  keyDistricts?: string[];
  highlight: string;
}

export const areasData: AreaItem[] = [
  {
    id: "naya-raipur",
    name: "Naya Raipur (Atal Nagar)",
    region: "Chhattisgarh",
    type: "Primary Base",
    description: "Our core operating base. Comprehensive underground infrastructure, drainage networks, commercial complex piping, and smart city utility execution.",
    servicesAvailable: [
      "Underground Pipeline Installation",
      "Stormwater & Runoff Drainage",
      "Sewer Line & Manhole Construction",
      "Water Supply Feeder Mains",
      "Commercial & Residential Plumbing",
    ],
    highlight: "Operational headquarters & direct site mobilization",
  },
  {
    id: "raipur",
    name: "Raipur City & Industrial Zones",
    region: "Chhattisgarh",
    type: "Core Service Region",
    description: "Extensive plumbing and pipeline contracts across residential towers, commercial retail complexes, hospitals, and industrial clusters (Urla, Siltara).",
    servicesAvailable: [
      "Commercial Building Plumbing",
      "Sewerage & Gravity Main Laying",
      "Excavation & Trenching",
      "Overhead & Sump Water Supply Networks",
    ],
    highlight: "Rapid site assessment and active worksite presence",
  },
  {
    id: "durg-bhilai",
    name: "Durg & Bhilai Urban Agglomeration",
    region: "Chhattisgarh",
    type: "Core Service Region",
    description: "Industrial utility piping, HDPE water lines, residential society sewer connections, and civil chamber works across the Durg-Bhilai twin city corridor.",
    servicesAvailable: [
      "Industrial HDPE Butt-Welded Water Lines",
      "Sewer Mains & RCC Manholes",
      "Landscape & Estate Irrigation Piping",
      "Trenching & Compaction Execution",
    ],
    highlight: "Industrial and residential utility execution",
  },
  {
    id: "bilaspur",
    name: "Bilaspur & Northern CG",
    region: "Chhattisgarh",
    type: "Statewide Coverage",
    description: "Contract execution for municipal drainage channels, commercial developments, institutional campuses, and residential housing projects.",
    servicesAvailable: [
      "Stormwater Conduit Laying",
      "Water Supply Distribution Lines",
      "Commercial Sanitary Installation",
      "RCC Manhole & Inspection Chambers",
    ],
    highlight: "Project-based mobilization for northern regional projects",
  },
  {
    id: "chhattisgarh",
    name: "All Chhattisgarh Districts",
    region: "Chhattisgarh",
    type: "Statewide Coverage",
    description: "Comprehensive plumbing and underground pipeline contracting across Korba, Rajnandgaon, Jagdalpur, Raigarh, Dhamtari, and all other districts.",
    servicesAvailable: [
      "Underground Utility Pipeline Laying",
      "Irrigation & Agricultural Water Networks",
      "Bulk Water Distribution Mains",
      "Civil Trenching & Chamber Execution",
    ],
    keyDistricts: ["Korba", "Rajnandgaon", "Jagdalpur", "Raigarh", "Dhamtari", "Mahasamund", "Kanker", "Ambikapur"],
    highlight: "Full state coverage with dedicated field crews",
  },
  {
    id: "pan-india",
    name: "Pan-India Project Enquiries",
    region: "All States & Union Territories",
    type: "National Coverage",
    description: "Mobilization of skilled crews and heavy equipment for large-scale underground pipeline laying, stormwater infrastructure, and turnkey plumbing execution across India.",
    servicesAvailable: [
      "Large-Diameter Pipeline Laying",
      "Commercial & Industrial MEP Plumbing",
      "Turnkey Infrastructure Utility Contracts",
      "Stormwater & Sewer Main Networks",
    ],
    highlight: "Project-based mobilization nationwide for qualified tenders and contracts",
  },
];
