"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/base/buttons/button";
import { Input } from "@/components/base/input/input";
import { Textarea } from "@/components/base/textarea/textarea";
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
        details: ["hello@prestigesmile.ch"],
        action: { label: "Email us", href: "mailto:hello@prestigesmile.ch" },
    },
    {
        icon: MarkerPin01,
        title: "Location",
        details: ["Ambilly, near Geneva", "Switzerland"],
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

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 5000);
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    };

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
                            Contact Us
                        </h1>
                        <nav className="mt-4 flex items-center justify-center gap-2 text-sm text-tertiary">
                            <a href="/" className="transition hover:text-brand-600">Home</a>
                            <span>/</span>
                            <span className="text-primary">Contact</span>
                        </nav>
                    </div>
                </div>

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
                                <h2 className="text-2xl font-semibold text-primary md:text-3xl">
                                    Get in Touch
                                </h2>
                                <p className="mt-4 text-tertiary">
                                    Have a question or want to book an appointment? We'd love to hear from you. Our team is here to help!
                                </p>

                                <div className="mt-8 grid gap-6 sm:grid-cols-2">
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

                                {/* Map */}
                                <div id="map" className="mt-8 aspect-video overflow-hidden rounded-2xl bg-secondary">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2761.0!2d6.1!3d46.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDbCsDEyJzAwLjAiTiA2wrAwNicwMC4wIkU!5e0!3m2!1sen!2sch!4v1234567890"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="Location Map"
                                    />
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
                                                <div>
                                                    <label className="mb-2 block text-sm font-medium text-primary">
                                                        Name *
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        value={formData.name}
                                                        onChange={handleInputChange}
                                                        className="w-full rounded-lg border border-secondary px-4 py-3 text-sm focus:border-brand-500 focus:outline-none"
                                                        required
                                                    />
                                                </div>
                                                <div>
                                                    <label className="mb-2 block text-sm font-medium text-primary">
                                                        Email *
                                                    </label>
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        value={formData.email}
                                                        onChange={handleInputChange}
                                                        className="w-full rounded-lg border border-secondary px-4 py-3 text-sm focus:border-brand-500 focus:outline-none"
                                                        required
                                                    />
                                                </div>
                                            </div>

                                            <div className="grid gap-5 sm:grid-cols-2">
                                                <div>
                                                    <label className="mb-2 block text-sm font-medium text-primary">
                                                        Phone
                                                    </label>
                                                    <input
                                                        type="tel"
                                                        name="phone"
                                                        value={formData.phone}
                                                        onChange={handleInputChange}
                                                        className="w-full rounded-lg border border-secondary px-4 py-3 text-sm focus:border-brand-500 focus:outline-none"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="mb-2 block text-sm font-medium text-primary">
                                                        Subject *
                                                    </label>
                                                    <select
                                                        name="subject"
                                                        value={formData.subject}
                                                        onChange={handleInputChange}
                                                        className="w-full rounded-lg border border-secondary bg-primary px-4 py-3 text-sm focus:border-brand-500 focus:outline-none"
                                                        required
                                                    >
                                                        <option value="">Select a subject</option>
                                                        <option value="booking">Book an Appointment</option>
                                                        <option value="products">Product Inquiry</option>
                                                        <option value="support">Customer Support</option>
                                                        <option value="other">Other</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div>
                                                <label className="mb-2 block text-sm font-medium text-primary">
                                                    Message *
                                                </label>
                                                <textarea
                                                    name="message"
                                                    value={formData.message}
                                                    onChange={handleInputChange}
                                                    rows={5}
                                                    className="w-full resize-none rounded-lg border border-secondary px-4 py-3 text-sm focus:border-brand-500 focus:outline-none"
                                                    required
                                                />
                                            </div>

                                            <Button
                                                type="submit"
                                                color="primary"
                                                size="lg"
                                                iconLeading={Send01}
                                                className="w-full justify-center"
                                            >
                                                Send Message
                                            </Button>
                                        </form>
                                    )}
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
