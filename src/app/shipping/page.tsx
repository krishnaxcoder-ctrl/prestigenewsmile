"use client";

import { motion } from "framer-motion";
import { Truck01, RefreshCcw01, Package, Clock, Globe01, CheckCircle } from "@untitledui/icons";
import { Header } from "@/app/components/header";
import { Footer } from "@/app/components/footer";
import { RatingBadge } from "@/components/foundations/rating-badge";

const shippingOptions = [
    {
        name: "Standard Shipping",
        price: "€3.90",
        time: "2-4 business days",
        description: "Free on orders over €20",
        icon: Truck01,
    },
];

const deliveryZones = [
    { country: "Switzerland", time: "2-4 days", cost: "€3.90 (Free over €20)" },
    { country: "France", time: "2-4 days", cost: "€3.90 (Free over €20)" },
    { country: "Germany", time: "2-4 days", cost: "€3.90 (Free over €20)" },
    { country: "Italy", time: "2-4 days", cost: "€3.90 (Free over €20)" },
];

const returnSteps = [
    {
        step: 1,
        title: "Contact Us",
        description: "Email us at hello@prestigesmile.ch with your order number and reason for return.",
    },
    {
        step: 2,
        title: "Receive Authorization",
        description: "We'll send you a return authorization and shipping label within 24 hours.",
    },
    {
        step: 3,
        title: "Ship Your Return",
        description: "Pack items securely in original packaging and ship using the provided label.",
    },
    {
        step: 4,
        title: "Receive Refund",
        description: "Once received and inspected, your refund will be processed within 5-7 business days.",
    },
];

export default function ShippingPage() {
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
                            <span className="uppercase text-teal-600">Shipping & Returns</span>
                        </nav>
                        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
                            <div className="max-w-3xl">
                                <motion.h1
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.1 }}
                                    className="text-2xl font-semibold uppercase text-primary md:text-3xl"
                                >
                                    Shipping & <span className="text-teal-600">Returns</span>
                                </motion.h1>
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    className="mt-4 text-lg text-tertiary"
                                >
                                    Fast delivery across Europe with hassle-free returns within 30 days.
                                </motion.p>
                            </div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="hidden shrink-0 md:block"
                            >
                                <RatingBadge rating={4.9} title="Free Shipping" subtitle="On orders over €20" />
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Content */}
                <section className="px-4 py-12 md:px-8 md:py-16 lg:px-16">
                    <div className="mx-auto max-w-7xl">
                        {/* Shipping Options */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2 className="text-2xl font-semibold text-primary">
                                Shipping Options
                            </h2>
                            <p className="mt-2 text-tertiary">
                                We offer flexible shipping options to meet your needs.
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
                        </motion.div>

                        {/* Delivery Zones */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="mt-16"
                        >
                            <div className="flex items-center gap-3">
                                <Globe01 className="size-6 text-brand-600" />
                                <h2 className="text-2xl font-semibold text-primary">
                                    Delivery Zones
                                </h2>
                            </div>
                            <p className="mt-2 text-tertiary">
                                We currently deliver to the following countries.
                            </p>

                            <div className="mt-6 overflow-hidden rounded-xl border border-secondary">
                                <table className="w-full">
                                    <thead className="bg-secondary">
                                        <tr>
                                            <th className="px-6 py-4 text-left text-sm font-semibold text-primary">Country</th>
                                            <th className="px-6 py-4 text-left text-sm font-semibold text-primary">Delivery Time</th>
                                            <th className="px-6 py-4 text-left text-sm font-semibold text-primary">Shipping Cost</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-secondary">
                                        {deliveryZones.map((zone) => (
                                            <tr key={zone.country}>
                                                <td className="px-6 py-4 text-sm text-primary">{zone.country}</td>
                                                <td className="px-6 py-4 text-sm text-tertiary">{zone.time}</td>
                                                <td className="px-6 py-4 text-sm text-tertiary">{zone.cost}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </motion.div>

                        {/* Returns Policy */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="mt-16"
                        >
                            <div className="flex items-center gap-3">
                                <RefreshCcw01 className="size-6 text-brand-600" />
                                <h2 className="text-2xl font-semibold text-primary">
                                    Returns Policy
                                </h2>
                            </div>
                            <p className="mt-2 text-tertiary">
                                We offer a 30-day return policy for your peace of mind.
                            </p>

                            <div className="mt-8 rounded-2xl bg-brand-50 p-6">
                                <h3 className="font-semibold text-primary">Return Eligibility</h3>
                                <ul className="mt-4 space-y-3">
                                    {[
                                        "Products must be unused and in original packaging",
                                        "Returns must be initiated within 30 days of delivery",
                                        "Proof of purchase is required",
                                        "Opened or used products cannot be returned",
                                        "Sale items are final sale and non-returnable",
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm text-tertiary">
                                            <CheckCircle className="mt-0.5 size-4 shrink-0 text-brand-600" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>

                        {/* Return Process */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="mt-12"
                        >
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
                        </motion.div>

                        {/* Refund Info */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="mt-12 rounded-2xl border border-secondary bg-primary p-6"
                        >
                            <div className="flex items-center gap-3">
                                <Clock className="size-6 text-brand-600" />
                                <h3 className="text-lg font-semibold text-primary">Refund Information</h3>
                            </div>
                            <div className="mt-4 space-y-3 text-sm text-tertiary">
                                <p>
                                    Once we receive your return, please allow 5-7 business days for inspection and processing.
                                </p>
                                <p>
                                    Refunds will be issued to the original payment method. Please note that it may take an additional 5-10 business days for the refund to appear in your account, depending on your payment provider.
                                </p>
                                <p>
                                    Shipping costs are non-refundable unless the return is due to our error or a defective product.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
