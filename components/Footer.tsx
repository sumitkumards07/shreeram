import { Link, Divider } from "@heroui/react";
import { siteConfig } from "@/lib/siteConfig";

const serviceLinks = [
  { label: "Home Loan", href: "#loans" },
  { label: "Business Loan", href: "#loans" },
  { label: "Personal Loan", href: "#loans" },
  { label: "Car Loan", href: "#loans" },
];

const quickLinks = [
  { label: "Check Eligibility", href: "#eligibility" },
  { label: "EMI Calculator", href: "#emi-calculator" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Request a Callback", href: "#apply" },
  { label: "FAQ", href: "#faq" },
  { label: "About Us", href: "#about" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[color:var(--color-primary-deep)] text-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5">
              <span
                aria-hidden
                className="grid h-9 w-9 place-items-center rounded-lg bg-background/10 text-sm font-bold"
              >
                SR
              </span>
              <p className="text-base font-semibold">{siteConfig.name}</p>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              Loan consultancy (DSA) on Kalwar Road, Jaipur — assisting with Home,
              Business, Personal, and Car loan applications.
            </p>
            {/* GSTIN renders only once the value is filled in siteConfig */}
            {siteConfig.gstin && (
              <p className="tnum mt-4 text-xs text-white/60">
                GSTIN: {siteConfig.gstin}
              </p>
            )}
          </div>

          {/* Only render if genuinely partnered — confirm before enabling */}
          {/*
          {siteConfig.partnerLenders && (
            <div>
              <h3 className="text-sm font-semibold">Partner lenders</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {siteConfig.partnerLenders.map((lender) => (
                  <span key={lender} className="rounded-md bg-background/10 px-3 py-1.5 text-xs">
                    {lender}
                  </span>
                ))}
              </div>
            </div>
          )}
          */}

          {/* Services */}
          <nav aria-label="Services">
            <h3 className="text-sm font-semibold">Services</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-white/70">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="transition-colors duration-150 hover:text-white text-white/70"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Quick links */}
          <nav aria-label="Quick links">
            <h3 className="text-sm font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-white/70">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="transition-colors duration-150 hover:text-white text-white/70"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold">Contact</h3>
            <address className="mt-4 space-y-2.5 text-sm not-italic text-white/70">
              <p className="leading-relaxed">
                {siteConfig.addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </p>
              <p>
                <Link
                  href={siteConfig.phonePrimaryHref}
                  className="tnum transition-colors hover:text-white text-white/70"
                >
                  {siteConfig.phonePrimary}
                </Link>
                {" · "}
                <Link
                  href={siteConfig.phoneSecondaryHref}
                  className="tnum transition-colors hover:text-white text-white/70"
                >
                  {siteConfig.phoneSecondary}
                </Link>
              </p>
              <p>
                <Link
                  href={`mailto:${siteConfig.email}`}
                  className="break-all transition-colors hover:text-white text-white/70"
                >
                  {siteConfig.email}
                </Link>
              </p>
              <p>
                {siteConfig.hoursDays}: {siteConfig.hoursTime} · {siteConfig.closedDay} closed
              </p>
            </address>
          </div>
        </div>

        {/* Mandatory disclaimer — exact text from the brief, do not edit */}
        <div className="mt-10 rounded-xl shadow-md p-4">
          <p className="text-xs leading-relaxed text-white/70">
            {siteConfig.footerDisclaimer}
          </p>
        </div>

        <Divider className="mt-8 bg-background/10" />
        <div className="mt-6 flex flex-col gap-2 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <p>{siteConfig.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
