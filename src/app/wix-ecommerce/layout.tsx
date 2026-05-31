import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Wix E-Commerce Development Agency â€” UAE, India & Global D2C Stores",
  description: "Launch your D2C store fast with Wix and Wix Studio. Professional Wix e-commerce development for brands in UAE, Saudi Arabia, India, UK, Netherlands, Australia, and South Africa. Drag-and-drop design, built-in marketing, multi-currency checkout. Stores from AED 3,000.",
  keywords: [
    "wix ecommerce development",
    "wix ecommerce UAE",
    "wix ecommerce Dubai",
    "wix ecommerce India",
    "wix ecommerce UK",
    "wix ecommerce Netherlands",
    "wix ecommerce Australia",
    "wix ecommerce South Africa",
    "wix studio agency",
    "wix D2C store",
    "wix website design",
    "wix store development",
    "wix migration",
  ],
  alternates: {
    canonical: "/wix-ecommerce",
  },
  openGraph: {
    title: "Wix E-Commerce Development Agency | UAE, India & Global",
    description: "Fast D2C Wix stores for brands in UAE, India, UK, EU, AU, ZA. Wix Studio agency. Multi-currency checkout, built-in marketing. From AED 3,000.",
    url: "https://www.globify.ae/wix-ecommerce",
    type: "website",
    locale: "en_AE",
    alternateLocale: ["en_GB", "en_IN", "en_AU", "en_ZA", "nl_NL"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wix E-Commerce Development Agency | Globify",
    description: "Fast D2C Wix stores for global brands. Wix Studio agency. From AED 3,000.",
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
            "serviceType": "Wix E-Commerce Development Company",
            "description": "Custom Wix and Wix Studio e-commerce development, theme customization, migrations, and D2C store launches for fast-growing brands.",
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
            "offers": {
              "@type": "AggregateOffer",
              "priceCurrency": "AED",
              "lowPrice": "3000",
              "highPrice": "30000",
              "offerCount": "3"
            },
            "url": "https://www.globify.ae/wix-ecommerce"
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
              { "@type": "ListItem", "position": 2, "name": "Wix E-Commerce", "item": "https://www.globify.ae/wix-ecommerce" }
            ]
          })
        }}
      />
      {children}
    </>
  );
}