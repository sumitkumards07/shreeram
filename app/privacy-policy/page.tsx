import { Metadata } from "next";
import NavigationMenuDemo from "@/components/NavigationMenuDemo";
import { Footer } from "@/components/Footer";
import { StickyMobileBar } from "@/components/StickyMobileBar";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Shree Ram Solution.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <NavigationMenuDemo />
      <main className="pb-16 md:pb-0 pt-8 lg:pt-16 max-w-3xl mx-auto px-4 mb-20">
        <h1 className="text-3xl font-bold text-ink mb-6">Privacy Policy</h1>
        <div className="text-muted space-y-4">
          <p>Effective Date: September 2026</p>
          <p>
            At {siteConfig.name}, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our loan consultancy services.
          </p>
          <h2 className="text-xl font-semibold text-ink mt-6">Information We Collect</h2>
          <p>We may collect personal information such as your name, contact number, email address, employment details, and financial information necessary for evaluating loan eligibility and processing applications.</p>
          <h2 className="text-xl font-semibold text-ink mt-6">How We Use Your Information</h2>
          <p>We use the collected information to assess your loan requirements, connect you with suitable banks and NBFCs, and facilitate the loan application process.</p>
          <h2 className="text-xl font-semibold text-ink mt-6">Information Sharing</h2>
          <p>We only share your information with our partner financial institutions for the sole purpose of loan processing, with your explicit consent.</p>
          <h2 className="text-xl font-semibold text-ink mt-6">Contact Us</h2>
          <p>If you have questions about this Privacy Policy, please contact us at {siteConfig.email} or call us at {siteConfig.phonePrimary}.</p>
        </div>
      </main>
      <Footer />
      <StickyMobileBar />
    </>
  );
}
