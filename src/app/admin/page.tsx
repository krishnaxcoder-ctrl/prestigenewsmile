"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
    ShoppingBag01,
    CurrencyEuro,
    Package,
    Users01,
    AlertTriangle,
    Clock,
    Truck01,
    CheckCircle,
    XCircle,
    ArrowRight,
} from "@untitledui/icons";
import { getAdminOverviewStats, type AdminOverviewStats, type Order } from "@/lib/supabase";

const statusStyles: Record<Order["status"], string> = {
    processing: "bg-warning-100 text-warning-700",
    shipped: "bg-blue-100 text-blue-700",
    delivered: "bg-success-100 text-success-700",
    cancelled: "bg-error-100 text-error-700",
};

const statusIcons: Record<Order["status"], typeof Clock> = {
    processing: Clock,
    shipped: Truck01,
    delivered: CheckCircle,
    cancelled: XCircle,
};

function formatEuro(amount: number) {
    return `${amount.toFixed(2)}€`;
}

function formatDate(iso: string) {
    return new Date(iso).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
    });
}

export default function AdminDashboardPage() {
    const [stats, setStats] = useState<AdminOverviewStats | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let alive = true;
        getAdminOverviewStats()
            .then((data) => {
                if (alive) setStats(data);
            })
            .catch((err) => {
                console.error("Error loading admin stats", err);
                if (alive) setError("Could not load dashboard stats.");
            })
            .finally(() => {
                if (alive) setLoading(false);
            });
        return () => {
            alive = false;
        };
    }, []);

    if (loading) {
        return (
            <div className="flex items-center justify-center py-20">
                <div className="size-8 animate-spin rounded-full border-2 border-brand-600 border-t-transparent" />
            </div>
        );
    }

    if (error || !stats) {
        return (
            <div className="rounded-xl border border-error-200 bg-error-50 p-6 text-sm text-error-700">
                {error ?? "No stats available."}
            </div>
        );
    }

    const kpis = [
        {
            label: "Orders (Total)",
            value: stats.ordersTotal.toString(),
            sub: `${stats.ordersToday} today · ${stats.ordersWeek} this week`,
            icon: ShoppingBag01,
            color: "text-brand-600 bg-brand-50",
        },
        {
            label: "Revenue (Total)",
            value: formatEuro(stats.revenueTotal),
            sub: `${formatEuro(stats.revenueWeek)} this week`,
            icon: CurrencyEuro,
            color: "text-success-600 bg-success-50",
        },
        {
            label: "Products",
            value: stats.productsTotal.toString(),
            sub: `${stats.productsOutOfStock} out of stock`,
            icon: Package,
            color: "text-blue-600 bg-blue-50",
        },
        {
            label: "Customers",
            value: stats.customersTotal.toString(),
            sub: "Registered profiles",
            icon: Users01,
            color: "text-warning-600 bg-warning-50",
        },
    ];

    const statusCards: Array<{ status: Order["status"]; label: string }> = [
        { status: "processing", label: "Processing" },
        { status: "shipped", label: "Shipped" },
        { status: "delivered", label: "Delivered" },
        { status: "cancelled", label: "Cancelled" },
    ];

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-2xl font-light text-primary" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    Dashboard
                </h1>
                <p className="mt-1 text-sm text-tertiary">Overview of orders, revenue, inventory, and customers.</p>
            </div>

            {stats.productsOutOfStock > 0 && (
                <div className="flex items-start gap-3 rounded-xl border border-warning-200 bg-warning-50 p-4">
                    <AlertTriangle className="size-5 shrink-0 text-warning-600" />
                    <div className="flex-1 text-sm text-warning-800">
                        <p className="font-semibold">Low inventory alert</p>
                        <p className="text-warning-700">
                            {stats.productsOutOfStock} product{stats.productsOutOfStock === 1 ? " is" : "s are"} marked out of stock.
                        </p>
                    </div>
                    <Link href="/admin/products" className="text-sm font-semibold text-warning-800 hover:text-warning-900">
                        Review →
                    </Link>
                </div>
            )}

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {kpis.map((kpi) => (
                    <div key={kpi.label} className="rounded-2xl border border-secondary bg-white p-6">
                        <div className="flex items-center justify-between">
                            <p className="text-xs uppercase tracking-wider text-tertiary">{kpi.label}</p>
                            <div className={`flex size-9 items-center justify-center rounded-full ${kpi.color}`}>
                                <kpi.icon className="size-5" />
                            </div>
                        </div>
                        <p className="mt-3 text-2xl font-semibold text-primary">{kpi.value}</p>
                        <p className="mt-1 text-xs text-tertiary">{kpi.sub}</p>
                    </div>
                ))}
            </div>

            <div>
                <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-tertiary">Orders by status</h2>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                    {statusCards.map(({ status, label }) => {
                        const Icon = statusIcons[status];
                        return (
                            <Link
                                key={status}
                                href={`/admin/orders?status=${status}`}
                                className="flex items-center justify-between rounded-xl border border-secondary bg-white p-4 transition hover:border-brand-300 hover:bg-brand-50"
                            >
                                <div className="flex items-center gap-3">
                                    <span className={`flex size-8 items-center justify-center rounded-full ${statusStyles[status]}`}>
                                        <Icon className="size-4" />
                                    </span>
                                    <div>
                                        <p className="text-sm font-medium text-primary">{label}</p>
                                        <p className="text-xs text-tertiary">{stats.ordersByStatus[status]} orders</p>
                                    </div>
                                </div>
                                <ArrowRight className="size-4 text-tertiary" />
                            </Link>
                        );
                    })}
                </div>
            </div>

            <div>
                <div className="mb-4 flex items-center justify-between">
                    <h2 className="text-sm font-semibold uppercase tracking-wider text-tertiary">Recent orders</h2>
                    <Link href="/admin/orders" className="text-sm font-semibold text-brand-700 hover:text-brand-800">
                        View all →
                    </Link>
                </div>
                <div className="overflow-hidden rounded-2xl border border-secondary bg-white">
                    {stats.recentOrders.length === 0 ? (
                        <div className="px-6 py-10 text-center text-sm text-tertiary">No orders yet.</div>
                    ) : (
                        <table className="w-full text-left text-sm">
                            <thead className="bg-secondary/40 text-xs uppercase tracking-wider text-tertiary">
                                <tr>
                                    <th className="px-4 py-3 font-medium">Order</th>
                                    <th className="px-4 py-3 font-medium">Customer</th>
                                    <th className="px-4 py-3 font-medium">Date</th>
                                    <th className="px-4 py-3 font-medium">Status</th>
                                    <th className="px-4 py-3 text-right font-medium">Total</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-secondary">
                                {stats.recentOrders.map((order) => (
                                    <tr key={order.id} className="hover:bg-secondary/20">
                                        <td className="px-4 py-3">
                                            <Link href={`/admin/orders/${order.id}`} className="font-semibold text-primary hover:text-brand-700">
                                                {order.order_number}
                                            </Link>
                                        </td>
                                        <td className="px-4 py-3 text-secondary">
                                            {order.first_name} {order.last_name}
                                            <div className="text-xs text-tertiary">{order.email}</div>
                                        </td>
                                        <td className="px-4 py-3 text-tertiary">{formatDate(order.created_at)}</td>
                                        <td className="px-4 py-3">
                                            <span className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-semibold capitalize ${statusStyles[order.status]}`}>
                                                {order.status}
                                            </span>
                                        </td>
                                        <td className="px-4 py-3 text-right font-semibold text-primary">{formatEuro(Number(order.total))}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
        </div>
    );
}
