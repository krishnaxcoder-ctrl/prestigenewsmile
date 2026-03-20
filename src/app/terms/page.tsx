"use client";

import { motion } from "framer-motion";
import { Header } from "@/app/components/header";
import { Footer } from "@/app/components/footer";

const sections = [
    {
        title: "1. Acceptance of Terms",
        content: `By accessing or using the Prestige Smile website and services, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.

These terms apply to all visitors, users, and customers of our website and services. We reserve the right to modify these terms at any time without prior notice.`,
    },
    {
        title: "2. Products and Services",
        content: `2.1 Product Information
We strive to provide accurate descriptions and images of our products. However, we do not warrant that product descriptions, images, or other content is accurate, complete, or error-free. Colors may vary depending on your device display.

2.2 Service Bookings
Teeth whitening services are subject to availability and confirmation. All bookings must be made through our official booking system or by contacting us directly.

2.3 Professional Results
Results from teeth whitening treatments may vary based on individual factors including natural tooth color, enamel condition, and lifestyle habits. We do not guarantee specific results.`,
    },
    {
        title: "3. Pricing and Payment",
        content: `3.1 Pricing
All prices are displayed in Swiss Francs (CHF) and are inclusive of applicable taxes unless otherwise stated. We reserve the right to change prices at any time without notice.

3.2 Payment Methods
We accept Twint, Revolut, and cash payments. All payments must be made at the time of purchase or service.

3.3 Payment Security
All payment information is processed securely through our trusted payment partners. We do not store your complete payment details on our servers.`,
    },
    {
        title: "4. Orders and Shipping",
        content: `4.1 Order Acceptance
All orders are subject to acceptance and availability. We reserve the right to refuse or cancel any order for any reason, including but not limited to product availability, errors in pricing or product information, or suspected fraud.

4.2 Shipping
We ship to Switzerland, France, Germany, and Italy. Shipping times and costs vary by location. Free shipping is available on orders over CHF 120 to Switzerland.

4.3 Risk of Loss
All purchases are made pursuant to a shipment contract. Risk of loss and title for items pass to you upon delivery of the items to the carrier.`,
    },
    {
        title: "5. Returns and Refunds",
        content: `5.1 Return Policy
We accept returns of unopened and unused products within 30 days of delivery. Products must be in their original packaging.

5.2 Return Process
To initiate a return, contact us at hello@prestigesmile.ch with your order number. We will provide return instructions and a return authorization.

5.3 Refunds
Once your return is received and inspected, we will process your refund within 5-7 business days. Refunds will be issued to the original payment method. Shipping costs are non-refundable.

5.4 Exceptions
The following items cannot be returned: opened or used products, sale items, and gift cards.`,
    },
    {
        title: "6. Cancellation Policy",
        content: `6.1 Product Orders
You may cancel an order before it has been shipped. Once an order has shipped, it cannot be cancelled and must be returned according to our return policy.

6.2 Service Appointments
Please cancel or reschedule appointments at least 24 hours in advance. Late cancellations or no-shows may be charged up to 50% of the service price.`,
    },
    {
        title: "7. Intellectual Property",
        content: `All content on this website, including but not limited to text, graphics, logos, images, and software, is the property of Prestige Smile or its content suppliers and is protected by intellectual property laws.

You may not reproduce, distribute, modify, or create derivative works from any content without our prior written consent.`,
    },
    {
        title: "8. User Accounts",
        content: `8.1 Account Security
You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.

8.2 Accurate Information
You agree to provide accurate, current, and complete information when creating an account and to update your information as necessary.

8.3 Account Termination
We reserve the right to suspend or terminate accounts that violate these terms or engage in fraudulent activity.`,
    },
    {
        title: "9. Limitation of Liability",
        content: `To the maximum extent permitted by law, Prestige Smile shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or goodwill.

Our total liability for any claims arising from these terms or your use of our services shall not exceed the amount you paid to us in the 12 months preceding the claim.`,
    },
    {
        title: "10. Indemnification",
        content: `You agree to indemnify, defend, and hold harmless Prestige Smile and its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses arising from your use of our services or violation of these terms.`,
    },
    {
        title: "11. Governing Law",
        content: `These terms shall be governed by and construed in accordance with the laws of Switzerland. Any disputes arising from these terms or your use of our services shall be subject to the exclusive jurisdiction of the courts of Geneva, Switzerland.`,
    },
    {
        title: "12. Contact Information",
        content: `If you have any questions about these Terms and Conditions, please contact us:

Email: hello@prestigesmile.ch
Phone: +41 78 300 06 19
Address: Ambilly, near Geneva, Switzerland`,
    },
];

export default function TermsPage() {
    return (
        <div className="overflow-x-hidden">
            <Header />
            <main className="bg-primary">
                {/* Hero Header */}
                <div className="relative bg-brand-50 py-12 md:py-16 lg:py-20">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="absolute inset-0 opacity-30" style={{
                            backgroundImage: `radial-gradient(circle at 1px 1px, var(--color-brand-200) 1px, transparent 0)`,
                            backgroundSize: '32px 32px'
                        }} />
                    </div>
                    <div className="relative mx-auto max-w-7xl px-4 text-center md:px-8 lg:px-16">
                        <h1 className="text-2xl font-semibold uppercase tracking-[0.2em] text-primary sm:text-3xl md:text-4xl">
                            Terms & Conditions
                        </h1>
                        <nav className="mt-4 flex items-center justify-center gap-2 text-sm text-tertiary">
                            <a href="/" className="transition hover:text-brand-600">Home</a>
                            <span>/</span>
                            <span className="text-primary">Terms & Conditions</span>
                        </nav>
                    </div>
                </div>

                {/* Content */}
                <section className="px-4 py-12 md:px-8 md:py-16 lg:px-16">
                    <div className="mx-auto max-w-3xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="mb-8 rounded-xl bg-brand-50 p-6"
                        >
                            <p className="text-sm text-tertiary">
                                <strong className="text-primary">Last Updated:</strong> March 2024
                            </p>
                            <p className="mt-2 text-sm text-tertiary">
                                Please read these Terms and Conditions carefully before using our website or services. By using our services, you agree to be bound by these terms.
                            </p>
                        </motion.div>

                        <div className="space-y-10">
                            {sections.map((section, index) => (
                                <motion.div
                                    key={section.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.05 }}
                                >
                                    <h2 className="text-xl font-semibold text-primary">
                                        {section.title}
                                    </h2>
                                    <div className="mt-4 whitespace-pre-line text-sm leading-relaxed text-tertiary">
                                        {section.content}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
