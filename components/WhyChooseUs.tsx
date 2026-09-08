import { Card, CardBody } from "@heroui/react";
import { FileCheck2, Headphones, Route, UserRoundCheck } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";

const itemIcons = [Route, FileCheck2, UserRoundCheck, Headphones];

export function WhyChooseUs() {
  const { whyChooseUs } = siteConfig;

  return (
    <section id="why-us" className="py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-[color:var(--color-ink)] sm:text-4xl">
          {whyChooseUs.heading}
        </h2>
        <p className="mt-3 max-w-2xl text-[color:var(--color-ink-soft)]">
          {whyChooseUs.sub}
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseUs.items.map((item, i) => {
            const Icon = itemIcons[i];
            return (
              <Card
                key={item.title}
                radius="lg"
                shadow="sm"
                className="shadow-md"
              >
                <CardBody className="gap-3 p-5">
                  <span
                    aria-hidden
                    className="grid h-10 w-10 place-items-center rounded-lg bg-[#00A896]/10 text-secondary"
                  >
                    <Icon size={20} />
                  </span>
                  <h3 className="text-base font-semibold text-[color:var(--color-ink)]">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[color:var(--color-ink-soft)]">
                    {item.description}
                  </p>
                </CardBody>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
