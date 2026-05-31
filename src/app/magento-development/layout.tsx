import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Magento & Adobe Commerce Development Agency — UAE, India & Global",
  description: "Expert Magento and Adobe Commerce development for enterprise brands in UAE, Saudi Arabia, India, UK, Netherlands, Australia, and South Africa. Custom B2B solutions, multi-store setups, ERP and CRM integration, Magento 1 to 2 migration, headless commerce, and complex catalog management. ISO 27001 certified.",
  keywords: [
    "magento development agency UAE",
    "magento development Dubai",
    "magento development India",
    "magento development UK",
    "magento development Netherlands",
    "magento development Australia",
    "magento development South Africa",
    "adobe commerce agency",
    "adobe commerce developers",
    "magento 2 development",
    "magento enterprise development",
    "magento B2B development",
    "magento migration services",
    "headless magento",
    "magento ERP integration",
    "multi-store magento",
  ],
  alternates: {
    canonical: "/magento-development",
  },
  openGraph: {
    title: "Magento & Adobe Commerce Development Agency | UAE, India & Global",
    description: "Enterprise Magento and Adobe Commerce for global brands. B2B, multi-store, headless, ERP integration, migrations. UAE, KSA, India, UK, NL, AU, ZA. ISO 27001 certified.",
    url: "https://www.globify.ae/magento-development",
    type: "website",
    locale: "en_AE",
    alternateLocale: ["en_GB", "en_IN", "en_AU", "en_ZA", "nl_NL"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Magento & Adobe Commerce Development Agency | Globify",
    description: "Enterprise Magento and Adobe Commerce for global brands. B2B, multi-store, headless, ERP integration. ISO 27001 certified.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Magento and Adobe Commerce Development Agency",
            "description": "Enterprise Magento and Adobe Commerce development services including custom B2B solutions, multi-store architecture, ERP and CRM integration, Magento 1 to 2 migration, headless commerce, complex catalog management, and performance optimization for high-volume online stores.",
            "provider": {
              "@type": "Organization",
              "name": "Globify",
              "sameAs": ["https://www.linkedin.com/company/globify", "https://www.instagram.com/globify"],
              "url": "https://www.globify.ae",
              "logo": "https://www.globify.ae/logo.png"
            },
            "areaServed": [
              { "@type": "Country", "name": "United Arab Emirates" },
              { "@type": "Country", "name": "Saudi Arabia" },
              { "@type": "Country", "name": "India" },
              { "@type": "Country", "name": "United Kingdom" },
              { "@type": "Country", "name": "Netherlands" },
              { "@type": "Country", "name": "Australia" },
              { "@type": "Country", "name": "South Africa" }
            ],
            "url": "https://www.globify.ae/magento-development"
          })
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.globify.ae" },
              { "@type": "ListItem", "position": 2, "name": "Magento Development", "item": "https://www.globify.ae/magento-development" }
            ]
          })
        }}
      />
      {children}
    </>
  );
}