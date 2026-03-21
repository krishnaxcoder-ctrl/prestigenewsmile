"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/base/buttons/button";
import { Input } from "@/components/base/input/input";
import {
    CheckCircle,
    Lock01,
    CreditCard01,
    Truck01,
    ChevronDown,
    Mail01,
    User01,
    Home02,
    Phone01,
    Building07,
    Globe01,
    Loading01,
} from "@untitledui/icons";
import { Header } from "@/app/components/header";
import { Footer } from "@/app/components/footer";
import {
    getCartItems,
    createOrder,
    clearCart,
    getSessionId,
    getCustomer,
    saveCustomer,
    getSession,
    type Product,
} from "@/lib/supabase";
import { useToastActions } from "@/components/base/toast/toast";

interface CartItemWithProduct {
    id: string;
    product_id: string;
    quantity: number;
    size: string | null;
    color: string | null;
    session_id: string | null;
    product: Product;
}

const steps = [
    { id: 1, label: "Information" },
    { id: 2, label: "Shipping" },
    { id: 3, label: "Payment" },
];

export default function CheckoutPage() {
    const router = useRouter();
    const toast = useToastActions();
    const [cartItems, setCartItems] = useState<CartItemWithProduct[]>([]);
    const [loading, setLoading] = useState(true);
    const [submitting, setSubmitting] = useState(false);
    const [savingCustomer, setSavingCustomer] = useState(false);
    const [currentStep, setCurrentStep] = useState(1);
    const [userId, setUserId] = useState<string | null>(null);
    const [formData, setFormData] = useState({
        email: "",
        firstName: "",
        lastName: "",
        address: "",
        apartment: "",
        city: "",
        country: "Switzerland",
        postalCode: "",
        phone: "",
        shippingMethod: "standard",
        paymentMethod: "twint",
    });

    // Fetch cart items and customer info
    useEffect(() => {
        async function fetchData() {
            try {
                const sessionId = getSessionId();
                if (!sessionId) {
                    setLoading(false);
                    return;
                }

                // Check if user is authenticated
                const session = await getSession();
                if (session?.user) {
                    setUserId(session.user.id);
                }

                // Fetch cart items
                const cartData = await getCartItems(sessionId);
                setCartItems(cartData as unknown as CartItemWithProduct[]);

                // Fetch existing customer info to pre-fill form
                const customer = await getCustomer(sessionId);
                if (customer) {
                    setFormData((prev) => ({
                        ...prev,
                        email: customer.email,
                        firstName: customer.first_name,
                        lastName: customer.last_name,
                        address: customer.address,
                        apartment: customer.apartment || "",
                        city: customer.city,
                        postalCode: customer.postal_code,
                        country: customer.country,
                        phone: customer.phone || "",
                        shippingMethod: customer.shipping_method || "standard",
                        paymentMethod: customer.payment_method || "twint",
                    }));
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    const subtotal = cartItems.reduce(
        (sum, item) => sum + item.product.price * item.quantity,
        0
    );
    const shipping = formData.shippingMethod === "express" ? 15 : 0;
    const total = subtotal + shipping;

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Save customer info to Supabase when proceeding to shipping
    const handleContinueToShipping = async () => {
        // Validate required fields
        if (!formData.email || !formData.firstName || !formData.lastName ||
            !formData.address || !formData.city || !formData.postalCode) {
            toast.error("Missing information", "Please fill in all required fields.");
            return;
        }

        setSavingCustomer(true);
        try {
            const sessionId = getSessionId();
            await saveCustomer(sessionId, {
                email: formData.email,
                first_name: formData.firstName,
                last_name: formData.lastName,
                address: formData.address,
                apartment: formData.apartment,
                city: formData.city,
                postal_code: formData.postalCode,
                country: formData.country,
                phone: formData.phone,
            });
            setCurrentStep(2);
        } catch (error) {
            console.error("Error saving customer info:", error);
            toast.error("Failed to save", "Please try again.");
        } finally {
            setSavingCustomer(false);
        }
    };

    // Save shipping method when proceeding to payment
    const handleContinueToPayment = async () => {
        setSavingCustomer(true);
        try {
            const sessionId = getSessionId();
            await saveCustomer(sessionId, {
                email: formData.email,
                first_name: formData.firstName,
                last_name: formData.lastName,
                address: formData.address,
                apartment: formData.apartment,
                city: formData.city,
                postal_code: formData.postalCode,
                country: formData.country,
                phone: formData.phone,
                shipping_method: formData.shippingMethod,
            });
            setCurrentStep(3);
        } catch (error) {
            console.error("Error saving shipping method:", error);
            toast.error("Failed to save", "Please try again.");
        } finally {
            setSavingCustomer(false);
        }
    };

    const handlePlaceOrder = async () => {
        setSubmitting(true);
        try {
            const sessionId = getSessionId();

            // Save payment method to customer
            await saveCustomer(sessionId, {
                email: formData.email,
                first_name: formData.firstName,
                last_name: formData.lastName,
                address: formData.address,
                apartment: formData.apartment,
                city: formData.city,
                postal_code: formData.postalCode,
                country: formData.country,
                phone: formData.phone,
                shipping_method: formData.shippingMethod,
                payment_method: formData.paymentMethod,
            });

            await createOrder(
                {
                    email: formData.email,
                    first_name: formData.firstName,
                    last_name: formData.lastName,
                    address: formData.address,
                    apartment: formData.apartment,
                    city: formData.city,
                    country: formData.country,
                    postal_code: formData.postalCode,
                    phone: formData.phone,
                    shipping_method: formData.shippingMethod,
                    payment_method: formData.paymentMethod,
                    status: "processing",
                    subtotal,
                    shipping_cost: shipping,
                    total,
                    user_id: userId,
                    tracking_number: null,
                    delivery_date: null,
                },
                cartItems.map((item) => ({
                    product_id: item.product_id,
                    name: item.product.name,
                    price: item.product.price,
                    quantity: item.quantity,
                    size: item.size,
                    color: item.color,
                    image: item.product.images?.[0] ?? "",
                }))
            );

            // Clear cart
            if (sessionId) {
                await clearCart(sessionId);
            }

            // Show success toast and redirect
            toast.success("Order placed successfully!", "Thank you for your purchase.");
            router.push("/account/orders");
        } catch (error) {
            console.error("Error placing order:", error);
            toast.error("Failed to place order", "Please try again.");
        } finally {
            setSubmitting(false);
        }
    };

    if (loading) {
        return (
            <div className="overflow-x-hidden">
                <Header />
                <main className="flex min-h-screen items-center justify-center bg-primary">
                    <div className="flex flex-col items-center gap-4">
                        <Loading01 className="size-8 animate-spin text-brand-600" />
                        <p className="text-tertiary">Loading checkout...</p>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

    if (cartItems.length === 0) {
        return (
            <div className="overflow-x-hidden">
                <Header />
                <main className="flex min-h-screen items-center justify-center bg-primary">
                    <div className="text-center">
                        <h1 className="text-2xl font-semibold text-primary">Your cart is empty</h1>
                        <p className="mt-2 text-tertiary">Add some products before checking out.</p>
                        <Button href="/shop" color="primary" className="mt-4">
                            Continue Shopping
                        </Button>
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
                <div className="relative bg-brand-50 py-12 md:py-16">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="absolute inset-0 opacity-30" style={{
                            backgroundImage: `radial-gradient(circle at 1px 1px, var(--color-brand-200) 1px, transparent 0)`,
                            backgroundSize: '32px 32px'
                        }} />
                    </div>
                    <div className="relative mx-auto max-w-7xl px-4 text-center md:px-8 lg:px-16">
                        <h1 className="text-2xl font-semibold uppercase tracking-[0.2em] text-primary sm:text-3xl md:text-4xl">
                            Checkout
                        </h1>
                        <nav className="mt-4 flex items-center justify-center gap-2 text-sm text-tertiary">
                            <a href="/" className="transition hover:text-brand-600">Home</a>
                            <span>/</span>
                            <a href="/cart" className="transition hover:text-brand-600">Cart</a>
                            <span>/</span>
                            <span className="text-primary">Checkout</span>
                        </nav>
                    </div>
                </div>

                {/* Progress Steps */}
                <div className="border-b border-secondary">
                    <div className="mx-auto max-w-7xl px-4 py-6 md:px-8 lg:px-16">
                        <div className="flex items-center justify-center gap-4 sm:gap-8">
                            {steps.map((step, index) => (
                                <div key={step.id} className="flex items-center gap-2 sm:gap-4">
                                    <div className="flex items-center gap-2">
                                        <div
                                            className={`flex size-8 items-center justify-center rounded-full text-sm font-semibold ${
                                                currentStep >= step.id
                                                    ? "bg-brand-600 text-white"
                                                    : "bg-secondary text-tertiary"
                                            }`}
                                        >
                                            {currentStep > step.id ? (
                                                <CheckCircle className="size-5" />
                                            ) : (
                                                step.id
                                            )}
                                        </div>
                                        <span className={`hidden text-sm font-medium sm:block ${
                                            currentStep >= step.id ? "text-primary" : "text-tertiary"
                                        }`}>
                                            {step.label}
                                        </span>
                                    </div>
                                    {index < steps.length - 1 && (
                                        <div className={`h-px w-8 sm:w-16 ${
                                            currentStep > step.id ? "bg-brand-600" : "bg-secondary"
                                        }`} />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Checkout Content */}
                <section className="px-4 py-12 md:px-8 md:py-16 lg:px-16">
                    <div className="mx-auto max-w-7xl">
                        <div className="grid gap-12 lg:grid-cols-3">
                            {/* Form */}
                            <div className="lg:col-span-2">
                                {/* Step 1: Information */}
                                {currentStep === 1 && (
                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <h2 className="text-xl font-semibold text-primary">
                                            Contact Information
                                        </h2>
                                        <div className="mt-6 space-y-4">
                                            <Input
                                                type="email"
                                                name="email"
                                                label="Email"
                                                icon={Mail01}
                                                value={formData.email}
                                                onChange={(value) => setFormData({ ...formData, email: value })}
                                                placeholder="your@email.com"
                                                isRequired
                                                size="md"
                                            />
                                        </div>

                                        <h2 className="mt-10 text-xl font-semibold text-primary">
                                            Shipping Address
                                        </h2>
                                        <div className="mt-6 grid gap-4 sm:grid-cols-2">
                                            <Input
                                                type="text"
                                                name="firstName"
                                                label="First Name"
                                                icon={User01}
                                                value={formData.firstName}
                                                onChange={(value) => setFormData({ ...formData, firstName: value })}
                                                placeholder="John"
                                                isRequired
                                                size="md"
                                            />
                                            <Input
                                                type="text"
                                                name="lastName"
                                                label="Last Name"
                                                icon={User01}
                                                value={formData.lastName}
                                                onChange={(value) => setFormData({ ...formData, lastName: value })}
                                                placeholder="Doe"
                                                isRequired
                                                size="md"
                                            />
                                            <div className="sm:col-span-2">
                                                <Input
                                                    type="text"
                                                    name="address"
                                                    label="Address"
                                                    icon={Home02}
                                                    value={formData.address}
                                                    onChange={(value) => setFormData({ ...formData, address: value })}
                                                    placeholder="Street address"
                                                    isRequired
                                                    size="md"
                                                />
                                            </div>
                                            <div className="sm:col-span-2">
                                                <Input
                                                    type="text"
                                                    name="apartment"
                                                    label="Apartment, suite, etc. (optional)"
                                                    icon={Building07}
                                                    value={formData.apartment}
                                                    onChange={(value) => setFormData({ ...formData, apartment: value })}
                                                    placeholder="Apt, suite, unit, etc."
                                                    size="md"
                                                />
                                            </div>
                                            <Input
                                                type="text"
                                                name="city"
                                                label="City"
                                                value={formData.city}
                                                onChange={(value) => setFormData({ ...formData, city: value })}
                                                placeholder="Geneva"
                                                isRequired
                                                size="md"
                                            />
                                            <Input
                                                type="text"
                                                name="postalCode"
                                                label="Postal Code"
                                                value={formData.postalCode}
                                                onChange={(value) => setFormData({ ...formData, postalCode: value })}
                                                placeholder="1200"
                                                isRequired
                                                size="md"
                                            />
                                            <div className="relative space-y-1.5">
                                                <label className="text-sm font-medium text-secondary">
                                                    Country
                                                </label>
                                                <div className="relative">
                                                    <div className="pointer-events-none absolute left-3 top-1/2 z-10 -translate-y-1/2">
                                                        <Globe01 className="size-5 text-fg-quaternary" />
                                                    </div>
                                                    <select
                                                        name="country"
                                                        value={formData.country}
                                                        onChange={handleInputChange}
                                                        className="w-full appearance-none rounded-lg bg-primary py-2.5 pl-10 pr-10 text-md text-primary shadow-xs ring-1 ring-primary ring-inset focus:ring-2 focus:ring-brand focus:outline-none"
                                                    >
                                                        <option value="Switzerland">Switzerland</option>
                                                        <option value="France">France</option>
                                                        <option value="Germany">Germany</option>
                                                        <option value="Italy">Italy</option>
                                                    </select>
                                                    <ChevronDown className="pointer-events-none absolute right-3 top-1/2 size-5 -translate-y-1/2 text-fg-quaternary" />
                                                </div>
                                            </div>
                                            <Input
                                                type="tel"
                                                name="phone"
                                                label="Phone"
                                                icon={Phone01}
                                                value={formData.phone}
                                                onChange={(value) => setFormData({ ...formData, phone: value })}
                                                placeholder="+41 XX XXX XX XX"
                                                size="md"
                                            />
                                        </div>

                                        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-between">
                                            <Button href="/cart" color="secondary" size="md">
                                                Return to Cart
                                            </Button>
                                            <Button
                                                color="primary"
                                                size="md"
                                                onClick={handleContinueToShipping}
                                                isLoading={savingCustomer}
                                            >
                                                Continue to Shipping
                                            </Button>
                                        </div>
                                    </motion.div>
                                )}

                                {/* Step 2: Shipping */}
                                {currentStep === 2 && (
                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <h2 className="text-xl font-semibold text-primary">
                                            Shipping Method
                                        </h2>
                                        <div className="mt-6 space-y-3">
                                            <label className={`flex cursor-pointer items-center justify-between rounded-lg border p-4 transition ${
                                                formData.shippingMethod === "standard"
                                                    ? "border-brand-600 bg-brand-50"
                                                    : "border-secondary hover:border-brand-300"
                                            }`}>
                                                <div className="flex items-center gap-3">
                                                    <input
                                                        type="radio"
                                                        name="shippingMethod"
                                                        value="standard"
                                                        checked={formData.shippingMethod === "standard"}
                                                        onChange={handleInputChange}
                                                        className="size-4 accent-brand-600"
                                                    />
                                                    <div>
                                                        <p className="font-medium text-primary">Free Standard Shipping</p>
                                                        <p className="text-sm text-tertiary">5-7 business days</p>
                                                    </div>
                                                </div>
                                                <span className="font-semibold text-primary">Free</span>
                                            </label>

                                            <label className={`flex cursor-pointer items-center justify-between rounded-lg border p-4 transition ${
                                                formData.shippingMethod === "express"
                                                    ? "border-brand-600 bg-brand-50"
                                                    : "border-secondary hover:border-brand-300"
                                            }`}>
                                                <div className="flex items-center gap-3">
                                                    <input
                                                        type="radio"
                                                        name="shippingMethod"
                                                        value="express"
                                                        checked={formData.shippingMethod === "express"}
                                                        onChange={handleInputChange}
                                                        className="size-4 accent-brand-600"
                                                    />
                                                    <div>
                                                        <p className="font-medium text-primary">Express Shipping</p>
                                                        <p className="text-sm text-tertiary">1-2 business days</p>
                                                    </div>
                                                </div>
                                                <span className="font-semibold text-primary">$15.00</span>
                                            </label>
                                        </div>

                                        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-between">
                                            <Button
                                                color="secondary"
                                                size="md"
                                                onClick={() => setCurrentStep(1)}
                                            >
                                                Return to Information
                                            </Button>
                                            <Button
                                                color="primary"
                                                size="md"
                                                onClick={handleContinueToPayment}
                                                isLoading={savingCustomer}
                                            >
                                                Continue to Payment
                                            </Button>
                                        </div>
                                    </motion.div>
                                )}

                                {/* Step 3: Payment */}
                                {currentStep === 3 && (
                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <h2 className="text-xl font-semibold text-primary">
                                            Payment Method
                                        </h2>
                                        <div className="mt-6 space-y-3">
                                            <label className={`flex cursor-pointer items-center gap-3 rounded-lg border p-4 transition ${
                                                formData.paymentMethod === "twint"
                                                    ? "border-brand-600 bg-brand-50"
                                                    : "border-secondary hover:border-brand-300"
                                            }`}>
                                                <input
                                                    type="radio"
                                                    name="paymentMethod"
                                                    value="twint"
                                                    checked={formData.paymentMethod === "twint"}
                                                    onChange={handleInputChange}
                                                    className="size-4 accent-brand-600"
                                                />
                                                <div className="flex items-center gap-2">
                                                    <CreditCard01 className="size-5 text-brand-600" />
                                                    <span className="font-medium text-primary">Twint</span>
                                                </div>
                                            </label>

                                            <label className={`flex cursor-pointer items-center gap-3 rounded-lg border p-4 transition ${
                                                formData.paymentMethod === "revolut"
                                                    ? "border-brand-600 bg-brand-50"
                                                    : "border-secondary hover:border-brand-300"
                                            }`}>
                                                <input
                                                    type="radio"
                                                    name="paymentMethod"
                                                    value="revolut"
                                                    checked={formData.paymentMethod === "revolut"}
                                                    onChange={handleInputChange}
                                                    className="size-4 accent-brand-600"
                                                />
                                                <div className="flex items-center gap-2">
                                                    <CreditCard01 className="size-5 text-purple-600" />
                                                    <span className="font-medium text-primary">Revolut</span>
                                                </div>
                                            </label>

                                            <label className={`flex cursor-pointer items-center gap-3 rounded-lg border p-4 transition ${
                                                formData.paymentMethod === "cash"
                                                    ? "border-brand-600 bg-brand-50"
                                                    : "border-secondary hover:border-brand-300"
                                            }`}>
                                                <input
                                                    type="radio"
                                                    name="paymentMethod"
                                                    value="cash"
                                                    checked={formData.paymentMethod === "cash"}
                                                    onChange={handleInputChange}
                                                    className="size-4 accent-brand-600"
                                                />
                                                <div className="flex items-center gap-2">
                                                    <CreditCard01 className="size-5 text-green-600" />
                                                    <span className="font-medium text-primary">Cash on Delivery</span>
                                                </div>
                                            </label>
                                        </div>

                                        <div className="mt-8 rounded-lg bg-secondary p-4">
                                            <div className="flex items-center gap-2 text-sm text-tertiary">
                                                <Lock01 className="size-4" />
                                                <span>Your payment information is secure and encrypted</span>
                                            </div>
                                        </div>

                                        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-between">
                                            <Button
                                                color="secondary"
                                                size="md"
                                                onClick={() => setCurrentStep(2)}
                                            >
                                                Return to Shipping
                                            </Button>
                                            <Button
                                                color="primary"
                                                size="lg"
                                                iconLeading={Lock01}
                                                onClick={handlePlaceOrder}
                                                isLoading={submitting}
                                            >
                                                Place Order - ${total.toFixed(2)}
                                            </Button>
                                        </div>
                                    </motion.div>
                                )}
                            </div>

                            {/* Order Summary Sidebar */}
                            <div className="lg:col-span-1">
                                <div className="rounded-2xl border border-secondary bg-secondary p-6">
                                    <h2 className="text-lg font-semibold text-primary">
                                        Order Summary
                                    </h2>

                                    {/* Items */}
                                    <div className="mt-6 space-y-4">
                                        {cartItems.map((item) => (
                                            <div key={item.id} className="flex gap-4">
                                                <div className="relative shrink-0">
                                                    <img
                                                        src={item.product.images?.[0] ?? ""}
                                                        alt={item.product.name}
                                                        className="size-16 rounded-lg bg-primary object-cover"
                                                    />
                                                    <span className="absolute -right-2 -top-2 flex size-5 items-center justify-center rounded-full bg-tertiary text-xs font-semibold text-white">
                                                        {item.quantity}
                                                    </span>
                                                </div>
                                                <div className="flex-1">
                                                    <p className="font-medium text-primary">{item.product.name}</p>
                                                    {item.size && <p className="text-xs text-tertiary">Size: {item.size}</p>}
                                                </div>
                                                <span className="font-medium text-primary">
                                                    ${(item.product.price * item.quantity).toFixed(2)}
                                                </span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Summary */}
                                    <div className="mt-6 space-y-3 border-t border-secondary pt-6">
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
                                    </div>

                                    <div className="mt-6 flex items-center justify-between border-t border-secondary pt-6">
                                        <span className="text-lg font-semibold text-primary">
                                            Total
                                        </span>
                                        <span className="text-xl font-bold text-primary">
                                            ${total.toFixed(2)}
                                        </span>
                                    </div>
                                </div>

                                {/* Trust Badge */}
                                <div className="mt-6 flex items-center justify-center gap-2 text-sm text-tertiary">
                                    <Truck01 className="size-4" />
                                    <span>Free shipping on orders over $120</span>
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
