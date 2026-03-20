"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/base/buttons/button";
import { Gift01, CheckCircle, Heart, Star01 } from "@untitledui/icons";
import { Header } from "@/app/components/header";
import { Footer } from "@/app/components/footer";

const giftCardOptions = [
    { value: 50, popular: false },
    { value: 100, popular: true },
    { value: 150, popular: false },
    { value: 200, popular: false },
];

const features = [
    "Valid for 12 months from purchase",
    "Redeemable on all products and services",
    "Instant digital delivery",
    "Personalized message option",
    "Beautifully designed e-card",
];

export default function GiftCardsPage() {
    const [selectedAmount, setSelectedAmount] = useState(100);
    const [customAmount, setCustomAmount] = useState("");
    const [recipientEmail, setRecipientEmail] = useState("");
    const [recipientName, setRecipientName] = useState("");
    const [senderName, setSenderName] = useState("");
    const [message, setMessage] = useState("");

    const finalAmount = customAmount ? parseInt(customAmount) : selectedAmount;

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
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-brand-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-700">
                                <Gift01 className="size-4" />
                                The Perfect Gift
                            </span>
                            <h1 className="text-2xl font-semibold text-primary sm:text-3xl md:text-4xl lg:text-5xl">
                                Give the Gift of a<br />Brighter Smile
                            </h1>
                            <p className="mx-auto mt-4 max-w-xl text-tertiary">
                                Treat someone special to a radiant smile with our gift cards. Perfect for birthdays, holidays, or just because.
                            </p>
                        </motion.div>
                    </div>
                </div>

                {/* Gift Card Section */}
                <section className="px-4 py-12 md:px-8 md:py-16 lg:px-16">
                    <div className="mx-auto max-w-6xl">
                        <div className="grid gap-12 lg:grid-cols-2">
                            {/* Gift Card Preview */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="relative aspect-[1.6/1] overflow-hidden rounded-3xl bg-gradient-to-br from-brand-500 to-brand-700 p-8 text-white shadow-2xl">
                                    {/* Background Pattern */}
                                    <div className="absolute inset-0 opacity-10" style={{
                                        backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
                                        backgroundSize: '20px 20px'
                                    }} />

                                    {/* Card Content */}
                                    <div className="relative flex h-full flex-col justify-between">
                                        <div className="flex items-start justify-between">
                                            <div>
                                                <p className="text-brand-100">Gift Card</p>
                                                <h3 className="mt-1 text-2xl font-bold">Prestige Smile</h3>
                                            </div>
                                            <Gift01 className="size-10 text-white/50" />
                                        </div>

                                        <div>
                                            <p className="text-5xl font-bold">
                                                CHF {finalAmount || 0}
                                            </p>
                                            <div className="mt-4 flex items-center justify-between">
                                                <div>
                                                    <p className="text-xs text-brand-200">To</p>
                                                    <p className="font-medium">{recipientName || "Recipient Name"}</p>
                                                </div>
                                                <div className="text-right">
                                                    <p className="text-xs text-brand-200">From</p>
                                                    <p className="font-medium">{senderName || "Your Name"}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Features */}
                                <div className="mt-8">
                                    <h3 className="font-semibold text-primary">Gift Card Benefits</h3>
                                    <ul className="mt-4 space-y-3">
                                        {features.map((feature) => (
                                            <li key={feature} className="flex items-center gap-3 text-sm text-tertiary">
                                                <CheckCircle className="size-5 shrink-0 text-brand-600" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>

                            {/* Gift Card Form */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="rounded-2xl border border-secondary bg-primary p-8">
                                    <h2 className="text-xl font-semibold text-primary">
                                        Customize Your Gift Card
                                    </h2>

                                    {/* Amount Selection */}
                                    <div className="mt-6">
                                        <label className="mb-3 block text-sm font-medium text-primary">
                                            Select Amount
                                        </label>
                                        <div className="grid grid-cols-4 gap-3">
                                            {giftCardOptions.map((option) => (
                                                <button
                                                    key={option.value}
                                                    onClick={() => {
                                                        setSelectedAmount(option.value);
                                                        setCustomAmount("");
                                                    }}
                                                    className={`relative rounded-lg border-2 py-4 text-center font-semibold transition ${
                                                        selectedAmount === option.value && !customAmount
                                                            ? "border-brand-600 bg-brand-50 text-brand-600"
                                                            : "border-secondary text-primary hover:border-brand-300"
                                                    }`}
                                                >
                                                    {option.popular && (
                                                        <span className="absolute -top-2 left-1/2 -translate-x-1/2 rounded-full bg-brand-600 px-2 py-0.5 text-xs text-white">
                                                            Popular
                                                        </span>
                                                    )}
                                                    CHF {option.value}
                                                </button>
                                            ))}
                                        </div>

                                        {/* Custom Amount */}
                                        <div className="mt-4">
                                            <input
                                                type="number"
                                                placeholder="Or enter custom amount (CHF 25-500)"
                                                value={customAmount}
                                                onChange={(e) => setCustomAmount(e.target.value)}
                                                className="w-full rounded-lg border border-secondary px-4 py-3 text-sm focus:border-brand-500 focus:outline-none"
                                                min="25"
                                                max="500"
                                            />
                                        </div>
                                    </div>

                                    {/* Recipient Details */}
                                    <div className="mt-6 space-y-4">
                                        <div>
                                            <label className="mb-2 block text-sm font-medium text-primary">
                                                Recipient's Name
                                            </label>
                                            <input
                                                type="text"
                                                value={recipientName}
                                                onChange={(e) => setRecipientName(e.target.value)}
                                                placeholder="Enter recipient's name"
                                                className="w-full rounded-lg border border-secondary px-4 py-3 text-sm focus:border-brand-500 focus:outline-none"
                                            />
                                        </div>
                                        <div>
                                            <label className="mb-2 block text-sm font-medium text-primary">
                                                Recipient's Email
                                            </label>
                                            <input
                                                type="email"
                                                value={recipientEmail}
                                                onChange={(e) => setRecipientEmail(e.target.value)}
                                                placeholder="Enter recipient's email"
                                                className="w-full rounded-lg border border-secondary px-4 py-3 text-sm focus:border-brand-500 focus:outline-none"
                                            />
                                        </div>
                                        <div>
                                            <label className="mb-2 block text-sm font-medium text-primary">
                                                Your Name
                                            </label>
                                            <input
                                                type="text"
                                                value={senderName}
                                                onChange={(e) => setSenderName(e.target.value)}
                                                placeholder="Enter your name"
                                                className="w-full rounded-lg border border-secondary px-4 py-3 text-sm focus:border-brand-500 focus:outline-none"
                                            />
                                        </div>
                                        <div>
                                            <label className="mb-2 block text-sm font-medium text-primary">
                                                Personal Message (Optional)
                                            </label>
                                            <textarea
                                                value={message}
                                                onChange={(e) => setMessage(e.target.value)}
                                                placeholder="Add a personal message..."
                                                rows={3}
                                                className="w-full resize-none rounded-lg border border-secondary px-4 py-3 text-sm focus:border-brand-500 focus:outline-none"
                                            />
                                        </div>
                                    </div>

                                    {/* Summary */}
                                    <div className="mt-6 rounded-lg bg-secondary p-4">
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm text-tertiary">Gift Card Value</span>
                                            <span className="font-semibold text-primary">CHF {finalAmount || 0}</span>
                                        </div>
                                    </div>

                                    <Button
                                        color="primary"
                                        size="lg"
                                        className="mt-6 w-full justify-center"
                                        iconLeading={Gift01}
                                    >
                                        Purchase Gift Card
                                    </Button>

                                    <p className="mt-4 text-center text-xs text-tertiary">
                                        Gift card will be sent instantly to the recipient's email
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Why Gift Cards */}
                <section className="bg-secondary px-4 py-16 md:px-8 md:py-24 lg:px-16">
                    <div className="mx-auto max-w-7xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-center"
                        >
                            <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-brand-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-700">
                                <Heart className="size-4" />
                                Perfect for Any Occasion
                            </span>
                            <h2 className="text-2xl font-semibold text-primary md:text-3xl lg:text-4xl">
                                Why Give a Prestige Smile Gift Card?
                            </h2>
                        </motion.div>

                        <div className="mt-12 grid gap-8 md:grid-cols-3">
                            {[
                                {
                                    icon: Star01,
                                    title: "Premium Experience",
                                    description: "Give the gift of professional teeth whitening and premium skincare products.",
                                },
                                {
                                    icon: Gift01,
                                    title: "Flexible Use",
                                    description: "Recipients can use their gift card for any service or product in our range.",
                                },
                                {
                                    icon: Heart,
                                    title: "Thoughtful Gift",
                                    description: "Show you care about their confidence and well-being with a gift of self-care.",
                                },
                            ].map((item, index) => (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="rounded-2xl bg-primary p-6 text-center"
                                >
                                    <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-brand-50">
                                        <item.icon className="size-7 text-brand-600" />
                                    </div>
                                    <h3 className="mt-4 text-lg font-semibold text-primary">
                                        {item.title}
                                    </h3>
                                    <p className="mt-2 text-sm text-tertiary">
                                        {item.description}
                                    </p>
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
