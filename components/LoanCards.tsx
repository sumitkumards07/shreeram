"use client";

import { Button, Card, CardBody } from "@heroui/react";
import { siteConfig, type LoanType } from "@/lib/siteConfig";
import { calculateEmi, formatINR, formatINRShort } from "@/lib/emiMath";
import { openEligibility, scrollToId } from "@/lib/events";

const loanIcons: Record<LoanType, string> = {
  home: "https://img.icons8.com/fluency/96/home.png",
  business: "https://img.icons8.com/fluency/96/briefcase.png",
  personal: "https://img.icons8.com/fluency/96/wallet.png",
  car: "https://img.icons8.com/fluency/96/car.png",
};

export function LoanCards() {
  return (
    <section
      id="loans"
      className="border-y border-hairline bg-surface-soft py-section"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl lg:text-[52px] font-display font-normal tracking-[-1.3px] text-ink">
          Loans we can help with
        </h2>
        <p className="mt-4 max-w-2xl text-[16px] text-muted">
          Indicative rate and tenure ranges for each category — tap Check Eligibility to start with that loan pre-selected.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {siteConfig.loans.map((loan) => {
            const iconUrl = loanIcons[loan.id];
            const exampleEmi = calculateEmi(
              loan.example.amount,
              loan.rateMin,
              loan.example.years,
            ).emi;

            return (
              <Card
                key={loan.id}
                radius="none"
                shadow="none"
                className="rounded-[24px] bg-gradient-to-br from-white to-[#F8FAFF] shadow-[0_12px_36px_-12px_rgba(23,37,84,0.15)] overflow-hidden"
              >
                <CardBody className="p-4 flex flex-col gap-5">
                  {/* Header: Icon, Title, Description */}
                  <div className="flex flex-col gap-3">
                    <div className="w-[48px] h-[48px] rounded-[16px] bg-[#EAF2FF] shrink-0 flex items-center justify-center">
                      <img src={iconUrl} alt="" className="w-8 h-8 object-contain" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-[20px] font-bold text-[#0F172A] tracking-tight leading-tight mb-1.5">
                        {loan.title}
                      </h3>
                      <p className="text-[13px] text-[#64748B] leading-relaxed">
                        {loan.blurb}
                      </p>
                    </div>
                  </div>

                  {/* Stats Row: Rate & Tenure */}
                  <div className="grid grid-cols-2 gap-3">
                    {/* Rate Card */}
                    <div className="bg-gradient-to-br from-[#EEF5FF] to-[#F7FAFF] rounded-[16px] p-3 flex flex-col items-start gap-2">
                      <div className="w-10 h-10 rounded-full bg-[#DCEAFF] shrink-0 flex items-center justify-center">
                        <img src="https://img.icons8.com/fluency/96/percentage.png" alt="" className="w-5 h-5 object-contain" />
                      </div>
                      <div>
                        <p className="text-[11px] text-[#334155] mb-0.5">
                          Rate <span className="opacity-80">(est)</span>
                        </p>
                        <p className="text-[16px] font-bold text-[#0F172A] leading-none">
                          {loan.rateMin}–{loan.rateMax}%
                        </p>
                      </div>
                    </div>

                    {/* Tenure Card */}
                    <div className="bg-gradient-to-br from-[#EEF5FF] to-[#F7FAFF] rounded-[16px] p-3 flex flex-col items-start gap-2">
                      <div className="w-10 h-10 rounded-full bg-[#DCEAFF] shrink-0 flex items-center justify-center">
                        <img src="https://img.icons8.com/fluency/96/calendar.png" alt="" className="w-5 h-5 object-contain" />
                      </div>
                      <div>
                        <p className="text-[11px] text-[#334155] mb-0.5">
                          Tenure
                        </p>
                        <p className="text-[16px] font-bold text-[#0F172A] leading-none">
                          up to {loan.tenureMaxYears}y
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* EMI Calculator Section */}
                  <div className="bg-gradient-to-br from-[#F0FBF7] to-[#F7FCFA] rounded-[16px] p-4 flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#D7F5EC] shrink-0 flex items-center justify-center">
                        <img src="https://img.icons8.com/fluency/96/calculator.png" alt="" className="w-5 h-5 object-contain" />
                      </div>
                      <div>
                        <p className="text-[12px] text-[#334155] mb-0.5">
                          {formatINRShort(loan.example.amount)} • {loan.example.years}y
                        </p>
                        <p className="text-[18px] font-bold text-[#0F172A] leading-none">
                          ≈ {formatINR(exampleEmi)}<span className="text-xs font-medium text-slate-500">/mo</span>
                        </p>
                      </div>
                    </div>

                    <Button 
                      className="btn-3d w-full h-10 text-sm"
                      onPress={() => {
                        openEligibility(loan.id);
                        scrollToId("eligibility");
                      }}
                    >
                      Check Eligibility
                    </Button>
                  </div>

                  {/* Disclaimer */}
                  <p className="text-[11px] text-[#64748B] -mt-2">
                    *{siteConfig.complianceCaption}
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
