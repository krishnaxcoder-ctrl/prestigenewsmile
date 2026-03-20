"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail01, CheckCircle, Star01, Percent02, Gift01, Truck01 } from "@untitledui/icons";
import { useState } from "react";

export function CtaSection() {
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
                <div className="relative flex min-h-[350px] items-center border-y border-secondary bg-white sm:min-h-[400px] lg:min-h-[600px]">
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

                            {/* Stats */}
                            <div className="mt-8 grid grid-cols-3 gap-3 sm:gap-4">
                                {[
                                    { icon: Percent02, value: "15%", label: "First Order", desc: "Discount" },
                                    { icon: Truck01, value: "Free", label: "Shipping", desc: "Orders 50+" },
                                    { icon: Gift01, value: "VIP", label: "Access", desc: "Exclusive" },
                                ].map((stat, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: i * 0.1 }}
                                        className="group relative overflow-hidden rounded-2xl border border-secondary bg-white p-4 shadow-sm transition duration-200 hover:border-brand-300 hover:shadow-md sm:p-5"
                                    >
                                        {/* Background accent */}
                                        <div className="absolute -right-6 -top-6 size-20 rounded-full bg-brand-50 transition duration-300 group-hover:scale-150 group-hover:bg-brand-100" />

                                        {/* Icon badge */}
                                        <div className="relative mb-4 inline-flex rounded-xl bg-brand-100 p-2.5">
                                            <stat.icon className="size-5 text-brand-600" />
                                        </div>

                                        {/* Content */}
                                        <p className="relative text-2xl font-bold text-primary sm:text-3xl">{stat.value}</p>
                                        <p className="relative mt-1 text-sm font-medium text-primary">{stat.label}</p>
                                        <p className="relative text-xs text-tertiary">{stat.desc}</p>
                                    </motion.div>
                                ))}
                            </div>
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
