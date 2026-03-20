"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail01, CheckCircle, Star01, Percent02, Gift01, Truck01 } from "@untitledui/icons";
import { useState } from "react";

export function NewsletterSection() {
    const [email, setEmail] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
            setIsSubmitted(true);
            setTimeout(() => setIsSubmitted(false), 3000);
            setEmail("");
        }
    };

    return (
        <section className="relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Left - White Side */}
                <div className="relative hidden min-h-[350px] items-center border-y border-secondary bg-white sm:min-h-[400px] lg:flex lg:min-h-[600px]">
                    {/* Dot Grid Background */}
                    <div className="absolute inset-0 opacity-40" style={{
                        backgroundImage: `radial-gradient(circle at 1.5px 1.5px, var(--color-gray-300) 1.5px, transparent 0)`,
                        backgroundSize: '24px 24px'
                    }} />
                    {/* Content */}
                    <div className="relative flex flex-col justify-center p-5 sm:p-8 md:p-12 lg:p-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="max-w-md"
                        >
                            {/* Rating */}
                            <div className="mb-6 flex items-center gap-3">
                                <div className="flex">
                                    {[...Array(5)].map((_, i) => (
                                        <Star01 key={i} className="size-5 fill-brand-500 text-brand-500" />
                                    ))}
                                </div>
                                <span className="text-sm font-medium text-tertiary">
                                    Trusted by 50,000+ customers
                                </span>
                            </div>

                            <h3 className="text-2xl font-semibold text-primary md:text-3xl lg:text-4xl">
                                Join Our Beauty Community
                            </h3>
                            <p className="mt-4 text-secondary">
                                Be the first to know about new launches, exclusive deals, and expert skincare tips.
                            </p>

                            {/* Testimonial Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="group relative mt-8 overflow-hidden rounded-3xl border border-secondary bg-white p-6 shadow-lg transition duration-300 hover:shadow-xl"
                            >
                                {/* Quote Icon */}
                                <div className="absolute -right-4 -top-4 text-brand-100">
                                    <svg className="size-24" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M11.3 2.5c-2.1.4-3.8 1.3-5 2.7-1.3 1.4-1.9 3.1-1.9 5.1 0 1.5.4 2.8 1.1 4 .8 1.2 1.8 2.1 3.1 2.8l.8-1.4c-.9-.5-1.6-1.1-2.1-1.9-.5-.8-.8-1.7-.8-2.7h.1c.3.3.7.5 1.2.7.5.2 1 .3 1.5.3 1.1 0 2-.4 2.7-1.1.7-.7 1.1-1.7 1.1-2.8 0-1.1-.4-2-1.1-2.8-.7-.8-1.6-1.1-2.7-.9zm9 0c-2.1.4-3.8 1.3-5 2.7-1.3 1.4-1.9 3.1-1.9 5.1 0 1.5.4 2.8 1.1 4 .8 1.2 1.8 2.1 3.1 2.8l.8-1.4c-.9-.5-1.6-1.1-2.1-1.9-.5-.8-.8-1.7-.8-2.7h.1c.3.3.7.5 1.2.7.5.2 1 .3 1.5.3 1.1 0 2-.4 2.7-1.1.7-.7 1.1-1.7 1.1-2.8 0-1.1-.4-2-1.1-2.8-.7-.8-1.6-1.1-2.7-.9z"/>
                                    </svg>
                                </div>

                                {/* Stars */}
                                <div className="relative flex gap-0.5">
                                    {[...Array(5)].map((_, i) => (
                                        <Star01 key={i} className="size-5 fill-warning-400 text-warning-400" />
                                    ))}
                                </div>

                                {/* Quote */}
                                <p className="relative mt-4 text-base leading-relaxed text-primary">
                                    "The results were incredible! My smile has never looked this bright. The team made me feel so comfortable throughout the entire process."
                                </p>

                                {/* Divider */}
                                <div className="my-5 h-px bg-gradient-to-r from-transparent via-secondary to-transparent" />

                                {/* Author */}
                                <div className="relative flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="relative">
                                            <div className="size-12 rounded-full ring-2 ring-brand-100 ring-offset-2" style={{
                                                backgroundImage: 'url(https://randomuser.me/api/portraits/women/44.jpg)',
                                                backgroundSize: 'cover'
                                            }} />
                                            <div className="absolute -bottom-1 -right-1 flex size-5 items-center justify-center rounded-full bg-brand-500 text-white">
                                                <CheckCircle className="size-3" />
                                            </div>
                                        </div>
                                        <div>
                                            <p className="font-semibold text-primary">Sophie Martin</p>
                                            <p className="text-sm text-tertiary">Geneva, Switzerland</p>
                                        </div>
                                    </div>
                                    <div className="rounded-full bg-brand-50 px-3 py-1">
                                        <span className="text-xs font-medium text-brand-600">Verified</span>
                                    </div>
                                </div>
                            </motion.div>

                        </motion.div>
                    </div>
                </div>

                {/* Right - Form Side */}
                <div className="relative flex items-center bg-brand-600 p-5 sm:p-8 md:p-12 lg:p-16">
                    {/* Decorative Elements */}
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="absolute -right-20 -top-20 size-80 rounded-full bg-brand-500/50" />
                        <div className="absolute -bottom-20 -left-20 size-60 rounded-full bg-brand-700/50" />
                        <div className="absolute right-1/4 top-1/3 size-4 rounded-full bg-white/20" />
                        <div className="absolute bottom-1/4 left-1/3 size-6 rounded-full bg-white/10" />
                        {/* Pattern */}
                        <div className="absolute inset-0 opacity-10" style={{
                            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
                            backgroundSize: '40px 40px'
                        }} />
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative w-full max-w-lg"
                    >
                        {/* Badge */}
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 backdrop-blur-sm">
                            <Mail01 className="size-4 text-white" />
                            <span className="text-sm font-medium text-white">Newsletter</span>
                        </div>

                        <h2 className="text-xl font-semibold uppercase tracking-wide text-white sm:text-display-xs md:text-display-sm">
                            Glow First!
                            <br />
                            Sign Up For Updates
                        </h2>

                        <p className="mt-4 text-brand-100">
                            Subscribe and get exclusive access to new products, beauty tips, and special member-only offers.
                        </p>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="mt-8">
                            <div className="flex flex-col gap-3 sm:flex-row">
                                <div className="relative flex-1">
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Enter your email"
                                        className="w-full rounded-full border-2 border-white/20 bg-white/10 px-6 py-4 text-white placeholder:text-white/60 backdrop-blur-sm focus:border-white focus:outline-none"
                                        required
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-brand-600 transition duration-200 hover:bg-brand-50"
                                >
                                    {isSubmitted ? (
                                        <>
                                            <CheckCircle className="size-5" />
                                            Done!
                                        </>
                                    ) : (
                                        <>
                                            Subscribe
                                            <ArrowRight className="size-5" />
                                        </>
                                    )}
                                </button>
                            </div>
                        </form>

                        {/* Trust indicators */}
                        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2">
                            <div className="flex items-center gap-2">
                                <CheckCircle className="size-4 text-brand-200" />
                                <span className="text-sm text-brand-100">No spam, ever</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle className="size-4 text-brand-200" />
                                <span className="text-sm text-brand-100">Unsubscribe anytime</span>
                            </div>
                        </div>

                        {/* Avatars */}
                        <div className="mt-10 flex items-center gap-4">
                            <div className="flex -space-x-3">
                                {[1, 2, 3, 4].map((i) => (
                                    <div
                                        key={i}
                                        className="size-10 rounded-full border-2 border-brand-600 bg-brand-200"
                                        style={{
                                            backgroundImage: `url(https://randomuser.me/api/portraits/women/${i + 20}.jpg)`,
                                            backgroundSize: 'cover'
                                        }}
                                    />
                                ))}
                                <div className="flex size-10 items-center justify-center rounded-full border-2 border-brand-600 bg-white text-xs font-bold text-brand-600">
                                    +5K
                                </div>
                            </div>
                            <p className="text-sm text-brand-100">
                                Join <span className="font-semibold text-white">5,000+</span> subscribers
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
