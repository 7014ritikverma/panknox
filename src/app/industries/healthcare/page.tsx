import type { Metadata } from "next";
import { notFound } from "next/navigation";
import IndustryDetailTemplate from "@/components/industries/IndustryDetailTemplate";
import { industriesData } from "@/data/industries";

export const metadata: Metadata = {
  title: "Healthcare & Clinical Marketing Partner",
  description:
    "Empathetic, dignity-first medical marketing systems for specialty clinics, prosthetics, surgical practices, and healthtech. Education-led patient pathways.",
};

export default function HealthcarePage() {
  const industry = industriesData.find((i) => i.id === "healthcare");
  if (!industry) return notFound();
  return <IndustryDetailTemplate industry={industry} />;
}
