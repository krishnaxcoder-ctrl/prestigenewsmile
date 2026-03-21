"use client";

import { useState, use, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/base/buttons/button";
import {
    Heart,
    Star01,
    ShoppingBag01,
    Minus,
    Plus,
    Truck01,
    HelpCircle,
    Package,
    Loading01,
} from "@untitledui/icons";
import { Header } from "@/app/components/header";
import { Footer } from "@/app/components/footer";
import { RatingBadge } from "@/components/foundations/rating-badge";
import { WishlistButton } from "@/components/base/wishlist-button/wishlist-button";
import { useToastActions } from "@/components/base/toast/toast";
import { getProductBySlug, getProducts, addToCart, getSessionId, type Product } from "@/lib/supabase";

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

export default function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params);
    const router = useRouter();
    const toast = useToastActions();
    const [product, setProduct] = useState<Product | null>(null);
    const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [addingToCart, setAddingToCart] = useState(false);

    const [selectedImage, setSelectedImage] = useState(0);
    const [selectedSize, setSelectedSize] = useState("");
    const [selectedColor, setSelectedColor] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [activeTab, setActiveTab] = useState("description");

    useEffect(() => {
        async function fetchProduct() {
            try {
                const data = await getProductBySlug(slug);
                setProduct(data);
                if (data.sizes.length > 0) setSelectedSize(data.sizes[0]);
                if (data.colors.length > 0) setSelectedColor(data.colors[0]);

                // Fetch related products
                const allProducts = await getProducts();
                setRelatedProducts(allProducts.filter((p) => p.slug !== slug).slice(0, 4));
            } catch (error) {
                console.error("Error fetching product:", error);
            } finally {
                setLoading(false);
            }
        }
        fetchProduct();
    }, [slug]);

    const handleAddToCart = async () => {
        if (!product) return;
        setAddingToCart(true);
        try {
            const sessionId = getSessionId();
            await addToCart(sessionId, product.id, quantity, selectedSize, selectedColor);
            toast.cart("Added to cart!", `${product.name} has been added to your cart.`, {
                label: "View Cart",
                onClick: () => router.push("/cart"),
            });
        } catch (error) {
            console.error("Error adding to cart:", error);
            toast.error("Failed to add to cart", "Please try again.");
        } finally {
            setAddingToCart(false);
        }
    };

    if (loading) {
        return (
            <div className="overflow-x-hidden">
                <Header />
                <main className="flex min-h-screen items-center justify-center bg-primary">
                    <div className="flex flex-col items-center gap-4">
                        <Loading01 className="size-8 animate-spin text-brand-600" />
                        <p className="text-tertiary">Loading product...</p>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

    if (!product) {
        return (
            <div className="overflow-x-hidden">
                <Header />
                <main className="flex min-h-screen items-center justify-center bg-primary">
                    <div className="text-center">
                        <h1 className="text-2xl font-semibold text-primary">Product not found</h1>
                        <Button href="/shop" color="primary" className="mt-4">
                            Back to Shop
                        </Button>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

    const freeShippingThreshold = 120;
    const amountToFreeShipping = freeShippingThreshold - product.price;

    return (
        <div className="overflow-x-hidden">
            <Header />
            <main className="bg-primary">
                {/* Breadcrumb Header */}
                <section className="border-b border-teal-200 bg-teal-50 px-4 py-3 md:px-8 lg:px-16">
                    <div className="mx-auto flex max-w-7xl items-center justify-between">
                        <nav className="flex items-center gap-1 text-sm text-teal-700">
                            <a href="/" className="transition hover:text-teal-900">Home</a>
                            <svg className="size-4 text-teal-400" viewBox="0 0 32 32" fill="currentColor">
                                <path d="M11.42 29.42l-2.84-2.84 10.6-10.58-10.6-10.58 2.84-2.84 13.4 13.42z" />
                            </svg>
                            <a href="/shop" className="transition hover:text-teal-900">{product.category}</a>
                            <svg className="size-4 text-teal-400" viewBox="0 0 32 32" fill="currentColor">
                                <path d="M11.42 29.42l-2.84-2.84 10.6-10.58-10.6-10.58 2.84-2.84 13.4 13.42z" />
                            </svg>
                            <span className="font-medium text-teal-900">{product.name}</span>
                        </nav>
                        <div className="flex items-center gap-4">
                            <button className="flex items-center gap-1.5 text-sm text-teal-700 transition hover:text-teal-900">
                                <svg className="size-4" viewBox="0 0 11 15" fill="currentColor">
                                    <path d="M7.50002 5.89999V7.09999H8.90002V12.9H2.10002V7.09999H3.50002V5.89999H0.900024V14.1H10.1V5.89999H7.50002Z" />
                                    <path d="M4.90002 2.94999V9.99999H6.10002V2.94999L8.08002 4.91999L8.92002 4.07999L5.50002 0.649994L2.08002 4.07999L2.92002 4.91999L4.90002 2.94999Z" />
                                </svg>
                                Share
                            </button>
                            <button className="flex items-center gap-1.5 text-sm text-teal-700 transition hover:text-teal-900">
                                <svg className="size-4" viewBox="0 0 32 32" fill="currentColor">
                                    <path d="M22.857 11.429v-9.143h-13.714v9.143h-6.857v13.714h6.857v4.571h13.714v-4.571h6.857v-13.714h-6.857zM11.886 5.029h8.229v6.4h-8.229v-6.4zM20.114 22.4v4.571h-8.229v-5.943h8.229v1.371zM26.971 22.4h-4.114v-4.114h-13.714v4.114h-4.114v-8.229h21.943v8.229z" />
                                </svg>
                                Print
                            </button>
                        </div>
                    </div>
                </section>

                {/* Product Section */}
                <section className="px-4 py-12 md:px-8 md:py-16 lg:px-16">
                    <div className="mx-auto max-w-7xl">
                        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
                            {/* Image Gallery - Thumbnails on Left (desktop) / Below (mobile) */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                                className="flex flex-col-reverse gap-4 sm:flex-row"
                            >
                                {/* Thumbnails */}
                                <div className="flex gap-3 overflow-x-auto pb-2 sm:flex-col sm:overflow-x-visible sm:pb-0">
                                    {product.images.map((image, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setSelectedImage(index)}
                                            className={`relative size-16 shrink-0 overflow-hidden rounded-lg bg-secondary transition sm:size-20 md:size-24 ${
                                                selectedImage === index
                                                    ? "ring-2 ring-primary ring-offset-2"
                                                    : "opacity-70 hover:opacity-100"
                                            }`}
                                        >
                                            <img
                                                src={image}
                                                alt={`${product.name} ${index + 1}`}
                                                className="size-full object-cover"
                                            />
                                        </button>
                                    ))}
                                </div>

                                {/* Main Image */}
                                <div className="relative aspect-square flex-1 overflow-hidden rounded-2xl bg-secondary sm:aspect-auto">
                                    <img
                                        src={product.images?.[selectedImage] ?? ""}
                                        alt={product.name}
                                        className="size-full object-cover"
                                    />
                                </div>
                            </motion.div>

                            {/* Product Info */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                            >
                                <p className="text-xs font-medium uppercase tracking-[0.15em] text-tertiary">
                                    {product.category}
                                </p>

                                <h2 className="mt-2 text-2xl font-semibold uppercase tracking-wider text-primary md:text-3xl">
                                    {product.name}
                                </h2>

                                <div className="mt-4 flex items-center justify-between">
                                    <span className="text-2xl font-semibold text-primary">
                                        ${product.price.toFixed(2)}
                                    </span>
                                    <StarRating rating={product.rating} />
                                </div>

                                {/* In Stock Badge */}
                                {product.in_stock && (
                                    <span className="mt-4 inline-block rounded bg-success-500 px-3 py-1 text-xs font-semibold text-white">
                                        In Stock
                                    </span>
                                )}

                                {/* Size Selection */}
                                {product.sizes.length > 0 && (
                                    <div className="mt-6">
                                        <p className="mb-3 text-xs font-medium uppercase tracking-wider text-primary">
                                            Size : {selectedSize}
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {product.sizes.map((size) => (
                                                <button
                                                    key={size}
                                                    onClick={() => setSelectedSize(size)}
                                                    className={`rounded-md px-5 py-2.5 text-sm font-medium transition ${
                                                        selectedSize === size
                                                            ? "bg-gray-900 text-white"
                                                            : "border border-gray-300 bg-white text-gray-900 hover:border-gray-900"
                                                    }`}
                                                >
                                                    {size}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Color Selection */}
                                {product.colors.length > 0 && (
                                    <div className="mt-6">
                                        <p className="mb-3 text-xs font-medium uppercase tracking-wider text-primary">
                                            Color
                                        </p>
                                        <div className="flex items-center gap-3">
                                            {product.colors.map((color) => (
                                                <button
                                                    key={color}
                                                    onClick={() => setSelectedColor(color)}
                                                    className={`size-7 rounded-full transition ${
                                                        selectedColor === color
                                                            ? "ring-2 ring-primary ring-offset-2"
                                                            : "hover:scale-110"
                                                    }`}
                                                    style={{ backgroundColor: color }}
                                                />
                                            ))}
                                        </div>
                                        <button className="mt-2 text-xs text-tertiary underline hover:text-primary">
                                            Clear
                                        </button>
                                    </div>
                                )}

                                {/* Quantity & Add to Cart */}
                                <div className="mt-6 flex flex-wrap items-center gap-3">
                                    {/* Quantity Selector */}
                                    <div className="flex items-center border border-gray-300">
                                        <button
                                            onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                            className="flex size-10 items-center justify-center text-gray-500 transition hover:text-gray-900 sm:size-11"
                                        >
                                            <Minus className="size-4" />
                                        </button>
                                        <span className="w-8 text-center text-sm font-medium text-gray-900 sm:w-10">
                                            {quantity}
                                        </span>
                                        <button
                                            onClick={() => setQuantity(quantity + 1)}
                                            className="flex size-10 items-center justify-center text-gray-500 transition hover:text-gray-900 sm:size-11"
                                        >
                                            <Plus className="size-4" />
                                        </button>
                                    </div>

                                    {/* Add to Cart Button */}
                                    <button
                                        onClick={handleAddToCart}
                                        disabled={addingToCart}
                                        className="flex min-w-0 flex-1 items-center justify-center gap-2 bg-gray-900 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-white transition hover:bg-gray-800 disabled:opacity-50 sm:py-3 sm:text-sm"
                                    >
                                        {addingToCart ? "Adding..." : "Add to Cart"}
                                    </button>

                                    {/* Wishlist Button */}
                                    <WishlistButton
                                        productId={product.id}
                                        productName={product.name}
                                        size="lg"
                                        className="shrink-0 border border-gray-300"
                                    />
                                </div>

                                {/* Buy Now Button */}
                                <button className="mt-3 w-full bg-gray-500 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-white transition hover:bg-gray-600 sm:py-3 sm:text-sm">
                                    Buy Now
                                </button>

                                {/* Links */}
                                <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs sm:gap-x-6 sm:text-sm">
                                    <button className="flex items-center gap-1.5 text-tertiary transition hover:text-primary sm:gap-2">
                                        <Truck01 className="size-3.5 sm:size-4" />
                                        Delivery & Return
                                    </button>
                                    <button className="flex items-center gap-1.5 text-tertiary transition hover:text-primary sm:gap-2">
                                        <HelpCircle className="size-3.5 sm:size-4" />
                                        Ask A Question
                                    </button>
                                    <div className="flex items-center gap-2 sm:gap-3">
                                        <span className="text-tertiary">Share:</span>
                                        {["f", "in", "X", "in"].map((social, i) => (
                                            <button
                                                key={i}
                                                className="text-tertiary transition hover:text-primary"
                                            >
                                                {social}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Free Shipping Notice */}
                                <div className="mt-6 flex items-center gap-2 rounded-lg bg-secondary px-3 py-2.5 sm:px-4 sm:py-3">
                                    <Package className="size-4 shrink-0 text-tertiary sm:size-5" />
                                    <span className="text-xs text-tertiary sm:text-sm">
                                        Spend <span className="font-semibold text-primary">${amountToFreeShipping.toFixed(0)}</span> More To Get Free Shipping
                                    </span>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Tabs Section */}
                <section className="border-t border-secondary px-4 py-12 md:px-8 md:py-16 lg:px-16">
                    <div className="mx-auto max-w-7xl">
                        {/* Tab Headers */}
                        <div className="-mx-4 overflow-x-auto px-4 md:mx-0 md:px-0">
                            <div className="flex min-w-max gap-6 border-b border-secondary sm:gap-8">
                                {[
                                    { id: "description", label: "Description" },
                                    { id: "additional", label: "Additional Info" },
                                    { id: "reviews", label: "Reviews" },
                                ].map((tab) => (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                        className={`relative whitespace-nowrap pb-4 text-xs font-medium uppercase tracking-wider transition sm:text-sm ${
                                            activeTab === tab.id
                                                ? "text-primary"
                                                : "text-tertiary hover:text-primary"
                                        }`}
                                    >
                                        {tab.label}
                                        {activeTab === tab.id && (
                                            <motion.div
                                                layoutId="activeTab"
                                                className="absolute inset-x-0 bottom-0 h-0.5 bg-primary"
                                            />
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Tab Content */}
                        <div className="mt-10">
                            {activeTab === "description" && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="grid grid-cols-1 gap-10 lg:grid-cols-2"
                                >
                                    <div>
                                        <p className="leading-relaxed text-tertiary">
                                            {product.description}
                                        </p>

                                        <h3 className="mt-8 text-sm font-semibold uppercase tracking-wider text-primary">
                                            Product Features
                                        </h3>
                                        <ul className="mt-4 space-y-3">
                                            {product.features.map((feature, index) => (
                                                <li key={index} className="flex items-start gap-2 text-sm text-tertiary">
                                                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand-500" />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>

                                        <h3 className="mt-8 text-sm font-semibold uppercase tracking-wider text-primary">
                                            Beauty Benefits
                                        </h3>
                                        <p className="mt-4 leading-relaxed text-tertiary">
                                            {product.benefits}
                                        </p>

                                        <h3 className="mt-8 text-sm font-semibold uppercase tracking-wider text-primary">
                                            How To Use
                                        </h3>
                                        <p className="mt-4 leading-relaxed text-tertiary">
                                            {product.additional_info.usage}
                                        </p>
                                    </div>

                                    {/* Image */}
                                    <div className="hidden overflow-hidden rounded-2xl lg:block">
                                        <img
                                            src="https://wdtmonica.wpengine.com/wp-content/uploads/2026/01/Home1-slider-img-04.jpg"
                                            alt="Beauty"
                                            className="size-full object-cover"
                                        />
                                    </div>
                                </motion.div>
                            )}

                            {activeTab === "additional" && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="grid grid-cols-1 gap-10 lg:grid-cols-2"
                                >
                                    <div>
                                        <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-primary">
                                            Product Specifications
                                        </h3>
                                        <table className="w-full text-sm">
                                            <tbody>
                                                <tr className="border-b border-secondary">
                                                    <td className="w-1/3 py-4 font-medium text-primary">Weight</td>
                                                    <td className="py-4 text-tertiary">{product.additional_info.weight}</td>
                                                </tr>
                                                <tr className="border-b border-secondary">
                                                    <td className="py-4 font-medium text-primary">Dimensions</td>
                                                    <td className="py-4 text-tertiary">{product.additional_info.dimensions}</td>
                                                </tr>
                                                <tr className="border-b border-secondary">
                                                    <td className="py-4 font-medium text-primary">Size Options</td>
                                                    <td className="py-4 text-tertiary">{product.sizes.join(", ")}</td>
                                                </tr>
                                                <tr className="border-b border-secondary">
                                                    <td className="py-4 font-medium text-primary">Skin Type</td>
                                                    <td className="py-4 text-tertiary">{product.additional_info.skinType}</td>
                                                </tr>
                                                <tr className="border-b border-secondary">
                                                    <td className="py-4 font-medium text-primary">Shelf Life</td>
                                                    <td className="py-4 text-tertiary">{product.additional_info.shelfLife}</td>
                                                </tr>
                                                <tr className="border-b border-secondary">
                                                    <td className="py-4 font-medium text-primary">Made In</td>
                                                    <td className="py-4 text-tertiary">{product.additional_info.madeIn}</td>
                                                </tr>
                                            </tbody>
                                        </table>

                                        <h3 className="mb-4 mt-8 text-sm font-semibold uppercase tracking-wider text-primary">
                                            Ingredients
                                        </h3>
                                        <p className="text-sm leading-relaxed text-tertiary">
                                            {product.additional_info.ingredients}
                                        </p>

                                        <h3 className="mb-4 mt-8 text-sm font-semibold uppercase tracking-wider text-primary">
                                            How To Use
                                        </h3>
                                        <p className="text-sm leading-relaxed text-tertiary">
                                            {product.additional_info.usage}
                                        </p>
                                    </div>

                                    {/* Image */}
                                    <div className="hidden overflow-hidden rounded-2xl lg:block">
                                        <img
                                            src={product.images[1] || product.images[0]}
                                            alt={product.name}
                                            className="size-full object-cover"
                                        />
                                    </div>
                                </motion.div>
                            )}

                            {activeTab === "reviews" && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {/* Reviews Header */}
                                    <div className="mb-8 flex flex-col gap-6 border-b border-secondary pb-8 md:flex-row md:items-center md:justify-between">
                                        <div>
                                            <h3 className="text-lg font-semibold text-primary">
                                                Customer Reviews
                                            </h3>
                                            <div className="mt-2 flex items-center gap-3">
                                                <StarRating rating={product.rating} />
                                                <span className="text-sm text-tertiary">
                                                    Based on {product.reviews} reviews
                                                </span>
                                            </div>
                                        </div>
                                        <Button color="secondary" size="md">
                                            Write a Review
                                        </Button>
                                    </div>

                                    {/* Reviews List */}
                                    <div className="space-y-6">
                                        {product.customer_reviews.map((review, index) => (
                                            <motion.div
                                                key={index}
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                                className="rounded-xl border border-secondary bg-primary p-6"
                                            >
                                                <div className="flex items-start gap-4">
                                                    {/* Avatar */}
                                                    <img
                                                        src={review.avatar}
                                                        alt={review.name}
                                                        className="size-12 shrink-0 rounded-full object-cover"
                                                    />
                                                    <div className="flex-1">
                                                        {/* Header */}
                                                        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                                                            <div>
                                                                <div className="flex items-center gap-2">
                                                                    <span className="font-semibold text-primary">
                                                                        {review.name}
                                                                    </span>
                                                                    {review.verified && (
                                                                        <span className="rounded-full bg-success-100 px-2 py-0.5 text-xs font-medium text-success-700">
                                                                            Verified Purchase
                                                                        </span>
                                                                    )}
                                                                </div>
                                                                <span className="text-xs text-tertiary">
                                                                    {review.date}
                                                                </span>
                                                            </div>
                                                            <StarRating rating={review.rating} />
                                                        </div>

                                                        {/* Review Content */}
                                                        <h4 className="mt-3 font-medium text-primary">
                                                            {review.title}
                                                        </h4>
                                                        <p className="mt-2 text-sm leading-relaxed text-tertiary">
                                                            {review.comment}
                                                        </p>

                                                        {/* Actions */}
                                                        <div className="mt-4 flex items-center gap-4">
                                                            <button className="text-xs text-tertiary transition hover:text-primary">
                                                                Helpful (12)
                                                            </button>
                                                            <button className="text-xs text-tertiary transition hover:text-primary">
                                                                Report
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>

                                    {/* Load More */}
                                    <div className="mt-8 text-center">
                                        <Button color="secondary" size="md">
                                            Load More Reviews
                                        </Button>
                                    </div>
                                </motion.div>
                            )}
                        </div>
                    </div>
                </section>

                {/* Related Products */}
                <section className="bg-primary px-4 py-12 sm:py-16 md:px-8 md:py-24 lg:px-16">
                    <div className="mx-auto max-w-7xl">
                        <div className="mb-8 text-center sm:mb-12 md:mb-16">
                            <span className="mb-2 inline-block rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-700 sm:mb-3">
                                Explore Our Range
                            </span>
                            <h2 className="mt-3 text-xl font-semibold text-primary sm:mt-4 sm:text-display-xs md:text-display-sm">
                                Related <span className="text-brand-600">Products</span>
                            </h2>
                        </div>

                        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
                            {relatedProducts.map((relatedProduct, index) => (
                                <motion.div
                                    key={relatedProduct.slug}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="group"
                                >
                                    {/* Product Image */}
                                    <div className="relative aspect-[850/1020] overflow-hidden rounded-2xl bg-secondary">
                                        <a href={`/product/${relatedProduct.slug}`} className="block size-full">
                                            {/* Primary Image */}
                                            <img
                                                src={relatedProduct.images[0]}
                                                alt={relatedProduct.name}
                                                className="absolute inset-0 size-full object-cover transition duration-500 group-hover:opacity-0"
                                            />
                                            {/* Secondary Image (on hover) */}
                                            <img
                                                src={relatedProduct.images[1] || relatedProduct.images[0]}
                                                alt={relatedProduct.name}
                                                className="absolute inset-0 size-full object-cover opacity-0 transition duration-500 group-hover:opacity-100"
                                            />
                                        </a>

                                        {/* Badges */}
                                        <div className="absolute left-2 top-2 flex flex-col gap-1 sm:left-4 sm:top-4 sm:gap-2">
                                            {relatedProduct.badges.slice(0, 1).map((badge) => (
                                                <span
                                                    key={badge}
                                                    className={`rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase sm:px-3 sm:py-1 sm:text-xs ${
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
                                        <div className="absolute right-2 top-2 flex flex-col gap-2 opacity-0 transition duration-300 group-hover:opacity-100 sm:right-4 sm:top-4">
                                            <button
                                                className="flex size-8 items-center justify-center rounded-full bg-white shadow-md transition duration-100 ease-linear hover:bg-brand-50 hover:text-brand-600 sm:size-10"
                                                aria-label="Add to wishlist"
                                            >
                                                <Heart className="size-4 sm:size-5" />
                                            </button>
                                        </div>

                                        {/* Add to Cart Button */}
                                        <div className="absolute inset-x-2 bottom-2 translate-y-4 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 sm:inset-x-4 sm:bottom-4">
                                            <Button
                                                href={`/product/${relatedProduct.slug}`}
                                                color="primary"
                                                size="sm"
                                                iconLeading={ShoppingBag01}
                                                className="w-full justify-center sm:text-sm"
                                            >
                                                <span className="hidden sm:inline">Select Options</span>
                                                <span className="sm:hidden">View</span>
                                            </Button>
                                        </div>
                                    </div>

                                    {/* Product Details */}
                                    <div className="mt-3 sm:mt-4">
                                        <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between sm:gap-0">
                                            <a
                                                href={`/product/${relatedProduct.slug}`}
                                                className="text-xs text-tertiary transition duration-100 ease-linear hover:text-brand-600 sm:text-sm"
                                            >
                                                {relatedProduct.category}
                                            </a>
                                            <StarRating rating={relatedProduct.rating} />
                                        </div>

                                        <h3 className="mt-1.5 text-sm font-semibold text-primary sm:mt-2 sm:text-lg">
                                            <a
                                                href={`/product/${relatedProduct.slug}`}
                                                className="line-clamp-1 transition duration-100 ease-linear hover:text-brand-600"
                                            >
                                                {relatedProduct.name}
                                            </a>
                                        </h3>

                                        <p className="mt-1 text-xs font-medium text-secondary sm:text-md">
                                            ${relatedProduct.price.toFixed(2)} – ${(relatedProduct.original_price || relatedProduct.price).toFixed(2)}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
