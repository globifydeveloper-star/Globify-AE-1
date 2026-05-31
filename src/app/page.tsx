import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: {
    absolute: "Web Development, Shopify & AI Agency UAE, India & Global | Globify",
  },
  description: "Globify is a 360° digital agency for global brands. Web development, Shopify and Shopify Plus, AI automation, ERP, and performance marketing. Offices in Dubai, Kerala, and Germany. 300+ projects, 3x average revenue growth, ISO 27001 certified.",
  keywords: [
    "web development agency UAE",
    "shopify development agency",
    "shopify plus partner",
    "ecommerce agency Dubai",
    "AI automation agency",
    "ERP solutions UAE",
    "digital transformation agency",
    "performance marketing agency Dubai",
    "web development company India",
    "shopify agency UK",
    "shopify agency Netherlands",
    "shopify agency Australia",
    "shopify agency South Africa",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Globify — Web, Shopify & AI Agency for Global Brands",
    description: "360° digital agency for brands in UAE, India, UK, Netherlands, Australia, and beyond. Web development, Shopify Plus, AI automation, ERP. 300+ projects launched, ISO 27001 certified.",
    url: "https://www.globify.ae",
    type: "website",
    locale: "en_AE",
    alternateLocale: ["en_GB", "en_IN", "en_AU", "en_ZA", "ar_AE", "nl_NL"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Globify — Web, Shopify & AI Agency",
    description: "360° digital agency for global brands. Web, Shopify Plus, AI, ERP. 300+ projects, 3x revenue growth.",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.png", type: "image/png" },
      { url: "/favicon.webp", type: "image/webp" },
    ],
    shortcut: "/favicon.ico",
    apple: "/favicon.png",
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Globify",
            image: "https://www.globify.ae/logo.png",
            url: "https://www.globify.ae",
            telephone: "+971547308673",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Dubai Silicon Oasis",
              addressLocality: "Dubai",
              addressRegion: "Dubai",
              addressCountry: "AE",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 25.1256,
              longitude: 55.3854,
            },
            openingHoursSpecification: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
              ],
              opens: "09:00",
              closes: "18:00",
            },
          }),
        }}
      />
      <HomeClient />
    </>
  );
}