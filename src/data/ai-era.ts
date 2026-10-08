export interface AiEraSection {
  headline: string;
  subheadline: string;
  coreStatement: string;
  philosophyFormula: string;
  whatAiAccelerates: {
    area: string;
    description: string;
    velocityGain: string;
  }[];
  whatHumansMustProvide: {
    discipline: string;
    whyAiFailsHere: string;
  }[];
  thePanknoxPosition: string;
}

export const aiEraData: AiEraSection = {
  headline: "THE AI ERA",
  subheadline: "Accelerated Execution. Uncompromising Taste.",
  coreStatement: "AI CAN PRODUCE OUTPUTS. THE HARD PART IS KNOWING WHICH OUTPUT DESERVES TO EXIST.",
  philosophyFormula:
    "HUMAN STRATEGY + CREATIVE THINKING + AI-ACCELERATED EXECUTION + PERFORMANCE",
  whatAiAccelerates: [
    {
      area: "Research & Synthesis",
      description: "Aggregating customer forums, industry literature, and competitive messaging in minutes.",
      velocityGain: "10x Velocity",
    },
    {
      area: "Ideation & Exploration",
      description: "Stress-testing dozens of creative hooks, editorial angles, and positioning scenarios rapidly.",
      velocityGain: "Rapid Divergence",
    },
    {
      area: "Asset Production & Editing",
      description: "Automated rotoscoping, audio cleanup, footage grading assistance, and responsive asset formatting.",
      velocityGain: "Friction Reduction",
    },
    {
      area: "Data Analysis & Signal Detection",
      description: "Parsing campaign performance data, pattern-spotting cohort drop-offs, and detecting creative fatigue.",
      velocityGain: "Instant Diagnostics",
    },
  ],
  whatHumansMustProvide: [
    {
      discipline: "Strategic Judgment",
      whyAiFailsHere: "An algorithm cannot understand your factory's specific margins, owner liabilities, or long-term reputation risks.",
    },
    {
      discipline: "Taste & Restraint",
      whyAiFailsHere: "AI generates infinite derivative slop. Human taste decides what to subtract, refine, and hold sacred.",
    },
    {
      discipline: "Cultural & Sector Context",
      whyAiFailsHere: "Understanding the nuance of Indian B2B procurement, regional healthcare trust, or boutique heritage luxury.",
    },
    {
      discipline: "Accountability & Execution",
      whyAiFailsHere: "Tools do not stand behind the business outcome. A dedicated creative team takes full responsibility for commercial reality.",
    },
  ],
  thePanknoxPosition:
    "We are not afraid of AI, nor are we hypnotized by it. We leverage cutting-edge neural tools to eliminate grunt work, so our human strategists, art directors, and engineers can dedicate 100% of their intellect to what truly moves your market.",
};
