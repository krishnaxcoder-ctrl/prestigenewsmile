"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/base/buttons/button";
import { Package, Eye, Download01, ChevronDown, Loading01 } from "@untitledui/icons";
import { Header } from "@/app/components/header";
import { Footer } from "@/app/components/footer";
import { supabase, type Order, type OrderItem } from "@/lib/supabase";

interface OrderWithItems extends Order {
    items: OrderItem[];
}

const statusFilters = ["All", "processing", "shipped", "delivered", "cancelled"];

const statusLabels: Record<string, string> = {
    processing: "Processing",
    shipped: "Shipped",
    delivered: "Delivered",
    cancelled: "Cancelled",
};

export default function OrdersPage() {
    const [orders, setOrders] = useState<OrderWithItems[]>([]);
    const [loading, setLoading] = useState(true);
    const [statusFilter, setStatusFilter] = useState("All");
    const [expandedOrder, setExpandedOrder] = useState<string | null>(null);

    useEffect(() => {
        async function fetchOrders() {
            try {
                // Fetch all orders
                const { data: ordersData, error: ordersError } = await supabase
                    .from("orders")
                    .select("*")
                    .order("created_at", { ascending: false });

                if (ordersError) throw ordersError;

                // Fetch items for each order
                const ordersWithItems: OrderWithItems[] = await Promise.all(
                    (ordersData || []).map(async (order) => {
                        const { data: items } = await supabase
                            .from("order_items")
                            .select("*")
                            .eq("order_id", order.id);
                        return {
                            ...order,
                            items: items || [],
                        } as OrderWithItems;
                    })
                );

                setOrders(ordersWithItems);
            } catch (error) {
                console.error("Error fetching orders:", error);
            } finally {
                setLoading(false);
            }
        }
        fetchOrders();
    }, []);

    const filteredOrders = orders.filter((order) => {
        if (statusFilter === "All") return true;
        return order.status === statusFilter;
    });

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    };

    if (loading) {
        return (
            <div className="overflow-x-hidden">
                <Header />
                <main className="flex min-h-screen items-center justify-center bg-primary">
                    <div className="flex flex-col items-center gap-4">
                        <Loading01 className="size-8 animate-spin text-brand-600" />
                        <p className="text-tertiary">Loading orders...</p>
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
                            My Orders
                        </h1>
                        <nav className="mt-4 flex items-center justify-center gap-2 text-sm text-tertiary">
                            <a href="/" className="transition hover:text-brand-600">Home</a>
                            <span>/</span>
                            <a href="/account" className="transition hover:text-brand-600">Account</a>
                            <span>/</span>
                            <span className="text-primary">Orders</span>
                        </nav>
                    </div>
                </div>

                {/* Orders Content */}
                <section className="px-4 py-12 md:px-8 md:py-16 lg:px-16">
                    <div className="mx-auto max-w-4xl">
                        {/* Filters */}
                        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
                            <div className="flex flex-wrap gap-2">
                                {statusFilters.map((status) => (
                                    <button
                                        key={status}
                                        onClick={() => setStatusFilter(status)}
                                        className={`rounded-full px-4 py-2 text-sm font-medium capitalize transition ${
                                            statusFilter === status
                                                ? "bg-brand-600 text-white"
                                                : "bg-secondary text-tertiary hover:text-primary"
                                        }`}
                                    >
                                        {status === "All" ? "All" : statusLabels[status]}
                                    </button>
                                ))}
                            </div>
                            <p className="text-sm text-tertiary">
                                {filteredOrders.length} orders
                            </p>
                        </div>

                        {/* Orders List */}
                        <div className="space-y-4">
                            {filteredOrders.map((order, index) => (
                                <motion.div
                                    key={order.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: index * 0.1 }}
                                    className="rounded-2xl border border-secondary bg-primary"
                                >
                                    {/* Order Header */}
                                    <div className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
                                        <div className="flex items-center gap-4">
                                            <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-brand-50">
                                                <Package className="size-6 text-brand-600" />
                                            </div>
                                            <div>
                                                <p className="font-semibold text-primary">{order.order_number}</p>
                                                <p className="text-sm text-tertiary">{formatDate(order.created_at)}</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-wrap items-center gap-3">
                                            <span
                                                className={`rounded-full px-3 py-1 text-xs font-semibold capitalize ${
                                                    order.status === "delivered"
                                                        ? "bg-success-100 text-success-700"
                                                        : order.status === "shipped"
                                                        ? "bg-blue-100 text-blue-700"
                                                        : order.status === "processing"
                                                        ? "bg-warning-100 text-warning-700"
                                                        : "bg-error-100 text-error-700"
                                                }`}
                                            >
                                                {statusLabels[order.status]}
                                            </span>
                                            <span className="font-semibold text-primary">
                                                ${order.total.toFixed(2)}
                                            </span>
                                            <button
                                                onClick={() => setExpandedOrder(
                                                    expandedOrder === order.id ? null : order.id
                                                )}
                                                className="flex items-center gap-1 text-sm text-brand-600 transition hover:text-brand-700"
                                            >
                                                Details
                                                <ChevronDown
                                                    className={`size-4 transition ${
                                                        expandedOrder === order.id ? "rotate-180" : ""
                                                    }`}
                                                />
                                            </button>
                                        </div>
                                    </div>

                                    {/* Order Details (Expanded) */}
                                    {expandedOrder === order.id && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            exit={{ opacity: 0, height: 0 }}
                                            className="border-t border-secondary"
                                        >
                                            {/* Items */}
                                            <div className="divide-y divide-secondary p-6">
                                                {order.items.map((item, i) => (
                                                    <div
                                                        key={item.id}
                                                        className={`flex items-center gap-4 ${i > 0 ? "pt-4" : ""} ${i < order.items.length - 1 ? "pb-4" : ""}`}
                                                    >
                                                        <img
                                                            src={item.image || "https://via.placeholder.com/64"}
                                                            alt={item.name}
                                                            className="size-16 rounded-lg bg-secondary object-cover"
                                                        />
                                                        <div className="flex-1">
                                                            <p className="font-medium text-primary">{item.name}</p>
                                                            <p className="text-sm text-tertiary">
                                                                Qty: {item.quantity}
                                                                {item.size && ` • Size: ${item.size}`}
                                                            </p>
                                                        </div>
                                                        <span className="font-medium text-primary">
                                                            ${(item.price * item.quantity).toFixed(2)}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>

                                            {/* Additional Info */}
                                            <div className="flex flex-wrap items-center justify-between gap-4 border-t border-secondary bg-secondary p-6">
                                                <div className="space-y-1 text-sm">
                                                    {order.delivery_date && (
                                                        <p className="text-tertiary">
                                                            Delivered on:{" "}
                                                            <span className="text-primary">{formatDate(order.delivery_date)}</span>
                                                        </p>
                                                    )}
                                                    {order.tracking_number && (
                                                        <p className="text-tertiary">
                                                            Tracking:{" "}
                                                            <span className="text-brand-600">{order.tracking_number}</span>
                                                        </p>
                                                    )}
                                                    <p className="text-tertiary">
                                                        Shipping: {order.first_name} {order.last_name}, {order.address}, {order.city} {order.postal_code}, {order.country}
                                                    </p>
                                                </div>
                                                <div className="flex gap-2">
                                                    <Button
                                                        color="secondary"
                                                        size="sm"
                                                        iconLeading={Eye}
                                                    >
                                                        View Details
                                                    </Button>
                                                    <Button
                                                        color="secondary"
                                                        size="sm"
                                                        iconLeading={Download01}
                                                    >
                                                        Invoice
                                                    </Button>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </motion.div>
                            ))}
                        </div>

                        {/* Empty State */}
                        {filteredOrders.length === 0 && (
                            <div className="py-16 text-center">
                                <div className="mx-auto flex size-24 items-center justify-center rounded-full bg-secondary">
                                    <Package className="size-12 text-tertiary" />
                                </div>
                                <h2 className="mt-6 text-xl font-semibold text-primary">
                                    No orders found
                                </h2>
                                <p className="mt-2 text-tertiary">
                                    {statusFilter === "All"
                                        ? "You haven't placed any orders yet."
                                        : `You don't have any ${statusLabels[statusFilter].toLowerCase()} orders.`}
                                </p>
                                <Button href="/shop" color="primary" size="lg" className="mt-6">
                                    Start Shopping
                                </Button>
                            </div>
                        )}
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
