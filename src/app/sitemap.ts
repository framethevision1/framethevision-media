import type { MetadataRoute } from "next";

const BASE = "https://framethevision.media";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const routes: { path: string; priority: number; changeFrequency: "weekly" | "monthly" | "yearly" }[] = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" },
    { path: "/pricing", priority: 0.9, changeFrequency: "monthly" },
    { path: "/book", priority: 0.9, changeFrequency: "monthly" },
    { path: "/portfolio", priority: 0.8, changeFrequency: "weekly" },
    { path: "/services/photography", priority: 0.8, changeFrequency: "monthly" },
    { path: "/services/video", priority: 0.8, changeFrequency: "monthly" },
    { path: "/services/drone", priority: 0.8, changeFrequency: "monthly" },
    { path: "/services/virtual-tours", priority: 0.8, changeFrequency: "monthly" },
    { path: "/addons", priority: 0.7, changeFrequency: "monthly" },
    { path: "/addons/virtual-twilight", priority: 0.6, changeFrequency: "monthly" },
    { path: "/addons/virtual-staging", priority: 0.6, changeFrequency: "monthly" },
    { path: "/addons/de-clutter", priority: 0.6, changeFrequency: "monthly" },
    { path: "/about", priority: 0.7, changeFrequency: "yearly" },
    { path: "/faq", priority: 0.6, changeFrequency: "monthly" },
    { path: "/prep", priority: 0.6, changeFrequency: "yearly" },
    { path: "/contact", priority: 0.7, changeFrequency: "yearly" },
  ];

  return routes.map((r) => ({
    url: `${BASE}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
