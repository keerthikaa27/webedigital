
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// ── force dynamic so env vars are read at request time on the server ──
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type Payload = {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  message?: string;
  services?: string[];
  goals?: string[];
  budget?: string;
  timeline?: string;
};

const escapeHtml = (s: unknown) =>
  String(s ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const listHtml = (arr?: string[]) =>
  arr && arr.length
    ? arr.map(v => `<span style="display:inline-block;background:#f0f8f7;color:#1a2744;border:1px solid #d7efed;padding:4px 10px;border-radius:999px;font:600 12px 'DM Sans',sans-serif;margin:2px 4px 2px 0">${escapeHtml(v)}</span>`).join("")
    : `<span style="color:#94a3b8;font:400 13px sans-serif">—</span>`;

function buildEmailHtml(p: Payload) {
  const row = (label: string, value: string) => `
    <tr>
      <td style="padding:12px 0;border-bottom:1px solid #eef2f5;vertical-align:top;width:34%">
        <div style="font:700 11px 'DM Sans',sans-serif;color:#2ec4b6;letter-spacing:0.14em;text-transform:uppercase">${label}</div>
      </td>
      <td style="padding:12px 0;border-bottom:1px solid #eef2f5;vertical-align:top">
        <div style="font:600 14px 'DM Sans',sans-serif;color:#1a2744">${value}</div>
      </td>
    </tr>`;

  const safeName    = escapeHtml(p.name)    || "—";
  const safeEmail   = escapeHtml(p.email)   || "—";
  const safePhone   = escapeHtml(p.phone)   || "—";
  const safeCompany = escapeHtml(p.company) || "—";
  const safeMsg     = escapeHtml(p.message) || "—";
  const safeBudget  = escapeHtml(p.budget)  || "—";
  const safeTime    = escapeHtml(p.timeline) || "—";

  return `<!doctype html>
<html><body style="margin:0;background:#f7f8fc;font-family:'DM Sans',Arial,sans-serif;color:#1a2744">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f7f8fc;padding:32px 16px">
    <tr><td align="center">
      <table width="620" cellpadding="0" cellspacing="0" style="max-width:620px;width:100%;background:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #e6ebf1">
        <tr><td style="height:4px;background:linear-gradient(90deg,#2ec4b6,#1a9e93 45%,#f15a22)"></td></tr>
        <tr><td style="padding:28px 32px 8px">
          <div style="font:800 20px 'Poppins',Arial,sans-serif;color:#1a2744;letter-spacing:-0.01em">New Quote Request</div>
          <div style="font:400 13px 'DM Sans',sans-serif;color:#64748b;margin-top:4px">WebeDigital · Global Consultancy</div>
        </td></tr>
        <tr><td style="padding:0 32px 8px">
          <table width="100%" cellpadding="0" cellspacing="0">
            ${row("Full Name", safeName)}
            ${row("Work Email", `<a href="mailto:${safeEmail}" style="color:#2ec4b6;text-decoration:none">${safeEmail}</a>`)}
            ${row("Phone", safePhone)}
            ${row("Company", safeCompany)}
            ${row("Services", listHtml(p.services))}
            ${row("Goals", listHtml(p.goals))}
            ${row("Budget", safeBudget)}
            ${row("Timeline", safeTime)}
            <tr>
              <td colspan="2" style="padding:16px 0 4px">
                <div style="font:700 11px 'DM Sans',sans-serif;color:#2ec4b6;letter-spacing:0.14em;text-transform:uppercase;margin-bottom:8px">Additional Context</div>
                <div style="font:400 14px 'DM Sans',sans-serif;color:#1a2744;background:#f7f8fc;border:1px solid #eef2f5;border-radius:12px;padding:14px;white-space:pre-wrap">${safeMsg}</div>
              </td>
            </tr>
          </table>
        </td></tr>
        <tr><td style="padding:22px 32px 28px">
          <div style="font:400 12px 'DM Sans',sans-serif;color:#94a3b8;border-top:1px solid #eef2f5;padding-top:14px">
            Sent automatically from webedigital.com · Please respond within 4 business hours.
          </div>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body></html>`;
}

export async function POST(req: NextRequest) {
  const apiKey  = process.env.RESEND_API_KEY;
  const sender  = process.env.SENDER_EMAIL  || "onboarding@resend.dev";
  const inbox   = process.env.CONTACT_INBOX;

  if (!apiKey || !inbox) {
    return NextResponse.json(
      { error: "Email service is not configured on the server." },
      { status: 500 }
    );
  }

  let body: Payload;
  try {
    body = (await req.json()) as Payload;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (!body.name || !body.email) {
    return NextResponse.json({ error: "Name and email are required." }, { status: 400 });
  }

  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from: `WebeDigital Quotes <${sender}>`,
      to: [inbox],
      replyTo: body.email,
      subject: `New Quote Request — ${body.name}${body.company ? ` · ${body.company}` : ""}`,
      html: buildEmailHtml(body),
    });

    if (error) {
      return NextResponse.json(
        { error: typeof error === "string" ? error : (error as any)?.message || "Resend error" },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    return NextResponse.json(
      { error: err?.message || "Unexpected server error." },
      { status: 500 }
    );
  }
}

