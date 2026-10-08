export interface BrandInfo {
  name: string;
  legalName: string;
  positioning: string;
  tagline: string;
  location: {
    city: string;
    state: string;
    country: string;
    coordinates: string;
    address: string;
  };
  contact: {
    email: string;
    phonePlaceholder: string;
    whatsappText: string;
  };
  coreIdea: {
    headline: string;
    supporting: string;
    perceptionGap: string;
  };
  philosophySteps: string[];
}

export const brandData: BrandInfo = {
  name: "Panknox",
  legalName: "Panknox Media Pvt. Ltd.",
  positioning: "Creative & Performance Marketing Partner",
  tagline: "Your business is already doing something. We make sure the world notices.",
  location: {
    city: "Jaipur",
    state: "Rajasthan",
    country: "India",
    coordinates: "26.9124° N, 75.7873° E",
    address: "Jaipur, Rajasthan, India — 302001",
  },
  contact: {
    email: "contact@panknox.com",
    phonePlaceholder: "+91 (Jaipur Studio)",
    whatsappText: "Discussing our marketing system with Panknox",
  },
  coreIdea: {
    headline: "YOUR BUSINESS IS ALREADY DOING SOMETHING. WE MAKE SURE THE WORLD NOTICES.",
    supporting:
      "Your customer doesn't see your entire business. They see pieces of it: Instagram, Google, Website, Ads, Reels, LinkedIn, Reviews, Packaging, Visual identity, Content, Communication. Panknox connects those pieces into one coherent perception.",
    perceptionGap:
      "WE WORK IN THE GAP BETWEEN WHAT YOUR BUSINESS IS AND HOW YOUR MARKET PERCEIVES IT.",
  },
  philosophySteps: [
    "BUSINESS",
    "UNDERSTANDING",
    "STRATEGY",
    "CREATIVE",
    "CONTENT",
    "DISTRIBUTION",
    "PERFORMANCE",
    "LEARNING",
    "GROWTH",
  ],
};
