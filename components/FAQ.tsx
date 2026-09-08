"use client";

import { Accordion, AccordionItem } from "@heroui/react";
import { siteConfig } from "@/lib/siteConfig";

export function FAQ() {
  return (
    <section
      id="faq"
      className="bg-surface-soft py-14 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-[color:var(--color-ink)] sm:text-4xl">
          Frequently asked questions
        </h2>
        <p className="mt-3 text-[color:var(--color-ink-soft)]">
          Still unsure about something? Call or WhatsApp us — we answer plainly.
        </p>

        <Accordion
          selectionMode="multiple"
          variant="splitted"
          className="mt-8 gap-3 px-0"
          itemClasses={{
            base: "shadow-sm rounded-xl px-5",
            title: "text-sm sm:text-base font-medium text-[color:var(--color-ink)]",
            content: "text-sm leading-relaxed text-[color:var(--color-ink-soft)]",
          }}
        >
          {siteConfig.faqs.map((faq, i) => (
            <AccordionItem
              key={`faq-${i}`}
              aria-label={faq.q}
              title={faq.q}
              textValue={faq.q}
            >
              {faq.a}
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
