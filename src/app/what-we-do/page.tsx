import type { Metadata } from "next";
import WhatWeDoClient from "./WhatWeDoClient";

export const metadata: Metadata = {
  title: "What We Do | Capability Systems",
  description:
    "We bring strategy, creative, digital presence and growth together around your business. Simple, disciplined, and engineered for commercial impact.",
};

export default function WhatWeDoPage() {
  return <WhatWeDoClient />;
}
