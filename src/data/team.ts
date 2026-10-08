export interface TeamDiscipline {
  code: string;
  name: string;
  role: string;
  focus: string;
  systemRole: string;
  deliverableFocus: string;
}

export interface OperatingUnit {
  headline: string;
  subheadline: string;
  coreStatement: string;
  philosophy: string;
  locationDetails: string;
  disciplines: TeamDiscipline[];
  operatingValues: {
    title: string;
    description: string;
  }[];
}

export const teamData: OperatingUnit = {
  headline: "THE TEAM",
  subheadline: "A Dedicated Creative Operating Unit",
  coreStatement: "BUILT BY PEOPLE. POWERED BY SYSTEMS.",
  philosophy:
    "We don't operate as a bloated hierarchy with endless account managers playing telephone between clients and creatives. Panknox deploys a specialized, tightly integrated creative operating unit directly linked to your business objectives.",
  locationDetails: "Studio HQ: Jaipur, Rajasthan, India. Operating across global commercial standards.",
  disciplines: [
    {
      code: "U-01",
      name: "Strategy",
      role: "Commercial Analysis & Brand Architecture",
      focus: "Translating business unit economics, margins, and market voids into defensible positioning.",
      systemRole: "Cognitive Vector Lead",
      deliverableFocus: "Positioning Briefs, Narrative Frameworks & Channel Strategy",
    },
    {
      code: "U-02",
      name: "Creative Direction",
      role: "Aesthetic Grammar & Art Direction",
      focus: "Guiding visual restraint, typographical hierarchy, color harmony, and sensory distinction.",
      systemRole: "Visual Protocol Custodian",
      deliverableFocus: "Design Systems, Art Direction & Campaign Creative Blueprints",
    },
    {
      code: "U-03",
      name: "Content & Editorial",
      role: "Narrative Craft & Scriptwriting",
      focus: "Writing copy with sharpness, voice, and purpose. Extracting founder and engineering intelligence.",
      systemRole: "Narrative Voice",
      deliverableFocus: "Scripts, Thought Leadership Columns, Educational Breakdowns",
    },
    {
      code: "U-04",
      name: "Cinematography & Motion",
      role: "Visual Production & Dynamic Media",
      focus: "Capturing factory machines, clinical procedures, and architectural spaces with cinema-grade craft.",
      systemRole: "Sensory Capture Unit",
      deliverableFocus: "4K Process Films, Short-Form Vertical Video, 2D/3D Motion Graphics",
    },
    {
      code: "U-05",
      name: "Design & Typography",
      role: "Spatial Layout & Graphic Precision",
      focus: "Inter-based typography hierarchy, print and digital collateral, editorial catalogs.",
      systemRole: "Spatial & Surface Design",
      deliverableFocus: "Editorial Catalogs, Social Graphic Systems, Trade Collateral",
    },
    {
      code: "U-06",
      name: "Performance & Growth",
      role: "Paid Media & Algorithmic Distribution",
      focus: "Architecting Meta and Google campaign infrastructures, audience testing, and lead qualification.",
      systemRole: "Algorithmic Leverage",
      deliverableFocus: "Performance Campaigns, Conversion Tracking, Cohort Analysis",
    },
    {
      code: "U-07",
      name: "Web & Engineering",
      role: "Digital Architecture & User Experience",
      focus: "Building lightning-fast, high-conversion web platforms with meticulous interaction details.",
      systemRole: "Interactive System Engine",
      deliverableFocus: "Next.js Platforms, Conversion Landing Pages, UX Systems",
    },
  ],
  operatingValues: [
    {
      title: "Direct Access, Zero Bureaucracy",
      description: "You work directly with the thinkers, directors, and builders shaping your market presence.",
    },
    {
      title: "Rooted in Jaipur, Built for Scale",
      description: "Ground-level commercial understanding combined with international aesthetic execution.",
    },
    {
      title: "Obsession with Nuance",
      description: "From a single word in a headline to the exact frame rate of a technical video, details make the brand.",
    },
  ],
};
