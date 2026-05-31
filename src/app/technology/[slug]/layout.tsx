import { getAllTechnologies } from "@/data/technologyData";
import type { Metadata } from "next";

export function generateStaticParams() {
  const techs = getAllTechnologies();
  return techs.map((tech) => ({
    slug: tech.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const techs = getAllTechnologies();
  const tech = techs.find((t) => t.slug === params.slug);
  if (!tech) {
    return { title: "Technology Not Found" };
  }

  return {
    title: "${tech.name} Development Services",
    description: tech.heroDescription || tech.description,
    alternates: {
      canonical: `/technology/${tech.slug}`,
    },
    openGraph: {
      title: "${tech.name} Development Services",
      description: tech.heroDescription || tech.description,
      type: "website",
      url: `https://www.globify.ae/technology/${tech.slug}`,
    }
  };
}

export default function Layout({ children, params }: { children: React.ReactNode, params: { slug: string } }) {
  const techs = getAllTechnologies();
  const tech = techs.find((t) => t.slug === params.slug);

  return (
    <>
      {tech && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": `${tech.name} Development & Consulting`,
              "description": tech.description,
              "provider": {
                "@type": "Organization",
                "name": "Globify",
              "sameAs": ["https://www.linkedin.com/company/globify", "https://www.instagram.com/globify"],
                "url": "https://www.globify.ae"
              },
              "areaServed": ["United Arab Emirates", "India", "Global"]
            })
          }}
        />
      )}
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [{"@type":"ListItem","position":1,"name":"Home","item":"https://www.globify.ae"},{"@type":"ListItem","position":2,"name":"Technology","item":"https://www.globify.ae/technology"},{"@type":"ListItem","position":3,"name":"Current Article"}]
          })
        }}
      />
      {children}
    </>
  );
}
