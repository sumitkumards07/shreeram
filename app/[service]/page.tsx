import { Metadata } from "next";
import { notFound } from "next/navigation";
import { siteConfig } from "@/lib/siteConfig";
import { EMICalculator } from "@/components/EMICalculator";
import { LeadForm } from "@/components/LeadForm";
import { FAQ } from "@/components/FAQ";
import { EligibilityChecker } from "@/components/EligibilityChecker";
import { CheckCircle2 } from "lucide-react";
import NavigationMenuDemo from "@/components/NavigationMenuDemo";
import { Footer } from "@/components/Footer";
import { StickyMobileBar } from "@/components/StickyMobileBar";

export const dynamicParams = false;

export function generateStaticParams() {
  return siteConfig.loans.map((loan) => ({
    service: `${loan.id}-loan-jaipur`,
  }));
}

export function generateMetadata({ params }: { params: { service: string } }): Metadata {
  const loanId = params.service.replace("-loan-jaipur", "");
  const loan = siteConfig.loans.find((l) => l.id === loanId);
  if (!loan || !loan.seo) return {};

  return {
    title: loan.seo.h1,
    description: loan.seo.intro,
    alternates: {
      canonical: `/${params.service}`,
    },
    openGraph: {
      title: `${loan.seo.h1} | Shree Ram Solution`,
      description: loan.seo.intro,
      url: `${siteConfig.url}/${params.service}`,
      type: "article",
    },
  };
}

export default function ServicePage({ params }: { params: { service: string } }) {
  const loanId = params.service.replace("-loan-jaipur", "");
  const loan = siteConfig.loans.find((l) => l.id === loanId);
  if (!loan || !loan.seo) return notFound();

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: loan.seo.h1,
    provider: {
      "@type": "LocalBusiness",
      name: siteConfig.name,
      image: `${siteConfig.url}/icon.jpeg`,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Shop No. 2, B-1, Govind Nagar, Marbal Mandi Chouraha, Near Aryan Restaurant, Kalwar Road",
        addressLocality: "Jaipur",
        addressRegion: "Rajasthan",
        addressCountry: "IN"
      },
      telephone: siteConfig.phonePrimary
    },
    areaServed: {
      "@type": "City",
      name: "Jaipur"
    },
    description: loan.seo.intro,
  };

  return (
    <>
      <NavigationMenuDemo />
      <main className="pb-16 md:pb-0 pt-8 lg:pt-16">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
        <section className="bg-background px-4 pb-12 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-normal text-ink mb-6 tracking-tight">
            {loan.seo.h1}
          </h1>
          <p className="text-lg text-muted max-w-3xl mb-12 leading-relaxed">
            {loan.seo.intro}
          </p>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-surface-soft p-6 sm:p-8 rounded-2xl border border-black/5">
              <h2 className="text-xl sm:text-2xl font-bold text-ink mb-5">{loan.title} Eligibility</h2>
              <ul className="space-y-4">
                {loan.seo.eligibility.map((item, i) => (
                  <li key={i} className="flex gap-3 text-muted">
                    <CheckCircle2 className="text-primary shrink-0 mt-0.5" size={20} />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-surface-soft p-6 sm:p-8 rounded-2xl border border-black/5">
              <h2 className="text-xl sm:text-2xl font-bold text-ink mb-5">Documents Required</h2>
              <ul className="space-y-4">
                {loan.seo.documents.map((item, i) => (
                  <li key={i} className="flex gap-3 text-muted">
                    <CheckCircle2 className="text-primary shrink-0 mt-0.5" size={20} />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <EligibilityChecker />
        <EMICalculator />
        <FAQ />
        <LeadForm />
      </main>
      <Footer />
      <StickyMobileBar />
    </>
  );
}
