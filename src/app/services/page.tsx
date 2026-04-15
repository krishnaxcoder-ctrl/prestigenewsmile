"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Header } from "@/app/components/header";
import { Footer } from "@/app/components/footer";

const services = [
    {
        id: "single-session",
        title: "Initial Teeth Whitening Session",
        subtitle: "1 Session",
        price: "99",
        currency: "CHF / €",
        duration: "60 minutes",
        shades: "Up to 7 shades lighter",
        description:
            "Our signature single session treatment is the perfect introduction to professional teeth whitening. Using advanced LED technology combined with EU-approved, enamel-safe whitening gels, we deliver visible results from the very first appointment. Our specialists assess your current shade and tailor the treatment to your sensitivity and goals. The process is entirely painless — simply relax while three carefully timed activation cycles work their magic. Whether you have a special event, an interview, or simply want to boost your confidence, this one-hour treatment delivers up to 7 shades brighter in a single visit.",
        includes: [
            "Initial consultation and shade assessment",
            "Gum protection application",
            "Professional whitening gel application",
            "LED light activation (3 cycles of 15–20 min)",
            "Post-treatment shade comparison",
            "Personalised aftercare advice",
        ],
        idealFor:
            "First-time clients, special events, or anyone wanting a noticeable improvement in a single visit.",
        image: "/RADIANCE SESSION.png",
    },
    {
        id: "complete-treatment",
        title: "Complete Treatment",
        subtitle: "2 Sessions",
        price: "169",
        currency: "CHF / €",
        duration: "2 × 60 minutes (spaced 48h apart)",
        shades: "Up to 9+ shades lighter",
        description:
            "Our most comprehensive whitening programme is designed for clients seeking maximum results. Two sessions spaced 48 hours apart allow the whitening agents to work progressively — the first lifts surface and embedded stains from coffee, tea, wine, or tobacco, while the second pushes brightness to its full potential, often achieving 9+ shades lighter. Each session includes a consultation, gum protection, and three cycles of LED-activated whitening. Between appointments, we track your progress and adjust the plan for optimal results. This is the gold standard for a truly radiant smile that lasts.",
        includes: [
            "Two full whitening sessions (48h apart)",
            "Initial consultation and shade assessment",
            "Gum protection at each session",
            "Professional whitening gel application × 2",
            "LED light activation × 2 (3 cycles per session)",
            "Progress tracking between sessions",
            "Comprehensive aftercare plan",
        ],
        idealFor:
            "Clients with darker teeth, heavy staining from coffee/tea/smoking, or those wanting the most dramatic transformation.",
        image: "/COMPLETE TREATMENT.avif",
    },
    {
        id: "maintenance",
        title: "Maintenance Session",
        subtitle: "Touch-up",
        price: "79",
        currency: "CHF / €",
        duration: "45 minutes",
        shades: "Restore original brightness",
        description:
            "Keep your smile at its brightest with regular maintenance sessions. Recommended every 6 to 12 months after your initial treatment, this touch-up is designed to combat natural re-staining from everyday habits like coffee, tea, or wine. In just 45 minutes, we refresh your brightness with professional whitening gel and two targeted LED activation cycles. Each visit begins with a shade assessment to track your results and personalise the session. Think of it as a reset button for your smile — quick, comfortable, and effective. Clients who invest in regular touch-ups maintain a brighter appearance year after year.",
        includes: [
            "Shade check and progress assessment",
            "Gum protection application",
            "Professional whitening gel application",
            "LED light activation (2 cycles of 15–20 min)",
            "Updated aftercare recommendations",
        ],
        idealFor:
            "Existing clients who want to maintain their results. Recommended every 6–12 months depending on lifestyle.",
        image:
            "https://images.unsplash.com/photo-1445527815219-ecbfec67492e?q=80&w=2070&auto=format&fit=crop",
    },
];

const duoOffer = {
    title: "Duo / Couple Offer",
    discount: "10",
    description:
        "Share the experience with a friend, partner, or family member. Book two sessions together and enjoy 10% off for both. A brighter smile is always better when shared.",
};

export default function ServicesPage() {
    return (
        <>
            <Header />
            <main className="overflow-x-hidden bg-primary">
                {/* Hero Header */}
                <section className="relative overflow-hidden bg-gradient-to-b from-[#f7f2ec] to-[#f3ede6] px-4 py-12 md:px-8 md:py-16 lg:px-16">
                    <div className="relative mx-auto max-w-7xl text-center">
                        <nav className="mb-6 flex items-center justify-center gap-3 text-[11px] font-medium uppercase tracking-[0.3em] text-[#b8929a]">
                            <a href="/" className="transition hover:text-[#4a2d3a]">
                                Home
                            </a>
                            <span className="size-1 rotate-45 bg-[#c9a5ab]/60" />
                            <span className="text-[#4a2d3a]">Services</span>
                        </nav>

                        <motion.h1
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-3xl font-light leading-[1.1] text-[#4a2d3a] md:text-4xl lg:text-5xl"
                            style={{ fontFamily: "'Cormorant Garamond', serif" }}
                        >
                            Our <span className="italic text-[#8b5a6a]">Services</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="mx-auto mt-4 max-w-xl text-[14px] italic leading-[1.7] text-[#5a3d4a]/85 md:text-[15px]"
                            style={{ fontFamily: "'Cormorant Garamond', serif" }}
                        >
                            Professional teeth whitening treatments tailored to your needs. Safe, effective, visible results from the very first session.
                        </motion.p>
                    </div>
                </section>

                {/* Services */}
                <div className="bg-[#faf6f1] px-4 py-16 md:px-8 md:py-24 lg:px-16">
                    <div className="mx-auto max-w-6xl space-y-24 md:space-y-32">
                        {services.map((service, index) => {
                            const isReversed = index % 2 === 1;
                            const num = String(index + 1).padStart(2, "0");

                            return (
                                <motion.section
                                    key={service.id}
                                    id={service.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.6 }}
                                    className="scroll-mt-24"
                                >
                                    <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
                                        {/* Service Image */}
                                        <div className={isReversed ? "lg:order-2" : ""}>
                                            <div className="relative">
                                                {/* Corner accents */}
                                                <div className="pointer-events-none absolute -top-2 -left-2 z-10 size-6 border-l border-t border-[#c9a5ab]/70" />
                                                <div className="pointer-events-none absolute -top-2 -right-2 z-10 size-6 border-r border-t border-[#c9a5ab]/70" />
                                                <div className="pointer-events-none absolute -bottom-2 -left-2 z-10 size-6 border-b border-l border-[#c9a5ab]/70" />
                                                <div className="pointer-events-none absolute -bottom-2 -right-2 z-10 size-6 border-b border-r border-[#c9a5ab]/70" />

                                                <div className="overflow-hidden bg-[#f7f2ec] ring-1 ring-inset ring-[#c9a5ab]/30">
                                                    <img
                                                        src={service.image}
                                                        alt={service.title}
                                                        className="aspect-[3/4] w-full object-cover"
                                                    />
                                                </div>

                                                {/* Price badge — overlay on image */}
                                                <div className="absolute bottom-6 left-6 bg-[#f7f2ec]/95 px-5 py-3 shadow-md backdrop-blur-sm ring-1 ring-inset ring-[#c9a5ab]/40">
                                                    <p className="text-[9px] font-medium uppercase tracking-[0.3em] text-[#b8929a]">
                                                        From
                                                    </p>
                                                    <p className="mt-0.5 flex items-baseline gap-1.5">
                                                        <span
                                                            className="text-3xl font-light text-[#4a2d3a]"
                                                            style={{ fontFamily: "'Cormorant Garamond', serif" }}
                                                        >
                                                            {service.price}
                                                        </span>
                                                        <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-[#8b5a6a]">
                                                            {service.currency}
                                                        </span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Details */}
                                        <div className={isReversed ? "lg:order-1" : ""}>
                                            {/* Number + subtitle kicker */}
                                            <div className="flex items-center gap-3">
                                                <span
                                                    className="text-4xl font-light italic text-[#c9a5ab]"
                                                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                                                >
                                                    {num}
                                                </span>
                                                <span className="h-px flex-1 bg-[#c9a5ab]/40" />
                                                <span className="text-[10px] font-medium uppercase tracking-[0.35em] text-[#8b5a6a]">
                                                    {service.subtitle}
                                                </span>
                                            </div>

                                            {/* Title */}
                                            <h2
                                                className="mt-4 text-3xl font-light leading-tight text-[#4a2d3a] md:text-4xl lg:text-5xl"
                                                style={{ fontFamily: "'Cormorant Garamond', serif" }}
                                            >
                                                {service.title}
                                            </h2>

                                            {/* Divider */}
                                            <div className="mt-4 flex items-center gap-3">
                                                <div className="h-px w-10 bg-[#c9a5ab]" />
                                                <div className="size-1.5 rotate-45 border border-[#c9a5ab]" />
                                                <div className="h-px w-16 bg-[#c9a5ab]/60" />
                                            </div>

                                            {/* Description */}
                                            <p className="mt-6 text-sm leading-[1.8] text-[#5a3d4a]/85 md:text-[15px]">
                                                {service.description}
                                            </p>

                                            {/* Quick Stats */}
                                            <div className="mt-8 grid grid-cols-2 gap-3 md:gap-4">
                                                <div className="border border-[#c9a5ab]/30 bg-white/60 p-4 backdrop-blur-sm">
                                                    <p className="text-[9px] font-medium uppercase tracking-[0.3em] text-[#b8929a]">
                                                        Duration
                                                    </p>
                                                    <p className="mt-2 text-sm text-[#4a2d3a]">
                                                        {service.duration}
                                                    </p>
                                                </div>
                                                <div className="border border-[#c9a5ab]/30 bg-white/60 p-4 backdrop-blur-sm">
                                                    <p className="text-[9px] font-medium uppercase tracking-[0.3em] text-[#b8929a]">
                                                        Results
                                                    </p>
                                                    <p className="mt-2 text-sm text-[#4a2d3a]">
                                                        {service.shades}
                                                    </p>
                                                </div>
                                            </div>

                                            {/* What's included */}
                                            <div className="mt-8">
                                                <div className="flex items-center gap-3">
                                                    <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#b8929a]">
                                                        What&apos;s Included
                                                    </p>
                                                    <div className="size-1 rotate-45 bg-[#c9a5ab]/70" />
                                                    <div className="h-px flex-1 bg-[#c9a5ab]/30" />
                                                </div>
                                                <ul className="mt-4 space-y-3">
                                                    {service.includes.map((item, i) => (
                                                        <li key={i} className="flex items-start gap-3">
                                                            <div className="mt-0.5 flex size-5 shrink-0 items-center justify-center border border-[#c9a5ab]/50 bg-white/60">
                                                                <svg
                                                                    className="size-2.5 text-[#8b5a6a]"
                                                                    fill="none"
                                                                    viewBox="0 0 24 24"
                                                                    strokeWidth={2.5}
                                                                    stroke="currentColor"
                                                                >
                                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                                </svg>
                                                            </div>
                                                            <span className="text-sm leading-relaxed text-[#4a2d3a]">{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            {/* Ideal for */}
                                            <div className="relative mt-8 border border-[#c9a5ab]/40 bg-white/50 p-5 backdrop-blur-sm">
                                                <div className="pointer-events-none absolute -top-1 -left-1 size-4 border-l border-t border-[#c9a5ab]" />
                                                <div className="pointer-events-none absolute -bottom-1 -right-1 size-4 border-b border-r border-[#c9a5ab]" />

                                                <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#8b5a6a]">
                                                    Ideal For
                                                </p>
                                                <p className="mt-2 text-sm italic leading-relaxed text-[#5a3d4a]/85">
                                                    {service.idealFor}
                                                </p>
                                            </div>

                                            {/* CTA */}
                                            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                                                <Link
                                                    href="/booking"
                                                    className="inline-flex items-center justify-center gap-2 border border-[#4a2d3a] bg-[#4a2d3a] px-8 py-4 text-[11px] font-medium uppercase tracking-[0.3em] text-white transition duration-200 ease-linear hover:bg-[#3a1d2a]"
                                                >
                                                    Book This Treatment
                                                </Link>
                                                <a
                                                    href="tel:+41783000619"
                                                    className="inline-flex items-center justify-center border border-[#c9a5ab]/60 bg-transparent px-8 py-4 text-[11px] font-medium uppercase tracking-[0.3em] text-[#4a2d3a] transition duration-200 ease-linear hover:border-[#4a2d3a] hover:bg-[#4a2d3a] hover:text-white"
                                                >
                                                    Call Us
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </motion.section>
                            );
                        })}
                    </div>

                    {/* Duo Offer */}
                    <motion.section
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mx-auto mt-24 max-w-4xl md:mt-32"
                    >
                        <div className="relative">
                            {/* Corner accents */}
                            <div className="pointer-events-none absolute -top-2 -left-2 size-6 border-l border-t border-[#c9a5ab]/70" />
                            <div className="pointer-events-none absolute -top-2 -right-2 size-6 border-r border-t border-[#c9a5ab]/70" />
                            <div className="pointer-events-none absolute -bottom-2 -left-2 size-6 border-b border-l border-[#c9a5ab]/70" />
                            <div className="pointer-events-none absolute -bottom-2 -right-2 size-6 border-b border-r border-[#c9a5ab]/70" />

                            <div className="relative border border-[#c9a5ab]/40 bg-gradient-to-br from-white via-[#fdfaf7] to-[#f5efe7] p-10 text-center md:p-14">
                                <p className="text-[10px] font-medium uppercase tracking-[0.35em] text-[#b8929a]">
                                    Special Offer
                                </p>

                                <h2
                                    className="mt-3 text-3xl font-light text-[#4a2d3a] md:text-4xl lg:text-5xl"
                                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                                >
                                    {duoOffer.title}
                                </h2>

                                {/* Big discount */}
                                <div className="mt-5 flex items-start justify-center gap-1">
                                    <span
                                        className="text-5xl font-light text-[#8b5a6a] md:text-6xl"
                                        style={{ fontFamily: "'Cormorant Garamond', serif" }}
                                    >
                                        −
                                    </span>
                                    <span
                                        className="text-6xl font-light italic text-[#8b5a6a] md:text-8xl"
                                        style={{ fontFamily: "'Cormorant Garamond', serif" }}
                                    >
                                        {duoOffer.discount}
                                    </span>
                                    <span
                                        className="mt-3 text-3xl font-light text-[#8b5a6a] md:text-4xl"
                                        style={{ fontFamily: "'Cormorant Garamond', serif" }}
                                    >
                                        %
                                    </span>
                                </div>

                                <div className="mt-5 flex items-center justify-center gap-3">
                                    <div className="h-px w-12 bg-[#c9a5ab]/60" />
                                    <div className="size-1.5 rotate-45 border border-[#c9a5ab]" />
                                    <div className="h-px w-12 bg-[#c9a5ab]/60" />
                                </div>

                                <p className="mx-auto mt-5 max-w-lg text-sm italic leading-relaxed text-[#5a3d4a]/85 md:text-base">
                                    {duoOffer.description}
                                </p>

                                <div className="mt-8">
                                    <Link
                                        href="/booking"
                                        className="inline-flex items-center justify-center gap-2 border border-[#4a2d3a] bg-[#4a2d3a] px-10 py-4 text-[11px] font-medium uppercase tracking-[0.3em] text-white transition duration-200 ease-linear hover:bg-[#3a1d2a]"
                                    >
                                        Book a Duo Session
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </motion.section>

                    {/* Payment & Info */}
                    <div className="mx-auto mt-16 max-w-4xl text-center md:mt-20">
                        <p className="text-[10px] font-medium uppercase tracking-[0.35em] text-[#b8929a]">
                            Accepted Payment Methods
                        </p>
                        <div className="mt-4 inline-flex items-center gap-5 border-y border-[#c9a5ab]/30 px-8 py-3">
                            {["Twint", "Révolut", "Cash"].map((method, index, arr) => (
                                <span key={method} className="flex items-center gap-5">
                                    <span className="text-sm font-medium tracking-wide text-[#4a2d3a]">
                                        {method}
                                    </span>
                                    {index < arr.length - 1 && (
                                        <span className="size-1 rotate-45 bg-[#c9a5ab]/70" />
                                    )}
                                </span>
                            ))}
                        </div>

                        <p className="mx-auto mt-6 max-w-2xl text-xs italic leading-relaxed text-[#8b5a6a]/80 md:text-sm">
                            All treatments performed by certified professionals · EU-approved products · Individual results may vary
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
