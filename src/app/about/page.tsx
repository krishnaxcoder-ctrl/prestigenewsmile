"use client";

import { motion } from "framer-motion";
import { Star01, Heart, Award01, Users01 } from "@untitledui/icons";
import { Header } from "@/app/components/header";
import { Footer } from "@/app/components/footer";
import { AboutSection } from "@/app/components/about-section";
import { ReviewsSection } from "@/app/components/reviews-sectionaother";
import { ArticlesSection } from "@/app/components/articles-section";
import { FAQSection } from "@/app/components/faq-section";
import { CollectionBanner } from "@/app/components/collection-banner";

const stats = [
    { value: "18+", label: "Years of Experience" },
    { value: "50K+", label: "Happy Clients" },
    { value: "1:1", label: "Personal Training" },
    { value: "90%", label: "Practical Focus" },
    { value: "454+", label: "Students Trained" },
    { value: "24/7", label: "Support Available" },
];

const values = [
    {
        icon: Heart,
        title: "Passion for Beauty",
        description: "We believe everyone deserves to feel confident and radiant. Our passion drives us to create products that bring out your natural beauty.",
    },
    {
        icon: Award01,
        title: "Quality First",
        description: "We never compromise on quality. Every product undergoes rigorous testing to ensure it meets our high standards of excellence.",
    },
    {
        icon: Users01,
        title: "Customer Focus",
        description: "Your satisfaction is our priority. We listen to our customers and continuously improve based on your feedback.",
    },
    {
        icon: Star01,
        title: "Innovation",
        description: "We stay at the forefront of beauty technology, combining traditional wisdom with modern science for exceptional results.",
    },
];

const team = [
    {
        name: "Anaëlle",
        role: "Founder & CEO",
        image: "/client.webp",
        bio: "Passionate about aesthetics and well-being, I founded Prestige Smile Studio with a clear vision: to offer everyone access to a brighter, more confident smile. Every session is tailored to your needs, using safe and effective techniques for visible results from the very first appointment.",
    },
];

export default function AboutPage() {
    return (
        <div className="overflow-x-hidden">
            <Header />
            <main className="bg-primary">
                {/* Hero */}
                <section className="relative flex flex-col overflow-hidden bg-gradient-to-b from-[#f7f2ec] via-[#f3ede6] to-[#ebe2d8] px-4 pb-8 pt-4 md:px-8 md:pb-10 md:pt-6 lg:h-[700px] lg:min-h-0 lg:px-16 lg:pb-6 lg:pt-4">
                    {/* Ambient glows */}
                    <div className="pointer-events-none absolute -top-32 left-1/4 size-[560px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,#f5efe7_0%,transparent_70%)] opacity-70" />
                    <div className="pointer-events-none absolute -bottom-40 right-0 size-[480px] rounded-full bg-[radial-gradient(circle,#d4b5a0_0%,transparent_70%)] opacity-25" />

                    <div className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col">
                        <div className="grid flex-1 items-center gap-6 lg:grid-cols-[1fr_1.05fr] lg:gap-14">
                            {/* Left - Text content */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7 }}
                                className="order-2 text-center lg:order-1 lg:text-left"
                            >
                                {/* Script accent */}
                                <p
                                    className="mb-1 text-2xl text-[#8b5a6a] md:text-3xl"
                                    style={{ fontFamily: "'Eyesome Script', cursive" }}
                                >
                                    Welcome to
                                </p>

                                {/* Headline */}
                                <h1
                                    className="text-4xl font-light leading-[1.05] text-[#4a2d3a] md:text-5xl lg:text-[44px] xl:text-6xl"
                                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                                >
                                    The Art of a <br className="hidden md:block" />
                                    <span className="italic text-[#8b5a6a]">Confident</span> Smile
                                </h1>

                                {/* Decorative divider */}
                                <div className="mt-4 flex items-center justify-center gap-3 lg:justify-start">
                                    <div className="h-px w-10 bg-[#c9a5ab]" />
                                    <div className="size-1.5 rotate-45 border border-[#c9a5ab]" />
                                    <div className="h-px w-20 bg-[#c9a5ab]/60" />
                                    <div className="size-1 rotate-45 bg-[#c9a5ab]/50" />
                                </div>

                                {/* Subtitle */}
                                <p
                                    className="mx-auto mt-4 max-w-lg text-[14px] italic leading-[1.7] text-[#5a3d4a]/85 lg:mx-0 md:text-[15px]"
                                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                                >
                                    Born in Geneva, crafted with Swiss precision. Where refinement meets artistry — every session, a gentle step toward your most radiant self.
                                </p>

                                {/* Founder signature line */}
                                <div className="mt-5 flex items-center justify-center gap-4 lg:justify-start">
                                    <div className="h-px w-8 bg-[#c9a5ab]/60" />
                                    <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-[#b8929a]">
                                        By
                                    </p>
                                    <p
                                        className="text-2xl text-[#4a2d3a]"
                                        style={{ fontFamily: "'Eyesome Script', cursive" }}
                                    >
                                        Anaëlle
                                    </p>
                                </div>

                                {/* Trust strip - directly below text content */}
                                <div className="mt-8 border-t border-[#c9a5ab]/30 pt-6">
                                    <div className="flex flex-wrap items-center justify-center gap-y-4 divide-x divide-[#c9a5ab]/40 border-x border-[#c9a5ab]/40 text-center md:flex-nowrap lg:justify-start">
                                        <div className="min-w-[110px] px-4 md:min-w-[120px]">
                                            <p
                                                className="text-2xl font-light text-[#4a2d3a] md:text-3xl"
                                                style={{ fontFamily: "'Cormorant Garamond', serif" }}
                                            >
                                                15+
                                            </p>
                                            <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.3em] text-[#b8929a]">
                                                Years of Craft
                                            </p>
                                        </div>
                                        <div className="min-w-[110px] px-4 md:min-w-[120px]">
                                            <p
                                                className="text-2xl font-light italic text-[#8b5a6a] md:text-3xl"
                                                style={{ fontFamily: "'Cormorant Garamond', serif" }}
                                            >
                                                50K+
                                            </p>
                                            <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.3em] text-[#b8929a]">
                                                Radiant Smiles
                                            </p>
                                        </div>
                                        <div className="min-w-[110px] px-4 md:min-w-[120px]">
                                            <p
                                                className="text-2xl font-light text-[#4a2d3a] md:text-3xl"
                                                style={{ fontFamily: "'Cormorant Garamond', serif" }}
                                            >
                                                4.9
                                            </p>
                                            <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.3em] text-[#b8929a]">
                                                Average Rating
                                            </p>
                                        </div>
                                        <div className="min-w-[110px] px-4 md:min-w-[120px]">
                                            <p
                                                className="text-2xl font-light italic text-[#8b5a6a] md:text-3xl"
                                                style={{ fontFamily: "'Cormorant Garamond', serif" }}
                                            >
                                                100%
                                            </p>
                                            <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.3em] text-[#b8929a]">
                                                Natural Finish
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Right - Full bleed image */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.96 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.7, delay: 0.15 }}
                                className="relative order-1 h-[320px] w-full sm:h-[400px] lg:order-2 lg:h-full"
                            >
                                {/* Image */}
                                <div className="relative size-full overflow-hidden">
                                    <img
                                        src="/client.webp"
                                        alt="Anaëlle — Prestige Smile Studio"
                                        className="size-full object-cover"
                                    />
                                </div>

                                {/* Years label */}
                                <div className="absolute bottom-6 left-6 z-20 bg-[#f7f2ec] px-5 py-3 shadow-sm md:bottom-8 md:left-8 md:px-6 md:py-4">
                                    <p className="flex items-baseline gap-2">
                                        <span
                                            className="text-2xl font-light text-[#4a2d3a] md:text-3xl"
                                            style={{ fontFamily: "'Cormorant Garamond', serif" }}
                                        >
                                            Est.
                                        </span>
                                        <span
                                            className="text-2xl font-light italic text-[#8b5a6a] md:text-3xl"
                                            style={{ fontFamily: "'Cormorant Garamond', serif" }}
                                        >
                                            2010
                                        </span>
                                    </p>
                                    <p className="mt-1 text-[9px] font-medium uppercase tracking-[0.3em] text-[#b8929a]">
                                        Geneva, Switzerland
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                <AboutSection />

                {/* Stats */}
                <section className="bg-white px-4 py-0 md:px-8 lg:px-16">
                    <div className="mx-auto max-w-[1400px] border border-secondary">
                        <div className="grid grid-cols-2 divide-x divide-y divide-secondary sm:grid-cols-3 sm:divide-y-0 lg:grid-cols-6">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="flex flex-col items-center justify-center px-6 py-10 text-center"
                                >
                                    <p className="text-xl font-semibold text-primary md:text-2xl">
                                        {stat.value}
                                    </p>
                                    <p className="mt-3 text-xs font-medium uppercase tracking-[0.15em] text-tertiary">
                                        {stat.label}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Values */}
                <section className="relative overflow-hidden bg-[#faf6f1] px-4 py-20 md:px-8 md:py-28 lg:px-16">
                    {/* Ambient glow */}
                    <div className="pointer-events-none absolute -top-32 left-1/3 size-[480px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,#f3e8de_0%,transparent_70%)] opacity-70" />
                    <div className="pointer-events-none absolute -bottom-24 right-0 size-[420px] rounded-full bg-[radial-gradient(circle,#e8d4c7_0%,transparent_70%)] opacity-30" />

                    <div className="relative mx-auto max-w-7xl">
                        <div className="grid items-start gap-16 lg:grid-cols-[minmax(0,360px)_1fr] lg:gap-24">
                            {/* Left - Header */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="lg:self-start"
                            >
                                <p className="text-sm font-medium uppercase tracking-widest text-brand-600">Our Values</p>

                                <h2
                                    className="mt-3 text-display-sm font-medium leading-[1.05] text-primary md:text-display-md lg:text-display-lg"
                                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                                >
                                    The Values That <br className="hidden lg:block" />
                                    <span className="italic text-brand-600">Shape Every Smile</span>
                                </h2>

                                <p className="mt-6 text-sm leading-relaxed text-gray-500">
                                    The principles that guide every treatment, every detail, and every smile we create.
                                </p>

                                <a
                                    href="/contact"
                                    className="mt-8 hidden items-center gap-2 border border-brand-600 bg-transparent px-8 py-3 text-sm font-medium uppercase text-brand-600 transition duration-200 ease-linear hover:bg-brand-600 hover:text-white lg:inline-flex"
                                >
                                    Book Your Session
                                    <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </a>

                            </motion.div>

                            {/* Right - Values list */}
                            <div className="relative">
                                {/* Vertical rail */}
                                <div className="pointer-events-none absolute left-[30px] top-4 bottom-4 w-px bg-gradient-to-b from-transparent via-[#c9a5ab]/40 to-transparent md:left-[38px]" />

                                <div className="space-y-10 md:space-y-14">
                                    {values.map((value, index) => (
                                        <motion.div
                                            key={value.title}
                                            initial={{ opacity: 0, x: 20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, delay: index * 0.1 }}
                                            className="group relative grid grid-cols-[60px_1fr] items-start gap-5 md:grid-cols-[76px_1fr] md:gap-8"
                                        >
                                            {/* Icon badge */}
                                            <div className="relative z-10">
                                                <div className="relative flex size-[60px] items-center justify-center md:size-[76px]">
                                                    {/* Outer ring */}
                                                    <div className="absolute inset-0 rotate-45 border border-[#c9a5ab]/40 bg-[#faf6f1] transition-colors duration-500 group-hover:border-[#c9a5ab]" />
                                                    {/* Inner circle */}
                                                    <div className="relative flex size-10 items-center justify-center rounded-full bg-white/60 md:size-12">
                                                        <value.icon className="size-5 text-[#4a2d3a] md:size-6" strokeWidth={1.25} />
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Content */}
                                            <div className="">
                                                <div className="flex items-baseline gap-3">
                                                    <span
                                                        className="text-lg font-light text-[#b8929a]"
                                                        style={{ fontFamily: "'Cormorant Garamond', serif" }}
                                                    >
                                                        {String(index + 1).padStart(2, "0")}
                                                    </span>
                                                    <span className="h-px flex-1 bg-[#c9a5ab]/30 transition-all duration-500 group-hover:bg-[#c9a5ab]/60" />
                                                </div>

                                                <h3
                                                    className="mt-3 text-2xl font-medium uppercase tracking-[0.12em] text-[#4a2d3a] transition-colors duration-500 group-hover:text-[#3a1d2a] md:text-3xl"
                                                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                                                >
                                                    {value.title}
                                                </h3>

                                                <p className="mt-3 text-[15px] leading-[1.9] text-[#5a3d4a]/80">
                                                    {value.description}
                                                </p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <ArticlesSection />
                
                                <ReviewsSection />

                <FAQSection />
                <CollectionBanner />
            </main>
            <Footer />
        </div>
    );
}
