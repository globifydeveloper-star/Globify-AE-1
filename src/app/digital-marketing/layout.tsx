import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Marketing Agency — SEO, PPC, Social Media & Performance Marketing",
  description: "Full-service digital marketing for brands in UAE, Saudi Arabia, India, UK, Netherlands, Australia, and South Africa. SEO, Google Ads, Meta Ads, LinkedIn, TikTok, conversion rate optimization, and analytics — built around revenue, not vanity metrics. Google Partner, ISO 27001 certified.",
  alternates: { canonical: "/digital-marketing" },
  keywords: [
    "digital marketing agency UAE",
    "digital marketing Dubai",
    "digital marketing India",
    "digital marketing UK",
    "digital marketing Netherlands",
    "digital marketing Australia",
    "digital marketing South Africa",
    "SEO agency Dubai",
    "Google Ads agency UAE",
    "Meta Ads agency",
    "performance marketing agency",
    "PPC management",
    "conversion rate optimization",
    "social media marketing agency",
    "B2B digital marketing",
  ],
  openGraph: {
    title: "Digital Marketing Agency | UAE, India, UK, EU, AU, ZA",
    description: "SEO, Google Ads, Meta Ads, LinkedIn, TikTok, and CRO for global brands. Revenue-focused, Google Partner, ISO 27001 certified.",
    url: "https://www.globify.ae/digital-marketing",
    locale: "en_AE",
    alternateLocale: ["en_GB", "en_IN", "en_AU", "en_ZA", "nl_NL"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Agency | Globify",
    description: "SEO, PPC, social, and CRO for global brands. Google Partner, ISO 27001 certified.",
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
            "serviceType": "Digital Marketing Agency",
            "description": "Full-service digital marketing including SEO, paid search (Google Ads), paid social (Meta, LinkedIn, TikTok, X), content marketing, conversion rate optimization, and marketing analytics for B2C and B2B brands.",
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
            "url": "https://www.globify.ae/digital-marketing"
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
              { "@type": "ListItem", "position": 2, "name": "Digital Marketing", "item": "https://www.globify.ae/digital-marketing" }
            ]
          })
        }}
      />
      {children}
    </>
  );
}