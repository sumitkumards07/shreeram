"use client";

import { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardBody,
  Chip,
  Input,
  Progress,
  Radio,
  RadioGroup,
} from "@heroui/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  ArrowLeft,
  ArrowRight,
  Briefcase,
  Car,
  CheckCircle2,
  Home,
  MessageCircle,
  Wallet,
} from "lucide-react";
import { siteConfig, type LoanType } from "@/lib/siteConfig";
import { formatINR, formatINRShort } from "@/lib/emiMath";
import { OPEN_ELIGIBILITY_EVENT, scrollToId } from "@/lib/events";

const loanMeta: Record<
  LoanType,
  { title: string; icon: typeof Home; hint: string }
> = {
  home: { title: "Home Loan", icon: Home, hint: "Purchase / construction / transfer" },
  business: { title: "Business Loan", icon: Briefcase, hint: "Working capital / expansion" },
  personal: { title: "Personal Loan", icon: Wallet, hint: "Wedding / medical / any need" },
  car: { title: "Car Loan", icon: Car, hint: "New & pre-owned cars" },
};

const employmentOptions = [
  { value: "salaried", label: "Salaried" },
  { value: "self-employed", label: "Self-Employed Professional" },
  { value: "business", label: "Business Owner" },
] as const;

const schema = z.object({
  loanType: z
    .enum(["home", "business", "personal", "car"])
    .refine((v) => Boolean(v), { message: "Select a loan type to continue" }),
  monthlyIncome: z
    .string()
    .min(1, "Enter your monthly income")
    .refine((v) => Number(v) >= 10000, "Enter a monthly income of ₹10,000 or more"),
  city: z.string().trim().min(2, "Please enter your city or locality"),
  employment: z
    .enum(["salaried", "self-employed", "business"])
    .refine((v) => Boolean(v), { message: "Select your employment type" }),
});

type EligibilityFormData = z.infer<typeof schema>;

const stepFields: (keyof EligibilityFormData)[][] = [
  ["loanType"],
  ["monthlyIncome"],
  ["city"],
  ["employment"],
];

const stepHeadings = [
  "What type of loan are you looking for?",
  "What is your monthly income?",
  "Which city are you located in?",
  "Which of these describes you best?",
];

const incomeChips = [25000, 50000, 100000];

function roundToLakh(value: number): number {
  return Math.max(100000, Math.round(value / 100000) * 100000);
}

export function EligibilityChecker() {
  const [step, setStep] = useState(0);

  const {
    register,
    handleSubmit,
    trigger,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<EligibilityFormData>({
    resolver: zodResolver(schema),
    defaultValues: { loanType: undefined, monthlyIncome: "", city: "", employment: undefined },
    mode: "onTouched",
  });

  const loanType = watch("loanType");
  const monthlyIncome = watch("monthlyIncome");
  const city = watch("city");
  const employment = watch("employment");

  // Hero CTAs / loan cards / sticky bar can jump the user into step 1,
  // optionally with a loan type pre-selected.
  useEffect(() => {
    const handler = (event: Event) => {
      const detail = (event as CustomEvent<{ loanType?: LoanType }>).detail;
      reset();
      if (detail?.loanType) {
        setValue("loanType", detail.loanType, { shouldValidate: false });
      }
      setStep(0);
    };
    window.addEventListener(OPEN_ELIGIBILITY_EVENT, handler);
    return () => window.removeEventListener(OPEN_ELIGIBILITY_EVENT, handler);
  }, [reset, setValue]);

  const goNext = async () => {
    const valid = await trigger(stepFields[step]);
    if (valid) setStep((s) => Math.min(s + 1, 4));
  };

  const onInvalid = () => {
    /* per-step trigger() already surfaces errors where the user is looking */
  };

  // ── Result computation (indicative multiples, always captioned) ──────────
  const income = Number(monthlyIncome);
  const multiples = loanType ? siteConfig.eligibilityMultiples[loanType] : null;
  const rangeLow = multiples ? roundToLakh(multiples[0] * income) : 0;
  const rangeHigh = multiples ? roundToLakh(multiples[1] * income) : 0;

  const whatsappMessage = [
    "Hi Shree Ram Solution! I checked eligibility on your website:",
    `• Loan type: ${loanType ? loanMeta[loanType].title : "-"}`,
    `• Monthly income: ${monthlyIncome ? formatINR(income) : "-"}`,
    `• City: ${city || "-"}`,
    `• Employment: ${employmentOptions.find((e) => e.value === employment)?.label ?? "-"}`,
    "Please guide me further.",
  ].join("\n");

  const onSubmit = handleSubmit(() => {
    setStep(4);
    window.open(siteConfig.whatsapp(whatsappMessage), "_blank");
  }, onInvalid);

  return (
    <section id="eligibility" className="py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-[color:var(--color-ink)] sm:text-4xl">
          Check your eligibility in 60 seconds
        </h2>
        <p className="mt-3 max-w-2xl text-[color:var(--color-ink-soft)]">
          Four quick questions, an indicative answer — then continue the conversation on WhatsApp with your details pre-filled.
        </p>

        <Card
          radius="lg"
          shadow="sm"
          className="mt-8 shadow-md"
        >
          <CardBody className="p-5 sm:p-8">
            {step < 4 ? (
              <>
                <div className="flex items-center justify-between mb-2">
                  <div className="hidden sm:flex items-center gap-2 text-xs font-medium text-[color:var(--color-ink-soft)]">
                    <span className={step >= 0 ? "text-secondary font-bold" : ""}>01 Type</span>
                    <span>───</span>
                    <span className={step >= 1 ? "text-secondary font-bold" : ""}>02 Income</span>
                    <span>───</span>
                    <span className={step >= 2 ? "text-secondary font-bold" : ""}>03 City</span>
                    <span>───</span>
                    <span className={step >= 3 ? "text-secondary font-bold" : ""}>04 Profile</span>
                  </div>
                  <div className="sm:hidden text-xs font-medium text-[color:var(--color-ink-soft)]">
                    Step {step + 1} of 4
                  </div>
                  <Chip size="sm" variant="flat" color="secondary">
                    Takes &lt; 60 seconds
                  </Chip>
                </div>
                <Progress
                  aria-label="Eligibility check progress"
                  value={((step + 1) / 4) * 100}
                  color="secondary"
                  size="sm"
                  className="mb-4 sm:hidden"
                />

                <h3 className="mt-5 text-lg font-semibold text-[color:var(--color-ink)] sm:text-xl">
                  {stepHeadings[step]}
                </h3>

                <div className="mt-4">
                  {step === 0 && (
                    <RadioGroup
                      aria-label="Loan type"
                      value={loanType ?? ""}
                      onValueChange={(v) =>
                        setValue("loanType", v as LoanType, { shouldValidate: true })
                      }
                      classNames={{ wrapper: "grid grid-cols-1 gap-2 sm:grid-cols-2" }}
                      isInvalid={Boolean(errors.loanType)}
                      errorMessage={errors.loanType?.message}
                    >
                      {(Object.keys(loanMeta) as LoanType[]).map((id) => {
                        const meta = loanMeta[id];
                        const Icon = meta.icon;
                        const loan = siteConfig.loans.find((l) => l.id === id);
                        return (
                          <Radio key={id} value={id} description={meta.hint}>
                            <span className="flex items-center gap-2">
                              <Icon size={16} className="text-primary" aria-hidden />
                              {meta.title}
                              {loan && (
                                <span className="tnum text-xs text-[color:var(--color-ink-soft)]">
                                  from {loan.rateMin}% p.a.
                                </span>
                              )}
                            </span>
                          </Radio>
                        );
                      })}
                    </RadioGroup>
                  )}

                  {step === 1 && (
                    <div>
                      <Input
                        {...register("monthlyIncome")}
                        type="number"
                        inputMode="numeric"
                        label="Monthly income (₹)"
                        placeholder="e.g. 45000"
                        min={0}
                        isInvalid={Boolean(errors.monthlyIncome)}
                        errorMessage={errors.monthlyIncome?.message}
                        className="tnum max-w-xs"
                      />
                      <div className="mt-3 flex flex-wrap gap-2">
                        {incomeChips.map((chip) => (
                          <Button
                            key={chip}
                            size="sm"
                            variant="flat"
                            color={monthlyIncome === String(chip) ? "secondary" : "default"}
                            onPress={() =>
                              setValue("monthlyIncome", String(chip), {
                                shouldValidate: true,
                              })
                            }
                          >
                            <span className="tnum">{formatINRShort(chip)}</span>
                          </Button>
                        ))}
                      </div>
                    </div>
                  )}

                  {step === 2 && (
                    <Input
                      {...register("city")}
                      label="City / locality"
                      placeholder="e.g. Jaipur, Jhotwara, Kalwar Road"
                      className="max-w-xs"
                      isInvalid={Boolean(errors.city)}
                      errorMessage={errors.city?.message}
                    />
                  )}

                  {step === 3 && (
                    <RadioGroup
                      aria-label="Employment type"
                      value={employment ?? ""}
                      onValueChange={(v) =>
                        setValue("employment", v as EligibilityFormData["employment"], {
                          shouldValidate: true,
                        })
                      }
                      classNames={{ wrapper: "flex flex-col gap-2" }}
                      isInvalid={Boolean(errors.employment)}
                      errorMessage={errors.employment?.message}
                    >
                      {employmentOptions.map((option) => (
                        <Radio key={option.value} value={option.value}>
                          {option.label}
                        </Radio>
                      ))}
                    </RadioGroup>
                  )}
                </div>

                <div className="mt-8 flex items-center justify-between gap-3">
                  <Button
                    variant="light"
                    isDisabled={step === 0}
                    onPress={() => setStep((s) => Math.max(0, s - 1))}
                    startContent={<ArrowLeft size={16} aria-hidden />}
                  >
                    Back
                  </Button>
                  {step < 3 ? (
                    <Button
                      className="btn-3d px-6"
                      onPress={goNext}
                      endContent={<ArrowRight size={16} aria-hidden />}
                    >
                      Continue
                    </Button>
                  ) : (
                    <Button className="btn-3d px-6" onPress={() => void onSubmit()} endContent={<CheckCircle2 size={16} aria-hidden />}>
                      See result
                    </Button>
                  )}
                </div>
              </>
            ) : (
              /* ── Result ──────────────────────────────────────────────── */
              <div>
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-secondary-100 text-secondary">
                    <CheckCircle2 size={22} aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-[color:var(--color-ink)] sm:text-xl">
                    Your indicative eligibility
                  </h3>
                </div>

                <p className="mt-4 text-sm text-[color:var(--color-ink-soft)]">
                  Based on a monthly income of{" "}
                  <span className="tnum font-semibold text-[color:var(--color-ink)]">
                    {formatINR(income)}
                  </span>{" "}
                  as {employmentOptions.find((e) => e.value === employment)?.label.toLowerCase()} in{" "}
                  {city}, the indicative loan range for a{" "}
                  {loanType ? loanMeta[loanType].title.toLowerCase() : "loan"} could be:
                </p>

                <p className="tnum mt-4 text-3xl font-bold text-primary sm:text-4xl">
                  {formatINRShort(rangeLow)} – {formatINRShort(rangeHigh)}
                </p>
                <p className="mt-1 text-xs text-[color:var(--color-ink-soft)]">
                  *{siteConfig.complianceCaption} Actual amount depends on credit score, existing EMIs, and lender policy.
                </p>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Button
                    as="a"
                    href={siteConfig.whatsapp(whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    size="lg"
                    startContent={<MessageCircle size={20} aria-hidden />}
                    className="w-full sm:w-auto btn-3d px-6 h-12"
                  >
                    Continue on WhatsApp
                  </Button>
                  <Button
                    variant="light"
                    size="lg"
                    onPress={() => scrollToId("apply")}
                    className="w-full sm:w-auto"
                  >
                    Fill detailed form instead
                  </Button>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    reset();
                    setStep(0);
                  }}
                  className="mt-5 text-sm font-medium text-[color:var(--color-ink-soft)] underline-offset-4 transition-colors hover:text-primary hover:underline"
                >
                  Start over
                </button>
              </div>
            )}
          </CardBody>
        </Card>
      </div>
    </section>
  );
}
