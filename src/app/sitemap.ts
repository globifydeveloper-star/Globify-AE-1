import { MetadataRoute } from 'next';
import { blogPosts } from '@/data/blogData';
import { getAllTechnologies } from '@/data/technologyData';

const BASE = 'https://www.globify.ae';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // All static routes that should be indexed.
  // Excluded intentionally: /thank-you (utility page), /sitemap (HTML sitemap page)
  const staticRoutes: { path: string; priority: number; changeFrequency: 'weekly' | 'monthly' | 'yearly' }[] = [
    // Top-level
    { path: '', priority: 1.0, changeFrequency: 'weekly' },
    { path: '/about', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/contact', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/services', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/products', priority: 0.8, changeFrequency: 'weekly' },
    { path: '/projects', priority: 0.8, changeFrequency: 'weekly' },
    { path: '/resources', priority: 0.6, changeFrequency: 'monthly' },
    { path: '/blog', priority: 0.8, changeFrequency: 'weekly' },
    { path: '/hire-developers', priority: 0.7, changeFrequency: 'monthly' },

    // Core service pages
    { path: '/web-development', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/app-development', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/ecommerce', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/digital-marketing', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/digital-transformation', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/erp-solutions', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/ai-automation', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/ai-chatbots', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/ai-transformation-framework', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/process-automation', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/predictive-analytics', priority: 0.7, changeFrequency: 'monthly' },

    // Marketing services
    { path: '/performance-marketing', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/paid-advertising', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/social-media-marketing', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/seo-content-strategy', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/seo-aeo', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/cro-revenue-engineering', priority: 0.7, changeFrequency: 'monthly' },

    // Ecommerce platforms
    { path: '/shopify-development', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/shopify-plus', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/shopify-themes', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/shopify-app-development', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/woocommerce-development', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/magento-development', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/prestashop-development', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/bigcommerce-development', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/shopware-development', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/wix-ecommerce', priority: 0.6, changeFrequency: 'monthly' },
    { path: '/migration-services', priority: 0.7, changeFrequency: 'monthly' },

    // Shopify geo pages
    { path: '/shopify-uae', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/shopify-ksa', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/shopify-qatar', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/shopify-kuwait', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/shopify-bahrain', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/shopify-oman', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/shopify-india', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/shopify-france', priority: 0.6, changeFrequency: 'monthly' },
    { path: '/shopify-germany', priority: 0.6, changeFrequency: 'monthly' },
    { path: '/shopify-italy', priority: 0.6, changeFrequency: 'monthly' },
    { path: '/shopify-spain', priority: 0.6, changeFrequency: 'monthly' },
    { path: '/shopify-netherlands', priority: 0.6, changeFrequency: 'monthly' },
    { path: '/shopify-south-africa', priority: 0.6, changeFrequency: 'monthly' },

    // Industries
    { path: '/industries/healthcare', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/industries/fintech', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/industries/retail', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/industries/manufacturing', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/industries/supply-chain', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/industries/saas-startups', priority: 0.7, changeFrequency: 'monthly' },

    // Case studies
    { path: '/case-study/wilson', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/case-study/instarunway', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/case-study/judith-leiber', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/case-study/moher', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/case-study/kat-maconie', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/case-study/salomon', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/case-study/medoc-hms', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/case-study/ekasys-erp', priority: 0.7, changeFrequency: 'monthly' },

    // Legal
    { path: '/privacy-policy', priority: 0.3, changeFrequency: 'yearly' },
    { path: '/terms-of-service', priority: 0.3, changeFrequency: 'yearly' },
  ];

  const staticEntries = staticRoutes.map(({ path, priority, changeFrequency }) => ({
    url: `${BASE}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));

  // Blog posts (~115 entries)
  const blogEntries = blogPosts.map((post) => ({
    url: `${BASE}/blog/${post.slug}`,
    lastModified: post.date ? new Date(post.date) : now,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  // Technology pages (~40 entries)
  const technologies = getAllTechnologies();
  const techEntries = technologies.map((tech) => ({
    url: `${BASE}/technology/${tech.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticEntries, ...blogEntries, ...techEntries];
}