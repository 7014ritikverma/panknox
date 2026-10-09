import type { Metadata } from "next";
import IndustriesClient from "./IndustriesClient";

export const metadata: Metadata = {
  title: "Industries | Sector Marketing Systems",
  description:
    "Explore how Panknox architects marketing systems for Manufacturing, Healthcare, Real Estate, Interiors & Furniture, and Hospitality.",
};

export default function IndustriesPage() {
  return <IndustriesClient />;
}
