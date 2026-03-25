"use client";

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
        image: "https://wordpressthemes.live/WCG10/WCM231_cosmika/cosmetic02/wp-content/uploads/2025/04/banner_01.jpg",
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
        image: "https://wordpressthemes.live/WCG10/WCM231_cosmika/cosmetic02/wp-content/uploads/2025/04/banner_02.jpg",
        imagePosition: "right" as const,
    },
];

export function FeaturesSection() {
    return (
        <section className="bg-primary">
            {/* Section Header */}
            <div className="bg-secondary px-4 pb-6 pt-12 text-center md:pb-8 md:pt-16">
                <p className="text-sm font-medium uppercase tracking-widest text-tertiary">What We Offer</p>
                <h2
                    className="mt-3 text-display-xs font-medium uppercase text-primary md:text-display-sm lg:text-display-md"
                    style={{ fontFamily: "var(--global-heading-font-family)" }}
                >
                    Our Services
                </h2>
            </div>
            <div className="flex flex-col">
                {features.map((feature) => (
                    <div key={feature.id}>
                        {/* Mobile Layout - Image card with overlay text */}
                        <div className="md:hidden">
                            <a
                                href={feature.buttonHref}
                                className="block p-3"
                            >
                                <div className="relative aspect-[4/2.5] overflow-hidden">
                                    <img
                                        src={feature.image}
                                        alt={feature.title}
                                        className="size-full object-cover object-center"
                                    />
                                    {/* Overlay gradient for text readability */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />

                                    {/* Overlay content */}
                                    <div className="absolute inset-0 flex flex-col justify-center px-6">
                                        <h2
                                            className="text-display-xs font-medium uppercase leading-tight text-white"
                                            style={{ fontFamily: "var(--global-heading-font-family)" }}
                                        >
                                            {feature.title}<br />
                                            {feature.titleHighlight}
                                        </h2>
                                        <span className="mt-4 text-sm font-medium text-white underline underline-offset-4">
                                            Discover Now
                                        </span>
                                    </div>
                                </div>
                            </a>
                        </div>

                        {/* Desktop Layout - Split image and content */}
                        <div className="hidden md:grid md:grid-cols-2">
                            {/* Image */}
                            <div
                                className={`relative overflow-hidden md:h-[650px] ${
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
                            </div>

                            {/* Content */}
                            <div
                                className={`flex flex-col justify-center bg-secondary px-12 py-12 lg:px-20 lg:py-14 ${
                                    feature.imagePosition === "right" ? "md:order-1" : "md:order-2"
                                }`}
                            >
                                <div className="max-w-lg">
                                    {/* Tag */}
                                    <span className="inline-block rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-700">
                                        {feature.tag}
                                    </span>

                                    {/* Subtitle */}
                                    {feature.subtitle && (
                                        <span className="mt-5 block text-sm font-medium uppercase tracking-widest text-tertiary">
                                            {feature.subtitle}
                                        </span>
                                    )}

                                    {/* Title */}
                                    <h2 className="mt-3 text-display-sm font-semibold uppercase leading-tight text-primary lg:text-display-md" style={{ fontFamily: "var(--global-heading-font-family)" }}>
                                        {feature.title}{" "}
                                        <span className="text-brand-600">
                                            {feature.titleHighlight}
                                        </span>
                                    </h2>

                                    {/* Description */}
                                    {feature.description && (
                                        <p className="mt-5 text-md leading-relaxed text-tertiary md:text-lg">
                                            {feature.description}
                                        </p>
                                    )}

                                    {/* Highlights */}
                                    {feature.highlights && (
                                        <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
                                            {feature.highlights.map((highlight, i) => (
                                                <span
                                                    key={i}
                                                    className="flex items-center gap-2 text-sm font-medium text-secondary"
                                                >
                                                    <span className="size-1.5 rounded-full bg-brand-600" />
                                                    {highlight}
                                                </span>
                                            ))}
                                        </div>
                                    )}

                                    {/* Button */}
                                    <div className="mt-8">
                                        <Button
                                            href={feature.buttonHref}
                                            color="primary"
                                            size="lg"
                                            iconTrailing={ArrowRight}
                                        >
                                            {feature.buttonText}
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {/* Mobile Section Description */}
            <div className="bg-secondary px-4 py-6 text-center md:hidden">
                <p className="text-sm leading-relaxed text-tertiary">
                    Experience professional teeth whitening with personalized care. Our treatments are safe, effective, and designed to give you a naturally brighter smile.
                </p>
            </div>
        </section>
    );
}
