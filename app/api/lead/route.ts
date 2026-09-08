import { NextResponse } from "next/server";

/**
 * Lead intake stub.
 *
 * Currently validates shape and logs the lead server-side. Replace the marked
 * block below when the delivery channel is decided — email (e.g. Resend),
 * Google Sheets/Zoho webhook, or a CRM.
 */
export async function POST(request: Request) {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid JSON body" },
      { status: 400 },
    );
  }

  const lead = payload as Record<string, unknown>;

  if (
    typeof lead.name !== "string" ||
    lead.name.trim().length < 2 ||
    typeof lead.mobile !== "string" ||
    !/^[6-9]\d{9}$/.test(lead.mobile) ||
    typeof lead.city !== "string" ||
    lead.city.trim().length < 2 ||
    typeof lead.loanType !== "string" ||
    typeof lead.amount === "undefined"
  ) {
    return NextResponse.json(
      { ok: false, error: "Missing or invalid required fields" },
      { status: 400 },
    );
  }

  // ── TODO: wire up delivery (email / CRM / sheet) here ─────────────────────
  // e.g. await sendEmail({ to: siteConfig.email, subject: "New lead", body: lead })
  console.log("[lead] new enquiry:", JSON.stringify(lead, null, 2));
  // ──────────────────────────────────────────────────────────────────────────

  return NextResponse.json({ ok: true });
}
