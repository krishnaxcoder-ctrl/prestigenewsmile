"use client";

import { use, useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Save01, Truck01, Clock, CheckCircle, XCircle } from "@untitledui/icons";
import {
    getOrderWithItems,
    updateOrderStatus,
    updateOrderTracking,
    type Order,
    type OrderItem,
} from "@/lib/supabase";

const statusStyles: Record<Order["status"], string> = {
    processing: "bg-warning-100 text-warning-700 border-warning-200",
    shipped: "bg-blue-100 text-blue-700 border-blue-200",
    delivered: "bg-success-100 text-success-700 border-success-200",
    cancelled: "bg-error-100 text-error-700 border-error-200",
};

const statusSequence: Order["status"][] = ["processing", "shipped", "delivered", "cancelled"];

const statusMeta: Record<Order["status"], { label: string; icon: typeof Clock }> = {
    processing: { label: "Processing", icon: Clock },
    shipped: { label: "Shipped", icon: Truck01 },
    delivered: { label: "Delivered", icon: CheckCircle },
    cancelled: { label: "Cancelled", icon: XCircle },
};

function formatDateTime(iso: string) {
    return new Date(iso).toLocaleString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
    });
}

export default function AdminOrderDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const [order, setOrder] = useState<Order | null>(null);
    const [items, setItems] = useState<OrderItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [savingStatus, setSavingStatus] = useState(false);
    const [savingTracking, setSavingTracking] = useState(false);
    const [tracking, setTracking] = useState("");
    const [deliveryDate, setDeliveryDate] = useState("");
    const [flash, setFlash] = useState<string | null>(null);

    useEffect(() => {
        let alive = true;
        getOrderWithItems(id)
            .then(({ order, items }) => {
                if (!alive) return;
                setOrder(order);
                setItems(items);
                setTracking(order.tracking_number || "");
                setDeliveryDate(order.delivery_date || "");
            })
            .catch((err) => {
                console.error(err);
                if (alive) setError("Could not load order.");
            })
            .finally(() => {
                if (alive) setLoading(false);
            });
        return () => {
            alive = false;
        };
    }, [id]);

    async function handleStatusChange(next: Order["status"]) {
        if (!order || order.status === next) return;
        setSavingStatus(true);
        setFlash(null);
        try {
            const updated = await updateOrderStatus(order.id, next);
            setOrder(updated);
            setFlash(`Status updated to ${next}.`);
        } catch (err) {
            console.error(err);
            setFlash("Failed to update status.");
        } finally {
            setSavingStatus(false);
        }
    }

    async function handleTrackingSave() {
        if (!order) return;
        setSavingTracking(true);
        setFlash(null);
        try {
            const updated = await updateOrderTracking(
                order.id,
                tracking.trim() || null,
                deliveryDate || null,
            );
            setOrder(updated);
            setFlash("Shipping details saved.");
        } catch (err) {
            console.error(err);
            setFlash("Failed to save shipping details.");
        } finally {
            setSavingTracking(false);
        }
    }

    if (loading) {
        return (
            <div className="flex items-center justify-center py-20">
                <div className="size-8 animate-spin rounded-full border-2 border-brand-600 border-t-transparent" />
            </div>
        );
    }

    if (error || !order) {
        return (
            <div className="space-y-4">
                <Link href="/admin/orders" className="inline-flex items-center gap-2 text-sm text-tertiary hover:text-primary">
                    <ArrowLeft className="size-4" /> Back to orders
                </Link>
                <div className="rounded-xl border border-error-200 bg-error-50 p-6 text-sm text-error-700">
                    {error ?? "Order not found."}
                </div>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                    <Link href="/admin/orders" className="inline-flex items-center gap-2 text-sm text-tertiary hover:text-primary">
                        <ArrowLeft className="size-4" /> Back to orders
                    </Link>
                    <h1 className="mt-2 text-2xl font-light text-primary" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                        {order.order_number}
                    </h1>
                    <p className="mt-1 text-sm text-tertiary">Placed {formatDateTime(order.created_at)}</p>
                </div>
                <span className={`inline-flex w-fit items-center gap-1 rounded-full border px-3 py-1 text-xs font-semibold capitalize ${statusStyles[order.status]}`}>
                    {order.status}
                </span>
            </div>

            {flash && (
                <div className="rounded-lg border border-brand-200 bg-brand-50 px-4 py-3 text-sm text-brand-800">
                    {flash}
                </div>
            )}

            <div className="grid gap-6 lg:grid-cols-3">
                <div className="space-y-6 lg:col-span-2">
                    <div className="rounded-2xl border border-secondary bg-white">
                        <div className="border-b border-secondary px-6 py-4">
                            <h2 className="text-sm font-semibold uppercase tracking-wider text-tertiary">Items</h2>
                        </div>
                        <div className="divide-y divide-secondary">
                            {items.map((item) => (
                                <div key={item.id} className="flex items-center gap-4 px-6 py-4">
                                    {item.image && (
                                        // eslint-disable-next-line @next/next/no-img-element
                                        <img src={item.image} alt={item.name} className="size-16 rounded-lg object-cover" />
                                    )}
                                    <div className="flex-1">
                                        <p className="font-medium text-primary">{item.name}</p>
                                        <p className="text-xs text-tertiary">
                                            Qty {item.quantity}
                                            {item.size ? ` · Size ${item.size}` : ""}
                                            {item.color ? ` · ${item.color}` : ""}
                                        </p>
                                    </div>
                                    <p className="font-semibold text-primary">
                                        {(Number(item.price) * item.quantity).toFixed(2)}€
                                    </p>
                                </div>
                            ))}
                        </div>
                        <div className="space-y-2 border-t border-secondary px-6 py-4 text-sm">
                            <div className="flex justify-between text-secondary">
                                <span>Subtotal</span>
                                <span>{Number(order.subtotal).toFixed(2)}€</span>
                            </div>
                            <div className="flex justify-between text-secondary">
                                <span>Shipping</span>
                                <span>{Number(order.shipping_cost).toFixed(2)}€</span>
                            </div>
                            <div className="flex justify-between pt-2 text-base font-semibold text-primary">
                                <span>Total</span>
                                <span>{Number(order.total).toFixed(2)}€</span>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-2xl border border-secondary bg-white">
                        <div className="border-b border-secondary px-6 py-4">
                            <h2 className="text-sm font-semibold uppercase tracking-wider text-tertiary">Shipping &amp; tracking</h2>
                        </div>
                        <div className="space-y-4 px-6 py-5 text-sm">
                            <div>
                                <label className="mb-1 block text-xs font-medium text-tertiary">Tracking number</label>
                                <input
                                    value={tracking}
                                    onChange={(e) => setTracking(e.target.value)}
                                    placeholder="e.g. CH-1234567890"
                                    className="w-full rounded-lg border border-secondary px-3 py-2 text-primary focus:border-brand-500 focus:outline-none"
                                />
                            </div>
                            <div>
                                <label className="mb-1 block text-xs font-medium text-tertiary">Estimated delivery date</label>
                                <input
                                    type="date"
                                    value={deliveryDate ? deliveryDate.slice(0, 10) : ""}
                                    onChange={(e) => setDeliveryDate(e.target.value)}
                                    className="w-full rounded-lg border border-secondary px-3 py-2 text-primary focus:border-brand-500 focus:outline-none"
                                />
                            </div>
                            <button
                                onClick={handleTrackingSave}
                                disabled={savingTracking}
                                className="inline-flex items-center gap-2 rounded-lg bg-primary_solid px-4 py-2 text-sm font-semibold text-white hover:opacity-90 disabled:opacity-50"
                            >
                                <Save01 className="size-4" />
                                {savingTracking ? "Saving..." : "Save shipping details"}
                            </button>
                        </div>
                    </div>
                </div>

                <div className="space-y-6">
                    <div className="rounded-2xl border border-secondary bg-white">
                        <div className="border-b border-secondary px-6 py-4">
                            <h2 className="text-sm font-semibold uppercase tracking-wider text-tertiary">Customer</h2>
                        </div>
                        <div className="space-y-1 px-6 py-5 text-sm">
                            <p className="font-medium text-primary">{order.first_name} {order.last_name}</p>
                            <p className="text-secondary">{order.email}</p>
                            {order.phone && <p className="text-secondary">{order.phone}</p>}
                            {order.user_id ? (
                                <p className="pt-2 text-xs text-tertiary">Registered customer</p>
                            ) : (
                                <p className="pt-2 text-xs text-tertiary">Guest checkout</p>
                            )}
                        </div>
                    </div>

                    <div className="rounded-2xl border border-secondary bg-white">
                        <div className="border-b border-secondary px-6 py-4">
                            <h2 className="text-sm font-semibold uppercase tracking-wider text-tertiary">Shipping address</h2>
                        </div>
                        <div className="space-y-1 px-6 py-5 text-sm text-secondary">
                            <p>{order.address}</p>
                            {order.apartment && <p>{order.apartment}</p>}
                            <p>{order.postal_code} {order.city}</p>
                            <p>{order.country}</p>
                            <p className="pt-2 text-xs text-tertiary">
                                Method: <span className="capitalize">{order.shipping_method}</span>
                            </p>
                            <p className="text-xs text-tertiary">
                                Payment: <span className="capitalize">{order.payment_method}</span>
                            </p>
                        </div>
                    </div>

                    <div className="rounded-2xl border border-secondary bg-white">
                        <div className="border-b border-secondary px-6 py-4">
                            <h2 className="text-sm font-semibold uppercase tracking-wider text-tertiary">Update status</h2>
                        </div>
                        <div className="space-y-2 px-4 py-4">
                            {statusSequence.map((s) => {
                                const Icon = statusMeta[s].icon;
                                const active = order.status === s;
                                return (
                                    <button
                                        key={s}
                                        onClick={() => handleStatusChange(s)}
                                        disabled={savingStatus || active}
                                        className={
                                            active
                                                ? `flex w-full items-center gap-3 rounded-lg border px-3 py-2 text-sm font-semibold ${statusStyles[s]}`
                                                : "flex w-full items-center gap-3 rounded-lg border border-secondary px-3 py-2 text-sm font-medium text-secondary hover:border-brand-300 hover:text-brand-700 disabled:opacity-50"
                                        }
                                    >
                                        <Icon className="size-4" />
                                        <span className="flex-1 text-left capitalize">{statusMeta[s].label}</span>
                                        {active && <span className="text-xs">Current</span>}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
