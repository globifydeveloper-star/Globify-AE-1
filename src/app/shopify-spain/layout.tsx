import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shopify Development Agency Spain â€” Bizum, Correos, IVA & GDPR Compliant",
  description: "Shopify and Shopify Plus development for Spanish brands and EU-targeting D2C stores. Native integrations with Bizum, Bizum Pay, Correos, SEUR, MRW, IVA handling, multi-language Spanish/Catalan/Galician/Basque storefronts, and full GDPR/LOPDGDD compliance. EU office in GieÃŸen, Germany. Shopify Partner, ISO 27001 certified.",
  alternates: { canonical: "/shopify-spain" },
  keywords: [
    "Shopify agency Spain",
    "Shopify desarrollo EspaÃ±a",
    "Shopify Madrid agency",
    "Shopify Barcelona agency",
    "agencia Shopify EspaÃ±a",
    "Shopify Plus Spain",
    "Bizum Shopify integration",
    "Correos Shopify integration",
    "SEUR MRW Shopify",
    "Shopify IVA Spain",
    "Shopify Catalan storefront",
    "Shopify LOPDGDD compliance",
    "D2C ecommerce Spain",
    "Magento to Shopify Spain",
    "Shopify partner EspaÃ±a",
  ],
  openGraph: {
    title: "Shopify Development Agency Spain | Bizum, Correos & GDPR",
    description: "Shopify and Shopify Plus development for Spanish brands. Bizum, Correos, SEUR, MRW integrations, IVA handling, multi-language storefronts, LOPDGDD/GDPR compliant. EU office in Germany.",
    url: "https://www.globify.ae/shopify-spain",
    locale: "es_ES",
    alternateLocale: ["ca_ES", "en_GB", "en_AE"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shopify Development Agency Spain | Globify",
    description: "Bizum, Correos, SEUR, IVA, multi-language Spanish storefronts. Shopify Partner, EU office in Germany.",
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
            "serviceType": "Shopify Development Agency Spain",
            "description": "Shopify and Shopify Plus ecommerce development for Spanish brands including local payment integrations (Bizum, Bizum Pay, Stripe, Redsys), shipping carrier integrations (Correos, SEUR, MRW, NACEX, GLS), IVA tax handling, multi-language storefronts (Spanish, Catalan, Galician, Basque), LOPDGDD and GDPR compliance, and platform migrations from Magento and Prestashop.",
            "provider": {
              "@type": "Organization",
              "name": "Globify",
              "sameAs": ["https://www.linkedin.com/company/globify-software-solutions-pvt-ltd", "https://www.instagram.com/globify_software_solutions", "https://www.youtube.com/@GlobifyCorp", "https://www.facebook.com/globifydigital"],
              "url": "https://www.globify.ae",
              "logo": "https://www.globify.ae/logo.png"
            },
            "areaServed": {
              "@type": "Country",
              "name": "Spain"
            },
            "url": "https://www.globify.ae/shopify-spain"
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
              { "@type": "ListItem", "position": 2, "name": "Shopify Spain", "item": "https://www.globify.ae/shopify-spain" }
            ]
          })
        }}
      />
      {children}
    </>
  );
}