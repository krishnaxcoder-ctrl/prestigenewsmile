"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/base/buttons/button";
import {
    User01,
    ShoppingBag01,
    Heart,
    MarkerPin01,
    Settings01,
    LogOut01,
    ChevronRight,
    Package,
} from "@untitledui/icons";
import { Header } from "@/app/components/header";
import { Footer } from "@/app/components/footer";

const user = {
    name: "Sophie Martin",
    email: "sophie@example.com",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    memberSince: "January 2024",
};

const stats = [
    { label: "Total Orders", value: "12" },
    { label: "Wishlist Items", value: "8" },
    { label: "Reward Points", value: "450" },
];

const recentOrders = [
    {
        id: "ORD-2024-001",
        date: "March 15, 2024",
        status: "Delivered",
        total: 154.00,
        items: 3,
    },
    {
        id: "ORD-2024-002",
        date: "March 10, 2024",
        status: "Shipped",
        total: 92.00,
        items: 2,
    },
    {
        id: "ORD-2024-003",
        date: "March 5, 2024",
        status: "Processing",
        total: 46.00,
        items: 1,
    },
];

const menuItems = [
    { icon: ShoppingBag01, label: "Orders", href: "/account/orders", description: "View your order history" },
    { icon: Heart, label: "Wishlist", href: "/account/wishlist", description: "Your saved items" },
    { icon: MarkerPin01, label: "Addresses", href: "/account/addresses", description: "Manage delivery addresses" },
    { icon: Settings01, label: "Settings", href: "/account/settings", description: "Account preferences" },
];

export default function AccountPage() {
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
                            My Account
                        </h1>
                        <nav className="mt-4 flex items-center justify-center gap-2 text-sm text-tertiary">
                            <a href="/" className="transition hover:text-brand-600">Home</a>
                            <span>/</span>
                            <span className="text-primary">Account</span>
                        </nav>
                    </div>
                </div>

                {/* Account Content */}
                <section className="px-4 py-12 md:px-8 md:py-16 lg:px-16">
                    <div className="mx-auto max-w-7xl">
                        <div className="grid gap-8 lg:grid-cols-3">
                            {/* Sidebar */}
                            <div className="lg:col-span-1">
                                {/* Profile Card */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4 }}
                                    className="rounded-2xl border border-secondary bg-primary p-6 text-center"
                                >
                                    <img
                                        src={user.avatar}
                                        alt={user.name}
                                        className="mx-auto size-24 rounded-full object-cover ring-4 ring-brand-100"
                                    />
                                    <h2 className="mt-4 text-xl font-semibold text-primary">
                                        {user.name}
                                    </h2>
                                    <p className="text-sm text-tertiary">{user.email}</p>
                                    <p className="mt-2 text-xs text-tertiary">
                                        Member since {user.memberSince}
                                    </p>
                                    <Button
                                        href="/account/settings"
                                        color="secondary"
                                        size="sm"
                                        className="mt-4"
                                    >
                                        Edit Profile
                                    </Button>
                                </motion.div>

                                {/* Navigation Menu */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: 0.1 }}
                                    className="mt-6 rounded-2xl border border-secondary bg-primary"
                                >
                                    {menuItems.map((item, index) => (
                                        <a
                                            key={item.label}
                                            href={item.href}
                                            className={`flex items-center gap-4 p-4 transition hover:bg-secondary ${
                                                index < menuItems.length - 1 ? "border-b border-secondary" : ""
                                            }`}
                                        >
                                            <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-brand-50">
                                                <item.icon className="size-5 text-brand-600" />
                                            </div>
                                            <div className="flex-1">
                                                <p className="font-medium text-primary">{item.label}</p>
                                                <p className="text-xs text-tertiary">{item.description}</p>
                                            </div>
                                            <ChevronRight className="size-5 text-tertiary" />
                                        </a>
                                    ))}
                                    <button className="flex w-full items-center gap-4 p-4 text-left transition hover:bg-error-50">
                                        <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-error-50">
                                            <LogOut01 className="size-5 text-error-600" />
                                        </div>
                                        <div className="flex-1">
                                            <p className="font-medium text-error-600">Logout</p>
                                            <p className="text-xs text-tertiary">Sign out of your account</p>
                                        </div>
                                    </button>
                                </motion.div>
                            </div>

                            {/* Main Content */}
                            <div className="lg:col-span-2">
                                {/* Stats */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4 }}
                                    className="grid gap-4 sm:grid-cols-3"
                                >
                                    {stats.map((stat) => (
                                        <div
                                            key={stat.label}
                                            className="rounded-xl border border-secondary bg-primary p-6 text-center"
                                        >
                                            <p className="text-3xl font-bold text-brand-600">
                                                {stat.value}
                                            </p>
                                            <p className="mt-1 text-sm text-tertiary">{stat.label}</p>
                                        </div>
                                    ))}
                                </motion.div>

                                {/* Recent Orders */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: 0.1 }}
                                    className="mt-8"
                                >
                                    <div className="mb-6 flex items-center justify-between">
                                        <h3 className="text-lg font-semibold text-primary">
                                            Recent Orders
                                        </h3>
                                        <Button href="/account/orders" color="link-color" size="sm">
                                            View All
                                        </Button>
                                    </div>

                                    <div className="space-y-4">
                                        {recentOrders.map((order) => (
                                            <div
                                                key={order.id}
                                                className="flex flex-col gap-4 rounded-xl border border-secondary bg-primary p-4 sm:flex-row sm:items-center sm:justify-between"
                                            >
                                                <div className="flex items-center gap-4">
                                                    <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-brand-50">
                                                        <Package className="size-6 text-brand-600" />
                                                    </div>
                                                    <div>
                                                        <p className="font-semibold text-primary">
                                                            {order.id}
                                                        </p>
                                                        <p className="text-sm text-tertiary">
                                                            {order.date} • {order.items} items
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-4">
                                                    <span
                                                        className={`rounded-full px-3 py-1 text-xs font-semibold ${
                                                            order.status === "Delivered"
                                                                ? "bg-success-100 text-success-700"
                                                                : order.status === "Shipped"
                                                                ? "bg-blue-100 text-blue-700"
                                                                : "bg-warning-100 text-warning-700"
                                                        }`}
                                                    >
                                                        {order.status}
                                                    </span>
                                                    <span className="font-semibold text-primary">
                                                        ${order.total.toFixed(2)}
                                                    </span>
                                                    <Button
                                                        href={`/account/orders/${order.id}`}
                                                        color="secondary"
                                                        size="sm"
                                                    >
                                                        View
                                                    </Button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>

                                {/* Quick Actions */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: 0.2 }}
                                    className="mt-8 rounded-2xl bg-brand-50 p-6"
                                >
                                    <h3 className="text-lg font-semibold text-primary">
                                        Need Help?
                                    </h3>
                                    <p className="mt-2 text-sm text-tertiary">
                                        Our support team is here to assist you with any questions.
                                    </p>
                                    <div className="mt-4 flex flex-wrap gap-3">
                                        <Button href="/contact" color="primary" size="sm">
                                            Contact Support
                                        </Button>
                                        <Button href="/faq" color="secondary" size="sm">
                                            View FAQ
                                        </Button>
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
