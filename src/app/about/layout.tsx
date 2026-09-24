import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About Globify — AI Transformation & Digital Commerce Leaders",
  description: "Globify delivers AI-powered digital transformation, ML engineering, and revenue optimization. 170+ transformations across 10+ countries.",
  alternates: { canonical: "https://www.globify.ae/about" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [{"@type":"ListItem","position":1,"name":"Home","item":"https://www.globify.ae"},{"@type":"ListItem","position":2,"name":"About","item":"https://www.globify.ae/about"}]
          })
        }}
      />
      {children}</>;
}
