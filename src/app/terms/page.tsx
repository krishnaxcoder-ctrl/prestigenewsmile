import { Header } from "@/app/components/header";
import { Footer } from "@/app/components/footer";
import { RatingBadge } from "@/components/foundations/rating-badge";

const sections = [
    {
        title: "1. General Information (Informations Générales)",
        content: `These General Terms and Conditions of Sale (Conditions Générales de Vente - CGV) govern all sales of products and services offered by Prestige Smile through our website and at our studio location.

Seller Information:
Company Name: Prestige Smile
Address: 1 rue Jean Moulin, 74100 Ambilly, France
Email: hello@prestigesmile.ch
Phone: +41 78 300 06 19
SIRET: [To be completed]

These terms apply to all customers (consumers) residing in France and the European Union. By placing an order or booking a service, you agree to be bound by these terms.

These CGV are available on our website and can be provided upon request.`,
    },
    {
        title: "2. Products and Services",
        content: `2.1 Product Descriptions
We strive to provide accurate descriptions, images, and pricing for all products. However, we do not warrant that descriptions are error-free. Product photographs are for illustrative purposes; actual products may vary slightly in color or appearance due to screen display differences.

2.2 Teeth Whitening Services
Our cosmetic teeth whitening services are NON-MEDICAL treatments performed by trained technicians. Services are subject to availability and eligibility requirements. Please refer to our Service Terms & Disclaimer for complete information.

2.3 Service Offerings:
• Radiance Session (1 session): €99
• Complete Treatment (2 sessions): €169
• Maintenance Session: €79
• Duo Offer: 10% discount for two people

2.4 Availability
All products and services are offered subject to availability. We reserve the right to discontinue products or modify services at any time.`,
    },
    {
        title: "3. Pricing and Payment (Prix et Paiement)",
        content: `3.1 Pricing
All prices displayed are in Euros (€) and include all applicable taxes (TTC - Toutes Taxes Comprises). Prices are valid at the time of order and are subject to change without notice.

Shipping costs (€3.90, free over €20) are displayed separately and added at checkout.

3.2 Payment Methods
We accept the following payment methods:
• Twint
• Revolut
• Cash (at studio location)
• Bank transfer

3.3 Payment Terms
• For online orders: Full payment is required at the time of order
• For in-studio services: Payment is due at the time of service
• Gift cards: Paid in full at time of purchase

3.4 Payment Security
All online payments are processed securely through our trusted payment partners. We do not store complete payment card details on our servers.

3.5 Invoices
An invoice will be provided for all purchases upon request. For service bookings, a receipt will be provided after treatment.`,
    },
    {
        title: "4. Orders (Commandes)",
        content: `4.1 Order Process
To place an order:
1. Select products and add to cart
2. Review your cart and proceed to checkout
3. Enter shipping and billing information
4. Select payment method
5. Review and confirm your order (double-click validation as required by French law)
6. Receive order confirmation by email

4.2 Order Confirmation
Your order is confirmed only after:
• We receive your payment in full
• You receive an order confirmation email
• The products are available in stock

4.3 Order Acceptance
We reserve the right to refuse or cancel any order for legitimate reasons, including:
• Product unavailability
• Pricing or product information errors
• Suspected fraud
• Incomplete or inaccurate information
• Delivery to restricted areas

4.4 Order Modification
Once an order is confirmed, it cannot be modified. To make changes, you must cancel the order (if not yet shipped) and place a new order.`,
    },
    {
        title: "5. Service Bookings (Réservations)",
        content: `5.1 Booking Process
Service appointments must be booked in advance through:
• Our online booking system
• Phone: +41 78 300 06 19
• Instagram: @prestige.smile.studio

5.2 Booking Confirmation
Your appointment is confirmed only after:
• You receive a booking confirmation
• You complete the health questionnaire
• You are deemed eligible for treatment

5.3 Cancellation Policy
• Cancellations must be made at least 24 hours in advance
• Cancellations with less than 24 hours notice may incur a fee of up to 50% of the service price
• No-shows may be charged the full service price
• We reserve the right to cancel appointments due to unforeseen circumstances

5.4 Late Arrivals
If you arrive more than 15 minutes late, we may need to reschedule your appointment to ensure quality service for all clients.

5.5 Eligibility
All clients must complete a health questionnaire before their first treatment. We reserve the right to refuse service if contraindications are identified. Refunds will be provided in such cases.`,
    },
    {
        title: "6. Shipping and Delivery (Livraison)",
        content: `6.1 Delivery Zones
We deliver to:
• France (Metropolitan)
• International destinations

6.2 Shipping Costs and Times
• Shipping fee: €3.90
• Free shipping on orders over €20
• Estimated delivery: 2-4 business days
• All shipments include tracking

6.3 Delivery Process
Products are dispatched within 1-3 business days after payment confirmation. You will receive a shipping confirmation with tracking information.

6.4 Delivery Delays
Delivery times are estimates and not guaranteed. We are not responsible for delays caused by:
• Carrier issues
• Customs processing (international orders)
• Force majeure events
• Incorrect address provided

6.5 Risk Transfer
In accordance with Article L.216-4 of the French Consumer Code, risk of loss transfers to you upon physical delivery of the products.

6.6 Damaged or Lost Packages
If your package arrives damaged or is lost in transit:
• Inspect packages upon delivery
• Note any damage on the delivery receipt
• Contact us within 48 hours with photos
• We will arrange replacement or refund`,
    },
    {
        title: "7. Right of Withdrawal (Droit de Rétractation)",
        content: `7.1 14-Day Withdrawal Right
In accordance with Articles L.221-18 to L.221-28 of the French Consumer Code, you have the right to withdraw from your purchase within 14 days without giving any reason.

The withdrawal period expires 14 days from the day:
• You acquire physical possession of the goods
• For services: the day of contract conclusion

7.2 How to Exercise Your Right
To exercise your right of withdrawal, you must inform us of your decision by:
• Email: hello@prestigesmile.ch
• Using the withdrawal form below

You must clearly state your intention to withdraw. We recommend using the following model form:

"I hereby give notice that I withdraw from my contract for the sale of the following goods/services:
Ordered on [date] / Received on [date]
Order number: [number]
Customer name: [name]
Customer address: [address]
Date: [date]
Signature (if sent on paper)"

7.3 Effects of Withdrawal
We will reimburse all payments received, including initial delivery costs (except additional costs from choosing non-standard delivery), within 14 days of receiving your withdrawal notice OR receiving the returned goods, whichever is earlier.

Refunds will be made using the same payment method as your original purchase.

7.4 Return Conditions
• Products must be returned unused, unopened, and in original packaging
• You bear the cost of return shipping
• You are liable for any diminished value resulting from handling beyond what is necessary to establish the nature, characteristics, and functioning of the goods

7.5 Exceptions to Withdrawal Right
The right of withdrawal does NOT apply to:
• Sealed goods that have been opened after delivery (hygiene products)
• Personalized or custom-made products
• Services fully performed with your prior express consent
• Gift cards (once activated/used)
• Perishable goods`,
    },
    {
        title: "8. Returns and Refunds (Retours et Remboursements)",
        content: `8.1 Extended Return Policy
Beyond the 14-day withdrawal period, we offer a 30-day return policy for unopened products.

8.2 Return Eligibility
Products must be:
• Unopened and unused
• In original packaging
• Returned within 30 days of delivery
• Accompanied by proof of purchase

8.3 Non-Returnable Items
The following cannot be returned:
• Opened or used products (for hygiene reasons)
• Products without original packaging
• Sale or clearance items (final sale)
• Gift cards
• Services already rendered

8.4 Return Process
1. Contact us at hello@prestigesmile.ch with your order number
2. Receive return authorization and instructions
3. Ship products securely in original packaging
4. We inspect returned items upon receipt
5. Refund processed within 5-7 business days after approval

8.5 Refund Method
Refunds are issued to the original payment method. Bank processing may take an additional 5-10 business days.

8.6 Return Shipping
• Standard returns: Customer pays return shipping
• Defective products: We cover return shipping
• Wrong item received: We cover return shipping`,
    },
    {
        title: "9. Legal Guarantee (Garantie Légale)",
        content: `9.1 Guarantee of Conformity
In accordance with Articles L.217-1 to L.217-14 of the French Consumer Code, you benefit from a legal guarantee of conformity for products purchased.

You have 2 years from delivery to report a lack of conformity. Within this period:
• The lack of conformity is presumed to exist at the time of delivery (for goods purchased after January 1, 2022)
• You do not need to prove the defect existed at delivery
• You can choose repair or replacement

9.2 Guarantee Against Hidden Defects
Under Articles 1641-1649 of the Civil Code, you benefit from the legal guarantee against hidden defects that render the product unfit for its intended use or significantly diminish such use.

You have 2 years from discovery of the defect to take action.

9.3 Exercising Your Guarantee Rights
To exercise these rights, contact us with:
• Proof of purchase
• Description of the defect
• Photos if applicable

We will not charge for labor, materials, or return shipping for legitimate guarantee claims.`,
    },
    {
        title: "10. Intellectual Property (Propriété Intellectuelle)",
        content: `All content on this website is the exclusive property of Prestige Smile or its licensors and is protected by French and international intellectual property laws.

This includes:
• Text, graphics, and images
• Logos and trademarks
• Website design and layout
• Software and code
• Marketing materials

You may NOT:
• Reproduce, copy, or distribute content without authorization
• Modify or create derivative works
• Use content for commercial purposes
• Remove copyright or trademark notices

Limited license: You may view and print content for personal, non-commercial use only.`,
    },
    {
        title: "11. Personal Data (Données Personnelles)",
        content: `We collect and process personal data in accordance with the General Data Protection Regulation (GDPR) and French data protection laws.

For complete information about:
• What data we collect
• How we use your data
• Your rights regarding your data
• How to exercise your rights

Please consult our Privacy Policy at /privacy.

Data Controller: Prestige Smile
Contact: hello@prestigesmile.ch`,
    },
    {
        title: "12. User Accounts (Comptes Utilisateurs)",
        content: `12.1 Account Creation
Creating an account is optional but provides benefits such as:
• Order history access
• Faster checkout
• Wishlist functionality

12.2 Account Security
You are responsible for:
• Maintaining confidentiality of login credentials
• All activities under your account
• Notifying us of unauthorized access

12.3 Account Information
You agree to provide accurate, current information and update it as necessary.

12.4 Account Termination
We may suspend or terminate accounts that:
• Violate these terms
• Engage in fraudulent activity
• Remain inactive for extended periods

You may request account deletion at any time by contacting us.`,
    },
    {
        title: "13. Limitation of Liability (Limitation de Responsabilité)",
        content: `13.1 Scope of Liability
To the maximum extent permitted by French law, Prestige Smile shall not be liable for:
• Indirect, incidental, or consequential damages
• Loss of profits, data, or business opportunities
• Damages arising from misuse of products
• Results of cosmetic treatments (see Service Disclaimer)
• Third-party actions or content

13.2 Maximum Liability
Our total liability for any claim shall not exceed the amount you paid for the specific product or service giving rise to the claim.

13.3 Consumer Rights
Nothing in these terms limits or excludes:
• Our liability for death or personal injury caused by negligence
• Our liability for fraud or fraudulent misrepresentation
• Your statutory rights as a consumer under French law
• Any liability that cannot be excluded by law`,
    },
    {
        title: "14. Force Majeure",
        content: `We shall not be liable for any failure or delay in performing our obligations due to circumstances beyond our reasonable control, including but not limited to:
• Natural disasters
• War, terrorism, or civil unrest
• Government actions or regulations
• Pandemics or epidemics
• Strikes or labor disputes
• Supply chain disruptions
• Technical failures or cyber attacks

We will notify you of any force majeure event and take reasonable steps to minimize its effects.`,
    },
    {
        title: "15. International Orders",
        content: `15.1 Scope
These terms apply to all orders placed through our website, regardless of your location.

15.2 Import Duties and Taxes
For orders shipped outside the European Union:
• Your order may be subject to import duties, taxes, and customs fees
• These charges are NOT included in our prices
• You are solely responsible for paying all import-related charges
• We cannot predict the amount of these charges
• Refunds are not provided for packages seized by customs

15.3 Product Compliance
• Our products comply with EU cosmetic regulations
• We cannot guarantee compliance with regulations in other countries
• Some ingredients permitted in the EU may be restricted elsewhere
• It is your responsibility to verify products can be legally imported
• We are not liable for products confiscated by customs authorities

15.4 Currency
All prices are displayed in Euros (€). Currency conversion rates are determined by your payment provider.

15.5 Consumer Rights by Region

EUROPEAN UNION CONSUMERS:
• 14-day withdrawal right applies
• Legal guarantee of conformity (2 years)
• Consumer mediation available

UNITED KINGDOM CONSUMERS:
• Consumer Rights Act 2015 applies
• 14-day cancellation right
• Right to reject faulty goods within 30 days
• Repair or replacement for faulty goods

UNITED STATES CONSUMERS:
• No federal cooling-off period for online purchases (unless state law provides one)
• Our 30-day return policy applies
• California residents: See Privacy Policy for CCPA rights
• State consumer protection laws may provide additional rights

SWISS CONSUMERS:
• Swiss Code of Obligations applies
• Our return policy applies as stated

CANADIAN CONSUMERS:
• Provincial consumer protection laws may apply
• Our return policy applies as stated

AUSTRALIAN CONSUMERS:
• Australian Consumer Law provides statutory guarantees
• Products come with guarantees that cannot be excluded
• You are entitled to a replacement or refund for major failures

15.6 Language
These terms are provided in English. In case of any conflict with translations, the English version shall prevail.`,
    },
    {
        title: "16. Dispute Resolution (Règlement des Litiges)",
        content: `16.1 Amicable Resolution
In case of dispute, please contact us first to seek an amicable resolution:
Email: hello@prestigesmile.ch

We commit to responding within 30 days.

16.2 Consumer Mediation (EU/France)
In accordance with Articles L.611-1 to L.616-3 of the French Consumer Code, EU consumers have the right to free recourse to a consumer mediator.

Consumer Mediator: [To be completed]
Website: [To be completed]

You may contact the mediator within one year of your written complaint to us.

16.3 Online Dispute Resolution (EU)
For EU consumers, you may also use the European Online Dispute Resolution platform:
https://ec.europa.eu/consumers/odr

16.4 Jurisdiction and Applicable Law
• These terms are governed by French law
• For EU consumers: Disputes shall be subject to the courts of your place of residence or French courts, at your choice
• For non-EU consumers: Disputes shall be subject to the exclusive jurisdiction of the French courts
• Mandatory consumer protection laws of your country of residence may still apply

16.5 International Dispute Resolution
For consumers outside the EU:
• UK consumers may contact Citizens Advice (www.citizensadvice.org.uk)
• US consumers may contact the Better Business Bureau (www.bbb.org) or their state Attorney General
• Australian consumers may contact the Australian Competition and Consumer Commission (www.accc.gov.au)
• Canadian consumers may contact their provincial consumer protection office`,
    },
    {
        title: "17. Modifications to Terms",
        content: `We reserve the right to modify these terms at any time.

Changes will be:
• Posted on our website
• Effective immediately for new orders
• Subject to prior notice for material changes affecting existing orders

The terms applicable to your order are those in effect at the time of order placement.

We encourage you to review these terms periodically.`,
    },
    {
        title: "18. Severability",
        content: `If any provision of these terms is held invalid or unenforceable:
• The remaining provisions shall continue in full force
• The invalid provision shall be modified to the minimum extent necessary to make it valid
• The modification shall reflect the original intent of the provision`,
    },
    {
        title: "19. Contact Information",
        content: `For any questions about these Terms and Conditions:

Prestige Smile
Address: 1 rue Jean Moulin, 74100 Ambilly, France
Email: hello@prestigesmile.ch
Phone: +41 78 300 06 19
Instagram: @prestige.smile.studio

Business Hours:
Monday to Friday: 10:00 AM - 8:00 PM
Saturday: 10:00 AM - 7:00 PM
Sunday: Closed

We will respond to all inquiries within 30 days.`,
    },
];

export default function TermsPage() {
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
                            <span className="uppercase text-brand-600">Terms & Conditions</span>
                        </nav>
                        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
                            <div className="max-w-3xl">
                                <h1 className="text-2xl font-semibold uppercase text-primary md:text-3xl">
                                    Terms & <span className="text-brand-600">Conditions</span>
                                </h1>
                                <p className="mt-4 text-lg text-tertiary">
                                    Conditions Générales de Vente (CGV) - Please read carefully before using our services.
                                </p>
                            </div>
                            <div className="hidden shrink-0 md:block">
                                <RatingBadge rating={4.9} title="Trusted Service" subtitle="Consumer Protected" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Content */}
                <section className="px-4 py-12 md:px-8 md:py-16 lg:px-16">
                    <div className="mx-auto max-w-7xl">
                        <div className="mb-8 rounded-xl bg-brand-50 p-6">
                            <p className="text-md text-tertiary">
                                <strong className="text-primary">Last Updated:</strong> April 2025
                            </p>
                            <p className="mt-2 text-md text-tertiary">
                                These General Terms and Conditions of Sale govern all purchases and service bookings with Prestige Smile. By placing an order or booking a service, you accept these terms in full.
                            </p>
                        </div>

                        <div className="space-y-10">
                            {sections.map((section, index) => (
                                <div key={section.title}>
                                    <h2 className="text-xl font-semibold text-primary">
                                        {section.title}
                                    </h2>
                                    <div className="mt-4 whitespace-pre-line text-md leading-relaxed text-tertiary">
                                        {section.content}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
