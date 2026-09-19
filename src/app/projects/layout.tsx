import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Our Projects — Case Studies & Portfolio",
  description: "Explore Globify's portfolio of 170+ successful projects across e-commerce, healthcare, fintech, sports, and enterprise industries in UAE and India.",
  alternates: { canonical: "https://www.globify.ae/projects" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Globify Projects & Case Studies",
            "description": "Explore Globify's portfolio of 170+ successful projects across e-commerce, healthcare, fintech, and enterprise industries.",
            "url": "https://www.globify.ae/projects"
          })
        }}
      />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [{"@type":"ListItem","position":1,"name":"Home","item":"https://www.globify.ae"},{"@type":"ListItem","position":2,"name":"Projects","item":"https://www.globify.ae/projects"}]
          })
        }}
      />
      {children}
    </>
  );
}
