import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shopify Plus Enterprise Agency â€” Headless, B2B, Wholesale & Multi-Region",
  description: "Shopify Plus enterprise development for brands in UAE, Saudi Arabia, India, UK, Netherlands, Australia, and South Africa. Headless commerce with Hydrogen, B2B/wholesale channels, custom checkout (Shopify Functions), Flow automation, multi-region storefronts, and migrations from Magento, Demandware, SAP Commerce, and BigCommerce Enterprise. Shopify Partner, ISO 27001 certified.",
  alternates: { canonical: "/shopify-plus" },
  keywords: [
    "Shopify Plus agency UAE",
    "Shopify Plus partner Dubai",
    "Shopify Plus India",
    "Shopify Plus UK",
    "Shopify Plus Netherlands",
    "Shopify Plus Australia",
    "Shopify Plus South Africa",
    "headless Shopify development",
    "Shopify Hydrogen agency",
    "Shopify B2B wholesale",
    "Shopify Plus checkout customization",
    "Magento to Shopify migration",
    "Demandware to Shopify migration",
    "enterprise ecommerce agency",
    "Shopify Functions developer",
  ],
  openGraph: {
    title: "Shopify Plus Enterprise Agency | UAE, India, UK, EU, AU, ZA",
    description: "Headless commerce (Hydrogen), B2B wholesale, custom checkout, Flow automation, multi-region storefronts. Enterprise migrations from Magento, Demandware, SAP Commerce. Shopify Partner.",
    url: "https://www.globify.ae/shopify-plus",
    locale: "en_AE",
    alternateLocale: ["en_GB", "en_IN", "en_AU", "en_ZA", "nl_NL"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shopify Plus Enterprise Agency | Globify",
    description: "Headless, B2B, custom checkout, multi-region. Shopify Partner, ISO 27001 certified.",
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
            "serviceType": "Shopify Plus Enterprise Agency",
            "description": "Shopify Plus enterprise ecommerce development including headless storefronts (Hydrogen + Oxygen), B2B and wholesale channels, custom checkout with Shopify Functions, Shopify Flow automation, multi-region/multi-currency storefronts, and platform migrations from Magento, Demandware (Salesforce Commerce Cloud), SAP Commerce, and BigCommerce Enterprise.",
            "provider": {
              "@type": "Organization",
              "name": "Globify",
              "sameAs": ["https://www.linkedin.com/company/globify-software-solutions-pvt-ltd", "https://www.instagram.com/globify_software_solutions", "https://www.youtube.com/@GlobifyCorp", "https://www.facebook.com/globifydigital"],
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
            "url": "https://www.globify.ae/shopify-plus"
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
              { "@type": "ListItem", "position": 2, "name": "Shopify Plus", "item": "https://www.globify.ae/shopify-plus" }
            ]
          })
        }}
      />
      {children}
    </>
  );
}