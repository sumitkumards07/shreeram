import { Button } from "@heroui/react";
import { MessageCircle, Phone } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const navLinks = [
  { label: "Home Loans", href: "/home-loan-jaipur" },
  { label: "Business Loans", href: "/business-loan-jaipur" },
  { label: "Personal Loans", href: "/personal-loan-jaipur" },
  { label: "Car Loans", href: "/car-loan-jaipur" },
  { label: "EMI Calculator", href: "/emi-calculator" },
  { label: "Contact", href: "/contact" },
];

export default function NavigationMenuDemo() {
  const whatsappHref = siteConfig.whatsapp(siteConfig.whatsappDefaultMessage);

  return (
    <header className="sticky top-0 z-50 shadow-sm bg-canvas/90 backdrop-blur px-4 md:px-6">
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between gap-8">
        {/* Left side */}
        <div className="flex items-center gap-6">
          {/* Mobile menu trigger with animation */}
          <Popover>
            <PopoverTrigger asChild>
              <Button
                className="group md:hidden px-2 min-w-0 bg-transparent text-foreground"
                variant="light"
                size="sm"
                isIconOnly
              >
                <svg
                  className="pointer-events-none"
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 12L20 12"
                    className="origin-center -translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
                  />
                  <path
                    d="M4 12H20"
                    className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
                  />
                  <path
                    d="M4 12H20"
                    className="origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
                  />
                </svg>
              </Button>
            </PopoverTrigger>
            <PopoverContent align="start" className="w-48 p-1 md:hidden">
              <NavigationMenu className="max-w-none *:w-full">
                <NavigationMenuList className="flex-col items-start gap-0 md:gap-2">
                  {navLinks.map((link) => (
                    <NavigationMenuItem key={link.href} className="w-full">
                      <NavigationMenuLink
                        href={link.href}
                        className="py-2 px-3 block hover:bg-accent rounded text-sm w-full text-left transition-colors"
                      >
                        {link.label}
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </PopoverContent>
          </Popover>

          {/* Logo */}
          <a href="#hero" className="flex min-w-0 items-center gap-2.5">
            <img
              src="/logo.jpeg"
              alt={siteConfig.name}
              className="h-10 w-10 shrink-0 object-contain rounded-md"
            />
            <span className="min-w-0">
              <span className="block truncate text-sm font-semibold leading-tight text-ink sm:text-base">
                {siteConfig.name}
              </span>
              <span className="block truncate text-[11px] leading-tight text-muted-soft hidden sm:block">
                {siteConfig.tagline}
              </span>
            </span>
          </a>

          {/* Desktop Navigation menu with hover effects */}
          <NavigationMenu className="max-md:hidden ml-4">
            <NavigationMenuList className="gap-2">
              {navLinks.map((link) => (
                <NavigationMenuItem key={link.href}>
                  <NavigationMenuLink
                    href={link.href}
                    className="text-ink hover:text-primary py-2 px-3 rounded font-medium transition-colors hover:bg-surface-soft text-[14px]"
                  >
                    {link.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Right side Actions */}
        <div className="flex items-center gap-2">
          {/* Compact call button until there's room for the full number */}
          <Button
            as="a"
            href={siteConfig.phonePrimaryHref}
            size="sm"
            variant="solid"
            className="btn-3d px-2.5 sm:px-3 font-semibold text-ink"
            aria-label={`Call ${siteConfig.phonePrimary}`}
          >
            <span className="tnum font-mono hidden sm:inline">
              {siteConfig.phonePrimary}
            </span>
          </Button>
          <Button
            as="a"
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            size="sm"
            startContent={<MessageCircle size={14} aria-hidden />}
            aria-label="Chat on WhatsApp"
            className="hidden sm:inline-flex btn-3d px-4"
          >
            WhatsApp
          </Button>
        </div>
      </div>
    </header>
  );
}
