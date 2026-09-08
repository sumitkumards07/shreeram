import { Button, Link } from "@heroui/react";
import { MessageCircle, Phone } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";

const navLinks = [
  { label: "Eligibility", href: "#eligibility" },
  { label: "Loan Types", href: "#loans" },
  { label: "EMI Calculator", href: "#emi-calculator" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

/**
 * Slim sticky header — brand on the left, anchor nav on desktop, call/WhatsApp
 * one tap from the top of the page.
 */
export function Header() {
  const whatsappHref = siteConfig.whatsapp(siteConfig.whatsappDefaultMessage);

  return (
    <header className="sticky top-0 z-50 shadow-sm bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        <a href="#hero" className="flex min-w-0 items-center gap-2.5">
          <span
            aria-hidden
            className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-[color:var(--color-primary)] text-sm font-bold text-white"
          >
            SR
          </span>
          <span className="min-w-0">
            <span className="block truncate text-sm font-semibold leading-tight text-[color:var(--color-ink)] sm:text-base">
              {siteConfig.name}
            </span>
            <span className="block truncate text-[11px] leading-tight text-[color:var(--color-ink-soft)]">
              {siteConfig.tagline}
            </span>
          </span>
        </a>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-6 text-sm font-medium lg:flex"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors duration-150 hover:text-primary text-[color:var(--color-ink-soft)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {/* Compact call button until there's room for the full number */}
          <Button
            as="a"
            href={siteConfig.phonePrimaryHref}
            size="sm"
            variant="solid"
            className="btn-3d px-2.5 sm:px-3"
          >
            <span className="tnum hidden sm:inline">
              {siteConfig.phonePrimary}
            </span>
          </Button>
          <Button
            as="a"
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            size="sm"
            color="secondary"
            startContent={<MessageCircle size={14} aria-hidden />}
            aria-label="Chat on WhatsApp"
            className="hidden sm:inline-flex"
          >
            WhatsApp
          </Button>
        </div>
      </div>
    </header>
  );
}
