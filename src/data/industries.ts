export interface CustomerJourneyStage {
  step: string;
  label: string;
  focus: string;
  frictionPoint: string;
  panknoxIntervention: string;
}

export interface IndustryData {
  id: string;
  slug: string;
  number: string;
  name: string;
  tagline: string;
  sectorSummary: string;
  businessChallenge: string;
  communicationProblem: string;
  panknoxApproach: string;
  journeyStages: CustomerJourneyStage[];
  customerJourneySummary: string;
  relevantCapabilities: string[];
  tacticalFocus: {
    whatFails: string;
    whatWorks: string;
  };
  sampleWorkReference: {
    title: string;
    description: string;
    slug: string;
  };
}

export const industriesData: IndustryData[] = [
  {
    id: "manufacturing",
    slug: "manufacturing",
    number: "01",
    name: "Manufacturing",
    tagline: "Industrial Capability Demands Concrete Proof, Not Promotional Fluff.",
    sectorSummary:
      "Precision engineering, machinery, OEM components, building equipment, and industrial tools operating in high-ticket B2B environments.",
    businessChallenge:
      "Long sales cycles, high order values, technical procurement committees, and reliance on dated distributor networks or trade exhibitions that deliver declining ROI.",
    communicationProblem:
      "Exceptional engineering reality hidden behind generic PDF catalogs, poorly shot factory phone videos, outdated websites, and an inability to articulate proprietary process advantages to non-technical decision-makers.",
    panknoxApproach:
      "We turn complex industrial capability into visual authority. By documenting plant precision, tolerance standards, real-world stress testing, and founder engineering philosophy, we shorten the procurement trust threshold.",
    customerJourneySummary: "Product → Application → Credibility → Enquiry",
    journeyStages: [
      {
        step: "01",
        label: "Product",
        focus: "Discovering technical equipment or industrial component capability",
        frictionPoint: "Lack of clarity on precise engineering specifications and capabilities",
        panknoxIntervention:
          "Macro cinematography, exploded schematics, and clear application-led positioning",
      },
      {
        step: "02",
        label: "Application",
        focus: "Seeing how the machine or part solves a specific operational bottleneck",
        frictionPoint: "Uncertainty whether the product fits exact factory or client workflows",
        panknoxIntervention:
          "Case-based application reels, field demonstration videos, and sector use-case briefs",
      },
      {
        step: "03",
        label: "Credibility",
        focus: "Validating vendor reliability, QA compliance, and supply chain strength",
        frictionPoint: "Fear of downtime, bad parts, or dealing with an unvetted supplier",
        panknoxIntervention:
          "Testing protocol documentation, plant certification visuals, and engineering leadership essays",
      },
      {
        step: "04",
        label: "Enquiry",
        focus: "Submitting high-intent technical RFQ or scheduling an engineering call",
        frictionPoint: "Complex or broken website forms with no prompt response mechanism",
        panknoxIntervention:
          "Streamlined RFQ specification funnels with instant technical acknowledgment protocols",
      },
    ],
    relevantCapabilities: [
      "Plant & Machinery Cinematography",
      "B2B LinkedIn Executive Presence",
      "High-Intent Technical RFQ Pages",
      "Process & Tolerances Motion Graphics",
      "Google Search Intent Targeting",
    ],
    tacticalFocus: {
      whatFails: "Generic corporate slogans like 'Delivering Quality Since 1998' on static banners.",
      whatWorks:
        "Showing 0.02mm CNC tolerance verification on video with an engineer explaining why it cuts client downtime by 30%.",
    },
    sampleWorkReference: {
      title: "Precision Engineering & Industrial Systems",
      description:
        "Rebuilding the digital perception for high-precision component manufacturing.",
      slug: "precision-engineering",
    },
  },
  {
    id: "healthcare",
    slug: "healthcare",
    number: "02",
    name: "Healthcare",
    tagline: "In Healthcare, Marketing Must Never Look Like Marketing.",
    sectorSummary:
      "Specialty clinics, prosthetics & orthotics centers, surgical specialists, diagnostic facilities, and medical technology practices.",
    businessChallenge:
      "High patient skepticism, regulatory considerations, vulnerable emotional states, and competitors resorting to sensationalized discount tactics that destroy trust.",
    communicationProblem:
      "Stock medical images with fake smiles, overly technical clinical jargon that confuses patients, or aggressive promotional messaging that feels predatory.",
    panknoxApproach:
      "We replace commercial noise with medical dignity, clinical empathy, and deep educational transparency. When a patient or family member understands the science behind their recovery, confidence follows naturally.",
    customerJourneySummary: "Education → Trust → Confidence → Appointment",
    journeyStages: [
      {
        step: "01",
        label: "Education",
        focus: "Patient or caregiver seeking answers for a symptom, condition, or limitation",
        frictionPoint: "Medical jargon, anxiety, and unvetted misinformation online",
        panknoxIntervention:
          "Clear anatomical breakdowns, doctor-led video explanations, and empathetic clinical guides",
      },
      {
        step: "02",
        label: "Trust",
        focus: "Evaluating the doctor or clinic's expertise, ethics, and care philosophy",
        frictionPoint: "Fear of overtreatment, commercial exploitation, or unqualified staff",
        panknoxIntervention:
          "Unfiltered clinician dialogues, facility walkthroughs, and treatment methodology transparency",
      },
      {
        step: "03",
        label: "Confidence",
        focus: "Believing that positive clinical outcomes are achievable for their specific case",
        frictionPoint: "Doubt whether their condition is too advanced or whether treatment will fail",
        panknoxIntervention:
          "Honest clinical rehabilitation milestones, recovery timelines, and patient journeys",
      },
      {
        step: "04",
        label: "Appointment",
        focus: "Booking an in-person clinical assessment or video consultation",
        frictionPoint: "Cumbersome phone booking processes, ambiguous pricing, or delayed responses",
        panknoxIntervention:
          "Frictionless WhatsApp triage channels and clear pre-consultation expectations",
      },
    ],
    relevantCapabilities: [
      "Clinical Education Video Production",
      "Patient Pathway Digital Systems",
      "Doctor Thought Leadership",
      "Google Medical Search & Local SEO",
      "Frictionless WhatsApp Triage Routing",
    ],
    tacticalFocus: {
      whatFails: "Discount graphics: 'Get 50% Off Laser Treatment This Weekend!'",
      whatWorks:
        "A senior surgeon calmly drawing on a tablet explaining why conservative therapy is tried before surgery.",
    },
    sampleWorkReference: {
      title: "Advanced Mobility & Prosthetic Care",
      description:
        "Building clinical education and authentic patient recovery narratives for assistive technology.",
      slug: "prosthetic-care",
    },
  },
  {
    id: "real-estate",
    slug: "real-estate",
    number: "03",
    name: "Real Estate",
    tagline: "Move Beyond Render Galleries to Lifestyle Reality & Development Credibility.",
    sectorSummary:
      "Premium residential developments, commercial hubs, plotted townships, and luxury villas.",
    businessChallenge:
      "Market oversaturation, commoditized broker channels, buyer cynicism toward delivery timelines, and massive lead-generation waste resulting in low-quality calls.",
    communicationProblem:
      "Identical 3D renders with generic stock music, spammy tele-calling campaigns, and zero storytelling around construction quality, architectural intent, or livability.",
    panknoxApproach:
      "We build immersive project narratives. We bridge the gap between architectural blueprints and emotional living reality through milestone construction documentation, spatial video, and hyper-targeted qualification funnels.",
    customerJourneySummary: "Attention → Project Interest → Site Visit → Enquiry",
    journeyStages: [
      {
        step: "01",
        label: "Attention",
        focus: "Discovering a new development amid dozens of competing launches",
        frictionPoint: "Ad blindness caused by hundreds of identical render-based banners",
        panknoxIntervention:
          "Architectural POV cinematography, drone site framing, and provocative spatial hooks",
      },
      {
        step: "02",
        label: "Project Interest",
        focus: "Exploring layout configurations, floor plans, neighborhood growth, and amenities",
        frictionPoint: "Cluttered PDFs with unreadable dimensions and fake lifestyle claims",
        panknoxIntervention:
          "Interactive digital project brochures, sunlight/orientation breakdowns, and spatial walks",
      },
      {
        step: "03",
        label: "Site Visit",
        focus: "Physically inspecting the location, construction velocity, and surroundings",
        frictionPoint: "Skepticism about ground reality vs digital promises",
        panknoxIntervention:
          "Monthly construction milestone updates, on-ground walkthrough videos, and sample flat tours",
      },
      {
        step: "04",
        label: "Enquiry",
        focus: "Submitting formal interest with pricing and inventory discussions",
        frictionPoint: "Endless spam calls from uncoordinated third-party brokers",
        panknoxIntervention:
          "Pre-qualified private briefing requests routed directly to internal development advisors",
      },
    ],
    relevantCapabilities: [
      "Architectural Film & Drone Production",
      "Project Landing Pages with Interactive Floorplans",
      "Pre-Qualified Lead Filtration Systems",
      "Construction Velocity Series",
      "Targeted Meta & Google Property Campaigns",
    ],
    tacticalFocus: {
      whatFails: "Generating 1,000 low-ticket leads at ₹50 each that never pick up the phone.",
      whatWorks:
        "Detailed 3-minute architectural deep-dive targeting high-net-worth investors with strict qualification questions.",
    },
    sampleWorkReference: {
      title: "Boutique Residential Living Architecture",
      description:
        "Crafting narrative-led project launches that command premium price per square foot.",
      slug: "residential-architecture",
    },
  },
  {
    id: "interiors-furniture",
    slug: "interiors-furniture",
    number: "04",
    name: "Interiors & Furniture",
    tagline: "Turn Aesthetic Inspiration into Commercial Material Certainty.",
    sectorSummary:
      "Bespoke furniture studios, architectural joinery, modular systems, interior design ateliers, and luxury surface makers.",
    businessChallenge:
      "High design investments, copycat manufacturers, difficulty proving material superiority online, and long consideration periods for bespoke commissions.",
    communicationProblem:
      "Posting pretty Pinterest-like mood boards without explaining wood seasoning, joinery craftsmanship, ergonomic engineering, or custom finish longevity.",
    panknoxApproach:
      "We photograph and film furniture like works of art and industrial engineering. By spotlighting joinery details, natural veneers, tactile grain, and artisanal fabrication, we position the brand as an irreplaceable design investment.",
    customerJourneySummary: "Inspiration → Desire → Trust → Enquiry",
    journeyStages: [
      {
        step: "01",
        label: "Inspiration",
        focus: "Homeowners and architects seeking design vision for spaces",
        frictionPoint: "Endless generic algorithmic moodboards without origin or maker info",
        panknoxIntervention:
          "Editorial mood films, architectural composition photography, and spatial context visuals",
      },
      {
        step: "02",
        label: "Desire",
        focus: "Falling in love with a specific furniture piece or spatial aesthetic",
        frictionPoint: "Uncertainty regarding proportions, real colors, and tactile feel",
        panknoxIntervention:
          "Close-up tactile grain videos, lighting transformation series, and lifestyle integration reels",
      },
      {
        step: "03",
        label: "Trust",
        focus: "Verifying timber durability, joinery precision, and custom lead-time reliability",
        frictionPoint: "Fear of sagging joints, veneer peeling, or poor workshop craft",
        panknoxIntervention:
          "Workshop artisan process documentation, joinery durability tests, and timber sourcing proof",
      },
      {
        step: "04",
        label: "Enquiry",
        focus: "Scheduling an atelier visit or requesting a bespoke quote",
        frictionPoint: "Lack of clarity on customisation options or studio consultation fees",
        panknoxIntervention:
          "Interactive catalog selector and bespoke design consultation booking experience",
      },
    ],
    relevantCapabilities: [
      "Studio & Interior Fine Art Photography",
      "Workshop Joinery & Craftsmanship Reels",
      "Interactive Digital Catalogs",
      "Architect & Interior Designer Outreach Systems",
      "High-Aesthetic Instagram Curation",
    ],
    tacticalFocus: {
      whatFails: "Basic white-background product cutouts with standard pricing tags.",
      whatWorks:
        "A 45-second macro film showing hand-chiseling a mortise-and-tenon joint in seasoned Burma teak.",
    },
    sampleWorkReference: {
      title: "Bespoke Living & Teak Craft Atelier",
      description:
        "Building digital desire and architect-level authority for custom furniture makers.",
      slug: "bespoke-living",
    },
  },
  {
    id: "hospitality",
    slug: "hospitality",
    number: "05",
    name: "Hospitality",
    tagline: "Guests Don't Book Rooms. They Book Moments and Cultural Belonging.",
    sectorSummary:
      "Heritage hotels, boutique resorts, luxury culinary destinations, experiential retreats, and destination properties.",
    businessChallenge:
      "Crippling reliance on OTA commissions (Booking.com, MakeMyTrip), seasonal occupancy drops, and difficulty standing out from corporate hotel chains.",
    communicationProblem:
      "Static wide-angle room photos with distorted fisheye lenses, dry amenity lists ('Free WiFi, AC, Geyser'), and lack of sensory emotional storytelling.",
    panknoxApproach:
      "We design sensory digital experiences. We capture the scent of morning tea in a sunlit courtyard, the acoustic calm of stone archways, and the culinary philosophy of the kitchen, driving profitable direct reservations.",
    customerJourneySummary: "Experience → Desire → Trust → Booking",
    journeyStages: [
      {
        step: "01",
        label: "Experience",
        focus: "Traveler dreaming of their upcoming getaway, vacation, or celebration",
        frictionPoint: "Boring room listings that feel transactional and uninspiring",
        panknoxIntervention:
          "Cinematic sensory vignettes capturing light, sound, culinary craft, and atmosphere",
      },
      {
        step: "02",
        label: "Desire",
        focus: "Imagining themselves inside the space—dining, unwinding, exploring",
        frictionPoint: "Unclear property vibe, fears of crowded common areas or false marketing",
        panknoxIntervention:
          "Unstaged experiential stories, guest perspective journeys, and regional culture highlights",
      },
      {
        step: "03",
        label: "Trust",
        focus: "Confirming service standards, hygiene, hospitality warmth, and real amenities",
        frictionPoint: "Conflicting online reviews or discrepancies between photos and reality",
        panknoxIntervention:
          "Staff hospitality features, transparent walk-throughs, and curated guest reviews",
      },
      {
        step: "04",
        label: "Booking",
        focus: "Securing room dates directly on the property website",
        frictionPoint: "Clunky booking engines that drive users back to OTAs",
        panknoxIntervention:
          "Frictionless direct-booking incentives, exclusive packages, and instant WhatsApp concierge",
      },
    ],
    relevantCapabilities: [
      "Sensory Heritage & Resort Cinematography",
      "Direct Booking Conversion Optimization",
      "Culinary & Mixology Visual Storytelling",
      "Seasonal & Experiential Meta Ad Campaigns",
      "Curated Instagram Aesthetic System",
    ],
    tacticalFocus: {
      whatFails: "Wide lens photo of an empty bed with the caption 'Book your stay now! 20% off'.",
      whatWorks:
        "Sensory film of dusk settling over candlelit stone arches with live folk flute and culinary steam rising.",
    },
    sampleWorkReference: {
      title: "Heritage Haveli & Boutique Luxury Stay",
      description:
        "Transitioning a historic property from OTA dependence to high-margin direct reservations.",
      slug: "heritage-luxury-stay",
    },
  },
];
