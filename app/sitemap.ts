import { siteConfig } from '@/config/site';
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/services",
    "/services/botox",
    "/services/skin-treatment",
    "/services/body-contouring",
    "/services/facial-thread",
    "/services/fillers",
    "/services/hifu",
    "/services/laser-removal",
    "/services/prp-facial",
    "/about",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}