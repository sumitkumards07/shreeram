import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Providers } from "./providers";
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
  title: {
    default: "Shree Ram Solution — Home, Business, Personal & Car Loan Assistance in Jaipur",
    template: "%s · Shree Ram Solution",
  },
  description:
    "Loan consultancy (DSA) on Kalwar Road, Jaipur. Check eligibility, estimate EMIs, and get expert guidance from enquiry to approval for Home, Business, Personal and Car loans.",
  keywords: [
    "loan consultancy Jaipur",
    "home loan Jaipur",
    "business loan",
    "personal loan",
    "car loan",
    "DSA Kalwar Road",
  ],
  openGraph: {
    title: "Shree Ram Solution — Loan Assistance in Jaipur",
    description:
      "Home, Business, Personal & Car Loans — expert guidance from enquiry to approval.",
    type: "website",
    locale: "en_IN",
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
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased text-ink bg-canvas`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
