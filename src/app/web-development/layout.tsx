import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Development Agency â€” Custom Websites, Web Apps & Enterprise CMS",
  description: "Custom web development for brands in UAE, Saudi Arabia, India, UK, Netherlands, Australia, and South Africa. Next.js, React, headless CMS, enterprise web apps, and SEO-optimized websites engineered for speed and conversions. ISO 27001 certified.",
  alternates: { canonical: "/web-development" },
  keywords: [
    "web development agency UAE",
    "web development Dubai",
    "web development India",
    "web development UK",
    "web development Netherlands",
    "web development Australia",
    "web development South Africa",
    "Next.js development agency",
    "React development agency",
    "custom web application development",
    "headless CMS development",
    "enterprise web development",
    "Jamstack development",
    "SEO-optimized website development",
    "conversion-focused web design",
  ],
  openGraph: {
    title: "Web Development Agency | UAE, India, UK, EU, AU, ZA",
    description: "Next.js, React, headless CMS, and enterprise web apps engineered for speed and conversions. ISO 27001 certified.",
    url: "https://www.globify.ae/web-development",
    locale: "en_AE",
    alternateLocale: ["en_GB", "en_IN", "en_AU", "en_ZA", "nl_NL"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Development Agency | Globify",
    description: "Next.js, React, headless CMS, and enterprise web apps. Engineered for speed and conversions. ISO 27001 certified.",
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
            "serviceType": "Web Development Agency",
            "description": "Custom web development including Next.js and React web applications, headless CMS implementations, Jamstack architectures, enterprise web platforms, and SEO-optimized marketing websites with performance-first engineering for global brands.",
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
            "url": "https://www.globify.ae/web-development"
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
              { "@type": "ListItem", "position": 2, "name": "Web Development", "item": "https://www.globify.ae/web-development" }
            ]
          })
        }}
      />
      {children}
    </>
  );