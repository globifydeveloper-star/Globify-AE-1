import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shopify Development Agency South Africa — PayFast, Yoco, Courier Guy & POPIA",
  description: "Shopify and Shopify Plus development for South African brands in Johannesburg, Cape Town, Durban, and Pretoria. Native integrations with PayFast, Yoco, Peach Payments, Ozow, The Courier Guy, Aramex SA, Pargo, ZAR currency handling, multi-language English/Afrikaans storefronts, and full POPIA compliance. Shopify Partner, ISO 27001 certified.",
  alternates: { canonical: "/shopify-south-africa" },
  keywords: [
    "Shopify agency South Africa",
    "Shopify development Johannesburg",
    "Shopify development Cape Town",
    "Shopify development Durban",
    "Shopify Plus South Africa",
    "PayFast Shopify integration",
    "Yoco Shopify integration",
    "Peach Payments Shopify",
    "Ozow Shopify integration",
    "Courier Guy Shopify integration",
    "Aramex SA Shopify",
    "Pargo Shopify integration",
    "Shopify POPIA compliance",
    "Shopify Afrikaans storefront",
    "D2C ecommerce South Africa",
  ],
  openGraph: {
    title: "Shopify Development Agency South Africa | PayFast, Courier Guy & POPIA",
    description: "Shopify and Shopify Plus for South African brands. PayFast, Yoco, Peach Payments, Ozow, Courier Guy, Aramex SA, Pargo integrations. POPIA compliant, Shopify Partner.",
    url: "https://www.globify.ae/shopify-south-africa",
    locale: "en_ZA",
    alternateLocale: ["en_GB", "en_AE"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shopify Development Agency South Africa | Globify",
    description: "PayFast, Yoco, Courier Guy, Aramex SA, POPIA compliant. Shopify Partner serving Johannesburg, Cape Town, Durban.",
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
            "serviceType": "Shopify Development Agency South Africa",
            "description": "Shopify and Shopify Plus ecommerce development for South African brands including local payment integrations (PayFast, Yoco, Peach Payments, Ozow, SnapScan), shipping carrier integrations (The Courier Guy, Aramex SA, Pargo, PostNet, FastWay), ZAR currency handling, multi-language storefronts (English, Afrikaans), POPIA compliance, and platform migrations from WooCommerce and Magento.",
            "provider": {
              "@type": "Organization",
              "name": "Globify",
              "sameAs": ["https://www.linkedin.com/company/globify-software-solutions-pvt-ltd", "https://www.instagram.com/globify_software_solutions", "https://www.youtube.com/@GlobifyCorp", "https://www.facebook.com/globifydigital"],
              "url": "https://www.globify.ae",
              "logo": "https://www.globify.ae/logo.png"
            },
            "areaServed": {
              "@type": "Country",
              "name": "South Africa"
            },
            "url": "https://www.globify.ae/shopify-south-africa"
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
              { "@type": "ListItem", "position": 2, "name": "Shopify South Africa", "item": "https://www.globify.ae/shopify-south-africa" }
            ]
          })
        }}
      />
      {children}
    </>
  );
}