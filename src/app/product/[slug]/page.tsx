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
import { RatingBadge } from "@/components/foundations/rating-badge";

// Mock product data - Teeth Whitening Products
const allProducts = [
    {
        slug: "whitening-kit-pro",
        name: "Whitening Kit Pro",
        category: "Whitening Kits",
        price: 89.00,
        originalPrice: 119.00,
        rating: 5,
        reviews: 256,
        inStock: true,
        description: "Our professional-grade teeth whitening kit delivers up to 7 shades whiter teeth in just one week. This comprehensive kit includes everything you need for salon-quality results at home. The gentle yet effective formula is designed by dental professionals to minimize sensitivity while maximizing whitening power.",
        images: [
            "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=800",
            "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800",
            "https://images.unsplash.com/photo-1445527815219-ecbfec67492e?w=800",
            "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=800",
        ],
        badges: ["Best Seller"],
        sizes: ["7-Day Kit", "14-Day Kit"],
        colors: ["#FFFFFF", "#E0F7FA", "#B2EBF2"],
        features: [
            "Professional-grade whitening gel with 16% carbamide peroxide for effective results.",
            "LED accelerator light to enhance whitening process and reduce treatment time.",
            "Custom-fit mouth trays that mold to your teeth for even gel distribution.",
            "Enamel-safe formula developed with dental professionals.",
        ],
        benefits: "Achieve a brilliant, confident smile with our Whitening Kit Pro. The advanced formula penetrates deep into enamel to lift stubborn stains from coffee, tea, wine, and smoking while protecting tooth sensitivity. Results are visible after just one treatment.",
        additionalInfo: {
            weight: "250g",
            dimensions: "15 × 10 × 5 cm",
            ingredients: "Carbamide Peroxide 16%, Glycerin, Potassium Nitrate, Sodium Fluoride, Aloe Vera Extract",
            shelfLife: "24 months",
            madeIn: "Switzerland",
            skinType: "Suitable for sensitive teeth",
            usage: "Apply gel to trays, wear for 20-30 minutes daily. Use LED light for first 10 minutes. Rinse after treatment.",
        },
        customerReviews: [
            { name: "Sophie M.", rating: 5, date: "March 12, 2026", title: "Amazing results!", comment: "I've tried many whitening products but this one actually works! My teeth are noticeably whiter after just 5 days. No sensitivity at all.", avatar: "https://randomuser.me/api/portraits/women/1.jpg", verified: true },
            { name: "Marc D.", rating: 5, date: "March 8, 2026", title: "Professional quality", comment: "Better results than my dentist's treatment and at a fraction of the cost. Highly recommend!", avatar: "https://randomuser.me/api/portraits/men/2.jpg", verified: true },
            { name: "Julie L.", rating: 4, date: "February 28, 2026", title: "Great for coffee stains", comment: "Finally got rid of my coffee stains. The kit is easy to use and the results speak for themselves.", avatar: "https://randomuser.me/api/portraits/women/3.jpg", verified: true },
        ],
    },
    {
        slug: "whitening-strips",
        name: "Whitening Strips",
        category: "Whitening Strips",
        price: 45.00,
        originalPrice: 55.00,
        rating: 5,
        reviews: 189,
        inStock: true,
        description: "Premium dissolving whitening strips that work in just 15 minutes. These innovative strips dissolve completely, leaving no residue while delivering powerful whitening ingredients directly to your teeth. Perfect for on-the-go whitening.",
        images: [
            "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800",
            "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=800",
            "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=800",
            "https://images.unsplash.com/photo-1445527815219-ecbfec67492e?w=800",
        ],
        badges: ["Sale", "Popular"],
        sizes: ["14 Strips", "28 Strips"],
        colors: ["#FFFFFF", "#E3F2FD", "#BBDEFB"],
        features: [
            "Dissolving technology - no need to remove strips.",
            "15-minute treatment fits any schedule.",
            "Enamel-safe and dentist approved.",
            "Fresh mint flavor for pleasant experience.",
        ],
        benefits: "Experience convenient whitening with our dissolving strips. They adhere firmly to teeth, deliver active ingredients, and dissolve completely - perfect for busy lifestyles.",
        additionalInfo: {
            weight: "50g",
            dimensions: "10 × 5 × 2 cm",
            ingredients: "Hydrogen Peroxide 6%, PVP, Glycerin, Menthol, Xylitol",
            shelfLife: "18 months",
            madeIn: "Switzerland",
            skinType: "Gentle for daily use",
            usage: "Apply strip to teeth, press firmly. Leave for 15 minutes until dissolved. Use once daily.",
        },
        customerReviews: [
            { name: "Emma R.", rating: 5, date: "March 15, 2026", title: "So convenient!", comment: "Love that they dissolve! I use them during my commute. Great results after 2 weeks.", avatar: "https://randomuser.me/api/portraits/women/4.jpg", verified: true },
            { name: "Thomas B.", rating: 5, date: "March 10, 2026", title: "Best strips I've tried", comment: "No slipping, no mess. These actually stay in place and work. My smile has never looked better.", avatar: "https://randomuser.me/api/portraits/men/5.jpg", verified: true },
            { name: "Claire P.", rating: 4, date: "March 1, 2026", title: "Quick and effective", comment: "Perfect for my busy schedule. Noticeable whitening in just one week.", avatar: "https://randomuser.me/api/portraits/women/6.jpg", verified: true },
        ],
    },
    {
        slug: "whitening-pen",
        name: "Whitening Pen",
        category: "Touch-Up",
        price: 29.00,
        originalPrice: 39.00,
        rating: 4,
        reviews: 145,
        inStock: true,
        description: "Precision whitening pen for targeted touch-ups and on-the-go whitening. The compact design fits in your purse or pocket, making it perfect for quick touch-ups after coffee or meals. The brush tip allows precise application exactly where you need it.",
        images: [
            "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=800",
            "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=800",
            "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800",
            "https://images.unsplash.com/photo-1445527815219-ecbfec67492e?w=800",
        ],
        badges: ["Hot Deal"],
        sizes: ["2ml", "4ml"],
        colors: ["#FFFFFF", "#F5F5F5", "#EEEEEE"],
        features: [
            "Precision brush tip for targeted application.",
            "Portable design fits anywhere.",
            "Quick-dry formula - no rinsing required.",
            "Over 30 applications per pen.",
        ],
        benefits: "Maintain your bright smile anywhere with our portable whitening pen. Perfect for touch-ups after coffee, tea, or wine. The no-rinse formula means you can use it anytime.",
        additionalInfo: {
            weight: "15g",
            dimensions: "12 × 1.5 × 1.5 cm",
            ingredients: "Hydrogen Peroxide 3%, Glycerin, Carbomer, Menthol, Sodium Saccharin",
            shelfLife: "12 months",
            madeIn: "Switzerland",
            skinType: "Safe for daily use",
            usage: "Twist bottom to dispense gel. Apply thin layer to teeth. Avoid eating or drinking for 30 minutes.",
        },
        customerReviews: [
            { name: "Lisa H.", rating: 5, date: "March 14, 2026", title: "Perfect for touch-ups!", comment: "I keep one in my purse for after coffee. It's so easy to use and really works!", avatar: "https://randomuser.me/api/portraits/women/7.jpg", verified: true },
            { name: "Antoine M.", rating: 4, date: "March 5, 2026", title: "Great travel companion", comment: "Love the portability. Results are gradual but definitely noticeable over time.", avatar: "https://randomuser.me/api/portraits/men/8.jpg", verified: true },
            { name: "Marie S.", rating: 4, date: "February 25, 2026", title: "Easy to use", comment: "Simple and effective. Great for maintaining results between treatments.", avatar: "https://randomuser.me/api/portraits/women/9.jpg", verified: true },
        ],
    },
    {
        slug: "whitening-toothpaste",
        name: "Whitening Toothpaste",
        category: "Daily Care",
        price: 18.00,
        originalPrice: 24.00,
        rating: 4,
        reviews: 312,
        inStock: true,
        description: "Daily whitening toothpaste with active charcoal and baking soda for gentle everyday whitening. This fluoride-enriched formula cleans, whitens, and protects your teeth with every brush while freshening breath.",
        images: [
            "https://images.unsplash.com/photo-1445527815219-ecbfec67492e?w=800",
            "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=800",
            "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=800",
            "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800",
        ],
        badges: ["Sale", "Best Seller"],
        sizes: ["75ml", "150ml"],
        colors: ["#FFFFFF", "#E8F5E9", "#C8E6C9"],
        features: [
            "Activated charcoal for natural stain removal.",
            "Fluoride protection against cavities.",
            "Fresh mint flavor for lasting freshness.",
            "Gentle enough for daily use.",
        ],
        benefits: "Maintain your white smile daily with our gentle whitening toothpaste. The activated charcoal formula lifts surface stains while fluoride strengthens enamel.",
        additionalInfo: {
            weight: "75ml / 150ml",
            dimensions: "18 × 4 × 4 cm",
            ingredients: "Sodium Fluoride, Activated Charcoal, Sodium Bicarbonate, Silica, Menthol, Xylitol",
            shelfLife: "24 months",
            madeIn: "Switzerland",
            skinType: "All teeth types",
            usage: "Brush twice daily for 2 minutes. Rinse thoroughly. For best results, use with our whitening kit.",
        },
        customerReviews: [
            { name: "Olivia J.", rating: 5, date: "March 13, 2026", title: "Great daily whitener!", comment: "I've been using this for 3 months and my teeth have stayed white after my whitening treatment. Love it!", avatar: "https://randomuser.me/api/portraits/women/10.jpg", verified: true },
            { name: "Pierre L.", rating: 4, date: "March 7, 2026", title: "Fresh and effective", comment: "Great taste and my teeth feel super clean. Noticed gradual whitening over time.", avatar: "https://randomuser.me/api/portraits/men/11.jpg", verified: true },
            { name: "Camille F.", rating: 4, date: "February 20, 2026", title: "Perfect maintenance", comment: "Using this to maintain my whitening results. Works great and tastes good too.", avatar: "https://randomuser.me/api/portraits/women/12.jpg", verified: true },
        ],
    },
    {
        slug: "sensitivity-gel",
        name: "Sensitivity Relief Gel",
        category: "Sensitivity Care",
        price: 25.00,
        originalPrice: 32.00,
        rating: 5,
        reviews: 178,
        inStock: true,
        description: "Specially formulated gel to prevent and relieve tooth sensitivity during and after whitening treatments. Apply before whitening for protection or after for soothing relief. Contains potassium nitrate and fluoride for maximum comfort.",
        images: [
            "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800",
            "https://images.unsplash.com/photo-1445527815219-ecbfec67492e?w=800",
            "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=800",
            "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=800",
        ],
        badges: ["Essential"],
        sizes: ["30ml", "60ml"],
        colors: ["#E3F2FD", "#BBDEFB", "#90CAF9"],
        features: [
            "Fast-acting sensitivity relief.",
            "Can be used before or after whitening.",
            "Strengthens and remineralizes enamel.",
            "Dentist recommended formula.",
        ],
        benefits: "Enjoy whitening without the discomfort. Our sensitivity gel creates a protective barrier and desensitizes nerves for comfortable whitening treatments.",
        additionalInfo: {
            weight: "30ml / 60ml",
            dimensions: "10 × 3 × 3 cm",
            ingredients: "Potassium Nitrate 5%, Sodium Fluoride, Glycerin, Calcium Phosphate, Aloe Vera",
            shelfLife: "18 months",
            madeIn: "Switzerland",
            skinType: "For sensitive teeth",
            usage: "Apply to trays and wear for 15-30 minutes before or after whitening treatment.",
        },
        customerReviews: [
            { name: "Anne M.", rating: 5, date: "March 11, 2026", title: "Game changer!", comment: "I always had sensitivity issues with whitening. This gel completely solved it. I can now whiten without any pain!", avatar: "https://randomuser.me/api/portraits/women/13.jpg", verified: true },
            { name: "Jean-Paul R.", rating: 5, date: "March 3, 2026", title: "Essential product", comment: "Use this with every whitening session. No more sensitivity at all. Highly recommend.", avatar: "https://randomuser.me/api/portraits/men/14.jpg", verified: true },
            { name: "Isabelle D.", rating: 5, date: "February 18, 2026", title: "Finally can whiten!", comment: "My sensitive teeth prevented me from whitening before. This gel changed everything!", avatar: "https://randomuser.me/api/portraits/women/15.jpg", verified: true },
        ],
    },
    {
        slug: "led-accelerator",
        name: "LED Accelerator Light",
        category: "Accessories",
        price: 49.00,
        originalPrice: 65.00,
        rating: 4,
        reviews: 98,
        inStock: true,
        description: "Professional LED light to accelerate your whitening results. This rechargeable device uses blue LED technology to activate whitening gel and speed up the whitening process by up to 50%. Compatible with all our whitening gels.",
        images: [
            "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=800",
            "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800",
            "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=800",
            "https://images.unsplash.com/photo-1445527815219-ecbfec67492e?w=800",
        ],
        badges: ["Hot Deal"],
        sizes: ["Standard"],
        colors: ["#FFFFFF", "#2196F3", "#1976D2"],
        features: [
            "Blue LED technology for faster results.",
            "USB rechargeable - up to 20 sessions per charge.",
            "Auto timer with 10-minute intervals.",
            "Comfortable silicone mouthpiece.",
        ],
        benefits: "Boost your whitening results with professional LED technology. The blue light activates the whitening gel to penetrate deeper and work faster.",
        additionalInfo: {
            weight: "85g",
            dimensions: "8 × 6 × 4 cm",
            ingredients: "N/A - Electronic device",
            shelfLife: "2 year warranty",
            madeIn: "Switzerland",
            skinType: "Universal fit",
            usage: "Charge fully before first use. Apply whitening gel, insert mouthpiece, turn on light for 10 minutes.",
        },
        customerReviews: [
            { name: "Christina L.", rating: 5, date: "March 9, 2026", title: "Speeds up whitening!", comment: "Noticed faster results when using this with my whitening kit. Great investment!", avatar: "https://randomuser.me/api/portraits/women/16.jpg", verified: true },
            { name: "Nicolas G.", rating: 4, date: "March 2, 2026", title: "Good quality device", comment: "Well made and easy to use. Battery lasts long. Results are definitely faster.", avatar: "https://randomuser.me/api/portraits/men/17.jpg", verified: true },
            { name: "Sandrine V.", rating: 4, date: "February 22, 2026", title: "Professional results", comment: "Like having a mini dental treatment at home. Love the timer feature.", avatar: "https://randomuser.me/api/portraits/women/18.jpg", verified: true },
        ],
    },
    {
        slug: "maintenance-kit",
        name: "Maintenance Kit",
        category: "Whitening Kits",
        price: 55.00,
        originalPrice: 69.00,
        rating: 4,
        reviews: 134,
        inStock: true,
        description: "Monthly maintenance kit to preserve your whitening results. Includes gentle whitening gel, sensitivity protection, and whitening toothpaste - everything you need to maintain your bright smile between treatments.",
        images: [
            "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=800",
            "https://images.unsplash.com/photo-1445527815219-ecbfec67492e?w=800",
            "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=800",
            "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800",
        ],
        badges: ["Value Pack"],
        sizes: ["1 Month", "3 Month"],
        colors: ["#FFFFFF", "#F3E5F5", "#E1BEE7"],
        features: [
            "Complete maintenance solution.",
            "Gentle formula for regular use.",
            "Includes sensitivity protection.",
            "Cost-effective bundle.",
        ],
        benefits: "Keep your smile bright long after your initial whitening treatment. This maintenance kit provides everything needed for weekly touch-ups.",
        additionalInfo: {
            weight: "200g",
            dimensions: "12 × 8 × 5 cm",
            ingredients: "Carbamide Peroxide 10%, Potassium Nitrate, Sodium Fluoride, Glycerin",
            shelfLife: "18 months",
            madeIn: "Switzerland",
            skinType: "For maintenance use",
            usage: "Use whitening gel once weekly. Use toothpaste daily. Apply sensitivity gel as needed.",
        },
        customerReviews: [
            { name: "Nathalie N.", rating: 5, date: "March 6, 2026", title: "Perfect for upkeep", comment: "Been using this monthly and my teeth have stayed white for 6 months now. Great value!", avatar: "https://randomuser.me/api/portraits/women/19.jpg", verified: true },
            { name: "François E.", rating: 4, date: "February 27, 2026", title: "Good maintenance option", comment: "Keeps my smile bright between professional treatments. Easy to use.", avatar: "https://randomuser.me/api/portraits/men/20.jpg", verified: true },
            { name: "Diane V.", rating: 4, date: "February 15, 2026", title: "All-in-one solution", comment: "Love having everything I need in one kit. The 3-month option is great value.", avatar: "https://randomuser.me/api/portraits/women/21.jpg", verified: true },
        ],
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
                                    <button className="flex min-w-0 flex-1 items-center justify-center gap-2 bg-gray-900 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-white transition hover:bg-gray-800 sm:py-3 sm:text-sm">
                                        Add to Cart
                                    </button>

                                    {/* Wishlist Button */}
                                    <button
                                        onClick={() => setIsWishlisted(!isWishlisted)}
                                        className={`flex size-10 shrink-0 items-center justify-center border transition sm:size-11 ${
                                            isWishlisted
                                                ? "border-brand-600 bg-brand-50 text-brand-600"
                                                : "border-gray-300 text-gray-500 hover:border-gray-900 hover:text-gray-900"
                                        }`}
                                    >
                                        <Heart className={`size-5 ${isWishlisted ? "fill-brand-600" : ""}`} />
                                    </button>
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
                                            {product.additionalInfo.usage}
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
                                                    <td className="py-4 text-tertiary">{product.additionalInfo.weight}</td>
                                                </tr>
                                                <tr className="border-b border-secondary">
                                                    <td className="py-4 font-medium text-primary">Dimensions</td>
                                                    <td className="py-4 text-tertiary">{product.additionalInfo.dimensions}</td>
                                                </tr>
                                                <tr className="border-b border-secondary">
                                                    <td className="py-4 font-medium text-primary">Size Options</td>
                                                    <td className="py-4 text-tertiary">{product.sizes.join(", ")}</td>
                                                </tr>
                                                <tr className="border-b border-secondary">
                                                    <td className="py-4 font-medium text-primary">Skin Type</td>
                                                    <td className="py-4 text-tertiary">{product.additionalInfo.skinType}</td>
                                                </tr>
                                                <tr className="border-b border-secondary">
                                                    <td className="py-4 font-medium text-primary">Shelf Life</td>
                                                    <td className="py-4 text-tertiary">{product.additionalInfo.shelfLife}</td>
                                                </tr>
                                                <tr className="border-b border-secondary">
                                                    <td className="py-4 font-medium text-primary">Made In</td>
                                                    <td className="py-4 text-tertiary">{product.additionalInfo.madeIn}</td>
                                                </tr>
                                            </tbody>
                                        </table>

                                        <h3 className="mb-4 mt-8 text-sm font-semibold uppercase tracking-wider text-primary">
                                            Ingredients
                                        </h3>
                                        <p className="text-sm leading-relaxed text-tertiary">
                                            {product.additionalInfo.ingredients}
                                        </p>

                                        <h3 className="mb-4 mt-8 text-sm font-semibold uppercase tracking-wider text-primary">
                                            How To Use
                                        </h3>
                                        <p className="text-sm leading-relaxed text-tertiary">
                                            {product.additionalInfo.usage}
                                        </p>
                                    </div>

                                    {/* Image */}
                                    <div className="hidden overflow-hidden rounded-2xl lg:block">
                                        <img
                                            src={product.images[1]}
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
                                        {product.customerReviews.map((review, index) => (
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
                            {allProducts
                                .filter((p) => p.slug !== product.slug)
                                .slice(0, 4)
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
