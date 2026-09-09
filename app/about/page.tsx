import { Metadata } from "next";
import { About as AboutComponent } from "@/components/About";
import NavigationMenuDemo from "@/components/NavigationMenuDemo";
import { Footer } from "@/components/Footer";
import { StickyMobileBar } from "@/components/StickyMobileBar";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn more about Shree Ram Solution, your trusted DSA and loan consultant in Jaipur.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <NavigationMenuDemo />
      <main className="pb-16 md:pb-0 pt-8 lg:pt-16">
        <AboutComponent />
      </main>
      <Footer />
      <StickyMobileBar />
    </>
  );
}
