"use client";

import { useMemo, useState } from "react";
import { Button, Card, CardBody, Chip, Slider } from "@heroui/react";
import { ArrowDown, ArrowRight, Calculator, CheckCircle2, MessageCircle, Phone } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";
import { calculateEmi, formatINR, formatINRShort } from "@/lib/emiMath";
import { openEligibility, scrollToId } from "@/lib/events";

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
      <div className="absolute inset-0 translate-x-2 translate-y-3 rounded-xl bg-surface-card/50 shadow-md" aria-hidden="true" />
      
      <Card
        radius="lg"
        shadow="none"
        className="relative shadow-lg bg-surface-card text-ink"
      >
        <CardBody className="gap-5 p-8">
          <div className="flex items-center justify-between gap-3">
            <p className="text-lg font-semibold text-ink">
              Quick EMI estimate
            </p>
            <Chip size="sm" variant="flat" color="primary" radius="full">
              Live
            </Chip>
          </div>

          <div>
            <div className="mb-1 flex items-baseline justify-between gap-2">
              <span className="text-sm font-medium text-muted">
                Loan amount
              </span>
              <span className="tnum font-mono text-sm font-medium text-ink">
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
                track: "bg-background",
                thumb: "w-5 h-5 bg-primary"
              }}
            />
          </div>

          <div>
            <div className="mb-1 flex items-baseline justify-between gap-2">
              <span className="text-sm font-medium text-muted">
                Tenure
              </span>
              <span className="tnum font-mono text-sm font-medium text-ink">
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
                track: "bg-background",
                thumb: "w-5 h-5 bg-primary"
              }}
            />
          </div>

          <div>
            <p className="text-xs text-muted">
              at an indicative {emi.defaultRate.toFixed(1)}% p.a. reducing balance
            </p>
            <div className="mt-3 flex flex-wrap items-baseline justify-between gap-2">
              <p className="text-sm font-medium text-muted">
                Estimated monthly EMI
              </p>
              <p className="tnum font-mono text-3xl font-medium text-primary">
                {formatINR(result.emi)}
              </p>
            </div>
            <p className="mt-1 text-xs text-muted">
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

  return (
    <section id="hero" className="relative overflow-hidden bg-background text-ink">
      {/* Editorial full-bleed dark hero styling */}
      
      <div className="relative mx-auto max-w-[1200px] px-4 pb-20 pt-24 sm:px-6 sm:pt-32 lg:px-8 lg:pb-32">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
          {/* ── Left: message, trust, CTAs ─────────────────────────────── */}
          <div>
            <h1 className="text-balance mt-4 text-[44px] sm:text-[64px] lg:text-[72px] font-display font-normal tracking-[-2px] leading-[1.05] text-ink">
              Loan Consultant in Jaipur for Home, Business, Personal & Car Loans
            </h1>

            <p className="mt-6 max-w-xl text-base text-muted sm:text-lg">
              Shree Ram Solution is a loan consultancy and DSA based in Jaipur helping individuals, professionals, self-employed customers and businesses explore suitable loan options from banks and NBFCs.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-2 text-sm font-medium text-ink">
                <CheckCircle2 className="text-primary" size={18} />
                <span>Multiple Bank & NBFC Options</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-ink">
                <CheckCircle2 className="text-primary" size={18} />
                <span>Documentation Assistance</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-ink">
                <CheckCircle2 className="text-primary" size={18} />
                <span>Transparent Guidance</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-ink">
                <CheckCircle2 className="text-primary" size={18} />
                <span>Local Jaipur Support</span>
              </div>
            </div>

            {/* Primary CTA row */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:flex-wrap">
              <Button
                size="lg"
                color="primary"
                className="btn-3d px-8 h-14 text-base font-semibold"
                endContent={<ArrowRight size={20} aria-hidden />}
                onPress={() => {
                  openEligibility();
                  scrollToId("eligibility");
                }}
              >
                Check My Eligibility
              </Button>
              <Button
                as="a"
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                variant="shadow"
                radius="full"
                size="lg"
                className="px-6 h-14 font-semibold text-base text-ink hover:bg-black/5"
                startContent={<MessageCircle size={20} aria-hidden />}
              >
                WhatsApp an Expert
              </Button>
            </div>
            
            <div className="mt-4 flex justify-center w-full">
              <Button
                as="a"
                href={siteConfig.phonePrimaryHref}
                variant="flat"
                radius="full"
                className="bg-transparent hover:bg-black/5 text-muted font-medium h-10 px-4"
                startContent={<Phone size={16} />}
              >
                Call us: {siteConfig.phonePrimary}
              </Button>
            </div>

            <div className="mt-10 pt-8 border-t border-black/10">
              <p className="text-sm font-bold text-ink mb-1.5">Shree Ram Solution</p>
              <p className="text-sm text-muted leading-relaxed max-w-md">
                Loan Consultancy & DSA helping customers compare and apply for Home, Business, Personal & Car Loans.
              </p>
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
