import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Mobile App Development Agency â€” iOS, Android, React Native & Flutter",
  description: "Custom mobile app development for brands in UAE, Saudi Arabia, India, UK, Netherlands, Australia, and South Africa. Native iOS and Android, cross-platform React Native and Flutter, enterprise mobility, and MVP-to-scale builds. 300+ apps launched, ISO 27001 certified.",
  keywords: [
    "mobile app development agency UAE",
    "app development Dubai",
    "app development India",
    "app development UK",
    "app development Netherlands",
    "app development Australia",
    "app development South Africa",
    "iOS app development",
    "android app development",
    "react native development",
    "flutter development",
    "cross platform app development",
    "enterprise mobility solutions",
    "MVP app development",
    "custom mobile app developers",
  ],
  alternates: {
    canonical: "/app-development",
  },
  openGraph: {
    title: "Mobile App Development Agency | UAE, India, UK, EU, AU, ZA",
    description: "Custom iOS, Android, React Native, and Flutter app development for global brands. Enterprise mobility, MVP-to-scale builds. 300+ apps launched, ISO 27001 certified.",
    url: "https://www.globify.ae/app-development",
    type: "website",
    locale: "en_AE",
    alternateLocale: ["en_GB", "en_IN", "en_AU", "en_ZA", "nl_NL"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobile App Development Agency | Globify",
    description: "Custom iOS, Android, React Native, Flutter apps for global brands. 300+ launched, ISO 27001 certified.",
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
            "serviceType": "Mobile App Development Agency",
            "description": "Custom mobile application development including native iOS and Android, cross-platform React Native and Flutter, enterprise mobility solutions, MVP development, and scalable app architectures for high-growth brands.",
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
            "url": "https://www.globify.ae/app-development"
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
              { "@type": "ListItem", "position": 2, "name": "App Development", "item": "https://www.globify.ae/app-development" }
            ]
          })
        }}
      />
      {children}
    </>
  );
}