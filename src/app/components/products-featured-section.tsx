"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/base/buttons/button";
import { ArrowRight, Heart, Star01, ShoppingBag01 } from "@untitledui/icons";

const products = [
    {
        id: 1,
        name: "Night Lip Balm",
        category: "Modern Nail Polish",
        priceRange: "$55.00 – $64.00",
        rating: 4,
        badges: ["Sale", "Hot Deal"],
        primaryImage: "https://wdtmonica.wpengine.com/wp-content/uploads/2026/01/shop-13-01.png",
        secondaryImage: "https://wdtmonica.wpengine.com/wp-content/uploads/2026/01/shop-13-02.jpg",
        href: "/product/night-lip-balm",
    },
    {
        id: 2,
        name: "Soft Skin Bar",
        category: "Renew Hand Sanitizer",
        priceRange: "$30.00 – $35.00",
        rating: 4,
        badges: ["Sale", "Hot Deal"],
        primaryImage: "https://wdtmonica.wpengine.com/wp-content/uploads/2026/01/shop-10-01.png",
        secondaryImage: "https://wdtmonica.wpengine.com/wp-content/uploads/2026/01/shop-10-02.jpg",
        href: "/product/soft-skin-bar",
    },
    ];

const fadeIn = {
    hidden: { opacity: 0, filter: "blur(8px)" },
    visible: (delay: number) => ({
        opacity: 1,
        filter: "blur(0px)",
        transition: { duration: 0.5, delay, ease: [0.25, 0.46, 0.45, 0.94] },
    }),
};

const cardFadeIn = {
    hidden: { opacity: 0, x: -20 },
    visible: (delay: number) => ({
        opacity: 1,
        x: 0,
        transition: { duration: 0.5, delay, ease: "easeOut" },
    }),
};

function StarRating({ rating }: { rating: number }) {
    return (
        <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
                <Star01
                    key={i}
                    className={`size-3.5 ${
                        i < rating ? "fill-warning-400 text-warning-400" : "text-tertiary"
                    }`}
                />
            ))}
        </div>
    );
}

export function ProductsFeaturedSection() {
    return (
        <section className="bg-secondary px-4 py-16 md:px-8 md:py-24 lg:px-16">
            <div className="mx-auto max-w-7xl">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
                    {/* Left Side - Header + Products */}
                    <div>
                        {/* Header */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            className="mb-8"
                        >
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
                                className="mt-4 text-display-xs font-semibold text-primary md:text-display-sm"
                            >
                                Our Favorite Picks{" "}
                                <span className="text-brand-600">Shop</span>
                            </motion.h2>
                            <motion.div custom={0.1} variants={fadeIn} className="mt-6">
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

                        {/* Products List */}
                        <div className="flex flex-col gap-4">
                            {products.map((product, index) => (
                                <motion.div
                                    key={product.id}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, margin: "-50px" }}
                                    custom={index * 0.1}
                                    variants={cardFadeIn}
                                    className="group flex gap-4 rounded-2xl bg-primary p-4 shadow-sm transition duration-300 hover:shadow-md"
                                >
                                    {/* Product Image */}
                                    <div className="relative aspect-square w-28 shrink-0 overflow-hidden rounded-xl bg-secondary md:w-36">
                                        <a href={product.href} className="block size-full">
                                            <img
                                                src={product.primaryImage}
                                                alt={product.name}
                                                className="absolute inset-0 size-full object-cover transition duration-500 group-hover:opacity-0"
                                            />
                                            <img
                                                src={product.secondaryImage}
                                                alt={product.name}
                                                className="absolute inset-0 size-full object-cover opacity-0 transition duration-500 group-hover:opacity-100"
                                            />
                                        </a>

                                        {/* Badges */}
                                        <div className="absolute left-2 top-2 flex flex-col gap-1">
                                            {product.badges.slice(0, 1).map((badge) => (
                                                <span
                                                    key={badge}
                                                    className={`rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase ${
                                                        badge === "Sale"
                                                            ? "bg-error-500 text-white"
                                                            : "bg-brand-600 text-white"
                                                    }`}
                                                >
                                                    {badge}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Product Details */}
                                    <div className="flex flex-1 flex-col justify-center">
                                        <div className="flex items-center gap-2">
                                            <a
                                                href={product.href}
                                                className="text-xs text-tertiary transition duration-100 ease-linear hover:text-brand-600"
                                            >
                                                {product.category}
                                            </a>
                                            <StarRating rating={product.rating} />
                                        </div>

                                        <h3 className="mt-1.5 text-md font-semibold text-primary md:text-lg">
                                            <a
                                                href={product.href}
                                                className="transition duration-100 ease-linear hover:text-brand-600"
                                            >
                                                {product.name}
                                            </a>
                                        </h3>

                                        <p className="mt-1 text-sm font-medium text-secondary">
                                            {product.priceRange}
                                        </p>

                                        <div className="mt-3 flex items-center gap-2">
                                            <Button
                                                href={product.href}
                                                color="primary"
                                                size="sm"
                                                iconLeading={ShoppingBag01}
                                            >
                                                Select Options
                                            </Button>
                                            <button
                                                className="flex size-8 items-center justify-center rounded-full border border-secondary text-tertiary transition duration-100 ease-linear hover:border-brand-600 hover:text-brand-600"
                                                aria-label="Add to wishlist"
                                            >
                                                <Heart className="size-4" />
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side - Sticky Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="hidden lg:sticky lg:top-24 lg:block lg:h-fit"
                    >
                        <div className="overflow-hidden rounded-3xl">
                            <img
                                src="https://wdtmonica.wpengine.com/wp-content/uploads/2026/01/home2-shop-aside-img.jpg"
                                alt="Featured skincare products"
                                className="size-full object-cover"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
