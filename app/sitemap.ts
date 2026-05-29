import type { MetadataRoute } from 'next';

const SITE_URL = 'https://portofolio-adityadwih-dev.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  // Single-page site with anchor sections
  const sections = ['', '#about', '#projects', '#skills', '#github', '#certificates', '#contact'];

  return sections.map((section) => ({
    url: `${SITE_URL}/${section}`,
    lastModified,
    changeFrequency: section === '' ? 'monthly' : 'yearly',
    priority: section === '' ? 1 : 0.7,
  }));
}
