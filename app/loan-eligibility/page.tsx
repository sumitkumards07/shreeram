import { Metadata } from "next";
import { EligibilityChecker } from "@/components/EligibilityChecker";
import NavigationMenuDemo from "@/components/NavigationMenuDemo";
import { Footer } from "@/components/Footer";
import { StickyMobileBar } from "@/components/StickyMobileBar";

export const metadata: Metadata = {
  title: "Check Loan Eligibility",
  description: "Check your eligibility for Home, Business, Personal, and Car loans in 60 seconds.",
  alternates: { canonical: "/loan-eligibility" },
};

export default function LoanEligibilityPage() {
  return (
    <>
      <NavigationMenuDemo />
      <main className="pb-16 md:pb-0 pt-8 lg:pt-16 bg-surface-soft min-h-screen">
        <EligibilityChecker />
      </main>
      <Footer />
      <StickyMobileBar />
    </>
  );
}
