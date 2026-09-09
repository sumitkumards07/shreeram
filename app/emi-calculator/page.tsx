import { Metadata } from "next";
import { EMICalculator } from "@/components/EMICalculator";
import NavigationMenuDemo from "@/components/NavigationMenuDemo";
import { Footer } from "@/components/Footer";
import { StickyMobileBar } from "@/components/StickyMobileBar";

export const metadata: Metadata = {
  title: "Loan EMI Calculator",
  description: "Calculate your estimated monthly EMI for Home, Business, Personal, and Car loans in Jaipur.",
  alternates: { canonical: "/emi-calculator" },
};

export default function EMICalculatorPage() {
  return (
    <>
      <NavigationMenuDemo />
      <main className="pb-16 md:pb-0 pt-8 lg:pt-16 bg-surface-soft min-h-screen">
        <section className="px-4 pb-12 sm:px-6 lg:px-8 max-w-[1200px] mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-normal text-ink mb-6 tracking-tight">
            Loan EMI Calculator
          </h1>
          <p className="text-lg text-muted max-w-3xl mx-auto mb-12 leading-relaxed">
            Use our EMI calculator to estimate your monthly installments based on loan amount, interest rate, and tenure.
          </p>
        </section>
        <EMICalculator />
      </main>
      <Footer />
      <StickyMobileBar />
    </>
  );
}
