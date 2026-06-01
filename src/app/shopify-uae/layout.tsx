import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shopify Development Agency UAE — Dubai-Based Shopify Partner",
  description: "Shopify and Shopify Plus development for UAE brands in Dubai, Abu Dhabi, and Sharjah. Native integrations with Stripe, PayTabs, Network International, CCAvenue, Tabby, Tamara, Aramex, Quiqup, DHL Express, full UAE VAT compliance (5%), and bilingual Arabic/English RTL storefronts. 30+ UAE stores delivered, 100+ globally. Shopify Partner, ISO 27001 certified.",
  alternates: { canonical: "/shopify-uae" },
  keywords: [
    "shopify development agency UAE",
    "shopify development Dubai",
    "shopify agency Dubai",
    "shopify partner UAE",
    "shopify development Abu Dhabi",
    "shopify development Sharjah",
    "shopify experts UAE",
    "ecommerce development UAE",
    "shopify VAT UAE",
    "shopify Arabic store",
    "shopify Aramex integration",
    "shopify Tabby integration",
    "shopify Tamara UAE",
    "shopify PayTabs integration",
    "shopify Network International",
    "shopify CCAvenue UAE",
    "shopify migration UAE",
    "shopify RTL Arabic",
    "shopify Quiqup integration",
  ],
  openGraph: {
    title: "Shopify Development Agency UAE | Dubai Shopify Partner",
    description: "Shopify and Shopify Plus stores for UAE brands. Stripe, PayTabs, Network International, Tabby, Tamara, Aramex, Quiqup. VAT-compliant, Arabic RTL ready. 30+ UAE stores delivered.",
    url: "https://www.globify.ae/shopify-uae",
    type: "website",
    locale: "en_AE",
    alternateLocale: ["ar_AE"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shopify Development Agency UAE | Globify Dubai",
    description: "Shopify stores for UAE brands. Tabby, Tamara, PayTabs, Aramex, UAE VAT, Arabic RTL. 30+ UAE stores delivered.",
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
            "serviceType": "Shopify Development Agency UAE",
            "description": "Shopify and Shopify Plus ecommerce development for UAE brands including local payment integrations (Stripe, PayTabs, Network International, CCAvenue, Tabby, Tamara, Apple Pay, Google Pay), shipping carrier integrations (Aramex, Quiqup, DHL Express, often via ClickPost aggregator), AED currency handling, bilingual Arabic/English RTL storefronts, full 5% UAE VAT compliance with TRN capture and FTA-compliant invoice formatting, Cash on Delivery workflows, and platform migrations from WooCommerce, Magento, Salla, and Zid.",
            "provider": {
              "@type": "Organization",
              "name": "Globify",
              "sameAs": ["https://www.linkedin.com/company/globify-software-solutions-pvt-ltd", "https://www.instagram.com/globify_software_solutions", "https://www.youtube.com/@GlobifyCorp", "https://www.facebook.com/globifydigital"],
              "url": "https://www.globify.ae",
              "logo": "https://www.globify.ae/logo.png",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Office 310, Al Qusais Plaza Building, Damascus Street, Qusais",
                "addressLocality": "Dubai",
                "addressRegion": "Dubai",
                "addressCountry": "AE"
              },
              "telephone": "+971547308673"
            },
            "areaServed": {
              "@type": "Country",
              "name": "United Arab Emirates"
            },
            "url": "https://www.globify.ae/shopify-uae"
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
              { "@type": "ListItem", "position": 2, "name": "Shopify UAE", "item": "https://www.globify.ae/shopify-uae" }
            ]
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How long does it take to build a Shopify store for a UAE business?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Project timelines depend on scope. A starter store using a premium theme typically launches in 2-3 weeks. A custom-designed store with marketing integrations takes 4-6 weeks. Enterprise builds with ERP integration, multi-language support, and custom checkout typically run 8-12 weeks. Shopify Plus migrations from other platforms range from 6-16 weeks depending on data complexity and B2B requirements."
                }
              },
              {
                "@type": "Question",
                "name": "Which payment gateways work best for Shopify in the UAE?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "For UAE-based merchants we recommend a combination of Stripe with AED settlement, PayTabs, Network International, or CCAvenue for card processing. All support the 3DS 2.0 authentication required by UAE Central Bank rules. For Buy Now Pay Later, Tabby leads in the UAE market with Tamara as a strong secondary option. Apple Pay and Google Pay are enabled by default given high UAE adoption. Cash on Delivery still accounts for around 25 percent of UAE ecommerce transactions, so a COD workflow with delivery-time verification remains essential."
                }
              },
              {
                "@type": "Question",
                "name": "Is Shopify VAT-compliant for UAE businesses?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. Shopify supports the UAE 5 percent VAT rate through Shopify Tax. Merchants configure VAT settings, register their Tax Registration Number (TRN), and enable VAT-compliant invoice generation. For B2B transactions, the customer TRN is captured at checkout and tax invoices are produced in the format required by the Federal Tax Authority, typically using apps like Sufio or Order Printer Pro."
                }
              },
              {
                "@type": "Question",
                "name": "Can Shopify support Arabic right-to-left (RTL) stores in the UAE?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, with proper theme implementation. Shopify native multi-language feature supports Arabic, but RTL layout requires theme-level adjustments to CSS, text alignment, navigation flow, and checkout. Generic Shopify themes do not handle Arabic RTL correctly out of the box. We rebuild themes for Arabic by combining AI-assisted translation with manual review, then test the full checkout flow in Arabic. Proper hreflang setup signals Google which language version to serve to which user."
                }
              },
              {
                "@type": "Question",
                "name": "Which shipping carriers integrate with Shopify in the UAE?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The most common UAE shipping integrations are Aramex for nationwide standard delivery, Quiqup for Dubai same-day, DHL Express for cross-border, and Fetchr for regional last-mile. For brands managing multiple carriers we typically deploy a shipping aggregator like ClickPost. This lets the brand switch carriers per order without re-engineering the Shopify integration. Live shipping rates at checkout reduce cart abandonment significantly compared to flat-rate shipping."
                }
              },
              {
                "@type": "Question",
                "name": "What does a Shopify store for a UAE business typically cost?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Globify transparent pricing starts at AED 3,000 for a starter store using a premium theme with 2-3 week delivery. Custom-designed stores with marketing integrations are AED 12,000. Enterprise builds with ERP integration and multi-language are AED 30,000. Shopify Plus engagements are custom-quoted based on scope. These prices cover development; ongoing Shopify subscription fees, payment gateway transaction fees, and optional app subscriptions are billed separately."
                }
              },
              {
                "@type": "Question",
                "name": "Should a UAE business choose Shopify or Salla?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "For brands selling primarily within Saudi Arabia, Salla offers strong Arabic-first defaults and built-in Saudi payment gateways. For brands targeting the UAE, GCC-wide, and international markets, Shopify offers a stronger app ecosystem, better international payment processing, more theme flexibility, and superior B2B capabilities through Shopify Plus. UAE D2C brands that plan to scale beyond the GCC typically choose Shopify."
                }
              },
              {
                "@type": "Question",
                "name": "Can you migrate an existing store to Shopify from another platform?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. We have migrated stores from WooCommerce, Magento, Salla, Zid, and custom-built carts. Migration typically includes product catalog, customer accounts, order history, URL redirect mapping for SEO preservation, theme rebuild, payment gateway reconnection, app reinstallation, and tax and shipping configuration. Standard migrations take 4-8 weeks; complex multi-currency or B2B migrations run 12-16 weeks. We commit to zero downtime during the cutover."
                }
              },
              {
                "@type": "Question",
                "name": "Do you offer ongoing support after the Shopify store launches?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. Our post-launch support covers bug fixes, performance monitoring, security updates, Shopify version upgrades, app management, conversion rate optimization, and growth strategy. Pricing depends on store complexity and support hours needed. Enterprise and Shopify Plus clients receive a dedicated solutions architect as part of the ongoing partnership."
                }
              },
              {
                "@type": "Question",
                "name": "Are you a Shopify Partner in the UAE?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. Globify is a Shopify Partner with offices in Dubai, Trivandrum, and Gießen. We are ISO 27001 certified for information security management, a Google Partner, and a Clutch Top Agency. We have built and scaled Shopify and Shopify Plus stores for brands including Wilson Middle East, Salomon GCC, and InstaRunway."
                }
              }
            ]
          })
        }}
      />
      {children}
    </>
  );
}