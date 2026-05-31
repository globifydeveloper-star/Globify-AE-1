import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shopify Development Agency Saudi Arabia — Mada, Tabby, Tamara, SMSA, ZATCA & Arabic Storefronts",
  description: "Shopify and Shopify Plus development for Saudi brands in Riyadh, Jeddah, Dammam, Khobar, and Mecca. Native integrations with Mada, Tabby, Tamara, STC Pay, HyperPay, PayTabs, SMSA, Aramex KSA, J&T Saudi, Saudi Post (SPL), SAR currency handling, bilingual Arabic/English RTL storefronts, full 15% VAT compliance, and ZATCA e-invoicing (Fatoora Phase 2) integration. Shopify Partner, ISO 27001 certified.",
  alternates: { canonical: "/shopify-ksa" },
  keywords: [
    "Shopify agency Saudi Arabia",
    "Shopify development Riyadh",
    "Shopify development Jeddah",
    "Shopify development Dammam",
    "Shopify Plus Saudi Arabia",
    "Mada Shopify integration",
    "Tabby Shopify BNPL",
    "Tamara Shopify BNPL",
    "STC Pay Shopify",
    "HyperPay Shopify Saudi",
    "PayTabs Shopify KSA",
    "SMSA Shopify integration",
    "Aramex KSA Shopify",
    "Saudi Post SPL Shopify",
    "ZATCA Fatoora Shopify",
    "Arabic RTL Shopify storefront",
    "Shopify Vision 2030 ecommerce",
  ],
  openGraph: {
    title: "Shopify Development Agency Saudi Arabia | Mada, Tabby, Tamara & ZATCA",
    description: "Shopify and Shopify Plus for Saudi brands in Riyadh, Jeddah, Dammam. Mada, Tabby, Tamara, STC Pay, SMSA, Aramex KSA, Saudi Post integrations. 15% VAT, ZATCA Fatoora Phase 2 compliant. Bilingual Arabic/English RTL.",
    url: "https://www.globify.ae/shopify-ksa",
    locale: "ar_SA",
    alternateLocale: ["en_AE", "en_GB"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shopify Development Agency Saudi Arabia | Globify",
    description: "Mada, Tabby, Tamara, STC Pay, SMSA, Saudi Post, ZATCA Fatoora. Arabic RTL storefronts. Shopify Partner serving Riyadh, Jeddah, Dammam.",
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
            "serviceType": "Shopify Development Agency Saudi Arabia",
            "description": "Shopify and Shopify Plus ecommerce development for Saudi Arabian brands including local payment integrations (Mada, Tabby, Tamara, STC Pay, HyperPay, PayTabs, Apple Pay), shipping carrier integrations (SMSA Express, Aramex KSA, J&T Saudi, Saudi Post SPL, NAQEL Express, DHL Saudi), SAR currency handling, bilingual Arabic/English right-to-left (RTL) storefronts, 15% VAT compliance, ZATCA Fatoora Phase 2 e-invoicing integration, and platform migrations from Salla, Zid, WooCommerce, and Magento.",
            "provider": {
              "@type": "Organization",
              "name": "Globify",
              "sameAs": ["https://www.linkedin.com/company/globify-software-solutions-pvt-ltd", "https://www.instagram.com/globify_software_solutions", "https://www.youtube.com/@GlobifyCorp", "https://www.facebook.com/globifydigital"],
              "url": "https://www.globify.ae",
              "logo": "https://www.globify.ae/logo.png"
            },
            "areaServed": {
              "@type": "Country",
              "name": "Saudi Arabia"
            },
            "url": "https://www.globify.ae/shopify-ksa"
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
              { "@type": "ListItem", "position": 2, "name": "Shopify Saudi Arabia", "item": "https://www.globify.ae/shopify-ksa" }
            ]
          })
        }}
      />
      {children}
    </>
  );
}