export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  iconName: string;
  heroImage: string;
  headline: string;
  introduction: string;
  scope: string[];
  applications: string[];
  executionApproach: {
    title: string;
    description: string;
  }[];
  relatedProjects: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const servicesData: ServiceItem[] = [
  {
    id: "underground-pipeline-installation",
    slug: "underground-pipeline-installation",
    title: "Underground Pipeline Installation",
    shortDescription: "Professional pipeline laying, alignment, jointing and backfilling for drainage, water and infrastructure developments.",
    iconName: "Network",
    heroImage: "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=1400&q=80",
    headline: "Underground Pipeline Installation Services",
    introduction: "RD Plumbing Solution delivers professional underground pipeline laying, precision trench preparation, and associated civil execution for residential, commercial, and municipal infrastructure developments across Chhattisgarh and India.",
    scope: [
      "Trench preparation and level setting",
      "Pipeline alignment and gradient calibration",
      "HDPE, DWC corrugated, DI, uPVC and concrete pipe laying",
      "Jointing according to engineering specifications",
      "Granular bedding and controlled backfilling",
      "Associated civil inspection connections",
      "On-site execution coordination and testing supervision",
    ],
    applications: [
      "Residential township utility corridors",
      "Commercial complex drainage and supply lines",
      "Industrial plant underground utility networks",
      "Roadside stormwater carrier pipelines",
      "Institutional and educational campus infrastructure",
    ],
    executionApproach: [
      {
        title: "1. Site Inspection & Level Verification",
        description: "Review of ground levels, existing subterranean obstacles, and alignment benchmarks prior to excavation.",
      },
      {
        title: "2. Precision Trench Excavation",
        description: "Excavation to required depths with designated bed slopes to ensure gravity-assisted flow where applicable.",
      },
      {
        title: "3. Bedding & Pipe Placement",
        description: "Placement of sand/granular bedding followed by careful lowering, alignment, and secure jointing of pipes.",
      },
      {
        title: "4. Joint Inspection & Backfilling",
        description: "Checking joints for integrity, controlled layer-by-layer backfilling, and mechanical compaction to avoid surface settlement.",
      },
    ],
    relatedProjects: ["commercial-pipeline-raipur", "residential-township-drainage", "industrial-water-supply-bhilai"],
    faqs: [
      {
        question: "What pipe materials do you install for underground projects?",
        answer: "We handle a wide range of standard pipes including HDPE (High-Density Polyethylene), DWC (Double Wall Corrugated) pipes for drainage, DI (Ductile Iron), uPVC, CPVC, and RCC hume pipes based on project drawings.",
      },
      {
        question: "How do you ensure correct gradient in underground gravity lines?",
        answer: "Our team uses optical leveling equipment, boning rods, and laser levels on-site during trench preparation and pipe bed placement to adhere strictly to specified flow slopes.",
      },
    ],
  },
  {
    id: "stormwater-drainage",
    slug: "stormwater-drainage",
    title: "Stormwater Drainage",
    shortDescription: "Surface runoff drainage channels, box culverts, underground stormwater conduits and catchment connections.",
    iconName: "CloudRain",
    heroImage: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1400&q=80",
    headline: "Stormwater Drainage & Runoff Management",
    introduction: "Effective stormwater drainage is vital to prevent waterlogging, soil erosion, and structural foundation damage. We construct reliable underground and surface stormwater drainage systems built for heavy monsoon runoff.",
    scope: [
      "Underground stormwater conduit installation",
      "Precast and cast-in-situ open drain construction",
      "Catch basin and roadside gully trap installations",
      "Rainwater runoff retention and percolation trenching",
      "Outfall connection to municipal drainage networks",
      "Culvert crossings and crossing protection works",
    ],
    applications: [
      "Commercial tech parks and logistics yards",
      "Gated residential communities and townships",
      "Industrial estate road networks",
      "Institutional campuses and sports grounds",
    ],
    executionApproach: [
      {
        title: "1. Runoff Route Planning",
        description: "Analyzing site topography and natural flow lines according to engineering drainage layouts.",
      },
      {
        title: "2. Drainage Channel & Trench Construction",
        description: "Excavation and leveling of stormwater courses with proper discharge slopes.",
      },
      {
        title: "3. Conduit Installation & Gully Trapping",
        description: "Installing DWC/RCC pipes and integrating surface gratings, silt traps, and catch basins.",
      },
      {
        title: "4. Handover & Flow Verification",
        description: "Inspecting free gravity discharge into designated collection ponds or stormwater trunk mains.",
      },
    ],
    relatedProjects: ["stormwater-network-naya-raipur", "residential-township-drainage"],
    faqs: [
      {
        question: "Can stormwater drainage be combined with sewerage lines?",
        answer: "No. In modern infrastructure standards, stormwater drainage and sanitary sewer lines are kept strictly separate to prevent overflow contamination and treatment overload.",
      },
      {
        question: "Do you build silt traps and catchpits?",
        answer: "Yes, we construct RCC and brick-masonry silt traps with removable iron/RCC gratings to capture debris before water enters main carrier conduits.",
      },
    ],
  },
  {
    id: "sewer-line-installation",
    slug: "sewer-line-installation",
    title: "Sewer Line Installation",
    shortDescription: "Underground gravity sewer mains, collector lines, drop connections and STP feeder networks.",
    iconName: "Waves",
    heroImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=80",
    headline: "Sewer Line & Underground Sewerage Execution",
    introduction: "We execute gravity sewer lines, collector pipeline networks, and STP inlet trunk connections with strict adherence to slope gradients, joint watertightness, and chamber integration.",
    scope: [
      "Trunk and branch gravity sewer pipe laying",
      "DWC, PVC-U and RCC sewer pipe jointing with elastomeric rubber rings",
      "Alignment and depth calibration for self-cleansing velocity",
      "Drop connections and intermediate manhole linkages",
      "Connecting building waste outlets to main sewer collectors",
      "STP (Sewage Treatment Plant) inlet pipeline routing",
    ],
    applications: [
      "Residential apartment complexes and plotted layouts",
      "Commercial office complexes and shopping malls",
      "Hotels, hospitals and educational institutions",
      "Industrial estate effluent and sanitary lines",
    ],
    executionApproach: [
      {
        title: "1. Invert Level Calibration",
        description: "Verifying invert levels between manholes to achieve continuous self-cleansing flow velocity.",
      },
      {
        title: "2. Pipe Laying & Watertight Jointing",
        description: "Utilizing flexible rubber ring seals or solvent-cement joints to prevent root intrusion and ground leakage.",
      },
      {
        title: "3. Chamber Integration",
        description: "Connecting pipeline terminations smoothly into RCC or brick inspection chambers with benching.",
      },
      {
        title: "4. Leakage & Obstruction Testing",
        description: "Performing smoke/water mirror tests before backfilling to guarantee clear flow channels.",
      },
    ],
    relatedProjects: ["sewerage-trunk-line-durg", "residential-township-drainage"],
    faqs: [
      {
        question: "How do you prevent sewer blockages in underground pipes?",
        answer: "By maintaining strict self-cleansing flow gradients, installing smooth-bore DWC/PVC pipes, constructing smooth channeled benching in manholes, and placing inspection chambers at regular intervals and direction changes.",
      },
    ],
  },
  {
    id: "water-supply-pipeline",
    slug: "water-supply-pipeline",
    title: "Water Supply Pipeline",
    shortDescription: "Potable water distribution lines, underground HDPE/DI feeder mains, overhead tank connections and booster networks.",
    iconName: "Droplet",
    heroImage: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1400&q=80",
    headline: "Potable Water Supply & Distribution Pipelines",
    introduction: "RD Plumbing Solution installs robust potable water supply networks, pressurized distribution mains, underground sump feeder lines, and booster pump distribution systems for residential and commercial complexes.",
    scope: [
      "HDPE butt-welded and electrofusion water main installation",
      "Ductile Iron (DI) socket-spigot water transmission pipes",
      "CPVC, UPVC and composite distribution networks",
      "Air release valve, sluice valve and scour valve chamber installations",
      "Underground sump to overhead tank (OHT) riser pipeline work",
      "Hydrostatic pressure testing before backfilling",
    ],
    applications: [
      "Residential societies and multi-story towers",
      "Township drinking water distribution",
      "Commercial complexes, hospitals and hotels",
      "Industrial utility water supply loops",
    ],
    executionApproach: [
      {
        title: "1. Pressure Rating Selection & Layout",
        description: "Checking pipe pressure classes (PN6, PN10, PN16) against design pump head requirements.",
      },
      {
        title: "2. Jointing & Welding Execution",
        description: "Executing butt-fusion / electrofusion for HDPE and flange/socket jointing for DI pipes.",
      },
      {
        title: "3. Valve Chamber & Thrust Block Creation",
        description: "Casting concrete thrust blocks at pipeline bends and building valve chambers for operational control.",
      },
      {
        title: "4. Pressure Testing",
        description: "Executing hydrostatic pressure tests to verify joint integrity under working conditions.",
      },
    ],
    relatedProjects: ["industrial-water-supply-bhilai", "commercial-pipeline-raipur"],
    faqs: [
      {
        question: "Do you perform butt-fusion welding for HDPE water lines?",
        answer: "Yes, our technicians execute on-site butt-fusion and electrofusion jointing with proper temperature and cooling controls for seamless, leak-proof joints.",
      },
    ],
  },
  {
    id: "excavation-and-trenching",
    slug: "excavation-and-trenching",
    title: "Excavation & Trenching",
    shortDescription: "Mechanical and manual precision trenching, shoring, soil grading, rock chipping and utility trench backfilling.",
    iconName: "Shovel",
    heroImage: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1400&q=80",
    headline: "Civil Excavation & Utility Trenching Services",
    introduction: "Accurate excavation is the foundation of any long-lasting underground infrastructure. We handle trenching across various soil profiles with precision depth control, safe side slopes, and efficient backfill compaction.",
    scope: [
      "JCB and mini-excavator mechanical trenching",
      "Manual trim trenching in congested utility zones",
      "Trench depth calibration and bottom leveling",
      "Trench shoring and safety barrier installation",
      "Excavated soil carting and site clearing",
      "Layered backfilling and mechanical plate compaction",
    ],
    applications: [
      "Underground utility trenches (Plumbing, Electrical, Telecom)",
      "Stormwater channel foundations",
      "Manhole and septic tank pit excavation",
      "Footing and chamber excavations",
    ],
    executionApproach: [
      {
        title: "1. Utility Scanning & Marking",
        description: "Careful surface marking and coordination to prevent damage to existing buried services.",
      },
      {
        title: "2. Controlled Excavation",
        description: "Machine and manual excavation maintaining safe slope angles and exact trench widths.",
      },
      {
        title: "3. Bed Preparation",
        description: "Removing sharp boulders and preparing flat, compacted beds for pipeline laying.",
      },
      {
        title: "4. Systematic Backfill & Compaction",
        description: "Backfilling in 150-200mm layers with mechanical compaction to eliminate future road or pavement sinking.",
      },
    ],
    relatedProjects: ["stormwater-network-naya-raipur", "sewerage-trunk-line-durg"],
    faqs: [
      {
        question: "How do you avoid damaging existing underground cables or pipes during excavation?",
        answer: "We perform careful site pilot pitting and manual trial excavations in sensitive zones before deploying heavy excavators.",
      },
    ],
  },
  {
    id: "rcc-chambers-and-manholes",
    slug: "rcc-chambers-and-manholes",
    title: "RCC Chambers & Manholes",
    shortDescription: "Cast-in-situ and precast reinforced concrete inspection chambers, valve pits, interceptor traps and manholes.",
    iconName: "Layers",
    heroImage: "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=1400&q=80",
    headline: "RCC Chambers, Manholes & Inspection Pits",
    introduction: "RD Plumbing Solution constructs heavy-duty RCC and brick masonry inspection chambers, sewer manholes, and utility valve pits designed to endure heavy vehicular traffic and resist groundwater ingress.",
    scope: [
      "RCC cast-in-situ manhole and chamber construction",
      "Precast concrete manhole ring placement and joint sealing",
      "Smooth internal cement plastering and water-repellent finishing",
      "Semicircular bottom flow benching (channeling)",
      "Heavy-duty SFRC / Cast Iron / Ductile Iron frame & cover installation",
      "Step iron and ladder fixing for safe utility access",
    ],
    applications: [
      "Roadway and parking area sewer manholes",
      "Water supply sluice valve and air valve chambers",
      "Stormwater inspection pits and silt catchers",
      "Grease and oil interceptor chambers for commercial kitchens",
    ],
    executionApproach: [
      {
        title: "1. Base Slab Concrete Casting",
        description: "Pouring reinforced M20/M25 grade concrete base slab on a sound compacted PCC bed.",
      },
      {
        title: "2. Wall Construction & Pipe Inlets",
        description: "Building RCC walls with water-tight cast-in pipe sleeves or puddle flanges.",
      },
      {
        title: "3. Flow Benching & Internal Finishing",
        description: "Hand-forming hydraulic flow channels with smooth cement rendering to avoid sediment accumulation.",
      },
      {
        title: "4. Frame & Cover Setting",
        description: "Fixing traffic-grade manhole covers flush with final road or pavement levels.",
      },
    ],
    relatedProjects: ["stormwater-network-naya-raipur", "sewerage-trunk-line-durg"],
    faqs: [
      {
        question: "What cover load ratings do you provide?",
        answer: "We install covers matching specified site traffic requirements, from light-duty pedestrian covers (2.5T) to heavy-duty vehicular (20T / 40T) SFRC and ductile iron covers.",
      },
    ],
  },
  {
    id: "commercial-plumbing",
    slug: "commercial-plumbing",
    title: "Commercial Plumbing",
    shortDescription: "Complete internal and external sanitary, soil, waste, vent and water supply piping for commercial complexes.",
    iconName: "Building2",
    heroImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80",
    headline: "Commercial Plumbing & Sanitary Systems",
    introduction: "Commercial facilities demand high-reliability plumbing infrastructure capable of high-volume usage. We deliver comprehensive commercial sanitary piping, pressure boosting systems, and drainage networks.",
    scope: [
      "Multi-story Soil, Waste, and Vent (S.W.V.) riser piping",
      "Hydro-pneumatic booster pump manifold plumbing",
      "Commercial restroom battery fixture installations",
      "Hot water circulation and solar heating loop piping",
      "Kitchen grease trap and waste line integration",
      "Rooftop rainwater harvesting down-take piping",
    ],
    applications: [
      "Shopping malls and retail complexes",
      "Office buildings and IT parks",
      "Hospitals and diagnostic healthcare centers",
      "Hotels, banquet halls and restaurants",
    ],
    executionApproach: [
      {
        title: "1. Drawing Review & Shaft Planning",
        description: "Detailed coordination of plumbing shafts, sleeve openings, and drop ceiling alignments.",
      },
      {
        title: "2. Core Drilling & Pipe Clamping",
        description: "Installing vibration-damped pipe hangers, acoustic insulation, and secure wall clamps.",
      },
      {
        title: "3. Pressure Testing & Sectional Checks",
        description: "Hydrostatic testing of water lines and vertical smoke/water testing for drainage stacks.",
      },
      {
        title: "4. Sanitary Fixture Fitting & Commissioning",
        description: "Precision installation of sensor taps, concealed flush valves, urinal batteries, and commissioning.",
      },
    ],
    relatedProjects: ["commercial-pipeline-raipur"],
    faqs: [
      {
        question: "Can you execute plumbing works during off-hours for operational buildings?",
        answer: "Yes, we coordinate execution schedules to minimize disruption in operational commercial establishments.",
      },
    ],
  },
  {
    id: "residential-plumbing",
    slug: "residential-plumbing",
    title: "Residential Plumbing",
    shortDescription: "Premium concealed and exposed plumbing, bathroom drainage, overhead tank setups and society pipelines.",
    iconName: "Home",
    heroImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80",
    headline: "Residential Plumbing & Sanitary Installations",
    introduction: "From luxury private residences to large multi-unit apartment complexes, RD Plumbing Solution delivers precision concealed CPVC/PPR water supply, silent drainage stacks, and trouble-free sanitary installations.",
    scope: [
      "Concealed CPVC / Composite hot and cold water piping",
      "Bathroom, kitchen and utility drain line execution",
      "Concealed cisterns and wall-hung toilet frame fixing",
      "Overhead water tank (OHT) and underground sump plumbing",
      "Pressure booster pump installation and automation piping",
      "Society main water distribution line renewal",
    ],
    applications: [
      "Independent luxury villas and bungalows",
      "Residential apartment buildings and towers",
      "Gated community housing societies",
      "Residential renovation and bathroom re-piping",
    ],
    executionApproach: [
      {
        title: "1. Wall Chasing & Layout Marking",
        description: "Accurate wall grooving using wall-chasing machines to avoid structural damage.",
      },
      {
        title: "2. Leak-Proof Pipe Fitting",
        description: "Jointing CPVC/PPR pipes using solvent cement or thermal welding with brass fittings.",
      },
      {
        title: "3. Pressure Testing Prior to Plastering",
        description: "Pressurizing the entire concealed network up to 10-15 bar to guarantee 100% leak-proof walls.",
      },
      {
        title: "4. Final Fixture Trim Installation",
        description: "Mounting diverters, shower panels, faucets, and sanitary ware after tiling completion.",
      },
    ],
    relatedProjects: ["residential-township-drainage"],
    faqs: [
      {
        question: "How do you prevent leakage behind bathroom tiles?",
        answer: "We perform stringent hydrostatic pressure testing under high pressure for 24 hours prior to plastering and tiling, ensuring all concealed joints are completely watertight.",
      },
    ],
  },
  {
    id: "irrigation-pipeline-work",
    slug: "irrigation-pipeline-work",
    title: "Irrigation Pipeline Work",
    shortDescription: "Underground agricultural feeder mains, landscape sprinkler conduits, drip irrigation supply and pump connections.",
    iconName: "Trees",
    heroImage: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1400&q=80",
    headline: "Irrigation Pipeline & Landscape Watering Networks",
    introduction: "We install underground HDPE and PVC irrigation distribution lines for agricultural farms, public parks, highway green belts, and commercial landscaped estates.",
    scope: [
      "Underground HDPE & PVC main line trenching and laying",
      "Automated landscape sprinkler feed network installation",
      "Drip irrigation header and sub-main pipeline connection",
      "Agricultural pump delivery line and air-release chambers",
      "Solenoide valve box and control station civil works",
      "Filtration unit and fertigation injector manifold piping",
    ],
    applications: [
      "Large-scale commercial farms and orchards",
      "Municipal parklands, gardens and botanical spaces",
      "Residential township central green zones",
      "Highway median and road verge landscaping",
    ],
    executionApproach: [
      {
        title: "1. Hydraulic Zone Layout",
        description: "Dividing site into balanced flow zones based on water source discharge and pressure.",
      },
      {
        title: "2. Underground Pipe Laying",
        description: "Laying UV-stabilized and durable HDPE/PVC lines below cultivation and lawn tilling depth.",
      },
      {
        title: "3. Valve & Riser Placement",
        description: "Installing pop-up sprinkler risers, quick-coupling valves, and protected control boxes.",
      },
      {
        title: "4. Flow & Pressure Testing",
        description: "Commissioning zones to ensure uniform water delivery across all emitters.",
      },
    ],
    relatedProjects: ["industrial-water-supply-bhilai"],
    faqs: [
      {
        question: "What depth are irrigation pipelines buried?",
        answer: "Typically between 450mm to 750mm below finished ground level to prevent damage from lawn aerators, agricultural machinery, or landscaping activity.",
      },
    ],
  },
];
