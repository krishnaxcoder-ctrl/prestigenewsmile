"use client";

import { Suspense, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { ArrowRight, SearchLg } from "@untitledui/icons";
import { getAllOrders, type Order } from "@/lib/supabase";

const statusStyles: Record<Order["status"], string> = {
    processing: "bg-warning-100 text-warning-700",
    shipped: "bg-blue-100 text-blue-700",
    delivered: "bg-success-100 text-success-700",
    cancelled: "bg-error-100 text-error-700",
};

const statusOptions: Array<{ value: "all" | Order["status"]; label: string }> = [
    { value: "all", label: "All" },
    { value: "processing", label: "Processing" },
    { value: "shipped", label: "Shipped" },
    { value: "delivered", label: "Delivered" },
    { value: "cancelled", label: "Cancelled" },
];

function formatDate(iso: string) {
    return new Date(iso).toLocaleString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
    });
}

function OrdersList() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const initialStatus = (searchParams.get("status") as Order["status"] | null) ?? "all";
    const [status, setStatus] = useState<"all" | Order["status"]>(initialStatus as "all" | Order["status"]);
    const [query, setQuery] = useState("");
    const [orders, setOrders] = useState<Order[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let alive = true;
        getAllOrders()
            .then((data) => {
                if (alive) setOrders(data);
            })
            .catch((err) => {
                console.error(err);
                if (alive) setError("Could not load orders.");
            })
            .finally(() => {
                if (alive) setLoading(false);
            });
        return () => {
            alive = false;
        };
    }, []);

    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase();
        return orders.filter((o) => {
            if (status !== "all" && o.status !== status) return false;
            if (!q) return true;
            return (
                o.order_number.toLowerCase().includes(q) ||
                o.email.toLowerCase().includes(q) ||
                `${o.first_name} ${o.last_name}`.toLowerCase().includes(q)
            );
        });
    }, [orders, status, query]);

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-light text-primary" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    Orders
                </h1>
                <p className="mt-1 text-sm text-tertiary">{orders.length} total · {filtered.length} shown</p>
            </div>

            <div className="flex flex-col gap-3 rounded-xl border border-secondary bg-white p-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-wrap gap-2">
                    {statusOptions.map((opt) => (
                        <button
                            key={opt.value}
                            onClick={() => setStatus(opt.value)}
                            className={
                                status === opt.value
                                    ? "rounded-full bg-brand-600 px-3 py-1.5 text-xs font-semibold text-white"
                                    : "rounded-full border border-secondary px-3 py-1.5 text-xs font-medium text-secondary hover:border-brand-300 hover:text-brand-700"
                            }
                        >
                            {opt.label}
                        </button>
                    ))}
                </div>
                <div className="relative w-full sm:max-w-xs">
                    <SearchLg className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-tertiary" />
                    <input
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search order #, email, name"
                        className="w-full rounded-lg border border-secondary bg-white py-2 pl-9 pr-3 text-sm text-primary placeholder:text-tertiary focus:border-brand-500 focus:outline-none"
                    />
                </div>
            </div>

            {loading ? (
                <div className="flex items-center justify-center py-20">
                    <div className="size-8 animate-spin rounded-full border-2 border-brand-600 border-t-transparent" />
                </div>
            ) : error ? (
                <div className="rounded-xl border border-error-200 bg-error-50 p-6 text-sm text-error-700">{error}</div>
            ) : filtered.length === 0 ? (
                <div className="rounded-xl border border-secondary bg-white py-16 text-center text-sm text-tertiary">
                    No orders match the current filter.
                </div>
            ) : (
                <div className="overflow-x-auto rounded-2xl border border-secondary bg-white">
                    <table className="w-full min-w-[720px] text-left text-sm">
                        <thead className="bg-secondary/40 text-xs uppercase tracking-wider text-tertiary">
                            <tr>
                                <th className="px-4 py-3 font-medium">Order</th>
                                <th className="px-4 py-3 font-medium">Customer</th>
                                <th className="px-4 py-3 font-medium">Date</th>
                                <th className="px-4 py-3 font-medium">Payment</th>
                                <th className="px-4 py-3 font-medium">Status</th>
                                <th className="px-4 py-3 text-right font-medium">Total</th>
                                <th className="px-4 py-3 text-right font-medium">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-secondary">
                            {filtered.map((o) => (
                                <tr
                                    key={o.id}
                                    onClick={() => router.push(`/admin/orders/${o.id}`)}
                                    className="cursor-pointer hover:bg-secondary/20"
                                >
                                    <td className="px-4 py-3">
                                        <span className="font-semibold text-primary">{o.order_number}</span>
                                        {o.tracking_number && (
                                            <div className="text-xs text-tertiary">Tracking: {o.tracking_number}</div>
                                        )}
                                    </td>
                                    <td className="px-4 py-3">
                                        <div className="font-medium text-primary">{o.first_name} {o.last_name}</div>
                                        <div className="text-xs text-tertiary">{o.email}</div>
                                        {o.phone && <div className="text-xs text-tertiary">{o.phone}</div>}
                                    </td>
                                    <td className="px-4 py-3 text-tertiary">{formatDate(o.created_at)}</td>
                                    <td className="px-4 py-3 capitalize text-secondary">{o.payment_method}</td>
                                    <td className="px-4 py-3">
                                        <span className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-semibold capitalize ${statusStyles[o.status]}`}>
                                            {o.status}
                                        </span>
                                    </td>
                                    <td className="px-4 py-3 text-right font-semibold text-primary">
                                        {Number(o.total).toFixed(2)}€
                                    </td>
                                    <td className="px-4 py-3 text-right" onClick={(e) => e.stopPropagation()}>
                                        <Link
                                            href={`/admin/orders/${o.id}`}
                                            className="inline-flex items-center gap-1 rounded-lg border border-secondary px-3 py-1.5 text-xs font-medium text-secondary hover:border-brand-300 hover:text-brand-700"
                                        >
                                            View <ArrowRight className="size-3.5" />
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}

export default function AdminOrdersPage() {
    return (
        <Suspense
            fallback={
                <div className="flex items-center justify-center py-20">
                    <div className="size-8 animate-spin rounded-full border-2 border-brand-600 border-t-transparent" />
                </div>
            }
        >
            <OrdersList />
        </Suspense>
    );
}
