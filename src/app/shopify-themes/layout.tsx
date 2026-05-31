import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Custom Shopify Theme Design",
  description: "Pixel-perfect, high-converting custom Shopify themes built from scratch with Next.js or Liquid.",
  alternates: { canonical: "https://www.globify.ae/shopify-themes" },
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
            "serviceType": "Custom Shopify Theme Design",
            "description": "Pixel-perfect, high-converting custom Shopify themes built from scratch with Next.js or Liquid.",
            "provider": {
              "@type": "Organization",
              "name": "Globify",
              "sameAs": ["https://www.linkedin.com/company/globify-software-solutions-pvt-ltd", "https://www.instagram.com/globify_software_solutions", "https://www.youtube.com/@GlobifyCorp", "https://www.facebook.com/globifydigital"],
              "url": "https://www.globify.ae"
            },
            "areaServed": ["United Arab Emirates", "India", "Global"],
            "url": "https://www.globify.ae/shopify-themes"
          })
        }}
      />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [{"@type":"ListItem","position":1,"name":"Home","item":"https://www.globify.ae"},{"@type":"ListItem","position":2,"name":"Shopify themes","item":"https://www.globify.ae/shopify-themes"}]
          })
        }}
      />
      {children}
    </>
  );
}
