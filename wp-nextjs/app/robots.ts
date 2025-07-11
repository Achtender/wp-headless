import type { MetadataRoute } from 'next';

import { siteConfig } from '@/site.config';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/login/'],
    },
    sitemap: `${siteConfig.site_domain}/sitemap.xml`,
  };
}
