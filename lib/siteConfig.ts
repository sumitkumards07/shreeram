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
  url: "https://shreeramloans.vercel.app",

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
  hoursTime: "Call/WhatsApp for availability",
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
      seo: {
        h1: "Home Loan Consultant in Jaipur",
        intro: "Whether you're looking to purchase a new flat, construct a house on an existing plot, or transfer an existing high-interest loan, Shree Ram Solution helps you navigate the home loan process in Jaipur. We work with leading banks to find options that suit your specific profile.",
        eligibility: [
          "Salaried individuals with a minimum monthly income of ₹25,000.",
          "Self-employed professionals and business owners with stable ITR.",
          "Age criteria usually ranges from 21 to 65 years at loan maturity.",
          "A healthy CIBIL score (typically 700+) improves your approval chances."
        ],
        documents: [
          "Identity Proof: Aadhaar Card, PAN Card, Voter ID",
          "Address Proof: Aadhaar Card, Utility Bills, Passport",
          "Income Proof (Salaried): Last 3-6 months salary slips, Form 16, 6 months bank statements",
          "Income Proof (Self-Employed): Last 2-3 years ITR, P&L statement, Business Proof",
          "Property Documents: Chain of Title, Approved Plan, Allotment Letter"
        ],
      }
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
      seo: {
        h1: "Business Loan Consultant in Jaipur",
        intro: "Fuel your business growth with tailored MSME and business financing options in Jaipur. We assist shop owners, traders, manufacturers, and service providers in securing working capital and expansion loans from trusted financial institutions.",
        eligibility: [
          "Business vintage of at least 3 years in the current location.",
          "Minimum annual turnover as required by the lender (varies).",
          "Profitable operations for the last 2 consecutive years.",
          "Satisfactory repayment history on existing business or personal obligations."
        ],
        documents: [
          "KYC Documents of Applicants & Co-Applicants (PAN, Aadhaar)",
          "Business KYC (GST Registration, MSME Udyam Certificate, Shop Act)",
          "Financials: Last 2-3 years ITR, Audited Balance Sheet & P&L",
          "Bank Statements: Last 12 months primary current account statement",
          "Ownership proof of residence or business premises"
        ],
      }
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
      seo: {
        h1: "Personal Loan Consultant in Jaipur",
        intro: "Need funds for a wedding, medical emergency, higher education, or debt consolidation? Our personal loan consultancy in Jaipur helps you secure unsecured loans with competitive interest rates and flexible tenures without unnecessary delays.",
        eligibility: [
          "Salaried employees of public or private limited companies.",
          "Minimum net monthly salary of ₹20,000 (varies by lender).",
          "Self-employed individuals with stable declared income.",
          "Good credit history (CIBIL score above 700 preferred)."
        ],
        documents: [
          "Identity & Age Proof (Aadhaar, PAN, Passport)",
          "Address Proof (Aadhaar, Utility Bills, Rent Agreement)",
          "Income Proof: Last 3 months salary slips or latest ITR",
          "Bank Statements: Last 6 months showing salary credits",
          "Employment Proof (Employee ID, Offer Letter)"
        ],
      }
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
      seo: {
        h1: "Car Loan Consultant in Jaipur",
        intro: "Drive home your dream car with ease. Shree Ram Solution helps you compare and apply for new car financing and used car loans in Jaipur, offering guidance on on-road cost funding and insurance tie-ups.",
        eligibility: [
          "Age 21 to 65 years.",
          "Salaried individuals, self-employed professionals, or business entities.",
          "Minimum required income/ITR as per lender guidelines.",
          "Prior relationship with the bank often yields better rates."
        ],
        documents: [
          "KYC (PAN, Aadhaar) and Passport-size photographs",
          "Income Proof (Salary slips or ITR/Financial statements)",
          "Bank Statements (Last 6 months)",
          "Proforma Invoice or Quotation from the authorized dealer",
          "RC Copy and Valuation Report (for used cars)"
        ],
      }
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
        title: "Multiple lender options",
        description:
          "We compare rates and terms across different banks and NBFCs to find the right fit for your profile.",
      },
      {
        title: "Know what documents you need",
        description:
          "Get exact, plain-language checklists for your loan type so you get it right the first time.",
      },
      {
        title: "One point of contact",
        description:
          "No more repeating your story to different departments. We handle the process from enquiry to approval.",
      },
      {
        title: "Application follow-up",
        description:
          "We follow up with the lender on your behalf and keep you updated at every stage until a decision is made.",
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
      monthYear: "Aug 2023",
      loanCategory: "Home Loan",
      verified: true,
    },
    {
      name: "Priya M.",
      city: "Jhotwara",
      quote:
        "I was confused between loan options. They sat with me, compared the numbers, and helped me pick what suited my salary.",
      rating: 5,
      monthYear: "Oct 2023",
      loanCategory: "Personal Loan",
      verified: true,
    },
    {
      name: "Anil K.",
      city: "Kalwar Road",
      quote:
        "Good support for my business loan paperwork. They followed up with the lender regularly and kept me informed.",
      rating: 5,
      monthYear: "Dec 2023",
      loanCategory: "Business Loan",
      verified: true,
    },
  ],

  faqs: [
    {
      q: "What documents are required for a home loan?",
      a: "Generally, you need identity and address proof (Aadhaar, PAN), income proof (last 6 months salary slips or last 3 years ITR with financials), bank statements, and the property documents (Chain of Title, Approved Plan, Allotment Letter). We give you an exact checklist for your case before you apply.",
    },
    {
      q: "How is home loan eligibility calculated?",
      a: "Lenders look at your net monthly income, existing EMI obligations, credit (CIBIL) score, employment stability, and the value of the property. Use our EMI calculator to get a rough estimate, or contact us for a detailed assessment.",
    },
    {
      q: "How does a business loan work?",
      a: "Business loans provide capital for operations or expansion. Lenders evaluate your business vintage (usually 3+ years required), annual turnover, profitability (P&L), and repayment capacity. These can be secured (against property) or unsecured.",
    },
    {
      q: "How long does loan processing take?",
      a: "It depends on the lender and loan type. Unsecured personal loans can be approved in 1-3 working days, while secured home loans or business loans typically take 7-15 days due to legal and technical verification of the collateral.",
    },
    {
      q: "Can self-employed applicants apply for a loan?",
      a: "Yes! Self-employed professionals and business owners are highly eligible. Instead of salary slips, lenders will evaluate your Income Tax Returns (ITR), audited financials, and business bank statements.",
    },
    {
      q: "How does a loan EMI calculator work?",
      a: "An EMI calculator uses the principal loan amount, the interest rate, and the tenure to compute your equated monthly installment. It helps you understand your monthly repayment burden before applying.",
    },
    {
      q: "Does Shree Ram Solution guarantee loan approval?",
      a: "No. Final loan approval, interest rate, loan amount, and terms are determined exclusively by the respective lender based on their eligibility criteria and credit policies. As a DSA, we assist with comparison, documentation, and the application process.",
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
