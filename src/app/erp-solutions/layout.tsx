import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom ERP Development Agency — Healthcare, Retail, Manufacturing & Distribution",
  description: "Custom ERP development for healthcare, retail, manufacturing, and distribution in UAE, Saudi Arabia, India, UK, Netherlands, Australia, and South Africa. Proven platforms: MEDOC HMS (200+ hospitals) and EKASYS ERP (retail & real estate). Multi-tenant, ISO 27001 certified.",
  alternates: { canonical: "/erp-solutions" },
  keywords: [
    "ERP development UAE",
    "custom ERP Dubai",
    "ERP solutions India",
    "ERP development UK",
    "ERP software Netherlands",
    "ERP solutions Australia",
    "ERP development South Africa",
    "hospital management system",
    "MEDOC HMS",
    "EKASYS ERP",
    "retail ERP software",
    "manufacturing ERP",
    "distribution management system",
    "warehouse management software",
    "multi-tenant ERP",
  ],
  openGraph: {
    title: "Custom ERP Development Agency | UAE, India, UK, EU, AU, ZA",
    description: "Healthcare (MEDOC HMS, 200+ hospitals), retail & distribution (EKASYS), and custom ERP for manufacturing. Multi-tenant, secure, scalable.",
    url: "https://www.globify.ae/erp-solutions",
    locale: "en_AE",
    alternateLocale: ["en_GB", "en_IN", "en_AU", "en_ZA", "nl_NL"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom ERP Development Agency | Globify",
    description: "MEDOC HMS (200+ hospitals), EKASYS ERP, custom ERP for healthcare, retail, manufacturing.",
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
            "serviceType": "Custom ERP Development Agency",
            "description": "Custom ERP development and proprietary platforms (MEDOC HMS for hospitals, EKASYS for retail and distribution) plus bespoke ERP for manufacturing, warehouse management, and multi-tenant enterprise architectures.",
            "provider": {
              "@type": "Organization",
              "name": "Globify",
              "sameAs": ["https://www.linkedin.com/company/globify", "https://www.instagram.com/globify"],
              "url": "https://www.globify.ae",
              "logo": "https://www.globify.ae/logo.png"
            },
            "areaServed": [
              { "@type": "Country", "name": "United Arab Emirates" },
              { "@type": "Country", "name": "Saudi Arabia" },
              { "@type": "Country", "name": "India" },
              { "@type": "Country", "name": "United Kingdom" },
              { "@type": "Country", "name": "Netherlands" },
              { "@type": "Country", "name": "Australia" },
              { "@type": "Country", "name": "South Africa" }
            ],
            "url": "https://www.globify.ae/erp-solutions"
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
              { "@type": "ListItem", "position": 2, "name": "ERP Solutions", "item": "https://www.globify.ae/erp-solutions" }
            ]
          })
        }}
      />
      {children}
    </>
  );
}