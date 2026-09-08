"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Button, Card, CardBody, Chip, Slider } from "@heroui/react";
import { animate, motion, useInView, useMotionValue, useReducedMotion, useTransform } from "framer-motion";
import { ArrowDown, Calculator, MessageCircle, Phone } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";
import { calculateEmi, formatINR, formatINRShort } from "@/lib/emiMath";
import { openEligibility, scrollToId } from "@/lib/events";

/**
 * Animated count-up stat. One shared IntersectionObserver on the strip
 * container drives all three values (per-element observers proved flaky);
 * motion values render outside React state so the digits never stick.
 * If the observer hasn't fired within 3s of mount, the real number is
 * shown unanimated — the stat must never render a wrong value.
 */
function StatValue({
  value,
  suffix,
  start,
}: {
  value: number;
  suffix: string;
  start: boolean;
}) {
  const prefersReducedMotion = useReducedMotion();
  const mv = useMotionValue(0);
  const text = useTransform(mv, (v) => `${Math.round(v)}${suffix}`);

  useEffect(() => {
    if (!start) return;
    if (prefersReducedMotion) {
      mv.set(value);
      return;
    }
    const controls = animate(mv, value, {
      duration: 1.4,
      ease: [0.22, 1, 0.36, 1],
    });
    return () => controls.stop();
  }, [start, prefersReducedMotion, value, mv]);

  return <motion.span className="tnum font-mono">{text}</motion.span>;
}

/** Compact EMI widget — the 3-second interaction hook from the brief. */
function EmiMiniWidget() {
  const { emi } = siteConfig;
  const [amount, setAmount] = useState(emi.defaultAmount);
  const [tenureYears, setTenure] = useState(emi.defaultTenureYears);

  const result = useMemo(
    () => calculateEmi(amount, emi.defaultRate, tenureYears),
    [amount, tenureYears, emi.defaultRate],
  );

  return (
    <div className="relative">
      {/* Decorative stacked card underneath mimicking Coinbase floating product mockups */}
      <div className="absolute inset-0 translate-x-2 translate-y-3 rounded-xl bg-surface-dark-elevated/50 shadow-md" aria-hidden="true" />
      
      <Card
        radius="lg"
        shadow="none"
        className="relative shadow-lg bg-surface-dark-elevated text-on-dark"
      >
        <CardBody className="gap-5 p-8">
          <div className="flex items-center justify-between gap-3">
            <p className="text-lg font-semibold text-on-dark">
              Quick EMI estimate
            </p>
            <Chip size="sm" variant="flat" color="primary" radius="full">
              Live
            </Chip>
          </div>

          <div>
            <div className="mb-1 flex items-baseline justify-between gap-2">
              <span className="text-sm font-medium text-on-dark-soft">
                Loan amount
              </span>
              <span className="tnum font-mono text-sm font-medium text-on-dark">
                {formatINRShort(amount)}
              </span>
            </div>
            <Slider
              aria-label="Loan amount"
              size="sm"
              color="primary"
              minValue={emi.minAmount}
              maxValue={emi.maxAmount}
              step={emi.amountStep}
              value={amount}
              onChange={(v) => setAmount(Array.isArray(v) ? v[0] : v)}
              classNames={{
                track: "bg-surface-dark",
                thumb: "w-5 h-5 bg-primary"
              }}
            />
          </div>

          <div>
            <div className="mb-1 flex items-baseline justify-between gap-2">
              <span className="text-sm font-medium text-on-dark-soft">
                Tenure
              </span>
              <span className="tnum font-mono text-sm font-medium text-on-dark">
                {tenureYears} yrs
              </span>
            </div>
            <Slider
              aria-label="Loan tenure"
              size="sm"
              color="primary"
              minValue={emi.minTenure}
              maxValue={20}
              step={1}
              value={tenureYears}
              onChange={(v) => setTenure(Array.isArray(v) ? v[0] : v)}
              classNames={{
                track: "bg-surface-dark",
                thumb: "w-5 h-5 bg-primary"
              }}
            />
          </div>

          <div>
            <p className="text-xs text-on-dark-soft">
              at an indicative {emi.defaultRate.toFixed(1)}% p.a. reducing balance
            </p>
            <div className="mt-3 flex flex-wrap items-baseline justify-between gap-2">
              <p className="text-sm font-medium text-on-dark-soft">
                Estimated monthly EMI
              </p>
              <p className="tnum font-mono text-3xl font-medium text-primary">
                {formatINR(result.emi)}
              </p>
            </div>
            <p className="mt-1 text-xs text-on-dark-soft">
              *{siteConfig.complianceCaption}
            </p>
          </div>

          <Button
            variant="light"
            size="sm"
            radius="full"
            className="w-fit px-2 text-primary"
            endContent={<ArrowDown size={16} aria-hidden />}
            onPress={() => scrollToId("emi-calculator")}
          >
            See full calculator
          </Button>
        </CardBody>
      </Card>
    </div>
  );
}

export function Hero() {
  const { hero } = siteConfig;
  const whatsappHref = siteConfig.whatsapp(siteConfig.whatsappDefaultMessage);

  // One observer for the whole trust strip; fallback timer guarantees the
  // stats show their real values even if the observer never fires.
  const stripRef = useRef<HTMLDivElement>(null);
  const stripInView = useInView(stripRef, { once: true, amount: 0.4 });
  const [forceStats, setForceStats] = useState(false);
  useEffect(() => {
    if (stripInView) return;
    const timer = setTimeout(() => setForceStats(true), 3000);
    return () => clearTimeout(timer);
  }, [stripInView]);
  const statsStarted = stripInView || forceStats;

  return (
    <section id="hero" className="relative overflow-hidden bg-surface-dark text-on-dark">
      {/* Editorial full-bleed dark hero styling */}
      
      <div className="relative mx-auto max-w-[1200px] px-4 pb-20 pt-24 sm:px-6 sm:pt-32 lg:px-8 lg:pb-32">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
          {/* ── Left: message, trust, CTAs ─────────────────────────────── */}
          <div>
            <h1 className="text-balance mt-4 text-[44px] sm:text-[64px] lg:text-[80px] font-display font-normal tracking-[-2px] leading-[1.0] text-on-dark">
              {hero.headline}
            </h1>

            <p className="mt-6 max-w-xl text-base text-on-dark-soft sm:text-lg">
              {hero.subheadline}
            </p>

            {/* Trust strip — count-up on scroll into view. */}
            <div
              ref={stripRef}
              className="mt-10 flex flex-wrap gap-x-8 gap-y-6 sm:gap-x-0 sm:divide-x sm:divide-white/10"
            >
              {hero.stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={i === 0 ? "pr-0 sm:pr-8" : "pr-0 sm:px-8"}
                >
                  <p className="text-[36px] font-normal leading-[1.11] text-on-dark tracking-tight">
                    <StatValue
                      value={stat.value}
                      suffix={stat.suffix}
                      start={statsStarted}
                    />
                  </p>
                  <p className="mt-1 text-sm text-on-dark-soft font-medium">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Primary CTA row — stacked on mobile, inline from sm up */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <Button
                size="lg"
                className="btn-3d px-8 h-14 text-base"
                startContent={<Calculator size={20} aria-hidden />}
                onPress={() => {
                  openEligibility();
                  scrollToId("eligibility");
                }}
              >
                Check Eligibility
              </Button>
              <Button
                as="a"
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                variant="shadow"
                radius="full"
                size="lg"
                className="px-6 h-14 font-semibold text-base text-on-dark hover:bg-white/5"
                startContent={<MessageCircle size={20} aria-hidden />}
              >
                WhatsApp Us
              </Button>
            </div>

          </div>

          {/* ── Right: interactive hook ────────────────────────────────── */}
          <div className="lg:pl-8">
            <EmiMiniWidget />
          </div>
        </div>
      </div>
    </section>
  );
}
