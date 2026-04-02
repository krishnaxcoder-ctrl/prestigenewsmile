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
                <section className="border-b border-brand-400 bg-brand-50 px-4 py-12 md:px-8 md:py-10 lg:px-16">
                    <div className="mx-auto max-w-7xl">
                        <nav className="mb-4 flex items-center gap-2 text-sm text-tertiary">
                            <a href="/" className="transition uppercase hover:text-brand-600">Home</a>
                            <span>/</span>
                            <span className="uppercase  text-brand-600">Shop</span>
                        </nav>
                        <div className="flex flex-col items-start  justify-between gap-8 md:flex-row md:items-center">
                            <div className="max-w-3xl ">
                                <motion.h1
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.1 }}
                                    className="text-2xl font-semibold uppercase text-primary md:text-3xl"
                                >
                                    Shop Our <span className="text-brand-600">Premium</span> Collection
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
                            {/* Main Content */}
                            <div className="flex-1">
                                {/* Product List */}
                                <div className="space-y-6">
                                    {sortedProducts.map((product, index) => (
                                        <motion.div
                                            key={product.slug}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.4, delay: index * 0.05 }}
                                            className="group overflow-hidden rounded-2xl border border-secondary bg-white shadow-sm transition hover:shadow-md"
                                        >
                                            <div className="flex flex-col md:flex-row">
                                                {/* Product Image */}
                                                <div className="relative aspect-square w-full shrink-0 overflow-hidden bg-gray-50 md:w-80">
                                                    <a href={`/product/${product.slug}`} className="block size-full">
                                                        <img
                                                            src={product.images?.[0] ?? ""}
                                                            alt={product.name}
                                                            className="size-full object-cover transition duration-500 group-hover:scale-105"
                                                        />
                                                    </a>

                                                    {/* Badges */}
                                                    <div className="absolute left-4 top-4 flex flex-col gap-1.5">
                                                        {(product.badges ?? []).slice(0, 1).map((badge) => (
                                                            <span
                                                                key={badge}
                                                                className={`rounded-full px-3 py-1.5 text-xs font-semibold uppercase ${
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
                                                <div className="flex flex-1 flex-col justify-between p-6 md:p-8">
                                                    <div>
                                                        {/* Category & Rating */}
                                                        <div className="flex items-center justify-between">
                                                            <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700">
                                                                {product.category}
                                                            </span>
                                                            <div className="flex items-center gap-2">
                                                                <StarRating rating={product.rating ?? 0} />
                                                                <span className="text-sm text-tertiary">(124 reviews)</span>
                                                            </div>
                                                        </div>

                                                        {/* Title */}
                                                        <h3 className="mt-4 text-xl font-semibold text-primary md:text-2xl">
                                                            <a
                                                                href={`/product/${product.slug}`}
                                                                className="transition hover:text-brand-600"
                                                            >
                                                                {product.name}
                                                            </a>
                                                        </h3>

                                                        {/* Description */}
                                                        <p className="mt-3 text-sm leading-relaxed text-tertiary line-clamp-2 md:line-clamp-3">
                                                            {product.description || "Professional teeth whitening product for a brighter, more confident smile. Gentle formula suitable for sensitive teeth."}
                                                        </p>

                                                        {/* Features */}
                                                        <div className="mt-4 flex flex-wrap gap-2">
                                                            <span className="inline-flex items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-600">
                                                                <svg className="size-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                                                                Fast Results
                                                            </span>
                                                            <span className="inline-flex items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-600">
                                                                <svg className="size-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                                                                Enamel Safe
                                                            </span>
                                                            <span className="inline-flex items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-600">
                                                                <svg className="size-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                                                                Professional Grade
                                                            </span>
                                                        </div>
                                                    </div>

                                                    {/* Price & Actions */}
                                                    <div className="mt-6 flex flex-col gap-4 border-t border-gray-100 pt-6 sm:flex-row sm:items-center sm:justify-between">
                                                        <div className="flex items-baseline gap-3">
                                                            <span className="text-2xl font-bold text-primary md:text-3xl">
                                                                {product.price.toFixed(2)}€
                                                            </span>
                                                            {product.original_price && product.original_price > product.price && (
                                                                <span className="text-lg text-tertiary line-through">
                                                                    {product.original_price.toFixed(2)}€
                                                                </span>
                                                            )}
                                                            {product.in_stock && (
                                                                <span className="rounded-full bg-success-50 px-2 py-0.5 text-xs font-medium text-success-700">
                                                                    In Stock
                                                                </span>
                                                            )}
                                                        </div>

                                                        <div className="flex gap-3">
                                                            <Button
                                                                href={`/product/${product.slug}`}
                                                                color="secondary"
                                                                size="md"
                                                            >
                                                                View Details
                                                            </Button>
                                                            <Button
                                                                href={`/product/${product.slug}`}
                                                                color="primary"
                                                                size="md"
                                                                iconLeading={ShoppingBag01}
                                                            >
                                                                Add to Cart
                                                            </Button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Featured Images Gallery */}
                                <div className="mt-12">
                                    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
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
                                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                                className="group relative aspect-square overflow-hidden bg-gray-50 shadow-sm"
                                            >
                                                <img
                                                    src={image.src}
                                                    alt={image.label}
                                                    className="size-full object-cover transition duration-500 group-hover:scale-105"
                                                />
                                                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                                                    <span className="text-sm font-medium text-white">{image.label}</span>
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
