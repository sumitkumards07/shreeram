"use client";

import { useRef } from "react";
import { Avatar, Button, Card, CardBody } from "@heroui/react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";

// NOTE: entries come from siteConfig.testimonials and are SAMPLE placeholders —
// replace them with real, consented client feedback before launch.

function Star({ filled }: { filled: boolean }) {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
      aria-hidden
      className={filled ? "text-amber-500" : "text-[color:var(--color-line)]"}
    >
      <path d="M12 2.5l2.95 5.98 6.6.96-4.77 4.65 1.12 6.57L12 17.55l-5.9 3.1 1.13-6.56L2.46 9.44l6.6-.96L12 2.5z" />
    </svg>
  );
}

export function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>(".srs-tcard");
    const width = card ? card.offsetWidth + 16 : 340;
    track.scrollBy({ left: direction * width, behavior: "smooth" });
  };

  return (
    <section
      id="testimonials"
      className="bg-surface-soft py-14 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-[color:var(--color-ink)] sm:text-4xl">
              What customers say
            </h2>
            <p className="mt-3 max-w-2xl text-[color:var(--color-ink-soft)]">
              Feedback from people we've assisted with their loan applications.
            </p>
          </div>
          <div className="hidden gap-2 md:flex">
            <Button
              isIconOnly
              size="sm"
              variant="shadow"
              aria-label="Previous testimonials"
              onPress={() => scrollByCard(-1)}
            >
              <ChevronLeft size={16} aria-hidden />
            </Button>
            <Button
              isIconOnly
              size="sm"
              variant="shadow"
              aria-label="Next testimonials"
              onPress={() => scrollByCard(1)}
            >
              <ChevronRight size={16} aria-hidden />
            </Button>
          </div>
        </div>

        <div
          ref={trackRef}
          className="mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {siteConfig.testimonials.map((t, i) => (
            <Card
              key={`${t.name}-${i}`}
              radius="lg"
              shadow="sm"
              className="srs-tcard min-w-[85%] snap-start shadow-md rounded-xl sm:min-w-[46%] lg:min-w-[31.5%]"
            >
              <CardBody className="gap-4 p-5 sm:p-6">
                <div className="flex items-center justify-between">
                  <div
                    className="flex gap-0.5"
                    role="img"
                    aria-label={`${t.rating} out of 5 stars`}
                  >
                    {[1, 2, 3, 4, 5].map((n) => (
                      <Star key={n} filled={n <= t.rating} />
                    ))}
                  </div>
                  <Quote size={18} aria-hidden className="text-[color:var(--color-line)]" />
                </div>

                <blockquote className="text-sm leading-relaxed text-[color:var(--color-ink)]">
                  “{t.quote}”
                </blockquote>

                <div className="mt-auto flex items-center gap-3 pt-4">
                  <Avatar
                    name={t.name}
                    size="sm"
                    className={i % 2 === 0 ? "bg-primary" : "bg-secondary"}
                  />
                  <div>
                    <p className="text-sm font-semibold text-[color:var(--color-ink)]">
                      {t.name}
                    </p>
                    <p className="text-xs text-[color:var(--color-ink-soft)]">{t.city}</p>
                  </div>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>

        {/* Mobile hint — cards swipe horizontally */}
        <p className="mt-1 text-xs text-[color:var(--color-ink-soft)] md:hidden">
          Swipe to read more →
        </p>
      </div>
    </section>
  );
}
