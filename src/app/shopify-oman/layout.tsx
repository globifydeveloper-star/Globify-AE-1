import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shopify Development Agency Oman — OmanNet, ThawaniPay, Aramex, Arabic Storefronts & VAT",
  description: "Shopify and Shopify Plus development for Omani brands in Muscat, Salalah, Sohar, and Sur. Native integrations with OmanNet, ThawaniPay, Tap Payments, PayTabs, Aramex Oman, Oman Post, Asyad Express, OMR currency handling, bilingual Arabic/English RTL storefronts, and full 5% VAT compliance (Oman Tax Authority). Shopify Partner, ISO 27001 certified.",
  alternates: { canonical: "/shopify-oman" },
  keywords: [
    "Shopify agency Oman",
    "Shopify development Muscat",
    "Shopify development Salalah",
    "Shopify Plus Oman",
    "OmanNet Shopify integration",
    "ThawaniPay Shopify integration",
    "Tap Payments Shopify Oman",
    "PayTabs Shopify Oman",
    "Aramex Oman Shopify",
    "Oman Post Shopify integration",
    "Asyad Express Shopify",
    "Arabic RTL Shopify storefront",
    "Shopify OMR currency",
    "Oman VAT Shopify",
    "D2C ecommerce Oman",
  ],
  openGraph: {
    title: "Shopify Development Agency Oman | OmanNet, ThawaniPay, Aramex & Arabic RTL",
    description: "Shopify and Shopify Plus for Omani brands in Muscat, Salalah, Sohar. OmanNet, ThawaniPay, Tap Payments, Aramex Oman, Oman Post integrations. Bilingual Arabic/English RTL storefronts. 5% VAT compliant.",
    url: "https://www.globify.ae/shopify-oman",
    locale: "en_AE",
    alternateLocale: ["ar_OM", "en_GB"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shopify Development Agency Oman | Globify",
    description: "OmanNet, ThawaniPay, Aramex Oman, Arabic RTL storefronts. 5% VAT compliant. Shopify Partner serving Muscat, Salalah, Sohar.",
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
            "serviceType": "Shopify Development Agency Oman",
            "description": "Shopify and Shopify Plus ecommerce development for Omani brands including local payment integrations (OmanNet, ThawaniPay, Tap Payments, PayTabs, Stripe), shipping carrier integrations (Aramex Oman, Oman Post, Asyad Express, DHL Oman, NAQEL Oman), OMR currency handling, bilingual Arabic/English right-to-left (RTL) storefronts, 5% VAT compliance with the Oman Tax Authority, and platform migrations from WooCommerce and Magento.",
            "provider": {
              "@type": "Organization",
              "name": "Globify",
              "sameAs": ["https://www.linkedin.com/company/globify-software-solutions-pvt-ltd", "https://www.instagram.com/globify_software_solutions", "https://www.youtube.com/@GlobifyCorp", "https://www.facebook.com/globifydigital"],
              "url": "https://www.globify.ae",
              "logo": "https://www.globify.ae/logo.png"
            },
            "areaServed": {
              "@type": "Country",
              "name": "Oman"
            },
            "url": "https://www.globify.ae/shopify-oman"
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
              { "@type": "ListItem", "position": 2, "name": "Shopify Oman", "item": "https://www.globify.ae/shopify-oman" }
            ]
          })
        }}
      />
      {children}
    </>
  );
}