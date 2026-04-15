"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
    Mail01,
    Phone01,
    MarkerPin01,
    Clock,
    Send01,
    CheckCircle,
} from "@untitledui/icons";
import { Header } from "@/app/components/header";
import { Footer } from "@/app/components/footer";

const fieldLabelClass = "block text-[10px] font-medium uppercase tracking-[0.3em] text-[#b8929a]";
const fieldInputClass =
    "mt-2 w-full border-b border-[#c9a5ab]/50 bg-transparent py-3 text-[15px] text-[#4a2d3a] placeholder:text-[#b8929a] focus:border-[#4a2d3a] focus:outline-none transition";

function FieldInput({
    label,
    name,
    type,
    placeholder,
    required,
    value,
    onChange,
}: {
    label: string;
    name: string;
    type: string;
    placeholder?: string;
    required?: boolean;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
    return (
        <div>
            <label htmlFor={name} className={fieldLabelClass}>
                {label} {required && <span className="text-[#8b5a6a]">*</span>}
            </label>
            <input
                id={name}
                name={name}
                type={type}
                placeholder={placeholder}
                required={required}
                value={value}
                onChange={onChange}
                className={fieldInputClass}
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
            />
        </div>
    );
}

function FieldSelect({
    label,
    name,
    required,
    value,
    onChange,
}: {
    label: string;
    name: string;
    required?: boolean;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}) {
    return (
        <div>
            <label htmlFor={name} className={fieldLabelClass}>
                {label} {required && <span className="text-[#8b5a6a]">*</span>}
            </label>
            <div className="relative">
                <select
                    id={name}
                    name={name}
                    required={required}
                    value={value}
                    onChange={onChange}
                    className={`${fieldInputClass} appearance-none pr-8`}
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                    <option value="">Select a subject</option>
                    <option value="booking">Book an Appointment</option>
                    <option value="products">Product Inquiry</option>
                    <option value="support">Customer Support</option>
                    <option value="other">Other</option>
                </select>
                <svg
                    className="pointer-events-none absolute right-0 top-1/2 size-4 -translate-y-1/2 text-[#8b5a6a]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
            </div>
        </div>
    );
}

function FieldTextarea({
    label,
    name,
    placeholder,
    required,
    value,
    onChange,
}: {
    label: string;
    name: string;
    placeholder?: string;
    required?: boolean;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}) {
    return (
        <div>
            <label htmlFor={name} className={fieldLabelClass}>
                {label} {required && <span className="text-[#8b5a6a]">*</span>}
            </label>
            <textarea
                id={name}
                name={name}
                placeholder={placeholder}
                required={required}
                value={value}
                onChange={onChange}
                rows={5}
                className={`${fieldInputClass} resize-none`}
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
            />
        </div>
    );
}

const contactInfo = [
    {
        icon: Phone01,
        title: "Phone",
        details: ["+41 78 300 06 19"],
        action: { label: "Call us", href: "tel:+41783000619" },
    },
    {
        icon: Mail01,
        title: "Email",
        details: [" contact@prestige-smile.com"],
        action: { label: "Email us", href: "mailto: contact@prestige-smile.com" },
    },
    {
        icon: MarkerPin01,
        title: "Location",
        details: ["1 rue Jean Moulin, 74100 Ambilly", "France (near Geneva)"],
        action: { label: "Get directions", href: "#map" },
    },
    {
        icon: Clock,
        title: "Opening Hours",
        details: ["Mon-Fri: 10am - 8pm", "Sat: 10am - 7pm", "Sun: Closed"],
    },
];

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError("");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (!res.ok) {
                const errData = await res.json();
                throw new Error(errData.error || "Failed to send message");
            }

            setIsSubmitted(true);
            setTimeout(() => setIsSubmitted(false), 5000);
            setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
        } catch {
            setError("Failed to send message. Please try again or contact us directly.");
        } finally {
            setIsLoading(false);
        }
    };

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
                            <span className="text-[#4a2d3a]">Contact</span>
                        </nav>

                        <motion.h1
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-3xl font-light leading-[1.1] text-[#4a2d3a] md:text-4xl lg:text-5xl"
                            style={{ fontFamily: "'Cormorant Garamond', serif" }}
                        >
                            Get in <span className="italic text-[#8b5a6a]">Touch</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="mx-auto mt-4 max-w-xl text-[14px] italic leading-[1.7] text-[#5a3d4a]/85 md:text-[15px]"
                            style={{ fontFamily: "'Cormorant Garamond', serif" }}
                        >
                            Have a question or want to book an appointment? We&apos;d love to hear from you.
                        </motion.p>
                    </div>
                </section>

                {/* Contact Content */}
                <section className="bg-[#faf6f1] px-4 py-14 md:px-8 md:py-20 lg:px-16">
                    <div className="mx-auto max-w-6xl">
                        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_1.2fr] lg:gap-16">
                            {/* Contact Info */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <p
                                    className="text-xl text-[#8b5a6a] md:text-2xl"
                                    style={{ fontFamily: "'Eyesome Script', cursive" }}
                                >
                                    Find us
                                </p>
                                <h2
                                    className="mt-1 text-2xl font-light text-[#4a2d3a] md:text-3xl"
                                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                                >
                                    Studio <span className="italic text-[#8b5a6a]">Details</span>
                                </h2>
                                <div className="mt-4 flex items-center gap-3">
                                    <div className="h-px w-10 bg-[#c9a5ab]" />
                                    <div className="size-1.5 rotate-45 border border-[#c9a5ab]" />
                                    <div className="h-px w-16 bg-[#c9a5ab]/60" />
                                </div>

                                <div className="mt-8 divide-y divide-[#c9a5ab]/25 border-y border-[#c9a5ab]/25">
                                    {contactInfo.map((item) => (
                                        <div key={item.title} className="flex items-start gap-5 py-6">
                                            <div className="flex size-11 shrink-0 items-center justify-center border border-[#c9a5ab]/50 bg-white/60">
                                                <item.icon className="size-4 text-[#8b5a6a]" />
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#b8929a]">
                                                    {item.title}
                                                </h3>
                                                <div className="mt-2 space-y-0.5">
                                                    {item.details.map((detail, i) => (
                                                        <p
                                                            key={i}
                                                            className="text-[15px] text-[#4a2d3a]"
                                                            style={{ fontFamily: "'Cormorant Garamond', serif" }}
                                                        >
                                                            {detail}
                                                        </p>
                                                    ))}
                                                </div>
                                                {item.action && (
                                                    <a
                                                        href={item.action.href}
                                                        className="mt-2 inline-flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.25em] text-[#8b5a6a] transition hover:text-[#4a2d3a]"
                                                    >
                                                        {item.action.label}
                                                        <span className="transition group-hover:translate-x-0.5">→</span>
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Contact Form */}
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

                                    <p
                                        className="text-xl text-[#8b5a6a] md:text-2xl"
                                        style={{ fontFamily: "'Eyesome Script', cursive" }}
                                    >
                                        Write to us
                                    </p>
                                    <h2
                                        className="mt-1 text-2xl font-light text-[#4a2d3a] md:text-3xl"
                                        style={{ fontFamily: "'Cormorant Garamond', serif" }}
                                    >
                                        Send a <span className="italic text-[#8b5a6a]">Message</span>
                                    </h2>
                                    <p
                                        className="mt-3 text-[14px] italic leading-[1.7] text-[#5a3d4a]/85"
                                        style={{ fontFamily: "'Cormorant Garamond', serif" }}
                                    >
                                        Fill out the form below and we&apos;ll get back to you within 24 hours.
                                    </p>

                                    {isSubmitted ? (
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            className="mt-8 border border-[#c9a5ab]/40 bg-[#f7f2ec]/60 p-8 text-center"
                                        >
                                            <div className="mx-auto flex size-14 items-center justify-center border border-[#c9a5ab]/50 bg-white/80">
                                                <CheckCircle className="size-6 text-[#8b5a6a]" />
                                            </div>
                                            <h3
                                                className="mt-5 text-2xl font-light text-[#4a2d3a]"
                                                style={{ fontFamily: "'Cormorant Garamond', serif" }}
                                            >
                                                Message <span className="italic text-[#8b5a6a]">Sent</span>
                                            </h3>
                                            <p
                                                className="mt-2 text-[14px] italic text-[#5a3d4a]/85"
                                                style={{ fontFamily: "'Cormorant Garamond', serif" }}
                                            >
                                                Thank you for reaching out. We&apos;ll be in touch soon.
                                            </p>
                                        </motion.div>
                                    ) : (
                                        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                                            <div className="grid gap-6 sm:grid-cols-2">
                                                <FieldInput
                                                    label="Name"
                                                    name="name"
                                                    type="text"
                                                    required
                                                    placeholder="Your name"
                                                    value={formData.name}
                                                    onChange={handleInputChange}
                                                />
                                                <FieldInput
                                                    label="Email"
                                                    name="email"
                                                    type="email"
                                                    required
                                                    placeholder="your@email.com"
                                                    value={formData.email}
                                                    onChange={handleInputChange}
                                                />
                                            </div>

                                            <div className="grid gap-6 sm:grid-cols-2">
                                                <FieldInput
                                                    label="Phone"
                                                    name="phone"
                                                    type="tel"
                                                    placeholder="+41 XX XXX XX XX"
                                                    value={formData.phone}
                                                    onChange={handleInputChange}
                                                />
                                                <FieldSelect
                                                    label="Subject"
                                                    name="subject"
                                                    required
                                                    value={formData.subject}
                                                    onChange={handleInputChange}
                                                />
                                            </div>

                                            <FieldTextarea
                                                label="Message"
                                                name="message"
                                                required
                                                placeholder="How can we help you?"
                                                value={formData.message}
                                                onChange={handleInputChange}
                                            />

                                            {error && (
                                                <p
                                                    className="text-[13px] italic text-[#b8929a]"
                                                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                                                >
                                                    {error}
                                                </p>
                                            )}

                                            <button
                                                type="submit"
                                                disabled={isLoading}
                                                className="inline-flex w-full items-center justify-center gap-2 border border-[#4a2d3a] bg-[#4a2d3a] px-8 py-4 text-[11px] font-medium uppercase tracking-[0.3em] text-white transition duration-200 ease-linear hover:bg-[#3a1d2a] disabled:opacity-60"
                                            >
                                                <Send01 className="size-3.5" />
                                                {isLoading ? "Sending…" : "Send Message"}
                                            </button>
                                        </form>
                                    )}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Booking Section - matches homepage/booking page */}
                <section
                    className="bg-cover bg-center bg-no-repeat px-4 py-12 md:py-16"
                    style={{ backgroundImage: "url('/bgreviewssection.webp')" }}
                >
                    <div className="mx-auto grid max-w-5xl grid-cols-1 overflow-hidden rounded-2xl lg:grid-cols-2">
                        {/* Left - CTA */}
                        <div className="hidden flex-col justify-center bg-white px-5 py-10 text-left lg:flex lg:py-20">
                            <p className="text-sm uppercase tracking-[0.3em] text-[#8b6b5a]">
                                Ready for a brighter smile?
                            </p>

                            <div className="my-5 h-px w-full bg-[#c9bdb3]" />

                            <h2
                                className="text-3xl font-medium leading-snug text-[#4a3728] xl:text-5xl"
                                style={{ fontFamily: "'Eyesome Script', cursive" }}
                            >
                                Book your whitening consultation today!
                            </h2>

                            <p className="mt-4 text-sm leading-relaxed text-[#8b6b5a]">
                                Transform your smile with our professional teeth whitening treatments. Safe, effective, and tailored to your needs.
                            </p>

                            <div className="my-5 h-px w-full bg-[#c9bdb3]" />

                            {/* Features */}
                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <div className="flex size-8 items-center justify-center rounded-full bg-[#f5efe9]">
                                        <svg className="size-4 text-[#8b6b5a]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                                    </div>
                                    <span className="text-sm text-[#5a4639]">Professional whitening in 30 minutes</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="flex size-8 items-center justify-center rounded-full bg-[#f5efe9]">
                                        <svg className="size-4 text-[#8b6b5a]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                                    </div>
                                    <span className="text-sm text-[#5a4639]">Safe &amp; gentle on sensitive teeth</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="flex size-8 items-center justify-center rounded-full bg-[#f5efe9]">
                                        <svg className="size-4 text-[#8b6b5a]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                                    </div>
                                    <span className="text-sm text-[#5a4639]">Up to 8 shades whiter</span>
                                </div>
                            </div>
                        </div>

                        {/* Right - Opening Hours Card */}
                        <div className="bg-[#fcf5f0] px-6 py-8 sm:px-10 sm:py-10">
                            {/* Title */}
                            <div className="mb-6 text-center sm:mb-8">
                                <img src="/logobookingnow1.png" alt="Prestige Smile Studio" className="mx-auto h-15 sm:h-10" />
                                <h2
                                    className="mt-3 text-3xl font-medium uppercase tracking-[0.15em] text-[#5a3d2b] sm:text-5xl"
                                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                                >
                                    Opening
                                </h2>
                                <p
                                    className="mt-1 text-6xl text-[#8b6b5a]"
                                    style={{ fontFamily: "'Abramo Script', cursive" }}
                                >
                                    hours
                                </p>
                            </div>

                            {/* Hours list */}
                            <div className="space-y-0">
                                {[
                                    { day: "Monday", time: "10am - 8pm" },
                                    { day: "Tuesday", time: "10am - 8pm" },
                                    { day: "Wednesday", time: "10am - 8pm" },
                                    { day: "Thursday", time: "10am - 8pm" },
                                    { day: "Friday", time: "10am - 8pm" },
                                    { day: "Saturday", time: "10am - 7pm" },
                                    { day: "Sunday", time: "Closed" },
                                ].map((item, i, arr) => (
                                    <div
                                        key={item.day}
                                        className={`flex items-center justify-between py-2.5 text-sm sm:py-3 sm:text-base ${i < arr.length - 1 ? "border-b border-[#c9bdb3]" : ""}`}
                                    >
                                        <span className="font-semibold text-[#4a3728]">{item.day}</span>
                                        <span className={`font-medium ${item.time === "Closed" ? "text-[#8b6b5a]" : "text-[#5a4639]"}`}>
                                            {item.time}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            {/* QR Code */}
                            <div className="mt-8 flex items-center justify-center gap-4 sm:gap-6">
                                <div>
                                    <p className="text-2xl font-bold text-primary sm:text-3xl" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                                        Scan here.
                                    </p>
                                    <p className="text-sm uppercase tracking-widest text-tertiary sm:text-base">
                                        To book your<br />appointment.
                                    </p>
                                </div>
                                <img
                                    src="/qrcode.png"
                                    alt="QR code to book appointment"
                                    className="size-28 border-2 border-[#c9bdb3] sm:size-32"
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
