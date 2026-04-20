"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
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
    Plus,
    FileSearch01,
    BookOpen01,
    TrendUp01,
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

function greeting() {
    const h = new Date().getHours();
    if (h < 12) return "Good morning";
    if (h < 18) return "Good afternoon";
    return "Good evening";
}

export default function AdminDashboardPage() {
    const router = useRouter();
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

    const needsAttentionCount =
        stats.ordersByStatus.processing + stats.productsOutOfStock;

    const quickActions = [
        {
            label: "View orders",
            hint: "Manage customer orders",
            icon: ShoppingBag01,
            href: "/admin/orders",
            color: "bg-brand-600 text-white hover:bg-brand-700",
            primary: true,
        },
        {
            label: "New product",
            hint: "Add to catalogue",
            icon: Plus,
            href: "/admin/products/new",
            color: "bg-white text-primary border border-secondary hover:border-brand-300 hover:text-brand-700",
        },
        {
            label: "Find order",
            hint: "Search by number or email",
            icon: FileSearch01,
            href: "/admin/orders",
            color: "bg-white text-primary border border-secondary hover:border-brand-300 hover:text-brand-700",
        },
        {
            label: "Write blog post",
            hint: "Publish content",
            icon: BookOpen01,
            href: "/admin/blog/new",
            color: "bg-white text-primary border border-secondary hover:border-brand-300 hover:text-brand-700",
        },
    ];

    const kpis = [
        {
            label: "Orders",
            value: stats.ordersTotal.toString(),
            sub: `${stats.ordersToday} today · ${stats.ordersWeek} this week`,
            icon: ShoppingBag01,
            iconBg: "bg-brand-50 text-brand-600",
            href: "/admin/orders",
        },
        {
            label: "Revenue",
            value: formatEuro(stats.revenueTotal),
            sub: `${formatEuro(stats.revenueWeek)} this week`,
            icon: CurrencyEuro,
            iconBg: "bg-success-50 text-success-600",
            href: "/admin/orders",
        },
        {
            label: "Products",
            value: stats.productsTotal.toString(),
            sub:
                stats.productsOutOfStock > 0
                    ? `${stats.productsOutOfStock} out of stock`
                    : "All in stock",
            icon: Package,
            iconBg: "bg-blue-50 text-blue-600",
            href: "/admin/products",
        },
        {
            label: "Customers",
            value: stats.customersTotal.toString(),
            sub: "Registered profiles",
            icon: Users01,
            iconBg: "bg-warning-50 text-warning-600",
            href: "/admin/orders",
        },
    ];

    const statusCards: Array<{ status: Order["status"]; label: string }> = [
        { status: "processing", label: "Processing" },
        { status: "shipped", label: "Shipped" },
        { status: "delivered", label: "Delivered" },
        { status: "cancelled", label: "Cancelled" },
    ];

    return (
        <div className="space-y-10">
            {/* Hero greeting */}
            <section className="rounded-3xl border border-secondary bg-gradient-to-br from-brand-50 via-white to-white p-6 sm:p-8">
                <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-brand-700">
                            {greeting()}
                        </p>
                        <h1
                            className="mt-1 text-3xl font-light text-primary sm:text-4xl"
                            style={{ fontFamily: "'Cormorant Garamond', serif" }}
                        >
                            Welcome back
                        </h1>
                        <p className="mt-2 max-w-xl text-sm text-secondary">
                            {stats.ordersToday > 0
                                ? `${stats.ordersToday} order${stats.ordersToday === 1 ? "" : "s"} placed today. ${formatEuro(stats.revenueWeek)} earned this week.`
                                : `No new orders yet today. ${formatEuro(stats.revenueWeek)} earned this week.`}
                        </p>
                    </div>
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4 lg:w-auto">
                        {quickActions.map((action) => (
                            <Link
                                key={action.label}
                                href={action.href}
                                className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition ${action.color}`}
                            >
                                <span
                                    className={`flex size-10 shrink-0 items-center justify-center rounded-lg ${
                                        action.primary ? "bg-white/15" : "bg-brand-50 text-brand-600"
                                    }`}
                                >
                                    <action.icon className="size-5" />
                                </span>
                                <span className="flex min-w-0 flex-col items-start">
                                    <span className="truncate">{action.label}</span>
                                    <span
                                        className={`truncate text-xs font-normal ${
                                            action.primary ? "text-white/80" : "text-tertiary"
                                        }`}
                                    >
                                        {action.hint}
                                    </span>
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Needs attention */}
            {needsAttentionCount > 0 && (
                <section className="space-y-3">
                    <h2 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-tertiary">
                        <AlertTriangle className="size-4 text-warning-600" />
                        Needs attention
                    </h2>
                    <div className="grid gap-3 sm:grid-cols-2">
                        {stats.ordersByStatus.processing > 0 && (
                            <Link
                                href="/admin/orders?status=processing"
                                className="group flex items-center justify-between rounded-2xl border border-warning-200 bg-warning-50 p-5 transition hover:border-warning-400"
                            >
                                <div>
                                    <p className="text-sm font-semibold text-warning-800">
                                        {stats.ordersByStatus.processing} order
                                        {stats.ordersByStatus.processing === 1 ? "" : "s"} awaiting shipment
                                    </p>
                                    <p className="mt-1 text-xs text-warning-700">
                                        Add tracking numbers and mark as shipped.
                                    </p>
                                </div>
                                <ArrowRight className="size-5 text-warning-700 transition group-hover:translate-x-1" />
                            </Link>
                        )}
                        {stats.productsOutOfStock > 0 && (
                            <Link
                                href="/admin/products"
                                className="group flex items-center justify-between rounded-2xl border border-error-200 bg-error-50 p-5 transition hover:border-error-400"
                            >
                                <div>
                                    <p className="text-sm font-semibold text-error-800">
                                        {stats.productsOutOfStock} product
                                        {stats.productsOutOfStock === 1 ? "" : "s"} out of stock
                                    </p>
                                    <p className="mt-1 text-xs text-error-700">
                                        Restock or hide these products from the shop.
                                    </p>
                                </div>
                                <ArrowRight className="size-5 text-error-700 transition group-hover:translate-x-1" />
                            </Link>
                        )}
                    </div>
                </section>
            )}

            {/* KPI cards (each clickable) */}
            <section>
                <div className="mb-4 flex items-center gap-2">
                    <TrendUp01 className="size-4 text-tertiary" />
                    <h2 className="text-sm font-semibold uppercase tracking-wider text-tertiary">
                        At a glance
                    </h2>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                    {kpis.map((kpi) => (
                        <Link
                            key={kpi.label}
                            href={kpi.href}
                            className="group rounded-2xl border border-secondary bg-white px-5 py-4 transition hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-sm"
                        >
                            <div className="flex items-center justify-between">
                                <p className="text-xs font-semibold uppercase tracking-wider text-tertiary">
                                    {kpi.label}
                                </p>
                                <div className={`flex size-9 items-center justify-center rounded-full ${kpi.iconBg}`}>
                                    <kpi.icon className="size-4" />
                                </div>
                            </div>
                            <p className="mt-2 text-2xl font-semibold text-primary">{kpi.value}</p>
                            <p className="mt-0.5 text-xs text-tertiary">{kpi.sub}</p>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Two-column: recent orders + status funnel */}
            <section className="grid gap-6 lg:grid-cols-3">
                <div className="lg:col-span-2">
                    <div className="mb-4 flex items-center justify-between">
                        <h2 className="text-sm font-semibold uppercase tracking-wider text-tertiary">
                            Recent orders
                        </h2>
                        <Link
                            href="/admin/orders"
                            className="inline-flex items-center gap-1 text-sm font-semibold text-brand-700 hover:text-brand-800"
                        >
                            View all <ArrowRight className="size-3.5" />
                        </Link>
                    </div>
                    <div className="overflow-hidden rounded-2xl border border-secondary bg-white">
                        {stats.recentOrders.length === 0 ? (
                            <div className="flex flex-col items-center gap-3 px-6 py-14 text-center">
                                <div className="flex size-12 items-center justify-center rounded-full bg-secondary/40">
                                    <ShoppingBag01 className="size-5 text-tertiary" />
                                </div>
                                <p className="text-sm text-tertiary">No orders yet.</p>
                            </div>
                        ) : (
                            <div className="divide-y divide-secondary">
                                {stats.recentOrders.map((order) => (
                                    <button
                                        key={order.id}
                                        onClick={() => router.push(`/admin/orders/${order.id}`)}
                                        className="flex w-full items-center gap-4 px-5 py-4 text-left transition hover:bg-secondary/20"
                                    >
                                        <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-brand-50 text-xs font-semibold text-brand-700">
                                            {(order.first_name?.[0] || "").toUpperCase()}
                                            {(order.last_name?.[0] || "").toUpperCase()}
                                        </div>
                                        <div className="min-w-0 flex-1">
                                            <div className="flex items-baseline justify-between gap-3">
                                                <p className="truncate text-sm font-semibold text-primary">
                                                    {order.first_name} {order.last_name}
                                                </p>
                                                <p className="shrink-0 text-sm font-semibold text-primary">
                                                    {formatEuro(Number(order.total))}
                                                </p>
                                            </div>
                                            <div className="mt-1 flex items-center gap-2 text-xs text-tertiary">
                                                <span className="truncate">{order.order_number}</span>
                                                <span>·</span>
                                                <span className="truncate">{formatDate(order.created_at)}</span>
                                                <span>·</span>
                                                <span
                                                    className={`inline-flex rounded-full px-2 py-0.5 font-semibold capitalize ${statusStyles[order.status]}`}
                                                >
                                                    {order.status}
                                                </span>
                                            </div>
                                            <p className="mt-1 truncate text-xs text-tertiary">{order.email}</p>
                                        </div>
                                        <ArrowRight className="hidden size-4 shrink-0 text-tertiary sm:block" />
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                <div>
                    <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-tertiary">
                        Orders by status
                    </h2>
                    <div className="space-y-2 rounded-2xl border border-secondary bg-white p-3">
                        {statusCards.map(({ status, label }) => {
                            const Icon = statusIcons[status];
                            const count = stats.ordersByStatus[status];
                            return (
                                <Link
                                    key={status}
                                    href={`/admin/orders?status=${status}`}
                                    className="flex items-center justify-between rounded-xl px-3 py-3 transition hover:bg-secondary/30"
                                >
                                    <div className="flex items-center gap-3">
                                        <span
                                            className={`flex size-9 items-center justify-center rounded-full ${statusStyles[status]}`}
                                        >
                                            <Icon className="size-4" />
                                        </span>
                                        <div>
                                            <p className="text-sm font-medium text-primary">{label}</p>
                                            <p className="text-xs text-tertiary">
                                                {count} order{count === 1 ? "" : "s"}
                                            </p>
                                        </div>
                                    </div>
                                    <ArrowRight className="size-4 text-tertiary" />
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
}
