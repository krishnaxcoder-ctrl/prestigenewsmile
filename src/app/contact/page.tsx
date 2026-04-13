"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/base/buttons/button";
import { Input } from "@/components/base/input/input";
import { TextArea } from "@/components/base/textarea/textarea";
import {
    Mail01,
    Phone01,
    MarkerPin01,
    Clock,
    Send01,
    CheckCircle,
    User01,
    ChevronDown,
    MessageTextSquare01,
} from "@untitledui/icons";
import { Header } from "@/app/components/header";
import { Footer } from "@/app/components/footer";
import { RatingBadge } from "@/components/foundations/rating-badge";

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
                <section className="border-b border-brand-400 bg-brand-50 px-4 py-12 md:px-8 md:py-10 lg:px-16">
                    <div className="mx-auto max-w-7xl">
                        <nav className="mb-4 flex items-center gap-2 text-sm text-tertiary">
                            <a href="/" className="uppercase transition hover:text-brand-600">Home</a>
                            <span>/</span>
                            <span className="uppercase text-brand-600">Contact</span>
                        </nav>
                        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
                            <div className="max-w-3xl">
                                <motion.h1
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.1 }}
                                    className="text-2xl font-semibold uppercase text-primary md:text-3xl"
                                >
                                    Get in <span className="text-brand-600">Touch</span>
                                </motion.h1>
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    className="mt-4 text-lg text-tertiary"
                                >
                                    Have a question or want to book an appointment? We'd love to hear from you.
                                </motion.p>
                            </div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="hidden shrink-0 md:block"
                            >
                                <RatingBadge rating={4.9} title="Fast Response" subtitle="Within 24 hours" />
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Contact Content */}
                <section className="px-4 py-12 md:px-8 md:py-16 lg:px-16">
                    <div className="mx-auto max-w-7xl">
                        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
                            {/* Contact Info */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="grid gap-6 sm:grid-cols-2">
                                    {contactInfo.map((item) => (
                                        <div
                                            key={item.title}
                                            className="rounded-2xl border border-secondary bg-primary p-6"
                                        >
                                            <div className="flex size-12 items-center justify-center rounded-full bg-brand-50">
                                                <item.icon className="size-6 text-brand-600" />
                                            </div>
                                            <h3 className="mt-4 font-semibold text-primary">
                                                {item.title}
                                            </h3>
                                            <div className="mt-2 space-y-1">
                                                {item.details.map((detail, i) => (
                                                    <p key={i} className="text-sm text-tertiary">
                                                        {detail}
                                                    </p>
                                                ))}
                                            </div>
                                            {item.action && (
                                                <a
                                                    href={item.action.href}
                                                    className="mt-3 inline-block text-sm font-medium text-brand-600 transition hover:text-brand-700"
                                                >
                                                    {item.action.label} →
                                                </a>
                                            )}
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
                                <div className="rounded-2xl border border-secondary bg-primary p-8">
                                    <h2 className="text-xl font-semibold text-primary">
                                        Send Us a Message
                                    </h2>
                                    <p className="mt-2 text-sm text-tertiary">
                                        Fill out the form below and we'll get back to you within 24 hours.
                                    </p>

                                    {isSubmitted ? (
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            className="mt-8 rounded-xl bg-success-50 p-6 text-center"
                                        >
                                            <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-success-100">
                                                <CheckCircle className="size-8 text-success-600" />
                                            </div>
                                            <h3 className="mt-4 font-semibold text-success-900">
                                                Message Sent!
                                            </h3>
                                            <p className="mt-2 text-sm text-success-700">
                                                Thank you for contacting us. We'll get back to you soon.
                                            </p>
                                        </motion.div>
                                    ) : (
                                        <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                                            <div className="grid gap-5 sm:grid-cols-2">
                                                <Input
                                                    type="text"
                                                    name="name"
                                                    label="Name"
                                                    icon={User01}
                                                    value={formData.name}
                                                    onChange={(value) => setFormData({ ...formData, name: value })}
                                                    placeholder="Your name"
                                                    isRequired
                                                    size="md"
                                                />
                                                <Input
                                                    type="email"
                                                    name="email"
                                                    label="Email"
                                                    icon={Mail01}
                                                    value={formData.email}
                                                    onChange={(value) => setFormData({ ...formData, email: value })}
                                                    placeholder="your@email.com"
                                                    isRequired
                                                    size="md"
                                                />
                                            </div>

                                            <div className="grid gap-5 sm:grid-cols-2">
                                                <Input
                                                    type="tel"
                                                    name="phone"
                                                    label="Phone"
                                                    icon={Phone01}
                                                    value={formData.phone}
                                                    onChange={(value) => setFormData({ ...formData, phone: value })}
                                                    placeholder="+41 XX XXX XX XX"
                                                    size="md"
                                                />
                                                <div className="space-y-1.5">
                                                    <label className="text-sm font-medium text-secondary">
                                                        Subject <span className="text-error-500">*</span>
                                                    </label>
                                                    <div className="relative">
                                                        <div className="pointer-events-none absolute left-3 top-1/2 z-10 -translate-y-1/2">
                                                            <MessageTextSquare01 className="size-5 text-fg-quaternary" />
                                                        </div>
                                                        <select
                                                            name="subject"
                                                            value={formData.subject}
                                                            onChange={handleInputChange}
                                                            className="w-full appearance-none rounded-lg bg-primary py-2.5 pl-10 pr-10 text-md text-primary shadow-xs ring-1 ring-primary ring-inset focus:ring-2 focus:ring-brand focus:outline-none"
                                                            required
                                                        >
                                                            <option value="">Select a subject</option>
                                                            <option value="booking">Book an Appointment</option>
                                                            <option value="products">Product Inquiry</option>
                                                            <option value="support">Customer Support</option>
                                                            <option value="other">Other</option>
                                                        </select>
                                                        <ChevronDown className="pointer-events-none absolute right-3 top-1/2 size-5 -translate-y-1/2 text-fg-quaternary" />
                                                    </div>
                                                </div>
                                            </div>

                                            <TextArea
                                                name="message"
                                                label="Message"
                                                value={formData.message}
                                                onChange={(value) => setFormData({ ...formData, message: value })}
                                                placeholder="How can we help you?"
                                                isRequired
                                            />

                                            {error && (
                                                <p className="text-sm text-error-500">{error}</p>
                                            )}

                                            <Button
                                                type="submit"
                                                color="primary"
                                                size="lg"
                                                iconLeading={Send01}
                                                className="w-full justify-center"
                                                isLoading={isLoading}
                                                isDisabled={isLoading}
                                            >
                                                {isLoading ? "Sending..." : "Send Message"}
                                            </Button>
                                        </form>
                                    )}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Book Your Appointment Section */}
                <section className="bg-brand-50 px-4 py-12 md:px-8 md:py-16 lg:px-16">
                    <div className="mx-auto max-w-7xl">
                        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
                            {/* Left Column - Booking Info */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                            >
                                <h2 className="text-2xl font-semibold text-primary md:text-3xl">
                                    Book Your Appointment
                                </h2>
                                <p className="mt-2 text-lg font-medium text-brand-600">
                                    @prestige.smile.studio
                                </p>

                                <div className="mt-8 rounded-2xl border border-secondary bg-primary p-8 shadow-sm">
                                    <div className="flex items-center gap-2">
                                        <Clock className="size-6 text-brand-600" />
                                        <h3 className="text-lg font-semibold text-primary">
                                            Opening Hours
                                        </h3>
                                    </div>

                                    <div className="mt-6 space-y-3">
                                        {[
                                            { day: "Monday", hours: "10am - 8pm" },
                                            { day: "Tuesday", hours: "10am - 8pm" },
                                            { day: "Wednesday", hours: "10am - 8pm" },
                                            { day: "Thursday", hours: "10am - 8pm" },
                                            { day: "Friday", hours: "10am - 8pm" },
                                            { day: "Saturday", hours: "10am - 7pm" },
                                            { day: "Sunday", hours: "Closed" },
                                        ].map((item) => (
                                            <div
                                                key={item.day}
                                                className="flex items-center justify-between border-b border-secondary pb-3 last:border-0 last:pb-0"
                                            >
                                                <span className="font-medium text-primary">{item.day}</span>
                                                <span className={item.hours === "Closed" ? "font-medium text-error-500" : "text-tertiary"}>
                                                    {item.hours}
                                                </span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-8">
                                        <Button
                                            href="tel:+41783000619"
                                            color="primary"
                                            size="lg"
                                            iconLeading={Phone01}
                                            className="w-full justify-center"
                                        >
                                            Call to Book
                                        </Button>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Right Column - Map */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="flex flex-col"
                            >
                                <div id="map" className="aspect-video overflow-hidden rounded-2xl bg-secondary lg:aspect-auto lg:h-full">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2761.0!2d6.1!3d46.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDbCsDEyJzAwLjAiTiA2wrAwNicwMC4wIkU!5e0!3m2!1sen!2sch!4v1234567890"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0, minHeight: "300px" }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="Location Map"
                                    />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
