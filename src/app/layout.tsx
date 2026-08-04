import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import { ClientProviders } from "@/components/ClientProviders";
import ConsentBanner from "@/components/ConsentBanner";
import AnalyticsTracker from "@/components/AnalyticsTracker";
import Script from "next/script";

const interSans = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.globify.ae'),
  title: {
    default: "Globify — Design · Build · Scale",
    template: "%s | Globify"
  },
  description: "Globify is a 360° digital commerce and technology partner delivering web development, ERP solutions, and performance-driven digital growth.",
  keywords: [
    "web development UAE",
    "ERP solutions",
    "ecommerce development",
    "Shopify development",
    "digital transformation",
    "performance marketing",
  ],
  openGraph: {
    title: "Globify — Design · Build · Scale",
    description: "End-to-end web, ERP, and digital commerce solutions for scalable business growth.",
    siteName: "Globify",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    locale: "en_AE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Globify — Design · Build · Scale",
    description: "Web, ERP & digital commerce solutions built for growth.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${interSans.variable} ${robotoMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/*
          Consent Mode v2 defaults. This must run before gtag.js loads and
          before any gtag('config', ...) call, so it is beforeInteractive.
          Everything non-essential starts denied and is only granted if the
          visitor accepts in ConsentBanner.
        */}
        <Script id="google-consent-default" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('consent', 'default', {
              ad_storage: 'denied',
              ad_user_data: 'denied',
              ad_personalization: 'denied',
              analytics_storage: 'denied',
              wait_for_update: 500
            });
          `}
        </Script>
        {/*
          GTM container. Loads after the Consent Mode default above so tags
          inside the container inherit the denied-by-default state. The direct
          GA4/Ads gtag.js below is intentionally left in place for now; the
          container is empty, so nothing is double-counted yet.
        */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MTV5XP2P"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MTV5XP2P');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Globify",
              legalName: "Tradelance Global DWC-LLC",
              url: "https://www.globify.ae",
              logo: "https://www.globify.ae/logo.png",
              sameAs: [
                "https://www.linkedin.com/company/globify-software-solutions-pvt-ltd",
                "https://www.instagram.com/globify_software_solutions", "https://www.youtube.com/@GlobifyCorp", "https://www.facebook.com/globifydigital",
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Globify",
              url: "https://www.globify.ae",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://www.globify.ae/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Globify Dubai",
              legalName: "Tradelance Global DWC-LLC",
              image: "https://www.globify.ae/logo.png",
              url: "https://www.globify.ae",
              telephone: "+971547308673",
              address: {
                "@type": "PostalAddress",
                streetAddress: "3rd Floor, Building A3, Business Park, Dubai South",
                addressLocality: "Dubai",
                addressRegion: "Dubai",
                addressCountry: "AE"
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 24.8929,
                longitude: 55.1140,
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                ],
                opens: "09:00",
                closes: "18:00",
              }
            }),
          }}
        />
        <ClientProviders>
          {children}
        </ClientProviders>
        <AnalyticsTracker />
        <ConsentBanner />
      </body>
    </html>
  );
}
