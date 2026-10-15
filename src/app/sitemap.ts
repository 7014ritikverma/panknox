import { MetadataRoute } from "next";
import { projectsData } from "@/data/projects";
import { industriesData } from "@/data/industries";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://panknox.com";
  const currentDate = new Date();

  const coreRoutes = [
    "",
    "/what-we-do",
    "/industries",
    "/work",
    "/how-we-work",
    "/about",
    "/contact",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const industryRoutes = industriesData.map((ind) => ({
    url: `${baseUrl}/industries/${ind.slug}`,
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  const projectRoutes = projectsData.map((proj) => ({
    url: `${baseUrl}/work/${proj.slug}`,
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...coreRoutes, ...industryRoutes, ...projectRoutes];
}
