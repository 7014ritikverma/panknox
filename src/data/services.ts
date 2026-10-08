export interface ServiceItem {
  name: string;
  description: string;
  deliverables: string[];
}

export interface CapabilitySystem {
  id: string;
  number: string;
  name: string;
  subtitle: string;
  headline: string;
  description: string;
  systemInput: string;
  systemOutput: string;
  corePrinciples: string[];
  items: ServiceItem[];
  signalLabel: string;
}

export const capabilitySystems: CapabilitySystem[] = [
  {
    id: "strategy",
    number: "01",
    name: "STRATEGY",
    subtitle: "Groundwork & Market Positioning",
    headline: "Before a single pixel moves, we dissect the business reality.",
    description:
      "Most agencies jump straight into creative execution without diagnosing what makes the business distinct. Panknox establishes market truth, audience incentives, competitive voids, and distribution leverage first.",
    systemInput: "Raw Business Truth & Operational Capabilities",
    systemOutput: "Market Positioning, Narrative Vector & Channel Blueprints",
    signalLabel: "SYS-01 // COGNITIVE BLUEPRINT",
    corePrinciples: [
      "No communication without a strategic reason to exist",
      "Perception must reflect authentic capability, not manufactured fluff",
      "Identify the single highest-leverage narrative wedge in your sector",
    ],
    items: [
      {
        name: "Business Understanding",
        description:
          "In-depth discovery of business models, margin drivers, customer economics, and operational advantages.",
        deliverables: [
          "Commercial Model Dissection",
          "Operational Advantage Map",
          "Customer Value Architecture",
        ],
      },
      {
        name: "Audience Research",
        description:
          "Investigating real purchasing behavior, skepticism barriers, and decision-maker triggers in your target sector.",
        deliverables: [
          "Buyer Persona Archetypes",
          "Friction & Objection Matrix",
          "Decision-Making Journey Map",
        ],
      },
      {
        name: "Positioning",
        description:
          "Defining where your business stands in the market so you stop competing on commodity price or generic claims.",
        deliverables: [
          "Market Category Definition",
          "Strategic Differentiation Narrative",
          "Competitor Gap Analysis",
        ],
      },
      {
        name: "Content Strategy",
        description:
          "Architecting the thematic pillars, intellectual property concepts, and publishing cadence tailored to commercial goals.",
        deliverables: [
          "Core Editorial Pillars",
          "Content Lifecycle Framework",
          "Format-to-Funnel Mapping",
        ],
      },
      {
        name: "Platform Strategy",
        description:
          "Determining exactly which platforms matter for your business—and which ones to deliberately ignore.",
        deliverables: [
          "Channel Feasibility Matrix",
          "Platform Role Definition",
          "Distribution Resource Allocation",
        ],
      },
      {
        name: "Campaign Strategy",
        description:
          "Planning quarterly and seasonal narrative bursts engineered for brand recall, trust validation, or demand capture.",
        deliverables: [
          "Campaign Flight Calendars",
          "Narrative Arch Documents",
          "Conversion Milestone Models",
        ],
      },
    ],
  },
  {
    id: "creative-content",
    number: "02",
    name: "CREATIVE & CONTENT",
    subtitle: "Visual Narrative & Brand Perception",
    headline: "Transforming dry business value into compelling visual communication.",
    description:
      "Content is not an arbitrary daily chore. It is the visible surface area of your company's intelligence. We design visual assets that build instant commercial authority and command market respect.",
    systemInput: "Strategic Positioning & Subject-Matter Expertise",
    systemOutput: "High-Caliber Creative Systems, Film, Motion & Editorial Content",
    signalLabel: "SYS-02 // PERCEPTION ENGINE",
    corePrinciples: [
      "Every piece of content must respect the audience's time and intelligence",
      "Editorial precision over generic promotional noise",
      "Consistent visual grammar across every customer touchpoint",
    ],
    items: [
      {
        name: "Creative Direction",
        description:
          "Guiding tone of voice, visual grammar, typography discipline, and art direction across all assets.",
        deliverables: [
          "Visual Identity Manual",
          "Art Direction Guidelines",
          "Tone of Voice Framework",
        ],
      },
      {
        name: "Social Content",
        description:
          "Editorial posts, thought leadership carousels, and educational breakdowns tailored for LinkedIn and Instagram.",
        deliverables: [
          "High-Fidelity Social Assets",
          "Educational Carousels",
          "Authority-Building Infographics",
        ],
      },
      {
        name: "Reels & Short-Form Video",
        description:
          "Cinematic vertical video engineered with tight pacing, purposeful narrative arcs, and contextual hooks.",
        deliverables: [
          "Concept & Scriptwriting",
          "On-Site Production / Direction",
          "Paced Post-Production & Sound Design",
        ],
      },
      {
        name: "Motion Design",
        description:
          "2D/3D kinetic typography, animated diagrams, process visualizers, and brand micro-interactions.",
        deliverables: [
          "Process Demonstration Animations",
          "Kinetic Typography Reels",
          "System Micro-Animations",
        ],
      },
      {
        name: "Graphic Design",
        description:
          "Rigorous layout design, typography composition, print materials, catalogs, and commercial presentations.",
        deliverables: [
          "Commercial Catalogues",
          "Corporate Presentations",
          "Digital & Print Collateral",
        ],
      },
      {
        name: "Product & Facility Content",
        description:
          "Industrial photography and cinematography capturing manufacturing lines, medical facilities, or architectural details.",
        deliverables: [
          "Industrial Plant Visuals",
          "Product Detail Cine-Stills",
          "Process Walkthrough Footage",
        ],
      },
      {
        name: "Founder Content",
        description:
          "Extracting the founder's raw expertise and transforming it into credible industry thought leadership.",
        deliverables: [
          "Executive Video Columns",
          "Founder POV Op-Eds",
          "Recorded Dialogue Cutdowns",
        ],
      },
      {
        name: "Campaign Creatives",
        description:
          "Multi-asset creative packages designed specifically to stop the scroll in performance advertising channels.",
        deliverables: [
          "Ad Hook Variations",
          "Static & Motion Ad Packs",
          "Dynamic Performance Assets",
        ],
      },
    ],
  },
  {
    id: "digital-presence",
    number: "03",
    name: "DIGITAL PRESENCE",
    subtitle: "Brand Touchpoints & Trust Infrastructure",
    headline: "Connecting fragmented online surfaces into one coherent perception.",
    description:
      "When a prospect looks you up, do they encounter disjointed channels or an integrated, world-class organisation? We align your digital infrastructure to eliminate hesitation and build unwavering trust.",
    systemInput: "Customer Consideration & Verification Touchpoints",
    systemOutput: "Unified, High-Conversion Digital Infrastructure",
    signalLabel: "SYS-03 // TRUST ARCHITECTURE",
    corePrinciples: [
      "Friction in digital touchpoints is hidden revenue loss",
      "First impressions happen on third-party channels before your website",
      "Speed, clarity, and mobile perfection are non-negotiable standards",
    ],
    items: [
      {
        name: "Instagram",
        description:
          "Transforming Instagram from a gallery of promotions into an intentional portfolio of culture, craft, and proof.",
        deliverables: [
          "Grid Curation Architecture",
          "Story System & Highlight Vaults",
          "Engagement Protocols",
        ],
      },
      {
        name: "LinkedIn",
        description:
          "Positioning B2B companies, industrial manufacturers, and healthcare leaders to win peer and enterprise credibility.",
        deliverables: [
          "Company Page Optimisation",
          "Executive Ghost-Writing",
          "Industry Discussion Catalysts",
        ],
      },
      {
        name: "YouTube",
        description:
          "Long-form case demonstrations, factory tours, medical walkthroughs, and persistent evergreen search assets.",
        deliverables: [
          "High-Retention Editing",
          "Custom Editorial Thumbnails",
          "Video SEO & Chapters Strategy",
        ],
      },
      {
        name: "Google Business Profile",
        description:
          "Optimising local search authority, review cultivation systems, and geo-targeted credibility signals.",
        deliverables: [
          "GBP Search Alignment",
          "Visual Asset Upgrades",
          "Review Amplification Protocol",
        ],
      },
      {
        name: "Websites",
        description:
          "Engineering high-speed, bespoke digital homes that communicate positioning within 5 seconds of load.",
        deliverables: [
          "UX/UI System Design",
          "Custom Frontend Development",
          "Technical SEO Integration",
        ],
      },
      {
        name: "Landing Pages",
        description:
          "Hyperspecific conversion environments built for targeted ad campaigns, consultations, or high-intent downloads.",
        deliverables: [
          "Conversion Copywriting",
          "Responsive Layouts",
          "Analytics & Event Tracking",
        ],
      },
    ],
  },
  {
    id: "growth",
    number: "04",
    name: "GROWTH",
    subtitle: "Distribution, Conversion & Data Feedback",
    headline: "Turning attention into qualified pipeline and measurable business expansion.",
    description:
      "Creative without distribution is an expensive museum piece. We run paid media systems that put sharp messages in front of precise decision-makers, tracking true commercial metrics over vanity impressions.",
    systemInput: "Validated Creative Assets & Market Offers",
    systemOutput: "Predictable Qualified Enquiries, Pipeline & Measurable Revenue Growth",
    signalLabel: "SYS-04 // DISTRIBUTION ENGINE",
    corePrinciples: [
      "Creative is the greatest lever in modern algorithmic advertising",
      "Focus on qualified enquiries rather than cheap, useless clicks",
      "Continuously feedback performance data to inform the creative sprint",
    ],
    items: [
      {
        name: "Meta Ads (Instagram & Facebook)",
        description:
          "Designing and scaling campaign architectures that leverage high-intent creative angles and algorithmic discovery.",
        deliverables: [
          "Full-Funnel Campaign Architecture",
          "Creative A/B Testing Matrix",
          "Algorithmic Audience Tuning",
        ],
      },
      {
        name: "Google Ads (Search, Display & YouTube)",
        description:
          "Capturing active commercial intent when prospects are actively searching for solutions in your sector.",
        deliverables: [
          "High-Intent Search Architecture",
          "Negative Keyword Hygiene",
          "Competitor Conquesting Strategy",
        ],
      },
      {
        name: "Lead Generation",
        description:
          "Constructing qualification funnels that weed out low-ticket tire-kickers and route high-value prospects to your sales team.",
        deliverables: [
          "Pre-Qualification Form Flows",
          "CRM Webhook Integrations",
          "Lead Nurture Automations",
        ],
      },
      {
        name: "Retargeting",
        description:
          "Multi-touch sequential retargeting that addresses specific buyer objections as prospects deliberate.",
        deliverables: [
          "Sequential Retargeting Pools",
          "Case-Proof Ad Sets",
          "Friction-Reduction Messaging",
        ],
      },
      {
        name: "Conversion Rate Optimisation",
        description:
          "Auditing drop-offs, testing copy headlines, and removing psychological barriers to enquiry submission.",
        deliverables: [
          "Heatmap & Scroll Tracking Audits",
          "Copy & Form Field Split Tests",
          "Page Speed Tuning",
        ],
      },
      {
        name: "Performance Analysis",
        description:
          "Honest reporting on true commercial health: cost per qualified conversation, sales cycle velocity, and creative fatigue.",
        deliverables: [
          "Executive Performance Dashboards",
          "Creative Fatigue Early-Warning",
          "Bi-Weekly Strategic Reviews",
        ],
      },
    ],
  },
];
