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

interface OrderEmailData {
    orderNumber: string;
    customerName: string;
    customerEmail: string;
    customerPhone?: string;
    shippingAddress: {
        address: string;
        apartment?: string;
        city: string;
        postalCode: string;
        country: string;
    };
    items: Array<{
        name: string;
        quantity: number;
        price: number;
        size?: string;
    }>;
    subtotal: number;
    shippingCost: number;
    total: number;
    shippingMethod: string;
    paymentMethod: string;
}

export async function POST(request: NextRequest) {
    try {
        const data: OrderEmailData = await request.json();

        const itemsHtml = data.items
            .map(
                (item) => `
                <tr>
                    <td style="padding: 12px; border-bottom: 1px solid #e5e7eb;">${item.name}${item.size ? ` (${item.size})` : ""}</td>
                    <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; text-align: center;">${item.quantity}</td>
                    <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; text-align: right;">€ ${item.price.toFixed(2)}</td>
                    <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; text-align: right;">€ ${(item.price * item.quantity).toFixed(2)}</td>
                </tr>
            `
            )
            .join("");

        const emailHtml = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Order - ${data.orderNumber}</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f3f4f6;">
    <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
        <!-- Header -->
        <div style="background: linear-gradient(135deg, #0d9488 0%, #0f766e 100%); padding: 30px; border-radius: 12px 12px 0 0; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px;">New Order Received!</h1>
            <p style="color: #ccfbf1; margin: 10px 0 0 0;">Order #${data.orderNumber}</p>
        </div>

        <!-- Content -->
        <div style="background-color: white; padding: 30px; border-radius: 0 0 12px 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
            <!-- Customer Details -->
            <div style="margin-bottom: 25px;">
                <h2 style="color: #0d9488; font-size: 18px; margin: 0 0 15px 0; border-bottom: 2px solid #0d9488; padding-bottom: 8px;">Customer Details</h2>
                <table style="width: 100%; border-collapse: collapse;">
                    <tr>
                        <td style="padding: 8px 0; color: #6b7280; width: 140px;">Name:</td>
                        <td style="padding: 8px 0; color: #111827; font-weight: 500;">${data.customerName}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px 0; color: #6b7280;">Email:</td>
                        <td style="padding: 8px 0; color: #111827;"><a href="mailto:${data.customerEmail}" style="color: #0d9488;">${data.customerEmail}</a></td>
                    </tr>
                    ${data.customerPhone ? `
                    <tr>
                        <td style="padding: 8px 0; color: #6b7280;">Phone:</td>
                        <td style="padding: 8px 0; color: #111827;"><a href="tel:${data.customerPhone}" style="color: #0d9488;">${data.customerPhone}</a></td>
                    </tr>
                    ` : ""}
                </table>
            </div>

            <!-- Shipping Address -->
            <div style="margin-bottom: 25px;">
                <h2 style="color: #0d9488; font-size: 18px; margin: 0 0 15px 0; border-bottom: 2px solid #0d9488; padding-bottom: 8px;">Shipping Address</h2>
                <p style="margin: 0; color: #111827; line-height: 1.6;">
                    ${data.shippingAddress.address}${data.shippingAddress.apartment ? `, ${data.shippingAddress.apartment}` : ""}<br>
                    ${data.shippingAddress.postalCode} ${data.shippingAddress.city}<br>
                    ${data.shippingAddress.country}
                </p>
            </div>

            <!-- Order Items -->
            <div style="margin-bottom: 25px;">
                <h2 style="color: #0d9488; font-size: 18px; margin: 0 0 15px 0; border-bottom: 2px solid #0d9488; padding-bottom: 8px;">Order Items</h2>
                <table style="width: 100%; border-collapse: collapse;">
                    <thead>
                        <tr style="background-color: #f9fafb;">
                            <th style="padding: 12px; text-align: left; color: #6b7280; font-weight: 600;">Product</th>
                            <th style="padding: 12px; text-align: center; color: #6b7280; font-weight: 600;">Qty</th>
                            <th style="padding: 12px; text-align: right; color: #6b7280; font-weight: 600;">Price</th>
                            <th style="padding: 12px; text-align: right; color: #6b7280; font-weight: 600;">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${itemsHtml}
                    </tbody>
                </table>
            </div>

            <!-- Order Summary -->
            <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin-bottom: 25px;">
                <h2 style="color: #0d9488; font-size: 18px; margin: 0 0 15px 0;">Order Summary</h2>
                <table style="width: 100%; border-collapse: collapse;">
                    <tr>
                        <td style="padding: 8px 0; color: #6b7280;">Subtotal:</td>
                        <td style="padding: 8px 0; color: #111827; text-align: right;">€ ${data.subtotal.toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px 0; color: #6b7280;">Shipping (${data.shippingMethod}):</td>
                        <td style="padding: 8px 0; color: #111827; text-align: right;">${data.shippingCost === 0 ? "Free" : `€ ${data.shippingCost.toFixed(2)}`}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px 0; color: #6b7280;">Payment Method:</td>
                        <td style="padding: 8px 0; color: #111827; text-align: right; text-transform: capitalize;">${data.paymentMethod}</td>
                    </tr>
                    <tr style="border-top: 2px solid #e5e7eb;">
                        <td style="padding: 12px 0 0 0; color: #111827; font-weight: 700; font-size: 18px;">Total:</td>
                        <td style="padding: 12px 0 0 0; color: #0d9488; font-weight: 700; font-size: 18px; text-align: right;">€ ${data.total.toFixed(2)}</td>
                    </tr>
                </table>
            </div>

            <!-- Footer -->
            <div style="text-align: center; padding-top: 20px; border-top: 1px solid #e5e7eb;">
                <p style="margin: 0; color: #6b7280; font-size: 14px;">
                    This is an automated notification from Prestige Smile
                </p>
            </div>
        </div>
    </div>
</body>
</html>
        `;

        const info = await transporter.sendMail({
            from: `Prestige Smile Orders <${process.env.ZOHO_EMAIL}>`,
            to: "casethemesstudio@gmail.com",
            subject: `New Order #${data.orderNumber} - ${data.customerName}`,
            html: emailHtml,
        });

        const customerHtml = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Order Confirmation - ${data.orderNumber}</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f3f4f6;">
    <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: linear-gradient(135deg, #0d9488 0%, #0f766e 100%); padding: 30px; border-radius: 12px 12px 0 0; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px;">Thank you for your order!</h1>
            <p style="color: #ccfbf1; margin: 10px 0 0 0;">Order #${data.orderNumber}</p>
        </div>
        <div style="background-color: white; padding: 30px; border-radius: 0 0 12px 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
            <p style="margin: 0 0 15px 0; color: #111827; font-size: 16px;">Hi ${data.customerName},</p>
            <p style="margin: 0 0 20px 0; color: #374151; line-height: 1.6;">
                We've received your order and are preparing it for shipment. You'll receive tracking details as soon as it's on the way (typically within 1 business day).
            </p>

            <div style="margin-bottom: 25px;">
                <h2 style="color: #0d9488; font-size: 18px; margin: 0 0 15px 0; border-bottom: 2px solid #0d9488; padding-bottom: 8px;">Shipping to</h2>
                <p style="margin: 0; color: #111827; line-height: 1.6;">
                    ${data.customerName}<br>
                    ${data.shippingAddress.address}${data.shippingAddress.apartment ? `, ${data.shippingAddress.apartment}` : ""}<br>
                    ${data.shippingAddress.postalCode} ${data.shippingAddress.city}<br>
                    ${data.shippingAddress.country}
                </p>
            </div>

            <div style="margin-bottom: 25px;">
                <h2 style="color: #0d9488; font-size: 18px; margin: 0 0 15px 0; border-bottom: 2px solid #0d9488; padding-bottom: 8px;">Your items</h2>
                <table style="width: 100%; border-collapse: collapse;">
                    <thead>
                        <tr style="background-color: #f9fafb;">
                            <th style="padding: 12px; text-align: left; color: #6b7280; font-weight: 600;">Product</th>
                            <th style="padding: 12px; text-align: center; color: #6b7280; font-weight: 600;">Qty</th>
                            <th style="padding: 12px; text-align: right; color: #6b7280; font-weight: 600;">Price</th>
                            <th style="padding: 12px; text-align: right; color: #6b7280; font-weight: 600;">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${itemsHtml}
                    </tbody>
                </table>
            </div>

            <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin-bottom: 25px;">
                <table style="width: 100%; border-collapse: collapse;">
                    <tr>
                        <td style="padding: 8px 0; color: #6b7280;">Subtotal:</td>
                        <td style="padding: 8px 0; color: #111827; text-align: right;">€ ${data.subtotal.toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px 0; color: #6b7280;">Shipping (${data.shippingMethod}):</td>
                        <td style="padding: 8px 0; color: #111827; text-align: right;">${data.shippingCost === 0 ? "Free" : `€ ${data.shippingCost.toFixed(2)}`}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px 0; color: #6b7280;">Payment:</td>
                        <td style="padding: 8px 0; color: #111827; text-align: right; text-transform: capitalize;">${data.paymentMethod}</td>
                    </tr>
                    <tr style="border-top: 2px solid #e5e7eb;">
                        <td style="padding: 12px 0 0 0; color: #111827; font-weight: 700; font-size: 18px;">Total:</td>
                        <td style="padding: 12px 0 0 0; color: #0d9488; font-weight: 700; font-size: 18px; text-align: right;">€ ${data.total.toFixed(2)}</td>
                    </tr>
                </table>
            </div>

            <div style="text-align: center; padding-top: 20px; border-top: 1px solid #e5e7eb;">
                <p style="margin: 0 0 5px 0; color: #6b7280; font-size: 14px;">
                    Questions? Reply to this email or reach us at
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
                to: data.customerEmail,
                replyTo: process.env.ZOHO_EMAIL,
                subject: `Order confirmation #${data.orderNumber} — Prestige Smile`,
                html: customerHtml,
            });
        } catch (err) {
            console.error("Customer order confirmation email failed:", err);
        }

        return NextResponse.json({ success: true, data: { messageId: info.messageId } });
    } catch (error) {
        console.error("Email send error:", error);
        return NextResponse.json(
            { error: "Failed to send email" },
            { status: 500 }
        );
    }
}
