import EcommerceClient from "./EcommerceClient";

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "E-Commerce Development & Strategy",
            "provider": {
              "@type": "Organization",
              "name": "Globify",
              "url": "https://www.globify.ae"
            }
          })
        }}
      />
      <EcommerceClient />
    </>
  );
}