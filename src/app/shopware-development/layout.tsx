import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shopware Development Agency â€” German-Engineered Commerce for EU & Global Brands",
  description: "Shopware 6 development for brands in Germany, Netherlands, UAE, Saudi Arabia, India, UK, Australia, and South Africa. B2B/B2C storefronts, headless commerce, Rule Builder automations, Flow Builder workflows, ERP integrations (SAP, Microsoft Dynamics), and migrations from Magento. EU office in GieÃŸen, ISO 27001 certified.",
  alternates: { canonical: "/shopware-development" },
  keywords: [
    "Shopware development agency",
    "Shopware 6 developer",
    "Shopware agency Germany",
    "Shopware Netherlands",
    "Shopware UAE",
    "Shopware India",
    "Shopware UK",
    "Shopware B2B commerce",
    "headless Shopware development",
    "Shopware Rule Builder",
    "Shopware Flow Builder",
    "Magento to Shopware migration",
    "Shopware SAP integration",
    "Shopware DSGVO GDPR",
    "Shopware partner agency",
  ],
  openGraph: {
    title: "Shopware Development Agency | Germany, EU, UAE, India & Global",
    description: "Shopware 6 B2B/B2C storefronts, headless commerce, Rule Builder & Flow Builder automations, ERP integrations, and Magento migrations. EU office in GieÃŸen, Germany.",
    url: "https://www.globify.ae/shopware-development",
    locale: "en_AE",
    alternateLocale: ["de_DE", "en_GB", "en_IN", "nl_NL", "en_AU", "en_ZA"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shopware Development Agency | Globify",
    description: "Shopware 6 B2B/B2C, headless, Rule Builder, Flow Builder, ERP integrations. EU office in Germany.",
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
            "serviceType": "Shopware Development Agency",
            "description": "Shopware 6 ecommerce development including B2B and B2C storefronts, headless commerce architectures, Rule Builder pricing and promotion logic, Flow Builder workflow automation, ERP integrations with SAP and Microsoft Dynamics, GDPR/DSGVO-compliant implementations, and platform migrations from Magento.",
            "provider": {
              "@type": "Organization",
              "name": "Globify",
              "sameAs": ["https://www.linkedin.com/company/globify-software-solutions-pvt-ltd", "https://www.instagram.com/globify_software_solutions", "https://www.youtube.com/@GlobifyCorp", "https://www.facebook.com/globifydigital"],
              "url": "https://www.globify.ae",
              "logo": "https://www.globify.ae/logo.png"
            },
            "areaServed": [
              { "@type": "Country", "name": "Germany" },
              { "@type": "Country", "name": "Netherlands" },
              { "@type": "Country", "name": "United Arab Emirates" },
              { "@type": "Country", "name": "Saudi Arabia" },
              { "@type": "Country", "name": "India" },
              { "@type": "Country", "name": "United Kingdom" },
              { "@type": "Country", "name": "Australia" },
              { "@type": "Country", "name": "South Africa" }
            ],
            "url": "https://www.globify.ae/shopware-development"
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
              { "@type": "ListItem", "position": 2, "name": "Shopware Development", "item": "https://www.globify.ae/shopware-development" }
            ]
          })
        }}
      />
      {children}
    </>
  );
}