import { Metadata } from "next";
import NavigationMenuDemo from "@/components/NavigationMenuDemo";
import { Footer } from "@/components/Footer";
import { StickyMobileBar } from "@/components/StickyMobileBar";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: "Terms and Conditions for using Shree Ram Solution services.",
  alternates: { canonical: "/terms-and-conditions" },
};

export default function TermsAndConditionsPage() {
  return (
    <>
      <NavigationMenuDemo />
      <main className="pb-16 md:pb-0 pt-8 lg:pt-16 max-w-3xl mx-auto px-4 mb-20">
        <h1 className="text-3xl font-bold text-ink mb-6">Terms and Conditions</h1>
        <div className="text-muted space-y-4">
          <p>Effective Date: September 2026</p>
          <p>
            Welcome to {siteConfig.name}. By accessing our website or using our services, you agree to be bound by these Terms and Conditions.
          </p>
          <h2 className="text-xl font-semibold text-ink mt-6">Services Offered</h2>
          <p>We provide loan consultancy services to assist you in securing loans from banks and NBFCs. We act as an intermediary (DSA) and do not disburse loans ourselves.</p>
          <h2 className="text-xl font-semibold text-ink mt-6">User Responsibilities</h2>
          <p>You agree to provide accurate and complete information during the application process. Any falsified documents or information may result in immediate rejection of your application by the lender.</p>
          <h2 className="text-xl font-semibold text-ink mt-6">Limitation of Liability</h2>
          <p>{siteConfig.name} is not responsible for the final decision of the lender, the interest rates offered, or any delays in the loan processing.</p>
        </div>
      </main>
      <Footer />
      <StickyMobileBar />
    </>
  );
}
