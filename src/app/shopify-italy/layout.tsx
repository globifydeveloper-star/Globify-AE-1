import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shopify Development Agency Italy — Satispay, BRT, Poste Italiane, IVA & GDPR",
  description: "Shopify and Shopify Plus development for Italian brands in Milan, Rome, Naples, Turin, Florence, Bologna, and Venice. Native integrations with Satispay, Nexi, Scalapay, Klarna, PayPal, Apple Pay, BRT, SDA, Poste Italiane, GLS, Bartolini, EUR currency handling, Italian-language storefronts, IVA tax handling (22%), Codice Fiscale validation, full GDPR compliance, and Fatturazione Elettronica integration. EU office in Gießen, Germany. Shopify Partner, ISO 27001 certified.",
  alternates: { canonical: "/shopify-italy" },
  keywords: [
    "Shopify agenzia Italia",
    "agenzia Shopify Milano",
    "agenzia Shopify Roma",
    "Shopify agency Italy",
    "sviluppatore Shopify Italia",
    "Shopify Plus Italia",
    "Satispay Shopify integration",
    "Nexi Shopify integration",
    "Scalapay Shopify BNPL",
    "Klarna Shopify Italia",
    "BRT Shopify integration",
    "Poste Italiane Shopify",
    "SDA Shopify",
    "Shopify IVA Italia",
    "Fatturazione Elettronica Shopify",
    "Codice Fiscale Shopify",
    "Magento a Shopify migrazione",
  ],
  openGraph: {
    title: "Shopify Development Agency Italy | Satispay, BRT, Poste Italiane & GDPR",
    description: "Shopify e Shopify Plus per i brand italiani a Milano, Roma, Napoli, Torino. Satispay, Nexi, Scalapay, BRT, Poste Italiane, SDA. IVA al 22%, Fatturazione Elettronica, GDPR. Ufficio EU in Germania.",
    url: "https://www.globify.ae/shopify-italy",
    locale: "it_IT",
    alternateLocale: ["en_GB", "en_AE"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shopify Development Agency Italy | Globify",
    description: "Satispay, Nexi, BRT, Poste Italiane, IVA, Fatturazione Elettronica. Shopify Partner, ufficio EU in Germania.",
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
            "serviceType": "Shopify Development Agency Italy",
            "description": "Shopify and Shopify Plus ecommerce development for Italian brands including local payment integrations (Satispay, Nexi, Scalapay BNPL, Klarna, PayPal, Apple Pay, Stripe), shipping carrier integrations (BRT/Bartolini, SDA Express Courier, Poste Italiane, GLS Italia, DHL Italia, InPost Italia), EUR currency handling, Italian-language storefronts, IVA tax handling (22% standard rate), Codice Fiscale and Partita IVA validation, mandatory Fatturazione Elettronica (e-invoicing through Sistema di Interscambio/SdI), GDPR compliance, and platform migrations from Magento and PrestaShop.",
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
              "name": "Italy"
            },
            "url": "https://www.globify.ae/shopify-italy"
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
              { "@type": "ListItem", "position": 2, "name": "Shopify Italy", "item": "https://www.globify.ae/shopify-italy" }
            ]
          })
        }}
      />
      {children}
    </>
  );
}