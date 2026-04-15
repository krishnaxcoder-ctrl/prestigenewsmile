"use client";

import { useState, useMemo, useEffect } from "react";
import { motion } from "framer-motion";
import { Star01, ShoppingBag01, Loading01 } from "@untitledui/icons";
import { Header } from "@/app/components/header";
import { Footer } from "@/app/components/footer";
import { RatingBadge } from "@/components/foundations/rating-badge";
import { WishlistButton } from "@/components/base/wishlist-button/wishlist-button";
import { getProducts, type Product } from "@/lib/supabase";

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

const sortOptions = [
    { label: "Featured", value: "featured" },
    { label: "Price: Low to High", value: "price-asc" },
    { label: "Price: High to Low", value: "price-desc" },
    { label: "Newest", value: "newest" },
    { label: "Best Selling", value: "best-selling" },
];

export default function ShopPage() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState("All Products");
    const [sortBy, setSortBy] = useState("featured");
    const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
    const [showFilters, setShowFilters] = useState(false);
    const [priceRange, setPriceRange] = useState([0, 150]);
    const [inStockOnly, setInStockOnly] = useState(false);

    // Fetch products from Supabase
    useEffect(() => {
        async function fetchProducts() {
            try {
                const data = await getProducts();
                setProducts(data);
            } catch (error) {
                console.error("Error fetching products:", error);
            } finally {
                setLoading(false);
            }
        }
        fetchProducts();
    }, []);

    // Get unique categories from products
    const categories = useMemo(() => {
        const cats = ["All Products", ...new Set(products.map((p) => p.category))];
        return cats;
    }, [products]);

    // Check if any filters are active
    const hasActiveFilters = selectedCategory !== "All Products" || priceRange[1] < 150 || inStockOnly;

    // Clear all filters
    const clearFilters = () => {
        setSelectedCategory("All Products");
        setPriceRange([0, 150]);
        setInStockOnly(false);
    };

    // Filter products
    const filteredProducts = useMemo(() => {
        return products.filter((product) => {
            // Category filter
            if (selectedCategory !== "All Products" && product.category !== selectedCategory) {
                return false;
            }
            // Price range filter
            if (product.price < priceRange[0] || product.price > priceRange[1]) {
                return false;
            }
            // In stock filter
            if (inStockOnly && !product.in_stock) {
                return false;
            }
            return true;
        });
    }, [products, selectedCategory, priceRange, inStockOnly]);

    // Sort products
    const sortedProducts = useMemo(() => {
        return [...filteredProducts].sort((a, b) => {
            switch (sortBy) {
                case "price-asc":
                    return a.price - b.price;
                case "price-desc":
                    return b.price - a.price;
                default:
                    return 0;
            }
        });
    }, [filteredProducts, sortBy]);

    const handleCategoryChange = (category: string) => {
        setSelectedCategory(category);
    };

    const handlePriceChange = (value: number) => {
        setPriceRange([priceRange[0], value]);
    };

    const handleInStockChange = (checked: boolean) => {
        setInStockOnly(checked);
    };

    if (loading) {
        return (
            <div className="overflow-x-hidden">
                <Header />
                <main className="flex min-h-screen items-center justify-center bg-[#faf6f1]">
                    <div className="flex flex-col items-center gap-5">
                        <Loading01 className="size-7 animate-spin text-[#8b5a6a]" />
                        <p
                            className="text-sm italic text-[#8b5a6a]"
                            style={{ fontFamily: "'Cormorant Garamond', serif" }}
                        >
                            Curating your collection…
                        </p>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

    return (
        <div className="overflow-x-hidden">
            <Header />
            <main className="bg-primary">
                {/* Hero Header */}
                <section className="relative overflow-hidden bg-gradient-to-b from-[#f7f2ec] via-[#f3ede6] to-[#ebe2d8] px-4 py-14 md:px-8 md:py-20 lg:px-16">
                    {/* Ambient glows */}
                    <div className="pointer-events-none absolute -top-32 left-1/4 size-[480px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,#f5efe7_0%,transparent_70%)] opacity-70" />
                    <div className="pointer-events-none absolute -bottom-40 right-0 size-[420px] rounded-full bg-[radial-gradient(circle,#d4b5a0_0%,transparent_70%)] opacity-25" />

                    <div className="relative mx-auto max-w-7xl">
                        {/* Breadcrumb */}
                        <nav className="mb-8 flex items-center justify-center gap-3 text-[11px] font-medium uppercase tracking-[0.3em] text-[#b8929a] md:justify-start">
                            <a href="/" className="transition hover:text-[#4a2d3a]">Home</a>
                            <span className="size-1 rotate-45 bg-[#c9a5ab]/60" />
                            <span className="text-[#4a2d3a]">Shop</span>
                        </nav>

                        <div className="flex flex-col items-center gap-10 text-center md:flex-row md:items-end md:justify-between md:gap-12 md:text-left">
                            <div className="max-w-2xl">
                                {/* Script accent */}
                                <motion.p
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="text-2xl text-[#8b5a6a] md:text-3xl"
                                    style={{ fontFamily: "'Eyesome Script', cursive" }}
                                >
                                    Our Collection
                                </motion.p>

                                {/* Headline */}
                                <motion.h1
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.1 }}
                                    className="mt-1 text-[32px] font-light leading-[1.05] text-[#4a2d3a] sm:text-4xl md:text-5xl lg:text-6xl"
                                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                                >
                                    Crafted for a <br className="hidden md:block" />
                                    <span className="italic text-[#8b5a6a]">Radiant</span> Smile
                                </motion.h1>

                                {/* Decorative divider */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                    className="mt-5 flex items-center justify-center gap-3 md:justify-start"
                                >
                                    <div className="h-px w-10 bg-[#c9a5ab]" />
                                    <div className="size-1.5 rotate-45 border border-[#c9a5ab]" />
                                    <div className="h-px w-16 bg-[#c9a5ab]/60 md:w-20" />
                                    <div className="size-1 rotate-45 bg-[#c9a5ab]/50" />
                                </motion.div>

                                {/* Subtitle */}
                                <motion.p
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.25 }}
                                    className="mx-auto mt-5 max-w-lg text-[14px] italic leading-[1.7] text-[#5a3d4a]/85 md:mx-0 md:text-[15px]"
                                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                                >
                                    Professional teeth whitening, thoughtfully formulated. Every product crafted to reveal your most confident, natural smile — from the comfort of home.
                                </motion.p>
                            </div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className="hidden shrink-0 md:block"
                            >
                                <RatingBadge rating={4.9} title="Top Rated Products" subtitle="500+ happy customers" />
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Shop Content */}
                <section className="bg-[#faf6f1] px-4 py-16 md:px-8 md:py-24 lg:px-16">
                    <div className="mx-auto max-w-7xl">
                        <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
                            {/* Main Content */}
                            <div className="flex-1">
                                {/* Product List */}
                                <div className="space-y-8 md:space-y-10">
                                    {sortedProducts.map((product, index) => (
                                        <motion.div
                                            key={product.slug}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5, delay: index * 0.05 }}
                                            className="group overflow-hidden border border-[#c9a5ab]/30 bg-white/70 backdrop-blur-sm transition duration-300 hover:border-[#c9a5ab]/60 hover:bg-white"
                                        >
                                            <div className="flex flex-col md:flex-row">
                                                {/* Product Image */}
                                                <div className="relative aspect-square w-full shrink-0 overflow-hidden bg-[#f7f2ec] md:w-80">
                                                    <a href={`/product/${product.slug}`} className="block size-full">
                                                        <img
                                                            src={product.images?.[0] ?? ""}
                                                            alt={product.name}
                                                            className="size-full object-cover transition duration-700 group-hover:scale-105"
                                                        />
                                                    </a>

                                                    {/* Badges */}
                                                    <div className="absolute left-4 top-4 flex flex-col gap-1.5">
                                                        {(product.badges ?? []).slice(0, 1).map((badge) => (
                                                            <span
                                                                key={badge}
                                                                className="bg-[#f7f2ec]/95 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.2em] text-[#4a2d3a] ring-1 ring-inset ring-[#c9a5ab]/40 backdrop-blur-sm"
                                                            >
                                                                {badge}
                                                            </span>
                                                        ))}
                                                    </div>

                                                    {/* Wishlist Button */}
                                                    <div className="absolute right-4 top-4">
                                                        <WishlistButton
                                                            productId={product.id}
                                                            productName={product.name}
                                                            size="md"
                                                        />
                                                    </div>
                                                </div>

                                                {/* Product Details */}
                                                <div className="flex flex-1 flex-col justify-between p-6 md:p-10">
                                                    <div>
                                                        {/* Category & Rating */}
                                                        <div className="flex flex-wrap items-center justify-between gap-3">
                                                            <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#b8929a]">
                                                                {product.category}
                                                            </span>
                                                            <div className="flex items-center gap-2">
                                                                <StarRating rating={product.rating ?? 0} />
                                                                <span className="text-xs italic text-[#8b5a6a]/80" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                                                                    (124 reviews)
                                                                </span>
                                                            </div>
                                                        </div>

                                                        {/* Title */}
                                                        <h3
                                                            className="mt-4 text-2xl font-light leading-tight text-[#4a2d3a] md:text-3xl"
                                                            style={{ fontFamily: "'Cormorant Garamond', serif" }}
                                                        >
                                                            <a
                                                                href={`/product/${product.slug}`}
                                                                className="transition duration-300 hover:text-[#8b5a6a]"
                                                            >
                                                                {product.name}
                                                            </a>
                                                        </h3>

                                                        {/* Thin divider */}
                                                        <div className="mt-3 flex items-center gap-2">
                                                            <div className="h-px w-8 bg-[#c9a5ab]" />
                                                            <div className="size-1 rotate-45 bg-[#c9a5ab]/60" />
                                                            <div className="h-px w-12 bg-[#c9a5ab]/40" />
                                                        </div>

                                                        {/* Description */}
                                                        <p
                                                            className="mt-4 text-sm italic leading-[1.8] text-[#5a3d4a]/85 line-clamp-2 md:line-clamp-3"
                                                            style={{ fontFamily: "'Cormorant Garamond', serif" }}
                                                        >
                                                            {product.description || "Professional teeth whitening product for a brighter, more confident smile. Gentle formula suitable for sensitive teeth."}
                                                        </p>

                                                        {/* Features */}
                                                        <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
                                                            {["Fast Results", "Enamel Safe", "Professional Grade"].map((feat) => (
                                                                <span key={feat} className="inline-flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.2em] text-[#8b5a6a]">
                                                                    <span className="size-1 rotate-45 bg-[#c9a5ab]" />
                                                                    {feat}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </div>

                                                    {/* Price & Actions */}
                                                    <div className="mt-6 flex flex-col gap-5 border-t border-[#c9a5ab]/30 pt-6 sm:flex-row sm:items-center sm:justify-between">
                                                        <div className="flex items-baseline gap-3">
                                                            <span
                                                                className="text-3xl font-light text-[#4a2d3a] md:text-4xl"
                                                                style={{ fontFamily: "'Cormorant Garamond', serif" }}
                                                            >
                                                                {product.price.toFixed(2)}€
                                                            </span>
                                                            {product.original_price && product.original_price > product.price && (
                                                                <span
                                                                    className="text-lg text-[#b8929a] line-through"
                                                                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                                                                >
                                                                    {product.original_price.toFixed(2)}€
                                                                </span>
                                                            )}
                                                            {product.in_stock && (
                                                                <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-[#8b5a6a]">
                                                                    · In Stock
                                                                </span>
                                                            )}
                                                        </div>

                                                        <div className="flex gap-3">
                                                            <a
                                                                href={`/product/${product.slug}`}
                                                                className="inline-flex items-center justify-center border border-[#c9a5ab]/60 bg-transparent px-6 py-3 text-[11px] font-medium uppercase tracking-[0.25em] text-[#4a2d3a] transition duration-200 ease-linear hover:border-[#4a2d3a] hover:bg-[#4a2d3a] hover:text-white"
                                                            >
                                                                View Details
                                                            </a>
                                                            <a
                                                                href={`/product/${product.slug}`}
                                                                className="inline-flex items-center justify-center gap-2 border border-[#4a2d3a] bg-[#4a2d3a] px-6 py-3 text-[11px] font-medium uppercase tracking-[0.25em] text-white transition duration-200 ease-linear hover:bg-[#3a1d2a]"
                                                            >
                                                                <ShoppingBag01 className="size-3.5" />
                                                                Add to Cart
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Featured Images Gallery */}
                                <div className="mt-20 md:mt-28">
                                    {/* Section header */}
                                    <div className="mb-10 text-center md:mb-14">
                                        <p
                                            className="text-xl text-[#8b5a6a] md:text-2xl"
                                            style={{ fontFamily: "'Eyesome Script', cursive" }}
                                        >
                                            The Essence
                                        </p>
                                        <h2
                                            className="mt-1 text-3xl font-light text-[#4a2d3a] md:text-4xl lg:text-5xl"
                                            style={{ fontFamily: "'Cormorant Garamond', serif" }}
                                        >
                                            Crafted with <span className="italic text-[#8b5a6a]">Intention</span>
                                        </h2>
                                        <div className="mt-5 flex items-center justify-center gap-3">
                                            <div className="h-px w-12 bg-[#c9a5ab]/60" />
                                            <div className="size-1.5 rotate-45 border border-[#c9a5ab]" />
                                            <div className="h-px w-12 bg-[#c9a5ab]/60" />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
                                        {[
                                            { src: "/images/newnew1.png", label: "Natural Care" },
                                            { src: "/images/newnew2.png", label: "Herbal Formula" },
                                            { src: "/images/newnew3.png", label: "Oral Wellness" },
                                            { src: "/images/newnew4.png", label: "Premium Quality" },
                                        ].map((image, index) => (
                                            <motion.div
                                                key={index}
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.5, delay: index * 0.08 }}
                                                className="group relative aspect-square overflow-hidden bg-[#f7f2ec] ring-1 ring-inset ring-[#c9a5ab]/30"
                                            >
                                                <img
                                                    src={image.src}
                                                    alt={image.label}
                                                    className="size-full object-cover transition duration-700 group-hover:scale-105"
                                                />
                                                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#4a2d3a]/70 via-[#4a2d3a]/30 to-transparent p-4 md:p-5">
                                                    <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-white/95">
                                                        {image.label}
                                                    </span>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
