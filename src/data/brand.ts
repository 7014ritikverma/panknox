export interface BrandLocation {
  name: string;
  address: string;
  city: string;
  state: string;
  pin: string;
}

export interface BrandInfo {
  name: string;
  legalName: string;
  positioning: string;
  tagline: string;
  locations: {
    main: BrandLocation;
    secondary: BrandLocation;
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
    main: {
      name: "Main Office",
      address: "Mandrella, Jhunjhunu, Rajasthan",
      city: "Mandrella",
      state: "Rajasthan",
      pin: "333025",
    },
    secondary: {
      name: "Second Location",
      address: "Chitrakoot, Vaishali Nagar, Jaipur, Rajasthan",
      city: "Jaipur",
      state: "Rajasthan",
      pin: "302021",
    },
  },
  contact: {
    email: "contact@panknox.com",
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

