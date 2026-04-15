"use client";

import { useState } from "react";
import { motion } from "framer-motion";
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

const whyCards = [
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
];

const inputClass =
    "mt-2 w-full border-b border-[#c9a5ab]/50 bg-transparent py-3 text-[15px] text-[#4a2d3a] placeholder:text-[#b8929a] focus:border-[#4a2d3a] focus:outline-none transition";
const labelClass = "block text-[10px] font-medium uppercase tracking-[0.3em] text-[#b8929a]";

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
                <section className="relative overflow-hidden bg-gradient-to-b from-[#f7f2ec] to-[#f3ede6] px-4 py-12 md:px-8 md:py-16 lg:px-16">
                    <div className="relative mx-auto max-w-7xl text-center">
                        <nav className="mb-6 flex items-center justify-center gap-3 text-[11px] font-medium uppercase tracking-[0.3em] text-[#b8929a]">
                            <a href="/" className="transition hover:text-[#4a2d3a]">Home</a>
                            <span className="size-1 rotate-45 bg-[#c9a5ab]/60" />
                            <span className="text-[#4a2d3a]">Gift Cards</span>
                        </nav>

                        <motion.h1
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-3xl font-light leading-[1.1] text-[#4a2d3a] md:text-4xl lg:text-5xl"
                            style={{ fontFamily: "'Cormorant Garamond', serif" }}
                        >
                            The Gift of a <span className="italic text-[#8b5a6a]">Radiant Smile</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="mx-auto mt-4 max-w-xl text-[14px] italic leading-[1.7] text-[#5a3d4a]/85 md:text-[15px]"
                            style={{ fontFamily: "'Cormorant Garamond', serif" }}
                        >
                            Perfect for birthdays, holidays, or simply to show someone they&apos;re cherished.
                        </motion.p>
                    </div>
                </section>

                {/* Gift Card Section */}
                <section className="bg-[#faf6f1] px-4 py-14 md:px-8 md:py-20 lg:px-16">
                    <div className="mx-auto max-w-6xl">
                        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
                            {/* Gift Card Preview */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                {/* Card with premium gold/rose gradient border */}
                                <div className="relative">
                                    {/* Corner accents */}
                                    <div className="pointer-events-none absolute -top-1.5 -left-1.5 z-10 size-5 border-l border-t border-[#c9a5ab]/70" />
                                    <div className="pointer-events-none absolute -top-1.5 -right-1.5 z-10 size-5 border-r border-t border-[#c9a5ab]/70" />
                                    <div className="pointer-events-none absolute -bottom-1.5 -left-1.5 z-10 size-5 border-b border-l border-[#c9a5ab]/70" />
                                    <div className="pointer-events-none absolute -bottom-1.5 -right-1.5 z-10 size-5 border-b border-r border-[#c9a5ab]/70" />

                                    <div className="relative aspect-[1.6/1] overflow-hidden bg-gradient-to-br from-[#4a2d3a] via-[#5a3d4a] to-[#3a1d2a] p-8 text-white shadow-[0_20px_50px_-20px_rgba(74,45,58,0.5)]">
                                        {/* Subtle texture */}
                                        <div
                                            className="absolute inset-0 opacity-[0.07]"
                                            style={{
                                                backgroundImage: `radial-gradient(circle at 1px 1px, #f7f2ec 1px, transparent 0)`,
                                                backgroundSize: "22px 22px",
                                            }}
                                        />

                                        {/* Inner decorative frame */}
                                        <div className="pointer-events-none absolute inset-4 border border-[#c9a5ab]/25" />
                                        <div className="pointer-events-none absolute inset-4 border border-[#c9a5ab]/10" style={{ margin: "2px" }} />

                                        {/* Card Content */}
                                        <div className="relative flex h-full flex-col justify-between">
                                            <div className="flex items-start justify-between">
                                                <div>
                                                    <p className="text-[9px] font-medium uppercase tracking-[0.4em] text-[#c9a5ab]">Gift Card</p>
                                                    <h3
                                                        className="mt-2 text-2xl font-light tracking-wide"
                                                        style={{ fontFamily: "'Cormorant Garamond', serif" }}
                                                    >
                                                        Prestige <span className="italic text-[#e8c5cb]">Smile</span>
                                                    </h3>
                                                </div>
                                                <div className="flex size-12 items-center justify-center border border-[#c9a5ab]/40">
                                                    <Gift01 className="size-5 text-[#e8c5cb]" />
                                                </div>
                                            </div>

                                            <div>
                                                {/* Amount */}
                                                <div className="flex items-baseline gap-2">
                                                    <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#c9a5ab]">CHF</span>
                                                    <span
                                                        className="text-5xl font-light leading-none"
                                                        style={{ fontFamily: "'Cormorant Garamond', serif" }}
                                                    >
                                                        {finalAmount || 0}
                                                    </span>
                                                </div>

                                                {/* Divider */}
                                                <div className="mt-4 flex items-center gap-2">
                                                    <div className="h-px w-8 bg-[#c9a5ab]/50" />
                                                    <div className="size-1 rotate-45 bg-[#c9a5ab]/70" />
                                                    <div className="h-px flex-1 bg-[#c9a5ab]/30" />
                                                </div>

                                                <div className="mt-3 flex items-end justify-between gap-4">
                                                    <div>
                                                        <p className="text-[9px] font-medium uppercase tracking-[0.3em] text-[#c9a5ab]">To</p>
                                                        <p
                                                            className="mt-0.5 text-base font-light italic"
                                                            style={{ fontFamily: "'Cormorant Garamond', serif" }}
                                                        >
                                                            {recipientName || "Recipient Name"}
                                                        </p>
                                                    </div>
                                                    <div className="text-right">
                                                        <p className="text-[9px] font-medium uppercase tracking-[0.3em] text-[#c9a5ab]">From</p>
                                                        <p
                                                            className="mt-0.5 text-base font-light italic"
                                                            style={{ fontFamily: "'Cormorant Garamond', serif" }}
                                                        >
                                                            {senderName || "Your Name"}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Features */}
                                <div className="mt-10">
                                    <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#b8929a]">Included with every card</p>
                                    <h3
                                        className="mt-2 text-2xl font-light text-[#4a2d3a]"
                                        style={{ fontFamily: "'Cormorant Garamond', serif" }}
                                    >
                                        Card <span className="italic text-[#8b5a6a]">Benefits</span>
                                    </h3>
                                    <div className="mt-4 flex items-center gap-3">
                                        <div className="h-px w-10 bg-[#c9a5ab]" />
                                        <div className="size-1.5 rotate-45 border border-[#c9a5ab]" />
                                        <div className="h-px w-16 bg-[#c9a5ab]/60" />
                                    </div>

                                    <ul className="mt-6 divide-y divide-[#c9a5ab]/25 border-y border-[#c9a5ab]/25">
                                        {features.map((feature) => (
                                            <li key={feature} className="flex items-start gap-4 py-4">
                                                <div className="flex size-7 shrink-0 items-center justify-center border border-[#c9a5ab]/50 bg-white/60">
                                                    <CheckCircle className="size-3.5 text-[#8b5a6a]" />
                                                </div>
                                                <span className="text-sm leading-relaxed text-[#4a2d3a]">{feature}</span>
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
                                <div className="relative border border-[#c9a5ab]/40 bg-white/70 p-8 backdrop-blur-sm md:p-10">
                                    {/* Corner accents */}
                                    <div className="pointer-events-none absolute -top-1.5 -left-1.5 size-5 border-l border-t border-[#c9a5ab]/70" />
                                    <div className="pointer-events-none absolute -top-1.5 -right-1.5 size-5 border-r border-t border-[#c9a5ab]/70" />
                                    <div className="pointer-events-none absolute -bottom-1.5 -left-1.5 size-5 border-b border-l border-[#c9a5ab]/70" />
                                    <div className="pointer-events-none absolute -bottom-1.5 -right-1.5 size-5 border-b border-r border-[#c9a5ab]/70" />

                                    <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#b8929a]">
                                        Customize your gift
                                    </p>
                                    <h2
                                        className="mt-2 text-2xl font-light text-[#4a2d3a] md:text-3xl"
                                        style={{ fontFamily: "'Cormorant Garamond', serif" }}
                                    >
                                        Design Your <span className="italic text-[#8b5a6a]">Gift Card</span>
                                    </h2>

                                    {/* Amount Selection */}
                                    <div className="mt-8">
                                        <label className={labelClass}>Select Amount</label>
                                        <div className="mt-3 grid grid-cols-4 gap-3">
                                            {giftCardOptions.map((option) => {
                                                const isActive = selectedAmount === option.value && !customAmount;
                                                return (
                                                    <button
                                                        key={option.value}
                                                        type="button"
                                                        onClick={() => {
                                                            setSelectedAmount(option.value);
                                                            setCustomAmount("");
                                                        }}
                                                        className={`relative py-4 text-center text-sm font-medium transition duration-200 ${
                                                            isActive
                                                                ? "border border-[#4a2d3a] bg-[#4a2d3a] text-white"
                                                                : "border border-[#c9a5ab]/40 bg-white/60 text-[#4a2d3a] hover:border-[#8b5a6a] hover:bg-white"
                                                        }`}
                                                    >
                                                        {option.popular && (
                                                            <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 whitespace-nowrap bg-[#8b5a6a] px-2 py-0.5 text-[9px] font-medium uppercase tracking-[0.2em] text-white">
                                                                Popular
                                                            </span>
                                                        )}
                                                        <span
                                                            className="block text-lg font-light"
                                                            style={{ fontFamily: "'Cormorant Garamond', serif" }}
                                                        >
                                                            {option.value}
                                                        </span>
                                                        <span className={`text-[9px] font-medium uppercase tracking-[0.25em] ${isActive ? "text-white/70" : "text-[#b8929a]"}`}>
                                                            CHF
                                                        </span>
                                                    </button>
                                                );
                                            })}
                                        </div>

                                        {/* Custom Amount */}
                                        <div className="mt-5">
                                            <label className={labelClass}>Custom Amount</label>
                                            <input
                                                type="number"
                                                placeholder="Enter amount (CHF 25 — 500)"
                                                value={customAmount}
                                                onChange={(e) => setCustomAmount(e.target.value)}
                                                className={inputClass}
                                                min="25"
                                                max="500"
                                            />
                                        </div>
                                    </div>

                                    {/* Recipient Details */}
                                    <div className="mt-8 space-y-5">
                                        <div>
                                            <label className={labelClass}>Recipient&apos;s Name</label>
                                            <input
                                                type="text"
                                                value={recipientName}
                                                onChange={(e) => setRecipientName(e.target.value)}
                                                placeholder="Enter recipient's name"
                                                className={inputClass}
                                            />
                                        </div>
                                        <div>
                                            <label className={labelClass}>Recipient&apos;s Email</label>
                                            <input
                                                type="email"
                                                value={recipientEmail}
                                                onChange={(e) => setRecipientEmail(e.target.value)}
                                                placeholder="recipient@email.com"
                                                className={inputClass}
                                            />
                                        </div>
                                        <div>
                                            <label className={labelClass}>Your Name</label>
                                            <input
                                                type="text"
                                                value={senderName}
                                                onChange={(e) => setSenderName(e.target.value)}
                                                placeholder="Enter your name"
                                                className={inputClass}
                                            />
                                        </div>
                                        <div>
                                            <label className={labelClass}>Personal Message (Optional)</label>
                                            <textarea
                                                value={message}
                                                onChange={(e) => setMessage(e.target.value)}
                                                placeholder="Add a heartfelt note…"
                                                rows={3}
                                                className={`${inputClass} resize-none`}
                                            />
                                        </div>
                                    </div>

                                    {/* Summary */}
                                    <div className="mt-8 flex items-center justify-between border-y border-[#c9a5ab]/30 py-4">
                                        <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#b8929a]">
                                            Gift Card Total
                                        </span>
                                        <span className="flex items-baseline gap-1.5">
                                            <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-[#8b5a6a]">CHF</span>
                                            <span
                                                className="text-3xl font-light text-[#4a2d3a]"
                                                style={{ fontFamily: "'Cormorant Garamond', serif" }}
                                            >
                                                {finalAmount || 0}
                                            </span>
                                        </span>
                                    </div>

                                    <button
                                        type="button"
                                        className="mt-6 inline-flex w-full items-center justify-center gap-2 border border-[#4a2d3a] bg-[#4a2d3a] px-8 py-4 text-[11px] font-medium uppercase tracking-[0.3em] text-white transition duration-200 ease-linear hover:bg-[#3a1d2a]"
                                    >
                                        <Gift01 className="size-3.5" />
                                        Purchase Gift Card
                                    </button>

                                    <p className="mt-4 text-center text-[11px] italic text-[#8b5a6a]/80">
                                        Delivered instantly to the recipient&apos;s email.
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Why Gift Cards */}
                <section className="relative overflow-hidden bg-[#f7f2ec] px-4 py-16 md:px-8 md:py-24 lg:px-16">
                    <div className="pointer-events-none absolute -top-32 left-1/3 hidden size-[480px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,#f3e8de_0%,transparent_70%)] opacity-70 lg:block" />

                    <div className="relative mx-auto max-w-7xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="mx-auto max-w-2xl text-center"
                        >
                            <p className="text-[10px] font-medium uppercase tracking-[0.35em] text-[#b8929a]">
                                Perfect for any occasion
                            </p>
                            <h2
                                className="mt-3 text-3xl font-light text-[#4a2d3a] md:text-4xl lg:text-5xl"
                                style={{ fontFamily: "'Cormorant Garamond', serif" }}
                            >
                                Why Give a <span className="italic text-[#8b5a6a]">Prestige Smile</span> Gift Card?
                            </h2>
                            <div className="mt-6 flex items-center justify-center gap-3">
                                <div className="h-px w-12 bg-[#c9a5ab]/60" />
                                <div className="size-1.5 rotate-45 border border-[#c9a5ab]" />
                                <div className="h-px w-12 bg-[#c9a5ab]/60" />
                            </div>
                        </motion.div>

                        <div className="mt-14 grid gap-6 md:grid-cols-3 md:gap-8">
                            {whyCards.map((item, index) => (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="group relative border border-[#c9a5ab]/30 bg-white/60 p-8 text-center backdrop-blur-sm transition duration-300 hover:border-[#c9a5ab]/60 hover:bg-white"
                                >
                                    {/* Top gradient hairline */}
                                    <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#c9a5ab]/40 to-transparent" />

                                    <div className="mx-auto flex size-14 items-center justify-center border border-[#c9a5ab]/50 bg-[#faf6f1]">
                                        <item.icon className="size-5 text-[#8b5a6a]" strokeWidth={1.25} />
                                    </div>
                                    <h3
                                        className="mt-5 text-xl font-light text-[#4a2d3a] md:text-2xl"
                                        style={{ fontFamily: "'Cormorant Garamond', serif" }}
                                    >
                                        {item.title}
                                    </h3>

                                    <div className="mt-3 flex items-center justify-center gap-2">
                                        <div className="h-px w-6 bg-[#c9a5ab]/50" />
                                        <div className="size-1 rotate-45 bg-[#c9a5ab]/70" />
                                        <div className="h-px w-6 bg-[#c9a5ab]/50" />
                                    </div>

                                    <p className="mt-4 text-sm leading-relaxed text-[#5a3d4a]/85">
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
