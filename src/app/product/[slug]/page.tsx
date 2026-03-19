"use client";

import { useState, use } from "react";
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
        description: "Our Detox Clay is a luxurious, purifying pink clay mask designed to deeply detoxify, clarify, and brighten your skin while gently restoring balance and hydration. This creamy, mineral-rich clay draws out impurities, excess oil, and toxins without over-drying, thanks to its soothing botanical blend and natural hydrators. Ideal for weekly use, it leaves skin feeling refreshed, pores refined, and complexion visibly clearer.",
        images: [
            "https://wdtmonica.wpengine.com/wp-content/uploads/2026/01/shop-16-01.png",
            "https://wdtmonica.wpengine.com/wp-content/uploads/2026/01/shop-16-02.jpg",
            "https://wdtmonica.wpengine.com/wp-content/uploads/2026/01/shop-15-02.jpg",
            "https://wdtmonica.wpengine.com/wp-content/uploads/2026/01/shop-14-02.jpg",
        ],
        badges: ["Hot Deal"],
        sizes: ["180 ML", "300 ML"],
        colors: ["#C4A484", "#E8B298", "#F5D5C8"],
        features: [
            "Infused with premium pink clay, vitamins, antioxidants, and soothing botanicals to detoxify and nourish skin.",
            "Creamy, easy-to-apply texture that dries comfortably and rinses off smoothly.",
            "Free from parabens, sulfates, harsh chemicals, and synthetic fragrances.",
            "Suitable for all skin types, including oily, combination, acne-prone, and sensitive skin.",
        ],
        benefits: "Revive your skin with our Detox Clay — it powerfully purifies pores, absorbs excess sebum, and gently exfoliates to reveal smoother, brighter, more even-toned skin while maintaining essential moisture. Regular use helps minimize blackheads, reduce inflammation, calm breakouts, and fade dullness for a noticeably clearer and healthier complexion.",
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
        description: "An intensive face mask that delivers instant radiance and long-lasting hydration. Perfect for all skin types, this mask transforms dull skin into a luminous complexion.",
        images: [
            "https://wdtmonica.wpengine.com/wp-content/uploads/2026/01/shop-15-01.png",
            "https://wdtmonica.wpengine.com/wp-content/uploads/2026/01/shop-15-02.jpg",
            "https://wdtmonica.wpengine.com/wp-content/uploads/2026/01/shop-16-02.jpg",
            "https://wdtmonica.wpengine.com/wp-content/uploads/2026/01/shop-13-02.jpg",
        ],
        badges: ["Sale", "Hot Deal"],
        sizes: ["50g", "100g"],
        colors: ["#F5D5C8", "#E8B298", "#D4A574"],
        features: [
            "Instant glow effect with deep hydration formula.",
            "Suitable for all skin types including sensitive skin.",
            "Natural extracts and botanical ingredients.",
            "Paraben-free and cruelty-free formulation.",
        ],
        benefits: "Experience radiant, youthful skin with our intensive glow mask. It deeply nourishes, hydrates, and revitalizes tired skin for a luminous, healthy complexion.",
    },
    {
        slug: "blend-sponge",
        name: "Blend Sponge",
        category: "Renew Hand Sanitizer",
        price: 46.00,
        originalPrice: 55.00,
        rating: 4,
        reviews: 64,
        inStock: true,
        description: "Professional-grade beauty sponge designed for flawless makeup application. The unique texture ensures seamless blending for a natural, airbrushed finish.",
        images: [
            "https://wdtmonica.wpengine.com/wp-content/uploads/2026/01/shop-14-01.png",
            "https://wdtmonica.wpengine.com/wp-content/uploads/2026/01/shop-14-02.jpg",
            "https://wdtmonica.wpengine.com/wp-content/uploads/2026/01/shop-15-02.jpg",
            "https://wdtmonica.wpengine.com/wp-content/uploads/2026/01/shop-16-02.jpg",
        ],
        badges: ["Hot Deal"],
        sizes: ["Single", "Pack of 3"],
        colors: ["#FFB6C1", "#F5D5C8", "#E8B298"],
        features: [
            "Ultra-soft material for gentle application.",
            "Latex-free and hypoallergenic.",
            "Reusable and easy to clean.",
            "Professional quality for flawless results.",
        ],
        benefits: "Achieve a flawless, airbrushed makeup finish with our professional-grade beauty sponge. Perfect for blending foundation, concealer, and powder.",
    },
    {
        slug: "night-lip-balm",
        name: "Night Lip Balm",
        category: "Modern Nail Polish",
        price: 55.00,
        originalPrice: 64.00,
        rating: 4,
        reviews: 82,
        inStock: true,
        description: "An overnight lip treatment that repairs and hydrates while you sleep. Wake up to soft, supple lips with this nourishing formula enriched with natural oils.",
        images: [
            "https://wdtmonica.wpengine.com/wp-content/uploads/2026/01/shop-13-01.png",
            "https://wdtmonica.wpengine.com/wp-content/uploads/2026/01/shop-13-02.jpg",
            "https://wdtmonica.wpengine.com/wp-content/uploads/2026/01/shop-10-02.jpg",
            "https://wdtmonica.wpengine.com/wp-content/uploads/2026/01/shop-6-02.jpg",
        ],
        badges: ["Sale", "Hot Deal"],
        sizes: ["10g", "20g"],
        colors: ["#E8B298", "#C4A484", "#F5D5C8"],
        features: [
            "Overnight repair formula with natural oils.",
            "Long-lasting moisture and protection.",
            "Vitamin E enriched for nourishment.",
            "Gentle formula for sensitive lips.",
        ],
        benefits: "Wake up to perfectly soft, hydrated lips. Our overnight treatment deeply nourishes and repairs while you sleep.",
    },
    {
        slug: "soft-skin-bar",
        name: "Soft Skin Bar",
        category: "Renew Hand Sanitizer",
        price: 30.00,
        originalPrice: 35.00,
        rating: 4,
        reviews: 156,
        inStock: true,
        description: "A gentle cleansing bar that leaves skin feeling soft and refreshed. Formulated with moisturizing ingredients to cleanse without stripping natural oils.",
        images: [
            "https://wdtmonica.wpengine.com/wp-content/uploads/2026/01/shop-10-01.png",
            "https://wdtmonica.wpengine.com/wp-content/uploads/2026/01/shop-10-02.jpg",
            "https://wdtmonica.wpengine.com/wp-content/uploads/2026/01/shop-13-02.jpg",
            "https://wdtmonica.wpengine.com/wp-content/uploads/2026/01/shop-14-02.jpg",
        ],
        badges: ["Sale", "Hot Deal"],
        sizes: ["100g", "200g"],
        colors: ["#F5D5C8", "#FFB6C1", "#E8B298"],
        features: [
            "Gentle cleansing without stripping moisture.",
            "Moisturizing formula for soft skin.",
            "Natural fragrance and ingredients.",
            "pH balanced for all skin types.",
        ],
        benefits: "Experience gentle yet effective cleansing that leaves your skin feeling soft, smooth, and refreshed without dryness.",
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
        description: "A lightweight daily lotion that provides all-day hydration and a natural glow.",
        images: [
            "https://wdtmonica.wpengine.com/wp-content/uploads/2026/01/shop-6-01.png",
            "https://wdtmonica.wpengine.com/wp-content/uploads/2026/01/shop-6-02.jpg",
            "https://wdtmonica.wpengine.com/wp-content/uploads/2026/01/shop-10-02.jpg",
            "https://wdtmonica.wpengine.com/wp-content/uploads/2026/01/shop-13-02.jpg",
        ],
        badges: ["Sale", "Hot Deal"],
        sizes: ["100ml", "200ml"],
        colors: ["#E8B298", "#F5D5C8", "#C4A484"],
        features: [
            "Lightweight, non-greasy formula.",
            "All-day hydration and protection.",
            "Natural glow-enhancing ingredients.",
            "Quick-absorbing texture.",
        ],
        benefits: "Keep your skin hydrated and glowing all day with our lightweight daily lotion.",
    },
    {
        slug: "monica-blush",
        name: "Monica Blush",
        category: "Hydra Glow Serum",
        price: 46.00,
        originalPrice: 52.00,
        rating: 3,
        reviews: 45,
        inStock: true,
        description: "A beautiful blush that gives you a natural, rosy glow.",
        images: [
            "https://wdtmonica.wpengine.com/wp-content/uploads/2026/01/shop-3-01.png",
            "https://wdtmonica.wpengine.com/wp-content/uploads/2026/01/shop-3-02.jpg",
            "https://wdtmonica.wpengine.com/wp-content/uploads/2026/01/shop-6-02.jpg",
            "https://wdtmonica.wpengine.com/wp-content/uploads/2026/01/shop-10-02.jpg",
        ],
        badges: ["Hot Deal"],
        sizes: ["5g", "10g"],
        colors: ["#FFB6C1", "#F5D5C8", "#E8B298"],
        features: [
            "Natural, buildable color.",
            "Long-lasting formula.",
            "Silky smooth texture.",
            "Suitable for all skin tones.",
        ],
        benefits: "Add a beautiful, natural flush to your cheeks with our silky smooth blush formula.",
    },
];

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
    const product = allProducts.find((p) => p.slug === slug) || allProducts[0];

    const [selectedImage, setSelectedImage] = useState(0);
    const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
    const [selectedColor, setSelectedColor] = useState(product.colors[0]);
    const [quantity, setQuantity] = useState(1);
    const [isWishlisted, setIsWishlisted] = useState(false);
    const [activeTab, setActiveTab] = useState("description");

    const freeShippingThreshold = 120;
    const amountToFreeShipping = freeShippingThreshold - product.price;

    return (
        <div className="overflow-x-hidden">
            <Header />
            <main className="bg-primary">
                {/* Hero Header */}
                <div className="relative bg-brand-50 py-12 md:py-16">
                    <div className="absolute inset-0 overflow-hidden">
                        <img
                            src="https://wdtmonica.wpengine.com/wp-content/uploads/2026/01/Home1-slider-img-01.jpg"
                            alt=""
                            className="size-full object-cover opacity-20"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-brand-50 via-brand-50/95 to-brand-50/80" />
                    </div>
                    <div className="relative mx-auto max-w-7xl px-4 text-center md:px-8 lg:px-16">
                        <h1 className="text-2xl font-semibold uppercase tracking-[0.2em] text-primary md:text-3xl">
                            Shop Detail
                        </h1>
                        <nav className="mt-4 flex items-center justify-center gap-2 text-sm text-tertiary">
                            <a href="/" className="transition hover:text-brand-600">Home</a>
                            <span>/</span>
                            <a href="/shop" className="transition hover:text-brand-600">{product.category}</a>
                            <span>/</span>
                            <span className="text-primary">{product.name}</span>
                        </nav>
                    </div>
                </div>

                {/* Product Section */}
                <section className="px-4 py-12 md:px-8 md:py-16 lg:px-16">
                    <div className="mx-auto max-w-7xl">
                        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
                            {/* Image Gallery - Thumbnails on Left */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                                className="flex gap-4"
                            >
                                {/* Thumbnails */}
                                <div className="flex flex-col gap-3">
                                    {product.images.map((image, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setSelectedImage(index)}
                                            className={`relative size-20 shrink-0 overflow-hidden rounded-lg bg-secondary transition md:size-24 ${
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
                                <div className="relative flex-1 overflow-hidden rounded-2xl bg-secondary">
                                    <img
                                        src={product.images[selectedImage]}
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
                                {product.inStock && (
                                    <span className="mt-4 inline-block rounded bg-success-500 px-3 py-1 text-xs font-semibold text-white">
                                        In Stock
                                    </span>
                                )}

                                {/* Size Selection */}
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

                                {/* Color Selection */}
                                <div className="mt-6">
                                    <p className="mb-3 text-xs font-medium uppercase tracking-wider text-primary">
                                        Color : <span className="normal-case text-tertiary">Dirty Pink</span>
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

                                {/* Quantity & Add to Cart */}
                                <div className="mt-6 flex items-center gap-3">
                                    {/* Quantity Selector */}
                                    <div className="flex items-center border border-gray-300">
                                        <button
                                            onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                            className="flex size-11 items-center justify-center text-gray-500 transition hover:text-gray-900"
                                        >
                                            <Minus className="size-4" />
                                        </button>
                                        <span className="w-10 text-center text-sm font-medium text-gray-900">
                                            {quantity}
                                        </span>
                                        <button
                                            onClick={() => setQuantity(quantity + 1)}
                                            className="flex size-11 items-center justify-center text-gray-500 transition hover:text-gray-900"
                                        >
                                            <Plus className="size-4" />
                                        </button>
                                    </div>

                                    {/* Add to Cart Button */}
                                    <button className="flex flex-1 items-center justify-center gap-2 bg-gray-900 py-3 text-sm font-semibold uppercase tracking-wider text-white transition hover:bg-gray-800">
                                        Add to Cart
                                    </button>

                                    {/* Wishlist Button */}
                                    <button
                                        onClick={() => setIsWishlisted(!isWishlisted)}
                                        className={`flex size-11 items-center justify-center border transition ${
                                            isWishlisted
                                                ? "border-brand-600 bg-brand-50 text-brand-600"
                                                : "border-gray-300 text-gray-500 hover:border-gray-900 hover:text-gray-900"
                                        }`}
                                    >
                                        <Heart className={`size-5 ${isWishlisted ? "fill-brand-600" : ""}`} />
                                    </button>
                                </div>

                                {/* Buy Now Button */}
                                <button className="mt-3 w-full bg-gray-500 py-3 text-sm font-semibold uppercase tracking-wider text-white transition hover:bg-gray-600">
                                    Buy Now
                                </button>

                                {/* Links */}
                                <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
                                    <button className="flex items-center gap-2 text-tertiary transition hover:text-primary">
                                        <Truck01 className="size-4" />
                                        Delivery & Return
                                    </button>
                                    <button className="flex items-center gap-2 text-tertiary transition hover:text-primary">
                                        <HelpCircle className="size-4" />
                                        Ask A Question
                                    </button>
                                    <div className="flex items-center gap-3">
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
                                <div className="mt-6 flex items-center gap-2 rounded-lg bg-secondary px-4 py-3">
                                    <Package className="size-5 text-tertiary" />
                                    <span className="text-sm text-tertiary">
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
                        <div className="flex gap-8 border-b border-secondary">
                            {[
                                { id: "description", label: "Description" },
                                { id: "additional", label: "Additional Information" },
                                { id: "reviews", label: "Reviews" },
                            ].map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`relative pb-4 text-sm font-medium uppercase tracking-wider transition ${
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

                        {/* Tab Content */}
                        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-2">
                            <div>
                                {activeTab === "description" && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <p className="leading-relaxed text-tertiary">
                                            {product.description}
                                        </p>

                                        <h3 className="mt-8 text-sm font-semibold uppercase tracking-wider text-primary">
                                            Product Features
                                        </h3>
                                        <ul className="mt-4 space-y-3">
                                            {product.features.map((feature, index) => (
                                                <li key={index} className="flex items-start gap-2 text-sm text-tertiary">
                                                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
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
                                    </motion.div>
                                )}

                                {activeTab === "additional" && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <table className="w-full text-sm">
                                            <tbody>
                                                <tr className="border-b border-secondary">
                                                    <td className="py-3 font-medium text-primary">Weight</td>
                                                    <td className="py-3 text-tertiary">0.5 kg</td>
                                                </tr>
                                                <tr className="border-b border-secondary">
                                                    <td className="py-3 font-medium text-primary">Dimensions</td>
                                                    <td className="py-3 text-tertiary">10 × 10 × 15 cm</td>
                                                </tr>
                                                <tr className="border-b border-secondary">
                                                    <td className="py-3 font-medium text-primary">Size</td>
                                                    <td className="py-3 text-tertiary">{product.sizes.join(", ")}</td>
                                                </tr>
                                                <tr className="border-b border-secondary">
                                                    <td className="py-3 font-medium text-primary">Color</td>
                                                    <td className="py-3 text-tertiary">Dirty Pink, Nude, Coral</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </motion.div>
                                )}

                                {activeTab === "reviews" && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <p className="text-tertiary">
                                            {product.reviews} reviews for {product.name}
                                        </p>
                                    </motion.div>
                                )}
                            </div>

                            {/* Image */}
                            <div className="hidden overflow-hidden rounded-2xl lg:block">
                                <img
                                    src="https://wdtmonica.wpengine.com/wp-content/uploads/2026/01/Home1-slider-img-04.jpg"
                                    alt="Beauty"
                                    className="size-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Related Products */}
                <section className="bg-primary px-4 py-16 md:px-8 md:py-24 lg:px-16">
                    <div className="mx-auto max-w-7xl">
                        <div className="mb-12 text-center md:mb-16">
                            <span className="mb-3 inline-block rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-700">
                                Explore Our Range
                            </span>
                            <h2 className="mt-4 text-display-xs font-semibold text-primary md:text-display-sm">
                                Related <span className="text-brand-600">Products</span>
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {allProducts
                                .filter((p) => p.slug !== product.slug)
                                .slice(0, 3)
                                .map((relatedProduct, index) => (
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
                                                    src={relatedProduct.images[1]}
                                                    alt={relatedProduct.name}
                                                    className="absolute inset-0 size-full object-cover opacity-0 transition duration-500 group-hover:opacity-100"
                                                />
                                            </a>

                                            {/* Badges */}
                                            <div className="absolute left-4 top-4 flex flex-col gap-2">
                                                {relatedProduct.badges.map((badge) => (
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
                                                <button
                                                    className="flex size-10 items-center justify-center rounded-full bg-white shadow-md transition duration-100 ease-linear hover:bg-brand-50 hover:text-brand-600"
                                                    aria-label="Add to wishlist"
                                                >
                                                    <Heart className="size-5" />
                                                </button>
                                            </div>

                                            {/* Add to Cart Button */}
                                            <div className="absolute inset-x-4 bottom-4 translate-y-4 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                                                <Button
                                                    href={`/product/${relatedProduct.slug}`}
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
                                                    href={`/product/${relatedProduct.slug}`}
                                                    className="text-sm text-tertiary transition duration-100 ease-linear hover:text-brand-600"
                                                >
                                                    {relatedProduct.category}
                                                </a>
                                                <StarRating rating={relatedProduct.rating} />
                                            </div>

                                            <h3 className="mt-2 text-lg font-semibold text-primary">
                                                <a
                                                    href={`/product/${relatedProduct.slug}`}
                                                    className="transition duration-100 ease-linear hover:text-brand-600"
                                                >
                                                    {relatedProduct.name}
                                                </a>
                                            </h3>

                                            <p className="mt-1 text-md font-medium text-secondary">
                                                ${relatedProduct.price.toFixed(2)} – ${relatedProduct.originalPrice.toFixed(2)}
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
