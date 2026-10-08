export interface ProcessStep {
  number: string;
  id: string;
  title: string;
  subtitle: string;
  question: string;
  description: string;
  systemAction: string;
  output: string;
  signalTag: string;
}

export interface ContinuousMethod {
  title: string;
  subtitle: string;
  loopSummary: string;
  steps: ProcessStep[];
  operatingPrinciples: {
    title: string;
    description: string;
  }[];
}

export const processData: ContinuousMethod = {
  title: "The Panknox Method",
  subtitle: "A Continuous Learning Loop, Not A Linear Conveyor Belt",
  loopSummary:
    "Traditional agencies operate like assembly lines: brief in, post out, invoice sent. Panknox operates as a continuous cybernetic feedback system where every single creative asset and ad click informs the next evolution of your business strategy.",
  steps: [
    {
      number: "01",
      id: "understand",
      title: "Understand",
      subtitle: "Commercial Truth & Diagnostic Immersion",
      question: "What is the business actually trying to achieve?",
      description:
        "We do not start with color palettes or social media calendars. We interview leadership, inspect unit economics, review past failures, study margins, and clarify whether the goal is margin expansion, enterprise credibility, or market share.",
      systemAction: "Diagnostic immersion into operations, margins, and customer economics.",
      output: "Commercial Reality Blueprint & Core Constraints Map",
      signalTag: "Node 01 // Diagnostic",
    },
    {
      number: "02",
      id: "find",
      title: "Find",
      subtitle: "Perception Void Identification",
      question: "Where is the gap between business reality and digital perception?",
      description:
        "We uncover what your customer currently assumes about you versus what is actually true. We identify the friction points, missed opportunities, and where competitors are winning purely through superior storytelling rather than superior product.",
      systemAction: "Perception audit across customer touchpoints and market channels.",
      output: "The Gap Diagnostic & Strategic Differentiation Wedge",
      signalTag: "Node 02 // Perception Gap",
    },
    {
      number: "03",
      id: "think",
      title: "Think",
      subtitle: "Strategic & Narrative Architecture",
      question: "What should people understand, feel, and do?",
      description:
        "Strategy is sacrifice. We determine what not to say, which audiences not to pursue, and which platforms to deliberately ignore. We craft the core narrative thesis that will organize all creative outputs.",
      systemAction: "Synthesis of positioning thesis, audience psychology, and channel roles.",
      output: "Narrative Strategy, Tone of Voice & Channel Allocation",
      signalTag: "Node 03 // Architecture",
    },
    {
      number: "04",
      id: "build",
      title: "Build",
      subtitle: "Creative & Technological Engineering",
      question: "How do we make the business impossible to ignore?",
      description:
        "We produce the assets: high-fidelity cinematography, editorial design, motion graphics, technical copywriting, conversion-focused websites, and qualification funnels. Every asset is built to reflect the high caliber of the company.",
      systemAction: "Production of creative systems, digital infrastructure, and content assets.",
      output: "Complete Multi-Asset Production & Digital Touchpoints",
      signalTag: "Node 04 // Production",
    },
    {
      number: "05",
      id: "distribute",
      title: "Distribute",
      subtitle: "Algorithmic & Targeted Media Placement",
      question: "How do we put the work in front of the right decision-makers?",
      description:
        "Creative without distribution is invisible. We activate paid Meta and Google campaigns, LinkedIn thought leadership, organic discovery algorithms, and search infrastructure to place the message where attention exists.",
      systemAction: "Targeted deployment through paid media channels and organic vectors.",
      output: "Active Distribution Engine & Attention Capture Pipeline",
      signalTag: "Node 05 // Deployment",
    },
    {
      number: "06",
      id: "learn",
      title: "Learn",
      subtitle: "Diagnostic Data & Commercial Feedback",
      question: "What did the market actually do?",
      description:
        "We ignore vanity metrics. We measure real commercial behavior: qualified enquiry submission rates, video hook retention, watch time on technical explainers, objections surfaced in sales calls, and cost per serious conversation.",
      systemAction: "Continuous measurement of user behavior, drop-offs, and commercial signals.",
      output: "Behavioral Analytics & Commercial Intelligence Ledger",
      signalTag: "Node 06 // Measurement",
    },
    {
      number: "07",
      id: "evolve",
      title: "Evolve",
      subtitle: "Systemic Optimization & Next Cycle Loop",
      question: "How do we use this learning to improve the next sprint?",
      description:
        "Data is useless unless it changes the creative output. What resonated becomes a permanent asset pillar; what stalled is diagnosed and refined. The loop feeds back directly into Step 01, making the marketing system progressively smarter over time.",
      systemAction: "Feedback loop injection: learnings alter the next strategy cycle.",
      output: "Refined Creative Direction & Scaled Growth Vector",
      signalTag: "Node 07 // Recursive Feedback",
    },
  ],
  operatingPrinciples: [
    {
      title: "No Communication Without A Reason To Exist",
      description:
        "If a piece of content doesn't clarify the product, build unshakeable trust, or capture active commercial interest, it does not get published.",
    },
    {
      title: "Speed Through Systems, Not Through Shortcuts",
      description:
        "We operate in tight 14-day iterative sprints backed by rigid brand systems, enabling rapid production without sacrificing visual prestige.",
    },
    {
      title: "Transparent Feedback Loops",
      description:
        "Our clients have full visibility into what the market is telling us. We don't hide behind misleading metric reports or obscure performance numbers.",
    },
  ],
};
