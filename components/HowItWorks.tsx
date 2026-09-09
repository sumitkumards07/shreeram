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

          <div
            aria-hidden
            className="absolute left-[38px] top-7 bottom-7 w-px bg-[color:var(--color-line)] lg:hidden z-0"
          />

          <ol className="relative z-10 grid gap-10 sm:grid-cols-1 lg:grid-cols-4 lg:gap-8">
            {howItWorks.steps.map((step, i) => {
              const Icon = stepIcons[i];
              const timeframes = ["Same day", "1–2 days", "2–3 days", "3–7 days"];
              return (
                <li key={step.title} className="relative flex lg:flex-col gap-6 lg:gap-0">
                  <div
                    aria-hidden
                    className="grid h-[56px] w-[56px] shrink-0 place-items-center rounded-full bg-surface-card border-4 border-surface-soft text-primary shadow-sm z-10 relative"
                  >
                    <Icon size={24} />
                  </div>
                  <div className="pt-2 lg:pt-6 lg:mt-2 lg:px-2 flex-1">
                    <div className="flex items-center gap-3 lg:flex-col lg:items-start lg:gap-1">
                      <p className="text-[40px] font-display text-black/10 leading-none">
                        0{i + 1}
                      </p>
                      <h3 className="text-lg font-bold text-ink uppercase tracking-wider">
                        {step.title}
                      </h3>
                    </div>
                    <p className="mt-1 text-sm font-semibold text-secondary">
                      {timeframes[i]}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {step.description}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
