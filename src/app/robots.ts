import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://framethevision.media/sitemap.xml",
    host: "https://framethevision.media",
  };
}
