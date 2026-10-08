export interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
  keyTakeaway: string;
}

export const faqsData: FAQItem[] = [
  {
    id: "different-from-agency",
    category: "Positioning",
    question: "How does Panknox differ from a standard digital marketing agency?",
    answer:
      "A traditional agency acts as an outsourced task vendor: you tell them to post 15 times a month, they churn out generic Canva graphics, post them to zero engagement, and bill you a monthly retainer. Panknox operates as a Creative & Performance Marketing Partner. We dissect your business model, discover where your perception lags behind your actual quality, engineer a proprietary narrative system, produce cinema-standard assets, and run precision distribution to turn attention into tangible commercial growth.",
    keyTakeaway: "Strategic diagnosis and unified systems instead of outsourced commodity tasks.",
  },
  {
    id: "dont-sell-posts",
    category: "Philosophy",
    question: "What does 'We don't sell posts' mean in practice?",
    answer:
      "A social post, a reel, or an ad is simply the final visible output. The real leverage lies in everything that precedes it: the audience psychology, the business constraint being solved, the unique value proposition, the framing, and the distribution architecture. We do not sell arbitrary output quotas; we build marketing engines where every asset exists for a specific commercial reason.",
    keyTakeaway: "Every piece of communication must have a strategic reason to exist.",
  },
  {
    id: "specialized-industries",
    category: "Expertise",
    question: "How do you handle technical sectors like manufacturing or healthcare?",
    answer:
      "We do not pretend to know more about CNC tolerances than a plant director or more about surgery than a doctor. Our role is diagnostic extraction. We know how to interview your engineers, examine your processes, ask the penetrating questions non-technical buyers have, and translate your technical superiority into visual proof and emotional credibility.",
    keyTakeaway: "We extract your internal domain truth and translate it into market-commanding clarity.",
  },
  {
    id: "timeframe-process",
    category: "Process",
    question: "What is the onboarding process and how soon do we see work?",
    answer:
      "Every partnership begins with a diagnostic immersion (Days 1–14) where we audit your digital touchpoints, conduct stakeholder discovery, and establish your core positioning blueprint. Initial creative production and channel architecture deploy by Day 21–28, followed by continuous 14-day execution and learning loops.",
    keyTakeaway: "Fast diagnostic alignment followed by rapid, disciplined 14-day production sprints.",
  },
  {
    id: "engagement-model",
    category: "Engagement",
    question: "What engagement models does Panknox offer?",
    answer:
      "We work on dedicated retainer partnerships where we serve as your end-to-end creative and performance marketing unit, as well as select strategic infrastructure sprints (e.g. complete digital presence rebuilds, website architectures, and brand narrative overhauls for launches). We work with a strictly capped number of clients at any time to guarantee intense partner-level attention.",
    keyTakeaway: "Capped partner roster ensuring uncompromising focus and craft quality.",
  },
  {
    id: "production-locations",
    category: "Operations",
    question: "Where are your offices and how do you handle on-site shoots?",
    answer:
      "Our main office is in Mandrella, Jhunjhunu, with our second location in Chitrakoot, Vaishali Nagar, Jaipur, Rajasthan. For manufacturing plants, healthcare facilities, boutique estates, and architectural spaces, our production and cinematography team deploys directly on-site across India with cinema equipment, lighting, and sound gear to capture authentic operational reality.",
    keyTakeaway: "Offices in Mandrella & Jaipur with on-site deployment across India for high-caliber production.",
  },
];
