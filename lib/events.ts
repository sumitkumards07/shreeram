import type { LoanType } from "@/lib/siteConfig";

/**
 * Tiny cross-component event bus. The Hero, loan cards, and sticky bar all need
 * to send the user into the eligibility checker (optionally with a loan type
 * pre-selected); the checker listens for this event and resets to step 1.
 */
export const OPEN_ELIGIBILITY_EVENT = "srs:open-eligibility";

export function openEligibility(loanType?: LoanType): void {
  window.dispatchEvent(
    new CustomEvent(OPEN_ELIGIBILITY_EVENT, { detail: { loanType } }),
  );
}

export function scrollToId(id: string): void {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}
