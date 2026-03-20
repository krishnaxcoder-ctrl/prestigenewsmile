"use client";

import { motion } from "framer-motion";
import { Header } from "@/app/components/header";
import { Footer } from "@/app/components/footer";
import { RatingBadge } from "@/components/foundations/rating-badge";

const sections = [
    {
        title: "Information We Collect",
        content: `We collect information you provide directly to us, such as when you create an account, make a purchase, sign up for our newsletter, or contact us for support. This information may include:

• Personal identification information (name, email address, phone number)
• Shipping and billing addresses
• Payment information (processed securely through our payment providers)
• Account preferences and communication preferences
• Information you provide when contacting customer support

We also automatically collect certain information when you visit our website, including:

• Device information (browser type, operating system)
• IP address and approximate location
• Pages viewed and actions taken on our site
• Referral sources and exit pages
• Date and time of visits`,
    },
    {
        title: "How We Use Your Information",
        content: `We use the information we collect for various purposes, including:

• Processing and fulfilling your orders
• Sending order confirmations and shipping updates
• Providing customer support and responding to inquiries
• Sending promotional communications (with your consent)
• Improving our website and services
• Detecting and preventing fraud
• Complying with legal obligations

We will only use your personal information for the purposes described in this policy unless we obtain your consent for other uses.`,
    },
    {
        title: "Information Sharing",
        content: `We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:

• Service Providers: We work with third-party service providers who help us operate our business (payment processors, shipping carriers, email service providers). These providers have access to your information only to perform services on our behalf.

• Legal Requirements: We may disclose your information if required by law or in response to valid legal requests.

• Business Transfers: If we are involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.

• With Your Consent: We may share your information with third parties when you explicitly consent to such sharing.`,
    },
    {
        title: "Data Security",
        content: `We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:

• Encryption of data in transit and at rest
• Secure payment processing through certified providers
• Regular security assessments and updates
• Access controls and authentication measures
• Employee training on data protection

While we strive to protect your information, no method of transmission over the Internet or electronic storage is 100% secure. We cannot guarantee absolute security.`,
    },
    {
        title: "Your Rights",
        content: `Under applicable data protection laws, you have the following rights:

• Access: You can request a copy of the personal information we hold about you.
• Correction: You can request that we correct any inaccurate or incomplete information.
• Deletion: You can request that we delete your personal information (subject to certain exceptions).
• Objection: You can object to the processing of your personal information in certain circumstances.
• Portability: You can request your data in a portable format.
• Withdrawal of Consent: Where processing is based on consent, you can withdraw consent at any time.

To exercise these rights, please contact us at hello@prestigesmile.ch.`,
    },
    {
        title: "Cookies and Tracking",
        content: `We use cookies and similar tracking technologies to enhance your experience on our website. Cookies are small text files stored on your device that help us:

• Remember your preferences and settings
• Understand how you use our website
• Provide personalized content and recommendations
• Analyze website traffic and performance

You can control cookie settings through your browser. However, disabling certain cookies may limit your ability to use some features of our website.`,
    },
    {
        title: "Third-Party Links",
        content: `Our website may contain links to third-party websites or services. We are not responsible for the privacy practices of these external sites. We encourage you to read the privacy policies of any third-party sites you visit.`,
    },
    {
        title: "Children's Privacy",
        content: `Our services are not directed to individuals under the age of 16. We do not knowingly collect personal information from children. If we become aware that we have collected information from a child without parental consent, we will take steps to delete that information.`,
    },
    {
        title: "Changes to This Policy",
        content: `We may update this privacy policy from time to time to reflect changes in our practices or applicable laws. We will notify you of any material changes by posting the updated policy on our website and updating the "Last Updated" date. We encourage you to review this policy periodically.`,
    },
    {
        title: "Contact Us",
        content: `If you have any questions about this privacy policy or our data practices, please contact us:

Email: hello@prestigesmile.ch
Phone: +41 78 300 06 19
Address: Ambilly, near Geneva, Switzerland

We will respond to your inquiry within 30 days.`,
    },
];

export default function PrivacyPage() {
    return (
        <div className="overflow-x-hidden">
            <Header />
            <main className="bg-primary">
                {/* Hero Header */}
                <section className="border-b border-teal-400 bg-teal-50 px-4 py-12 md:px-8 md:py-10 lg:px-16">
                    <div className="mx-auto max-w-7xl">
                        <nav className="mb-4 flex items-center gap-2 text-sm text-tertiary">
                            <a href="/" className="uppercase transition hover:text-teal-600">Home</a>
                            <span>/</span>
                            <span className="uppercase text-teal-600">Privacy Policy</span>
                        </nav>
                        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
                            <div className="max-w-3xl">
                                <motion.h1
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.1 }}
                                    className="text-2xl font-semibold uppercase text-primary md:text-3xl"
                                >
                                    Privacy <span className="text-teal-600">Policy</span>
                                </motion.h1>
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    className="mt-4 text-lg text-tertiary"
                                >
                                    Your privacy matters to us. Learn how we protect your personal information.
                                </motion.p>
                            </div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="shrink-0"
                            >
                                <RatingBadge rating={4.9} title="Data Protected" subtitle="GDPR Compliant" />
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Content */}
                <section className="px-4 py-12 md:px-8 md:py-16 lg:px-16">
                    <div className="mx-auto max-w-7xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="mb-8 rounded-xl bg-brand-50 p-6"
                        >
                            <p className="text-md text-tertiary">
                                <strong className="text-primary">Last Updated:</strong> March 2024
                            </p>
                            <p className="mt-2 text-md text-tertiary">
                                This privacy policy describes how Prestige Smile ("we", "us", or "our") collects, uses, and protects your personal information when you use our website and services.
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
                                    <div className="mt-4 whitespace-pre-line text-mdw leading-relaxed text-tertiary">
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
