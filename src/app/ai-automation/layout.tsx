import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI & Automation Agency â€” Chatbots, RPA & Workflow Automation",
  description: "AI-powered automation for enterprises in UAE, Saudi Arabia, India, UK, Netherlands, Australia, and South Africa. Conversational AI and chatbots, RPA, workflow automation, predictive analytics, and machine learning. Reduce operational costs by 40-60%. ISO 27001 certified.",
  keywords: [
    "AI automation agency UAE",
    "AI automation Dubai",
    "AI automation India",
    "AI automation UK",
    "AI automation Netherlands",
    "AI automation Australia",
    "AI automation South Africa",
    "AI chatbot development",
    "RPA development",
    "robotic process automation",
    "workflow automation",
    "machine learning agency",
    "predictive analytics services",
    "conversational AI",
    "enterprise AI solutions",
  ],
  alternates: {
    canonical: "/ai-automation",
  },
  openGraph: {
    title: "AI & Automation Agency | UAE, India, UK, EU, AU, ZA",
    description: "AI chatbots, RPA, workflow automation, predictive analytics, and ML for global enterprises. Reduce operational costs by 40-60%. ISO 27001 certified.",
    url: "https://www.globify.ae/ai-automation",
    type: "website",
    locale: "en_AE",
    alternateLocale: ["en_GB", "en_IN", "en_AU", "en_ZA", "nl_NL"],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI & Automation Agency | Globify",
    description: "Chatbots, RPA, workflow automation, predictive analytics. Cut operational costs 40-60%. ISO 27001 certified.",
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
            "serviceType": "AI and Intelligent Automation Agency",
            "description": "Enterprise AI and automation services including conversational AI chatbots, robotic process automation (RPA), workflow orchestration, predictive analytics, machine learning models, document and CV processing with OCR and NLP, and intelligent decision systems for cost reduction and operational efficiency.",
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
            "url": "https://www.globify.ae/ai-automation"
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
              { "@type": "ListItem", "position": 2, "name": "AI & Automation", "item": "https://www.globify.ae/ai-automation" }
            ]
          })
        }}
      />
      {children}
    </>
  );
}