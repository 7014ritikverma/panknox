export interface BrandLocation {
  city: string;
  address: string;
  state: string;
  area: string;
}

export interface BrandInfo {
  name: string;
  legalName: string;
  positioning: string;
  tagline: string;
  locations: {
    jaipur: BrandLocation;
    jhunjhunu: BrandLocation;
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
  locations: {
    jaipur: {
      city: "Jaipur",
      address: "Chitrakoot, Vaishali Nagar, Jaipur, Rajasthan",
      state: "Rajasthan",
      area: "Chitrakoot, Vaishali Nagar",
    },
    jhunjhunu: {
      city: "Jhunjhunu",
      address: "Mandrella, Jhunjhunu, Rajasthan",
      state: "Rajasthan",
      area: "Mandrella",
    },
  },
  contact: {
    email: "info@panknox.com",
    phonePlaceholder: "+91 91168 83100",
    whatsappText: "Discussing our marketing system with Panknox",
  },
  coreIdea: {
    headline: "Your business is already doing something. We make sure the world notices.",
    supporting:
      "Your customer doesn't see your entire business. They see pieces of it: Instagram, Google, website, ads, reels, LinkedIn, reviews, packaging, visual identity, content, and communication. Panknox connects those pieces into one coherent perception.",
    perceptionGap:
      "We work in the gap between what your business is and how your market perceives it.",
  },
  philosophySteps: [
    "Business",
    "Understanding",
    "Strategy",
    "Creative",
    "Content",
    "Distribution",
    "Performance",
    "Learning",
    "Growth",
  ],
};

