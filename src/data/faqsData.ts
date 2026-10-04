export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: "General" | "Services" | "Quotations & Process" | "Execution";
}

export const faqsData: FaqItem[] = [
  {
    id: "faq-1",
    question: "Where is RD Plumbing Solution located?",
    answer: "RD Plumbing Solution is based in Naya Raipur, Chhattisgarh, India. We operate directly across Chhattisgarh with capabilities to execute project contracts throughout India.",
    category: "General",
  },
  {
    id: "faq-2",
    question: "Do you undertake projects outside Chhattisgarh?",
    answer: "Yes. While our primary execution base is in Chhattisgarh (including Raipur, Naya Raipur, Durg, Bhilai, and Bilaspur), we undertake commercial, industrial, and infrastructure pipeline contracts pan-India based on project scale and requirements.",
    category: "General",
  },
  {
    id: "faq-3",
    question: "Do you handle commercial and residential projects?",
    answer: "Yes, we handle both sectors. We execute complete residential plumbing for housing societies and individual homes, as well as large-scale commercial sanitary systems, underground utility pipelines, and civil drainage works.",
    category: "Services",
  },
  {
    id: "faq-4",
    question: "What types of underground pipelines do you install?",
    answer: "We install HDPE (High-Density Polyethylene), DWC (Double Wall Corrugated) drainage pipes, DI (Ductile Iron) pressure pipes, uPVC / CPVC distribution conduits, and RCC hume pipes according to engineering project specifications.",
    category: "Services",
  },
  {
    id: "faq-5",
    question: "Do you provide stormwater and sewer line work?",
    answer: "Yes. We execute stormwater drainage channels, roadside catch basins, culverts, gravity sewer collector mains, and outfall linkages with precision invert slope setting.",
    category: "Services",
  },
  {
    id: "faq-6",
    question: "Do you undertake excavation and chamber construction?",
    answer: "Yes. We provide comprehensive civil execution including mechanical/manual trench excavation, bed preparation, shoring, backfilling, and construction of cast-in-situ RCC or brick inspection manholes and valve pits.",
    category: "Services",
  },
  {
    id: "faq-7",
    question: "Can I request a quotation online?",
    answer: "Yes. You can submit your project requirements, quantities, and site location via our online Request a Quotation page or connect directly through our official WhatsApp enquiry channel.",
    category: "Quotations & Process",
  },
  {
    id: "faq-8",
    question: "Can I share project drawings?",
    answer: "Yes. Our quotation portal supports uploading PDF architectural/MEP drawings, site photographs, and BOQ sheets to help our team understand your project scope accurately.",
    category: "Quotations & Process",
  },
  {
    id: "faq-9",
    question: "How is project pricing determined?",
    answer: "Project pricing is calculated transparently based on verified Bill of Quantities (BOQ), pipeline running length, trench depth, soil profile, pipe material class, chamber dimensions, and site access conditions.",
    category: "Quotations & Process",
  },
  {
    id: "faq-10",
    question: "Can I request a site inspection?",
    answer: "Yes. Following an initial review of your project requirements, we can arrange an on-site assessment to verify ground levels, existing underground utility obstacles, and trenching alignments.",
    category: "Execution",
  },
];
