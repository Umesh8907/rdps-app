export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  location: string;
  category: string;
  status: "In Progress" | "Completed";
  featured?: boolean;
  coverImage: string;
  galleryImages: string[];
  scopeSummary: string;
  detailedScope: string[];
  description: string;
  keyHighlights: string[];
  executionCategory: "Underground Infrastructure" | "Drainage & Sewerage" | "Water Supply" | "Commercial Plumbing" | "Residential";
}

export const projectsData: ProjectItem[] = [
  {
    id: "stormwater-network-naya-raipur",
    slug: "stormwater-network-naya-raipur",
    title: "Stormwater Drainage & Trenching Network",
    location: "Naya Raipur, Chhattisgarh",
    category: "Stormwater Drainage",
    status: "In Progress",
    featured: true,
    executionCategory: "Drainage & Sewerage",
    coverImage: "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1200&q=80",
    ],
    scopeSummary: "Excavation, DWC stormwater conduit laying, catch pit construction and outfall alignment.",
    detailedScope: [
      "Precision mechanical trenching across utility corridors",
      "DWC corrugated stormwater pipeline laying with specified gravity slopes",
      "RCC catch pit and silt chamber construction",
      "Compacted granular bedding and layered backfilling",
    ],
    description: "Execution of an integrated underground stormwater drainage network in Naya Raipur designed to manage seasonal monsoon surface runoff and prevent localized water accumulation.",
    keyHighlights: [
      "Continuous gravity-flow gradient alignment",
      "Integrated heavy-duty cast silt-trap chambers",
      "Active on-site safety and trench shoring protocols",
    ],
  },
  {
    id: "commercial-pipeline-raipur",
    slug: "commercial-pipeline-raipur",
    title: "Commercial Complex Utility & Pipeline Laying",
    location: "Raipur, Chhattisgarh",
    category: "Underground Pipeline Installation",
    status: "Completed",
    featured: true,
    executionCategory: "Underground Infrastructure",
    coverImage: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    ],
    scopeSummary: "Underground water supply feeder mains, internal booster manifolds and external drainage tie-ins.",
    detailedScope: [
      "High-pressure HDPE transmission pipeline jointing",
      "Booster pump manifold fabrication and testing",
      "Inspection chamber and valve pit execution",
      "Connection to municipal feeder mains",
    ],
    description: "Complete utility pipeline execution for a multi-tenant commercial establishment in Raipur, incorporating robust water transmission and seamless drainage connections.",
    keyHighlights: [
      "Hydrostatic testing completed without pressure drops",
      "Heavy-traffic rated valve chamber covers",
      "Coordinated with structural contractors on site",
    ],
  },
  {
    id: "sewerage-trunk-line-durg",
    slug: "sewerage-trunk-line-durg",
    title: "Sewer Line Installation & RCC Manhole Works",
    location: "Durg, Chhattisgarh",
    category: "Sewer Line Installation",
    status: "Completed",
    featured: true,
    executionCategory: "Drainage & Sewerage",
    coverImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=1200&q=80",
    ],
    scopeSummary: "Underground gravity sewer line installation, invert level setting, and cast-in-situ RCC manholes.",
    detailedScope: [
      "Excavation and bed stabilization for sewer mains",
      "Laying rubber-ring sealed sewer conduits",
      "Construction of RCC inspection manholes with hydraulic benching",
      "Water tightness testing of entire run prior to backfill",
    ],
    description: "Comprehensive underground sanitary sewer line laying and manhole construction in Durg, establishing dependable wastewater transport with self-cleansing velocity.",
    keyHighlights: [
      "Zero-leakage jointing verified under hydrostatic head",
      "Smooth hydraulic invert benching in all manholes",
      "Heavy-duty cast covers for roadway access",
    ],
  },
  {
    id: "residential-township-drainage",
    slug: "residential-township-drainage",
    title: "Plumbing & Drainage Execution for Gated Enclave",
    location: "Raipur, Chhattisgarh",
    category: "Residential Plumbing",
    status: "In Progress",
    featured: false,
    executionCategory: "Residential",
    coverImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1200&q=80",
    ],
    scopeSummary: "Internal concealed sanitary piping, external perimeter drainage, and overhead tank manifolds.",
    detailedScope: [
      "Concealed CPVC hot and cold water distribution",
      "Silent drainage vertical stack plumbing",
      "Perimeter surface drainage channel integration",
      "Underground sump and booster pump connection",
    ],
    description: "Ongoing comprehensive plumbing and drainage execution for a residential enclave in Raipur, providing end-to-end piping from underground utilities to bathroom fixtures.",
    keyHighlights: [
      "High-pressure testing on all concealed bathroom circuits",
      "Integrated surface stormwater collection trenches",
      "Clean architectural shaft layouts",
    ],
  },
  {
    id: "industrial-water-supply-bhilai",
    slug: "industrial-water-supply-bhilai",
    title: "Industrial Facility Water Distribution & HDPE Pipeline",
    location: "Bhilai, Chhattisgarh",
    category: "Water Supply Pipeline",
    status: "Completed",
    featured: false,
    executionCategory: "Water Supply",
    coverImage: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80",
    ],
    scopeSummary: "Butt-fusion welded HDPE water supply trunk line and industrial valve station installation.",
    detailedScope: [
      "Trench excavation and sand bed preparation",
      "Butt-fusion jointing of high-grade PN10 HDPE lines",
      "Sluice valve and air release chamber fabrication",
      "Testing, commissioning, and system handover",
    ],
    description: "Installation of a continuous industrial water supply loop for a manufacturing facility in Bhilai, ensuring stable volumetric water delivery under steady pressure.",
    keyHighlights: [
      "Seamless butt-fusion jointing for long-distance run",
      "Cast concrete anchor blocks at directional shifts",
      "Timely milestone completion",
    ],
  },
];
