"use client";

import { motion } from "framer-motion";
import { Header } from "@/app/components/header";
import { Footer } from "@/app/components/footer";
import { Clock, Phone01, MarkerPin01, CheckCircle } from "@untitledui/icons";
import Script from "next/script";
import { RatingBadge } from "@/components/foundations/rating-badge";

export default function BookingPage() {
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
                            <span className="uppercase text-brand-600">Booking</span>
                        </nav>
                        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
                            <div className="max-w-3xl">
                                <motion.h1
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.1 }}
                                    className="text-2xl font-semibold uppercase text-primary md:text-3xl"
                                >
                                    Book Your <span className="text-brand-600">Appointment</span>
                                </motion.h1>
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    className="mt-4 text-lg text-tertiary"
                                >
                                    Schedule your professional teeth whitening session online in minutes.
                                </motion.p>
                            </div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="hidden shrink-0 md:block"
                            >
                                <RatingBadge rating={4.9} title="500+ Happy Clients" subtitle="Professional Service" />
                            </motion.div>
                        </div>
                    </div>
                </section>

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
                                                <p className="mt-1 text-sm text-tertiary">1 rue Jean Moulin, 74100 Ambilly</p>
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

                {/* Before & After Results */}
                <section className="bg-brand-50 px-4 py-12 md:px-8 md:py-16 lg:px-16">
                    <div className="mx-auto max-w-7xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="flex flex-col items-center text-center"
                        >
                            <span className="inline-flex items-center gap-2 rounded-full bg-brand-100 px-4 py-1.5 text-sm font-medium text-brand-700">
                                <svg className="size-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                Trusted by 500+ Happy Clients
                            </span>
                            <h2 className="mt-4 text-3xl font-semibold text-primary md:text-4xl">
                                Real Results, Real Smiles
                            </h2>
                            <p className="mx-auto mt-4 max-w-xl text-lg text-tertiary">
                                See the amazing transformations achieved with our professional teeth whitening treatments.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="mt-10 grid gap-6 md:grid-cols-2"
                        >
                            {[1, 3, 5, 7, 9, 11, 13, 15].map((beforeNum) => (
                                <div
                                    key={beforeNum}
                                    className="relative overflow-hidden rounded-2xl bg-primary shadow-lg"
                                >
                                    <div className="flex">
                                        {/* Before */}
                                        <div className="relative flex-1">
                                            <div className="aspect-square overflow-hidden">
                                                <img
                                                    src={`/teeth before and after images/${beforeNum}.png`}
                                                    alt={`Before treatment`}
                                                    className="size-full object-cover"
                                                />
                                            </div>
                                            <div className="absolute bottom-3 left-3">
                                                <span className="rounded-full bg-black/70 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
                                                    Before
                                                </span>
                                            </div>
                                        </div>

                                        {/* Center Divider */}
                                        <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
                                            <div className="flex size-10 items-center justify-center rounded-full border-2 border-white bg-brand-600 shadow-lg">
                                                <svg className="size-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h8M8 12h8m-8 5h8M4 7h.01M4 12h.01M4 17h.01" />
                                                </svg>
                                            </div>
                                        </div>

                                        {/* After */}
                                        <div className="relative flex-1">
                                            <div className="aspect-square overflow-hidden">
                                                <img
                                                    src={`/teeth before and after images/${beforeNum + 1}.png`}
                                                    alt={`After treatment`}
                                                    className="size-full object-cover"
                                                />
                                            </div>
                                            <div className="absolute bottom-3 right-3">
                                                <span className="rounded-full bg-brand-600 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
                                                    After
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
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
