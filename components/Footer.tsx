import { Link, Divider } from "@heroui/react";
import { siteConfig } from "@/lib/siteConfig";

const serviceLinks = [
  { label: "Home Loan", href: "/home-loan-jaipur" },
  { label: "Business Loan", href: "/business-loan-jaipur" },
  { label: "Personal Loan", href: "/personal-loan-jaipur" },
  { label: "Car Loan", href: "/car-loan-jaipur" },
];

const quickLinks = [
  { label: "Check Eligibility", href: "/loan-eligibility" },
  { label: "EMI Calculator", href: "/emi-calculator" },
  { label: "Contact Us", href: "/contact" },
  { label: "About Us", href: "/about" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Disclaimer", href: "/disclaimer" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-black/10 bg-slate-950 text-slate-300 overflow-hidden">
      {/* Decorative gradient blur */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-20 pointer-events-none blur-[100px] bg-gradient-to-b from-primary/60 to-transparent" aria-hidden="true" />
      
      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt={siteConfig.name}
                className="h-12 w-12 rounded-xl object-contain bg-white p-1.5 shadow-sm"
              />
              <p className="text-2xl font-bold text-white tracking-tight">{siteConfig.shortName}</p>
            </div>
            <p className="mt-6 text-sm leading-relaxed text-slate-400">
              Your trusted loan consultancy (DSA) in Jaipur. We simplify your borrowing experience for Home, Business, Personal, and Car loans.
            </p>
            {siteConfig.gstin && (
              <div className="mt-6 inline-flex items-center gap-2 rounded-lg bg-white/5 px-3 py-2 text-xs font-medium text-slate-300 border border-white/10">
                <span className="text-slate-500">GSTIN</span>
                <span className="tnum">{siteConfig.gstin}</span>
              </div>
            )}
          </div>

          {/* Services */}
          <nav aria-label="Services" className="lg:pl-8">
            <h3 className="text-base font-semibold text-white tracking-wide">Services</h3>
            <ul className="mt-6 space-y-3 text-sm">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group flex items-center transition-colors hover:text-primary text-slate-400"
                  >
                    <span className="mr-2 h-1 w-1 rounded-full bg-slate-700 transition-colors group-hover:bg-primary"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Quick links */}
          <nav aria-label="Quick links">
            <h3 className="text-base font-semibold text-white tracking-wide">Quick Links</h3>
            <ul className="mt-6 space-y-3 text-sm">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group flex items-center transition-colors hover:text-primary text-slate-400"
                  >
                    <span className="mr-2 h-1 w-1 rounded-full bg-slate-700 transition-colors group-hover:bg-primary"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h3 className="text-base font-semibold text-white tracking-wide">Contact Us</h3>
            <address className="mt-6 space-y-4 text-sm not-italic text-slate-400">
              <p className="leading-relaxed">
                {siteConfig.addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </p>
              <div className="pt-2 flex flex-col gap-2">
                <Link
                  href={siteConfig.phonePrimaryHref}
                  className="tnum font-medium text-white transition-colors hover:text-primary"
                >
                  {siteConfig.phonePrimary}
                </Link>
                <Link
                  href={`mailto:${siteConfig.email}`}
                  className="break-all transition-colors hover:text-white"
                >
                  {siteConfig.email}
                </Link>
              </div>
              <p className="pt-2 text-xs text-slate-500">
                {siteConfig.hoursDays}: {siteConfig.hoursTime} <br /> {siteConfig.closedDay} closed
              </p>
            </address>
          </div>
        </div>

        {/* Mandatory disclaimer */}
        <div className="mt-16 rounded-2xl bg-white/5 border border-white/10 p-5 sm:p-6 backdrop-blur-sm">
          <p className="text-xs leading-relaxed text-slate-400 text-justify sm:text-left">
            <strong className="text-slate-300 font-semibold mr-1">Disclaimer:</strong>
            {siteConfig.footerDisclaimer}
          </p>
        </div>

        <Divider className="mt-10 bg-white/10" />
        <div className="mt-8 flex flex-col gap-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
            <p>© {year} {siteConfig.name}. All rights reserved.</p>
            
            {/* Legal Links Desktop */}
            <div className="hidden sm:flex items-center gap-6">
              {legalLinks.map((link) => (
                <Link key={link.label} href={link.href} className="text-slate-500 hover:text-slate-300 transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
            
            {/* Legal Links Mobile */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 sm:hidden">
              {legalLinks.map((link) => (
                <Link key={link.label} href={link.href} className="text-slate-500 hover:text-slate-300 transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <p className="font-medium text-slate-400">{siteConfig.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
