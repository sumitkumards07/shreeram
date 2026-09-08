import { Card, CardBody } from "@heroui/react";
import { BadgeCheck, FileText, MessageCircle, SearchCheck } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";

const stepIcons = [MessageCircle, SearchCheck, FileText, BadgeCheck];

export function HowItWorks() {
  const { howItWorks } = siteConfig;

  return (
    <section
      id="how-it-works"
      className="bg-surface-soft py-14 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-[color:var(--color-ink)] sm:text-4xl">
          {howItWorks.heading}
        </h2>
        <p className="mt-3 max-w-2xl text-[color:var(--color-ink-soft)]">
          {howItWorks.sub}
        </p>

        <div className="relative mt-10">
          {/* Connector line behind the step circles (desktop only) */}
          <div
            aria-hidden
            className="absolute left-7 right-7 top-7 hidden h-px bg-[color:var(--color-line)] lg:block"
          />

          <ol className="relative grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {howItWorks.steps.map((step, i) => {
              const Icon = stepIcons[i];
              return (
                <Card as="li" key={step.title} shadow="md" radius="lg" className="p-2">
                  <CardBody className="flex flex-row gap-4 lg:flex-col lg:gap-0 overflow-visible">
                    <div
                      aria-hidden
                      className="grid h-14 w-14 shrink-0 place-items-center icon-3d"
                    >
                      <Icon size={22} />
                    </div>
                    <div className="lg:mt-5">
                      <p className="text-xs font-semibold uppercase tracking-wide text-secondary">
                        Step {i + 1}
                      </p>
                      <h3 className="mt-1 text-base font-semibold text-[color:var(--color-ink)]">
                        {step.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-[color:var(--color-ink-soft)]">
                        {step.description}
                      </p>
                    </div>
                  </CardBody>
                </Card>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
