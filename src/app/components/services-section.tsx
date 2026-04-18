"use client";

import Link from "next/link";
import { ArrowUpRight } from "@untitledui/icons";

const categories = [
    {
        id: 1,
        title: "INITIAL TEETH WHITENING SESSION",
        description: "A first whitening or maintenance treatment. Results visible from the very first session with up to 7 shades lighter.",
        image: "/technology-left-img1.jpg",
        href: "/services/radiance-session",
        price: "CHF/€ 99",
    },
    {
        id: 2,
        title: "COMPLETE TREATMENT",
        description: "Two sessions spaced 48 hours apart for darker teeth. Intensified lightening with longer-lasting results.",
        image: "/COMPLETE TREATMENT.avif",
        href: "/services/complete-treatment",
        price: "CHF/€ 169",
    },
    {
        id: 3,
        title: "MAINTENANCE SESSION (TOUCH-UP)",
        description: "Revive the radiance of your smile and prolong results. Recommended approximately 6 months after initial treatment.",
        image: "https://images.unsplash.com/photo-1445527815219-ecbfec67492e?q=80&w=2070&auto=format&fit=crop",
        href: "/services/maintenance",
        price: "CHF/€ 79",
    },
];

export const ServicesSection = () => {
    return (
        <section className="px-4 py-16 md:py-16">
            <div className="mx-auto max-w-[1400px]">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {categories.map((category) => (
                        <div key={category.id} className="group">
                            <a href={category.href} className="block">
                                <div className="relative aspect-[850/1080] overflow-hidden rounded-2xl">
                                    <img
                                        src={category.image}
                                        alt={category.title}
                                        className="size-full object-cover"
                                    />
                                </div>
                            </a>
                            <div className="mt-4 sm:mt-5">
                                <h5 className="text-md font-medium uppercase tracking-wide text-primary sm:text-lg md:text-xl lg:text-xl">
                                    <a href={category.href}>{category.title}</a>
                                </h5>
                                <p className="mt-2 text-sm leading-relaxed text-tertiary sm:mt-3">
                                    {category.description}
                                </p>
                                <div className="mt-4 flex items-center justify-between">
                                    <Link
                                        href={category.href}
                                        className="inline-flex items-center gap-1.5 text-sm font-medium uppercase tracking-wide text-primary underline underline-offset-4 transition-colors hover:text-brand-600"
                                    >
                                        Book Now
                                        <ArrowUpRight className="size-4" />
                                    </Link>
                                    <span className="text-sm font-medium uppercase tracking-wide text-primary md:text-md">
                                        {category.price}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
