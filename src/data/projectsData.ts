export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  location: string;
  category: string;
  projectType?: string;
  client?: string;
  architect?: string;
  scope?: string;
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
    id: "avinash-chitwan",
    slug: "avinash-chitwan",
    title: "Avinash Chitwan",
    location: "Sector 24, Naya Raipur, Chhattisgarh",
    category: "Residential Plumbing & Services",
    projectType: "Residential",
    client: "PWD / Avinash Group",
    architect: "Asna-Architect, Sandeep Neena Associate",
    scope: "Plumbing & Services",
    status: "In Progress",
    featured: true,
    executionCategory: "Residential",
    coverImage: "/assets/projects/Chitwan - 2.jpg",
    galleryImages: [
      "/assets/projects/Chitwan - 2.jpg",
      "/assets/projects/Chitwan - 1.jpg"
    ],
    scopeSummary: "Comprehensive internal & external plumbing, sanitary drainage networks and water supply infrastructure.",
    detailedScope: [
      "Concealed CPVC/UPVC water distribution piping across residential towers",
      "Soil, waste and vent vertical riser plumbing with acoustic damping clamps",
      "External underground sanitary sewer lines & inspection chambers",
      "Hydrostatic pressure testing and premium sanitary fixtures installation"
    ],
    description: "Avinash Chitwan is a prestigious residential development in Sector 24, Naya Raipur. RD Plumbing Solution is executing end-to-end internal plumbing, external sewer networks, and rainwater drainage systems designed for long-term operational durability.",
    keyHighlights: [
      "Precision gradient alignment for zero-clog gravity drainage",
      "100% hydrostatic leak-tested water distribution circuits",
      "Strict adherence to PWD and architectural design specifications"
    ]
  },
  {
    id: "the-lagoon",
    slug: "the-lagoon",
    title: "The Lagoon",
    location: "Sector 24, Naya Raipur, Chhattisgarh",
    category: "Residential Plumbing & Infrastructure",
    projectType: "Residential",
    client: "PWD / Private Developers",
    architect: "Asna-Architect, Sandeep Neena Associate",
    scope: "Plumbing & Services",
    status: "Completed",
    featured: true,
    executionCategory: "Residential",
    coverImage: "/assets/projects/The Lagoon - 1.jpg",
    galleryImages: [
      "/assets/projects/The Lagoon - 1.jpg",
      "/assets/projects/The Lagoon - 2.jpg"
    ],
    scopeSummary: "High-specification sanitary systems, booster pump manifolds and stormwater drainage.",
    detailedScope: [
      "Luxury residential sanitary fixture installation and valve stations",
      "High-capacity underground water storage and booster supply piping",
      "Perimeter stormwater drainage channel execution with catch pits",
      "Finished inspection chambers with heavy-duty cast covers"
    ],
    description: "A premier residential enclave in Naya Raipur where RD Plumbing Solution delivered comprehensive sanitary plumbing, water supply piping, and specialized drainage solutions.",
    keyHighlights: [
      "Delivered on schedule with complete quality commissioning",
      "Silent drainage stack technology for multi-story residential blocks",
      "Complete water-tight chamber benching and root-proof joints"
    ]
  },
  {
    id: "avinash-twin-city",
    slug: "avinash-twin-city",
    title: "Avinash Twin City",
    location: "Kumhari, Raipur-Bhilai Corridor, Chhattisgarh",
    category: "Township Infrastructure & Plumbing",
    projectType: "Residential Township",
    client: "Avinash Group / PWD",
    architect: "Asna-Architect, Sandeep Neena Associate",
    scope: "Plumbing & Services",
    status: "Completed",
    featured: true,
    executionCategory: "Residential",
    coverImage: "/assets/projects/Twin City - 2.jpg",
    galleryImages: [
      "/assets/projects/Twin City - 2.jpg",
      "/assets/projects/Twin City - 1.jpg"
    ],
    scopeSummary: "Township-wide internal plumbing, external drainage corridors and water distribution lines.",
    detailedScope: [
      "Underground feeder water mains across multiple township sectors",
      "Internal concealed piping for hundreds of residential housing units",
      "Central sewer collector lines and intermediate interceptor manholes",
      "Stormwater runoff management infrastructure and outfall connections"
    ],
    description: "Execution of township-scale plumbing and civil infrastructure for Avinash Twin City on the Raipur-Bhilai corridor, connecting residential blocks to robust underground municipal networks.",
    keyHighlights: [
      "Large-scale piping network executed with zero operational downtime",
      "High-pressure tested distribution loops without pressure drop",
      "Long-lasting corrosion-resistant piping materials and fittings"
    ]
  },
  {
    id: "avinash-new-county",
    slug: "avinash-new-county",
    title: "Avinash New County",
    location: "Sector 24, Naya Raipur, Chhattisgarh",
    category: "Underground Drainage & Plumbing",
    projectType: "Residential Township",
    client: "Avinash Group / PWD",
    architect: "Asna-Architect, Sandeep Neena Associate",
    scope: "Plumbing & Services",
    status: "In Progress",
    featured: true,
    executionCategory: "Underground Infrastructure",
    coverImage: "/assets/projects/Avinash New County - 1.jpg",
    galleryImages: [
      "/assets/projects/Avinash New County - 1.jpg",
      "/assets/projects/Avinash New County - 2.jpg"
    ],
    scopeSummary: "Underground gravity sewer line, DWC stormwater conduit laying and RCC inspection manholes.",
    detailedScope: [
      "Precision mechanical trenching across utility corridors",
      "DWC corrugated stormwater pipeline laying with calibrated slope",
      "RCC cast-in-situ inspection manholes with smooth hydraulic benching",
      "Water supply distribution network and overhead tank linkages"
    ],
    description: "Ongoing comprehensive plumbing and underground civil utility execution for Avinash New County in Naya Raipur, ensuring seamless stormwater drainage and reliable water delivery.",
    keyHighlights: [
      "Continuous laser-calibrated gravity slope setting",
      "Heavy vehicular load rated manhole covers",
      "Active on-site safety and quality trenching protocols"
    ]
  },
  {
    id: "cm-and-minister-house",
    slug: "cm-and-minister-house",
    title: "CM & Minister House",
    location: "Sector 24, Capital Complex, Naya Raipur, Chhattisgarh",
    category: "Government VIP Residential",
    projectType: "Government / VIP Residential",
    client: "PWD (Public Works Department, Chhattisgarh)",
    architect: "Asna-Architect, Sandeep Neena Associate",
    scope: "Plumbing & Services",
    status: "Completed",
    featured: true,
    executionCategory: "Residential",
    coverImage: "/assets/projects/Cm House - 1.jpg",
    galleryImages: [
      "/assets/projects/Cm House - 1.jpg",
      "/assets/projects/Cm House - 2.jpg"
    ],
    scopeSummary: "High-specification VIP residential plumbing, specialized drainage, and pressurized water distribution.",
    detailedScope: [
      "Premium concealed CPVC & copper piping installations",
      "Silent drainage vertical stacks and high-capacity soil-waste lines",
      "Dedicated underground sump and multi-stage booster pump sets",
      "Comprehensive stormwater harvesting integration and recharge pits"
    ],
    description: "Official residence complex for the Honorable Chief Minister & State Ministers in Sector 24, Naya Raipur. Delivered to the highest standards of government engineering under PWD supervision.",
    keyHighlights: [
      "Strict quality control and government PWD compliance",
      "Zero-noise sanitary stacks and automated pressure boosting",
      "Flawless handover and long-term infrastructure reliability"
    ]
  },
  {
    id: "msh2-housing",
    slug: "msh2-housing",
    title: "MSH2 (Ministers & Senior Officers Housing)",
    location: "Sector 24, Naya Raipur, Chhattisgarh",
    category: "Government Residential",
    projectType: "Government Residential",
    client: "PWD (Public Works Department, Chhattisgarh)",
    architect: "Asna-Architect, Sandeep Neena Associate",
    scope: "Plumbing & Services",
    status: "In Progress",
    featured: false,
    executionCategory: "Residential",
    coverImage: "/assets/projects/MSH2.jpg",
    galleryImages: [
      "/assets/projects/MSH2.jpg"
    ],
    scopeSummary: "Internal sanitary piping, external sewer mains and water supply riser systems for senior officer housing.",
    detailedScope: [
      "Multi-unit internal sanitary piping networks and fixtures",
      "Riser shafts and vertical stack clamping across housing towers",
      "Underground sewer and stormwater connection to main civic corridors",
      "Testing, water treatment links and commissioning"
    ],
    description: "High-profile government residential project in Sector 24, Naya Raipur. Providing dependable plumbing, water treatment links, and external drainage for senior official quarters.",
    keyHighlights: [
      "Standardized multi-unit plumbing modules",
      "Durable CPVC and PVC-U piping assemblies",
      "Ongoing synchronized execution with civil construction teams"
    ]
  },
  {
    id: "mantralaya-naya-raipur",
    slug: "mantralaya-naya-raipur",
    title: "Mantralaya (Mahanadi Bhawan)",
    location: "Sector 19, Capitol Complex, Naya Raipur, Chhattisgarh",
    category: "Government Secretariat & Institutional",
    projectType: "Government Secretariat",
    client: "PWD (Public Works Department, Chhattisgarh)",
    architect: "Asna-Architect, Sandeep Neena Associate",
    scope: "Plumbing & Services",
    status: "In Progress",
    featured: true,
    executionCategory: "Commercial Plumbing",
    coverImage: "/assets/projects/mantralay.jpg",
    galleryImages: [
      "/assets/projects/mantralay.jpg"
    ],
    scopeSummary: "High-capacity institutional plumbing, central drainage risers, and utility manifold execution for state secretariat.",
    detailedScope: [
      "Heavy-duty sanitary batteries and administrative restroom plumbing",
      "Central booster pump manifolds and high-capacity riser loops",
      "Fire fighting line tie-ins and hydrants",
      "Large-scale underground drainage and stormwater channels"
    ],
    description: "The apex administrative headquarters of the Government of Chhattisgarh. RD Plumbing Solution is carrying out specialized institutional plumbing, riser upgrades, and civil drainage connections.",
    keyHighlights: [
      "High-volume capacity engineering designed for thousands of daily occupants",
      "Commercial-grade sensor fixture and manifold installations",
      "Coordinated execution in active government administrative zone"
    ]
  },
  {
    id: "smart-city-raipur",
    slug: "smart-city-raipur",
    title: "Smart City Club & Civic Utilities",
    location: "Sezbahar, Raipur, Chhattisgarh",
    category: "Club / Municipal Utility",
    projectType: "Club / Municipal Facility",
    client: "Raipur Smart City Ltd / PWD",
    architect: "Asna-Architect, Sandeep Neena Associate",
    scope: "Plumbing & Services",
    status: "In Progress",
    featured: false,
    executionCategory: "Drainage & Sewerage",
    coverImage: "/assets/projects/Smart City - 2.jpg",
    galleryImages: [
      "/assets/projects/Smart City - 2.jpg",
      "/assets/projects/Smart City - 1.jpg"
    ],
    scopeSummary: "Recreational facility plumbing, pool utility piping, stormwater runoff collection and STP lines.",
    detailedScope: [
      "Clubhouse sanitary and commercial restroom battery piping",
      "Swimming pool and recreational water circulation lines",
      "Sewage Treatment Plant (STP) feeder and treated water reuse piping",
      "Stormwater retention trenches and rainwater harvesting pits"
    ],
    description: "Modern recreational and civic project executed under the Smart City initiative in Sezbahar, Raipur, featuring advanced water recycling, STP integration, and stormwater drainage.",
    keyHighlights: [
      "Eco-friendly water circulation and reuse piping",
      "Heavy-duty underground drainage channels",
      "Modern energy-efficient booster pump integration"
    ]
  },
  {
    id: "avinash-elegance",
    slug: "avinash-elegance",
    title: "Avinash Elegance",
    location: "Raipur, Chhattisgarh",
    category: "Residential Plumbing",
    projectType: "Residential",
    client: "Avinash Group",
    architect: "Asna-Architect, Sandeep Neena Associate",
    scope: "Plumbing & Sanitary Services",
    status: "Completed",
    featured: false,
    executionCategory: "Residential",
    coverImage: "/assets/projects/Avinash Eligence 1.jpg",
    galleryImages: [
      "/assets/projects/Avinash Eligence 1.jpg",
      "/assets/projects/Avinash Eligence 2.jpg"
    ],
    scopeSummary: "Internal concealed sanitary plumbing, overhead tank manifolds and soil-waste stacks.",
    detailedScope: [
      "Concealed CPVC hot and cold water distribution circuits",
      "PVC vertical drainage and soil stacks",
      "Overhead tank distribution manifolds with isolation valves",
      "Quality bathroom fixture installation and leak testing"
    ],
    description: "Premium residential housing community in Raipur featuring precision concealed plumbing and dependable sanitary water systems delivered on schedule.",
    keyHighlights: [
      "Zero pressure drops across distribution loops",
      "Vibration-damped acoustic pipe clamping",
      "100% leak-tested before handover"
    ]
  },
  {
    id: "avinash-one",
    slug: "avinash-one",
    title: "Avinash One",
    location: "VIP Road / Telibandha, Raipur, Chhattisgarh",
    category: "Commercial & High-Rise Plumbing",
    projectType: "Commercial & Luxury Residential High-Rise",
    client: "Avinash Group",
    architect: "Asna-Architect, Sandeep Neena Associate",
    scope: "Internal & External Plumbing",
    status: "Completed",
    featured: true,
    executionCategory: "Commercial Plumbing",
    coverImage: "/assets/projects/Avinash One 1.jpg",
    galleryImages: [
      "/assets/projects/Avinash One 1.jpg",
      "/assets/projects/Avinash One 2.jpg"
    ],
    scopeSummary: "High-rise multi-story commercial plumbing, pressure reducing stations and drainage risers.",
    detailedScope: [
      "Multi-story vertical water supply risers with PRV stations",
      "Commercial restroom plumbing and hydro-pneumatic boosting",
      "Underground water tank manifolds and fire fighting line integration",
      "External grease traps and commercial kitchen drainage"
    ],
    description: "Landmark high-rise mixed-use project in Raipur requiring complex multi-zone pressure regulation, high-volume drainage stacks, and central water boosting.",
    keyHighlights: [
      "Engineered pressure reduction valve (PRV) stations for uniform water pressure",
      "Heavy-traffic inspection manholes",
      "High durability commercial piping"
    ]
  },
  {
    id: "golf-greens",
    slug: "golf-greens",
    title: "Golf Greens Township",
    location: "Raipur, Chhattisgarh",
    category: "Irrigation & Underground Plumbing",
    projectType: "Residential Township & Golf Enclave",
    client: "Private Township Developers",
    architect: "Asna-Architect, Sandeep Neena Associate",
    scope: "Underground Drainage & Irrigation",
    status: "Completed",
    featured: false,
    executionCategory: "Water Supply",
    coverImage: "/assets/projects/Golf - 1.jpg",
    galleryImages: [
      "/assets/projects/Golf - 1.jpg",
      "/assets/projects/Golf - 2.jpg"
    ],
    scopeSummary: "Landscape irrigation pipeline, underground utility conduits, and stormwater retention networks.",
    detailedScope: [
      "Large-area underground HDPE sprinkler network",
      "Main transmission lines and solenoid valve control boxes",
      "Subsurface stormwater collection and recharge wells",
      "Villa perimeter water supply loop"
    ],
    description: "Sprawling golf living township in Raipur featuring automated landscape irrigation lines, extensive stormwater drainage, and underground water supply.",
    keyHighlights: [
      "Uniform hydraulic pressure across extensive terrain",
      "Subsurface pipe burial protected from landscaping machinery",
      "Eco-friendly rainwater retention wells"
    ]
  },
  {
    id: "lifestyle-township",
    slug: "lifestyle-township",
    title: "Lifestyle Residential Enclave",
    location: "Raipur, Chhattisgarh",
    category: "Residential Township Plumbing",
    projectType: "Residential Township",
    client: "Lifestyle Developers",
    architect: "Asna-Architect, Sandeep Neena Associate",
    scope: "Water Supply & Drainage Network",
    status: "Completed",
    featured: false,
    executionCategory: "Residential",
    coverImage: "/assets/projects/Lifestyle - 1.png",
    galleryImages: [
      "/assets/projects/Lifestyle - 1.png",
      "/assets/projects/Lifestyle - 2.png"
    ],
    scopeSummary: "Central water distribution, internal residential piping, and external sewer collection network.",
    detailedScope: [
      "Master underground water supply loop with isolation valves",
      "Internal sanitary drainage and water piping for residential units",
      "RCC sewer manholes and connecting branch conduits",
      "Hydrostatic testing and operational commissioning"
    ],
    description: "Comprehensive residential plumbing and infrastructure project in Raipur, establishing robust domestic water distribution and wastewater management.",
    keyHighlights: [
      "Robust underground pipe jointing for zero groundwater contamination",
      "Smooth gravity flow sanitary conduits",
      "Fast-track execution adhering to development deadlines"
    ]
  },
  {
    id: "rama-greens",
    slug: "rama-greens",
    title: "Rama Greens",
    location: "Bilaspur / Raipur, Chhattisgarh",
    category: "Underground Sewerage & Plumbing",
    projectType: "Residential Gated Community",
    client: "Rama Group",
    architect: "Asna-Architect, Sandeep Neena Associate",
    scope: "Plumbing, Sewerage & Stormwater Drainage",
    status: "Completed",
    featured: false,
    executionCategory: "Underground Infrastructure",
    coverImage: "/assets/projects/Rama Greens 1.jpg",
    galleryImages: [
      "/assets/projects/Rama Greens 1.jpg",
      "/assets/projects/Rama Greens 2.jpg"
    ],
    scopeSummary: "Underground sewerage network, rainwater runoff drainage, and domestic water distribution.",
    detailedScope: [
      "Trench excavation and rubber-ring jointed sewer line laying",
      "Cast-in-situ RCC manholes with hydraulic channel benching",
      "Stormwater collector pipeline and roadside gullies",
      "Internal sanitary and domestic water supply execution"
    ],
    description: "A premium gated residential development in Chhattisgarh featuring end-to-end underground civil infrastructure, sewer networks, and domestic plumbing.",
    keyHighlights: [
      "Heavy-traffic rated manhole frames and covers",
      "Continuous gravity sewer flow with zero stagnation",
      "High quality CPVC and PVC-U piping materials"
    ]
  },
  {
    id: "rama-high-street",
    slug: "rama-high-street",
    title: "Rama High Street Commercial Complex",
    location: "Bilaspur / Raipur, Chhattisgarh",
    category: "Commercial Plumbing & Fire Fighting",
    projectType: "Commercial Hub & Retail Complex",
    client: "Rama Group",
    architect: "Asna-Architect, Sandeep Neena Associate",
    scope: "Commercial Plumbing, Fire Fighting & Drainage",
    status: "Completed",
    featured: true,
    executionCategory: "Commercial Plumbing",
    coverImage: "/assets/projects/Rama High Street - 1.jpg",
    galleryImages: [
      "/assets/projects/Rama High Street - 1.jpg",
      "/assets/projects/Rama High Street - 2.jpg"
    ],
    scopeSummary: "Commercial sanitary systems, high-rise drainage stacks, fire fighting lines, and basement sumps.",
    detailedScope: [
      "Commercial mall restroom battery installations",
      "Basement sump pumps, booster sets and sewage ejector systems",
      "Fire fighting hydrant piping and sprinkler supply lines",
      "External drainage connection to city mains"
    ],
    description: "A premier high-traffic commercial retail hub. RD Plumbing Solution executed complete internal commercial plumbing, fire safety supply lines, and external civil drainage.",
    keyHighlights: [
      "Engineered for high daily visitor volumes",
      "Integrated grease traps and heavy-duty drainage sumps",
      "Full compliance with commercial fire and plumbing building codes"
    ]
  },
  {
    id: "sun-city",
    slug: "sun-city",
    title: "Sun City Township",
    location: "Raipur, Chhattisgarh",
    category: "Residential Plumbing & Infrastructure",
    projectType: "Residential Township",
    client: "Sun City Developers",
    architect: "Asna-Architect, Sandeep Neena Associate",
    scope: "Plumbing, Water Supply & Drainage",
    status: "Completed",
    featured: false,
    executionCategory: "Residential",
    coverImage: "/assets/projects/Sun City - 1.jpg",
    galleryImages: [
      "/assets/projects/Sun City - 1.jpg",
      "/assets/projects/Sun City - 2.jpg"
    ],
    scopeSummary: "Internal sanitary piping, external water supply loops, and sewer inspection chambers.",
    detailedScope: [
      "Concealed plumbing and drainage for township homes",
      "Underground water supply network with isolation valves",
      "Perimeter stormwater drainage channel construction",
      "Commissioning of overhead and underground water reservoirs"
    ],
    description: "Extensive residential project in Raipur with comprehensive water distribution, concealed home plumbing, and civil drainage infrastructure delivered by RD Plumbing Solution.",
    keyHighlights: [
      "Leak-proof execution with full pressure test documentation",
      "Durable corrosion-free piping network",
      "Reliable, long-lasting performance"
    ]
  }
];
