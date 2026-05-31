import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Shopify Development Agency Netherlands — Shopify Plus Partner",
  description: "Shopify and Shopify Plus development for brands in the Netherlands. iDEAL and Klarna checkout, PostNL and DHL integration, GDPR-compliant, EU office in Germany. 300+ stores launched, ISO 27001 certified Shopify Partner.",
  keywords: [
    "shopify development Netherlands",
    "shopify development Amsterdam",
    "shopify agency Netherlands",
    "shopify agency Amsterdam",
    "shopify plus partner Netherlands",
    "shopify development Rotterdam",
    "shopify development Utrecht",
    "shopify experts Netherlands",
    "ecommerce development Netherlands",
    "shopify iDEAL integration",
    "shopify PostNL integration",
    "shopify GDPR Netherlands",
    "shopify Dutch store",
  ],
  alternates: {
    canonical: "/shopify-netherlands",
  },
  openGraph: {
    title: "Shopify Development Agency Netherlands | Shopify Plus Partner",
    description: "Shopify and Shopify Plus stores for Dutch brands. iDEAL, Klarna, PostNL ready, GDPR-compliant. EU presence in Germany. 300+ stores launched.",
    url: "https://www.globify.ae/shopify-netherlands",
    type: "website",
    locale: "en_GB",
    alternateLocale: ["nl_NL"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shopify Development Agency Netherlands | Globify",
    description: "Shopify and Shopify Plus stores for Dutch brands. iDEAL, PostNL, GDPR-ready. 300+ launched.",
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
            "serviceType": "Shopify Development Services in Netherlands",
            "description": "Custom Shopify development, migration, and e-commerce optimization for brands in the Netherlands. iDEAL and Klarna checkout, PostNL and DHL fulfillment integration, GDPR-compliant, Dutch and English language support.",
            "provider": {
              "@type": "Organization",
              "name": "Globify",
              "sameAs": ["https://www.linkedin.com/company/globify-software-solutions-pvt-ltd", "https://www.instagram.com/globify_software_solutions", "https://www.youtube.com/@GlobifyCorp", "https://www.facebook.com/globifydigital"],
              "url": "https://www.globify.ae",
              "logo": "https://www.globify.ae/logo.png",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "101, Eichendorffring",
                "addressLocality": "Gießen",
                "postalCode": "35394",
                "addressCountry": "DE"
              },
              "telephone": "+491777072309"
            },
            "areaServed": {
              "@type": "Country",
              "name": "Netherlands"
            },
            "url": "https://www.globify.ae/shopify-netherlands"
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
              { "@type": "ListItem", "position": 2, "name": "Shopify Netherlands", "item": "https://www.globify.ae/shopify-netherlands" }
            ]
          })
        }}
      />
      {children}
    </>
  );
}