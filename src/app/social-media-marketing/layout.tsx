import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Social Media Marketing Agency â€” UAE, India & Global Brand Growth",
  description: "Full-service social media marketing for brands in UAE, Saudi Arabia, India, UK, Netherlands, Australia, and South Africa. Content creation, community management, influencer partnerships, and paid social campaigns on Instagram, TikTok, LinkedIn, X, and Meta. ROI-driven strategy, ISO 27001 certified.",
  keywords: [
    "social media marketing agency UAE",
    "social media marketing Dubai",
    "social media marketing India",
    "social media agency UK",
    "social media agency Netherlands",
    "social media agency Australia",
    "social media agency South Africa",
    "instagram marketing agency",
    "tiktok marketing agency",
    "linkedin marketing agency",
    "meta ads agency",
    "influencer marketing UAE",
    "community management agency",
    "paid social agency",
    "social media strategy",
  ],
  alternates: {
    canonical: "/social-media-marketing",
  },
  openGraph: {
    title: "Social Media Marketing Agency | UAE, India, UK, EU, AU, ZA",
    description: "Full-service social media: content, community, influencer, paid social. ROI-driven campaigns on Instagram, TikTok, LinkedIn, Meta. 300+ brands served.",
    url: "https://www.globify.ae/social-media-marketing",
    type: "website",
    locale: "en_AE",
    alternateLocale: ["en_GB", "en_IN", "en_AU", "en_ZA", "nl_NL"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Social Media Marketing Agency | Globify",
    description: "Full-service social media for global brands. Content, community, influencer, paid social. ROI-driven.",
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
            "serviceType": "Social Media Marketing Agency",
            "description": "Full-service social media marketing including content creation, community management, influencer partnerships, paid social advertising, and brand strategy across Instagram, TikTok, LinkedIn, X, and Meta platforms.",
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
            "url": "https://www.globify.ae/social-media-marketing"
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
              { "@type": "ListItem", "position": 2, "name": "Social Media Marketing", "item": "https://www.globify.ae/social-media-marketing" }
            ]
          })
        }}
      />
      {children}
    </>
  );
}