import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/thank-you', '/sitemap'],
    },
    sitemap: 'https://www.globify.ae/sitemap.xml',
    host: 'https://www.globify.ae',
  };
}