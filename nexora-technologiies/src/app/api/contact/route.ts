import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address" },
        { status: 400 }
      );
    }

    // Create transporter - Using Gmail SMTP
    // For production, set up environment variables:
    // EMAIL_USER and EMAIL_PASS (use App Password for Gmail)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER || "your-email@gmail.com",
        pass: process.env.EMAIL_PASS || "your-app-password",
      },
    });

    // Email content with premium styling
    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; margin: 0; padding: 0; background: #0a1628; }
            .container { max-width: 600px; margin: 0 auto; background: linear-gradient(135deg, #0a1628 0%, #1a2744 100%); border-radius: 16px; overflow: hidden; }
            .header { background: linear-gradient(135deg, #00d4ff 0%, #0098b9 100%); padding: 30px; text-align: center; }
            .header h1 { color: white; margin: 0; font-size: 24px; }
            .content { padding: 40px 30px; color: #e2e8f0; }
            .field { margin-bottom: 24px; }
            .label { color: #00d4ff; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px; }
            .value { color: #f8fafc; font-size: 16px; line-height: 1.6; padding: 12px 16px; background: rgba(255,255,255,0.05); border-radius: 8px; border-left: 3px solid #00d4ff; }
            .message-box { background: rgba(255,255,255,0.03); border-radius: 12px; padding: 20px; border: 1px solid rgba(255,255,255,0.1); }
            .footer { padding: 20px 30px; text-align: center; color: #64748b; font-size: 12px; border-top: 1px solid rgba(255,255,255,0.1); }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🚀 New Contact Form Submission</h1>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">From</div>
                <div class="value">${name}</div>
              </div>
              <div class="field">
                <div class="label">Email</div>
                <div class="value"><a href="mailto:${email}" style="color: #00d4ff; text-decoration: none;">${email}</a></div>
              </div>
              <div class="field">
                <div class="label">Subject</div>
                <div class="value">${subject || "No subject provided"}</div>
              </div>
              <div class="field">
                <div class="label">Message</div>
                <div class="message-box">
                  <div class="value" style="white-space: pre-wrap;">${message}</div>
                </div>
              </div>
            </div>
            <div class="footer">
              <p>This message was sent from the Nexora Technologies website contact form.</p>
              <p>© ${new Date().getFullYear()} Nexora Technologies</p>
            </div>
          </div>
        </body>
      </html>
    `;

    // Send email
    await transporter.sendMail({
      from: `"Nexora Website" <${process.env.EMAIL_USER || "noreply@nexora.com"}>`,
      to: "tiisomabogwane81@gmail.com",
      replyTo: email,
      subject: `[Nexora Contact] ${subject || "New Message"} from ${name}`,
      html: htmlContent,
      text: `
New Contact Form Submission

From: ${name}
Email: ${email}
Subject: ${subject || "No subject provided"}

Message:
${message}

---
Sent from Nexora Technologies website
      `,
    });

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json(
      { error: "Failed to send email. Please try again later." },
      { status: 500 }
    );
  }
}
