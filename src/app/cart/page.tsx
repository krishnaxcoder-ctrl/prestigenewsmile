"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/base/buttons/button";
import {
    Minus,
    Plus,
    X,
    Trash01,
    ShoppingBag01,
    Truck01,
    Shield01,
    RefreshCcw01,
    Loading01,
    CheckCircle,
    Tag01,
    ArrowRight,
    Clock,
    Package,
} from "@untitledui/icons";
import { Header } from "@/app/components/header";
import { Footer } from "@/app/components/footer";
import {
    getCartItems,
    updateCartItemQuantity,
    removeFromCart,
    clearCart,
    getSessionId,
    type Product,
} from "@/lib/supabase";

interface CartItemWithProduct {
    id: string;
    product_id: string;
    quantity: number;
    size: string | null;
    color: string | null;
    session_id: string | null;
    product: Product;
}

const features = [
    {
        icon: Truck01,
        title: "Fast Shipping",
        description: "2-4 business days with tracking",
        color: "text-brand-600",
        bg: "bg-brand-50",
    },
    {
        icon: Shield01,
        title: "Secure Payment",
        description: "Twint, Revolut & Cash",
        color: "text-success-600",
        bg: "bg-success-50",
    },
    {
        icon: RefreshCcw01,
        title: "Easy Returns",
        description: "30-day return policy",
        color: "text-warning-600",
        bg: "bg-warning-50",
    },
];

export default function CartPage() {
    const [cartItems, setCartItems] = useState<CartItemWithProduct[]>([]);
    const [loading, setLoading] = useState(true);
    const [couponCode, setCouponCode] = useState("");
    const [couponApplied, setCouponApplied] = useState(false);
    const [updating, setUpdating] = useState<string | null>(null);
    const [removingItem, setRemovingItem] = useState<string | null>(null);

    useEffect(() => {
        async function fetchCartItems() {
            try {
                const sessionId = getSessionId();
                if (!sessionId) {
                    setLoading(false);
                    return;
                }
                const data = await getCartItems(sessionId);
                setCartItems(data as unknown as CartItemWithProduct[]);
            } catch (error) {
                console.error("Error fetching cart:", error);
            } finally {
                setLoading(false);
            }
        }
        fetchCartItems();
    }, []);

    const updateQuantity = async (id: string, delta: number) => {
        const item = cartItems.find((i) => i.id === id);
        if (!item) return;

        const newQuantity = Math.max(1, item.quantity + delta);
        setUpdating(id);

        try {
            await updateCartItemQuantity(id, newQuantity);
            setCartItems((items) =>
                items.map((item) =>
                    item.id === id ? { ...item, quantity: newQuantity } : item
                )
            );
        } catch (error) {
            console.error("Error updating quantity:", error);
        } finally {
            setUpdating(null);
        }
    };

    const removeItem = async (id: string) => {
        setRemovingItem(id);
        try {
            await removeFromCart(id);
            setTimeout(() => {
                setCartItems((items) => items.filter((item) => item.id !== id));
                setRemovingItem(null);
            }, 300);
        } catch (error) {
            console.error("Error removing item:", error);
            setRemovingItem(null);
        }
    };

    const handleClearCart = async () => {
        const sessionId = getSessionId();
        if (!sessionId) return;

        try {
            await clearCart(sessionId);
            setCartItems([]);
        } catch (error) {
            console.error("Error clearing cart:", error);
        }
    };

    const subtotal = cartItems.reduce(
        (sum, item) => sum + item.product.price * item.quantity,
        0
    );
    const freeShippingThreshold = 20;
    const shipping = subtotal >= freeShippingThreshold ? 0 : 3.90;
    const total = subtotal + shipping;
    const progressToFreeShipping = Math.min((subtotal / freeShippingThreshold) * 100, 100);
    const amountToFreeShipping = Math.max(freeShippingThreshold - subtotal, 0);
    const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

    if (loading) {
        return (
            <div className="overflow-x-hidden">
                <Header />
                <main className="flex min-h-screen items-center justify-center bg-primary">
                    <div className="flex flex-col items-center gap-4">
                        <div className="relative">
                            <Loading01 className="size-10 animate-spin text-brand-600" />
                        </div>
                        <p className="text-tertiary">Loading your cart...</p>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

    return (
        <div className="overflow-x-hidden">
            <Header />
            <main className="min-h-screen bg-gray-50">
                {/* Page Header */}
                <section className="border-b border-secondary bg-white px-4 py-2 md:px-8 lg:px-16">
                    <div className="mx-auto max-w-7xl">
                        <nav className="mb-4 flex items-center gap-2 text-sm text-tertiary">
                            <a href="/" className="transition hover:text-brand-600">Home</a>
                            <span>/</span>
                            <a href="/shop" className="transition hover:text-brand-600">Shop</a>
                            <span>/</span>
                            <span className="text-primary">Cart</span>
                        </nav>
                        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                            <div>
                                <h1 className="text-2xl font-bold text-primary md:text-3xl">
                                    Shopping Cart
                                </h1>
                                <p className="mt-1 text-tertiary">
                                    {itemCount > 0 ? `${itemCount} item${itemCount > 1 ? "s" : ""} in your cart` : "Your cart is empty"}
                                </p>
                            </div>
                            {cartItems.length > 0 && (
                                <Button href="/shop" color="secondary" size="sm" iconLeading={ArrowRight} className="hidden sm:flex">
                                    Continue Shopping
                                </Button>
                            )}
                        </div>
                    </div>
                </section>

                {/* Cart Content */}
                <section className="px-4 py-8 md:px-8 md:py-12 lg:px-16">
                    <div className="mx-auto max-w-7xl">
                        {cartItems.length > 0 ? (
                            <div className="grid gap-8 lg:grid-cols-3 lg:gap-12">
                                {/* Cart Items */}
                                <div className="lg:col-span-2">
                                    <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
                                        {/* Items List */}
                                        <AnimatePresence>
                                            {cartItems.map((item, index) => (
                                                <motion.div
                                                    key={item.id}
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{
                                                        opacity: removingItem === item.id ? 0 : 1,
                                                        y: 0,
                                                        x: removingItem === item.id ? -100 : 0,
                                                        height: removingItem === item.id ? 0 : "auto"
                                                    }}
                                                    exit={{ opacity: 0, x: -100, height: 0 }}
                                                    transition={{ duration: 0.3, delay: index * 0.05 }}
                                                    className={`border-b border-secondary last:border-b-0 ${updating === item.id ? "opacity-60" : ""}`}
                                                >
                                                    <div className="p-4 sm:p-6">
                                                        <div className="flex gap-4">
                                                            {/* Product Image */}
                                                            <a
                                                                href={`/product/${item.product.slug}`}
                                                                className="group relative shrink-0 overflow-hidden rounded-xl"
                                                            >
                                                                <img
                                                                    src={item.product.images?.[0] ?? ""}
                                                                    alt={item.product.name}
                                                                    className="size-24 object-cover transition duration-300 group-hover:scale-105 sm:size-28"
                                                                />
                                                                {updating === item.id && (
                                                                    <div className="absolute inset-0 flex items-center justify-center bg-white/80">
                                                                        <Loading01 className="size-5 animate-spin text-brand-600" />
                                                                    </div>
                                                                )}
                                                            </a>

                                                            {/* Product Details */}
                                                            <div className="flex flex-1 flex-col justify-between">
                                                                <div>
                                                                    <div className="flex items-start justify-between gap-2">
                                                                        <div>
                                                                            <p className="text-xs font-medium uppercase tracking-wider text-brand-600">
                                                                                {item.product.category}
                                                                            </p>
                                                                            <a
                                                                                href={`/product/${item.product.slug}`}
                                                                                className="mt-1 block text-sm font-semibold text-primary transition hover:text-brand-600 sm:text-base"
                                                                            >
                                                                                {item.product.name}
                                                                            </a>
                                                                        </div>
                                                                        <button
                                                                            onClick={() => removeItem(item.id)}
                                                                            className="rounded-full p-1.5 text-tertiary transition hover:bg-error-50 hover:text-error-500"
                                                                            aria-label="Remove item"
                                                                        >
                                                                            <X className="size-4" />
                                                                        </button>
                                                                    </div>

                                                                    {/* Variants */}
                                                                    <div className="mt-2 flex flex-wrap gap-2">
                                                                        {item.size && (
                                                                            <span className="inline-flex items-center rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary">
                                                                                Size: {item.size}
                                                                            </span>
                                                                        )}
                                                                        {item.color && (
                                                                            <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary">
                                                                                <span
                                                                                    className="size-2.5 rounded-full"
                                                                                    style={{ backgroundColor: item.color }}
                                                                                />
                                                                                {item.color}
                                                                            </span>
                                                                        )}
                                                                    </div>
                                                                </div>

                                                                {/* Price & Quantity */}
                                                                <div className="mt-4 flex items-center justify-between">
                                                                    {/* Quantity Selector */}
                                                                    <div className="flex items-center overflow-hidden rounded-lg border border-secondary bg-white">
                                                                        <button
                                                                            onClick={() => updateQuantity(item.id, -1)}
                                                                            disabled={item.quantity <= 1}
                                                                            className="flex size-9 items-center justify-center text-tertiary transition hover:bg-secondary hover:text-primary disabled:cursor-not-allowed disabled:opacity-40"
                                                                        >
                                                                            <Minus className="size-3.5" />
                                                                        </button>
                                                                        <span className="w-10 text-center text-sm font-semibold text-primary">
                                                                            {item.quantity}
                                                                        </span>
                                                                        <button
                                                                            onClick={() => updateQuantity(item.id, 1)}
                                                                            className="flex size-9 items-center justify-center text-tertiary transition hover:bg-secondary hover:text-primary"
                                                                        >
                                                                            <Plus className="size-3.5" />
                                                                        </button>
                                                                    </div>

                                                                    {/* Price */}
                                                                    <div className="text-right">
                                                                        <p className="text-lg font-bold text-primary">
                                                                            {(item.product.price * item.quantity).toFixed(2)}€
                                                                        </p>
                                                                        {item.quantity > 1 && (
                                                                            <p className="text-xs text-tertiary">
                                                                                {item.product.price.toFixed(2)}€ each
                                                                            </p>
                                                                        )}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </AnimatePresence>

                                        {/* Cart Actions */}
                                        <div className="flex items-center justify-between border-t border-secondary bg-gray-50 px-4 py-4 sm:px-6">
                                            <Button href="/shop" color="link-gray" size="sm" iconLeading={ArrowRight}>
                                                Continue Shopping
                                            </Button>
                                            <button
                                                onClick={handleClearCart}
                                                className="flex items-center gap-1.5 text-sm text-tertiary transition hover:text-error-500"
                                            >
                                                <Trash01 className="size-4" />
                                                Clear Cart
                                            </button>
                                        </div>
                                    </div>

                                    {/* Features Section */}
                                    <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
                                        {features.map((feature, index) => (
                                            <motion.div
                                                key={feature.title}
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                                                className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm"
                                            >
                                                <div className={`flex size-10 shrink-0 items-center justify-center rounded-full ${feature.bg}`}>
                                                    <feature.icon className={`size-5 ${feature.color}`} />
                                                </div>
                                                <div>
                                                    <p className="text-sm font-semibold text-primary">{feature.title}</p>
                                                    <p className="text-xs text-tertiary">{feature.description}</p>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>

                                    {/* Free Shipping Progress Bar */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3, delay: 0.5 }}
                                        className={`mt-4 overflow-hidden rounded-xl p-4 ${
                                            shipping === 0
                                                ? "bg-gradient-to-r from-success-50 to-brand-50 border border-success-200"
                                                : "bg-gradient-to-r from-brand-50 to-brand-50 border border-brand-200"
                                        }`}
                                    >
                                        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                                            <div className="flex items-center gap-2">
                                                {shipping === 0 ? (
                                                    <div className="flex size-8 items-center justify-center rounded-full bg-success-100">
                                                        <CheckCircle className="size-5 text-success-600" />
                                                    </div>
                                                ) : (
                                                    <div className="flex size-8 items-center justify-center rounded-full bg-brand-100">
                                                        <Truck01 className="size-5 text-brand-600" />
                                                    </div>
                                                )}
                                                <div>
                                                    <p className={`text-sm font-semibold ${shipping === 0 ? "text-success-700" : "text-brand-700"}`}>
                                                        {shipping === 0 ? (
                                                            "🎉 You've unlocked FREE shipping!"
                                                        ) : (
                                                            <>Add <span className="font-bold">{amountToFreeShipping.toFixed(2)}€</span> more for FREE shipping</>
                                                        )}
                                                    </p>
                                                    <p className="text-xs text-tertiary">
                                                        {shipping === 0 ? "Your order qualifies for free delivery" : "Free shipping on orders over €20"}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <div className="h-2.5 w-full overflow-hidden rounded-full bg-white shadow-inner sm:w-32">
                                                    <motion.div
                                                        initial={{ width: 0 }}
                                                        animate={{ width: `${progressToFreeShipping}%` }}
                                                        transition={{ duration: 0.8, ease: "easeOut" }}
                                                        className={`h-full rounded-full ${shipping === 0 ? "bg-success-500" : "bg-brand-500"}`}
                                                    />
                                                </div>
                                                <span className={`whitespace-nowrap text-xs font-medium ${shipping === 0 ? "text-success-600" : "text-brand-600"}`}>
                                                    {subtotal.toFixed(2)}€ / {freeShippingThreshold}€
                                                </span>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Order Summary - Sticky */}
                                <div className="lg:col-span-1">
                                    <div className="sticky top-24">
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.4, delay: 0.2 }}
                                            className="overflow-hidden rounded-2xl bg-white shadow-sm"
                                        >
                                            <div className="border-b border-secondary bg-gray-50 px-6 py-4">
                                                <h2 className="text-lg font-bold text-primary">
                                                    Order Summary
                                                </h2>
                                            </div>

                                            <div className="p-6">
                                                {/* Coupon Code */}
                                                <div className="mb-6">
                                                    <label className="mb-2 flex items-center gap-2 text-sm font-medium text-primary">
                                                        <Tag01 className="size-4 text-tertiary" />
                                                        Coupon Code
                                                    </label>
                                                    <div className="flex gap-2">
                                                        <input
                                                            type="text"
                                                            value={couponCode}
                                                            onChange={(e) => setCouponCode(e.target.value)}
                                                            placeholder="Enter code"
                                                            disabled={couponApplied}
                                                            className="flex-1 rounded-lg border border-secondary bg-gray-50 px-4 py-2.5 text-sm text-primary placeholder:text-placeholder focus:border-brand-500 focus:bg-white focus:outline-none disabled:opacity-50"
                                                        />
                                                        <Button
                                                            color={couponApplied ? "tertiary" : "secondary"}
                                                            size="md"
                                                            onClick={() => setCouponApplied(!couponApplied)}
                                                        >
                                                            {couponApplied ? "Remove" : "Apply"}
                                                        </Button>
                                                    </div>
                                                </div>

                                                {/* Summary Lines */}
                                                <div className="space-y-3 border-t border-secondary pt-6">
                                                    <div className="flex items-center justify-between text-sm">
                                                        <span className="text-tertiary">Subtotal ({itemCount} items)</span>
                                                        <span className="font-medium text-primary">{subtotal.toFixed(2)}€</span>
                                                    </div>
                                                    <div className="flex items-center justify-between text-sm">
                                                        <span className="flex items-center gap-1.5 text-tertiary">
                                                            <Truck01 className="size-4" />
                                                            Shipping
                                                        </span>
                                                        <span className={`font-medium ${shipping === 0 ? "text-success-600" : "text-primary"}`}>
                                                            {shipping === 0 ? "FREE" : `${shipping.toFixed(2)}€`}
                                                        </span>
                                                    </div>
                                                    {shipping > 0 && (
                                                        <motion.div
                                                            initial={{ opacity: 0, height: 0 }}
                                                            animate={{ opacity: 1, height: "auto" }}
                                                            className="rounded-lg bg-brand-50 px-3 py-2"
                                                        >
                                                            <p className="text-xs text-brand-700">
                                                                🎉 Add <strong>{amountToFreeShipping.toFixed(2)}€</strong> more for free shipping!
                                                            </p>
                                                        </motion.div>
                                                    )}
                                                </div>

                                                {/* Total */}
                                                <div className="mt-6 flex items-center justify-between border-t border-secondary pt-6">
                                                    <span className="text-base font-semibold text-primary">Total</span>
                                                    <div className="text-right">
                                                        <span className="text-2xl font-bold text-primary">{total.toFixed(2)}€</span>
                                                        <p className="text-xs text-tertiary">VAT included</p>
                                                    </div>
                                                </div>

                                                {/* Checkout Button */}
                                                <Button
                                                    href="/checkout"
                                                    color="primary"
                                                    size="lg"
                                                    className="mt-6 w-full justify-center"
                                                    iconTrailing={ArrowRight}
                                                >
                                                    Checkout
                                                </Button>

                                                {/* Trust Badges */}
                                                <div className="mt-6 space-y-3">
                                                    <div className="flex items-center justify-center gap-2 text-xs text-tertiary">
                                                        <Shield01 className="size-4 text-success-500" />
                                                        <span>Secure checkout with SSL encryption</span>
                                                    </div>
                                                    <div className="flex items-center justify-center gap-3 border-t border-secondary pt-4">
                                                        <span className="text-xs text-tertiary">We accept:</span>
                                                        <div className="flex gap-2">
                                                            <span className="rounded bg-secondary px-2 py-1 text-xs font-semibold text-secondary">Twint</span>
                                                            <span className="rounded bg-secondary px-2 py-1 text-xs font-semibold text-secondary">Revolut</span>
                                                            <span className="rounded bg-secondary px-2 py-1 text-xs font-semibold text-secondary">Cash</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>

                                        {/* Shipping Info */}
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.4, delay: 0.3 }}
                                            className="mt-4 rounded-xl border border-secondary bg-white p-4"
                                        >
                                            <div className="flex items-start gap-3">
                                                <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-brand-50">
                                                    <Package className="size-4 text-brand-600" />
                                                </div>
                                                <div className="text-sm">
                                                    <p className="font-semibold text-primary">Fast Shipping</p>
                                                    <p className="mt-0.5 text-tertiary">
                                                        2-4 business days • Tracking included
                                                    </p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            /* Empty Cart */
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4 }}
                                className="mx-auto max-w-md py-16 text-center"
                            >
                                <div className="mx-auto flex size-32 items-center justify-center rounded-full bg-gradient-to-br from-brand-50 to-brand-50">
                                    <ShoppingBag01 className="size-16 text-brand-400" />
                                </div>
                                <h2 className="mt-8 text-2xl font-bold text-primary">
                                    Your cart is empty
                                </h2>
                                <p className="mt-3 text-tertiary">
                                    Looks like you haven't added anything yet. Start exploring our products!
                                </p>
                                <Button
                                    href="/shop"
                                    color="primary"
                                    size="lg"
                                    className="mt-8"
                                    iconTrailing={ArrowRight}
                                >
                                    Start Shopping
                                </Button>

                                {/* Features for empty state */}
                                <div className="mt-12 grid grid-cols-3 gap-4">
                                    {features.map((feature) => (
                                        <div key={feature.title} className="text-center">
                                            <div className={`mx-auto flex size-12 items-center justify-center rounded-full ${feature.bg}`}>
                                                <feature.icon className={`size-6 ${feature.color}`} />
                                            </div>
                                            <p className="mt-2 text-xs font-medium text-primary">{feature.title}</p>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
