import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

type Payload = {
  service?: string;
  budget?: string;
  timeline?: string;
  priority?: string;
  name?: string;
  email?: string;
  company?: string;
  slot?: string;
};

export async function POST(req: NextRequest) {
  const apiKey = process.env.RESEND_API_KEY;
  const sender = process.env.SENDER_EMAIL || "onboarding@resend.dev";
  const inbox = process.env.CONTACT_INBOX;

  // ── Safety checks ─────────────────────────────
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
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 }
    );
  }

  const {
    service,
    budget,
    timeline,
    priority,
    name,
    email,
    company,
    slot,
  } = body;

  // ── Validation ───────────────────────────────
  if (
    !service ||
    !budget ||
    !timeline ||
    !name ||
    !email ||
    !slot
  ) {
    return NextResponse.json(
      { error: "Missing required booking details." },
      { status: 400 }
    );
  }

  // ── Email HTML ───────────────────────────────
  const html = `
    <div style="font-family:Inter,Arial,sans-serif;max-width:620px;margin:0 auto;padding:28px;background:#0e1b30;color:#fff;border-radius:18px;">

      <h2 style="color:#00c9b1;margin:0 0 20px;">
        New Strategy Call Booking
      </h2>

      <table style="width:100%;border-collapse:collapse;color:#fff;">
        
        <tr>
          <td style="padding:10px 0;color:#94a3b8;">Name</td>
          <td><strong>${name}</strong></td>
        </tr>

        <tr>
          <td style="padding:10px 0;color:#94a3b8;">Email</td>
          <td>
            <a href="mailto:${email}" style="color:#00c9b1;">
              ${email}
            </a>
          </td>
        </tr>

        <tr>
          <td style="padding:10px 0;color:#94a3b8;">Company</td>
          <td>${company || "—"}</td>
        </tr>

        <tr>
          <td style="padding:10px 0;color:#94a3b8;">Service</td>
          <td>${service}</td>
        </tr>

        <tr>
          <td style="padding:10px 0;color:#94a3b8;">Budget</td>
          <td>${budget}</td>
        </tr>

        <tr>
          <td style="padding:10px 0;color:#94a3b8;">Timeline</td>
          <td>${timeline}</td>
        </tr>

        <tr>
          <td style="padding:10px 0;color:#94a3b8;">Priority</td>
          <td>${priority || "—"}</td>
        </tr>

        <tr>
          <td style="padding:10px 0;color:#94a3b8;">Preferred Slot</td>
          <td>
            <strong style="color:#00c9b1;">
              ${slot}
            </strong>
          </td>
        </tr>

      </table>

      <div style="margin-top:24px;padding:18px;background:rgba(255,255,255,0.05);border-radius:14px;border-left:3px solid #00c9b1;">
        <p style="margin:0;color:#cbd5e1;font-size:14px;line-height:1.7;">
          A new consultation request has been submitted through the booking modal.
        </p>
      </div>

      <p style="margin-top:28px;font-size:12px;color:#64748b;">
        Sent via webedigital.com booking modal
      </p>

    </div>
  `;

  try {
    const { data, error } = await resend.emails.send({
      from: sender,
      to: [inbox],
      replyTo: email,
      subject: `New Booking — ${name}${company ? ` @ ${company}` : ""}`,
      html,
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        { error: "Email failed to send." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      ok: true,
      id: data?.id,
    });
  } catch (err) {
    console.error("Booking API error:", err);

    return NextResponse.json(
      { error: "Server error." },
      { status: 500 }
    );
  }
}