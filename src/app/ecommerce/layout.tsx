import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "E-Commerce Development Agency — Shopify, WooCommerce, Magento & Custom",
  description: "End-to-end e-commerce development for brands in UAE, Saudi Arabia, India, UK, Netherlands, Australia, and South Africa. Shopify and Shopify Plus, WooCommerce, Magento, headless commerce, marketplace integration, ERP connectivity, and CRO. 300+ stores launched, 3x average revenue growth, ISO 27001 certified.",
  keywords: [
    "ecommerce development agency UAE",
    "ecommerce development Dubai",
    "ecommerce development India",
    "ecommerce development UK",
    "ecommerce development Netherlands",
    "ecommerce development Australia",
    "ecommerce development South Africa",
    "shopify development agency",
    "woocommerce development agency",
    "magento development agency",
    "headless commerce",
    "B2B ecommerce platform",
    "marketplace integration",
    "ecommerce ERP integration",
    "custom ecommerce development",
  ],
  alternates: {
    canonical: "/ecommerce",
  },
  openGraph: {
    title: "E-Commerce Development Agency | UAE, India, UK, EU, AU, ZA",
    description: "Shopify, WooCommerce, Magento, headless commerce, and custom builds for global brands. 300+ stores launched, 3x revenue growth, ISO 27001 certified.",
    url: "https://www.globify.ae/ecommerce",
    type: "website",
    locale: "en_AE",
    alternateLocale: ["en_GB", "en_IN", "en_AU", "en_ZA", "nl_NL"],
  },
  twitter: {
    card: "summary_large_image",
    title: "E-Commerce Development Agency | Globify",
    description: "Shopify, WooCommerce, Magento, headless. 300+ stores launched, 3x revenue growth.",
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
            "serviceType": "E-Commerce Development Agency",
            "description": "End-to-end e-commerce development across Shopify, Shopify Plus, WooCommerce, Magento, Adobe Commerce, and headless commerce architectures. Marketplace integration, ERP connectivity, B2B and B2C platforms, CRO, and growth optimization for scalable online retail.",
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
            "url": "https://www.globify.ae/ecommerce"
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
              { "@type": "ListItem", "position": 2, "name": "E-Commerce", "item": "https://www.globify.ae/ecommerce" }
            ]
          })
        }}
      />
      {children}
    </>
  );
}