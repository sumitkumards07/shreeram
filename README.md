# Shree Ram Solution — Loan Consultancy Website

Mobile-first lead-generation site for Shree Ram Solution, a loan consultancy (DSA) on
Kalwar Road, Jaipur. Built with Next.js 14 (App Router) + TypeScript, Tailwind CSS 3.4,
HeroUI, Framer Motion, and react-hook-form + zod.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

## Structure

```
app/            layout, providers, page assembly, /api/lead stub
components/     all page sections (Hero, EligibilityChecker, LoanCards, EMICalculator,
                HowItWorks, WhyChooseUs, Testimonials, LeadForm, FAQ, About, Contact,
                Footer, Header, StickyMobileBar)
lib/siteConfig.ts   ALL business data + copy — edit here, not in components
lib/emiMath.ts      shared reducing-balance EMI math + INR formatting
lib/events.ts       cross-component "open eligibility checker" event
```

## Before launch — placeholder checklist (search `[PLACEHOLDER` in lib/siteConfig.ts)

1. **`hoursTime`** — confirm opening–closing time (currently shows "[Timings to be confirmed]").
2. **`whatsappNumber`** — confirm which phone number receives WhatsApp leads
   (currently defaults to the primary number, `919784308497`).
3. **`gstin`** — fill in to render the GSTIN block in the Footer; leave `null` to hide.
4. **`hero.stats`** — replace the two sample counts (`300+ loans`, `5+ years`) with
   verified numbers.
5. **`testimonials`** — replace every SAMPLE entry with real, consented client feedback.
6. **`partnerLenders`** — the lender block in the Footer stays commented out until a
   genuine tie-up list is confirmed; never enable it speculatively.
7. **`app/api/lead/route.ts`** — leads currently only log to the server console. Wire the
   marked TODO block to email/CRM/sheet delivery.

## Compliance rules baked in

- No "guaranteed approval / lowest rate" claims anywhere — keep it that way when editing copy.
- Every calculated number (calculator, eligibility, card EMI examples) carries the
  "Indicative only, subject to lender approval" caption.
- The Footer disclaimer is verbatim from the brief — do not paraphrase it.
