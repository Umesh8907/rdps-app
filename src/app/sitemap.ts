import { MetadataRoute } from "next";
import { servicesData } from "@/data/servicesData";
import { projectsData } from "@/data/projectsData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://rdplumbingsolution.com";

  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/projects",
    "/projects/ongoing",
    "/projects/completed",
    "/gallery",
    "/testimonials",
    "/faqs",
    "/areas-we-serve",
    "/request-a-quotation",
    "/contact",
    "/privacy-policy",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : route.startsWith("/services") || route.startsWith("/request-a-quotation") ? 0.9 : 0.8,
  }));

  const serviceRoutes = servicesData.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  const projectRoutes = projectsData.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...serviceRoutes, ...projectRoutes];
}
