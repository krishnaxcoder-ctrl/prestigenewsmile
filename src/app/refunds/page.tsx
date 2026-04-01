"use client";

import { motion } from "framer-motion";
import { RefreshCcw01, Clock, CheckCircle, XCircle, AlertCircle, CreditCard01, File01 } from "@untitledui/icons";
import { Header } from "@/app/components/header";
import { Footer } from "@/app/components/footer";
import { RatingBadge } from "@/components/foundations/rating-badge";

const sections = [
    {
        title: "1. Overview",
        content: `At Prestige Smile, we want you to be completely satisfied with your purchase. This Refund Policy explains your rights and the conditions under which refunds are provided.

This policy applies to:
• Products purchased through our website
• Service bookings (teeth whitening sessions)
• Gift cards

This policy complies with French consumer law (Code de la consommation), EU Directive 2011/83/EU, and applicable international consumer protection laws.`,
    },
    {
        title: "2. 14-Day Legal Withdrawal Right (Droit de Rétractation)",
        content: `YOUR LEGAL RIGHT UNDER EU/FRENCH LAW

In accordance with Articles L.221-18 to L.221-28 of the French Consumer Code, you have the legal right to withdraw from your purchase within 14 days without giving any reason.

2.1 Withdrawal Period
The withdrawal period expires 14 days from:
• For products: The day you (or a third party indicated by you) acquire physical possession of the goods
• For multiple items in one order: The day you receive the last item
• For services: The day the contract was concluded

2.2 How to Exercise Your Right
To exercise your right of withdrawal, you must inform us of your decision by a clear statement:

Email: hello@prestigesmile.ch
Phone: +41 78 300 06 19
Address: Ambilly, France (near Geneva)

You may use the following model withdrawal form (but it is not obligatory):

---
WITHDRAWAL FORM

To: Prestige Smile, Ambilly, France
Email: hello@prestigesmile.ch

I hereby give notice that I withdraw from my contract of sale of the following goods/services:

• Product/Service: ____________________
• Order number: ____________________
• Ordered on: ____________________
• Received on: ____________________

Customer name: ____________________
Customer address: ____________________

Date: ____________________
Signature (if on paper): ____________________
---

2.3 Effects of Withdrawal
If you withdraw from the contract:
• We will reimburse ALL payments received from you, including standard delivery costs
• Reimbursement will be made within 14 days of receiving your withdrawal notice OR receiving the returned goods (whichever is earlier)
• We will use the same payment method you used for the original transaction
• No fee will be charged for this reimbursement

2.4 Return of Goods
• You must return the goods without undue delay and within 14 days of communicating your withdrawal
• You bear the direct cost of returning the goods
• You are liable for any diminished value of the goods resulting from handling beyond what is necessary to establish their nature, characteristics, and functioning`,
    },
    {
        title: "3. Exceptions to the Withdrawal Right",
        content: `The 14-day withdrawal right does NOT apply to:

3.1 Sealed Hygiene Products
Products sealed for health protection or hygiene reasons that have been unsealed after delivery. This includes:
• Teeth whitening kits (once opened)
• Dental care products (once opened)
• Any product where the seal has been broken

3.2 Services Already Performed
Services that have been fully performed with your prior express consent and acknowledgment that you lose your withdrawal right once the service is complete. This includes:
• Teeth whitening sessions already performed
• Services begun at your explicit request before the withdrawal period ends

3.3 Personalized Products
Products made to your specifications or clearly personalized.

3.4 Gift Cards
Gift cards that have been activated or partially/fully redeemed.

3.5 Perishable Products
Products that deteriorate or expire rapidly.

IMPORTANT: If you are unsure whether your product qualifies for withdrawal, contact us before opening or using the product.`,
    },
    {
        title: "4. Extended 30-Day Return Policy",
        content: `Beyond the 14-day legal withdrawal period, we offer an extended voluntary return policy:

4.1 Eligibility
• Products must be returned within 30 days of delivery
• Products must be UNUSED and UNOPENED
• Products must be in original, sealed packaging
• All tags, labels, and seals must be intact
• Proof of purchase is required

4.2 Condition Requirements
Products must be in resalable condition:
• No damage to packaging
• No signs of use or testing
• All accessories and documentation included
• Original seal unbroken

4.3 Non-Returnable Items
The following cannot be returned under our extended policy:
• Opened or used products
• Products without original packaging
• Products with broken seals
• Sale or clearance items (marked as "Final Sale")
• Gift cards
• Services already rendered
• Products damaged by the customer`,
    },
    {
        title: "5. Refund for Products",
        content: `5.1 Refund Eligibility

FULL REFUND (including original shipping):
• Product is defective or damaged on arrival
• Wrong product was sent
• Product does not match description
• Within 14-day withdrawal period (legal right)

FULL REFUND (product price only, excluding shipping):
• 30-day extended return (unused, unopened)
• You changed your mind (unused, unopened)

PARTIAL REFUND OR NO REFUND:
• Product has been opened or used: NO REFUND (hygiene exception)
• Product damaged by customer: NO REFUND
• Missing original packaging: CASE-BY-CASE
• Returned after 30 days: NO REFUND

5.2 Defective Products
If you receive a defective product:
• Contact us within 48 hours of delivery with photos
• We will arrange free return shipping
• You will receive a full refund OR replacement (your choice)
• Refund includes original shipping costs

5.3 Refund Timeline
• Withdrawal (14 days): Refund within 14 days of return receipt
• Extended return (30 days): Refund within 5-7 business days of return receipt
• Defective product: Refund within 5-7 business days of return receipt

Note: Bank processing may take an additional 5-10 business days depending on your payment provider.`,
    },
    {
        title: "6. Refund for Services (Teeth Whitening)",
        content: `6.1 Before Your Appointment

FULL REFUND:
• Cancellation more than 24 hours before appointment
• You are deemed ineligible after health questionnaire review

PARTIAL REFUND (50% of service price):
• Cancellation less than 24 hours before appointment

NO REFUND:
• No-show without notice

6.2 After Your Appointment

NO REFUND for services already performed, as the service cannot be "returned."

However, we may offer remedies in the following cases:

DISSATISFACTION WITH RESULTS:
• Results vary between individuals and are not guaranteed
• We do not offer refunds for results that don't meet expectations
• We may offer a complimentary touch-up session at our discretion

ADVERSE REACTIONS:
• If you experience an adverse reaction and informed us of all medical conditions truthfully, we will review your case
• Contact us immediately if you experience any issues

ELIGIBILITY ERRORS:
• If we performed treatment when you should have been deemed ineligible (and you provided accurate information), you may be entitled to a full refund

6.3 Gift Cards for Services
• Unused gift cards: Refundable within 14 days of purchase
• Partially used gift cards: No refund for remaining balance
• Expired gift cards: No refund`,
    },
    {
        title: "7. How to Request a Refund",
        content: `7.1 Contact Us
Send your refund request to:
Email: hello@prestigesmile.ch
Phone: +41 78 300 06 19

Include the following information:
• Your full name
• Order number
• Date of purchase/delivery
• Reason for refund request
• Photos (if product is defective)

7.2 Response Time
We will respond to your request within 48 hours (business days).

7.3 Return Authorization
For product returns, we will provide:
• Return authorization number
• Return shipping address
• Return instructions
• Prepaid shipping label (for defective products only)

7.4 Ship Your Return
• Pack products securely in original packaging
• Include your return authorization number
• Keep your tracking number as proof of return
• Ship within 14 days of authorization

7.5 Inspection
Upon receiving your return:
• We will inspect the product within 3 business days
• We will notify you of approval or rejection
• If approved, refund will be processed immediately`,
    },
    {
        title: "8. Refund Methods",
        content: `8.1 Original Payment Method
Refunds are issued to the original payment method:
• Card payments: Credited to original card
• Bank transfer: Returned to original account
• Twint: Returned to Twint account
• Revolut: Returned to Revolut account
• Cash payments: Refunded via bank transfer (provide your bank details)

8.2 Processing Time
• Our processing: 5-7 business days after approval
• Bank processing: Additional 5-10 business days
• Total time: Up to 14 business days

8.3 Currency
Refunds are issued in Euros (€). Your bank may apply currency conversion if your account is in a different currency.`,
    },
    {
        title: "9. Return Shipping Costs",
        content: `9.1 Who Pays Return Shipping?

PRESTIGE SMILE PAYS:
• Defective or damaged products
• Wrong product sent
• Product doesn't match description

CUSTOMER PAYS:
• Change of mind returns
• 14-day withdrawal (legal right, but return shipping is customer's responsibility)
• Extended 30-day returns

9.2 Recommended Shipping
We recommend using tracked shipping for all returns. We are not responsible for returns lost in transit without tracking.

9.3 International Returns
For international customers:
• You are responsible for return shipping costs
• Mark package as "RETURNED GOODS" to avoid customs fees
• We are not responsible for customs fees on returns`,
    },
    {
        title: "10. Exchanges",
        content: `We do not offer direct exchanges. To exchange a product:

1. Request a refund for the original item
2. Place a new order for the desired item

This ensures fastest processing and avoids delays.`,
    },
    {
        title: "11. Legal Guarantee (Garantie Légale)",
        content: `11.1 Guarantee of Conformity
Under Articles L.217-1 to L.217-14 of the French Consumer Code, products are covered by a 2-year legal guarantee of conformity.

Within 2 years of delivery:
• The defect is presumed to have existed at delivery (for goods purchased after January 1, 2022)
• You can request repair or replacement
• If repair/replacement is impossible, you can request a refund

11.2 Guarantee Against Hidden Defects
Under Articles 1641-1649 of the Civil Code, you are protected against hidden defects for 2 years from discovery of the defect.

11.3 These Guarantees Are FREE
No charge for:
• Return shipping for guarantee claims
• Repair or replacement
• Labor or materials`,
    },
    {
        title: "12. International Customers",
        content: `12.1 European Union
• 14-day withdrawal right applies
• Legal guarantee applies
• Consumer mediation available

12.2 United Kingdom
• Consumer Rights Act 2015 applies
• 14-day cancellation right
• 30-day right to reject faulty goods
• Repair or replacement for faulty goods

12.3 United States
• No federal cooling-off period for online purchases
• Our 30-day return policy applies
• State consumer protection laws may provide additional rights
• California residents: See CCPA rights in Privacy Policy

12.4 Switzerland
• Swiss Code of Obligations applies
• Our return policy applies

12.5 Canada & Australia
• Our return policy applies
• Local consumer protection laws may provide additional rights

12.6 Import Duties on Refunds
If you paid import duties on your original order, you may be able to reclaim them from your local customs authority when returning goods. We cannot refund import duties.`,
    },
    {
        title: "13. Contact Us",
        content: `For any questions about refunds or returns:

Prestige Smile
Address: Ambilly, France (near Geneva)
Email: hello@prestigesmile.ch
Phone: +41 78 300 06 19
Instagram: @prestige.smile.studio

Business Hours:
Monday to Friday: 10:00 AM - 8:00 PM
Saturday: 10:00 AM - 7:00 PM
Sunday: Closed

We aim to respond to all inquiries within 48 hours.

Consumer Mediation (EU/France):
If you are not satisfied with our response, you may contact our consumer mediator:
[Mediator details to be completed]

European Online Dispute Resolution:
https://ec.europa.eu/consumers/odr`,
    },
];

export default function RefundsPage() {
    return (
        <div className="overflow-x-hidden">
            <Header />
            <main className="bg-primary">
                {/* Hero Header */}
                <section className="border-b border-brand-200 bg-brand-50 px-4 py-12 md:px-8 md:py-10 lg:px-16">
                    <div className="mx-auto max-w-7xl">
                        <nav className="mb-4 flex items-center gap-2 text-sm text-tertiary">
                            <a href="/" className="uppercase transition hover:text-brand-600">Home</a>
                            <span>/</span>
                            <span className="uppercase text-brand-600">Refund Policy</span>
                        </nav>
                        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
                            <div className="max-w-3xl">
                                <motion.h1
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.1 }}
                                    className="text-2xl font-semibold uppercase text-primary md:text-3xl"
                                >
                                    Refund <span className="text-brand-600">Policy</span>
                                </motion.h1>
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    className="mt-4 text-lg text-tertiary"
                                >
                                    Your rights regarding refunds, returns, and cancellations under French and EU consumer law.
                                </motion.p>
                            </div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="hidden shrink-0 md:block"
                            >
                                <RatingBadge rating={4.9} title="14-Day Guarantee" subtitle="Legal Protection" />
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Quick Summary Cards */}
                <section className="border-b border-secondary bg-secondary/30 px-4 py-8 md:px-8 lg:px-16">
                    <div className="mx-auto max-w-7xl">
                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                            <div className="rounded-xl border border-secondary bg-primary p-5">
                                <div className="flex items-center gap-3">
                                    <div className="flex size-10 items-center justify-center rounded-full bg-blue-100">
                                        <File01 className="size-5 text-blue-600" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-primary">14-Day Right</p>
                                        <p className="text-xs text-tertiary">Legal withdrawal</p>
                                    </div>
                                </div>
                            </div>
                            <div className="rounded-xl border border-secondary bg-primary p-5">
                                <div className="flex items-center gap-3">
                                    <div className="flex size-10 items-center justify-center rounded-full bg-green-100">
                                        <RefreshCcw01 className="size-5 text-green-600" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-primary">30-Day Returns</p>
                                        <p className="text-xs text-tertiary">Extended policy</p>
                                    </div>
                                </div>
                            </div>
                            <div className="rounded-xl border border-secondary bg-primary p-5">
                                <div className="flex items-center gap-3">
                                    <div className="flex size-10 items-center justify-center rounded-full bg-purple-100">
                                        <Clock className="size-5 text-purple-600" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-primary">Fast Refunds</p>
                                        <p className="text-xs text-tertiary">5-7 business days</p>
                                    </div>
                                </div>
                            </div>
                            <div className="rounded-xl border border-secondary bg-primary p-5">
                                <div className="flex items-center gap-3">
                                    <div className="flex size-10 items-center justify-center rounded-full bg-amber-100">
                                        <CreditCard01 className="size-5 text-amber-600" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-primary">Original Method</p>
                                        <p className="text-xs text-tertiary">Same payment return</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Refund Eligibility Quick Reference */}
                <section className="border-b border-secondary px-4 py-8 md:px-8 lg:px-16">
                    <div className="mx-auto max-w-7xl">
                        <h2 className="text-xl font-semibold text-primary">Quick Reference: Am I Eligible for a Refund?</h2>
                        <div className="mt-6 grid gap-6 md:grid-cols-2">
                            <div className="rounded-xl border border-green-200 bg-green-50 p-6">
                                <div className="flex items-center gap-3">
                                    <CheckCircle className="size-6 text-green-600" />
                                    <h3 className="font-semibold text-primary">Eligible for Full Refund</h3>
                                </div>
                                <ul className="mt-4 space-y-2">
                                    {[
                                        "Within 14 days, product unopened",
                                        "Product is defective or damaged",
                                        "Wrong product received",
                                        "Product doesn't match description",
                                        "Service cancelled 24+ hours in advance",
                                        "Deemed ineligible for treatment",
                                    ].map((item) => (
                                        <li key={item} className="flex items-start gap-2 text-sm text-tertiary">
                                            <CheckCircle className="mt-0.5 size-4 shrink-0 text-green-500" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="rounded-xl border border-red-200 bg-red-50 p-6">
                                <div className="flex items-center gap-3">
                                    <XCircle className="size-6 text-red-600" />
                                    <h3 className="font-semibold text-primary">NOT Eligible for Refund</h3>
                                </div>
                                <ul className="mt-4 space-y-2">
                                    {[
                                        "Product opened or used (hygiene)",
                                        "Returned after 30 days",
                                        "Service already performed",
                                        "No-show without notice",
                                        "Gift card redeemed",
                                        "Product seized by customs",
                                    ].map((item) => (
                                        <li key={item} className="flex items-start gap-2 text-sm text-tertiary">
                                            <XCircle className="mt-0.5 size-4 shrink-0 text-red-500" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
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
                                <strong className="text-primary">Last Updated:</strong> April 2025
                            </p>
                            <p className="mt-2 text-md text-tertiary">
                                This Refund Policy explains your rights under French consumer law (Code de la consommation) and EU Directive 2011/83/EU, as well as our extended voluntary return policy.
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
                                    <div className="mt-4 whitespace-pre-line text-md leading-relaxed text-tertiary">
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
