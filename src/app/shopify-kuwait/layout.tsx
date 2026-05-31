import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shopify Development Agency Kuwait — KNET, MyFatoorah, Aramex & Arabic Storefronts",
  description: "Shopify and Shopify Plus development for Kuwaiti brands in Kuwait City, Hawalli, Salmiya, and Farwaniya. Native integrations with KNET, MyFatoorah, Tap Payments, UPayments, Aramex Kuwait, Kuwait Post, ATAP Logistics, KWD currency handling (3-decimal), bilingual Arabic/English RTL storefronts, and compliance with Kuwait's e-commerce regulations and 15% Business Profits Tax. Shopify Partner, ISO 27001 certified.",
  alternates: { canonical: "/shopify-kuwait" },
  keywords: [
    "Shopify agency Kuwait",
    "Shopify development Kuwait City",
    "Shopify Plus Kuwait",
    "KNET Shopify integration",
    "MyFatoorah Shopify integration",
    "Tap Payments Shopify Kuwait",
    "UPayments Shopify",
    "Aramex Kuwait Shopify",
    "Kuwait Post Shopify integration",
    "ATAP Logistics Shopify",
    "Arabic RTL Shopify storefront",
    "Shopify KWD currency",
    "Kuwait ecommerce compliance",
    "D2C ecommerce Kuwait",
    "Shopify Partner Kuwait",
  ],
  openGraph: {
    title: "Shopify Development Agency Kuwait | KNET, MyFatoorah, Aramex & Arabic RTL",
    description: "Shopify and Shopify Plus for Kuwaiti brands in Kuwait City, Hawalli, Salmiya. KNET, MyFatoorah, Tap Payments, Aramex Kuwait, Kuwait Post integrations. Bilingual Arabic/English RTL storefronts.",
    url: "https://www.globify.ae/shopify-kuwait",
    locale: "en_AE",
    alternateLocale: ["ar_KW", "en_GB"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shopify Development Agency Kuwait | Globify",
    description: "KNET, MyFatoorah, Aramex Kuwait, Arabic RTL storefronts. Shopify Partner serving Kuwait City, Hawalli, Salmiya.",
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
            "serviceType": "Shopify Development Agency Kuwait",
            "description": "Shopify and Shopify Plus ecommerce development for Kuwaiti brands including local payment integrations (KNET, MyFatoorah, Tap Payments, UPayments, PayTabs), shipping carrier integrations (Aramex Kuwait, Kuwait Post, ATAP Logistics, DHL Kuwait, NAQEL Kuwait), KWD currency handling (3-decimal precision for fils sub-units), bilingual Arabic/English right-to-left (RTL) storefronts, compliance with Kuwait's Ministry of Commerce e-commerce regulations and the 15% Business Profits Tax, and platform migrations from WooCommerce and Magento.",
            "provider": {
              "@type": "Organization",
              "name": "Globify",
              "sameAs": ["https://www.linkedin.com/company/globify-software-solutions-pvt-ltd", "https://www.instagram.com/globify_software_solutions", "https://www.youtube.com/@GlobifyCorp", "https://www.facebook.com/globifydigital"],
              "url": "https://www.globify.ae",
              "logo": "https://www.globify.ae/logo.png"
            },
            "areaServed": {
              "@type": "Country",
              "name": "Kuwait"
            },
            "url": "https://www.globify.ae/shopify-kuwait"
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
              { "@type": "ListItem", "position": 2, "name": "Shopify Kuwait", "item": "https://www.globify.ae/shopify-kuwait" }
            ]
          })
        }}
      />
      {children}
    </>
  );
}