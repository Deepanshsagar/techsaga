import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { getMeta } from "./lib/getMeta";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata() {
  return getMeta("/");
}

// export const metadata: Metadata = {
//   title: "Techsaga Corporations - Inspired for Innovation - Since 2012",
//   description: "Leading businesses through the backend, frontend tech, and digital infrastructure for next-gen transformation services and consulting solutions globally. Inspired for Innovation.",
//   alternates: {
//     canonical: "https://www.techsaga.co.in",
//   },

//   openGraph: {
//     title: "Techsaga Corporations",
//     description:
//       "Leading businesses through backend, frontend tech and digital infrastructure.",
//     url: "https://www.techsaga.co.in",
//     siteName: "Techsaga Corporations",
//     locale: "en_US",
//     type: "website",
//     images: [
//       {
//         url: "https://www.techsaga.co.in/assets/img/logo.webp",
//         width: 1200,
//         height: 630,
//         alt: "Techsaga Corporations",
//       },
//     ],
//   },

//   twitter: {
//     card: "summary_large_image",
//     title: "Techsaga Corporations",
//     description:
//       "Leading businesses through backend, frontend tech and digital infrastructure.",
//     images: [
//       "https://www.techsaga.co.in/assets/img/logo.webp",
//     ],
//   },

//   verification: {
//     google: "M4Ve19GHQtvgFtIiadKFU_uJn4ADGf3zuUQYKIxtlVA",
//   },

//   robots: {
//     index: true,
//     follow: true,
//   },
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Techsaga Corporations",
    url: "https://www.techsaga.co.in/",
    logo: "https://www.techsaga.co.in/assets/img/logo.webp",
    sameAs: [
      "https://www.facebook.com/",
      "https://www.linkedin.com/",
      "https://twitter.com/",
      "https://www.instagram.com/",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91 9718688880",
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["English"],
    },
  };

  // Local Business Schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Techsaga Corporations",
    image:
      "https://www.techsaga.co.in/assets/img/logo.webp",
    url: "https://www.techsaga.co.in/",
    telephone: "+91 9718688880",
    priceRange: "₹",
    address: {
      "@type": "PostalAddress",
      streetAddress: "B-132, B Block, Sector 2",
      addressLocality: "Noida",
      postalCode: "201301",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 28.5843109,
      longitude: 77.31340039999999,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.3",
      ratingCount: "124",
      bestRating: "5",
      worstRating: "1",
    },
  };

  // Website Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Techsaga Corporations",
    url: "https://www.techsaga.co.in/",
    potentialAction: {
      "@type": "SearchAction",
      target:
        "https://www.techsaga.co.in/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />

        {/* Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />

        {/* Website Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-4KZ18HP7M9"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            
            function gtag(){
              dataLayer.push(arguments);
            }

            gtag('js', new Date());

            gtag('config', 'G-4KZ18HP7M9');
          `}
        </Script>
      </body>
    </html>
  );
}
