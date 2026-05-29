import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Salomon Case Study | Globify Portfolio",
  description: "Read the Salomon case study to see how Globify delivered transformative digital solutions, custom development, and measurable ROI.",
  alternates: { canonical: "/case-study/salomon" },
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
            "headline": "Salomon Digital Transformation Case Study",
            "description": "Read the Salomon case study to see how Globify delivered transformative digital solutions and custom development.",
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
            "mainEntityOfPage": "https://www.globify.ae/case-study/salomon",
          })
        }}
      />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [{"@type":"ListItem","position":1,"name":"Home","item":"https://www.globify.ae"},{"@type":"ListItem","position":2,"name":"Case study","item":"https://www.globify.ae/case-study"},{"@type":"ListItem","position":3,"name":"Salomon","item":"https://www.globify.ae/case-study/salomon"}]
          })
        }}
      />
      {children}
    </>
  );
}
