import type { Metadata } from "next";
import { notFound } from "next/navigation";
import IndustryDetailTemplate from "@/components/industries/IndustryDetailTemplate";
import { industriesData } from "@/data/industries";

export const metadata: Metadata = {
  title: "Interiors & Bespoke Furniture Marketing Partner",
  description:
    "Tactile craft films, architectural joinery documentation, and architect specification systems for custom furniture ateliers and interior brands.",
};

export default function InteriorsFurniturePage() {
  const industry = industriesData.find((i) => i.id === "interiors-furniture");
  if (!industry) return notFound();
  return <IndustryDetailTemplate industry={industry} />;
}
