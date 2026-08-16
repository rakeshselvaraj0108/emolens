import type { MetadataRoute } from 'next';

const BASE_URL = 'https://emo-lens-navy.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/checkin', '/dictionary'];

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));
}
