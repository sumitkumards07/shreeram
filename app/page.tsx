import NavigationMenuDemo from "@/components/NavigationMenuDemo";
import { Hero } from "@/components/Hero";
import { EligibilityChecker } from "@/components/EligibilityChecker";
import { LoanCards } from "@/components/LoanCards";
import { EMICalculator } from "@/components/EMICalculator";
import { HowItWorks } from "@/components/HowItWorks";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Testimonials } from "@/components/Testimonials";
import { LeadForm } from "@/components/LeadForm";
import { FAQ } from "@/components/FAQ";
import { LenderCredibility } from "@/components/LenderCredibility";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { StickyMobileBar } from "@/components/StickyMobileBar";

export default function Home() {
  return (
    <>
      <NavigationMenuDemo />
      {/* pb-16 on mobile keeps content clear of the sticky bottom bar */}
      <main className="pb-16 md:pb-0">
        <Hero />
        <LoanCards />
        <EligibilityChecker />
        <WhyChooseUs />
        <EMICalculator />
        <HowItWorks />
        <LenderCredibility />
        <Testimonials />
        <FAQ />
        <LeadForm />
        <Contact />
      </main>
      <Footer />
      <StickyMobileBar />
    </>
  );
}
