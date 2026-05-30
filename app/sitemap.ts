import type { MetadataRoute } from 'next';

const SITE_URL = 'https://www.adityadh.my.id';

export default function sitemap(): MetadataRoute.Sitemap {
  // Single-page portfolio — only the canonical URL is indexable.
  // Anchor sections (#about, #projects, ...) are not separate pages and
  // Google rejects them in sitemaps.
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];
}
