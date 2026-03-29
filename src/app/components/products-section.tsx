"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/base/buttons/button";
import { ArrowRight, Star01, Loading01, Heart, Eye } from "@untitledui/icons";
import { getProducts, type Product } from "@/lib/supabase";

function StarRating({ rating }: { rating: number }) {
    return (
        <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
                <Star01
                    key={i}
                    className={`size-4 ${i < rating ? "fill-amber-400 text-amber-400" : "fill-gray-200 text-gray-200"}`}
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
            <div className="mx-auto max-w-[1400px]">
                <div className="mb-12 flex flex-col items-center justify-between gap-6 md:mb-16 md:flex-row md:items-end">
                    <div className="text-center md:text-left">
                        <span className="mb-3 inline-block rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-700">
                            Our Picks
                        </span>
                        <h2 className="mt-4 text-display-xs font-semibold uppercase text-primary md:text-display-sm lg:text-display-md" style={{ fontFamily: "var(--global-heading-font-family)" }}>
                            Explore Top <span className="text-brand-600">Selling</span>
                        </h2>
                        <p className="mt-3 max-w-2xl text-md text-tertiary md:text-lg">
                            Discover our most loved products, handpicked for their quality and effectiveness.
                        </p>
                    </div>
                    <Button href="/shop" color="secondary" size="lg" iconTrailing={ArrowRight} className="hidden md:inline-flex">
                        View All
                    </Button>
                </div>

                {loading ? (
                    <div className="flex items-center justify-center py-16">
                        <Loading01 className="size-8 animate-spin text-brand-600" />
                    </div>
                ) : (
                    <>
                        <div className="grid grid-cols-2 gap-3 md:gap-6 lg:grid-cols-3">
                            {products.map((product) => (
                                <div key={product.id} className="group flex flex-col">
                                    {/* Image Container */}
                                    <div className="relative aspect-square overflow-hidden">
                                        <a href={`/product/${product.slug}`} className="block size-full">
                                            <img
                                                src={product.images?.[0] ?? ""}
                                                alt={product.name}
                                                className="size-full object-cover transition duration-100 ease-linear group-hover:scale-105"
                                            />
                                        </a>
                                        {/* Action Icons */}
                                        <div className="absolute right-3 top-3 flex flex-col gap-2">
                                            <button
                                                className="flex size-9 items-center justify-center rounded-full bg-white shadow-sm transition duration-100 ease-linear hover:bg-gray-50"
                                                aria-label="Add to wishlist"
                                            >
                                                <Heart className="size-5 text-gray-700" />
                                            </button>
                                            <button
                                                className="flex size-9 items-center justify-center rounded-full bg-white shadow-sm transition duration-100 ease-linear hover:bg-gray-50"
                                                aria-label="Quick view"
                                            >
                                                <Eye className="size-5 text-gray-700" />
                                            </button>
                                        </div>
                                    </div>
                                    {/* Product Info */}
                                    <div className="mt-4 flex flex-col gap-1">
                                        <h3 className="text-sm font-medium text-primary line-clamp-2">
                                            <a href={`/product/${product.slug}`} className="hover:text-brand-600">
                                                {product.name}
                                            </a>
                                        </h3>
                                        <StarRating rating={product.rating || 5} />
                                        <p className="text-sm font-semibold text-primary">{product.price.toFixed(2)}€</p>
                                    </div>
                                    {/* Add to Cart Button */}
                                    <a
                                        href={`/product/${product.slug}`}
                                        className="mt-3 border border-gray-900 px-4 py-2.5 text-center text-sm font-medium text-gray-900 transition duration-100 ease-linear hover:bg-gray-900 hover:text-white"
                                    >
                                        Add To Cart
                                    </a>
                                </div>
                            ))}
                        </div>
                        <div className="mt-8 text-center md:hidden">
                            <Button href="/shop" color="secondary" size="lg" iconTrailing={ArrowRight}>
                                View All
                            </Button>
                        </div>
                    </>
                )}
            </div>
        </section>
    );
}
