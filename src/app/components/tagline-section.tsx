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

export const TaglineSection = () => {
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
                Professional Teeth Whitening Studio
            </motion.span>

            {/* Main Heading with Inline Images */}
            <motion.div
                initial="hidden"
                animate="visible"
                custom={0.15}
                variants={fadeInUp}
                className="mt-6 flex max-w-5xl flex-wrap items-center justify-center gap-x-3 gap-y-2 text-center text-display-sm font-semibold text-primary md:text-display-md lg:text-display-lg"
            >
                <span>A BRIGHT</span>
                <span className="inline-flex h-8 w-20 overflow-hidden rounded-full md:h-10 md:w-28 lg:h-12 lg:w-32">
                    <img
                        src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=200&auto=format&fit=crop"
                        alt="Bright smile"
                        className="size-full object-cover"
                    />
                </span>
                <span>SMILE IS</span>
                <span>MUCH MORE</span>
                <span>THAN A</span>
                <span className="text-brand-600">DETAIL</span>
                <span>IT REVEALS</span>
                <span>THE</span>
                <span className="inline-flex h-8 w-20 overflow-hidden rounded-full md:h-10 md:w-28 lg:h-12 lg:w-32">
                    <img
                        src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=200&auto=format&fit=crop"
                        alt="Teeth whitening treatment"
                        className="size-full object-cover"
                    />
                </span>
                <span className="text-brand-600">CONFIDENCE</span>
                <span>YOU HAVE</span>
                <span>IN</span>
                <span className="text-brand-600">YOURSELF.</span>
            </motion.div>
        </section>
    );
};

export default TaglineSection;
