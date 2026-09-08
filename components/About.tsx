import { Card, CardBody } from "@heroui/react";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";

export function About() {
  const { about } = siteConfig;

  return (
    <section id="about" className="py-14 sm:py-16 lg:py-20">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-[color:var(--color-ink)] sm:text-4xl">
            {about.heading}
          </h2>
          <div className="mt-5 space-y-4">
            {about.paragraphs.map((paragraph, i) => (
              <p
                key={i}
                className="leading-relaxed text-[color:var(--color-ink-soft)]"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <Card
          radius="lg"
          shadow="sm"
          className="h-fit shadow-md"
        >
          <CardBody className="gap-5 p-5 sm:p-6">
            <h3 className="text-base font-semibold text-[color:var(--color-ink)]">
              Visit our office
            </h3>

            <div className="flex gap-3">
              <MapPin
                size={18}
                aria-hidden
                className="mt-0.5 shrink-0 text-secondary"
              />
              <p className="text-sm leading-relaxed text-[color:var(--color-ink-soft)]">
                {siteConfig.addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </p>
            </div>

            <div className="flex gap-3">
              <Clock
                size={18}
                aria-hidden
                className="mt-0.5 shrink-0 text-secondary"
              />
              <p className="text-sm text-[color:var(--color-ink-soft)]">
                <span className="block">
                  {siteConfig.hoursDays}: {siteConfig.hoursTime}
                </span>
                <span className="block">Sunday: Closed</span>
              </p>
            </div>

            <div className="flex gap-3">
              <Phone
                size={18}
                aria-hidden
                className="mt-0.5 shrink-0 text-secondary"
              />
              <p className="text-sm">
                <a
                  href={siteConfig.phonePrimaryHref}
                  className="tnum block text-[color:var(--color-ink)] transition-colors hover:text-primary"
                >
                  {siteConfig.phonePrimary}
                </a>
                <a
                  href={siteConfig.phoneSecondaryHref}
                  className="tnum block text-[color:var(--color-ink)] transition-colors hover:text-primary"
                >
                  {siteConfig.phoneSecondary}
                </a>
              </p>
            </div>

            <div className="flex gap-3">
              <Mail
                size={18}
                aria-hidden
                className="mt-0.5 shrink-0 text-secondary"
              />
              <a
                href={`mailto:${siteConfig.email}`}
                className="break-all text-sm text-[color:var(--color-ink)] transition-colors hover:text-primary"
              >
                {siteConfig.email}
              </a>
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}
