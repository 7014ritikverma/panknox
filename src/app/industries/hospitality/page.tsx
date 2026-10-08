import type { Metadata } from "next";
import { notFound } from "next/navigation";
import IndustryDetailTemplate from "@/components/industries/IndustryDetailTemplate";
import { industriesData } from "@/data/industries";

export const metadata: Metadata = {
  title: "Hospitality & Boutique Luxury Marketing Partner",
  description:
    "Sensory video production, culinary storytelling, and direct reservation platforms for heritage havelis, boutique resorts, and experiential retreats.",
};

export default function HospitalityPage() {
  const industry = industriesData.find((i) => i.id === "hospitality");
  if (!industry) return notFound();
  return <IndustryDetailTemplate industry={industry} />;
}
