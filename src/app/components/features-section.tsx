"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/base/buttons/button";
import { ArrowRight } from "@untitledui/icons";

const features = [
    {
        id: 1,
        tag: "Professional Protocol",
        subtitle: "Safe & Effective",
        title: "Reveal Your",
        titleHighlight: "Brightest Smile",
        description:
            "Our professional teeth whitening protocol respects your enamel and gums while delivering visible results. Each session is personalized to your initial shade for natural, harmonious lightening.",
        highlights: ["Enamel Safe", "Up to 7 Shades", "Lasting Results"],
        buttonText: "Book Session",
        buttonHref: "/booking",
        image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1974&auto=format&fit=crop",
        imagePosition: "left" as const,
    },
    {
        id: 2,
        tag: "The Founder",
        subtitle: "Prestige Smile",
        title: "A Premium Service Built on",
        titleHighlight: "Precision & Care",
        description:
            "I created Prestige Smile with the aim of offering aesthetic teeth whitening combining high standards, precision and attention to detail. Every session is caring, attentive and completely personalized.",
        highlights: ["Private Studio", "Personal Approach", "Premium Experience"],
        buttonText: "About Us",
        buttonHref: "/about",
        image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=2070&auto=format&fit=crop",
        imagePosition: "right" as const,
    },
];

const fadeIn = {
    hidden: { opacity: 0, filter: "blur(8px)" },
    visible: (delay: number) => ({
        opacity: 1,
        filter: "blur(0px)",
        transition: { duration: 0.5, delay, ease: [0.25, 0.46, 0.45, 0.94] as const },
    }),
};

export function FeaturesSection() {
    return (
        <section className="bg-primary">
            <div className="flex flex-col">
                {features.map((feature, index) => (
                    <div
                        key={feature.id}
                        className="grid grid-cols-1 md:grid-cols-2"
                    >
                        {/* Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 1.05 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                            className={`relative aspect-[3/2] overflow-hidden md:aspect-auto md:h-[650px] ${
                                feature.imagePosition === "right" ? "md:order-2" : "md:order-1"
                            }`}
                        >
                            <img
                                src={feature.image}
                                alt={feature.title}
                                className="size-full object-cover object-center"
                            />
                            {/* Subtle overlay gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                        </motion.div>

                        {/* Content */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            className={`flex flex-col justify-center bg-secondary px-6 py-10 md:px-12 md:py-12 lg:px-20 lg:py-14 ${
                                feature.imagePosition === "right" ? "md:order-1" : "md:order-2"
                            }`}
                        >
                            <div className="max-w-lg">
                                {/* Tag */}
                                <motion.span
                                    custom={0}
                                    variants={fadeIn}
                                    className="inline-block rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-700"
                                >
                                    {feature.tag}
                                </motion.span>

                                {/* Subtitle */}
                                {feature.subtitle && (
                                    <motion.span
                                        custom={0.05}
                                        variants={fadeIn}
                                        className="mt-5 block text-sm font-medium uppercase tracking-widest text-tertiary"
                                    >
                                        {feature.subtitle}
                                    </motion.span>
                                )}

                                {/* Title */}
                                <motion.h2
                                    custom={0.1}
                                    variants={fadeIn}
                                    className="mt-3 text-display-xs font-semibold leading-tight text-primary md:text-display-sm lg:text-display-md"
                                >
                                    {feature.title}{" "}
                                    <span className="text-brand-600">
                                        {feature.titleHighlight}
                                    </span>
                                </motion.h2>

                                {/* Description */}
                                {feature.description && (
                                    <motion.p
                                        custom={0.15}
                                        variants={fadeIn}
                                        className="mt-5 text-md leading-relaxed text-tertiary md:text-lg"
                                    >
                                        {feature.description}
                                    </motion.p>
                                )}

                                {/* Highlights */}
                                {feature.highlights && (
                                    <motion.div
                                        custom={0.2}
                                        variants={fadeIn}
                                        className="mt-6 flex flex-wrap gap-x-5 gap-y-2"
                                    >
                                        {feature.highlights.map((highlight, i) => (
                                            <span
                                                key={i}
                                                className="flex items-center gap-2 text-sm font-medium text-secondary"
                                            >
                                                <span className="size-1.5 rounded-full bg-brand-600" />
                                                {highlight}
                                            </span>
                                        ))}
                                    </motion.div>
                                )}

                                {/* Button */}
                                <motion.div custom={0.25} variants={fadeIn} className="mt-8">
                                    <Button
                                        href={feature.buttonHref}
                                        color="primary"
                                        size="lg"
                                        iconTrailing={ArrowRight}
                                    >
                                        {feature.buttonText}
                                    </Button>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                ))}
            </div>
        </section>
    );
}
