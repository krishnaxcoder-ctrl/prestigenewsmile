"use client";

import { motion } from "framer-motion";
import { Header } from "@/app/components/header";
import { Footer } from "@/app/components/footer";
import { Clock, Phone01, MarkerPin01, CheckCircle } from "@untitledui/icons";
import Script from "next/script";

export default function BookingPage() {
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
                            Book Your Appointment
                        </h1>
                        <nav className="mt-4 flex items-center justify-center gap-2 text-sm text-tertiary">
                            <a href="/" className="transition hover:text-brand-600">Home</a>
                            <span>/</span>
                            <span className="text-primary">Booking</span>
                        </nav>
                    </div>
                </div>

                {/* Booking Section */}
                <section className="px-4 py-12 md:px-8 md:py-16 lg:px-16">
                    <div className="mx-auto max-w-7xl">
                        <div className="grid gap-12 lg:grid-cols-3 lg:gap-8">
                            {/* Left Side - Info */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                                className="lg:col-span-1"
                            >
                                <h2 className="text-2xl font-semibold text-primary">
                                    Schedule Your Visit
                                </h2>
                                <p className="mt-4 text-tertiary">
                                    Book your professional teeth whitening session online. Choose a time that works best for you.
                                </p>

                                {/* Info Cards */}
                                <div className="mt-8 space-y-4">
                                    {/* Location */}
                                    <div className="rounded-xl border border-secondary bg-primary p-5">
                                        <div className="flex items-start gap-4">
                                            <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-brand-50">
                                                <MarkerPin01 className="size-5 text-brand-600" />
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-primary">Location</h3>
                                                <p className="mt-1 text-sm text-tertiary">Ambilly, near Geneva</p>
                                                <p className="text-sm text-tertiary">Switzerland</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Phone */}
                                    <div className="rounded-xl border border-secondary bg-primary p-5">
                                        <div className="flex items-start gap-4">
                                            <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-brand-50">
                                                <Phone01 className="size-5 text-brand-600" />
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-primary">Phone</h3>
                                                <a href="tel:+41783000619" className="mt-1 block text-sm text-brand-600 hover:text-brand-700">
                                                    +41 78 300 06 19
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Hours */}
                                    <div className="rounded-xl border border-secondary bg-primary p-5">
                                        <div className="flex items-start gap-4">
                                            <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-brand-50">
                                                <Clock className="size-5 text-brand-600" />
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-primary">Opening Hours</h3>
                                                <div className="mt-2 space-y-1 text-sm text-tertiary">
                                                    <p>Mon - Fri: 10am - 8pm</p>
                                                    <p>Saturday: 10am - 7pm</p>
                                                    <p className="text-error-500">Sunday: Closed</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Benefits */}
                                <div className="mt-8">
                                    <h3 className="font-semibold text-primary">What to Expect</h3>
                                    <ul className="mt-4 space-y-3">
                                        {[
                                            "Professional teeth whitening session",
                                            "Personalized treatment plan",
                                            "Comfortable, relaxing environment",
                                            "Results in just one visit",
                                        ].map((item) => (
                                            <li key={item} className="flex items-center gap-3 text-sm text-tertiary">
                                                <CheckCircle className="size-5 shrink-0 text-success-500" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>

                            {/* Right Side - Calendly Widget */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                                className="lg:col-span-2"
                            >
                                <div className="overflow-hidden rounded-2xl border border-secondary bg-primary shadow-sm">
                                    <div
                                        className="calendly-inline-widget"
                                        data-url="https://calendly.com/casethemesstudio/new-meeting?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=45bb8e"
                                        style={{ minWidth: '320px', height: '700px' }}
                                    />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />

            {/* Calendly Script */}
            <Script
                src="https://assets.calendly.com/assets/external/widget.js"
                strategy="lazyOnload"
            />
        </div>
    );
}
