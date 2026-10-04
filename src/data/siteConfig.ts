export interface SiteConfig {
  name: string;
  legalName: string;
  tagline: string;
  supportingStatement: string;
  alternativeHeadline: string;
  location: {
    city: string;
    state: string;
    country: string;
    fullOfficeAddress: string;
    googleMapsEmbedUrl?: string;
  };
  contact: {
    phone: string;
    phoneDisplay: string;
    whatsapp: string;
    whatsappDisplay: string;
    email: string;
    workingHours: string;
  };
  coverage: {
    primary: string;
    scope: string;
  };
  navigation: {
    main: { name: string; href: string; dropdown?: { name: string; href: string; description?: string }[] }[];
    footer: {
      services: { name: string; href: string }[];
      company: { name: string; href: string }[];
      locations: { name: string; href: string }[];
    };
  };
  whatsappPrefill: string;
}

export const siteConfig: SiteConfig = {
  name: "RD Plumbing Solution",
  legalName: "RD Plumbing Solution",
  tagline: "Built Below. Trusted Above.",
  supportingStatement: "Reliable Plumbing & Underground Infrastructure Solutions.",
  alternativeHeadline: "Engineering Reliable Flow. Building Infrastructure That Lasts.",
  location: {
    city: "Naya Raipur",
    state: "Chhattisgarh",
    country: "India",
    fullOfficeAddress: "Naya Raipur, Chhattisgarh, India (Office details to be updated)",
  },
  contact: {
    phone: process.env.NEXT_PUBLIC_CONTACT_PHONE || "+91-9876543210",
    phoneDisplay: "+91 98765 43210",
    whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+919876543210",
    whatsappDisplay: "+91 98765 43210",
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "contact@rdplumbingsolution.com",
    workingHours: "Monday - Saturday: 8:30 AM - 7:00 PM IST",
  },
  coverage: {
    primary: "Chhattisgarh (Naya Raipur, Raipur, Durg, Bhilai, Bilaspur)",
    scope: "Project execution available across all states in India",
  },
  navigation: {
    main: [
      { name: "Home", href: "/" },
      { name: "About", href: "/about" },
      {
        name: "Services",
        href: "/services",
        dropdown: [
          { name: "Underground Pipeline Installation", href: "/services/underground-pipeline-installation", description: "Trenching, pipeline laying, jointing & underground utility networks" },
          { name: "Stormwater Drainage", href: "/services/stormwater-drainage", description: "Surface runoff drainage, concrete channels & pipeline execution" },
          { name: "Sewer Line Installation", href: "/services/sewer-line-installation", description: "Gravity sewer pipelines, gradient setting & main connections" },
          { name: "Water Supply Pipeline", href: "/services/water-supply-pipeline", description: "Potable water distribution lines, HDPE/DI/uPVC networks" },
          { name: "Excavation & Trenching", href: "/services/excavation-and-trenching", description: "Precision mechanical & manual trench excavation and backfilling" },
          { name: "RCC Chambers & Manholes", href: "/services/rcc-chambers-and-manholes", description: "Cast-in-situ and precast inspection chambers and manholes" },
          { name: "Commercial Plumbing", href: "/services/commercial-plumbing", description: "Complete internal & external plumbing for commercial facilities" },
          { name: "Residential Plumbing", href: "/services/residential-plumbing", description: "High-grade plumbing for societies, apartments & individual homes" },
          { name: "Irrigation Pipeline Work", href: "/services/irrigation-pipeline-work", description: "Agricultural, landscaping and municipal utility irrigation networks" },
        ],
      },
      {
        name: "Projects",
        href: "/projects",
        dropdown: [
          { name: "All Projects", href: "/projects", description: "Explore our complete execution portfolio" },
          { name: "Ongoing Execution", href: "/projects/ongoing", description: "Current active worksites in progress" },
          { name: "Completed Projects", href: "/projects/completed", description: "Successfully delivered infrastructure works" },
        ],
      },
      { name: "Gallery", href: "/gallery" },
      { name: "Areas We Serve", href: "/areas-we-serve" },
      { name: "Contact", href: "/contact" },
    ],
    footer: {
      services: [
        { name: "Underground Pipeline Installation", href: "/services/underground-pipeline-installation" },
        { name: "Stormwater Drainage", href: "/services/stormwater-drainage" },
        { name: "Sewer Line Installation", href: "/services/sewer-line-installation" },
        { name: "Water Supply Pipeline", href: "/services/water-supply-pipeline" },
        { name: "Excavation & Trenching", href: "/services/excavation-and-trenching" },
        { name: "RCC Chambers & Manholes", href: "/services/rcc-chambers-and-manholes" },
        { name: "Commercial Plumbing", href: "/services/commercial-plumbing" },
        { name: "Residential Plumbing", href: "/services/residential-plumbing" },
        { name: "Irrigation Pipeline Work", href: "/services/irrigation-pipeline-work" },
      ],
      company: [
        { name: "About Us", href: "/about" },
        { name: "Projects Portfolio", href: "/projects" },
        { name: "Worksites Gallery", href: "/gallery" },
        { name: "Client Testimonials", href: "/testimonials" },
        { name: "Frequently Asked Questions", href: "/faqs" },
        { name: "Request a Quotation", href: "/request-a-quotation" },
        { name: "Privacy Policy", href: "/privacy-policy" },
      ],
      locations: [
        { name: "Naya Raipur", href: "/areas-we-serve#naya-raipur" },
        { name: "Raipur", href: "/areas-we-serve#raipur" },
        { name: "Durg & Bhilai", href: "/areas-we-serve#durg-bhilai" },
        { name: "Bilaspur", href: "/areas-we-serve#bilaspur" },
        { name: "Across Chhattisgarh", href: "/areas-we-serve#chhattisgarh" },
        { name: "Pan-India Enquiries", href: "/areas-we-serve#pan-india" },
      ],
    },
  },
  whatsappPrefill: encodeURIComponent(
    `Hello RD Plumbing Solution,\n\nI would like to enquire about your services.\n\nProject Type: \nRequired Service: \nProject Location: \nApproximate Project Size: \n\nPlease contact me to discuss the requirements and quotation.\n\nThank you.`
  ),
};
