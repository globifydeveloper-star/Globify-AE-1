import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shopify Development Agency Qatar — QPAY, Aramex, Arabic Storefronts & VAT-Ready",
  description: "Shopify and Shopify Plus development for Qatari brands in Doha, Lusail, Al Rayyan, and Al Wakrah. Native integrations with QPAY, NAPS, CB-QNB, Skip Cash, Aramex Qatar, QPost, AlMana Logistics, QAR currency handling, bilingual Arabic/English RTL storefronts, and VAT-ready architecture for the expected 2026 rollout. Shopify Partner, ISO 27001 certified.",
  alternates: { canonical: "/shopify-qatar" },
  keywords: [
    "Shopify agency Qatar",
    "Shopify development Doha",
    "Shopify development Lusail",
    "Shopify Plus Qatar",
    "QPAY Shopify integration",
    "NAPS Shopify integration",
    "Skip Cash Shopify",
    "CB-QNB Shopify",
    "Aramex Qatar Shopify",
    "QPost Shopify integration",
    "Arabic RTL Shopify storefront",
    "Shopify QAR currency",
    "Qatar VAT ready Shopify",
    "D2C ecommerce Qatar",
    "Shopify Partner Qatar",
  ],
  openGraph: {
    title: "Shopify Development Agency Qatar | QPAY, NAPS, Aramex & Arabic RTL",
    description: "Shopify and Shopify Plus for Qatari brands in Doha, Lusail, Al Rayyan. QPAY, NAPS, Skip Cash, Aramex Qatar, QPost integrations. Bilingual Arabic/English storefronts. VAT-ready for 2026.",
    url: "https://www.globify.ae/shopify-qatar",
    locale: "en_AE",
    alternateLocale: ["ar_QA", "en_GB"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shopify Development Agency Qatar | Globify",
    description: "QPAY, NAPS, Aramex Qatar, Arabic RTL storefronts. VAT-ready. Shopify Partner serving Doha, Lusail, Al Rayyan.",
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
            "serviceType": "Shopify Development Agency Qatar",
            "description": "Shopify and Shopify Plus ecommerce development for Qatari brands including local payment integrations (QPAY, NAPS, CB-QNB, Skip Cash, Tap Payments, Stripe), shipping carrier integrations (Aramex Qatar, QPost, AlMana Logistics, DHL Qatar), QAR currency handling, bilingual Arabic/English right-to-left (RTL) storefronts, VAT-ready architecture for the expected 2026 GCC framework rollout, and platform migrations from WooCommerce and Magento.",
            "provider": {
              "@type": "Organization",
              "name": "Globify",
              "sameAs": ["https://www.linkedin.com/company/globify", "https://www.instagram.com/globify"],
              "url": "https://www.globify.ae",
              "logo": "https://www.globify.ae/logo.png"
            },
            "areaServed": {
              "@type": "Country",
              "name": "Qatar"
            },
            "url": "https://www.globify.ae/shopify-qatar"
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
              { "@type": "ListItem", "position": 2, "name": "Shopify Qatar", "item": "https://www.globify.ae/shopify-qatar" }
            ]
          })
        }}
      />
      {children}
    </>
  );
}