import type { Metadata } from "next";
import FAQSchema from "@/components/FAQSchema";

export const metadata: Metadata = {
  title: "Shopify Development Agency UAE & GCC",
  description: "Launch, redesign or migrate your Shopify store with Globify. UAE and GCC Shopify development, Arabic localization, payments, ERP integrations and CRO.",
  keywords: [
    "Shopify development agency UAE",
    "Shopify development company Dubai",
    "Shopify developers UAE",
    "Shopify agency Dubai",
    "Shopify ecommerce development",
    "Shopify store development UAE",
    "Shopify migration agency",
    "Shopify Plus development UAE",
    "Shopify redesign agency",
    "GCC ecommerce development",
    "Arabic Shopify development",
  ],
  alternates: {
    canonical: "/shopify-development",
  },
  openGraph: {
    title: "Shopify Development Agency UAE & GCC | Globify",
    description: "Launch, redesign or migrate your Shopify store with Globify. UAE and GCC Shopify development, Arabic localization, payments, ERP integrations and CRO.",
    url: "https://www.globify.ae/shopify-development",
    type: "website",
    locale: "en_AE",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shopify Development Agency UAE & GCC | Globify",
    description: "Launch, redesign or migrate your Shopify store with Globify. UAE and GCC Shopify development, Arabic localization, payments and CRO.",
  },
};

const shopifyFaqs = [
  { question: "How much does Shopify development cost with Globify?", answer: "Projects typically range from $5,000 for a standard Shopify store to $50,000+ for enterprise Shopify Plus implementations. We provide detailed quotes after a free discovery call, so you know exactly what you're investing before we start." },
  { question: "How long does it take to build a Shopify store?", answer: "Standard Shopify stores launch in 3-6 weeks. Shopify Plus and complex custom builds take 6-12 weeks. We've built stores in as fast as 2 weeks for urgent launches — timeline depends on scope and integrations." },
  { question: "Can you migrate my store from WooCommerce or Magento?", answer: "Yes. We've completed 100+ platform migrations with zero data loss and minimal downtime. We migrate products, customers, orders, SEO rankings, and content — often with improved performance from day one." },
  { question: "What ROI can I expect from a Shopify rebuild?", answer: "Our clients average 3x revenue growth within 12 months. Typical improvements: 40% higher conversion rates, 25% higher AOV, and 50% reduction in operational costs through automation." },
  { question: "Do you offer ongoing support after launch?", answer: "Yes. We offer growth retainer packages that include CRO optimization, performance monitoring, new feature development, and strategic consulting. We're your long-term growth partner." },
  { question: "Is Shopify secure for handling payments in the UAE?", answer: "Absolutely. Shopify is PCI DSS Level 1 certified (the highest level), includes SSL encryption, and supports regional payment gateways like Tabby, Tamara, and Checkout.com. It meets all UAE and India regulatory requirements." },
  { question: "Why choose Shopify over WooCommerce or a custom platform?", answer: "Shopify offers faster launch (60% quicker), lower TCO, 99.99% uptime, and built-in scalability. For 80% of e-commerce businesses, Shopify delivers better ROI than alternatives. We help you evaluate objectively — sometimes custom is the right choice." },
  { question: "What's the difference between Shopify and Shopify Plus?", answer: "Shopify Plus is Shopify's enterprise tier offering custom checkout, advanced automation (Shopify Flow), wholesale channels, higher API limits, and dedicated support. We recommend Plus for brands doing $500K+ annually or those with complex multi-market requirements." },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Shopify Development Agency",
            "description": "Custom Shopify and Shopify Plus development, theme customization, headless commerce, migrations from WooCommerce and Magento, B2B/wholesale channels, and e-commerce optimization for scalable online stores.",
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
              { "@type": "Country", "name": "Kuwait" },
              { "@type": "Country", "name": "Qatar" },
              { "@type": "Country", "name": "Bahrain" },
              { "@type": "Country", "name": "Oman" }
            ],
            "url": "https://www.globify.ae/shopify-development"
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
              { "@type": "ListItem", "position": 2, "name": "Shopify Development", "item": "https://www.globify.ae/shopify-development" }
            ]
          })
        }}
      />

      <FAQSchema faqs={shopifyFaqs} />

      {children}
    </>
  );
}