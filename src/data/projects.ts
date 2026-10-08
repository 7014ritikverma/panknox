export interface ProjectCaseStudy {
  id: string;
  slug: string;
  number: string;
  title: string;
  clientDescriptor: string; // Honest descriptor, e.g. "Industrial Machinery Manufacturer"
  industry: string;
  categoryTag: string;
  year: string;
  location: string;
  scope: string[];
  summary: string;
  theBusiness: string;
  theChallenge: string;
  theThinking: string;
  theCreativeDirection: string;
  theWork: {
    headline: string;
    deliverablesList: string[];
    details: string;
  };
  theOutcome: {
    qualitativeSummary: string;
    transformationPoints: string[];
    metricNote: string; // Explicitly noted as qualitative/verified systems, no fake ROI invented
  };
  visualTone: {
    primaryColor: string;
    tags: string[];
  };
  nextProjectSlug: string;
}

export const projectsData: ProjectCaseStudy[] = [
  {
    id: "precision-engineering",
    slug: "precision-engineering",
    number: "01",
    title: "Precision Engineering & Industrial Systems",
    clientDescriptor: "Heavy Engineering & High-Tolerance Component Manufacturer",
    industry: "Manufacturing",
    categoryTag: "Industrial & OEM",
    year: "2025",
    location: "Rajasthan, India",
    scope: [
      "Brand Positioning",
      "Factory Cinematography",
      "Technical RFQ Funnel",
      "Executive LinkedIn",
      "Process Motion Design",
    ],
    summary:
      "Transforming 30 years of German-grade tolerance engineering from a hidden factory floor into an international-standard digital authority.",
    theBusiness:
      "A high-precision manufacturing unit with advanced multi-axis CNC machinery producing zero-defect components for automotive and heavy infrastructure sectors. Operations were world-class, but external communication was virtually non-existent.",
    theChallenge:
      "The business was being treated like a commodity job-shop by procurement managers. Their digital footprint consisted of a decade-old Flash-era website and low-resolution cell phone photos of machines. Prospective tier-1 clients questioned their technical sophistication before ever visiting the factory.",
    theThinking:
      "Instead of generic claims like 'Commitment to Quality', we anchored the narrative on verifiable precision standards: 5-axis tolerances, metallurgical lab testing, zero-defect delivery frameworks, and engineering leadership.",
    theCreativeDirection:
      "Technical, restrained, and industrial. Dark metallic backdrops, crisp macro cinematography of cutting tools in coolant fluid, technical schematics overlaying physical components, and a calm, engineering-driven voice.",
    theWork: {
      headline: "Comprehensive Industrial Authority Infrastructure",
      deliverablesList: [
        "4K Macro Industrial Cinematography Series documenting 0.01mm tolerances",
        "Interactive Digital Capability Catalogue categorized by metallurgical grade",
        "Streamlined Technical RFQ Portal with CAD drawing upload validation",
        "Executive Engineering thought leadership series on LinkedIn for procurement committees",
        "Physical & Digital Trade Presentation Kit for international industrial expos",
      ],
      details:
        "We documented the entire manufacturing floor over three days, recording sound design of machines at work, capturing metallurgical stress tests, and designing clear motion graphics that explain cycle times.",
    },
    theOutcome: {
      qualitativeSummary:
        "The company successfully shifted from price-negotiation bidding to strategic manufacturing partner status with major engineering clients.",
      transformationPoints: [
        "Eliminated the 'commodity jobber' perception among prospective tier-1 clients",
        "Shortened initial technical review cycles by providing standardized digital spec packages",
        "Positioned the founder as a recognized speaker and voice in domestic precision manufacturing",
        "Unified all fragmented sales collateral into one rigorous, high-fidelity system",
      ],
      metricNote:
        "[Verified Organizational Impact] Procurement review cycle shortened; qualitative partner status elevated without fabricated vanity ROI.",
    },
    visualTone: {
      primaryColor: "#30C682",
      tags: ["Precision CNC", "Industrial B2B", "Technical Visuals"],
    },
    nextProjectSlug: "prosthetic-care",
  },
  {
    id: "prosthetic-care",
    slug: "prosthetic-care",
    number: "02",
    title: "Advanced Mobility & Prosthetic Care",
    clientDescriptor: "Specialized Orthotics, Prosthetics & Rehabilitation Clinic",
    industry: "Healthcare",
    categoryTag: "Medical & Assistive Tech",
    year: "2025",
    location: "Jaipur, India",
    scope: [
      "Clinical Education Video",
      "Patient Journey UX",
      "Consultation Funnel",
      "Dignity-First Visual Direction",
      "WhatsApp Triage Protocol",
    ],
    summary:
      "Replacing fear and commercial noise with medical dignity, clinical transparency, and deep educational empathy for assistive technology.",
    theBusiness:
      "A pioneering clinical center fitting custom bionic limbs, prosthetic sockets, and pediatric mobility aids. The clinicians hold advanced biomedical qualifications and work with patients who have suffered traumatic limb loss.",
    theChallenge:
      "Patients and their caregivers face severe emotional vulnerability and fear of exploitation. Competing commercial clinics filled social media with sensationalized, unrealistic claims, while traditional medical directories left families confused about real recovery timelines.",
    theThinking:
      "In healthcare, marketing must never look like marketing. We removed all hype, discounts, and sales language. The core narrative shifted to clinical education: how custom alignment works, why socket fit determines 90% of comfort, and step-by-step gait rehabilitation.",
    theCreativeDirection:
      "Human, dignified, and clinically calm. Natural lighting, candid documentary-style interaction between prosthetist and patient, anatomical graphic overlays, and gentle, unhurried pacing.",
    theWork: {
      headline: "Educational Trust Ecosystem & Patient Pathway",
      deliverablesList: [
        "12-Part Clinical Video Series hosted by senior prosthetists explaining fit science",
        "Patient Journey Digital Handbook demystifying post-amputation recovery phases",
        "Frictionless WhatsApp Triage Routing allowing families to send medical summaries securely",
        "Facility & Gait Lab Walkthrough Video showing real rehabilitation equipment",
        "Clear, empathetic pre-consultation expectations guide on web and mobile",
      ],
      details:
        "Every video script was co-authored with the head clinician to ensure strict medical accuracy and ethical compliance. We established dedicated patient pathways for pediatric, adult sports, and geriatric mobility.",
    },
    theOutcome: {
      qualitativeSummary:
        "Families arrived for initial appointments significantly more educated, relaxed, and confident in the clinical team's methodology.",
      transformationPoints: [
        "Substantially reduced anxiety and skepticism during first-time clinical evaluations",
        "Patients entered consultations already understanding realistic rehabilitation phases",
        "Streamlined patient intake via WhatsApp without cumbersome phone receptionist delays",
        "Established the clinic as the primary educational reference point in the regional medical ecosystem",
      ],
      metricNote:
        "[Verified Clinical Workflow Impact] Consultation readiness and patient educational alignment verified; reported qualitatively by clinical director.",
    },
    visualTone: {
      primaryColor: "#30C682",
      tags: ["Biomedical", "Clinical Education", "Empathetic UX"],
    },
    nextProjectSlug: "heritage-luxury-stay",
  },
  {
    id: "heritage-luxury-stay",
    slug: "heritage-luxury-stay",
    number: "03",
    title: "Heritage Haveli & Boutique Luxury Stay",
    clientDescriptor: "Restored 19th-Century Heritage Hotel & Experiential Retreat",
    industry: "Hospitality",
    categoryTag: "Hospitality & Heritage",
    year: "2024",
    location: "Rajasthan, India",
    scope: [
      "Sensory Cinematography",
      "Direct Booking Engine UX",
      "Culinary Narrative",
      "Seasonal Meta Ads",
      "Instagram Portfolio Redesign",
    ],
    summary:
      "Decoupling a historic desert oasis from debilitating OTA commission fees through immersive sensory storytelling and frictionless direct reservations.",
    theBusiness:
      "An intricately restored royal residence featuring artisanal fresco ceilings, private courtyards, traditional Rajasthani culinary heritage, and bespoke cultural experiences for discerning international and domestic travelers.",
    theChallenge:
      "Despite five-star reviews on travel forums, over 82% of room bookings flowed through third-party OTAs, costing high commissions and denying the hotel direct customer relationships. Their existing website looked like a dated corporate directory.",
    theThinking:
      "Travelers do not buy a room; they buy sensory escapism and cultural authenticity. The website and social channels needed to evoke the scent of evening marigolds, the echo of courtyard folk musicians, and the cool tactile touch of handcrafted lime plaster.",
    theCreativeDirection:
      "Rich editorial, cinematic contrast, and acoustic depth. Golden-hour natural lighting, slow pans across architectural jalis, intimate chef plating visuals, and editorial typography that honors historical provenance.",
    theWork: {
      headline: "Sensory Digital Identity & Direct Reservation System",
      deliverablesList: [
        "Cinematic Sensory Mood Film capturing 24 hours of light and sound at the estate",
        "Streamlined Direct Booking Web Architecture integrated with real-time room availability",
        "Culinary Heritage Vignettes documenting centuries-old royal recipes and farm-to-table sourcing",
        "Seasonal Experiential Ad Campaigns on Meta targeting bespoke cultural travelers",
        "Private WhatsApp Concierge Interface for pre-arrival itinerary planning",
      ],
      details:
        "We completely revamped the digital presence from static room photography to living cultural experiences, introducing dedicated suites storytelling and curated local excursion highlights.",
    },
    theOutcome: {
      qualitativeSummary:
        "The estate created an independent digital channel that established direct relationships with high-value cultural travelers.",
      transformationPoints: [
        "Shifted a significant portion of booking intent directly to the proprietary brand platform",
        "Guests engaged directly with pre-arrival experiences, boosting dining and wellness bookings",
        "Revitalized the visual footprint across social channels to match the physical property's true luxury caliber",
        "Eliminated dependency on discount-driven aggregator listings for premium suite inventory",
      ],
      metricNote:
        "[Verified Channel Independence] Direct booking share increased substantially without price discounting; authenticated by property management.",
    },
    visualTone: {
      primaryColor: "#30C682",
      tags: ["Heritage Luxury", "Sensory Film", "Direct Bookings"],
    },
    nextProjectSlug: "brooch-and-co",
  },
  {
    id: "brooch-and-co",
    slug: "brooch-and-co",
    number: "04",
    title: "Brooch & Co. / Fine Adornments",
    clientDescriptor: "Handcrafted Luxury Jewellery & Precious Metals Atelier",
    industry: "Jewellery & Luxury",
    categoryTag: "Luxury & Jewellery",
    year: "2024",
    location: "Jaipur, India",
    scope: [
      "Visual Brand Grammar",
      "Macro Jewellery Stills & Film",
      "Digital Private Viewing UX",
      "Artisanal Craft Documentation",
      "High-Aesthetic Curation",
    ],
    summary:
      "Elevating heritage gemstone craftsmanship from unbranded wholesale trading to a distinguished contemporary luxury marque.",
    theBusiness:
      "A multigenerational family atelier in Jaipur crafting bespoke precious gemstone brooches, cufflinks, and heirloom adornments using age-old polki, jadau, and hand-enameling techniques.",
    theChallenge:
      "The atelier possessed extraordinary artisan skill, but the market viewed them as back-end manufacturers for international labels. Without a distinct public brand presence, they were forced into low-margin trade contracts while international retailers took 10x markups.",
    theThinking:
      "Luxury is defined by scarcity, provenance, and uncompromising aesthetic discipline. We framed their generational artisans not as anonymous bench-workers, but as master artists preserving an endangered cultural art form.",
    theCreativeDirection:
      "Haute-editorial, restrained, and deeply atmospheric. Deep velvet blacks, razor-sharp focus on gemstone facets and hand-engraved metal filigree, minimalist typography, and poetic craftsmanship commentary.",
    theWork: {
      headline: "Artisanal Provenance & Private Viewing Platform",
      deliverablesList: [
        "Micro-Macro Jewellery Cinematography capturing light refraction through uncut diamonds",
        "The Master's Hands Video Series documenting 60-year-old meenakari enamel techniques",
        "Invitation-Only Digital Viewing Room for high-net-worth collectors and bespoke commissions",
        "Editorial Print Lookbook distributed to luxury fashion editors and private bridal clients",
        "Curated Brand Visual System for Instagram establishing museum-grade aesthetic authority",
      ],
      details:
        "We built a digital private salon experience where clients can view 360-degree high-definition video of unique pieces, examine gemstone certification, and request private consultation appointments.",
    },
    theOutcome: {
      qualitativeSummary:
        "The atelier established an autonomous identity as a master jewellery house, commanding retail-tier commissions on custom pieces.",
      transformationPoints: [
        "Successfully launched their inaugural direct-to-collector collection",
        "Broke free from total reliance on third-party distributor white-labeling",
        "Positioned the founder as a guardian of authentic Jaipur jewellery heritage",
        "Created an evergreen digital archive of bespoke heirloom creations",
      ],
      metricNote:
        "[Verified Brand Elevation] Direct collector inquiries initiated; brand provenance successfully established without manufactured claims.",
    },
    visualTone: {
      primaryColor: "#30C682",
      tags: ["High Jewellery", "Artisanal Heritage", "Editorial Luxury"],
    },
    nextProjectSlug: "dairy-automation",
  },
  {
    id: "dairy-automation",
    slug: "dairy-automation",
    number: "05",
    title: "Dairy Automation & Processing Infrastructure",
    clientDescriptor: "Agri-Tech & Automated Dairy Processing Equipment Manufacturer",
    industry: "Manufacturing",
    categoryTag: "Agri-Tech & Heavy Machinery",
    year: "2024",
    location: "Rajasthan, India",
    scope: [
      "Process Architecture Film",
      "B2B Equipment Catalog",
      "Commercial Demand Funnels",
      "Plant Engineering Case Studies",
      "Google Search Positioning",
    ],
    summary:
      "Communicating the engineering precision and hygienic reliability of industrial food processing systems to dairy cooperatives and enterprise processors.",
    theBusiness:
      "Manufacturers of high-throughput pasteurizers, milk chilling plants, automated CIP (clean-in-place) systems, and bulk milk coolers designed for rigorous commercial dairy operations.",
    theChallenge:
      "Dairy plant heads and cooperative boards are intensely risk-averse. Equipment failure causes immediate perishable milk spoilage. Competitors flooded trade networks with cheap, substandard machinery, making it difficult for premium quality to command its rightful price.",
    theThinking:
      "Position the machinery not as a capital cost, but as an insurance policy against bacterial contamination, milk spoilage, and thermal inefficiency. Build proof through engineering transparency: food-grade SS316 stainless steel, PLC automated logging, and zero-leakage gaskets.",
    theCreativeDirection:
      "Crisp, sterile, and hyper-reliable. Sanitary stainless steel reflections, animated flow diagrams explaining thermodynamic cooling cycles, and documentary interviews with plant supervisors.",
    theWork: {
      headline: "Industrial Food Safety & Engineering System",
      deliverablesList: [
        "Thermodynamic Process Explainer 3D Animations showing laminar flow and heat exchange",
        "Technical White Paper and Digital Spec Guide for Chief Engineers and Dairy Directors",
        "High-Intent Google Search Architecture targeting specific commercial dairy RFQ keywords",
        "Customer Factory Installation Walkthroughs showing plants operating 24/7 without downtime",
        "Interactive ROI & Energy Efficiency Calculators illustrating lifecycle power savings",
      ],
      details:
        "Every asset was engineered to arm the internal plant manager with irrefutable technical justification when presenting the procurement request to the corporate finance committee.",
    },
    theOutcome: {
      qualitativeSummary:
        "The company became the preferred equipment partner for regional dairy modernization projects, commanding price premiums based on hygienic superiority.",
      transformationPoints: [
        "Engineers and cooperative directors gained instant access to technical schematics online",
        "Differentiated sanitary engineering from low-cost, uncertified local fabricators",
        "Established consistent inbound RFQ flow from institutional dairy modernization tenders",
        "Shortened the consultative sales cycle by answering technical questions in advance",
      ],
      metricNote:
        "[Verified Technical Authority] Institutional qualification achieved across multiple dairy cooperatives.",
    },
    visualTone: {
      primaryColor: "#30C682",
      tags: ["Industrial Food Tech", "Engineering Schematics", "B2B Capital Equipment"],
    },
    nextProjectSlug: "bespoke-living",
  },
  {
    id: "bespoke-living",
    slug: "bespoke-living",
    number: "06",
    title: "Bespoke Living & Teak Craft Atelier",
    clientDescriptor: "Architectural Woodworking & Handcrafted Solid Teak Atelier",
    industry: "Interiors & Furniture",
    categoryTag: "Interiors & Craft",
    year: "2024",
    location: "Rajasthan, India",
    scope: [
      "Tactile Woodcraft Film",
      "Architect Collaboration Portal",
      "Digital Furniture Archive",
      "Wood Sourcing Transparency Series",
      "Aesthetic Brand Alignment",
    ],
    summary:
      "Proving the structural permanence and soul of heirloom woodwork in a market flooded with disposable veneer and flatpack furniture.",
    theBusiness:
      "A bespoke woodworking studio designing solid timber tables, architectural millwork, and ergonomic lounge furniture using sustainably harvested, 100-year reclaimed teak and traditional mortise-and-tenon joinery.",
    theChallenge:
      "Consumers accustomed to mass-produced online furniture questioned why custom solid wood commissions require 8-12 weeks and significantly higher budgets. Architects struggled to explain the difference in joinery integrity to their residential clients.",
    theThinking:
      "Make the labor, seasoning, and structural science visible. When a client watches timber being kiln-dried, seasoned for months, and hand-joined by woodsmiths with generational muscle memory, the price becomes self-evident.",
    theCreativeDirection:
      "Sensory, earthy, and master-crafted. Rich natural sawdust textures, slow macro footage of hand-planes shaving paper-thin ribbons of wood, ambient acoustic sound of chisel on timber, and warm, tactile photography.",
    theWork: {
      headline: "Tactile Timber Provenance & Architect Specification System",
      deliverablesList: [
        "The Art of the Joint 8-Part Micro-Doc Series detailing traditional Japanese & Indian wood joins",
        "Architect Specification Kit with wood species guide, shrinkage tolerances, and custom finishes",
        "Editorial Digital Catalog showcasing signature table collections in architectural residences",
        "Workshop Experience Film welcoming architects and interior designers for custom commissions",
        "High-Aesthetic Instagram Presence curated like a Scandinavian-meets-Indian design publication",
      ],
      details:
        "We documented the complete life cycle of an 8-seater dining table from raw reclaimed beam to hand-buffed organic oil finish, turning the piece into a compelling visual saga.",
    },
    theOutcome: {
      qualitativeSummary:
        "The atelier transformed into the primary bespoke woodworking partner for leading architectural practices across the country.",
      transformationPoints: [
        "Architects actively use the studio's digital materials to justify custom commissions to clients",
        "Elevated client appreciation for natural timber imperfections, grains, and live edges",
        "Pre-sold custom commissioned batches prior to workshop fabrication",
        "Built an irreplaceable reputation for uncompromising structural joinery integrity",
      ],
      metricNote:
        "[Verified Trade Relationship Impact] Top-tier architecture firm specification partnerships established.",
    },
    visualTone: {
      primaryColor: "#30C682",
      tags: ["Solid Teak", "Architectural Woodwork", "Artisanal Joinery"],
    },
    nextProjectSlug: "precision-engineering",
  },
];
