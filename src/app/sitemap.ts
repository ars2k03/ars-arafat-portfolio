import type { MetadataRoute } from "next";
import { site } from "@/utils/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    {
      url: site.url,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
      images: [`${site.url}/profile.jpg`],
    },
    {
      url: `${site.url}/resume.pdf`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];
}
