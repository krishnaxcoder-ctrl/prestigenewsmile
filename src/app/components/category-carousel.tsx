"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/base/buttons/button";
import { ArrowUpRight } from "@untitledui/icons";

const categories = [
    {
        id: 1,
        title: "RADIANCE SESSION",
        description:
            "A first whitening or maintenance treatment. Results visible from the very first session with up to 7 shades lighter.",
        image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1974&auto=format&fit=crop",
        href: "/services/radiance-session",
        price: "CHF 99",
    },
    {
        id: 2,
        title: "COMPLETE TREATMENT",
        description:
            "Two sessions spaced 48 hours apart for darker teeth. Intensified lightening with longer-lasting results.",
        image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=2070&auto=format&fit=crop",
        href: "/services/complete-treatment",
        price: "CHF 169",
    },
    {
        id: 3,
        title: "MAINTENANCE SESSION",
        description:
            "Revive the radiance of your smile and prolong results. Recommended approximately 6 months after initial treatment.",
        image: "https://images.unsplash.com/photo-1445527815219-ecbfec67492e?q=80&w=2070&auto=format&fit=crop",
        href: "/services/maintenance",
        price: "CHF 79",
    },
];

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (delay: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay, ease: [0, 0, 0.2, 1] as const },
    }),
};

export const CategoryCarousel = () => {
    return (
        <section className="px-4 py-16 md:py-16">
            <div className="mx-auto max-w-7xl">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {categories.map((category, index) => (
                        <motion.div
                            key={category.id}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            custom={index * 0.15}
                            variants={fadeInUp}
                            className="group"
                        >
                            <a href={category.href} className="block">
                                <div className="relative aspect-[850/1080] overflow-hidden rounded-2xl">
                                    <img
                                        src={category.image}
                                        alt={category.title}
                                        className="size-full object-cover transition duration-500 group-hover:scale-105"
                                    />
                                </div>
                            </a>

                            <div className="mt-4 sm:mt-5">
                                <div className="flex items-center justify-between">
                                    <h5 className="text-md font-semibold uppercase tracking-wide text-primary sm:text-lg">
                                        <a href={category.href}>{category.title}</a>
                                    </h5>
                                    <span className="text-lg font-bold text-brand-600">
                                        {category.price}
                                    </span>
                                </div>

                                <div className="mt-2 flex flex-col gap-3 sm:mt-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                                    <p className="text-sm leading-relaxed text-tertiary">
                                        {category.description}
                                    </p>

                                    <Button
                                        href={category.href}
                                        color="tertiary"
                                        size="md"
                                        iconTrailing={ArrowUpRight}
                                        className="w-fit shrink-0"
                                    >
                                        Book
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CategoryCarousel;
