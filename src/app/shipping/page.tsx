import { Truck01, RefreshCcw01, Package, Clock, Globe01, CheckCircle, AlertCircle, File01 } from "@untitledui/icons";
import { Header } from "@/app/components/header";
import { Footer } from "@/app/components/footer";
import { RatingBadge } from "@/components/foundations/rating-badge";

const shippingOptions = [
    {
        name: "Fast Shipping",
        price: "€3.90",
        time: "2 to 4 business days",
        description: "With tracking • Free on orders over €20",
        icon: Truck01,
    },
];

const deliveryZones = [
    { country: "France (Metropolitan)", time: "2-4 business days", cost: "€3.90 (Free over €20)", duties: "None" },
    { country: "Belgium, Germany, Italy, Spain", time: "3-5 business days", cost: "€3.90 (Free over €20)", duties: "None (EU)" },
    { country: "Other EU Countries", time: "4-7 business days", cost: "€3.90 (Free over €20)", duties: "None (EU)" },
    { country: "Switzerland", time: "3-5 business days", cost: "€3.90 (Free over €20)", duties: "May apply" },
    { country: "United Kingdom", time: "5-8 business days", cost: "€3.90 (Free over €20)", duties: "May apply" },
    { country: "USA, Canada", time: "7-14 business days", cost: "€3.90 (Free over €20)", duties: "May apply" },
    { country: "Other International", time: "10-21 business days", cost: "€3.90 (Free over €20)", duties: "May apply" },
];

const returnSteps = [
    {
        step: 1,
        title: "Contact Us",
        description: "Email us at  contact@prestige-smile.com with your order number and reason for return within 14 days of delivery.",
    },
    {
        step: 2,
        title: "Receive Authorization",
        description: "We'll send you a return authorization and instructions within 24-48 hours.",
    },
    {
        step: 3,
        title: "Ship Your Return",
        description: "Pack items securely in original packaging and ship to our address. Keep your tracking number.",
    },
    {
        step: 4,
        title: "Receive Refund",
        description: "Once received and inspected, your refund will be processed within 14 days to your original payment method.",
    },
];

export default function ShippingPage() {
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
                            <span className="uppercase text-brand-600">Shipping & Returns</span>
                        </nav>
                        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
                            <div className="max-w-3xl">
                                <h1 className="text-2xl font-semibold uppercase text-primary md:text-3xl">
                                    Shipping & <span className="text-brand-600">Returns</span>
                                </h1>
                                <p className="mt-4 text-lg text-tertiary">
                                    Fast shipping with tracking. 14-day legal withdrawal right for EU consumers.
                                </p>
                            </div>
                            <div className="hidden shrink-0 md:block">
                                <RatingBadge rating={4.9} title="Free Shipping" subtitle="On orders over €20" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Content */}
                <section className="px-4 py-12 md:px-8 md:py-16 lg:px-16">
                    <div className="mx-auto max-w-7xl">
                        {/* Shipping Options */}
                        <div>
                            <h2 className="text-2xl font-semibold text-primary">
                                Shipping Options
                            </h2>
                            <p className="mt-2 text-tertiary">
                                All orders are shipped with tracking for your peace of mind.
                            </p>

                            <div className="mt-8 grid gap-4 sm:grid-cols-2">
                                {shippingOptions.map((option) => (
                                    <div
                                        key={option.name}
                                        className="rounded-2xl border border-secondary bg-primary p-6"
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-brand-50">
                                                <option.icon className="size-6 text-brand-600" />
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-primary">{option.name}</h3>
                                                <p className="text-sm text-tertiary">{option.time}</p>
                                            </div>
                                        </div>
                                        <div className="mt-4 flex items-center justify-between">
                                            <span className="text-lg font-bold text-brand-600">{option.price}</span>
                                            <span className="text-sm text-tertiary">{option.description}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Delivery Zones */}
                        <div className="mt-16">
                            <div className="flex items-center gap-3">
                                <Globe01 className="size-6 text-brand-600" />
                                <h2 className="text-2xl font-semibold text-primary">
                                    Delivery Zones
                                </h2>
                            </div>
                            <p className="mt-2 text-tertiary">
                                We deliver to France, EU countries, and internationally.
                            </p>

                            <div className="mt-6 overflow-hidden overflow-x-auto rounded-xl border border-secondary">
                                <table className="w-full">
                                    <thead className="bg-secondary">
                                        <tr>
                                            <th className="px-6 py-4 text-left text-sm font-semibold text-primary">Destination</th>
                                            <th className="px-6 py-4 text-left text-sm font-semibold text-primary">Delivery Time</th>
                                            <th className="px-6 py-4 text-left text-sm font-semibold text-primary">Shipping Cost</th>
                                            <th className="px-6 py-4 text-left text-sm font-semibold text-primary">Import Duties</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-secondary">
                                        {deliveryZones.map((zone) => (
                                            <tr key={zone.country}>
                                                <td className="px-6 py-4 text-sm text-primary">{zone.country}</td>
                                                <td className="px-6 py-4 text-sm text-tertiary">{zone.time}</td>
                                                <td className="px-6 py-4 text-sm text-tertiary">{zone.cost}</td>
                                                <td className="px-6 py-4 text-sm text-tertiary">{zone.duties}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* International Orders Section */}
                        <div className="mt-16">
                            <div className="flex items-center gap-3">
                                <Globe01 className="size-6 text-purple-600" />
                                <h2 className="text-2xl font-semibold text-primary">
                                    International Orders
                                </h2>
                            </div>
                            <p className="mt-2 text-tertiary">
                                Important information for customers ordering from outside the European Union.
                            </p>

                            {/* Import Duties Disclaimer */}
                            <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-6">
                                <div className="flex items-center gap-2">
                                    <AlertCircle className="size-5 text-amber-600" />
                                    <h3 className="font-semibold text-primary">Import Duties, Taxes & Customs Fees</h3>
                                </div>
                                <div className="mt-4 space-y-3 text-sm text-tertiary">
                                    <p>
                                        <strong>For orders shipped outside the European Union (including UK, Switzerland, USA, Canada, and other countries):</strong>
                                    </p>
                                    <ul className="ml-4 list-disc space-y-2">
                                        <li>Your order may be subject to <strong>import duties, taxes, and customs fees</strong> upon arrival in your country.</li>
                                        <li>These charges are <strong>NOT included</strong> in our product prices or shipping costs.</li>
                                        <li>You, the customer, are <strong>solely responsible</strong> for paying all import duties, customs fees, VAT, and any other taxes imposed by your country.</li>
                                        <li>We have <strong>no control</strong> over these charges and cannot predict their amount.</li>
                                        <li>Customs policies vary by country. Please contact your local customs office for information.</li>
                                    </ul>
                                    <p className="mt-4 font-medium text-primary">
                                        By placing an international order, you accept full responsibility for all import-related charges.
                                    </p>
                                </div>
                            </div>

                            {/* Product Compliance Warning */}
                            <div className="mt-6 rounded-2xl border border-red-200 bg-red-50 p-6">
                                <div className="flex items-center gap-2">
                                    <AlertCircle className="size-5 text-red-600" />
                                    <h3 className="font-semibold text-primary">Product Compliance & Legal Restrictions</h3>
                                </div>
                                <div className="mt-4 space-y-3 text-sm text-tertiary">
                                    <p>
                                        <strong>Important:</strong> Teeth whitening products and cosmetic items may be subject to different regulations in different countries.
                                    </p>
                                    <ul className="ml-4 list-disc space-y-2">
                                        <li>Our products comply with <strong>EU regulations</strong> for cosmetic products.</li>
                                        <li>We <strong>cannot guarantee</strong> that our products meet the regulatory requirements of your country.</li>
                                        <li>Some ingredients permitted in the EU may be <strong>restricted or prohibited</strong> in other countries.</li>
                                        <li>It is <strong>your responsibility</strong> to verify that products can be legally imported into your country.</li>
                                        <li>Products may be <strong>seized or destroyed</strong> by customs if they do not comply with local regulations.</li>
                                        <li>We are <strong>not liable</strong> for products confiscated by customs authorities.</li>
                                    </ul>
                                    <p className="mt-4 font-medium text-primary">
                                        We recommend checking your local regulations before ordering. Refunds are not provided for products seized by customs.
                                    </p>
                                </div>
                            </div>

                            {/* Customs Delays */}
                            <div className="mt-6 rounded-2xl border border-secondary bg-primary p-6">
                                <h3 className="font-semibold text-primary">Customs Processing & Delays</h3>
                                <div className="mt-4 space-y-3 text-sm text-tertiary">
                                    <p>International shipments may experience delays due to customs processing:</p>
                                    <ul className="ml-4 list-disc space-y-2">
                                        <li>Delivery times shown are <strong>estimates</strong> and do not include customs processing time.</li>
                                        <li>You may be contacted by customs or the carrier to provide documentation or pay duties.</li>
                                        <li>Failure to respond to customs requests may result in package return or destruction.</li>
                                        <li>We are not responsible for delays caused by customs inspections.</li>
                                        <li>Tracking may show limited updates while package is in customs.</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Refused/Returned Packages */}
                            <div className="mt-6 rounded-2xl border border-secondary bg-secondary/30 p-6">
                                <h3 className="font-semibold text-primary">Refused or Returned International Packages</h3>
                                <div className="mt-4 space-y-3 text-sm text-tertiary">
                                    <p>If an international package is refused or returned to us:</p>
                                    <ul className="ml-4 list-disc space-y-2">
                                        <li><strong>Refused delivery:</strong> If you refuse to pay import duties and the package is returned, you will be refunded the product price minus original shipping and return shipping costs.</li>
                                        <li><strong>Incorrect address:</strong> If the package is returned due to an incorrect address, you are responsible for reshipping costs.</li>
                                        <li><strong>Customs seizure:</strong> No refund is provided for packages seized or destroyed by customs.</li>
                                        <li><strong>Unclaimed packages:</strong> Packages unclaimed at customs will be returned or destroyed. Limited refunds may apply.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* 14-Day Withdrawal Right - Legal Requirement */}
                        <div className="mt-16">
                            <div className="flex items-center gap-3">
                                <File01 className="size-6 text-blue-600" />
                                <h2 className="text-2xl font-semibold text-primary">
                                    14-Day Withdrawal Right (Droit de Rétractation)
                                </h2>
                            </div>

                            <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-6">
                                <h3 className="font-semibold text-primary">Your Legal Right Under French/EU Law</h3>
                                <p className="mt-3 text-sm text-tertiary">
                                    In accordance with Articles L.221-18 to L.221-28 of the French Consumer Code and EU Directive 2011/83/EU, you have the right to withdraw from your purchase within <strong>14 days</strong> without giving any reason.
                                </p>

                                <div className="mt-4 space-y-3">
                                    <div className="flex items-start gap-2">
                                        <CheckCircle className="mt-0.5 size-4 shrink-0 text-blue-600" />
                                        <span className="text-sm text-tertiary"><strong>Withdrawal period:</strong> 14 days from the day you receive your goods</span>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <CheckCircle className="mt-0.5 size-4 shrink-0 text-blue-600" />
                                        <span className="text-sm text-tertiary"><strong>No reason required:</strong> You don't need to justify your decision</span>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <CheckCircle className="mt-0.5 size-4 shrink-0 text-blue-600" />
                                        <span className="text-sm text-tertiary"><strong>Full refund:</strong> Including original delivery costs (standard shipping)</span>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <CheckCircle className="mt-0.5 size-4 shrink-0 text-blue-600" />
                                        <span className="text-sm text-tertiary"><strong>Refund timeline:</strong> Within 14 days of receiving your withdrawal notice or returned goods</span>
                                    </div>
                                </div>

                                <div className="mt-6 rounded-lg bg-white p-4">
                                    <h4 className="font-medium text-primary">How to Exercise Your Right</h4>
                                    <p className="mt-2 text-sm text-tertiary">
                                        Send a clear statement to: <strong> contact@prestige-smile.com</strong>
                                    </p>
                                    <div className="mt-3 rounded bg-gray-50 p-3 text-xs text-tertiary">
                                        <p className="font-medium text-primary">Model Withdrawal Form:</p>
                                        <p className="mt-2 italic">
                                            "I hereby give notice that I withdraw from my contract for the sale of the following goods: [description]<br />
                                            Ordered on: [date] / Received on: [date]<br />
                                            Order number: [number]<br />
                                            Customer name: [your name]<br />
                                            Customer address: [your address]<br />
                                            Date: [today's date]"
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Exceptions */}
                            <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-6">
                                <div className="flex items-center gap-2">
                                    <AlertCircle className="size-5 text-amber-600" />
                                    <h3 className="font-semibold text-primary">Exceptions to Withdrawal Right</h3>
                                </div>
                                <p className="mt-3 text-sm text-tertiary">
                                    The right of withdrawal does NOT apply to:
                                </p>
                                <ul className="mt-3 space-y-2">
                                    {[
                                        "Sealed hygiene products that have been opened after delivery",
                                        "Personalized or custom-made products",
                                        "Services fully performed with your prior express consent",
                                        "Gift cards (once activated or used)",
                                        "Products that deteriorate or expire rapidly",
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-2 text-sm text-tertiary">
                                            <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-amber-500" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Extended Returns Policy */}
                        <div className="mt-16">
                            <div className="flex items-center gap-3">
                                <RefreshCcw01 className="size-6 text-brand-600" />
                                <h2 className="text-2xl font-semibold text-primary">
                                    Extended Returns Policy (30 Days)
                                </h2>
                            </div>
                            <p className="mt-2 text-tertiary">
                                Beyond the 14-day legal period, we offer an extended 30-day return policy for your peace of mind.
                            </p>

                            <div className="mt-8 rounded-2xl bg-brand-50 p-6">
                                <h3 className="font-semibold text-primary">Return Eligibility</h3>
                                <ul className="mt-4 space-y-3">
                                    {[
                                        "Products must be unused and in original, sealed packaging",
                                        "Returns must be initiated within 30 days of delivery",
                                        "Proof of purchase (order confirmation or invoice) is required",
                                        "Products must be in resalable condition",
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm text-tertiary">
                                            <CheckCircle className="mt-0.5 size-4 shrink-0 text-brand-600" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="mt-6 rounded-2xl border border-red-200 bg-red-50 p-6">
                                <h3 className="font-semibold text-primary">Non-Returnable Items</h3>
                                <ul className="mt-4 space-y-3">
                                    {[
                                        "Opened or used products (for hygiene and safety reasons)",
                                        "Products without original packaging",
                                        "Sale or clearance items (marked as final sale)",
                                        "Gift cards",
                                        "Services already rendered (teeth whitening sessions)",
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm text-tertiary">
                                            <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-red-500" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Return Process */}
                        <div className="mt-12">
                            <h3 className="text-xl font-semibold text-primary">
                                How to Return an Item
                            </h3>
                            <div className="mt-6 space-y-4">
                                {returnSteps.map((step, index) => (
                                    <div key={step.step} className="flex gap-4">
                                        <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-brand-600 text-sm font-bold text-white">
                                            {step.step}
                                        </div>
                                        <div className={`flex-1 ${index < returnSteps.length - 1 ? "border-l-2 border-dashed border-secondary pb-6 pl-6" : "pl-6"}`}>
                                            <h4 className="font-semibold text-primary">{step.title}</h4>
                                            <p className="mt-1 text-sm text-tertiary">{step.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Refund Info */}
                        <div className="mt-12 rounded-2xl border border-secondary bg-primary p-6">
                            <div className="flex items-center gap-3">
                                <Clock className="size-6 text-brand-600" />
                                <h3 className="text-lg font-semibold text-primary">Refund Information</h3>
                            </div>
                            <div className="mt-4 space-y-3 text-sm text-tertiary">
                                <p>
                                    <strong>Processing time:</strong> Once we receive your return, please allow 5-7 business days for inspection and processing.
                                </p>
                                <p>
                                    <strong>Legal timeline:</strong> For withdrawal requests, refunds are issued within 14 days as required by law.
                                </p>
                                <p>
                                    <strong>Refund method:</strong> Refunds are issued to the original payment method. Bank processing may take an additional 5-10 business days.
                                </p>
                                <p>
                                    <strong>Shipping costs:</strong> For legal withdrawals within 14 days, original standard shipping is refunded. Return shipping is paid by the customer unless the return is due to our error or a defective product.
                                </p>
                            </div>
                        </div>

                        {/* Service Cancellations */}
                        <div className="mt-12 rounded-2xl border border-secondary bg-secondary/30 p-6">
                            <div className="flex items-center gap-3">
                                <Package className="size-6 text-brand-600" />
                                <h3 className="text-lg font-semibold text-primary">Service Appointment Cancellations</h3>
                            </div>
                            <div className="mt-4 space-y-3 text-sm text-tertiary">
                                <p>
                                    <strong>Cancellation notice:</strong> Please cancel or reschedule appointments at least 24 hours in advance.
                                </p>
                                <p>
                                    <strong>Late cancellations:</strong> Cancellations with less than 24 hours notice may incur a fee of up to 50% of the service price.
                                </p>
                                <p>
                                    <strong>No-shows:</strong> Failure to attend without notice may result in being charged the full service price.
                                </p>
                                <p>
                                    <strong>Eligibility refunds:</strong> If you are deemed ineligible for treatment after completing the health questionnaire, you will receive a full refund.
                                </p>
                            </div>
                        </div>

                        {/* Contact */}
                        <div className="mt-12 text-center">
                            <h3 className="text-lg font-semibold text-primary">Questions?</h3>
                            <p className="mt-2 text-tertiary">
                                Contact us at <a href="mailto: contact@prestige-smile.com" className="text-brand-600 hover:underline"> contact@prestige-smile.com</a> or call <a href="tel:+41783000619" className="text-brand-600 hover:underline">+41 78 300 06 19</a>
                            </p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
