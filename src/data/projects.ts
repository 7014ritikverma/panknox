export interface ProjectCaseStudy {
  id: string;
  slug: string;
  number: string;
  title: string;
  client: string;
  clientDescriptor: string;
  industry: string;
  partnership: string;
  nda: boolean;
  quote?: string;
  summary: string;
  context: string;
  challenge: string;
  approach: string;
  deliverables: string[];
  outcome: string;
  visualTone: {
    primaryColor: string;
    tags: string[];
  };
  nextProjectSlug: string;
}

export const projectsData: ProjectCaseStudy[] = [
  {
    id: "premium-interior-manufacturing",
    slug: "premium-interior-manufacturing",
    number: "01",
    title: "Long-Term Creative Partnership for Premium Interior Manufacturing",
    client: "Premium Interior Manufacturing Brand",
    clientDescriptor: "Premium Interior Products & Architectural Surfaces Manufacturer",
    industry: "Interiors & Manufacturing",
    partnership: "2023 – Present",
    nda: true,
    summary:
      "From project-based collaboration to managing nearly 90% of ongoing creative requirements across product launches, catalogues, and dealer networks.",
    context:
      "What started as project-based design work evolved into a multi-year creative partnership embedded within the brand's commercial operations.",
    challenge:
      "The brand required rapid, consistent, high-standard visual communication across disparate commercial touchpoints—including product launches, sales teams, distributor channels, and physical exhibitions—without compromising aesthetic prestige.",
    approach:
      "Panknox established a unified creative system acting as the brand's primary creative arm across departments, ensuring seamless consistency from industrial packaging to exhibition films.",
    deliverables: [
      "Product launch campaigns",
      "Product catalogues & sales manuals",
      "Corporate brochures & presentations",
      "Packaging design & technical labeling",
      "Logo animations & identity motion",
      "Exhibition & product videos",
      "Social media creatives & digital systems",
      "Dealer marketing collateral & retail kits",
      "Corporate presentations & stakeholder decks",
    ],
    outcome:
      "The partnership expanded from project-based work to handling nearly 90% of ongoing creative requirements across departments, providing sustained creative continuity and rapid turnaround.",
    visualTone: {
      primaryColor: "#30C682",
      tags: ["Interior Products", "Manufacturing", "Long-Term Partnership"],
    },
    nextProjectSlug: "cygni-energy",
  },
  {
    id: "cygni-energy",
    slug: "cygni-energy",
    number: "02",
    title: "Brand Communication & Collateral for Clean Energy Storage",
    client: "Cygni Energy",
    clientDescriptor: "EV Batteries & Energy Storage Technology",
    industry: "Manufacturing & Clean Energy",
    partnership: "2021 – Present",
    nda: false,
    quote: "We don't need to explain our brand every time. You already understand how we communicate.",
    summary:
      "Serving as an extended creative team across print and digital media for a rapidly scaling clean energy and battery technology brand.",
    context:
      "Cygni Energy is an innovative pioneer in energy storage and EV battery systems, operating at the intersection of complex electrical engineering and high-velocity commercial growth.",
    challenge:
      "Communicating technical energy specifications accurately to enterprise stakeholders, investors, and industrial clients while maintaining an agile design turnaround across print and digital media.",
    approach:
      "By developing deep institutional understanding of Cygni's technology, Panknox eliminated onboarding friction, delivering fast, brand-consistent marketing collateral without requiring repetitive explanations.",
    deliverables: [
      "Technical marketing collateral & spec sheets",
      "Corporate presentations & stakeholder decks",
      "Print & digital communication systems",
      "Product brochures & exhibition collateral",
      "Brand consistency guidelines across assets",
      "Fast-turnaround campaign graphics",
    ],
    outcome:
      "Maintained complete visual identity consistency across diverse channels, shortened review and approval cycles, and built long-term execution trust over a multi-year collaboration.",
    visualTone: {
      primaryColor: "#30C682",
      tags: ["Clean Energy", "EV Batteries", "B2B Technology"],
    },
    nextProjectSlug: "sukriti-sales",
  },
  {
    id: "sukriti-sales",
    slug: "sukriti-sales",
    number: "03",
    title: "Bilingual Distributor Lead Generation & Architectural Hardware Showcase",
    client: "Sukriti Sales",
    clientDescriptor: "Architectural Hardware Materials & B2B Distribution",
    industry: "Interiors & B2B Distribution",
    partnership: "B2B Performance Campaign",
    nda: false,
    summary:
      "Distributor lead campaigns and bilingual product showcase creatives generating qualified channel partner inquiries.",
    context:
      "Sukriti Sales distributes architectural hardware materials across regional markets, where purchasing decisions are made by channel partners, dealers, and contractors.",
    challenge:
      "Traditional B2B hardware distribution relies heavily on physical foot-traffic. Digital campaigns often suffer from low response quality or language friction when using generic English templates.",
    approach:
      "Panknox developed localized Hindi & English campaign creative strategies combined with product showcase assets, precision audience targeting, and continuous creative testing on Meta.",
    deliverables: [
      "Meta campaign strategy & ad architectures",
      "Product showcase ad creatives & digital catalogs",
      "Hindi & English bilingual campaign variations",
      "Regional audience targeting & interest segmentation",
      "Continuous performance optimization & creative testing",
    ],
    outcome:
      "Generated consistent inbound inquiries from verified distributors and channel partners while improving lead response quality through localized, culturally relevant product messaging.",
    visualTone: {
      primaryColor: "#30C682",
      tags: ["Architectural Hardware", "Channel Distribution", "Performance Marketing"],
    },
    nextProjectSlug: "naqsh-stella-maris",
  },
  {
    id: "naqsh-stella-maris",
    slug: "naqsh-stella-maris",
    number: "04",
    title: "Experiential Storytelling & Direct Booking Performance Campaigns",
    client: "Naqsh & Stella Maris",
    clientDescriptor: "Experiential Travel & Boutique Hospitality",
    industry: "Travel & Hospitality",
    partnership: "Seasonal Performance & Creative System",
    nda: false,
    summary:
      "Destination video storytelling and seasonal retargeting campaigns driving direct travel bookings and guest inquiries.",
    context:
      "In boutique experiential hospitality, travelers seek emotional immersion and authentic local resonance rather than transactional room commoditization.",
    challenge:
      "Competing against aggregators and commodity travel packages during shoulder seasons while elevating booking inquiry quality.",
    approach:
      "Crafted destination-focused video storytelling combined with seasonal promotions, multi-tier retargeting funnels, and urgency-based booking incentives.",
    deliverables: [
      "Destination storytelling & video creatives",
      "Seasonal promotion planning & campaign architecture",
      "Social media narrative creatives & reels",
      "Meta performance advertising & retargeting funnels",
      "Direct inquiry conversion optimization",
    ],
    outcome:
      "Drove higher social engagement through destination-focused video content, increased booking inquiry quality during seasonal windows, and improved direct conversion rates through retargeting.",
    visualTone: {
      primaryColor: "#30C682",
      tags: ["Experiential Travel", "Hospitality", "Video Storytelling"],
    },
    nextProjectSlug: "xd-innovation",
  },
  {
    id: "xd-innovation",
    slug: "xd-innovation",
    number: "05",
    title: "International Marketing Collateral for Global Enterprise Engineering",
    client: "XD Innovation",
    clientDescriptor: "Engineering Software & Digital Technology",
    industry: "Engineering & Technology",
    partnership: "2022 – 2026",
    nda: false,
    summary:
      "Supporting an international digital technology and engineering solutions company with precise sales enablement and global event collateral.",
    context:
      "XD Innovation delivers enterprise engineering software and digital transformation solutions to global industrial manufacturers.",
    challenge:
      "Maintaining rigorous brand standards and technical clarity across distributed international sales teams, multi-country trade expos, and complex engineering offerings.",
    approach:
      "Functioned as an agile visual support system, translating complex product lifecycle management and engineering concepts into polished sales enablement and event collateral.",
    deliverables: [
      "Enterprise sales enablement decks",
      "Technical solution visual assets & schematics",
      "Global trade event and exhibition graphics",
      "Digital communication and collateral design",
    ],
    outcome:
      "Significantly reduced revision cycles, preserved international brand consistency across markets, and provided dependable marketing support for global sales teams.",
    visualTone: {
      primaryColor: "#30C682",
      tags: ["Enterprise Engineering", "Global Technology", "Sales Enablement"],
    },
    nextProjectSlug: "premium-interior-manufacturing",
  },
];
