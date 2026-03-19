"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/base/buttons/button";
import {
    Heart,
    Star01,
    ShoppingBag01,
    Minus,
    Plus,
    Check,
    Truck01,
    RefreshCw01,
    Shield01,
    ChevronRight,
    Share07,
} from "@untitledui/icons";
import { Header } from "@/app/components/header";
import { Footer } from "@/app/components/footer";

// Mock product data - in real app, fetch based on slug
const allProducts = [
    {
        slug: "pure-protect",
        name: "Pure Protect",
        category: "Premium Face Oil",
        price: 45.00,
        originalPrice: 57.00,
        rating: 5,
        reviews: 128,
        description: "A luxurious face oil that deeply nourishes and protects your skin. Formulated with natural ingredients to restore radiance and maintain a healthy, youthful glow.",
        images: [
            "https://wdtmonica.wpengine.com/wp-content/uploads/2026/01/shop-16-01.png",
            "https://wdtmonica.wpengine.com/wp-content/uploads/2026/01/shop-16-02.jpg",
            "https://wdtmonica.wpengine.com/wp-content/uploads/2026/01/shop-15-02.jpg",
            "https://wdtmonica.wpengine.com/wp-content/uploads/2026/01/shop-14-02.jpg",
        ],
        badges: ["Hot Deal"],
        sizes: ["30ml", "50ml", "100ml"],
        features: [
            "100% Natural Ingredients",
            "Dermatologist Tested",
            "Cruelty Free",
            "Paraben Free",
        ],
    },
    {
        slug: "pure-glow-mask",
        name: "Pure Glow Mask",
        category: "Luxury Face Powder",
        price: 62.00,
        originalPrice: 75.00,
        rating: 5,
        reviews: 95,
        description: "An intensive face mask that delivers instant radiance and long-lasting hydration. Perfect for all skin types, this mask transforms dull skin into a luminous complexion.",
        images: [
            "https://wdtmonica.wpengine.com/wp-content/uploads/2026/01/shop-15-01.png",
            "https://wdtmonica.wpengine.com/wp-content/uploads/2026/01/shop-15-02.jpg",
            "https://wdtmonica.wpengine.com/wp-content/uploads/2026/01/shop-16-02.jpg",
            "https://wdtmonica.wpengine.com/wp-content/uploads/2026/01/shop-13-02.jpg",
        ],
        badges: ["Sale", "Hot Deal"],
        sizes: ["50g", "100g", "150g"],
        features: [
            "Instant Glow Effect",
            "Deep Hydration",
            "Suitable for All Skin Types",
            "Natural Extracts",
        ],
    },
    {
        slug: "blend-sponge",
        name: "Blend Sponge",
        category: "Renew Hand Sanitizer",
        price: 70.00,
        originalPrice: 77.00,
        rating: 4,
        reviews: 64,
        description: "Professional-grade beauty sponge designed for flawless makeup application. The unique texture ensures seamless blending for a natural, airbrushed finish.",
        images: [
            "https://wdtmonica.wpengine.com/wp-content/uploads/2026/01/shop-14-01.png",
            "https://wdtmonica.wpengine.com/wp-content/uploads/2026/01/shop-14-02.jpg",
            "https://wdtmonica.wpengine.com/wp-content/uploads/2026/01/shop-15-02.jpg",
            "https://wdtmonica.wpengine.com/wp-content/uploads/2026/01/shop-16-02.jpg",
        ],
        badges: ["Hot Deal"],
        sizes: ["Single", "Pack of 3", "Pack of 5"],
        features: [
            "Ultra-Soft Material",
            "Latex Free",
            "Reusable & Washable",
            "Professional Quality",
        ],
    },
    {
        slug: "night-lip-balm",
        name: "Night Lip Balm",
        category: "Modern Nail Polish",
        price: 55.00,
        originalPrice: 64.00,
        rating: 4,
        reviews: 82,
        description: "An overnight lip treatment that repairs and hydrates while you sleep. Wake up to soft, supple lips with this nourishing formula enriched with natural oils.",
        images: [
            "https://wdtmonica.wpengine.com/wp-content/uploads/2026/01/shop-13-01.png",
            "https://wdtmonica.wpengine.com/wp-content/uploads/2026/01/shop-13-02.jpg",
            "https://wdtmonica.wpengine.com/wp-content/uploads/2026/01/shop-10-02.jpg",
            "https://wdtmonica.wpengine.com/wp-content/uploads/2026/01/shop-6-02.jpg",
        ],
        badges: ["Sale", "Hot Deal"],
        sizes: ["10g", "20g", "30g"],
        features: [
            "Overnight Repair",
            "Natural Oils",
            "Long-Lasting Moisture",
            "Vitamin E Enriched",
        ],
    },
    {
        slug: "soft-skin-bar",
        name: "Soft Skin Bar",
        category: "Renew Hand Sanitizer",
        price: 30.00,
        originalPrice: 35.00,
        rating: 4,
        reviews: 156,
        description: "A gentle cleansing bar that leaves skin feeling soft and refreshed. Formulated with moisturizing ingredients to cleanse without stripping natural oils.",
        images: [
            "https://wdtmonica.wpengine.com/wp-content/uploads/2026/01/shop-10-01.png",
            "https://wdtmonica.wpengine.com/wp-content/uploads/2026/01/shop-10-02.jpg",
            "https://wdtmonica.wpengine.com/wp-content/uploads/2026/01/shop-13-02.jpg",
            "https://wdtmonica.wpengine.com/wp-content/uploads/2026/01/shop-14-02.jpg",
        ],
        badges: ["Sale", "Hot Deal"],
        sizes: ["100g", "200g", "300g"],
        features: [
            "Gentle Cleansing",
            "Moisturizing Formula",
            "Natural Fragrance",
            "pH Balanced",
        ],
    },
];

function StarRating({ rating, reviews }: { rating: number; reviews: number }) {
    return (
        <div className="flex items-center gap-2">
            <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                    <Star01
                        key={i}
                        className={`size-5 ${
                            i < rating ? "fill-warning-400 text-warning-400" : "text-tertiary"
                        }`}
                    />
                ))}
            </div>
            <span className="text-sm text-tertiary">({reviews} reviews)</span>
        </div>
    );
}

export default function ProductPage({ params }: { params: { slug: string } }) {
    const product = allProducts.find((p) => p.slug === params.slug) || allProducts[0];

    const [selectedImage, setSelectedImage] = useState(0);
    const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
    const [quantity, setQuantity] = useState(1);
    const [isWishlisted, setIsWishlisted] = useState(false);

    const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

    return (
        <div className="overflow-x-hidden">
            <Header />
            <main className="bg-primary">
                {/* Breadcrumb */}
                <div className="border-b border-secondary px-4 py-4 md:px-8 lg:px-16">
                    <div className="mx-auto max-w-7xl">
                        <nav className="flex items-center gap-2 text-sm text-tertiary">
                            <a href="/" className="transition hover:text-brand-600">Home</a>
                            <ChevronRight className="size-4" />
                            <a href="/shop" className="transition hover:text-brand-600">Shop</a>
                            <ChevronRight className="size-4" />
                            <span className="text-primary">{product.name}</span>
                        </nav>
                    </div>
                </div>

                {/* Product Section */}
                <section className="px-4 py-12 md:px-8 md:py-16 lg:px-16">
                    <div className="mx-auto max-w-7xl">
                        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
                            {/* Image Gallery */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                {/* Main Image */}
                                <div className="relative aspect-square overflow-hidden rounded-3xl bg-secondary">
                                    <img
                                        src={product.images[selectedImage]}
                                        alt={product.name}
                                        className="size-full object-cover"
                                    />
                                    {/* Badges */}
                                    <div className="absolute left-4 top-4 flex flex-col gap-2">
                                        {product.badges.map((badge) => (
                                            <span
                                                key={badge}
                                                className={`rounded-full px-3 py-1.5 text-xs font-semibold uppercase ${
                                                    badge === "Sale"
                                                        ? "bg-error-500 text-white"
                                                        : "bg-brand-600 text-white"
                                                }`}
                                            >
                                                {badge}
                                            </span>
                                        ))}
                                        {discount > 0 && (
                                            <span className="rounded-full bg-success-500 px-3 py-1.5 text-xs font-semibold text-white">
                                                -{discount}%
                                            </span>
                                        )}
                                    </div>
                                </div>

                                {/* Thumbnail Gallery */}
                                <div className="mt-4 grid grid-cols-4 gap-3">
                                    {product.images.map((image, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setSelectedImage(index)}
                                            className={`relative aspect-square overflow-hidden rounded-xl bg-secondary transition ${
                                                selectedImage === index
                                                    ? "ring-2 ring-brand-600 ring-offset-2"
                                                    : "hover:opacity-80"
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
                            </motion.div>

                            {/* Product Info */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="flex flex-col"
                            >
                                <p className="text-sm font-medium uppercase tracking-wider text-brand-600">
                                    {product.category}
                                </p>

                                <h1 className="mt-2 text-display-xs font-semibold text-primary md:text-display-sm">
                                    {product.name}
                                </h1>

                                <div className="mt-4">
                                    <StarRating rating={product.rating} reviews={product.reviews} />
                                </div>

                                {/* Price */}
                                <div className="mt-6 flex items-center gap-3">
                                    <span className="text-2xl font-bold text-primary md:text-3xl">
                                        ${product.price.toFixed(2)}
                                    </span>
                                    {product.originalPrice > product.price && (
                                        <span className="text-lg text-tertiary line-through">
                                            ${product.originalPrice.toFixed(2)}
                                        </span>
                                    )}
                                </div>

                                <p className="mt-6 text-md leading-relaxed text-tertiary">
                                    {product.description}
                                </p>

                                {/* Size Selection */}
                                <div className="mt-8">
                                    <p className="mb-3 text-sm font-medium text-primary">Size</p>
                                    <div className="flex flex-wrap gap-3">
                                        {product.sizes.map((size) => (
                                            <button
                                                key={size}
                                                onClick={() => setSelectedSize(size)}
                                                className={`rounded-xl px-5 py-3 text-sm font-medium transition ${
                                                    selectedSize === size
                                                        ? "bg-brand-600 text-white"
                                                        : "border border-secondary bg-secondary text-primary hover:border-brand-600"
                                                }`}
                                            >
                                                {size}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Quantity & Add to Cart */}
                                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                                    {/* Quantity Selector */}
                                    <div className="flex items-center rounded-xl border border-secondary">
                                        <button
                                            onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                            className="flex size-12 items-center justify-center text-tertiary transition hover:text-primary"
                                        >
                                            <Minus className="size-5" />
                                        </button>
                                        <span className="w-12 text-center text-md font-medium text-primary">
                                            {quantity}
                                        </span>
                                        <button
                                            onClick={() => setQuantity(quantity + 1)}
                                            className="flex size-12 items-center justify-center text-tertiary transition hover:text-primary"
                                        >
                                            <Plus className="size-5" />
                                        </button>
                                    </div>

                                    {/* Add to Cart Button */}
                                    <Button
                                        color="primary"
                                        size="xl"
                                        iconLeading={ShoppingBag01}
                                        className="flex-1"
                                    >
                                        Add to Cart
                                    </Button>

                                    {/* Wishlist Button */}
                                    <button
                                        onClick={() => setIsWishlisted(!isWishlisted)}
                                        className={`flex size-14 shrink-0 items-center justify-center rounded-xl border transition ${
                                            isWishlisted
                                                ? "border-brand-600 bg-brand-50 text-brand-600"
                                                : "border-secondary text-tertiary hover:border-brand-600 hover:text-brand-600"
                                        }`}
                                    >
                                        <Heart className={`size-6 ${isWishlisted ? "fill-brand-600" : ""}`} />
                                    </button>

                                    {/* Share Button */}
                                    <button className="flex size-14 shrink-0 items-center justify-center rounded-xl border border-secondary text-tertiary transition hover:border-brand-600 hover:text-brand-600">
                                        <Share07 className="size-6" />
                                    </button>
                                </div>

                                {/* Features */}
                                <div className="mt-8 grid grid-cols-2 gap-3">
                                    {product.features.map((feature, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center gap-2 text-sm text-secondary"
                                        >
                                            <Check className="size-5 text-success-500" />
                                            {feature}
                                        </div>
                                    ))}
                                </div>

                                {/* Delivery Info */}
                                <div className="mt-8 grid grid-cols-1 gap-4 rounded-2xl bg-secondary p-6 sm:grid-cols-3">
                                    <div className="flex items-center gap-3">
                                        <div className="flex size-12 items-center justify-center rounded-full bg-brand-100">
                                            <Truck01 className="size-6 text-brand-600" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-primary">Free Shipping</p>
                                            <p className="text-xs text-tertiary">On orders over $50</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="flex size-12 items-center justify-center rounded-full bg-brand-100">
                                            <RefreshCw01 className="size-6 text-brand-600" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-primary">Easy Returns</p>
                                            <p className="text-xs text-tertiary">30-day return policy</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="flex size-12 items-center justify-center rounded-full bg-brand-100">
                                            <Shield01 className="size-6 text-brand-600" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-primary">Secure Payment</p>
                                            <p className="text-xs text-tertiary">100% secure checkout</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Related Products */}
                <section className="border-t border-secondary px-4 py-16 md:px-8 md:py-24 lg:px-16">
                    <div className="mx-auto max-w-7xl">
                        <h2 className="mb-10 text-center text-display-xs font-semibold text-primary md:text-display-sm">
                            You May Also <span className="text-brand-600">Like</span>
                        </h2>

                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                            {allProducts
                                .filter((p) => p.slug !== product.slug)
                                .slice(0, 4)
                                .map((relatedProduct) => (
                                    <motion.a
                                        key={relatedProduct.slug}
                                        href={`/product/${relatedProduct.slug}`}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5 }}
                                        className="group"
                                    >
                                        <div className="relative aspect-square overflow-hidden rounded-2xl bg-secondary">
                                            <img
                                                src={relatedProduct.images[0]}
                                                alt={relatedProduct.name}
                                                className="size-full object-cover transition duration-500 group-hover:scale-110"
                                            />
                                        </div>
                                        <div className="mt-4">
                                            <p className="text-sm text-tertiary">{relatedProduct.category}</p>
                                            <h3 className="mt-1 font-semibold text-primary transition group-hover:text-brand-600">
                                                {relatedProduct.name}
                                            </h3>
                                            <p className="mt-1 font-medium text-secondary">
                                                ${relatedProduct.price.toFixed(2)}
                                            </p>
                                        </div>
                                    </motion.a>
                                ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
