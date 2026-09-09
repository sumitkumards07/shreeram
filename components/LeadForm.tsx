"use client";

import { useState } from "react";
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
import { siteConfig } from "@/lib/siteConfig";
import { formatINRShort } from "@/lib/emiMath";

const loanOptions = [
  { value: "home", label: "Home Loan", icon: Home },
  { value: "business", label: "Business Loan", icon: Briefcase },
  { value: "personal", label: "Personal Loan", icon: Wallet },
  { value: "car", label: "Car Loan", icon: Car },
] as const;

const amountChips = [500000, 1000000, 2500000, 5000000];

const schema = z.object({
  loanType: z
    .enum(["home", "business", "personal", "car"])
    .refine((v) => Boolean(v), { message: "Select a loan type" }),
  amount: z
    .string()
    .min(1, "Enter the amount you need")
    .refine((v) => {
      const n = Number(v);
      return Number.isFinite(n) && n >= 100000 && n <= 50000000;
    }, "Enter an amount between ₹1 Lakh and ₹5 Crore"),
  city: z.string().trim().min(2, "Please enter your city"),
  name: z.string().trim().min(2, "Please enter your name"),
  mobile: z
    .string()
    .regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit Indian mobile number"),
});

type LeadFormData = z.infer<typeof schema>;

const stepFields: (keyof LeadFormData)[][] = [
  ["loanType"],
  ["amount"],
  ["city"],
  ["name", "mobile"],
];

const stepHeadings = [
  "What loan do you need?",
  "How much do you need?",
  "Where are you located?",
  "Where can we reach you?",
];

export function LeadForm() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submittedMobile, setSubmittedMobile] = useState("");

  const {
    register,
    handleSubmit,
    trigger,
    setValue,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<LeadFormData>({
    resolver: zodResolver(schema),
    defaultValues: { loanType: undefined, amount: "", city: "", name: "", mobile: "" },
    mode: "onTouched",
  });

  const loanType = watch("loanType");
  const amount = watch("amount");
  const mobile = watch("mobile");

  const goNext = async () => {
    const valid = await trigger(stepFields[step]);
    if (valid) setStep((s) => Math.min(s + 1, 3));
  };

  const onSubmit = handleSubmit(async (data) => {
    setSubmitError(null);
    try {
      const message = `Hi Shree Ram Solution! I want to apply for a ${loanOptions.find((o) => o.value === data.loanType)?.label ?? "loan"}.
Amount: ${data.amount ? formatINRShort(Number(data.amount)) : "-"}
City: ${data.city.trim()}
Name: ${data.name.trim()}
Mobile: ${data.mobile}`;

      const whatsappUrl = siteConfig.whatsapp(message);
      window.open(whatsappUrl, "_blank");
      
      setSubmittedMobile(data.mobile);
      setSubmitted(true);
    } catch {
      setSubmitError(
        "Something went wrong while redirecting to WhatsApp. Please try again.",
      );
    }
  });

  const restart = () => {
    reset();
    setSubmitted(false);
    setSubmitError(null);
    setStep(0);
  };

  const whatsappHref = siteConfig.whatsapp(
    `Hi Shree Ram Solution! I submitted an enquiry on your website (${loanOptions.find((o) => o.value === loanType)?.label ?? "loan"}, ${amount ? formatINRShort(Number(amount)) : "-"}). My name is ${watch("name") || "-"}.`,
  );

  return (
    <section id="apply" className="py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-[color:var(--color-ink)] sm:text-4xl">
          Request a callback
        </h2>
        <p className="mt-3 text-[color:var(--color-ink-soft)]">
          Four short steps — we&apos;ll call you back to discuss options for your profile.
        </p>

        <Card
          radius="lg"
          shadow="sm"
          className="mt-8 shadow-md"
        >
          <CardBody className="p-5 sm:p-8">
            {submitted ? (
              /* ── Success ─────────────────────────────────────────────── */
              <div className="py-4 text-center">
                <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-[#00A896]/15 text-secondary">
                  <CheckCircle2 size={30} aria-hidden />
                </span>
                <h3 className="mt-4 text-xl font-semibold text-[color:var(--color-ink)]">
                  Request received
                </h3>
                <p className="mx-auto mt-2 max-w-sm text-sm text-[color:var(--color-ink-soft)]">
                  Our team will call you back on{" "}
                  <span className="tnum font-semibold text-[color:var(--color-ink)]">
                    +91 {submittedMobile}
                  </span>{" "}
                  during working hours ({siteConfig.hoursDays}).
                </p>
                <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <Button
                    as="a"
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    color="secondary"
                    startContent={<MessageCircle size={18} aria-hidden />}
                  >
                    Continue on WhatsApp
                  </Button>
                  <Button variant="light" onPress={restart}>
                    Submit another enquiry
                  </Button>
                </div>
              </div>
            ) : (
              <>
                <Progress
                  aria-label="Lead form progress"
                  value={((step + 1) / 4) * 100}
                  color="secondary"
                  size="sm"
                  className="mb-2"
                />
                <div className="flex items-center justify-between">
                  <p className="text-xs font-medium text-[color:var(--color-ink-soft)]">
                    Step {step + 1} of 4
                  </p>
                  <Chip size="sm" variant="flat" color="secondary">
                    Free consultation
                  </Chip>
                </div>

                <h3 className="mt-5 text-lg font-semibold text-[color:var(--color-ink)] sm:text-xl">
                  {stepHeadings[step]}
                </h3>

                <div className="mt-4">
                  {step === 0 && (
                    <RadioGroup
                      aria-label="Loan type"
                      value={loanType ?? ""}
                      onValueChange={(v) =>
                        setValue("loanType", v as LeadFormData["loanType"], {
                          shouldValidate: true,
                        })
                      }
                      classNames={{ wrapper: "grid grid-cols-1 gap-2 sm:grid-cols-2" }}
                      isInvalid={Boolean(errors.loanType)}
                      errorMessage={errors.loanType?.message}
                    >
                      {loanOptions.map((option) => {
                        const Icon = option.icon;
                        return (
                          <Radio key={option.value} value={option.value}>
                            <span className="flex items-center gap-2">
                              <Icon size={16} className="text-primary" aria-hidden />
                              {option.label}
                            </span>
                          </Radio>
                        );
                      })}
                    </RadioGroup>
                  )}

                  {step === 1 && (
                    <div>
                      <Input
                        {...register("amount")}
                        type="number"
                        inputMode="numeric"
                        label="Amount needed (₹)"
                        placeholder="e.g. 1000000"
                        min={0}
                        isInvalid={Boolean(errors.amount)}
                        errorMessage={errors.amount?.message}
                        className="tnum max-w-xs"
                      />
                      <div className="mt-3 flex flex-wrap gap-2">
                        {amountChips.map((chip) => (
                          <Button
                            key={chip}
                            size="sm"
                            variant="flat"
                            color={amount === String(chip) ? "secondary" : "default"}
                            onPress={() =>
                              setValue("amount", String(chip), { shouldValidate: true })
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
                      placeholder="e.g. Jaipur"
                      className="max-w-xs"
                      isInvalid={Boolean(errors.city)}
                      errorMessage={errors.city?.message}
                    />
                  )}

                  {step === 3 && (
                    <div className="grid gap-4 sm:grid-cols-2">
                      <Input
                        {...register("name")}
                        label="Your name"
                        placeholder="e.g. Sumit Kumar"
                        autoComplete="name"
                        isInvalid={Boolean(errors.name)}
                        errorMessage={errors.name?.message}
                      />
                      <Input
                        {...register("mobile")}
                        type="tel"
                        inputMode="numeric"
                        label="Mobile number"
                        placeholder="10-digit mobile"
                        maxLength={10}
                        autoComplete="tel"
                        classNames={{ input: "tnum" }}
                        isInvalid={Boolean(errors.mobile)}
                        errorMessage={errors.mobile?.message}
                      />
                    </div>
                  )}
                </div>

                {submitError && (
                  <p role="alert" className="mt-4 text-sm text-danger">
                    {submitError}
                  </p>
                )}

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
                      className="btn-3d w-full sm:w-auto"
                      onPress={goNext}
                      endContent={<ArrowRight size={16} aria-hidden />}
                    >
                      Continue
                    </Button>
                  ) : (
                    <Button
                      className="btn-3d w-full"
                      type="submit"
                      isLoading={isSubmitting}
                      onPress={() => void onSubmit()}
                      endContent={<CheckCircle2 size={16} aria-hidden />}
                    >
                      Submit enquiry
                    </Button>
                  )}
                </div>

                <p className="mt-4 text-xs leading-relaxed text-[color:var(--color-ink-soft)]">
                  By submitting, you agree to be contacted by Shree Ram Solution regarding
                  this enquiry. We do not spam or share your number.
                </p>
              </>
            )}
          </CardBody>
        </Card>
      </div>
    </section>
  );
}
