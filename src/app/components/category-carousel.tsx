"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/base/buttons/button";
import { ArrowUpRight } from "@untitledui/icons";

const categories = [
    {
        id: 1,
        title: "EYE BROW",
        description:
            "Infused With Nourishing Actives Helps Define And Perfect Brows Naturally And Beautifully Everyday",
        image: "https://wdtmonica.wpengine.com/wp-content/uploads/2026/01/Home1-category-img-01.jpg",
        href: "/shop",
    },
    {
        id: 2,
        title: "HAIR REVIVAL",
        description:
            "Infused with natural botanicals and moisture-rich oils our hair care helps restore strength and shine",
        image: "https://wdtmonica.wpengine.com/wp-content/uploads/2026/01/Home1-category-img-02.jpg",
        href: "/shop",
    },
    {
        id: 3,
        title: "HAND SERUM",
        description:
            "Infused With Hydrating Botanicals Helps Restore Soft, Smooth Skin For A Healthy Radiant Glow",
        image: "https://wdtmonica.wpengine.com/wp-content/uploads/2026/01/Home1-category-img-03.jpg",
        href: "/shop",
    },
];

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (delay: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay, ease: "easeOut" },
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

                            <div className="mt-5">
                                <h5 className="text-lg font-semibold uppercase tracking-wide text-primary">
                                    <a href={category.href}>{category.title}</a>
                                </h5>

                                <div className="mt-3 flex items-start justify-between gap-4">
                                    <p className="text-sm leading-relaxed text-tertiary">
                                        {category.description}
                                    </p>

                                    <Button
                                        href={category.href}
                                        color="tertiary"
                                        size="md"
                                        iconTrailing={ArrowUpRight}
                                        className="shrink-0"
                                    >
                                        Shop
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
