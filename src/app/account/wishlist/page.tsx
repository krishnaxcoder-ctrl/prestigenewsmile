"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/base/buttons/button";
import {
    Heart,
    Star01,
    ShoppingBag01,
    X,
    Trash01,
} from "@untitledui/icons";
import { Header } from "@/app/components/header";
import { Footer } from "@/app/components/footer";

interface WishlistItem {
    id: string;
    slug: string;
    name: string;
    category: string;
    price: number;
    originalPrice: number;
    rating: number;
    inStock: boolean;
    image: string;
    addedDate: string;
}

const initialWishlist: WishlistItem[] = [
    {
        id: "1",
        slug: "pure-protect",
        name: "Pure Protect",
        category: "Premium Face Oil",
        price: 46.00,
        originalPrice: 57.00,
        rating: 5,
        inStock: true,
        image: "https://wdtmonica.wpengine.com/wp-content/uploads/2026/01/shop-16-01.png",
        addedDate: "March 15, 2024",
    },
    {
        id: "2",
        slug: "pure-glow-mask",
        name: "Pure Glow Mask",
        category: "Luxury Face Powder",
        price: 62.00,
        originalPrice: 75.00,
        rating: 5,
        inStock: true,
        image: "https://wdtmonica.wpengine.com/wp-content/uploads/2026/01/shop-15-01.png",
        addedDate: "March 12, 2024",
    },
    {
        id: "3",
        slug: "radiance-serum",
        name: "Radiance Serum",
        category: "Skincare",
        price: 78.00,
        originalPrice: 95.00,
        rating: 5,
        inStock: false,
        image: "https://wdtmonica.wpengine.com/wp-content/uploads/2026/01/shop-16-01.png",
        addedDate: "March 10, 2024",
    },
    {
        id: "4",
        slug: "night-lip-balm",
        name: "Night Lip Balm",
        category: "Lip Care",
        price: 55.00,
        originalPrice: 64.00,
        rating: 4,
        inStock: true,
        image: "https://wdtmonica.wpengine.com/wp-content/uploads/2026/01/shop-13-01.png",
        addedDate: "March 8, 2024",
    },
];

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

export default function WishlistPage() {
    const [wishlist, setWishlist] = useState<WishlistItem[]>(initialWishlist);

    const removeItem = (id: string) => {
        setWishlist((items) => items.filter((item) => item.id !== id));
    };

    const clearWishlist = () => {
        setWishlist([]);
    };

    return (
        <div className="overflow-x-hidden">
            <Header />
            <main className="bg-primary">
                {/* Hero Header */}
                <div className="relative bg-brand-50 py-12 md:py-16 lg:py-20">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="absolute inset-0 opacity-30" style={{
                            backgroundImage: `radial-gradient(circle at 1px 1px, var(--color-brand-200) 1px, transparent 0)`,
                            backgroundSize: '32px 32px'
                        }} />
                    </div>
                    <div className="relative mx-auto max-w-7xl px-4 text-center md:px-8 lg:px-16">
                        <h1 className="text-2xl font-semibold uppercase tracking-[0.2em] text-primary sm:text-3xl md:text-4xl">
                            My Wishlist
                        </h1>
                        <nav className="mt-4 flex items-center justify-center gap-2 text-sm text-tertiary">
                            <a href="/" className="transition hover:text-brand-600">Home</a>
                            <span>/</span>
                            <a href="/account" className="transition hover:text-brand-600">Account</a>
                            <span>/</span>
                            <span className="text-primary">Wishlist</span>
                        </nav>
                    </div>
                </div>

                {/* Wishlist Content */}
                <section className="px-4 py-12 md:px-8 md:py-16 lg:px-16">
                    <div className="mx-auto max-w-6xl">
                        {wishlist.length > 0 ? (
                            <>
                                {/* Header */}
                                <div className="mb-8 flex items-center justify-between">
                                    <p className="text-sm text-tertiary">
                                        <span className="font-semibold text-primary">{wishlist.length}</span> items in your wishlist
                                    </p>
                                    <button
                                        onClick={clearWishlist}
                                        className="flex items-center gap-2 text-sm text-tertiary transition hover:text-error-500"
                                    >
                                        <Trash01 className="size-4" />
                                        Clear All
                                    </button>
                                </div>

                                {/* Wishlist Grid */}
                                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                                    {wishlist.map((item, index) => (
                                        <motion.div
                                            key={item.id}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.3, delay: index * 0.05 }}
                                            className="group relative rounded-2xl border border-secondary bg-primary"
                                        >
                                            {/* Remove Button */}
                                            <button
                                                onClick={() => removeItem(item.id)}
                                                className="absolute right-3 top-3 z-10 flex size-8 items-center justify-center rounded-full bg-white shadow-md transition hover:bg-error-50 hover:text-error-500"
                                            >
                                                <X className="size-4" />
                                            </button>

                                            {/* Product Image */}
                                            <a href={`/product/${item.slug}`} className="block">
                                                <div className="relative aspect-square overflow-hidden rounded-t-2xl bg-secondary">
                                                    <img
                                                        src={item.image}
                                                        alt={item.name}
                                                        className="size-full object-cover transition duration-300 group-hover:scale-105"
                                                    />
                                                    {!item.inStock && (
                                                        <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                                                            <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-primary">
                                                                Out of Stock
                                                            </span>
                                                        </div>
                                                    )}
                                                </div>
                                            </a>

                                            {/* Product Info */}
                                            <div className="p-4">
                                                <p className="text-xs text-tertiary">{item.category}</p>
                                                <a
                                                    href={`/product/${item.slug}`}
                                                    className="mt-1 block font-semibold text-primary transition hover:text-brand-600"
                                                >
                                                    {item.name}
                                                </a>
                                                <div className="mt-2 flex items-center justify-between">
                                                    <StarRating rating={item.rating} />
                                                    <div className="flex items-center gap-2">
                                                        <span className="font-semibold text-primary">
                                                            ${item.price.toFixed(2)}
                                                        </span>
                                                        {item.originalPrice > item.price && (
                                                            <span className="text-xs text-tertiary line-through">
                                                                ${item.originalPrice.toFixed(2)}
                                                            </span>
                                                        )}
                                                    </div>
                                                </div>
                                                <p className="mt-2 text-xs text-tertiary">
                                                    Added {item.addedDate}
                                                </p>
                                                <Button
                                                    href={`/product/${item.slug}`}
                                                    color={item.inStock ? "primary" : "secondary"}
                                                    size="sm"
                                                    iconLeading={ShoppingBag01}
                                                    className="mt-4 w-full justify-center"
                                                    isDisabled={!item.inStock}
                                                >
                                                    {item.inStock ? "Add to Cart" : "Notify Me"}
                                                </Button>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </>
                        ) : (
                            /* Empty State */
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="py-16 text-center"
                            >
                                <div className="mx-auto flex size-24 items-center justify-center rounded-full bg-secondary">
                                    <Heart className="size-12 text-tertiary" />
                                </div>
                                <h2 className="mt-6 text-xl font-semibold text-primary">
                                    Your wishlist is empty
                                </h2>
                                <p className="mt-2 text-tertiary">
                                    Save items you love by clicking the heart icon on any product.
                                </p>
                                <Button
                                    href="/shop"
                                    color="primary"
                                    size="lg"
                                    className="mt-8"
                                    iconLeading={ShoppingBag01}
                                >
                                    Browse Products
                                </Button>
                            </motion.div>
                        )}
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
