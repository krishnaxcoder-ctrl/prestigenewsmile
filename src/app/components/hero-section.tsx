"use client";

import { motion } from "framer-motion";

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (delay: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay, ease: [0, 0, 0.2, 1] as const },
    }),
};

export const HeroSection = () => {
    return (
        <section className="flex flex-col items-center justify-center px-4 py-16 md:py-24 lg:py-32">
            {/* Subtitle */}
            <motion.span
                initial="hidden"
                animate="visible"
                custom={0}
                variants={fadeInUp}
                className="text-xs font-medium uppercase tracking-widest text-tertiary"
            >
                Nourish Your Skin Naturally
            </motion.span>

            {/* Main Heading with Inline Images */}
            <motion.div
                initial="hidden"
                animate="visible"
                custom={0.15}
                variants={fadeInUp}
                className="mt-6 flex max-w-5xl flex-wrap items-center justify-center gap-x-3 gap-y-2 text-center text-display-sm font-semibold text-primary md:text-display-md lg:text-display-lg"
            >
                <span>EXPERIENCE</span>
                <span>THE SYNERGY</span>
                <span className="inline-flex h-8 w-20 overflow-hidden rounded-full md:h-10 md:w-28 lg:h-12 lg:w-32">
                    <img
                        src="https://wdtmonica.wpengine.com/wp-content/uploads/2026/01/heading-with-img-01.jpg"
                        alt="Skincare product"
                        className="size-full object-cover"
                    />
                </span>
                <span>ADVANCED</span>
                <span>INGREDIENTS</span>
                <span className="inline-flex h-8 w-20 overflow-hidden rounded-full md:h-10 md:w-28 lg:h-12 lg:w-32">
                    <img
                        src="https://wdtmonica.wpengine.com/wp-content/uploads/2026/01/heading-with-img-02.jpg"
                        alt="Natural ingredients"
                        className="size-full object-cover"
                    />
                </span>
                <span>MINIMALIST</span>
                <span>SKINCARE</span>
                <span>TO ELEVATE</span>
                <span>YOUR DAILY</span>
                <span>GLOW.</span>
            </motion.div>
        </section>
    );
};

export default HeroSection;
