import type { Metadata } from "next";
import { notFound } from "next/navigation";
import IndustryDetailTemplate from "@/components/industries/IndustryDetailTemplate";
import { industriesData } from "@/data/industries";

export const metadata: Metadata = {
  title: "Real Estate & Living Architecture Marketing Partner",
  description:
    "Architectural storytelling, construction milestone films, and pre-qualified buyer pipelines for premium real estate developers and townships.",
};

export default function RealEstatePage() {
  const industry = industriesData.find((i) => i.id === "real-estate");
  if (!industry) return notFound();
  return <IndustryDetailTemplate industry={industry} />;
}
