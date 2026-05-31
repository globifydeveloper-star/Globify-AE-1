import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shopify Development Agency Bahrain — BenefitPay, Aramex, Arabic Storefronts & VAT",
  description: "Shopify and Shopify Plus development for Bahraini brands in Manama, Muharraq, Riffa, and Hamad Town. Native integrations with BenefitPay, Benefit Network, Tap Payments, Aramex Bahrain, BPost, DHL Bahrain, BHD currency handling, bilingual Arabic/English RTL storefronts, and full 10% VAT compliance (NBR). Shopify Partner, ISO 27001 certified.",
  alternates: { canonical: "/shopify-bahrain" },
  keywords: [
    "Shopify agency Bahrain",
    "Shopify development Manama",
    "Shopify Plus Bahrain",
    "BenefitPay Shopify integration",
    "Benefit Network Shopify",
    "Tap Payments Shopify Bahrain",
    "Aramex Bahrain Shopify",
    "BPost Shopify integration",
    "DHL Bahrain Shopify",
    "Arabic RTL Shopify storefront",
    "Shopify BHD currency",
    "Bahrain VAT NBR Shopify",
    "D2C ecommerce Bahrain",
    "Shopify Partner Bahrain",
    "Magento to Shopify Bahrain",
  ],
  openGraph: {
    title: "Shopify Development Agency Bahrain | BenefitPay, Aramex & Arabic RTL",
    description: "Shopify and Shopify Plus for Bahraini brands in Manama, Muharraq, Riffa. BenefitPay, Tap Payments, Aramex Bahrain integrations. Bilingual Arabic/English RTL storefronts. 10% VAT compliant (NBR).",
    url: "https://www.globify.ae/shopify-bahrain",
    locale: "en_AE",
    alternateLocale: ["ar_BH", "en_GB"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shopify Development Agency Bahrain | Globify",
    description: "BenefitPay, Aramex Bahrain, Arabic RTL storefronts. 10% VAT (NBR) compliant. Shopify Partner serving Manama, Muharraq.",
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
            "serviceType": "Shopify Development Agency Bahrain",
            "description": "Shopify and Shopify Plus ecommerce development for Bahraini brands including local payment integrations (BenefitPay, Benefit Network, Tap Payments, Stripe, PayTabs), shipping carrier integrations (Aramex Bahrain, BPost, DHL Bahrain, Fetchr), BHD currency handling, bilingual Arabic/English right-to-left (RTL) storefronts, 10% VAT compliance with the National Bureau for Revenue (NBR), and platform migrations from WooCommerce and Magento.",
            "provider": {
              "@type": "Organization",
              "name": "Globify",
              "sameAs": ["https://www.linkedin.com/company/globify-software-solutions-pvt-ltd", "https://www.instagram.com/globify_software_solutions", "https://www.youtube.com/@GlobifyCorp", "https://www.facebook.com/globifydigital"],
              "url": "https://www.globify.ae",
              "logo": "https://www.globify.ae/logo.png"
            },
            "areaServed": {
              "@type": "Country",
              "name": "Bahrain"
            },
            "url": "https://www.globify.ae/shopify-bahrain"
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
              { "@type": "ListItem", "position": 2, "name": "Shopify Bahrain", "item": "https://www.globify.ae/shopify-bahrain" }
            ]
          })
        }}
      />
      {children}
    </>
  );
}