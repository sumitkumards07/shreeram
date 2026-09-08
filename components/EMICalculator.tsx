"use client";

import { useMemo, useState } from "react";
import { Button, Card, CardBody, Slider } from "@heroui/react";
import { RotateCcw } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";
import { calculateEmi, formatINR, formatINRShort } from "@/lib/emiMath";

export function EMICalculator() {
  const { emi } = siteConfig;
  const [amount, setAmount] = useState(emi.defaultAmount);
  const [tenureYears, setTenure] = useState(emi.defaultTenureYears);
  const [rate, setRate] = useState(emi.defaultRate);

  const result = useMemo(
    () => calculateEmi(amount, rate, tenureYears),
    [amount, rate, tenureYears],
  );

  const interestShare = result.totalPayment
    ? (result.totalInterest / result.totalPayment) * 100
    : 0;

  return (
    <section id="emi-calculator" className="py-section bg-background">
      <div className="mx-auto max-w-[1000px] px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl lg:text-[52px] font-display font-normal tracking-[-1.3px] text-ink">
          EMI calculator
        </h2>
        <p className="mt-4 max-w-2xl text-[16px] text-muted">
          Move the sliders to see how amount, tenure, and rate change your monthly instalment and total interest.
        </p>

        <Card
          radius="none"
          shadow="none"
          className="mt-12 shadow-lg bg-surface-card rounded-[24px]"
        >
          <CardBody className="p-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              {/* Inputs */}
              <div className="flex flex-col gap-8">
                <div>
                  <div className="mb-2 flex items-baseline justify-between gap-2">
                    <span className="text-[16px] font-medium text-ink">
                      Loan amount
                    </span>
                    <span className="tnum font-mono text-[16px] font-medium text-ink">
                      {formatINRShort(amount)}
                    </span>
                  </div>
                  <Slider
                    aria-label="Loan amount"
                    size="md"
                    color="primary"
                    minValue={emi.minAmount}
                    maxValue={emi.maxAmount}
                    step={emi.amountStep}
                    value={amount}
                    onChange={(v) => setAmount(Array.isArray(v) ? v[0] : v)}
                  />
                </div>
                <div>
                  <div className="mb-2 flex items-baseline justify-between gap-2">
                    <span className="text-[16px] font-medium text-ink">
                      Tenure
                    </span>
                    <span className="tnum font-mono text-[16px] font-medium text-ink">
                      {tenureYears} yrs
                    </span>
                  </div>
                  <Slider
                    aria-label="Tenure"
                    size="md"
                    color="primary"
                    minValue={emi.minTenure}
                    maxValue={emi.maxTenure}
                    step={1}
                    value={tenureYears}
                    onChange={(v) => setTenure(Array.isArray(v) ? v[0] : v)}
                  />
                </div>
                <div>
                  <div className="mb-2 flex items-baseline justify-between gap-2">
                    <span className="text-[16px] font-medium text-ink">
                      Interest rate (p.a.)
                    </span>
                    <span className="tnum font-mono text-[16px] font-medium text-ink">
                      {rate.toFixed(2)}%
                    </span>
                  </div>
                  <Slider
                    aria-label="Interest rate"
                    size="md"
                    color="primary"
                    minValue={emi.minRate}
                    maxValue={emi.maxRate}
                    step={emi.rateStep}
                    value={rate}
                    onChange={(v) => setRate(Array.isArray(v) ? v[0] : v)}
                  />
                </div>
                <Button
                  variant="light"
                  size="sm"
                  radius="full"
                  className="w-fit px-3 text-muted hover:text-ink font-medium h-[36px]"
                  startContent={<RotateCcw size={16} aria-hidden />}
                  onPress={() => {
                    setAmount(emi.defaultAmount);
                    setTenure(emi.defaultTenureYears);
                    setRate(emi.defaultRate);
                  }}
                >
                  Reset
                </Button>
              </div>

              {/* Outputs */}
              <div className="flex flex-col justify-center gap-6 rounded-[20px] bg-surface-soft p-8 shadow-sm">
                <div>
                  <p className="text-[14px] font-medium text-muted">
                    Monthly EMI
                  </p>
                  <p
                    aria-live="polite"
                    className="tnum font-mono text-[44px] font-medium text-primary mt-1"
                  >
                    {formatINR(result.emi)}
                  </p>
                </div>

                <dl className="space-y-3 text-[16px]">
                  <div className="flex items-baseline justify-between gap-3">
                    <dt className="text-body">Principal</dt>
                    <dd className="tnum font-mono font-medium text-ink">
                      {formatINR(amount)}
                    </dd>
                  </div>
                  <div className="flex items-baseline justify-between gap-3">
                    <dt className="text-body">Total interest</dt>
                    <dd className="tnum font-mono font-medium text-ink">
                      {formatINR(result.totalInterest)}
                    </dd>
                  </div>
                  <div className="flex items-baseline justify-between gap-3 pt-3 mt-4">
                    <dt className="text-ink font-medium">Total payment</dt>
                    <dd className="tnum font-mono font-medium text-primary">
                      {formatINR(result.totalPayment)}
                    </dd>
                  </div>
                </dl>

                {/* Principal vs interest split */}
                <div className="mt-4">
                  <div
                    role="img"
                    aria-label={`Principal ${(100 - interestShare).toFixed(0)}%, interest ${interestShare.toFixed(0)}% of total payment`}
                    className="flex h-[8px] overflow-hidden rounded-full bg-surface-strong"
                  >
                    <div
                      className="bg-primary"
                      style={{ width: `${100 - interestShare}%` }}
                    />
                    <div
                      className="bg-accent-yellow"
                      style={{ width: `${interestShare}%` }}
                    />
                  </div>
                  <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-[13px] text-body">
                    <span className="flex items-center gap-2">
                      <span
                        aria-hidden
                        className="h-2 w-2 rounded-full bg-primary"
                      />
                      Principal
                    </span>
                    <span className="flex items-center gap-2">
                      <span
                        aria-hidden
                        className="h-2 w-2 rounded-full bg-accent-yellow"
                      />
                      Interest
                    </span>
                  </div>
                </div>

                <p className="text-[12px] text-muted-soft mt-2">
                  *{siteConfig.complianceCaption} Rates vary by lender, profile, and loan type.
                </p>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}
