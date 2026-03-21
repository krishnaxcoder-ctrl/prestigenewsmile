"use client";

import { useState, useEffect, use } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/base/buttons/button";
import {
    Package,
    ArrowLeft,
    Truck01,
    CheckCircle,
    Clock,
    XCircle,
    Download01,
    Mail01,
    Phone01,
    MarkerPin06,
    Loading01,
    Copy01,
} from "@untitledui/icons";
import { Header } from "@/app/components/header";
import { Footer } from "@/app/components/footer";
import {
    supabase,
    getSession,
    type Order,
    type OrderItem,
} from "@/lib/supabase";
import { useToastActions } from "@/components/base/toast/toast";

interface OrderWithItems extends Order {
    items: OrderItem[];
}

const statusConfig = {
    processing: {
        label: "Processing",
        icon: Clock,
        color: "text-warning-600",
        bgColor: "bg-warning-100",
        description: "Your order is being prepared",
    },
    shipped: {
        label: "Shipped",
        icon: Truck01,
        color: "text-blue-600",
        bgColor: "bg-blue-100",
        description: "Your order is on its way",
    },
    delivered: {
        label: "Delivered",
        icon: CheckCircle,
        color: "text-success-600",
        bgColor: "bg-success-100",
        description: "Your order has been delivered",
    },
    cancelled: {
        label: "Cancelled",
        icon: XCircle,
        color: "text-error-600",
        bgColor: "bg-error-100",
        description: "Your order has been cancelled",
    },
};

export default function OrderDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const router = useRouter();
    const toast = useToastActions();
    const [order, setOrder] = useState<OrderWithItems | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        async function fetchOrder() {
            try {
                // Fetch the order
                const { data: orderData, error: orderError } = await supabase
                    .from("orders")
                    .select("*")
                    .eq("id", id)
                    .single();

                if (orderError) {
                    if (orderError.code === "PGRST116") {
                        setError("Order not found");
                    } else {
                        throw orderError;
                    }
                    return;
                }

                // Fetch order items
                const { data: items, error: itemsError } = await supabase
                    .from("order_items")
                    .select("*")
                    .eq("order_id", id);

                if (itemsError) throw itemsError;

                setOrder({
                    ...(orderData as Order),
                    items: (items || []) as OrderItem[],
                });
            } catch (err) {
                console.error("Error fetching order:", err);
                setError("Failed to load order details");
            } finally {
                setLoading(false);
            }
        }

        fetchOrder();
    }, [id]);

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    };

    const formatTime = (dateString: string) => {
        return new Date(dateString).toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
        });
    };

    const copyToClipboard = (text: string, label: string) => {
        navigator.clipboard.writeText(text);
        toast.success("Copied!", `${label} copied to clipboard`);
    };

    if (loading) {
        return (
            <div className="overflow-x-hidden">
                <Header />
                <main className="flex min-h-[60vh] items-center justify-center bg-primary">
                    <Loading01 className="size-8 animate-spin text-brand-600" />
                </main>
                <Footer />
            </div>
        );
    }

    if (error || !order) {
        return (
            <div className="overflow-x-hidden">
                <Header />
                <main className="bg-primary">
                    <div className="mx-auto max-w-4xl px-4 py-16 text-center md:px-8 lg:px-16">
                        <div className="mx-auto flex size-24 items-center justify-center rounded-full bg-error-100">
                            <Package className="size-12 text-error-600" />
                        </div>
                        <h1 className="mt-6 text-2xl font-semibold text-primary">
                            {error || "Order not found"}
                        </h1>
                        <p className="mt-2 text-tertiary">
                            We couldn't find the order you're looking for.
                        </p>
                        <Button href="/account/orders" color="primary" size="lg" className="mt-6">
                            Back to Orders
                        </Button>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

    const status = statusConfig[order.status as keyof typeof statusConfig] || statusConfig.processing;
    const StatusIcon = status.icon;

    return (
        <div className="overflow-x-hidden">
            <Header />
            <main className="bg-primary">
                {/* Hero Header */}
                <div className="relative bg-brand-50 py-12 md:py-16">
                    <div className="absolute inset-0 overflow-hidden">
                        <div
                            className="absolute inset-0 opacity-30"
                            style={{
                                backgroundImage: `radial-gradient(circle at 1px 1px, var(--color-brand-200) 1px, transparent 0)`,
                                backgroundSize: "32px 32px",
                            }}
                        />
                    </div>
                    <div className="relative mx-auto max-w-7xl px-4 md:px-8 lg:px-16">
                        <Button
                            href="/account/orders"
                            color="tertiary"
                            size="sm"
                            iconLeading={ArrowLeft}
                            className="mb-4"
                        >
                            Back to Orders
                        </Button>
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                            <div>
                                <h1 className="text-2xl font-semibold text-primary sm:text-3xl">
                                    Order {order.order_number}
                                </h1>
                                <p className="mt-1 text-tertiary">
                                    Placed on {formatDate(order.created_at)} at {formatTime(order.created_at)}
                                </p>
                            </div>
                            <div className={`inline-flex items-center gap-2 rounded-full px-4 py-2 ${status.bgColor}`}>
                                <StatusIcon className={`size-5 ${status.color}`} />
                                <span className={`font-semibold ${status.color}`}>{status.label}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Order Content */}
                <section className="px-4 py-12 md:px-8 md:py-16 lg:px-16">
                    <div className="mx-auto max-w-7xl">
                        <div className="grid gap-8 lg:grid-cols-3">
                            {/* Main Content */}
                            <div className="lg:col-span-2 space-y-8">
                                {/* Order Status */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="rounded-2xl border border-secondary bg-primary p-6"
                                >
                                    <h2 className="text-lg font-semibold text-primary">Order Status</h2>
                                    <div className="mt-4 flex items-center gap-4">
                                        <div className={`flex size-12 items-center justify-center rounded-full ${status.bgColor}`}>
                                            <StatusIcon className={`size-6 ${status.color}`} />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-primary">{status.label}</p>
                                            <p className="text-sm text-tertiary">{status.description}</p>
                                        </div>
                                    </div>

                                    {order.tracking_number && (
                                        <div className="mt-6 rounded-xl bg-secondary p-4">
                                            <p className="text-sm text-tertiary">Tracking Number</p>
                                            <div className="mt-1 flex items-center gap-2">
                                                <span className="font-mono font-semibold text-primary">
                                                    {order.tracking_number}
                                                </span>
                                                <button
                                                    onClick={() => copyToClipboard(order.tracking_number!, "Tracking number")}
                                                    className="text-tertiary transition hover:text-primary"
                                                >
                                                    <Copy01 className="size-4" />
                                                </button>
                                            </div>
                                        </div>
                                    )}

                                    {order.delivery_date && (
                                        <p className="mt-4 text-sm text-tertiary">
                                            {order.status === "delivered" ? "Delivered on: " : "Expected delivery: "}
                                            <span className="font-medium text-primary">
                                                {formatDate(order.delivery_date)}
                                            </span>
                                        </p>
                                    )}
                                </motion.div>

                                {/* Order Items */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 }}
                                    className="rounded-2xl border border-secondary bg-primary p-6"
                                >
                                    <h2 className="text-lg font-semibold text-primary">
                                        Items ({order.items.length})
                                    </h2>
                                    <div className="mt-4 divide-y divide-secondary">
                                        {order.items.map((item) => (
                                            <div key={item.id} className="flex gap-4 py-4 first:pt-0 last:pb-0">
                                                <img
                                                    src={item.image || "https://via.placeholder.com/80"}
                                                    alt={item.name}
                                                    className="size-20 rounded-lg bg-secondary object-cover"
                                                />
                                                <div className="flex flex-1 flex-col justify-center">
                                                    <p className="font-semibold text-primary">{item.name}</p>
                                                    <p className="mt-1 text-sm text-tertiary">
                                                        Qty: {item.quantity}
                                                        {item.size && ` • Size: ${item.size}`}
                                                        {item.color && ` • Color: ${item.color}`}
                                                    </p>
                                                </div>
                                                <div className="flex flex-col items-end justify-center">
                                                    <span className="font-semibold text-primary">
                                                        CHF {(Number(item.price) * item.quantity).toFixed(2)}
                                                    </span>
                                                    {item.quantity > 1 && (
                                                        <span className="text-sm text-tertiary">
                                                            CHF {Number(item.price).toFixed(2)} each
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>

                                {/* Shipping Address */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className="rounded-2xl border border-secondary bg-primary p-6"
                                >
                                    <h2 className="text-lg font-semibold text-primary">Shipping Address</h2>
                                    <div className="mt-4 space-y-3">
                                        <div className="flex items-start gap-3">
                                            <MarkerPin06 className="mt-0.5 size-5 shrink-0 text-tertiary" />
                                            <div>
                                                <p className="font-medium text-primary">
                                                    {order.first_name} {order.last_name}
                                                </p>
                                                <p className="text-tertiary">
                                                    {order.address}
                                                    {order.apartment && `, ${order.apartment}`}
                                                </p>
                                                <p className="text-tertiary">
                                                    {order.postal_code} {order.city}
                                                </p>
                                                <p className="text-tertiary">{order.country}</p>
                                            </div>
                                        </div>
                                        {order.phone && (
                                            <div className="flex items-center gap-3">
                                                <Phone01 className="size-5 text-tertiary" />
                                                <span className="text-tertiary">{order.phone}</span>
                                            </div>
                                        )}
                                        <div className="flex items-center gap-3">
                                            <Mail01 className="size-5 text-tertiary" />
                                            <span className="text-tertiary">{order.email}</span>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Sidebar */}
                            <div className="space-y-6">
                                {/* Order Summary */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="rounded-2xl border border-secondary bg-primary p-6"
                                >
                                    <h2 className="text-lg font-semibold text-primary">Order Summary</h2>
                                    <div className="mt-4 space-y-3">
                                        <div className="flex justify-between text-sm">
                                            <span className="text-tertiary">Subtotal</span>
                                            <span className="text-primary">CHF {Number(order.subtotal).toFixed(2)}</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-tertiary">Shipping ({order.shipping_method})</span>
                                            <span className="text-primary">
                                                {Number(order.shipping_cost) === 0 ? "Free" : `CHF ${Number(order.shipping_cost).toFixed(2)}`}
                                            </span>
                                        </div>
                                        <div className="border-t border-secondary pt-3">
                                            <div className="flex justify-between">
                                                <span className="font-semibold text-primary">Total</span>
                                                <span className="font-semibold text-primary">
                                                    CHF {Number(order.total).toFixed(2)}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Payment Method */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                    className="rounded-2xl border border-secondary bg-primary p-6"
                                >
                                    <h2 className="text-lg font-semibold text-primary">Payment Method</h2>
                                    <p className="mt-2 capitalize text-tertiary">{order.payment_method}</p>
                                </motion.div>

                                {/* Actions */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 }}
                                    className="space-y-3"
                                >
                                    <Button
                                        color="secondary"
                                        size="md"
                                        iconLeading={Download01}
                                        className="w-full justify-center"
                                    >
                                        Download Invoice
                                    </Button>
                                    <Button
                                        href={`mailto:support@prestige-smile.com?subject=Order ${order.order_number}`}
                                        color="tertiary"
                                        size="md"
                                        iconLeading={Mail01}
                                        className="w-full justify-center"
                                    >
                                        Contact Support
                                    </Button>
                                </motion.div>

                                {/* Order Info */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6 }}
                                    className="rounded-2xl bg-secondary p-6"
                                >
                                    <h3 className="text-sm font-semibold uppercase tracking-wider text-tertiary">
                                        Order Information
                                    </h3>
                                    <div className="mt-4 space-y-3 text-sm">
                                        <div className="flex justify-between">
                                            <span className="text-tertiary">Order Number</span>
                                            <button
                                                onClick={() => copyToClipboard(order.order_number, "Order number")}
                                                className="flex items-center gap-1 font-medium text-primary hover:text-brand-600"
                                            >
                                                {order.order_number}
                                                <Copy01 className="size-3" />
                                            </button>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-tertiary">Order Date</span>
                                            <span className="text-primary">{formatDate(order.created_at)}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-tertiary">Shipping Method</span>
                                            <span className="capitalize text-primary">{order.shipping_method}</span>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
