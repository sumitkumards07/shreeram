/* Hallmark · pre-emit critique: P4 H4 E4 S4 R5 V4 */
/* Hallmark · macrostructure: lead-funnel (brief-locked section order) · tone: utilitarian finance
 * theme: brief-locked brand palette (deep blue #0B4F6C / teal #00A896 on #F7F9FA paper) · anchor hue: deep blue
 * audience: mobile-first loan seekers, Jaipur · use case: WhatsApp / call / lead-form conversion · enrichment: none — live EMI widget is the hero object */

/**
 * ────────────────────────────────────────────────────────────────────────────
 * SHREE RAM SOLUTION — SITE CONFIGURATION
 * ────────────────────────────────────────────────────────────────────────────
 * Every business fact, placeholder, and copy string lives here so nothing needs
 * component edits to update. Search for "[PLACEHOLDER" to find everything that
 * still needs confirmation from the business owner before launch.
 */

export type LoanType = "home" | "business" | "personal" | "car";

export const siteConfig = {
  name: "Shree Ram Solution",
  shortName: "SRS",
  tagline: "Loan Consultancy · Kalwar Road, Jaipur",

  email: "shreeramsolution1@gmail.com",

  phonePrimary: "+91 97843 08497",
  phonePrimaryHref: "tel:+919784308497",
  phoneSecondary: "+91 96537 76329",
  phoneSecondaryHref: "tel:+919653776329",

  addressLines: [
    "Shop No. 2, B-1, Govind Nagar, Marbal Mandi Chouraha,",
    "Near Aryan Restaurant, Kalwar Road, Jaipur, Rajasthan",
  ],
  addressSingleLine:
    "Shop No. 2, B-1, Govind Nagar, Marbal Mandi Chouraha, Near Aryan Restaurant, Kalwar Road, Jaipur, Rajasthan",

  // [PLACEHOLDER — confirm opening–closing time, e.g. "10:00 AM – 7:00 PM"]
  hoursTime: "[Timings to be confirmed]",
  hoursDays: "Monday–Saturday",
  closedDay: "Sunday",

  /**
   * [PLACEHOLDER — confirm which number should receive WhatsApp leads].
   * Currently defaults to the primary number (without "+" and without spaces).
   * Replace with "919653776329" if the secondary number is the WhatsApp one.
   */
  whatsappNumber: "919784308497",

  /** [PLACEHOLDER — GSTIN. Leave null to keep the GST block hidden everywhere.] */
  gstin: null as string | null,

  /**
   * [PLACEHOLDER — partner banks/NBFCs].
   * Leave null. The logo strip in the Footer stays commented out until a
   * genuine tie-up list is confirmed — never render lender logos speculatively.
   */
  partnerLenders: null as string[] | null,

  whatsapp(message: string): string {
    return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
  },

  whatsappDefaultMessage:
    "Hi Shree Ram Solution, I'm interested in a loan. Please guide me further.",

  // ── Hero ──────────────────────────────────────────────────────────────────
  hero: {
    eyebrow: "Trusted Loan Assistance in Jaipur",
    headline: "Get the Right Loan, Without the Runaround",
    subheadline:
      "Home, Business, Personal & Car Loans — expert guidance from enquiry to approval.",
    stats: [
      // [PLACEHOLDER — replace with the real, verified count before launch]
      { value: 300, suffix: "+", label: "Loans Facilitated", placeholder: true },
      // [PLACEHOLDER — replace with the real number of years in practice]
      { value: 5, suffix: "+", label: "Years of Experience", placeholder: true },
      { value: 4, suffix: "", label: "Loan Categories", placeholder: false },
    ],
  },

  // ── Loan products (indicative figures — shown with compliance captions) ──
  loans: [
    {
      id: "home" as LoanType,
      title: "Home Loan",
      blurb: "Purchase, construct, or transfer a home loan with guidance on property paperwork.",
      rateMin: 8.35,
      rateMax: 10.75,
      tenureMaxYears: 30,
      tenureMinYears: 5,
      example: { amount: 2500000, years: 20 },
    },
    {
      id: "business" as LoanType,
      title: "Business Loan",
      blurb: "Working capital or expansion funding for shops, traders and MSMEs.",
      rateMin: 11.5,
      rateMax: 18.0,
      tenureMaxYears: 15,
      tenureMinYears: 1,
      example: { amount: 1000000, years: 5 },
    },
    {
      id: "personal" as LoanType,
      title: "Personal Loan",
      blurb: "Wedding, medical, education or consolidation — unsecured options explained clearly.",
      rateMin: 10.5,
      rateMax: 21.0,
      tenureMaxYears: 6,
      tenureMinYears: 1,
      example: { amount: 500000, years: 5 },
    },
    {
      id: "car" as LoanType,
      title: "Car Loan",
      blurb: "New and pre-owned car finance with on-road cost and insurance guidance.",
      rateMin: 8.75,
      rateMax: 12.5,
      tenureMaxYears: 8,
      tenureMinYears: 1,
      example: { amount: 800000, years: 7 },
    },
  ],

  /** Indicative eligibility multipliers for the eligibility checker.
   *  Rough DSA heuristics — always displayed with the compliance caption. */
  eligibilityMultiples: {
    home: [48, 60],
    business: [12, 18],
    personal: [10, 15],
    car: [3, 4.5],
  } as Record<LoanType, [number, number]>,

  // ── EMI calculator defaults ───────────────────────────────────────────────
  emi: {
    defaultAmount: 2000000,
    defaultTenureYears: 20,
    defaultRate: 9.0,
    minAmount: 100000,
    maxAmount: 5000000,
    amountStep: 50000,
    minTenure: 1,
    maxTenure: 30,
    minRate: 7,
    maxRate: 18,
    rateStep: 0.05,
  },

  // ── Compliance microcopy (used under every calculated number) ─────────────
  complianceCaption: "Indicative only, subject to lender approval.",
  footerDisclaimer:
    "Loan approval and terms are at the sole discretion of the respective lender and depend on applicant eligibility, profile, and documentation. Shree Ram Solution does not guarantee loan approval, interest rates, or terms.",

  // ── Static section copy ───────────────────────────────────────────────────
  howItWorks: {
    heading: "How the process works",
    sub: "Four simple steps from first enquiry to the lender's decision — we stay involved at every one.",
    steps: [
      {
        title: "Enquiry",
        description:
          "Call, WhatsApp, or submit the form. Tell us the loan type, amount, and your situation.",
      },
      {
        title: "Eligibility Discussion",
        description:
          "We review your income and profile, and shortlist suitable lender options for you.",
      },
      {
        title: "Documentation",
        description:
          "A clear checklist for your loan type, plus help arranging and verifying every paper.",
      },
      {
        title: "Application & Decision",
        description:
          "We submit to the lender, follow up on your behalf, and update you until a decision.",
      },
    ],
  },

  whyChooseUs: {
    heading: "Why customers work with us",
    sub: "A loan application has enough moving parts. Our job is to remove them.",
    items: [
      {
        title: "Simple Process",
        description:
          "Plain-language guidance on what to apply for, where, and what to expect at each stage.",
      },
      {
        title: "Documentation Assistance",
        description:
          "Exact checklists for your loan type, with help getting every paper right the first time.",
      },
      {
        title: "Professional Guidance",
        description:
          "Input on structuring the application — amount, tenure, and lender fit for your profile.",
      },
      {
        title: "Customer Support",
        description:
          "Available on call and WhatsApp through the journey, not just at the enquiry stage.",
      },
    ],
  },

  // ── [PLACEHOLDER — SAMPLE testimonials.
  // Replace every entry with real, verifiable client feedback (with consent)
  // before launch. Quotes are intentionally process-focused, not outcome claims.] ──
  testimonials: [
    {
      name: "Rajesh S.",
      city: "Jaipur",
      quote:
        "The team explained the whole home loan process step by step and helped me arrange my documents properly. Everything moved smoothly.",
      rating: 5,
    },
    {
      name: "Priya M.",
      city: "Jhotwara",
      quote:
        "I was confused between loan options. They sat with me, compared the numbers, and helped me pick what suited my salary.",
      rating: 5,
    },
    {
      name: "Anil K.",
      city: "Kalwar Road",
      quote:
        "Good support for my business loan paperwork. They followed up with the lender regularly and kept me informed.",
      rating: 4,
    },
  ],

  faqs: [
    {
      q: "What documents are generally required?",
      a: "It varies by loan type, but commonly: identity and address proof (Aadhaar, PAN), income proof (salary slips or ITR/bank statements), and for secured loans the property or vehicle papers. We give you an exact checklist for your case before you apply.",
    },
    {
      q: "How do I know if I'm eligible for a loan?",
      a: "Lenders look at your income, existing EMIs, credit score, employment type, and the security offered. Use the 60-second eligibility checker above, or call us — an indicative answer takes one conversation.",
    },
    {
      q: "How does the process work if I enquire today?",
      a: "You share your requirement, we discuss eligibility and suitable lender options, help you complete the documentation, and submit the application. We follow up with the lender and update you until a decision.",
    },
    {
      q: "How long does approval usually take?",
      a: "It depends on the lender and loan type — unsecured personal loans can decide in a few working days, while secured home loans typically take longer due to legal and technical verification of the property.",
    },
    {
      q: "Which lenders do you work with?",
      a: "We work with multiple banks and NBFCs and suggest options based on your profile and requirement. The final approval and terms always rest with the lender.",
    },
    {
      q: "Which areas do you serve?",
      a: "We are based on Kalwar Road, Jaipur, and regularly serve customers across Jaipur and nearby areas. Call us to ask about your location.",
    },
  ],

  about: {
    heading: "About Shree Ram Solution",
    paragraphs: [
      "Shree Ram Solution is a loan consultancy based at Marbal Mandi Chouraha on Kalwar Road, Jaipur. We assist individuals and business owners with Home, Business, Personal, and Car loan applications — from the first eligibility discussion through documentation and follow-up with the lender.",
      "We are a DSA (Direct Selling Agent) working with multiple banks and NBFCs. That means we help you prepare and place your application with a suitable lender; the loan approval and final terms always remain with the lender.",
      "Our approach is simple: understand your requirement honestly, tell you clearly what is possible, and keep the paperwork and follow-ups off your plate.",
    ],
  },
};

export type SiteConfig = typeof siteConfig;
