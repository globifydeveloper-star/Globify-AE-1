import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Shopify Development Agency UAE â€” Dubai-Based Shopify Plus Partner",
  description: "Shopify and Shopify Plus development for UAE brands. Dubai office, Arabic and English support, VAT-compliant checkout, Aramex and PayTabs integration. 300+ stores launched, ISO 27001 certified Shopify Partner.",
  keywords: [
    "shopify development UAE",
    "shopify development Dubai",
    "shopify agency UAE",
    "shopify agency Dubai",
    "shopify plus partner UAE",
    "shopify development Abu Dhabi",
    "shopify development Sharjah",
    "shopify experts UAE",
    "ecommerce development UAE",
    "shopify VAT UAE",
    "shopify Arabic store",
    "shopify Aramex integration",
  ],
  alternates: {
    canonical: "/shopify-uae",
  },
  openGraph: {
    title: "Shopify Development Agency UAE | Dubai Shopify Plus Partner",
    description: "Shopify and Shopify Plus stores for UAE brands. VAT-compliant, Arabic support, Aramex and PayTabs ready. 300+ stores launched, ISO 27001 certified.",
    url: "https://www.globify.ae/shopify-uae",
    type: "website",
    locale: "en_AE",
    alternateLocale: ["ar_AE"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shopify Development Agency UAE | Globify Dubai",
    description: "Shopify and Shopify Plus stores for UAE brands. Dubai office, VAT-compliant, Arabic-ready. 300+ launched.",
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
            "serviceType": "Shopify Development Services in United Arab Emirates",
            "description": "Custom Shopify development, migration, and e-commerce optimization for brands in United Arab Emirates. VAT-compliant checkout, Arabic and English language support, Aramex and PayTabs integration.",
            "provider": {
              "@type": "Organization",
              "name": "Globify",
              "sameAs": ["https://www.linkedin.com/company/globify-software-solutions-pvt-ltd", "https://www.instagram.com/globify_software_solutions", "https://www.youtube.com/@GlobifyCorp", "https://www.facebook.com/globifydigital"],
              "url": "https://www.globify.ae",
              "logo": "https://www.globify.ae/logo.png",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Office 310, Al Qusais Plaza Building, Damascus Street, Qusais",
                "addressLocality": "Dubai",
                "addressRegion": "Dubai",
                "addressCountry": "AE"
              },
              "telephone": "+971547308673"
            },
            "areaServed": {
              "@type": "Country",
              "name": "United Arab Emirates"
            },
            "url": "https://www.globify.ae/shopify-uae"
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
              { "@type": "ListItem", "position": 2, "name": "Shopify UAE", "item": "https://www.globify.ae/shopify-uae" }
            ]
          })
        }}
      />
      {children}
    </>
  );
}