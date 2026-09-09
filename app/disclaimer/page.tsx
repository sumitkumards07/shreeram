import { Metadata } from "next";
import NavigationMenuDemo from "@/components/NavigationMenuDemo";
import { Footer } from "@/components/Footer";
import { StickyMobileBar } from "@/components/StickyMobileBar";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: "Legal and financial disclaimer for Shree Ram Solution.",
  alternates: { canonical: "/disclaimer" },
};

export default function DisclaimerPage() {
  return (
    <>
      <NavigationMenuDemo />
      <main className="pb-16 md:pb-0 pt-8 lg:pt-16 max-w-3xl mx-auto px-4 mb-20">
        <h1 className="text-3xl font-bold text-ink mb-6">Disclaimer</h1>
        <div className="text-muted space-y-4">
          <p>
            {siteConfig.name} operates as a Direct Selling Agent (DSA) and loan consultancy based in Jaipur. We are not a bank, NBFC, or direct lender.
          </p>
          <h2 className="text-xl font-semibold text-ink mt-6">Loan Approval</h2>
          <p>Final loan approval, interest rate, loan amount, and terms are determined exclusively by the respective lender based on their eligibility criteria and credit policies. {siteConfig.name} does not guarantee loan approval or specific interest rates.</p>
          <h2 className="text-xl font-semibold text-ink mt-6">Calculators</h2>
          <p>The EMI and eligibility calculators provided on this website are for indicative and estimation purposes only. Actual figures will vary based on the lender's final offer and processing fees.</p>
        </div>
      </main>
      <Footer />
      <StickyMobileBar />
    </>
  );
}
