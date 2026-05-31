import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shopify Development Agency India — Razorpay, UPI, Delhivery, Shiprocket, GST & Multi-Language Storefronts",
  description: "Shopify and Shopify Plus development for Indian brands across Mumbai, Bangalore, Delhi NCR, Chennai, Hyderabad, Pune, and Kolkata. Native integrations with Razorpay, Cashfree, PhonePe, UPI/QR, Paytm, Delhivery, Shiprocket, BlueDart, DTDC, Ekart, INR currency handling, multi-language storefronts (English, Hindi, Tamil, Telugu, Bengali, Marathi), full GST compliance with HSN codes, and DPDP Act 2023 data protection. India delivery office in Technopark, Trivandrum. Shopify Partner, ISO 27001 certified.",
  alternates: { canonical: "/shopify-india" },
  keywords: [
    "Shopify agency India",
    "Shopify development Mumbai",
    "Shopify development Bangalore",
    "Shopify development Delhi NCR",
    "Shopify development Chennai",
    "Shopify Plus India",
    "Razorpay Shopify integration",
    "Cashfree Shopify integration",
    "PhonePe Shopify",
    "UPI Shopify integration",
    "Delhivery Shopify integration",
    "Shiprocket Shopify",
    "BlueDart Shopify",
    "Shopify GST HSN compliance",
    "Shopify INR multi-currency",
    "D2C ecommerce India",
    "Shopify Partner Trivandrum Kerala",
  ],
  openGraph: {
    title: "Shopify Development Agency India | Razorpay, UPI, Delhivery & GST",
    description: "Shopify and Shopify Plus for Indian brands in Mumbai, Bangalore, Delhi NCR, Chennai, Hyderabad. Razorpay, Cashfree, PhonePe, UPI, Delhivery, Shiprocket integrations. Multi-language storefronts. Full GST and HSN compliance. India office in Trivandrum.",
    url: "https://www.globify.ae/shopify-india",
    locale: "en_IN",
    alternateLocale: ["hi_IN", "en_GB", "en_AE"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shopify Development Agency India | Globify",
    description: "Razorpay, UPI, Delhivery, Shiprocket, GST/HSN compliant. Multi-language storefronts. Shopify Partner with India office in Trivandrum.",
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
            "serviceType": "Shopify Development Agency India",
            "description": "Shopify and Shopify Plus ecommerce development for Indian D2C and B2B brands including local payment integrations (Razorpay, Cashfree, PhonePe, UPI Intent and Collect flows, Paytm, BillDesk, CCAvenue), shipping carrier and aggregator integrations (Delhivery, Shiprocket, BlueDart, DTDC, Ekart, Ecom Express, India Post), INR currency handling, multi-language storefronts (English, Hindi, Tamil, Telugu, Bengali, Marathi, Gujarati), full GST compliance including HSN code product classification and IGST/CGST/SGST handling, DPDP Act 2023 data protection, and platform migrations from Magento, WooCommerce, and Indian platforms like Dukaan and Instamojo.",
            "provider": {
              "@type": "Organization",
              "name": "Globify",
              "sameAs": ["https://www.linkedin.com/company/globify", "https://www.instagram.com/globify"],
              "url": "https://www.globify.ae",
              "logo": "https://www.globify.ae/logo.png",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Amster House, Technopark",
                "addressLocality": "Trivandrum",
                "addressRegion": "Kerala",
                "addressCountry": "IN"
              }
            },
            "areaServed": {
              "@type": "Country",
              "name": "India"
            },
            "url": "https://www.globify.ae/shopify-india"
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
              { "@type": "ListItem", "position": 2, "name": "Shopify India", "item": "https://www.globify.ae/shopify-india" }
            ]
          })
        }}
      />
      {children}
    </>
  );
}