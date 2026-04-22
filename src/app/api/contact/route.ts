import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

const transporter = nodemailer.createTransport({
    host: "smtp.zoho.in",
    port: 465,
    secure: true,
    auth: {
        user: process.env.ZOHO_EMAIL,
        pass: process.env.ZOHO_PASSWORD,
    },
});

interface ContactFormData {
    name: string;
    email: string;
    phone?: string;
    subject: string;
    message: string;
}

export async function POST(request: NextRequest) {
    try {
        const data: ContactFormData = await request.json();

        if (!data.name || !data.email || !data.subject || !data.message) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        const subjectLabels: Record<string, string> = {
            booking: "Book an Appointment",
            products: "Product Inquiry",
            support: "Customer Support",
            other: "Other",
        };

        const emailHtml = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f3f4f6;">
    <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: linear-gradient(135deg, #0d9488 0%, #0f766e 100%); padding: 30px; border-radius: 12px 12px 0 0; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px;">New Contact Message</h1>
            <p style="color: #ccfbf1; margin: 10px 0 0 0;">${subjectLabels[data.subject] || data.subject}</p>
        </div>
        <div style="background-color: white; padding: 30px; border-radius: 0 0 12px 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
            <table style="width: 100%; border-collapse: collapse;">
                <tr>
                    <td style="padding: 10px 0; color: #6b7280; width: 100px; vertical-align: top;">Name:</td>
                    <td style="padding: 10px 0; color: #111827; font-weight: 500;">${data.name}</td>
                </tr>
                <tr>
                    <td style="padding: 10px 0; color: #6b7280; vertical-align: top;">Email:</td>
                    <td style="padding: 10px 0; color: #111827;"><a href="mailto:${data.email}" style="color: #0d9488;">${data.email}</a></td>
                </tr>
                ${data.phone ? `
                <tr>
                    <td style="padding: 10px 0; color: #6b7280; vertical-align: top;">Phone:</td>
                    <td style="padding: 10px 0; color: #111827;"><a href="tel:${data.phone}" style="color: #0d9488;">${data.phone}</a></td>
                </tr>
                ` : ""}
                <tr>
                    <td style="padding: 10px 0; color: #6b7280; vertical-align: top;">Subject:</td>
                    <td style="padding: 10px 0; color: #111827; font-weight: 500;">${subjectLabels[data.subject] || data.subject}</td>
                </tr>
            </table>
            <div style="margin-top: 20px; padding: 20px; background-color: #f9fafb; border-radius: 8px;">
                <h3 style="margin: 0 0 10px 0; color: #0d9488; font-size: 16px;">Message</h3>
                <p style="margin: 0; color: #111827; line-height: 1.6; white-space: pre-wrap;">${data.message}</p>
            </div>
            <div style="margin-top: 25px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center;">
                <p style="margin: 0; color: #6b7280; font-size: 14px;">
                    Reply directly to this email to respond to the customer.
                </p>
            </div>
        </div>
    </div>
</body>
</html>
        `;

        await transporter.sendMail({
            from: `Prestige Smile <${process.env.ZOHO_EMAIL}>`,
            to: process.env.ZOHO_EMAIL!,
            replyTo: data.email,
            subject: `Contact: ${subjectLabels[data.subject] || data.subject} - ${data.name}`,
            html: emailHtml,
        });

        const customerHtml = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f3f4f6;">
    <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: linear-gradient(135deg, #0d9488 0%, #0f766e 100%); padding: 30px; border-radius: 12px 12px 0 0; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px;">Thank you for reaching out</h1>
            <p style="color: #ccfbf1; margin: 10px 0 0 0;">We've received your message</p>
        </div>
        <div style="background-color: white; padding: 30px; border-radius: 0 0 12px 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
            <p style="margin: 0 0 15px 0; color: #111827; font-size: 16px;">Hi ${data.name},</p>
            <p style="margin: 0 0 15px 0; color: #374151; line-height: 1.6;">
                Thanks for contacting <strong>Prestige Smile</strong>. Your message has been received and our team will reply within 24 hours (Mon–Sat).
            </p>
            <div style="margin-top: 20px; padding: 20px; background-color: #f9fafb; border-radius: 8px;">
                <h3 style="margin: 0 0 10px 0; color: #0d9488; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Your message</h3>
                <p style="margin: 0 0 8px 0; color: #6b7280; font-size: 13px;"><strong style="color: #111827;">Subject:</strong> ${subjectLabels[data.subject] || data.subject}</p>
                <p style="margin: 0; color: #111827; line-height: 1.6; white-space: pre-wrap;">${data.message}</p>
            </div>
            <div style="margin-top: 25px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center;">
                <p style="margin: 0 0 5px 0; color: #6b7280; font-size: 14px;">
                    Prestige Smile — Geneva / Ambilly
                </p>
                <p style="margin: 0; color: #6b7280; font-size: 13px;">
                    <a href="mailto:contact@prestige-smile.com" style="color: #0d9488;">contact@prestige-smile.com</a>
                </p>
            </div>
        </div>
    </div>
</body>
</html>
        `;

        try {
            await transporter.sendMail({
                from: `Prestige Smile <${process.env.ZOHO_EMAIL}>`,
                to: data.email,
                subject: "We received your message — Prestige Smile",
                html: customerHtml,
            });
        } catch (err) {
            console.error("Customer confirmation email failed:", err);
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        const message = error instanceof Error ? error.message : String(error);
        console.error("Contact email error:", message);
        return NextResponse.json(
            { error: message },
            { status: 500 }
        );
    }
}
