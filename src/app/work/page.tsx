import type { Metadata } from "next";
import WorkClient from "./WorkClient";

export const metadata: Metadata = {
  title: "Work | Case Studies",
  description:
    "An editorial archive of creative and performance marketing systems engineered by Panknox across Manufacturing, Clean energy, Architectural hardware, Interiors, and Hospitality.",
};

export default function WorkPage() {
  return <WorkClient />;
}
