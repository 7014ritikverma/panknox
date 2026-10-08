import type { Metadata } from "next";
import { notFound } from "next/navigation";
import IndustryDetailTemplate from "@/components/industries/IndustryDetailTemplate";
import { industriesData } from "@/data/industries";

export const metadata: Metadata = {
  title: "Manufacturing & Industrial Marketing Partner",
  description:
    "Panknox builds industrial marketing systems for B2B manufacturers, CNC engineering, OEM components, and industrial machinery. Industrial video production and RFQ funnels.",
};

export default function ManufacturingPage() {
  const industry = industriesData.find((i) => i.id === "manufacturing");
  if (!industry) return notFound();
  return <IndustryDetailTemplate industry={industry} />;
}
