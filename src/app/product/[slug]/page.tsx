"use client";

import { useState, use, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/base/buttons/button";
import {
    Heart,
    Star01,
    ShoppingBag01,
    Minus,
    Plus,
    Truck01,
    Package,
    Loading01,
    CheckCircle,
    Shield01,
    RefreshCcw01,
    ChevronRight,
    Share07,
    Copy01,
} from "@untitledui/icons";
import { Header } from "@/app/components/header";
import { Footer } from "@/app/components/footer";
import { WishlistButton } from "@/components/base/wishlist-button/wishlist-button";
import { useToastActions } from "@/components/base/toast/toast";
import { getProductBySlug, getProducts, addToCart, getSessionId, type Product } from "@/lib/supabase";

function StarRating({ rating, size = "sm" }: { rating: number; size?: "sm" | "md" }) {
    const sizeClass = size === "md" ? "size-5" : "size-4";
    return (
        <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
                <Star01
                    key={i}
                    className={`${sizeClass} ${
                        i < rating ? "fill-warning-400 text-warning-400" : "text-gray-200"
                    }`}
                />
            ))}
        </div>
    );
}

const features = [
    {
        icon: Truck01,
        title: "Free Shipping",
        description: "On orders over €20",
    },
    {
        icon: Shield01,
        title: "Secure Payment",
        description: "100% secure checkout",
    },
    {
        icon: RefreshCcw01,
        title: "Easy Returns",
        description: "30-day return policy",
    },
];

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
                if (!data) {
                    setProduct(null);
                    setLoading(false);
                    return;
                }

                setProduct(data);
                if (data.sizes && data.sizes.length > 0) setSelectedSize(data.sizes[0]);
                if (data.colors && data.colors.length > 0) setSelectedColor(data.colors[0]);

                const allProducts = await getProducts();
                const otherProducts = allProducts.filter((p) => p.slug !== slug);
                if (otherProducts.length === 0) {
                    setRelatedProducts([data]);
                } else {
                    setRelatedProducts(otherProducts.slice(0, 4));
                }
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

    const handleBuyNow = async () => {
        if (!product) return;
        setAddingToCart(true);
        try {
            const sessionId = getSessionId();
            await addToCart(sessionId, product.id, quantity, selectedSize, selectedColor);
            router.push("/checkout");
        } catch (error) {
            console.error("Error adding to cart:", error);
            toast.error("Failed to proceed", "Please try again.");
        } finally {
            setAddingToCart(false);
        }
    };

    const handleShare = async () => {
        try {
            await navigator.clipboard.writeText(window.location.href);
            toast.success("Link copied!", "Product link copied to clipboard.");
        } catch {
            toast.error("Failed to copy", "Please try again.");
        }
    };

    if (loading) {
        return (
            <div className="overflow-x-hidden">
                <Header />
                <main className="flex min-h-screen items-center justify-center bg-gray-50">
                    <div className="flex flex-col items-center gap-4">
                        <Loading01 className="size-10 animate-spin text-brand-600" />
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
                <main className="flex min-h-screen items-center justify-center bg-gray-50">
                    <div className="text-center">
                        <div className="mx-auto flex size-20 items-center justify-center rounded-full bg-gray-100">
                            <Package className="size-10 text-gray-400" />
                        </div>
                        <h1 className="mt-6 text-2xl font-bold text-primary">Product not found</h1>
                        <p className="mt-2 text-tertiary">The product you're looking for doesn't exist.</p>
                        <Button href="/shop" color="primary" size="lg" className="mt-6">
                            Back to Shop
                        </Button>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

    const freeShippingThreshold = 20;
    const amountToFreeShipping = Math.max(freeShippingThreshold - product.price * quantity, 0);
    const hasFreeShipping = product.price * quantity >= freeShippingThreshold;

    return (
        <div className="overflow-x-hidden">
            <Header />
            <main className="bg-gray-50">
                {/* Breadcrumb */}
                <section className="border-b border-secondary bg-white px-4 py-4 md:px-8 lg:px-16">
                    <div className="mx-auto max-w-7xl">
                        <nav className="flex items-center gap-2 text-sm">
                            <a href="/" className="shrink-0 text-tertiary transition hover:text-brand-600">Home</a>
                            <ChevronRight className="size-4 shrink-0 text-quaternary" />
                            <a href="/shop" className="shrink-0 text-tertiary transition hover:text-brand-600">Shop</a>
                            <ChevronRight className="size-4 shrink-0 text-quaternary" />
                            <span className="truncate font-medium text-primary">{product.name}</span>
                        </nav>
                    </div>
                </section>

                {/* Product Section */}
                <section className="px-4 py-8 md:px-8 md:py-6 lg:px-16">
                    <div className="mx-auto max-w-7xl">
                        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                            {/* Image Gallery */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                {/* Main Image */}
                                <div className="relative aspect-square overflow-hidden rounded-2xl bg-white shadow-sm">
                                    <AnimatePresence mode="wait">
                                        <motion.img
                                            key={selectedImage}
                                            src={product.images?.[selectedImage] ?? ""}
                                            alt={product.name}
                                            className="size-full object-cover"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                        />
                                    </AnimatePresence>

                                    {/* Badges */}
                                    <div className="absolute left-4 top-4 flex flex-col gap-2">
                                        {(product.badges ?? []).map((badge) => (
                                            <span
                                                key={badge}
                                                className={`rounded-full px-3 py-1 text-xs font-semibold ${
                                                    badge === "Sale"
                                                        ? "bg-error-500 text-white"
                                                        : badge === "New"
                                                            ? "bg-brand-600 text-white"
                                                            : "bg-gray-900 text-white"
                                                }`}
                                            >
                                                {badge}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Actions */}
                                    <div className="absolute right-4 top-4 flex flex-col gap-2">
                                        <WishlistButton
                                            productId={product.id}
                                            productName={product.name}
                                            size="md"
                                            className="bg-white shadow-md"
                                        />
                                        <button
                                            onClick={handleShare}
                                            className="flex size-10 items-center justify-center rounded-full bg-white shadow-md transition hover:bg-gray-50"
                                        >
                                            <Share07 className="size-5 text-gray-600" />
                                        </button>
                                    </div>
                                </div>

                                {/* Thumbnails */}
                                <div className="mt-4 flex gap-3 overflow-x-auto pb-2">
                                    {(product.images ?? []).map((image, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setSelectedImage(index)}
                                            className={`relative size-20 shrink-0 overflow-hidden rounded-xl bg-white transition sm:size-24 ${
                                                selectedImage === index
                                                    ? "sm:ring-2 sm:ring-brand-600 sm:ring-offset-2"
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
                            </motion.div>

                            {/* Product Info */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="flex flex-col"
                            >
                                {/* Category & Rating */}
                                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                                    <span className="text-sm font-medium text-brand-600">
                                        {product.category}
                                    </span>
                                    <div className="flex items-center gap-2">
                                        <StarRating rating={product.rating ?? 0} />
                                        <span className="text-sm text-tertiary">
                                            ({product.reviews ?? 0} reviews)
                                        </span>
                                    </div>
                                </div>

                                {/* Title */}
                                <h1 className="mt-3 text-2xl font-bold text-primary md:text-3xl lg:text-4xl">
                                    {product.name}
                                </h1>

                                {/* Stock Status */}
                                <div className="mt-4">
                                    {product.in_stock ? (
                                        <div className="flex items-center gap-2">
                                            <span className="flex size-2 rounded-full bg-success-500" />
                                            <span className="text-sm font-medium text-success-700">In Stock</span>
                                        </div>
                                    ) : (
                                        <div className="flex items-center gap-2">
                                            <span className="flex size-2 rounded-full bg-error-500" />
                                            <span className="text-sm font-medium text-error-700">Out of Stock</span>
                                        </div>
                                    )}
                                </div>

                                {/* Description */}
                                <p className="mt-6 leading-relaxed text-tertiary">
                                    {product.description}
                                </p>


                                {/* Price (when no sizes) */}
                                {(product.sizes ?? []).length === 0 && (
                                    <div className="flex items-center gap-2">
                                        <span className="text-sm font-semibold text-primary">Price:</span>
                                        <span className="text-lg font-bold text-brand-600">
                                            {product.price.toFixed(2)}€
                                        </span>
                                        {product.original_price && product.original_price > product.price && (
                                            <>
                                                <span className="text-sm text-tertiary line-through">
                                                    {product.original_price.toFixed(2)}€
                                                </span>
                                                <span className="rounded-full bg-error-100 px-2 py-0.5 text-xs font-semibold text-error-700">
                                                    -{Math.round((1 - product.price / product.original_price) * 100)}%
                                                </span>
                                            </>
                                        )}
                                    </div>
                                )}

                                {/* Size Selection & Price */}
                                {(product.sizes ?? []).length > 0 && (
                                    <div>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <span className="text-sm font-semibold text-primary">Price:</span>
                                                <span className="text-lg font-bold text-brand-600">
                                                    {product.price.toFixed(2)}€
                                                </span>
                                                {product.original_price && product.original_price > product.price && (
                                                    <>
                                                        <span className="text-sm text-tertiary line-through">
                                                            {product.original_price.toFixed(2)}€
                                                        </span>
                                                        <span className="rounded-full bg-error-100 px-2 py-0.5 text-xs font-semibold text-error-700">
                                                            -{Math.round((1 - product.price / product.original_price) * 100)}%
                                                        </span>
                                                    </>
                                                )}
                                            </div>
                                      
                                        </div>
                                        <div className="mt-3 flex flex-wrap gap-2">
                                            {(product.sizes ?? []).map((size) => (
                                                <button
                                                    key={size}
                                                    onClick={() => setSelectedSize(size)}
                                                    className={`min-w-[3rem] rounded-lg px-4 py-2.5 text-sm font-medium transition ${
                                                        selectedSize === size
                                                            ? "bg-brand-600 text-white"
                                                            : "bg-white text-primary ring-1 ring-inset ring-gray-200 hover:ring-brand-600"
                                                    }`}
                                                >
                                                    {size}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Color Selection */}
                                {(product.colors ?? []).length > 0 && (
                                    <div className="mt-6">
                                        <span className="text-sm font-semibold text-primary">Color</span>
                                        <div className="mt-3 flex items-center gap-3">
                                            {(product.colors ?? []).map((color) => (
                                                <button
                                                    key={color}
                                                    onClick={() => setSelectedColor(color)}
                                                    className={`size-9 rounded-full transition ${
                                                        selectedColor === color
                                                            ? "ring-2 ring-brand-600 ring-offset-2"
                                                            : "ring-1 ring-gray-200 hover:ring-brand-600"
                                                    }`}
                                                    style={{ backgroundColor: color }}
                                                    title={color}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Quantity & Action Buttons */}
                                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                                    <div className="flex items-center justify-center overflow-hidden rounded-lg bg-white ring-1 ring-gray-200 sm:justify-start">
                                        <button
                                            onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                            className="flex size-11 items-center justify-center text-gray-500 transition hover:bg-gray-50 hover:text-primary"
                                        >
                                            <Minus className="size-4" />
                                        </button>
                                        <span className="w-10 text-center text-sm font-semibold text-primary">
                                            {quantity}
                                        </span>
                                        <button
                                            onClick={() => setQuantity(quantity + 1)}
                                            className="flex size-11 items-center justify-center text-gray-500 transition hover:bg-gray-50 hover:text-primary"
                                        >
                                            <Plus className="size-4" />
                                        </button>
                                    </div>
                                    <div className="flex flex-1 gap-3">
                                        <Button
                                            color="primary"
                                            size="lg"
                                            iconLeading={ShoppingBag01}
                                            onClick={handleAddToCart}
                                            isLoading={addingToCart}
                                            className="flex-1"
                                        >
                                            Add to Cart - {(product.price * quantity).toFixed(2)}€
                                        </Button>
                                        <Button
                                            color="secondary"
                                            size="lg"
                                            onClick={handleBuyNow}
                                            className="shrink-0"
                                        >
                                            Buy Now
                                        </Button>
                                    </div>
                                </div>

                                {/* Shipping Info */}
                                <div className={`mt-6 rounded-xl p-3 sm:p-4 ${
                                    hasFreeShipping
                                        ? "bg-success-50 ring-1 ring-success-200"
                                        : "bg-brand-50 ring-1 ring-brand-200"
                                }`}>
                                    <div className="flex items-start gap-3 sm:items-center">
                                        <div className={`flex size-9 shrink-0 items-center justify-center rounded-full sm:size-10 ${
                                            hasFreeShipping ? "bg-success-100" : "bg-brand-100"
                                        }`}>
                                            <Truck01 className={`size-4 sm:size-5 ${
                                                hasFreeShipping ? "text-success-600" : "text-brand-600"
                                            }`} />
                                        </div>
                                        <div>
                                            {hasFreeShipping ? (
                                                <>
                                                    <p className="text-sm font-semibold text-success-700 sm:text-base">Free Shipping</p>
                                                    <p className="text-xs text-success-600 sm:text-sm">Your order qualifies for free delivery!</p>
                                                </>
                                            ) : (
                                                <>
                                                    <p className="text-sm font-semibold text-brand-700 sm:text-base">
                                                        Add {amountToFreeShipping.toFixed(2)}€ for free shipping
                                                    </p>
                                                    <p className="text-xs text-brand-600 sm:text-sm">Free shipping on orders over €20</p>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Features */}
                                <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
                                    {features.map((feature) => (
                                        <div key={feature.title} className="flex items-center gap-3 rounded-xl bg-white p-3 ring-1 ring-gray-100 sm:flex-col sm:p-4 sm:text-center">
                                            <feature.icon className="size-5 shrink-0 text-brand-600 sm:size-6" />
                                            <div className="sm:mt-2">
                                                <p className="text-sm font-semibold text-primary sm:text-xs">{feature.title}</p>
                                                <p className="text-xs text-tertiary sm:mt-0.5">{feature.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Tabs Section */}
                <section className="border-t border-secondary bg-white px-4 py-12 md:px-8 md:py-16 lg:px-16">
                    <div className="mx-auto max-w-7xl">
                        {/* Tab Headers */}
                        <div className="flex gap-1 rounded-xl bg-gray-100 p-1">
                            {[
                                { id: "description", label: "Description" },
                                { id: "additional", label: "Details" },
                                { id: "reviews", label: `Reviews (${product.reviews ?? 0})` },
                            ].map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`flex-1 rounded-lg px-4 py-3 text-sm font-medium transition ${
                                        activeTab === tab.id
                                            ? "bg-white text-primary shadow-sm"
                                            : "text-tertiary hover:text-primary"
                                    }`}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>

                        {/* Tab Content */}
                        <div className="mt-8">
                            <AnimatePresence mode="wait">
                                {activeTab === "description" && (
                                    <motion.div
                                        key="description"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.2 }}
                                        className="grid grid-cols-1 gap-10 lg:grid-cols-2"
                                    >
                                        <div>
                                            <p className="leading-relaxed text-tertiary">
                                                {product.description}
                                            </p>

                                            {(product.features ?? []).length > 0 && (
                                                <>
                                                    <h3 className="mt-8 text-lg font-semibold text-primary">
                                                        Key Features
                                                    </h3>
                                                    <ul className="mt-4 space-y-3">
                                                        {(product.features ?? []).map((feature, index) => (
                                                            <li key={index} className="flex items-start gap-3">
                                                                <CheckCircle className="mt-0.5 size-5 shrink-0 text-success-500" />
                                                                <span className="text-tertiary">{feature}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </>
                                            )}

                                            {product.benefits && (
                                                <>
                                                    <h3 className="mt-8 text-lg font-semibold text-primary">
                                                        Benefits
                                                    </h3>
                                                    <p className="mt-4 leading-relaxed text-tertiary">
                                                        {product.benefits}
                                                    </p>
                                                </>
                                            )}

                                            {product.additional_info?.usage && (
                                                <>
                                                    <h3 className="mt-8 text-lg font-semibold text-primary">
                                                        How To Use
                                                    </h3>
                                                    <p className="mt-4 leading-relaxed text-tertiary">
                                                        {product.additional_info.usage}
                                                    </p>
                                                </>
                                            )}
                                        </div>

                                        <div className="hidden overflow-hidden rounded-2xl lg:block">
                                            <img
                                                src={product.images?.[1] ?? product.images?.[0] ?? ""}
                                                alt={product.name}
                                                className="size-full object-cover"
                                            />
                                        </div>
                                    </motion.div>
                                )}

                                {activeTab === "additional" && (
                                    <motion.div
                                        key="additional"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <div className="overflow-hidden rounded-xl bg-gray-50">
                                            <table className="w-full">
                                                <tbody className="divide-y divide-gray-200">
                                                    {product.additional_info?.size && (
                                                        <tr>
                                                            <td className="w-1/3 px-6 py-4 font-medium text-primary">Size</td>
                                                            <td className="px-6 py-4 text-tertiary">{product.additional_info.size}</td>
                                                        </tr>
                                                    )}
                                                    {product.additional_info?.type && (
                                                        <tr>
                                                            <td className="px-6 py-4 font-medium text-primary">Type</td>
                                                            <td className="px-6 py-4 text-tertiary">{product.additional_info.type}</td>
                                                        </tr>
                                                    )}
                                                    {product.additional_info?.key_ingredient && (
                                                        <tr>
                                                            <td className="px-6 py-4 font-medium text-primary">Key Ingredient</td>
                                                            <td className="px-6 py-4 text-tertiary">{product.additional_info.key_ingredient}</td>
                                                        </tr>
                                                    )}
                                                    {product.additional_info?.formulation && (
                                                        <tr>
                                                            <td className="px-6 py-4 font-medium text-primary">Formulation</td>
                                                            <td className="px-6 py-4 text-tertiary">{product.additional_info.formulation}</td>
                                                        </tr>
                                                    )}
                                                    {product.additional_info?.texture && (
                                                        <tr>
                                                            <td className="px-6 py-4 font-medium text-primary">Texture</td>
                                                            <td className="px-6 py-4 text-tertiary">{product.additional_info.texture}</td>
                                                        </tr>
                                                    )}
                                                    {product.additional_info?.flavor && (
                                                        <tr>
                                                            <td className="px-6 py-4 font-medium text-primary">Flavor</td>
                                                            <td className="px-6 py-4 text-tertiary">{product.additional_info.flavor}</td>
                                                        </tr>
                                                    )}
                                                    {product.additional_info?.skin_type && (
                                                        <tr>
                                                            <td className="px-6 py-4 font-medium text-primary">Suitable For</td>
                                                            <td className="px-6 py-4 text-tertiary">{product.additional_info.skin_type}</td>
                                                        </tr>
                                                    )}
                                                    {product.additional_info?.shelf_life && (
                                                        <tr>
                                                            <td className="px-6 py-4 font-medium text-primary">Shelf Life</td>
                                                            <td className="px-6 py-4 text-tertiary">{product.additional_info.shelf_life}</td>
                                                        </tr>
                                                    )}
                                                    {product.additional_info?.packaging && (
                                                        <tr>
                                                            <td className="px-6 py-4 font-medium text-primary">Packaging</td>
                                                            <td className="px-6 py-4 text-tertiary">{product.additional_info.packaging}</td>
                                                        </tr>
                                                    )}
                                                    {product.additional_info?.storage && (
                                                        <tr>
                                                            <td className="px-6 py-4 font-medium text-primary">Storage</td>
                                                            <td className="px-6 py-4 text-tertiary">{product.additional_info.storage}</td>
                                                        </tr>
                                                    )}
                                                </tbody>
                                            </table>
                                        </div>
                                    </motion.div>
                                )}

                                {activeTab === "reviews" && (
                                    <motion.div
                                        key="reviews"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        {/* Reviews Header */}
                                        <div className="mb-8 flex flex-col gap-6 rounded-xl bg-gray-50 p-6 md:flex-row md:items-center md:justify-between">
                                            <div>
                                                <div className="flex items-center gap-3">
                                                    <span className="text-4xl font-bold text-primary">{product.rating ?? 0}</span>
                                                    <div>
                                                        <StarRating rating={product.rating ?? 0} size="md" />
                                                        <p className="mt-1 text-sm text-tertiary">
                                                            Based on {product.reviews ?? 0} reviews
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <Button color="primary" size="md">
                                                Write a Review
                                            </Button>
                                        </div>

                                        {/* Reviews List */}
                                        <div className="space-y-6">
                                            {(product.customer_reviews ?? []).map((review, index) => (
                                                <motion.div
                                                    key={index}
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ duration: 0.3, delay: index * 0.1 }}
                                                    className="rounded-xl border border-gray-100 bg-white p-6"
                                                >
                                                    <div className="flex items-start gap-4">
                                                        <img
                                                            src={review.avatar}
                                                            alt={review.name}
                                                            className="size-12 shrink-0 rounded-full object-cover"
                                                        />
                                                        <div className="flex-1">
                                                            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                                                                <div>
                                                                    <div className="flex items-center gap-2">
                                                                        <span className="font-semibold text-primary">
                                                                            {review.name}
                                                                        </span>
                                                                        {review.verified && (
                                                                            <span className="flex items-center gap-1 rounded-full bg-success-100 px-2 py-0.5 text-xs font-medium text-success-700">
                                                                                <CheckCircle className="size-3" />
                                                                                Verified
                                                                            </span>
                                                                        )}
                                                                    </div>
                                                                    <span className="text-xs text-tertiary">
                                                                        {review.date}
                                                                    </span>
                                                                </div>
                                                                <StarRating rating={review.rating} />
                                                            </div>

                                                            <h4 className="mt-3 font-medium text-primary">
                                                                {review.title}
                                                            </h4>
                                                            <p className="mt-2 leading-relaxed text-tertiary">
                                                                {review.comment}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </div>

                                        {(product.customer_reviews ?? []).length > 0 && (
                                            <div className="mt-8 text-center">
                                                <Button color="secondary" size="md">
                                                    Load More Reviews
                                                </Button>
                                            </div>
                                        )}

                                        {(product.customer_reviews ?? []).length === 0 && (
                                            <div className="rounded-xl bg-gray-50 py-12 text-center">
                                                <p className="text-tertiary">No reviews yet. Be the first to review this product!</p>
                                            </div>
                                        )}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </section>

                {/* Related Products */}
                <section className="border-t border-secondary bg-white px-4 py-12 sm:py-16 md:px-8 lg:px-16">
                    <div className="mx-auto max-w-7xl">
                        <div className="mb-8 flex items-center justify-between sm:mb-12">
                            <div>
                                <h2 className="text-2xl font-bold text-primary md:text-3xl">
                                    You May Also Like
                                </h2>
                                <p className="mt-2 text-tertiary">
                                    Discover more products from our collection
                                </p>
                            </div>
                            <Button href="/shop" color="tertiary" size="md">
                                View All
                            </Button>
                        </div>

                        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
                            {relatedProducts.map((relatedProduct, index) => (
                                <motion.div
                                    key={`${relatedProduct.slug}-${index}`}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="group"
                                >
                                    <div className="relative aspect-square overflow-hidden rounded-2xl bg-gray-100">
                                        <a href={`/product/${relatedProduct.slug}`} className="block size-full">
                                            <img
                                                src={relatedProduct.images?.[0] ?? ""}
                                                alt={relatedProduct.name}
                                                className="absolute inset-0 size-full object-cover transition duration-500 group-hover:scale-105"
                                            />
                                        </a>

                                        {(relatedProduct.badges ?? []).length > 0 && (
                                            <div className="absolute left-3 top-3">
                                                <span className={`rounded-full px-2 py-1 text-xs font-semibold ${
                                                    relatedProduct.badges?.[0] === "Sale"
                                                        ? "bg-error-500 text-white"
                                                        : "bg-brand-600 text-white"
                                                }`}>
                                                    {relatedProduct.badges?.[0]}
                                                </span>
                                            </div>
                                        )}

                                        <div className="absolute right-3 top-3 opacity-0 transition group-hover:opacity-100">
                                            <button className="flex size-9 items-center justify-center rounded-full bg-white shadow-md transition hover:bg-gray-50">
                                                <Heart className="size-4" />
                                            </button>
                                        </div>

                                        <div className="absolute inset-x-3 bottom-3 translate-y-4 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                                            <Button
                                                href={`/product/${relatedProduct.slug}`}
                                                color="primary"
                                                size="sm"
                                                className="w-full justify-center"
                                            >
                                                View Product
                                            </Button>
                                        </div>
                                    </div>

                                    <div className="mt-4">
                                        <a
                                            href={`/product/${relatedProduct.slug}`}
                                            className="text-xs text-tertiary transition hover:text-brand-600"
                                        >
                                            {relatedProduct.category}
                                        </a>

                                        <h3 className="mt-1 font-semibold text-primary">
                                            <a
                                                href={`/product/${relatedProduct.slug}`}
                                                className="line-clamp-1 transition hover:text-brand-600"
                                            >
                                                {relatedProduct.name}
                                            </a>
                                        </h3>

                                        <div className="mt-2 flex items-center justify-between">
                                            <span className="font-semibold text-primary">
                                                {relatedProduct.price.toFixed(2)}€
                                            </span>
                                            <StarRating rating={relatedProduct.rating ?? 0} />
                                        </div>
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
