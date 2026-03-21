"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
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
        title: "Free Shipping",
        description: "On orders over $120",
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

export default function CartPage() {
    const [cartItems, setCartItems] = useState<CartItemWithProduct[]>([]);
    const [loading, setLoading] = useState(true);
    const [couponCode, setCouponCode] = useState("");
    const [updating, setUpdating] = useState<string | null>(null);

    // Fetch cart items from Supabase
    useEffect(() => {
        async function fetchCartItems() {
            try {
                const sessionId = getSessionId();
                if (!sessionId) {
                    setLoading(false);
                    return;
                }
                const data = await getCartItems(sessionId);
                setCartItems(data as CartItemWithProduct[]);
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
                    item.id === id
                        ? { ...item, quantity: newQuantity }
                        : item
                )
            );
        } catch (error) {
            console.error("Error updating quantity:", error);
        } finally {
            setUpdating(null);
        }
    };

    const removeItem = async (id: string) => {
        setUpdating(id);
        try {
            await removeFromCart(id);
            setCartItems((items) => items.filter((item) => item.id !== id));
        } catch (error) {
            console.error("Error removing item:", error);
        } finally {
            setUpdating(null);
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
    const shipping = subtotal >= 120 ? 0 : 10;
    const total = subtotal + shipping;

    if (loading) {
        return (
            <div className="overflow-x-hidden">
                <Header />
                <main className="flex min-h-screen items-center justify-center bg-primary">
                    <div className="flex flex-col items-center gap-4">
                        <Loading01 className="size-8 animate-spin text-brand-600" />
                        <p className="text-tertiary">Loading cart...</p>
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
                <div className="relative bg-brand-50 py-12 md:py-16 lg:py-20">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="absolute inset-0 opacity-30" style={{
                            backgroundImage: `radial-gradient(circle at 1px 1px, var(--color-brand-200) 1px, transparent 0)`,
                            backgroundSize: '32px 32px'
                        }} />
                    </div>
                    <div className="relative mx-auto max-w-7xl px-4 text-center md:px-8 lg:px-16">
                        <h1 className="text-2xl font-semibold uppercase tracking-[0.2em] text-primary sm:text-3xl md:text-4xl">
                            Shopping Cart
                        </h1>
                        <nav className="mt-4 flex items-center justify-center gap-2 text-sm text-tertiary">
                            <a href="/" className="transition hover:text-brand-600">Home</a>
                            <span>/</span>
                            <span className="text-primary">Cart</span>
                        </nav>
                    </div>
                </div>

                {/* Cart Content */}
                <section className="px-4 py-12 md:px-8 md:py-16 lg:px-16">
                    <div className="mx-auto max-w-7xl">
                        {cartItems.length > 0 ? (
                            <div className="grid gap-12 lg:grid-cols-3">
                                {/* Cart Items */}
                                <div className="lg:col-span-2">
                                    {/* Desktop Table Header */}
                                    <div className="hidden border-b border-secondary pb-4 md:grid md:grid-cols-12 md:gap-4">
                                        <div className="col-span-6 text-xs font-semibold uppercase tracking-wider text-tertiary">
                                            Product
                                        </div>
                                        <div className="col-span-2 text-center text-xs font-semibold uppercase tracking-wider text-tertiary">
                                            Price
                                        </div>
                                        <div className="col-span-2 text-center text-xs font-semibold uppercase tracking-wider text-tertiary">
                                            Quantity
                                        </div>
                                        <div className="col-span-2 text-right text-xs font-semibold uppercase tracking-wider text-tertiary">
                                            Total
                                        </div>
                                    </div>

                                    {/* Cart Items */}
                                    <div className="divide-y divide-secondary">
                                        {cartItems.map((item, index) => (
                                            <motion.div
                                                key={item.id}
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                                className={`py-6 ${updating === item.id ? "opacity-50" : ""}`}
                                            >
                                                {/* Mobile Layout */}
                                                <div className="flex gap-4 md:hidden">
                                                    <a href={`/product/${item.product.slug}`} className="shrink-0">
                                                        <img
                                                            src={item.product.images[0]}
                                                            alt={item.product.name}
                                                            className="size-24 rounded-lg bg-secondary object-cover"
                                                        />
                                                    </a>
                                                    <div className="flex flex-1 flex-col">
                                                        <div className="flex items-start justify-between">
                                                            <div>
                                                                <a href={`/product/${item.product.slug}`} className="font-semibold text-primary hover:text-brand-600">
                                                                    {item.product.name}
                                                                </a>
                                                                <p className="mt-0.5 text-xs text-tertiary">{item.product.category}</p>
                                                                {item.size && <p className="mt-1 text-xs text-tertiary">Size: {item.size}</p>}
                                                            </div>
                                                            <button
                                                                onClick={() => removeItem(item.id)}
                                                                className="text-tertiary transition hover:text-error-500"
                                                            >
                                                                <X className="size-5" />
                                                            </button>
                                                        </div>
                                                        <div className="mt-4 flex items-center justify-between">
                                                            <div className="flex items-center border border-secondary">
                                                                <button
                                                                    onClick={() => updateQuantity(item.id, -1)}
                                                                    className="flex size-8 items-center justify-center text-tertiary transition hover:text-primary"
                                                                >
                                                                    <Minus className="size-3" />
                                                                </button>
                                                                <span className="w-8 text-center text-sm font-medium text-primary">
                                                                    {item.quantity}
                                                                </span>
                                                                <button
                                                                    onClick={() => updateQuantity(item.id, 1)}
                                                                    className="flex size-8 items-center justify-center text-tertiary transition hover:text-primary"
                                                                >
                                                                    <Plus className="size-3" />
                                                                </button>
                                                            </div>
                                                            <span className="font-semibold text-primary">
                                                                ${(item.product.price * item.quantity).toFixed(2)}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Desktop Layout */}
                                                <div className="hidden items-center gap-4 md:grid md:grid-cols-12">
                                                    <div className="col-span-6 flex items-center gap-4">
                                                        <a href={`/product/${item.product.slug}`} className="shrink-0">
                                                            <img
                                                                src={item.product.images[0]}
                                                                alt={item.product.name}
                                                                className="size-20 rounded-lg bg-secondary object-cover"
                                                            />
                                                        </a>
                                                        <div>
                                                            <a href={`/product/${item.product.slug}`} className="font-semibold text-primary hover:text-brand-600">
                                                                {item.product.name}
                                                            </a>
                                                            <p className="mt-0.5 text-xs text-tertiary">{item.product.category}</p>
                                                            {item.size && <p className="mt-1 text-xs text-tertiary">Size: {item.size}</p>}
                                                            <button
                                                                onClick={() => removeItem(item.id)}
                                                                className="mt-2 flex items-center gap-1 text-xs text-tertiary transition hover:text-error-500"
                                                            >
                                                                <Trash01 className="size-3" />
                                                                Remove
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className="col-span-2 text-center">
                                                        <span className="font-medium text-primary">
                                                            ${item.product.price.toFixed(2)}
                                                        </span>
                                                    </div>
                                                    <div className="col-span-2 flex justify-center">
                                                        <div className="flex items-center border border-secondary">
                                                            <button
                                                                onClick={() => updateQuantity(item.id, -1)}
                                                                className="flex size-9 items-center justify-center text-tertiary transition hover:text-primary"
                                                            >
                                                                <Minus className="size-4" />
                                                            </button>
                                                            <span className="w-10 text-center text-sm font-medium text-primary">
                                                                {item.quantity}
                                                            </span>
                                                            <button
                                                                onClick={() => updateQuantity(item.id, 1)}
                                                                className="flex size-9 items-center justify-center text-tertiary transition hover:text-primary"
                                                            >
                                                                <Plus className="size-4" />
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className="col-span-2 text-right">
                                                        <span className="font-semibold text-primary">
                                                            ${(item.product.price * item.quantity).toFixed(2)}
                                                        </span>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>

                                    {/* Continue Shopping */}
                                    <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                                        <Button href="/shop" color="secondary" size="md">
                                            Continue Shopping
                                        </Button>
                                        <button
                                            onClick={handleClearCart}
                                            className="flex items-center gap-2 text-sm text-tertiary transition hover:text-error-500"
                                        >
                                            <Trash01 className="size-4" />
                                            Clear Cart
                                        </button>
                                    </div>
                                </div>

                                {/* Order Summary */}
                                <div className="lg:col-span-1">
                                    <div className="rounded-2xl border border-secondary bg-secondary p-6">
                                        <h2 className="text-lg font-semibold text-primary">
                                            Order Summary
                                        </h2>

                                        {/* Coupon Code */}
                                        <div className="mt-6">
                                            <label className="text-sm font-medium text-primary">
                                                Coupon Code
                                            </label>
                                            <div className="mt-2 flex gap-2">
                                                <input
                                                    type="text"
                                                    value={couponCode}
                                                    onChange={(e) => setCouponCode(e.target.value)}
                                                    placeholder="Enter code"
                                                    className="flex-1 rounded-lg border border-secondary bg-primary px-4 py-2 text-sm text-primary placeholder:text-placeholder focus:border-brand-500 focus:outline-none"
                                                />
                                                <Button color="secondary" size="sm">
                                                    Apply
                                                </Button>
                                            </div>
                                        </div>

                                        {/* Summary */}
                                        <div className="mt-6 space-y-4 border-t border-secondary pt-6">
                                            <div className="flex items-center justify-between text-sm">
                                                <span className="text-tertiary">Subtotal</span>
                                                <span className="font-medium text-primary">
                                                    ${subtotal.toFixed(2)}
                                                </span>
                                            </div>
                                            <div className="flex items-center justify-between text-sm">
                                                <span className="text-tertiary">Shipping</span>
                                                <span className="font-medium text-primary">
                                                    {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
                                                </span>
                                            </div>
                                            {shipping > 0 && (
                                                <p className="text-xs text-brand-600">
                                                    Spend ${(120 - subtotal).toFixed(2)} more for free shipping!
                                                </p>
                                            )}
                                        </div>

                                        <div className="mt-6 flex items-center justify-between border-t border-secondary pt-6">
                                            <span className="text-lg font-semibold text-primary">
                                                Total
                                            </span>
                                            <span className="text-xl font-bold text-primary">
                                                ${total.toFixed(2)}
                                            </span>
                                        </div>

                                        <Button
                                            href="/checkout"
                                            color="primary"
                                            size="lg"
                                            className="mt-6 w-full justify-center"
                                        >
                                            Proceed to Checkout
                                        </Button>

                                        {/* Payment Icons */}
                                        <div className="mt-6 flex items-center justify-center gap-2">
                                            <span className="text-xs text-tertiary">We accept:</span>
                                            <div className="flex gap-2 text-tertiary">
                                                <span className="text-xs font-medium">Twint</span>
                                                <span>•</span>
                                                <span className="text-xs font-medium">Revolut</span>
                                                <span>•</span>
                                                <span className="text-xs font-medium">Cash</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Features */}
                                    <div className="mt-6 space-y-4">
                                        {features.map((feature) => (
                                            <div key={feature.title} className="flex items-center gap-3">
                                                <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-brand-50">
                                                    <feature.icon className="size-5 text-brand-600" />
                                                </div>
                                                <div>
                                                    <p className="text-sm font-medium text-primary">{feature.title}</p>
                                                    <p className="text-xs text-tertiary">{feature.description}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ) : (
                            /* Empty Cart */
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="py-16 text-center"
                            >
                                <div className="mx-auto flex size-24 items-center justify-center rounded-full bg-secondary">
                                    <ShoppingBag01 className="size-12 text-tertiary" />
                                </div>
                                <h2 className="mt-6 text-xl font-semibold text-primary">
                                    Your cart is empty
                                </h2>
                                <p className="mt-2 text-tertiary">
                                    Looks like you haven't added anything to your cart yet.
                                </p>
                                <Button
                                    href="/shop"
                                    color="primary"
                                    size="lg"
                                    className="mt-8"
                                    iconLeading={ShoppingBag01}
                                >
                                    Start Shopping
                                </Button>
                            </motion.div>
                        )}
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
