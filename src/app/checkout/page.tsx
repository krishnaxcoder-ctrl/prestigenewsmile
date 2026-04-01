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
    Package,
    Shield01,
    RefreshCcw01,
    ArrowLeft,
    ArrowRight,
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
    { id: 1, label: "Information", icon: User01 },
    { id: 2, label: "Shipping", icon: Truck01 },
    { id: 3, label: "Payment", icon: CreditCard01 },
];

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

    useEffect(() => {
        async function fetchData() {
            try {
                const sessionId = getSessionId();
                if (!sessionId) {
                    setLoading(false);
                    return;
                }

                const session = await getSession();
                if (session?.user) {
                    setUserId(session.user.id);
                }

                const cartData = await getCartItems(sessionId);
                setCartItems(cartData as unknown as CartItemWithProduct[]);

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
    const freeShippingThreshold = 20;
    const shipping = subtotal >= freeShippingThreshold ? 0 : 3.90;
    const total = subtotal + shipping;
    const progressToFreeShipping = Math.min((subtotal / freeShippingThreshold) * 100, 100);
    const amountToFreeShipping = Math.max(freeShippingThreshold - subtotal, 0);
    const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleContinueToShipping = async () => {
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

            const order = await createOrder(
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

            try {
                await fetch("/api/send-order-email", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        orderNumber: order.order_number,
                        customerName: `${formData.firstName} ${formData.lastName}`,
                        customerEmail: formData.email,
                        customerPhone: formData.phone || undefined,
                        shippingAddress: {
                            address: formData.address,
                            apartment: formData.apartment || undefined,
                            city: formData.city,
                            postalCode: formData.postalCode,
                            country: formData.country,
                        },
                        items: cartItems.map((item) => ({
                            name: item.product.name,
                            quantity: item.quantity,
                            price: item.product.price,
                            size: item.size || undefined,
                        })),
                        subtotal,
                        shippingCost: shipping,
                        total,
                        shippingMethod: formData.shippingMethod,
                        paymentMethod: formData.paymentMethod,
                    }),
                });
            } catch (emailError) {
                console.error("Failed to send order email:", emailError);
            }

            if (sessionId) {
                await clearCart(sessionId);
            }

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
                <main className="flex min-h-screen items-center justify-center bg-gray-50">
                    <div className="flex flex-col items-center gap-4">
                        <Loading01 className="size-10 animate-spin text-brand-600" />
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
                <main className="flex min-h-screen items-center justify-center bg-gray-50">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="mx-auto max-w-md px-4 py-16 text-center"
                    >
                        <div className="mx-auto flex size-24 items-center justify-center rounded-full bg-gradient-to-br from-brand-50 to-teal-50">
                            <Package className="size-12 text-brand-400" />
                        </div>
                        <h1 className="mt-6 text-2xl font-bold text-primary">Your cart is empty</h1>
                        <p className="mt-2 text-tertiary">Add some products before checking out.</p>
                        <Button href="/shop" color="primary" size="lg" className="mt-6" iconTrailing={ArrowRight}>
                            Continue Shopping
                        </Button>
                    </motion.div>
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
                <section className="border-b border-secondary bg-white px-4 py-6 md:px-8 lg:px-16">
                    <div className="mx-auto max-w-7xl">
                        <nav className="mb-4 flex items-center gap-2 text-sm text-tertiary">
                            <a href="/" className="transition hover:text-brand-600">Home</a>
                            <span>/</span>
                            <a href="/cart" className="transition hover:text-brand-600">Cart</a>
                            <span>/</span>
                            <span className="text-primary">Checkout</span>
                        </nav>
                        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                            <div>
                                <h1 className="text-2xl font-bold text-primary md:text-3xl">
                                    Secure Checkout
                                </h1>
                                <p className="mt-1 text-tertiary">
                                    {itemCount} item{itemCount > 1 ? "s" : ""} in your order
                                </p>
                            </div>
                            <div className="flex items-center gap-2 rounded-full bg-success-50 px-3 py-1.5">
                                <Lock01 className="size-4 text-success-600" />
                                <span className="text-sm font-medium text-success-700">SSL Secured</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Progress Steps */}
                <section className="border-b border-secondary bg-white px-4 py-4 md:px-8 lg:px-16">
                    <div className="mx-auto max-w-7xl">
                        <div className="flex items-center justify-center gap-2 sm:gap-4">
                            {steps.map((step, index) => (
                                <div key={step.id} className="flex items-center gap-2 sm:gap-4">
                                    <button
                                        onClick={() => currentStep > step.id && setCurrentStep(step.id)}
                                        disabled={currentStep < step.id}
                                        className={`flex items-center gap-2 rounded-full px-3 py-2 transition sm:px-4 ${
                                            currentStep === step.id
                                                ? "bg-brand-600 text-white"
                                                : currentStep > step.id
                                                    ? "bg-success-100 text-success-700 hover:bg-success-200"
                                                    : "bg-gray-100 text-tertiary"
                                        }`}
                                    >
                                        <div className={`flex size-6 items-center justify-center rounded-full ${
                                            currentStep > step.id ? "bg-success-500" : ""
                                        }`}>
                                            {currentStep > step.id ? (
                                                <CheckCircle className="size-5 text-white" />
                                            ) : (
                                                <step.icon className="size-4" />
                                            )}
                                        </div>
                                        <span className="hidden text-sm font-medium sm:block">
                                            {step.label}
                                        </span>
                                    </button>
                                    {index < steps.length - 1 && (
                                        <div className={`h-0.5 w-8 rounded-full sm:w-16 ${
                                            currentStep > step.id ? "bg-success-500" : "bg-gray-200"
                                        }`} />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Checkout Content */}
                <section className="px-4 py-8 md:px-8 md:py-12 lg:px-16">
                    <div className="mx-auto max-w-7xl">
                        <div className="grid gap-8 lg:grid-cols-3 lg:gap-12">
                            {/* Form */}
                            <div className="lg:col-span-2">
                                <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
                                    {/* Step 1: Information */}
                                    {currentStep === 1 && (
                                        <motion.div
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="p-6 sm:p-8"
                                        >
                                            <div className="flex items-center gap-3">
                                                <div className="flex size-10 items-center justify-center rounded-full bg-brand-100">
                                                    <Mail01 className="size-5 text-brand-600" />
                                                </div>
                                                <h2 className="text-xl font-bold text-primary">
                                                    Contact Information
                                                </h2>
                                            </div>
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

                                            <div className="mt-8 flex items-center gap-3">
                                                <div className="flex size-10 items-center justify-center rounded-full bg-brand-100">
                                                    <Home02 className="size-5 text-brand-600" />
                                                </div>
                                                <h2 className="text-xl font-bold text-primary">
                                                    Shipping Address
                                                </h2>
                                            </div>
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

                                            <div className="mt-8 flex flex-col gap-3 border-t border-secondary pt-6 sm:flex-row sm:justify-between">
                                                <Button href="/cart" color="secondary" size="md" iconLeading={ArrowLeft}>
                                                    Return to Cart
                                                </Button>
                                                <Button
                                                    color="primary"
                                                    size="md"
                                                    onClick={handleContinueToShipping}
                                                    isLoading={savingCustomer}
                                                    iconTrailing={ArrowRight}
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
                                            className="p-6 sm:p-8"
                                        >
                                            <div className="flex items-center gap-3">
                                                <div className="flex size-10 items-center justify-center rounded-full bg-brand-100">
                                                    <Truck01 className="size-5 text-brand-600" />
                                                </div>
                                                <h2 className="text-xl font-bold text-primary">
                                                    Shipping Method
                                                </h2>
                                            </div>

                                            <div className="mt-6">
                                                <div className={`rounded-xl border-2 p-5 ${
                                                    shipping === 0
                                                        ? "border-success-300 bg-success-50"
                                                        : "border-brand-300 bg-brand-50"
                                                }`}>
                                                    <div className="flex items-center justify-between">
                                                        <div className="flex items-center gap-4">
                                                            <div className={`flex size-12 items-center justify-center rounded-full ${
                                                                shipping === 0 ? "bg-success-100" : "bg-brand-100"
                                                            }`}>
                                                                <Truck01 className={`size-6 ${
                                                                    shipping === 0 ? "text-success-600" : "text-brand-600"
                                                                }`} />
                                                            </div>
                                                            <div>
                                                                <p className="text-lg font-semibold text-primary">
                                                                    Fast Shipping with Tracking
                                                                </p>
                                                                <p className="text-sm text-tertiary">
                                                                    2 to 4 business days
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="text-right">
                                                            <span className={`text-xl font-bold ${
                                                                shipping === 0 ? "text-success-600" : "text-primary"
                                                            }`}>
                                                                {shipping === 0 ? "FREE" : "€3.90"}
                                                            </span>
                                                            {shipping === 0 && (
                                                                <p className="text-xs text-success-600">You saved €3.90!</p>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="mt-6 rounded-xl bg-gray-50 p-5">
                                                <div className="flex items-start gap-4">
                                                    <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white">
                                                        <Package className="size-5 text-tertiary" />
                                                    </div>
                                                    <div>
                                                        <p className="font-semibold text-primary">Shipping Information</p>
                                                        <ul className="mt-3 space-y-2 text-sm text-tertiary">
                                                            <li className="flex items-center gap-2">
                                                                <CheckCircle className="size-4 text-success-500" />
                                                                Fast shipping with tracking
                                                            </li>
                                                            <li className="flex items-center gap-2">
                                                                <CheckCircle className="size-4 text-success-500" />
                                                                Estimated delivery: 2 to 4 business days
                                                            </li>
                                                            <li className="flex items-center gap-2">
                                                                <CheckCircle className="size-4 text-success-500" />
                                                                Shipping fee: €3.90
                                                            </li>
                                                            <li className="flex items-center gap-2">
                                                                <CheckCircle className="size-4 text-success-500" />
                                                                Free shipping on orders over €20
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="mt-8 flex flex-col gap-3 border-t border-secondary pt-6 sm:flex-row sm:justify-between">
                                                <Button
                                                    color="secondary"
                                                    size="md"
                                                    onClick={() => setCurrentStep(1)}
                                                    iconLeading={ArrowLeft}
                                                >
                                                    Return to Information
                                                </Button>
                                                <Button
                                                    color="primary"
                                                    size="md"
                                                    onClick={handleContinueToPayment}
                                                    isLoading={savingCustomer}
                                                    iconTrailing={ArrowRight}
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
                                            className="p-6 sm:p-8"
                                        >
                                            <div className="flex items-center gap-3">
                                                <div className="flex size-10 items-center justify-center rounded-full bg-brand-100">
                                                    <CreditCard01 className="size-5 text-brand-600" />
                                                </div>
                                                <h2 className="text-xl font-bold text-primary">
                                                    Payment Method
                                                </h2>
                                            </div>

                                            <div className="mt-6 space-y-3">
                                                <label className={`flex cursor-pointer items-center gap-4 rounded-xl border-2 p-4 transition ${
                                                    formData.paymentMethod === "twint"
                                                        ? "border-brand-500 bg-brand-50"
                                                        : "border-secondary bg-white hover:border-brand-300"
                                                }`}>
                                                    <input
                                                        type="radio"
                                                        name="paymentMethod"
                                                        value="twint"
                                                        checked={formData.paymentMethod === "twint"}
                                                        onChange={handleInputChange}
                                                        className="size-5 accent-brand-600"
                                                    />
                                                    <div className="flex size-10 items-center justify-center rounded-lg bg-[#00AAFF]">
                                                        <span className="text-sm font-bold text-white">T</span>
                                                    </div>
                                                    <div className="flex-1">
                                                        <p className="font-semibold text-primary">Twint</p>
                                                        <p className="text-sm text-tertiary">Pay with your Twint app</p>
                                                    </div>
                                                    {formData.paymentMethod === "twint" && (
                                                        <CheckCircle className="size-5 text-brand-600" />
                                                    )}
                                                </label>

                                                <label className={`flex cursor-pointer items-center gap-4 rounded-xl border-2 p-4 transition ${
                                                    formData.paymentMethod === "revolut"
                                                        ? "border-brand-500 bg-brand-50"
                                                        : "border-secondary bg-white hover:border-brand-300"
                                                }`}>
                                                    <input
                                                        type="radio"
                                                        name="paymentMethod"
                                                        value="revolut"
                                                        checked={formData.paymentMethod === "revolut"}
                                                        onChange={handleInputChange}
                                                        className="size-5 accent-brand-600"
                                                    />
                                                    <div className="flex size-10 items-center justify-center rounded-lg bg-black">
                                                        <span className="text-sm font-bold text-white">R</span>
                                                    </div>
                                                    <div className="flex-1">
                                                        <p className="font-semibold text-primary">Revolut</p>
                                                        <p className="text-sm text-tertiary">Pay with Revolut</p>
                                                    </div>
                                                    {formData.paymentMethod === "revolut" && (
                                                        <CheckCircle className="size-5 text-brand-600" />
                                                    )}
                                                </label>

                                                <label className={`flex cursor-pointer items-center gap-4 rounded-xl border-2 p-4 transition ${
                                                    formData.paymentMethod === "cash"
                                                        ? "border-brand-500 bg-brand-50"
                                                        : "border-secondary bg-white hover:border-brand-300"
                                                }`}>
                                                    <input
                                                        type="radio"
                                                        name="paymentMethod"
                                                        value="cash"
                                                        checked={formData.paymentMethod === "cash"}
                                                        onChange={handleInputChange}
                                                        className="size-5 accent-brand-600"
                                                    />
                                                    <div className="flex size-10 items-center justify-center rounded-lg bg-success-500">
                                                        <span className="text-sm font-bold text-white">€</span>
                                                    </div>
                                                    <div className="flex-1">
                                                        <p className="font-semibold text-primary">Cash on Delivery</p>
                                                        <p className="text-sm text-tertiary">Pay when you receive</p>
                                                    </div>
                                                    {formData.paymentMethod === "cash" && (
                                                        <CheckCircle className="size-5 text-brand-600" />
                                                    )}
                                                </label>
                                            </div>

                                            <div className="mt-6 flex items-center gap-3 rounded-xl bg-gray-50 p-4">
                                                <Lock01 className="size-5 text-success-500" />
                                                <span className="text-sm text-tertiary">
                                                    Your payment information is secure and encrypted
                                                </span>
                                            </div>

                                            <div className="mt-8 flex flex-col gap-3 border-t border-secondary pt-6 sm:flex-row sm:justify-between">
                                                <Button
                                                    color="secondary"
                                                    size="md"
                                                    onClick={() => setCurrentStep(2)}
                                                    iconLeading={ArrowLeft}
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
                                                    Place Order - {total.toFixed(2)}€
                                                </Button>
                                            </div>
                                        </motion.div>
                                    )}
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
                                            ? "bg-gradient-to-r from-success-50 to-teal-50 border border-success-200"
                                            : "bg-gradient-to-r from-brand-50 to-teal-50 border border-brand-200"
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

                            {/* Order Summary Sidebar */}
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
                                            {/* Items */}
                                            <div className="space-y-4">
                                                {cartItems.map((item) => (
                                                    <div key={item.id} className="flex gap-4">
                                                        <div className="relative shrink-0">
                                                            <img
                                                                src={item.product.images?.[0] ?? ""}
                                                                alt={item.product.name}
                                                                className="size-16 rounded-lg bg-gray-100 object-cover"
                                                            />
                                                            <span className="absolute -right-2 -top-2 flex size-5 items-center justify-center rounded-full bg-brand-600 text-xs font-semibold text-white">
                                                                {item.quantity}
                                                            </span>
                                                        </div>
                                                        <div className="flex-1 min-w-0">
                                                            <p className="truncate font-medium text-primary">{item.product.name}</p>
                                                            {item.size && <p className="text-xs text-tertiary">Size: {item.size}</p>}
                                                        </div>
                                                        <span className="shrink-0 font-semibold text-primary">
                                                            {(item.product.price * item.quantity).toFixed(2)}€
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>

                                            {/* Summary */}
                                            <div className="mt-6 space-y-3 border-t border-secondary pt-6">
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
                                            </div>

                                            {/* Total */}
                                            <div className="mt-6 flex items-center justify-between border-t border-secondary pt-6">
                                                <span className="text-base font-semibold text-primary">Total</span>
                                                <div className="text-right">
                                                    <span className="text-2xl font-bold text-primary">{total.toFixed(2)}€</span>
                                                    <p className="text-xs text-tertiary">VAT included</p>
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

                                    {/* Trust Badge */}
                                    <div className="mt-4 flex items-center justify-center gap-2 text-sm text-tertiary">
                                        <Shield01 className="size-4 text-success-500" />
                                        <span>Secure checkout with SSL encryption</span>
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
