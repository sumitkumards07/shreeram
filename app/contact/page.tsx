import { Metadata } from "next";
import { Contact as ContactComponent } from "@/components/Contact";
import NavigationMenuDemo from "@/components/NavigationMenuDemo";
import { Footer } from "@/components/Footer";
import { StickyMobileBar } from "@/components/StickyMobileBar";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact Shree Ram Solution for loan consultancy in Jaipur.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <NavigationMenuDemo />
      <main className="pb-16 md:pb-0 pt-8 lg:pt-16">
        <ContactComponent />
      </main>
      <Footer />
      <StickyMobileBar />
    </>
  );
}
