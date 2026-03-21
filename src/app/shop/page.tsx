"use client";

import { useState, useMemo, useEffect } from "react";
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
    ChevronLeft,
    ChevronRight,
    X,
    Loading01,
} from "@untitledui/icons";
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

const PRODUCTS_PER_PAGE = 6;

export default function ShopPage() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState("All Products");
    const [sortBy, setSortBy] = useState("featured");
    const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
    const [showFilters, setShowFilters] = useState(false);
    const [priceRange, setPriceRange] = useState([0, 150]);
    const [inStockOnly, setInStockOnly] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);

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
        setCurrentPage(1);
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

    // Pagination
    const totalPages = Math.ceil(sortedProducts.length / PRODUCTS_PER_PAGE);
    const paginatedProducts = sortedProducts.slice(
        (currentPage - 1) * PRODUCTS_PER_PAGE,
        currentPage * PRODUCTS_PER_PAGE
    );

    // Reset to page 1 when filters change
    const handleCategoryChange = (category: string) => {
        setSelectedCategory(category);
        setCurrentPage(1);
    };

    const handlePriceChange = (value: number) => {
        setPriceRange([priceRange[0], value]);
        setCurrentPage(1);
    };

    const handleInStockChange = (checked: boolean) => {
        setInStockOnly(checked);
        setCurrentPage(1);
    };

    if (loading) {
        return (
            <div className="overflow-x-hidden">
                <Header />
                <main className="flex min-h-screen items-center justify-center bg-primary">
                    <div className="flex flex-col items-center gap-4">
                        <Loading01 className="size-8 animate-spin text-brand-600" />
                        <p className="text-tertiary">Loading products...</p>
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
                <section className="border-b border-teal-400 bg-teal-50 px-4 py-12 md:px-8 md:py-10 lg:px-16">
                    <div className="mx-auto max-w-7xl">
                        <nav className="mb-4 flex items-center gap-2 text-sm text-tertiary">
                            <a href="/" className="transition uppercase hover:text-teal-600">Home</a>
                            <span>/</span>
                            <span className="uppercase  text-teal-600">Shop</span>
                        </nav>
                        <div className="flex flex-col items-start  justify-between gap-8 md:flex-row md:items-center">
                            <div className="max-w-3xl ">
                                <motion.h1
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.1 }}
                                    className="text-2xl font-semibold uppercase text-primary md:text-3xl"
                                >
                                    Shop Our <span className="text-teal-600">Premium</span> Collection
                                </motion.h1>
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    className="mt-4 text-lg text-tertiary"
                                >
                                    Discover our range of teeth whitening products designed for professional results at home.
                                </motion.p>
                            </div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="hidden shrink-0 md:block"
                            >
                                <RatingBadge rating={4.9} title="Top Rated Products" subtitle="500+ happy customers" />
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Shop Content */}
                <section className="px-4 py-12 md:px-8 md:py-6 lg:px-16">
                    <div className="mx-auto max-w-7xl">
                        <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
                            {/* Sidebar Filters - Desktop */}
                            <aside className="hidden w-64 shrink-0 lg:block">
                                <div className="sticky top-24 space-y-8">
                                    {/* Clear Filters Button */}
                                    {hasActiveFilters && (
                                        <button
                                            onClick={clearFilters}
                                            className="flex items-center gap-2 text-sm font-medium text-brand-600 transition hover:text-brand-700"
                                        >
                                            <X className="size-4" />
                                            Clear All Filters
                                        </button>
                                    )}

                                    {/* Categories */}
                                    <div>
                                        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
                                            Categories
                                        </h3>
                                        <ul className="space-y-2">
                                            {categories.map((category) => (
                                                <li key={category}>
                                                    <button
                                                        onClick={() => handleCategoryChange(category)}
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
                                                max="150"
                                                value={priceRange[1]}
                                                onChange={(e) => handlePriceChange(parseInt(e.target.value))}
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
                                            <input
                                                type="checkbox"
                                                className="size-4 accent-brand-600"
                                                checked={inStockOnly}
                                                onChange={(e) => handleInStockChange(e.target.checked)}
                                            />
                                            <span className="text-sm text-tertiary">In Stock Only</span>
                                        </label>
                                    </div>
                                </div>
                            </aside>

                            {/* Main Content */}
                            <div className="flex-1">
                                {/* Active Filters */}
                                {hasActiveFilters && (
                                    <div className="mb-4 flex flex-wrap items-center gap-2">
                                        <span className="text-sm text-tertiary">Active filters:</span>
                                        {selectedCategory !== "All Products" && (
                                            <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700">
                                                {selectedCategory}
                                                <button
                                                    onClick={() => handleCategoryChange("All Products")}
                                                    className="transition hover:text-brand-900"
                                                >
                                                    <X className="size-3" />
                                                </button>
                                            </span>
                                        )}
                                        {priceRange[1] < 150 && (
                                            <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700">
                                                Up to ${priceRange[1]}
                                                <button
                                                    onClick={() => handlePriceChange(150)}
                                                    className="transition hover:text-brand-900"
                                                >
                                                    <X className="size-3" />
                                                </button>
                                            </span>
                                        )}
                                        {inStockOnly && (
                                            <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700">
                                                In Stock Only
                                                <button
                                                    onClick={() => handleInStockChange(false)}
                                                    className="transition hover:text-brand-900"
                                                >
                                                    <X className="size-3" />
                                                </button>
                                            </span>
                                        )}
                                        <button
                                            onClick={clearFilters}
                                            className="text-xs text-tertiary underline transition hover:text-primary"
                                        >
                                            Clear all
                                        </button>
                                    </div>
                                )}

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
                                            {hasActiveFilters && (
                                                <span className="flex size-5 items-center justify-center rounded-full bg-brand-600 text-xs text-white">
                                                    {(selectedCategory !== "All Products" ? 1 : 0) + (priceRange[1] < 150 ? 1 : 0) + (inStockOnly ? 1 : 0)}
                                                </span>
                                            )}
                                        </button>

                                        <p className="text-sm text-tertiary">
                                            Showing <span className="font-medium text-primary">{paginatedProducts.length}</span> of{" "}
                                            <span className="font-medium text-primary">{sortedProducts.length}</span> products
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
                                    {paginatedProducts.map((product, index) => (
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
                                                        src={product.images?.[0] ?? ""}
                                                        alt={product.name}
                                                        className="absolute inset-0 size-full object-cover transition duration-500 group-hover:opacity-0"
                                                    />
                                                    <img
                                                        src={product.images?.[1] ?? product.images?.[0] ?? ""}
                                                        alt={product.name}
                                                        className="absolute inset-0 size-full object-cover opacity-0 transition duration-500 group-hover:opacity-100"
                                                    />
                                                </a>

                                                {/* Badges */}
                                                <div className="absolute left-3 top-3 flex flex-col gap-1.5">
                                                    {(product.badges ?? []).slice(0, 1).map((badge) => (
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
                                                    <WishlistButton
                                                        productId={product.id}
                                                        productName={product.name}
                                                        size="md"
                                                    />
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
                                                    <StarRating rating={product.rating ?? 0} />
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
                                                    {product.original_price && product.original_price > product.price && (
                                                        <span className="text-sm text-tertiary line-through">
                                                            ${product.original_price.toFixed(2)}
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
                                {totalPages > 1 && (
                                    <div className="mt-12 flex items-center justify-center gap-2">
                                        <button
                                            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                                            disabled={currentPage === 1}
                                            className="flex size-10 items-center justify-center rounded-lg border border-secondary text-tertiary transition hover:border-primary hover:text-primary disabled:cursor-not-allowed disabled:opacity-50"
                                        >
                                            <ChevronLeft className="size-5" />
                                        </button>
                                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                            <button
                                                key={page}
                                                onClick={() => setCurrentPage(page)}
                                                className={`flex size-10 items-center justify-center rounded-lg transition ${
                                                    page === currentPage
                                                        ? "bg-brand-600 text-white"
                                                        : "border border-secondary text-tertiary hover:border-primary hover:text-primary"
                                                }`}
                                            >
                                                {page}
                                            </button>
                                        ))}
                                        <button
                                            onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                                            disabled={currentPage === totalPages}
                                            className="flex size-10 items-center justify-center rounded-lg border border-secondary text-tertiary transition hover:border-primary hover:text-primary disabled:cursor-not-allowed disabled:opacity-50"
                                        >
                                            <ChevronRight className="size-5" />
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
