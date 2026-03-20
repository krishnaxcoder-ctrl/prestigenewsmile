"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/base/buttons/button";
import {
    Heart,
    Star01,
    ShoppingBag01,
    FilterLines,
    Grid01,
    List,
    ChevronDown,
    X,
} from "@untitledui/icons";
import { Header } from "@/app/components/header";
import { Footer } from "@/app/components/footer";

// Mock product data
const allProducts = [
    {
        slug: "pure-protect",
        name: "Pure Protect",
        category: "Premium Face Oil",
        price: 46.00,
        originalPrice: 57.00,
        rating: 5,
        reviews: 128,
        inStock: true,
        images: [
            "https://wdtmonica.wpengine.com/wp-content/uploads/2026/01/shop-16-01.png",
            "https://wdtmonica.wpengine.com/wp-content/uploads/2026/01/shop-16-02.jpg",
        ],
        badges: ["Hot Deal"],
    },
    {
        slug: "pure-glow-mask",
        name: "Pure Glow Mask",
        category: "Luxury Face Powder",
        price: 62.00,
        originalPrice: 75.00,
        rating: 5,
        reviews: 95,
        inStock: true,
        images: [
            "https://wdtmonica.wpengine.com/wp-content/uploads/2026/01/shop-15-01.png",
            "https://wdtmonica.wpengine.com/wp-content/uploads/2026/01/shop-15-02.jpg",
        ],
        badges: ["Sale", "Hot Deal"],
    },
    {
        slug: "blend-sponge",
        name: "Blend Sponge",
        category: "Beauty Tools",
        price: 46.00,
        originalPrice: 55.00,
        rating: 4,
        reviews: 64,
        inStock: true,
        images: [
            "https://wdtmonica.wpengine.com/wp-content/uploads/2026/01/shop-14-01.png",
            "https://wdtmonica.wpengine.com/wp-content/uploads/2026/01/shop-14-02.jpg",
        ],
        badges: ["Hot Deal"],
    },
    {
        slug: "night-lip-balm",
        name: "Night Lip Balm",
        category: "Lip Care",
        price: 55.00,
        originalPrice: 64.00,
        rating: 4,
        reviews: 82,
        inStock: true,
        images: [
            "https://wdtmonica.wpengine.com/wp-content/uploads/2026/01/shop-13-01.png",
            "https://wdtmonica.wpengine.com/wp-content/uploads/2026/01/shop-13-02.jpg",
        ],
        badges: ["Sale", "Hot Deal"],
    },
    {
        slug: "soft-skin-bar",
        name: "Soft Skin Bar",
        category: "Body Care",
        price: 30.00,
        originalPrice: 35.00,
        rating: 4,
        reviews: 156,
        inStock: true,
        images: [
            "https://wdtmonica.wpengine.com/wp-content/uploads/2026/01/shop-10-01.png",
            "https://wdtmonica.wpengine.com/wp-content/uploads/2026/01/shop-10-02.jpg",
        ],
        badges: ["Sale", "Hot Deal"],
    },
    {
        slug: "daily-glow-lotion",
        name: "Daily Glow Lotion",
        category: "Premium Face Oil",
        price: 46.00,
        originalPrice: 55.00,
        rating: 4,
        reviews: 89,
        inStock: true,
        images: [
            "https://wdtmonica.wpengine.com/wp-content/uploads/2026/01/shop-6-01.png",
            "https://wdtmonica.wpengine.com/wp-content/uploads/2026/01/shop-6-02.jpg",
        ],
        badges: ["Sale", "Hot Deal"],
    },
    {
        slug: "monica-blush",
        name: "Monica Blush",
        category: "Makeup",
        price: 46.00,
        originalPrice: 52.00,
        rating: 3,
        reviews: 45,
        inStock: true,
        images: [
            "https://wdtmonica.wpengine.com/wp-content/uploads/2026/01/shop-3-01.png",
            "https://wdtmonica.wpengine.com/wp-content/uploads/2026/01/shop-3-02.jpg",
        ],
        badges: ["Hot Deal"],
    },
    {
        slug: "radiance-serum",
        name: "Radiance Serum",
        category: "Skincare",
        price: 78.00,
        originalPrice: 95.00,
        rating: 5,
        reviews: 203,
        inStock: true,
        images: [
            "https://wdtmonica.wpengine.com/wp-content/uploads/2026/01/shop-16-01.png",
            "https://wdtmonica.wpengine.com/wp-content/uploads/2026/01/shop-15-02.jpg",
        ],
        badges: ["Best Seller"],
    },
];

const categories = [
    "All Products",
    "Skincare",
    "Makeup",
    "Body Care",
    "Lip Care",
    "Beauty Tools",
    "Premium Face Oil",
    "Luxury Face Powder",
];

const sortOptions = [
    { label: "Featured", value: "featured" },
    { label: "Price: Low to High", value: "price-asc" },
    { label: "Price: High to Low", value: "price-desc" },
    { label: "Newest", value: "newest" },
    { label: "Best Selling", value: "best-selling" },
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

export default function ShopPage() {
    const [selectedCategory, setSelectedCategory] = useState("All Products");
    const [sortBy, setSortBy] = useState("featured");
    const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
    const [showFilters, setShowFilters] = useState(false);
    const [priceRange, setPriceRange] = useState([0, 100]);

    const filteredProducts = allProducts.filter((product) => {
        if (selectedCategory === "All Products") return true;
        return product.category === selectedCategory;
    });

    const sortedProducts = [...filteredProducts].sort((a, b) => {
        switch (sortBy) {
            case "price-asc":
                return a.price - b.price;
            case "price-desc":
                return b.price - a.price;
            default:
                return 0;
        }
    });

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
                            Shop
                        </h1>
                        <nav className="mt-4 flex items-center justify-center gap-2 text-sm text-tertiary">
                            <a href="/" className="transition hover:text-brand-600">Home</a>
                            <span>/</span>
                            <span className="text-primary">Shop</span>
                        </nav>
                    </div>
                </div>

                {/* Shop Content */}
                <section className="px-4 py-12 md:px-8 md:py-16 lg:px-16">
                    <div className="mx-auto max-w-7xl">
                        <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
                            {/* Sidebar Filters - Desktop */}
                            <aside className="hidden w-64 shrink-0 lg:block">
                                <div className="sticky top-24 space-y-8">
                                    {/* Categories */}
                                    <div>
                                        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
                                            Categories
                                        </h3>
                                        <ul className="space-y-2">
                                            {categories.map((category) => (
                                                <li key={category}>
                                                    <button
                                                        onClick={() => setSelectedCategory(category)}
                                                        className={`text-sm transition ${
                                                            selectedCategory === category
                                                                ? "font-medium text-brand-600"
                                                                : "text-tertiary hover:text-primary"
                                                        }`}
                                                    >
                                                        {category}
                                                    </button>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Price Range */}
                                    <div>
                                        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
                                            Price Range
                                        </h3>
                                        <div className="space-y-4">
                                            <input
                                                type="range"
                                                min="0"
                                                max="100"
                                                value={priceRange[1]}
                                                onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                                                className="w-full accent-brand-600"
                                            />
                                            <div className="flex items-center justify-between text-sm text-tertiary">
                                                <span>${priceRange[0]}</span>
                                                <span>${priceRange[1]}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Availability */}
                                    <div>
                                        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
                                            Availability
                                        </h3>
                                        <label className="flex cursor-pointer items-center gap-3">
                                            <input type="checkbox" className="size-4 accent-brand-600" defaultChecked />
                                            <span className="text-sm text-tertiary">In Stock Only</span>
                                        </label>
                                    </div>
                                </div>
                            </aside>

                            {/* Main Content */}
                            <div className="flex-1">
                                {/* Toolbar */}
                                <div className="mb-8 flex flex-col gap-4 border-b border-secondary pb-4 sm:flex-row sm:items-center sm:justify-between">
                                    <div className="flex items-center gap-4">
                                        {/* Mobile Filter Button */}
                                        <button
                                            onClick={() => setShowFilters(!showFilters)}
                                            className="flex items-center gap-2 text-sm text-tertiary transition hover:text-primary lg:hidden"
                                        >
                                            <FilterLines className="size-4" />
                                            Filters
                                        </button>

                                        <p className="text-sm text-tertiary">
                                            Showing <span className="font-medium text-primary">{sortedProducts.length}</span> products
                                        </p>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        {/* Sort */}
                                        <div className="relative">
                                            <select
                                                value={sortBy}
                                                onChange={(e) => setSortBy(e.target.value)}
                                                className="appearance-none rounded-lg border border-secondary bg-primary py-2 pl-4 pr-10 text-sm text-primary focus:border-brand-500 focus:outline-none"
                                            >
                                                {sortOptions.map((option) => (
                                                    <option key={option.value} value={option.value}>
                                                        {option.label}
                                                    </option>
                                                ))}
                                            </select>
                                            <ChevronDown className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-tertiary" />
                                        </div>

                                        {/* View Mode */}
                                        <div className="hidden items-center gap-1 sm:flex">
                                            <button
                                                onClick={() => setViewMode("grid")}
                                                className={`rounded p-2 transition ${
                                                    viewMode === "grid" ? "bg-secondary text-primary" : "text-tertiary hover:text-primary"
                                                }`}
                                            >
                                                <Grid01 className="size-4" />
                                            </button>
                                            <button
                                                onClick={() => setViewMode("list")}
                                                className={`rounded p-2 transition ${
                                                    viewMode === "list" ? "bg-secondary text-primary" : "text-tertiary hover:text-primary"
                                                }`}
                                            >
                                                <List className="size-4" />
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* Mobile Filters */}
                                {showFilters && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className="mb-8 rounded-lg border border-secondary bg-secondary p-4 lg:hidden"
                                    >
                                        <div className="mb-4 flex items-center justify-between">
                                            <h3 className="font-semibold text-primary">Filters</h3>
                                            <button onClick={() => setShowFilters(false)}>
                                                <X className="size-5 text-tertiary" />
                                            </button>
                                        </div>
                                        <div className="space-y-4">
                                            <select
                                                value={selectedCategory}
                                                onChange={(e) => setSelectedCategory(e.target.value)}
                                                className="w-full rounded-lg border border-secondary bg-primary px-4 py-2 text-sm"
                                            >
                                                {categories.map((category) => (
                                                    <option key={category} value={category}>
                                                        {category}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </motion.div>
                                )}

                                {/* Product Grid */}
                                <div className={`grid gap-6 ${
                                    viewMode === "grid"
                                        ? "grid-cols-2 md:grid-cols-3"
                                        : "grid-cols-1"
                                }`}>
                                    {sortedProducts.map((product, index) => (
                                        <motion.div
                                            key={product.slug}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.4, delay: index * 0.05 }}
                                            className={`group ${viewMode === "list" ? "flex gap-6" : ""}`}
                                        >
                                            {/* Product Image */}
                                            <div className={`relative overflow-hidden rounded-2xl bg-secondary ${
                                                viewMode === "list" ? "aspect-square w-48 shrink-0" : "aspect-[850/1020]"
                                            }`}>
                                                <a href={`/product/${product.slug}`} className="block size-full">
                                                    <img
                                                        src={product.images[0]}
                                                        alt={product.name}
                                                        className="absolute inset-0 size-full object-cover transition duration-500 group-hover:opacity-0"
                                                    />
                                                    <img
                                                        src={product.images[1]}
                                                        alt={product.name}
                                                        className="absolute inset-0 size-full object-cover opacity-0 transition duration-500 group-hover:opacity-100"
                                                    />
                                                </a>

                                                {/* Badges */}
                                                <div className="absolute left-3 top-3 flex flex-col gap-1.5">
                                                    {product.badges.slice(0, 1).map((badge) => (
                                                        <span
                                                            key={badge}
                                                            className={`rounded-full px-2.5 py-1 text-xs font-semibold uppercase ${
                                                                badge === "Sale"
                                                                    ? "bg-error-500 text-white"
                                                                    : badge === "Best Seller"
                                                                    ? "bg-warning-500 text-white"
                                                                    : "bg-brand-600 text-white"
                                                            }`}
                                                        >
                                                            {badge}
                                                        </span>
                                                    ))}
                                                </div>

                                                {/* Action Buttons */}
                                                <div className="absolute right-3 top-3 flex flex-col gap-2 opacity-0 transition duration-300 group-hover:opacity-100">
                                                    <button
                                                        className="flex size-9 items-center justify-center rounded-full bg-white shadow-md transition hover:bg-brand-50 hover:text-brand-600"
                                                        aria-label="Add to wishlist"
                                                    >
                                                        <Heart className="size-4" />
                                                    </button>
                                                </div>

                                                {/* Add to Cart Button */}
                                                <div className="absolute inset-x-3 bottom-3 translate-y-4 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                                                    <Button
                                                        href={`/product/${product.slug}`}
                                                        color="primary"
                                                        size="sm"
                                                        iconLeading={ShoppingBag01}
                                                        className="w-full justify-center"
                                                    >
                                                        Select Options
                                                    </Button>
                                                </div>
                                            </div>

                                            {/* Product Details */}
                                            <div className={`${viewMode === "list" ? "flex flex-1 flex-col justify-center" : "mt-4"}`}>
                                                <div className="flex items-center justify-between">
                                                    <a
                                                        href={`/product/${product.slug}`}
                                                        className="text-xs text-tertiary transition hover:text-brand-600"
                                                    >
                                                        {product.category}
                                                    </a>
                                                    <StarRating rating={product.rating} />
                                                </div>

                                                <h3 className="mt-2 text-sm font-semibold text-primary sm:text-base">
                                                    <a
                                                        href={`/product/${product.slug}`}
                                                        className="transition hover:text-brand-600"
                                                    >
                                                        {product.name}
                                                    </a>
                                                </h3>

                                                <div className="mt-2 flex items-center gap-2">
                                                    <span className="font-semibold text-primary">
                                                        ${product.price.toFixed(2)}
                                                    </span>
                                                    {product.originalPrice > product.price && (
                                                        <span className="text-sm text-tertiary line-through">
                                                            ${product.originalPrice.toFixed(2)}
                                                        </span>
                                                    )}
                                                </div>

                                                {viewMode === "list" && (
                                                    <div className="mt-4">
                                                        <Button
                                                            href={`/product/${product.slug}`}
                                                            color="primary"
                                                            size="sm"
                                                            iconLeading={ShoppingBag01}
                                                        >
                                                            View Product
                                                        </Button>
                                                    </div>
                                                )}
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Pagination */}
                                <div className="mt-12 flex items-center justify-center gap-2">
                                    <button className="flex size-10 items-center justify-center rounded-lg border border-secondary text-tertiary transition hover:border-primary hover:text-primary">
                                        &lt;
                                    </button>
                                    {[1, 2, 3].map((page) => (
                                        <button
                                            key={page}
                                            className={`flex size-10 items-center justify-center rounded-lg transition ${
                                                page === 1
                                                    ? "bg-brand-600 text-white"
                                                    : "border border-secondary text-tertiary hover:border-primary hover:text-primary"
                                            }`}
                                        >
                                            {page}
                                        </button>
                                    ))}
                                    <button className="flex size-10 items-center justify-center rounded-lg border border-secondary text-tertiary transition hover:border-primary hover:text-primary">
                                        &gt;
                                    </button>
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
