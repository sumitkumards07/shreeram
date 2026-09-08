/**
 * Shared EMI math — used by the Hero mini-widget, the full <EMICalculator />,
 * and the starting-EMI examples on the loan cards. Standard reducing-balance
 * formula; no API calls, safe to run on every slider tick.
 */

export interface EmiResult {
  /** Fixed monthly instalment, rounded to the nearest rupee. */
  emi: number;
  /** Total interest paid across the tenure. */
  totalInterest: number;
  /** Principal + interest. */
  totalPayment: number;
}

export function calculateEmi(
  principal: number,
  annualRatePercent: number,
  tenureYears: number,
): EmiResult {
  const months = Math.max(1, Math.round(tenureYears * 12));
  const monthlyRate = annualRatePercent / 12 / 100;

  const emi =
    monthlyRate === 0
      ? principal / months
      : (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
        (Math.pow(1 + monthlyRate, months) - 1);

  const totalPayment = emi * months;

  return {
    emi: Math.round(emi),
    totalInterest: Math.round(totalPayment - principal),
    totalPayment: Math.round(totalPayment),
  };
}

/** ₹21,696 — full Indian grouping, no decimals. */
export function formatINR(value: number): string {
  return `₹${new Intl.NumberFormat("en-IN", {
    maximumFractionDigits: 0,
  }).format(Math.round(value))}`;
}

/** ₹25 Lakh / ₹1.5 Cr — compact form for slider labels. */
export function formatINRShort(value: number): string {
  if (value >= 10000000) {
    const cr = value / 10000000;
    return `₹${trimTrailingZero(cr.toFixed(2))} Cr`;
  }
  if (value >= 100000) {
    const lakh = value / 100000;
    return `₹${trimTrailingZero(lakh.toFixed(lakh >= 10 ? 1 : 2))} Lakh`;
  }
  return formatINR(value);
}

function trimTrailingZero(s: string): string {
  return s.replace(/\.?0+$/, "");
}
