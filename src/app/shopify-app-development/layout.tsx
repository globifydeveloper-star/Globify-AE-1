import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shopify App Development Agency — Custom Apps, App Bridge, Functions & Public App Store Builds",
  description: "Custom Shopify and Shopify Plus app development for merchants and app founders in UAE, Saudi Arabia, India, UK, Netherlands, Australia, and South Africa. App Bridge, Polaris UI, Shopify Functions, Admin extensions, Checkout extensions, Theme app extensions, GraphQL Admin API integrations, and full Shopify App Store submission and launch support. Shopify Partner, ISO 27001 certified.",
  alternates: { canonical: "/shopify-app-development" },
  keywords: [
    "Shopify app development agency",
    "custom Shopify app developer",
    "Shopify Plus app development",
    "Shopify App Store development",
    "Shopify App Bridge developer",
    "Shopify Polaris UI developer",
    "Shopify Functions developer",
    "Shopify checkout extensions",
    "Shopify admin extensions",
    "Shopify theme app extensions",
    "Shopify GraphQL Admin API",
    "private Shopify app development",
    "public Shopify app development",
    "Shopify app UAE India",
    "Shopify Partner developer",
  ],
  openGraph: {
    title: "Shopify App Development Agency | UAE, India, UK, EU, AU, ZA",
    description: "Custom Shopify and Shopify Plus apps for merchants and App Store founders. App Bridge, Polaris UI, Functions, Checkout & Admin extensions, GraphQL Admin API. Shopify Partner.",
    url: "https://www.globify.ae/shopify-app-development",
    locale: "en_AE",
    alternateLocale: ["en_GB", "en_IN", "en_AU", "en_ZA", "nl_NL"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shopify App Development Agency | Globify",
    description: "Custom Shopify apps for merchants and App Store founders. App Bridge, Polaris, Functions, Checkout extensions. Shopify Partner.",
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
            "serviceType": "Shopify App Development Agency",
            "description": "Custom Shopify and Shopify Plus app development including private/custom apps for individual merchants, public apps for the Shopify App Store, App Bridge integrations, Polaris UI components, Shopify Functions (discounts, delivery, payments customization), admin extensions, checkout extensions, theme app extensions, GraphQL Admin API and Storefront API integrations, webhook handling, and full App Store submission and review support.",
            "provider": {
              "@type": "Organization",
              "name": "Globify",
              "sameAs": ["https://www.linkedin.com/company/globify-software-solutions-pvt-ltd", "https://www.instagram.com/globify_software_solutions", "https://www.youtube.com/@GlobifyCorp", "https://www.facebook.com/globifydigital"],
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
            "url": "https://www.globify.ae/shopify-app-development"
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
              { "@type": "ListItem", "position": 2, "name": "Shopify App Development", "item": "https://www.globify.ae/shopify-app-development" }
            ]
          })
        }}
      />
      {children}
    </>
  );
}