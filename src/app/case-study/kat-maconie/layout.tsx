import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Kat Maconie Case Study | Globify Portfolio",
  description: "Read the Kat Maconie case study to see how Globify delivered transformative digital solutions, custom development, and measurable ROI.",
  alternates: { canonical: "/case-study/kat-maconie" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Kat Maconie Digital Transformation Case Study",
            "description": "Read the Kat Maconie case study to see how Globify delivered transformative digital solutions and custom development.",
            "author": {
              "@type": "Person",
              "name": "Maya",
              "jobTitle": "Lead Digital Architect",
              "url": "https://www.globify.ae/about"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Globify",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.globify.ae/logo.png"
              }
            },
            "mainEntityOfPage": "https://www.globify.ae/case-study/kat-maconie",
          })
        }}
      />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [{"@type":"ListItem","position":1,"name":"Home","item":"https://www.globify.ae"},{"@type":"ListItem","position":2,"name":"Case study","item":"https://www.globify.ae/case-study"},{"@type":"ListItem","position":3,"name":"Kat maconie","item":"https://www.globify.ae/case-study/kat-maconie"}]
          })
        }}
      />
      {children}
    </>
  );
}
