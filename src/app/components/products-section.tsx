"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/base/buttons/button";
import { ArrowRight, Star01, ShoppingBag01, Loading01 } from "@untitledui/icons";
import { WishlistButton } from "@/components/base/wishlist-button/wishlist-button";
import { getProducts, type Product } from "@/lib/supabase";

function StarRating({ rating }: { rating: number }) {
    return (
        <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
                <Star01
                    key={i}
                    className={`size-4 ${i < rating ? "fill-warning-400 text-warning-400" : "text-tertiary"}`}
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
            <div className="mx-auto max-w-7xl">
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
                    <Button href="/shop" color="secondary" size="lg" iconTrailing={ArrowRight}>
                        View All
                    </Button>
                </div>

                {loading ? (
                    <div className="flex items-center justify-center py-16">
                        <Loading01 className="size-8 animate-spin text-brand-600" />
                    </div>
                ) : (
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {products.map((product) => (
                            <div key={product.id} className="group">
                                <div className="relative aspect-[850/1020] overflow-hidden rounded-2xl border border-secondary bg-secondary">
                                    <a href={`/product/${product.slug}`} className="block size-full">
                                        <img
                                            src={product.images?.[0] ?? ""}
                                            alt={product.name}
                                            className="size-full object-cover"
                                        />
                                    </a>
                                    <div className="absolute left-4 top-4 flex flex-col gap-2">
                                        {(product.badges ?? []).slice(0, 2).map((badge) => (
                                            <span
                                                key={badge}
                                                className={`rounded-full px-3 py-1 text-xs font-semibold uppercase ${
                                                    badge === "Sale" ? "bg-error-500 text-white" : "bg-brand-600 text-white"
                                                }`}
                                            >
                                                {badge}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="absolute right-4 top-4">
                                        <WishlistButton productId={product.id} productName={product.name} size="lg" />
                                    </div>
                                    <div className="absolute inset-x-4 bottom-4">
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
                                <div className="mt-4">
                                    <div className="flex items-center justify-between">
                                        <a href={`/product/${product.slug}`} className="text-sm text-tertiary hover:text-brand-600">
                                            {product.category}
                                        </a>
                                        <StarRating rating={product.rating || 5} />
                                    </div>
                                    <h3 className="mt-2 text-lg font-semibold text-primary">
                                        <a href={`/product/${product.slug}`} className="hover:text-brand-600">
                                            {product.name}
                                        </a>
                                    </h3>
                                    <div className="mt-1 flex items-center gap-2">
                                        <span className="text-md font-medium text-primary">{product.price.toFixed(2)}€</span>
                                        {product.original_price && product.original_price > product.price && (
                                            <span className="text-sm text-tertiary line-through">{product.original_price.toFixed(2)}€</span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
