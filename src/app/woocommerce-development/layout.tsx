import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "WooCommerce Development Agency â€” UAE, India & Global Experts",
  description: "WooCommerce and WordPress e-commerce development for brands in UAE, Saudi Arabia, India, UK, Netherlands, Australia, and South Africa. Custom plugins, theme development, Shopify-to-WooCommerce migrations, CRO and speed optimization. 300+ stores launched, ISO 27001 certified.",
  keywords: [
    "woocommerce development UAE",
    "woocommerce development Dubai",
    "woocommerce development India",
    "woocommerce development UK",
    "woocommerce development Netherlands",
    "woocommerce development Australia",
    "woocommerce development South Africa",
    "woocommerce agency",
    "wordpress ecommerce development",
    "woocommerce plugin development",
    "woocommerce migration",
    "wordpress development agency",
    "woocommerce speed optimization",
  ],
  alternates: {
    canonical: "/woocommerce-development",
  },
  openGraph: {
    title: "WooCommerce Development Agency | UAE, India, UK, EU, AU, ZA",
    description: "Custom WooCommerce and WordPress e-commerce stores for global brands. Custom plugins, migrations, CRO, speed optimization. 300+ stores launched, ISO 27001 certified.",
    url: "https://www.globify.ae/woocommerce-development",
    type: "website",
    locale: "en_AE",
    alternateLocale: ["en_GB", "en_IN", "en_AU", "en_ZA", "nl_NL"],
  },
  twitter: {
    card: "summary_large_image",
    title: "WooCommerce Development Agency | Globify",
    description: "Custom WooCommerce and WordPress stores for global brands. 300+ launched, ISO 27001 certified.",
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
            "serviceType": "WooCommerce Development Company",
            "description": "Custom WooCommerce and WordPress e-commerce development, plugin development, theme customization, platform migrations, CRO, and speed optimization for scalable online stores.",
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
            "url": "https://www.globify.ae/woocommerce-development"
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
              { "@type": "ListItem", "position": 2, "name": "WooCommerce Development", "item": "https://www.globify.ae/woocommerce-development" }
            ]
          })
        }}
      />
      {children}
    </>
  );
}