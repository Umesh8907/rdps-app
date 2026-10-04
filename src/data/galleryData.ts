export interface GalleryItem {
  id: string;
  title: string;
  category: "Pipeline" | "Excavation" | "Chambers" | "Concrete Work" | "Plumbing" | "Ongoing" | "Completed";
  categoryLabel: string;
  imageUrl: string;
  location: string;
  description: string;
}

export const galleryCategories = [
  "All",
  "Pipeline",
  "Excavation",
  "Chambers",
  "Concrete Work",
  "Plumbing",
  "Ongoing",
  "Completed",
] as const;

export const galleryData: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Underground Corrugated DWC Pipeline Installation",
    category: "Pipeline",
    categoryLabel: "Pipeline Installation",
    imageUrl: "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=1200&q=80",
    location: "Naya Raipur, CG",
    description: "Aligning and lowering heavy-duty corrugated drainage pipes into prepared granular bedding.",
  },
  {
    id: "gal-2",
    title: "Precision Trench Excavation & Level Setting",
    category: "Excavation",
    categoryLabel: "Excavation",
    imageUrl: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80",
    location: "Raipur, CG",
    description: "Trench excavation to designated invert depths with safe side slopes and bed preparation.",
  },
  {
    id: "gal-3",
    title: "Cast-In-Situ RCC Chamber Construction",
    category: "Chambers",
    categoryLabel: "Chamber Construction",
    imageUrl: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1200&q=80",
    location: "Durg, CG",
    description: "Formwork and reinforcement fabrication for heavy-duty traffic inspection chambers.",
  },
  {
    id: "gal-4",
    title: "High-Pressure HDPE Butt-Fusion Welding",
    category: "Pipeline",
    categoryLabel: "Pipeline Installation",
    imageUrl: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80",
    location: "Bhilai, CG",
    description: "On-site thermal butt-welding for continuous potable water transmission pipeline.",
  },
  {
    id: "gal-5",
    title: "Structural Concrete Work for Outfall Sump",
    category: "Concrete Work",
    categoryLabel: "Concrete Work",
    imageUrl: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
    location: "Naya Raipur, CG",
    description: "Reinforced concrete base slab and wall casting for underground drainage sumps.",
  },
  {
    id: "gal-6",
    title: "Commercial Multi-Story Sanitary Riser Piping",
    category: "Plumbing",
    categoryLabel: "Plumbing",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    location: "Raipur, CG",
    description: "Vertical drainage stack and soil-waste riser clamping in commercial utility shafts.",
  },
  {
    id: "gal-7",
    title: "Ongoing Trenching & Pipe Bedding Activity",
    category: "Ongoing",
    categoryLabel: "Ongoing Execution",
    imageUrl: "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=1200&q=80",
    location: "Naya Raipur, CG",
    description: "Active worksite showing laser-guided slope verification and pipe alignment.",
  },
  {
    id: "gal-8",
    title: "Finished Inspection Chamber with Heavy Cover",
    category: "Completed",
    categoryLabel: "Completed Work",
    imageUrl: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1200&q=80",
    location: "Bhilai, CG",
    description: "Completed sewer manhole with flush road-level cast frame and watertight seal.",
  },
  {
    id: "gal-9",
    title: "Residential Concealed Sanitary Plumbing Installation",
    category: "Plumbing",
    categoryLabel: "Plumbing",
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    location: "Raipur, CG",
    description: "Precision wall chasing and CPVC hot/cold distribution line routing.",
  },
];
