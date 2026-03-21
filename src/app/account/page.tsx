"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
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
    Loading01,
} from "@untitledui/icons";
import { Header } from "@/app/components/header";
import { Footer } from "@/app/components/footer";
import { Avatar } from "@/components/base/avatar/avatar";
import { RatingBadge } from "@/components/foundations/rating-badge";
import {
    getSession,
    getProfile,
    getUserOrders,
    getWishlist,
    signOut,
    type Profile,
    type Order,
} from "@/lib/supabase";
import { useToastActions } from "@/components/base/toast/toast";

const menuItems = [
    { icon: ShoppingBag01, label: "Orders", href: "/account/orders", description: "View your order history" },
    { icon: Heart, label: "Wishlist", href: "/account/wishlist", description: "Your saved items" },
    { icon: MarkerPin01, label: "Addresses", href: "/account/addresses", description: "Manage delivery addresses" },
    { icon: Settings01, label: "Settings", href: "/account/settings", description: "Account preferences" },
];

export default function AccountPage() {
    const router = useRouter();
    const toast = useToastActions();
    const [loading, setLoading] = useState(true);
    const [profile, setProfile] = useState<Profile | null>(null);
    const [orders, setOrders] = useState<Order[]>([]);
    const [wishlistCount, setWishlistCount] = useState(0);
    const [loggingOut, setLoggingOut] = useState(false);

    useEffect(() => {
        async function fetchData() {
            try {
                const session = await getSession();

                if (!session?.user) {
                    router.push("/login");
                    return;
                }

                const [profileData, ordersData, wishlistData] = await Promise.all([
                    getProfile(session.user.id),
                    getUserOrders(session.user.id),
                    getWishlist(session.user.id),
                ]);

                setProfile(profileData);
                setOrders(ordersData);
                setWishlistCount(wishlistData.length);
            } catch (error) {
                console.error("Error fetching account data:", error);
                toast.error("Error loading account", "Please try again.");
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, [router, toast]);

    const handleLogout = async () => {
        setLoggingOut(true);
        try {
            await signOut();
            toast.success("Logged out", "You have been signed out successfully.");
            router.push("/");
        } catch (error) {
            console.error("Logout error:", error);
            toast.error("Logout failed", "Please try again.");
        } finally {
            setLoggingOut(false);
        }
    };

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case "delivered":
                return "bg-success-100 text-success-700";
            case "shipped":
                return "bg-blue-100 text-blue-700";
            case "processing":
                return "bg-warning-100 text-warning-700";
            case "cancelled":
                return "bg-error-100 text-error-700";
            default:
                return "bg-gray-100 text-gray-700";
        }
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

    if (!profile) {
        return (
            <div className="overflow-x-hidden">
                <Header />
                <main className="flex min-h-[60vh] flex-col items-center justify-center bg-primary px-4">
                    <p className="text-lg text-secondary">Please sign in to view your account.</p>
                    <Button href="/login" color="primary" size="md" className="mt-4">
                        Sign In
                    </Button>
                </main>
                <Footer />
            </div>
        );
    }

    const fullName = [profile.first_name, profile.last_name].filter(Boolean).join(" ") || "User";
    const recentOrders = orders.slice(0, 3);

    const stats = [
        { label: "Total Orders", value: orders.length.toString() },
        { label: "Wishlist Items", value: wishlistCount.toString() },
        { label: "Reward Points", value: (orders.length * 50).toString() },
    ];

    return (
        <div className="overflow-x-hidden">
            <Header />
            <main className="bg-primary">
                {/* Hero Header */}
                <section className="border-b border-teal-400 bg-teal-50 px-4 py-12 md:px-8 md:py-10 lg:px-16">
                    <div className="mx-auto max-w-7xl">
                        <nav className="mb-4 flex items-center gap-2 text-sm text-tertiary">
                            <a href="/" className="uppercase transition hover:text-teal-600">Home</a>
                            <span>/</span>
                            <span className="uppercase text-teal-600">Account</span>
                        </nav>
                        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
                            <h1 className="text-2xl font-semibold uppercase text-primary md:text-3xl">
                                My <span className="text-teal-600">Account</span>
                            </h1>
                            <div className="hidden shrink-0 md:block">
                                <RatingBadge rating={4.9} title="Trusted Service" subtitle="10K+ Happy Customers" />
                            </div>
                        </div>
                    </div>
                </section>

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
                                    <Avatar
                                        size="2xl"
                                        src={profile.avatar_url}
                                        alt={fullName}
                                        initials={`${profile.first_name?.[0] || ""}${profile.last_name?.[0] || ""}`}
                                        className="mx-auto ring-4 ring-brand-100"
                                    />
                                    <h2 className="mt-4 text-xl font-semibold text-primary">
                                        {fullName}
                                    </h2>
                                    <p className="text-sm text-tertiary">{profile.email}</p>
                                    <p className="mt-2 text-xs text-tertiary">
                                        Member since {formatDate(profile.created_at)}
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
                                    <button
                                        onClick={handleLogout}
                                        disabled={loggingOut}
                                        className="flex w-full items-center gap-4 p-4 text-left transition hover:bg-error-50 disabled:opacity-50"
                                    >
                                        <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-error-50">
                                            {loggingOut ? (
                                                <Loading01 className="size-5 animate-spin text-error-600" />
                                            ) : (
                                                <LogOut01 className="size-5 text-error-600" />
                                            )}
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

                                    {recentOrders.length > 0 ? (
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
                                                                {order.order_number}
                                                            </p>
                                                            <p className="text-sm text-tertiary">
                                                                {formatDate(order.created_at)}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center gap-4">
                                                        <span
                                                            className={`rounded-full px-3 py-1 text-xs font-semibold capitalize ${getStatusColor(order.status)}`}
                                                        >
                                                            {order.status}
                                                        </span>
                                                        <span className="font-semibold text-primary">
                                                            ${Number(order.total).toFixed(2)}
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
                                    ) : (
                                        <div className="rounded-xl border border-secondary bg-primary p-8 text-center">
                                            <Package className="mx-auto size-12 text-tertiary" />
                                            <p className="mt-4 text-secondary">No orders yet</p>
                                            <Button href="/shop" color="primary" size="sm" className="mt-4">
                                                Start Shopping
                                            </Button>
                                        </div>
                                    )}
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
