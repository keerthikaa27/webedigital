import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

type Payload = {
  firstName?: string;
  lastName?: string;
  email?: string;
  company?: string;
  service?: string;
  message?: string;
};

export async function POST(req: NextRequest) {
  const apiKey = process.env.RESEND_API_KEY;
  const sender = process.env.SENDER_EMAIL || "onboarding@resend.dev";
  const inbox = process.env.CONTACT_INBOX;

  // 🔒 Safety checks (same pattern as quote route)
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
    firstName,
    lastName,
    email,
    company,
    service,
    message,
  } = body;

  // ✅ Validation
  if (!firstName || !email ) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 }
    );
  }

  // ✨ Clean HTML (same vibe as quote route)
  const html = `
    <div style="font-family:Inter,Arial,sans-serif;max-width:600px;margin:0 auto;padding:24px;background:#0e1b30;color:#fff;border-radius:16px;">
      
      <h2 style="color:#00c9b1;margin:0 0 16px;">
        New Contact Inquiry
      </h2>

      <table style="width:100%;border-collapse:collapse;color:#fff;">
        <tr>
          <td style="padding:8px 0;color:#94a3b8;">Name</td>
          <td><strong>${firstName} ${lastName || ""}</strong></td>
        </tr>

        <tr>
          <td style="padding:8px 0;color:#94a3b8;">Email</td>
          <td>
            <a href="mailto:${email}" style="color:#00c9b1;">
              ${email}
            </a>
          </td>
        </tr>

        <tr>
          <td style="padding:8px 0;color:#94a3b8;">Company</td>
          <td>${company || "—"}</td>
        </tr>

        <tr>
          <td style="padding:8px 0;color:#94a3b8;">Service</td>
          <td>${service || "—"}</td>
        </tr>
      </table>

      <div style="margin-top:20px;padding:16px;background:rgba(255,255,255,0.05);border-radius:12px;border-left:3px solid #00c9b1;">
        <p style="margin:0;color:#cbd5e1;white-space:pre-wrap;">
          ${message}
        </p>
      </div>

      <p style="margin-top:24px;font-size:12px;color:#64748b;">
        Sent via webedigital.com contact form
      </p>
    </div>
  `;

  try {
    const { data, error } = await resend.emails.send({
      from: sender,
      to: [inbox],
      replyTo: email,
      subject: `New Contact — ${firstName}${company ? ` @ ${company}` : ""}`,
      html,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Email failed to send." },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true, id: data?.id });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Server error." },
      { status: 500 }
    );
  }
}