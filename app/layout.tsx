import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Providers } from "./providers";
import { siteConfig } from "@/lib/siteConfig";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Loan Consultant in Jaipur | Home, Business & Personal Loans | Shree Ram Solution",
    template: "%s | Shree Ram Solution",
  },
  description:
    "Looking for a loan consultant in Jaipur? Shree Ram Solution helps you explore Home, Business, Personal and Car Loan options with eligibility and documentation assistance.",
  keywords: [
    "loan consultant in Jaipur",
    "loan consultancy in Jaipur",
    "best loan consultant in Jaipur",
    "home loan consultant in Jaipur",
    "business loan consultant in Jaipur",
    "personal loan consultant in Jaipur",
    "car loan consultant in Jaipur",
    "loan assistance in Jaipur",
    "home loan in Jaipur",
    "business loan in Jaipur",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Loan Consultant in Jaipur | Shree Ram Solution",
    description:
      "Looking for a loan consultant in Jaipur? Shree Ram Solution helps you explore Home, Business, Personal and Car Loan options with eligibility and documentation assistance.",
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: "Loan Consultant in Jaipur | Shree Ram Solution",
    description: "Looking for a loan consultant in Jaipur? Shree Ram Solution helps you explore Home, Business, Personal and Car Loan options with eligibility and documentation assistance.",
  },
};

export const viewport: Viewport = {
  themeColor: "#0B4F6C",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const schemaOrg = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/icon.png`,
    description: "Loan consultancy (DSA) helping customers explore Home, Business, Personal and Car Loan options with eligibility and documentation assistance.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Shop No. 2, B-1, Govind Nagar, Marbal Mandi Chouraha, Near Aryan Restaurant, Kalwar Road",
      addressLocality: "Jaipur",
      addressRegion: "Rajasthan",
      addressCountry: "IN"
    },
    telephone: siteConfig.phonePrimary,
    email: siteConfig.email,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        opens: "10:00",
        closes: "19:00"
      }
    ],
    areaServed: {
      "@type": "City",
      name: "Jaipur"
    }
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased text-ink bg-canvas`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
