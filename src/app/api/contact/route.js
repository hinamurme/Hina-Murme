import nodemailer from "nodemailer";

export const runtime = "nodejs"; // Nodemailer can't run on Edge
export const dynamic = "force-dynamic";

const escapeHtml = (str = "") =>
  String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const isValidEmail = (email) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email).trim());

export async function POST(req) {
  try {
    const body = await req.json().catch(() => null);
    if (!body) {
      return Response.json(
        { ok: false, error: "Invalid request body." },
        { status: 400 }
      );
    }

    const name = String(body.name ?? "").trim();
    const email = String(body.email ?? "").trim();
    const subject = String(body.subject ?? "").trim();
    const message = String(body.message ?? "").trim();

    if (!name || !email || !subject || !message) {
      return Response.json(
        { ok: false, error: "All fields are required." },
        { status: 400 }
      );
    }
    if (!isValidEmail(email)) {
      return Response.json(
        { ok: false, error: "Please enter a valid email address." },
        { status: 400 }
      );
    }
    if (name.length > 100 || email.length > 200 || subject.length > 200) {
      return Response.json(
        { ok: false, error: "Input is too long." },
        { status: 400 }
      );
    }
    if (message.length > 5000) {
      return Response.json(
        { ok: false, error: "Message is too long (max 5000 characters)." },
        { status: 400 }
      );
    }

    const { EMAIL_USER, EMAIL_PASS, EMAIL_TO } = process.env;
    if (!EMAIL_USER || !EMAIL_PASS || !EMAIL_TO) {
      console.error("Missing EMAIL_USER / EMAIL_PASS / EMAIL_TO env vars.");
      return Response.json(
        { ok: false, error: "Email service is not configured." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: EMAIL_USER, pass: EMAIL_PASS },
    });

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeSubject = escapeHtml(subject);
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br/>");

    await transporter.sendMail({
      from: `"Portfolio Contact" <${EMAIL_USER}>`,
      to: EMAIL_TO,
      replyTo: `"${safeName}" <${email}>`,
      subject: `[Portfolio] ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\n${message}`,
      html: `
        <div style="font-family:Arial,sans-serif;line-height:1.6;color:#111">
          <h2 style="margin:0 0 12px">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Subject:</strong> ${safeSubject}</p>
          <hr style="margin:16px 0;border:none;border-top:1px solid #ddd"/>
          <p style="white-space:pre-wrap;margin:0">${safeMessage}</p>
        </div>
      `,
    });

    return Response.json(
      { ok: true, message: "Email sent successfully." },
      { status: 200 }
    );
  } catch (err) {
    console.error("Contact API error:", err);
    return Response.json(
      { ok: false, error: "Failed to send email. Please try again later." },
      { status: 500 }
    );
  }
}