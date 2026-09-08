import { Button, Card, CardBody } from "@heroui/react";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";

export function Contact() {
  const whatsappHref = siteConfig.whatsapp(siteConfig.whatsappDefaultMessage);

  return (
    <section
      id="contact"
      className="bg-surface-soft py-14 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-[color:var(--color-ink)] sm:text-4xl">
          Contact us
        </h2>
        <p className="mt-3 max-w-2xl text-[color:var(--color-ink-soft)]">
          Walk in, call, or message — whichever is easiest for you.
        </p>

        <div className="mt-8 grid gap-6 lg:grid-cols-2 lg:gap-8">
          <Card
            radius="lg"
            shadow="sm"
            className="shadow-md"
          >
            <CardBody className="gap-6 p-5 sm:p-8">
              <div className="flex gap-4">
                <MapPin
                  size={20}
                  aria-hidden
                  className="mt-0.5 shrink-0 text-secondary"
                />
                <div>
                  <h3 className="text-sm font-semibold text-[color:var(--color-ink)]">
                    Address
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-[color:var(--color-ink-soft)]">
                    {siteConfig.addressLines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone
                  size={20}
                  aria-hidden
                  className="mt-0.5 shrink-0 text-secondary"
                />
                <div>
                  <h3 className="text-sm font-semibold text-[color:var(--color-ink)]">
                    Phone
                  </h3>
                  <p className="mt-1 text-sm">
                    <a
                      href={siteConfig.phonePrimaryHref}
                      className="tnum block text-[color:var(--color-ink-soft)] transition-colors hover:text-primary"
                    >
                      {siteConfig.phonePrimary}
                    </a>
                    <a
                      href={siteConfig.phoneSecondaryHref}
                      className="tnum block text-[color:var(--color-ink-soft)] transition-colors hover:text-primary"
                    >
                      {siteConfig.phoneSecondary}
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Mail
                  size={20}
                  aria-hidden
                  className="mt-0.5 shrink-0 text-secondary"
                />
                <div>
                  <h3 className="text-sm font-semibold text-[color:var(--color-ink)]">
                    Email
                  </h3>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="mt-1 block break-all text-sm text-[color:var(--color-ink-soft)] transition-colors hover:text-primary"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <Clock
                  size={20}
                  aria-hidden
                  className="mt-0.5 shrink-0 text-secondary"
                />
                <div>
                  <h3 className="text-sm font-semibold text-[color:var(--color-ink)]">
                    Working hours
                  </h3>
                  <p className="mt-1 text-sm text-[color:var(--color-ink-soft)]">
                    <span className="block">
                      {siteConfig.hoursDays}: {siteConfig.hoursTime}
                    </span>
                    <span className="block">{siteConfig.closedDay}: Closed</span>
                  </p>
                </div>
              </div>

              <Button
                as="a"
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                color="secondary"
                size="lg"
                startContent={<MessageCircle size={20} aria-hidden />}
                className="w-full sm:w-auto"
              >
                Chat on WhatsApp
              </Button>
            </CardBody>
          </Card>

          <iframe
            title="Shree Ram Solution office location on Google Maps"
            src={`https://www.google.com/maps?q=${encodeURIComponent(
              siteConfig.addressSingleLine,
            )}&output=embed`}
            className="h-80 w-full rounded-2xl shadow-md lg:h-auto lg:min-h-[380px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
