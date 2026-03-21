"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/base/buttons/button";
import { ArrowRight, Star01, ShoppingBag01, Loading01 } from "@untitledui/icons";
import { WishlistButton } from "@/components/base/wishlist-button/wishlist-button";
import { getProducts, type Product } from "@/lib/supabase";

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
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchProducts() {
            try {
                const data = await getProducts();
                // Get first 3 products for the homepage
                setProducts(data.slice(0, 3));
            } catch (error) {
                console.error("Error fetching products:", error);
            } finally {
                setLoading(false);
            }
        }
        fetchProducts();
    }, []);

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
                {loading ? (
                    <div className="flex items-center justify-center py-16">
                        <Loading01 className="size-8 animate-spin text-brand-600" />
                    </div>
                ) : (
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
                                    <a href={`/product/${product.slug}`} className="block size-full">
                                        {/* Primary Image */}
                                        <img
                                            src={product.images?.[0] ?? ""}
                                            alt={product.name}
                                            className="absolute inset-0 size-full object-cover transition duration-500 group-hover:opacity-0"
                                        />
                                        {/* Secondary Image (on hover) */}
                                        <img
                                            src={product.images?.[1] ?? product.images?.[0] ?? ""}
                                            alt={product.name}
                                            className="absolute inset-0 size-full object-cover opacity-0 transition duration-500 group-hover:opacity-100"
                                        />
                                    </a>

                                    {/* Badges */}
                                    <div className="absolute left-4 top-4 flex flex-col gap-2">
                                        {(product.badges ?? []).slice(0, 2).map((badge) => (
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
                                        <WishlistButton
                                            productId={product.id}
                                            productName={product.name}
                                            size="lg"
                                        />
                                    </div>

                                    {/* Add to Cart Button */}
                                    <div className="absolute inset-x-4 bottom-4 translate-y-4 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                                        <Button
                                            href={`/product/${product.slug}`}
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
                                            href={`/product/${product.slug}`}
                                            className="text-sm text-tertiary transition duration-100 ease-linear hover:text-brand-600"
                                        >
                                            {product.category}
                                        </a>
                                        <StarRating rating={product.rating || 5} />
                                    </div>

                                    <h3 className="mt-2 text-lg font-semibold text-primary">
                                        <a
                                            href={`/product/${product.slug}`}
                                            className="transition duration-100 ease-linear hover:text-brand-600"
                                        >
                                            {product.name}
                                        </a>
                                    </h3>

                                    <div className="mt-1 flex items-center gap-2">
                                        <span className="text-md font-medium text-primary">
                                            CHF {product.price.toFixed(2)}
                                        </span>
                                        {product.original_price && product.original_price > product.price && (
                                            <span className="text-sm text-tertiary line-through">
                                                CHF {product.original_price.toFixed(2)}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
