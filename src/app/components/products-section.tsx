"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/base/buttons/button";
import { ArrowRight, Heart, Star01, ShoppingBag01 } from "@untitledui/icons";

const products = [
    {
        id: 1,
        name: "Whitening Kit Pro",
        category: "Whitening Kits",
        priceRange: "CHF 89.00 – CHF 119.00",
        rating: 5,
        badges: ["Best Seller"],
        primaryImage: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=800",
        secondaryImage: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800",
        href: "/product/whitening-kit-pro",
    },
    {
        id: 2,
        name: "Whitening Strips",
        category: "Whitening Strips",
        priceRange: "CHF 45.00 – CHF 55.00",
        rating: 5,
        badges: ["Sale", "Popular"],
        primaryImage: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800",
        secondaryImage: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=800",
        href: "/product/whitening-strips",
    },
    {
        id: 3,
        name: "Sensitivity Relief Gel",
        category: "Sensitivity Care",
        priceRange: "CHF 25.00 – CHF 32.00",
        rating: 5,
        badges: ["Essential"],
        primaryImage: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=800",
        secondaryImage: "https://images.unsplash.com/photo-1445527815219-ecbfec67492e?w=800",
        href: "/product/sensitivity-gel",
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

const cardFadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (delay: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay, ease: [0, 0, 0.2, 1] as const },
    }),
};

function StarRating({ rating }: { rating: number }) {
    return (
        <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
                <Star01
                    key={i}
                    className={`size-4 ${
                        i < rating ? "fill-warning-400 text-warning-400" : "text-tertiary"
                    }`}
                />
            ))}
        </div>
    );
}

export function ProductsSection() {
    return (
        <section className="bg-primary px-4 py-16 md:px-8 md:py-24 lg:px-16">
            <div className="mx-auto max-w-7xl">
                {/* Header */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="mb-12 flex flex-col items-center justify-between gap-6 md:mb-16 md:flex-row md:items-end"
                >
                    <div className="text-center md:text-left">
                        <motion.span
                            custom={0}
                            variants={fadeIn}
                            className="mb-3 inline-block rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-700"
                        >
                            Our Picks
                        </motion.span>
                        <motion.h2
                            custom={0.05}
                            variants={fadeIn}
                            className="mt-4 text-display-xs font-semibold text-primary md:text-display-sm lg:text-display-md"
                        >
                            Explore Top{" "}
                            <span className="text-brand-600">Selling</span>
                        </motion.h2>
                        <motion.p
                            custom={0.1}
                            variants={fadeIn}
                            className="mt-3 max-w-2xl text-md text-tertiary md:text-lg"
                        >
                            Discover our most loved products, handpicked for their quality and effectiveness.
                        </motion.p>
                    </div>
                    <motion.div custom={0.15} variants={fadeIn}>
                        <Button
                            href="/shop"
                            color="secondary"
                            size="lg"
                            iconTrailing={ArrowRight}
                        >
                            View All
                        </Button>
                    </motion.div>
                </motion.div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            custom={index * 0.1}
                            variants={cardFadeIn}
                            className="group"
                        >
                            {/* Product Image */}
                            <div className="relative aspect-[850/1020] overflow-hidden rounded-2xl bg-secondary">
                                <a href={product.href} className="block size-full">
                                    {/* Primary Image */}
                                    <img
                                        src={product.primaryImage}
                                        alt={product.name}
                                        className="absolute inset-0 size-full object-cover transition duration-500 group-hover:opacity-0"
                                    />
                                    {/* Secondary Image (on hover) */}
                                    <img
                                        src={product.secondaryImage}
                                        alt={product.name}
                                        className="absolute inset-0 size-full object-cover opacity-0 transition duration-500 group-hover:opacity-100"
                                    />
                                </a>

                                {/* Badges */}
                                <div className="absolute left-4 top-4 flex flex-col gap-2">
                                    {product.badges.map((badge) => (
                                        <span
                                            key={badge}
                                            className={`rounded-full px-3 py-1 text-xs font-semibold uppercase ${
                                                badge === "Sale"
                                                    ? "bg-error-500 text-white"
                                                    : "bg-brand-600 text-white"
                                            }`}
                                        >
                                            {badge}
                                        </span>
                                    ))}
                                </div>

                                {/* Action Buttons */}
                                <div className="absolute right-4 top-4 flex flex-col gap-2 opacity-0 transition duration-300 group-hover:opacity-100">
                                    <button
                                        className="flex size-10 items-center justify-center rounded-full bg-white shadow-md transition duration-100 ease-linear hover:bg-brand-50 hover:text-brand-600"
                                        aria-label="Add to wishlist"
                                    >
                                        <Heart className="size-5" />
                                    </button>
                                </div>

                                {/* Add to Cart Button */}
                                <div className="absolute inset-x-4 bottom-4 translate-y-4 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                                    <Button
                                        href={product.href}
                                        color="primary"
                                        size="md"
                                        iconLeading={ShoppingBag01}
                                        className="w-full justify-center"
                                    >
                                        Select Options
                                    </Button>
                                </div>
                            </div>

                            {/* Product Details */}
                            <div className="mt-4">
                                <div className="flex items-center justify-between">
                                    <a
                                        href={product.href}
                                        className="text-sm text-tertiary transition duration-100 ease-linear hover:text-brand-600"
                                    >
                                        {product.category}
                                    </a>
                                    <StarRating rating={product.rating} />
                                </div>

                                <h3 className="mt-2 text-lg font-semibold text-primary">
                                    <a
                                        href={product.href}
                                        className="transition duration-100 ease-linear hover:text-brand-600"
                                    >
                                        {product.name}
                                    </a>
                                </h3>

                                <p className="mt-1 text-md font-medium text-secondary">
                                    {product.priceRange}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
