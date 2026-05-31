import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shopify Development Agency France — Carte Bancaire, Colissimo, TVA & RGPD",
  description: "Shopify and Shopify Plus development for French brands in Paris, Lyon, Marseille, Toulouse, Bordeaux, Lille, and Nice. Native integrations with Carte Bancaire (CB), PayPal, Lyf Pay, Apple Pay, Klarna, Alma, Colissimo, Chronopost, Mondial Relay, Relais Colis, EUR currency handling, French-language storefronts, TVA tax handling (20%), and full RGPD/GDPR compliance. EU office in Gießen, Germany. Shopify Partner, ISO 27001 certified.",
  alternates: { canonical: "/shopify-france" },
  keywords: [
    "Shopify agence France",
    "agence Shopify Paris",
    "Shopify agency France",
    "développeur Shopify France",
    "Shopify Plus France",
    "Carte Bancaire Shopify",
    "Lyf Pay Shopify",
    "Alma Shopify BNPL",
    "Klarna Shopify France",
    "Colissimo Shopify integration",
    "Chronopost Shopify",
    "Mondial Relay Shopify",
    "Relais Colis Shopify",
    "Shopify TVA France",
    "Shopify RGPD",
    "D2C ecommerce France",
    "PrestaShop vers Shopify migration",
  ],
  openGraph: {
    title: "Shopify Development Agency France | Carte Bancaire, Colissimo & RGPD",
    description: "Shopify et Shopify Plus pour les marques françaises à Paris, Lyon, Marseille. CB, Lyf Pay, Alma, Klarna, Colissimo, Chronopost, Mondial Relay. TVA et RGPD conformes. Bureau européen en Allemagne.",
    url: "https://www.globify.ae/shopify-france",
    locale: "fr_FR",
    alternateLocale: ["en_GB", "en_AE"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shopify Development Agency France | Globify",
    description: "Carte Bancaire, Colissimo, Mondial Relay, RGPD. Shopify Partner, bureau européen en Allemagne.",
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
            "serviceType": "Shopify Development Agency France",
            "description": "Shopify and Shopify Plus ecommerce development for French brands including local payment integrations (Carte Bancaire/CB, Lyf Pay, Alma BNPL, Klarna, PayPal, Apple Pay, Stripe), shipping carrier integrations (Colissimo, Chronopost, Mondial Relay, Relais Colis, DPD France, GLS), EUR currency handling, French-language storefronts, TVA tax handling (20% standard rate), RGPD/GDPR compliance, and platform migrations from PrestaShop, Magento, and WooCommerce.",
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
              }
            },
            "areaServed": {
              "@type": "Country",
              "name": "France"
            },
            "url": "https://www.globify.ae/shopify-france"
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
              { "@type": "ListItem", "position": 2, "name": "Shopify France", "item": "https://www.globify.ae/shopify-france" }
            ]
          })
        }}
      />
      {children}
    </>
  );
}