"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { BarChart03, ShoppingBag01, Package, BookOpen01, Menu01, X, ArrowLeft } from "@untitledui/icons";
import { supabase, checkIsAdmin } from "@/lib/supabase";

const navItems = [
    { href: "/admin", label: "Dashboard", icon: BarChart03, exact: true },
    { href: "/admin/orders", label: "Orders", icon: ShoppingBag01 },
    { href: "/admin/products", label: "Products", icon: Package },
    { href: "/admin/blog", label: "Blog Posts", icon: BookOpen01 },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const pathname = usePathname();
    const [loading, setLoading] = useState(true);
    const [isAdmin, setIsAdmin] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    const isActive = (href: string, exact?: boolean) =>
        exact ? pathname === href : pathname === href || pathname.startsWith(`${href}/`);

    useEffect(() => {
        setMobileOpen(false);
    }, [pathname]);

    useEffect(() => {
        async function verifyAdmin(userId: string) {
            const admin = await checkIsAdmin(userId);
            if (!admin) {
                router.push("/");
                return;
            }
            setIsAdmin(true);
            setLoading(false);
        }

        supabase.auth.getSession().then(({ data: { session } }) => {
            if (!session?.user) {
                router.push("/login");
                return;
            }
            verifyAdmin(session.user.id);
        });

        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            if (!session?.user) {
                setIsAdmin(false);
                router.push("/login");
            }
        });

        return () => subscription.unsubscribe();
    }, [router]);

    if (loading) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-white">
                <div className="text-center">
                    <div className="mx-auto size-8 animate-spin rounded-full border-2 border-brand-600 border-t-transparent" />
                    <p className="mt-4 text-sm text-tertiary">Verifying admin access...</p>
                </div>
            </div>
        );
    }

    if (!isAdmin) return null;

    return (
        <div className="min-h-screen overflow-x-hidden bg-[#faf8f5]">
            {/* Mobile top bar */}
            <div className="sticky top-0 z-40 flex items-center justify-between border-b border-secondary bg-white px-4 py-3 lg:hidden">
                <Link href="/" className="flex shrink-0 items-center">
                    <img src="/logo.svg" alt="Prestige Smile" className="h-10 w-auto" />
                </Link>
                <div className="flex items-center gap-3">
                    <span className="rounded-full bg-brand-50 px-2.5 py-1 text-xs font-semibold text-brand-700">Admin</span>
                    <button
                        type="button"
                        aria-label="Open navigation"
                        onClick={() => setMobileOpen(true)}
                        className="rounded-lg p-2 text-secondary hover:bg-primary_hover hover:text-primary"
                    >
                        <Menu01 className="size-6" />
                    </button>
                </div>
            </div>

            {/* Mobile sidebar overlay */}
            {mobileOpen && (
                <div
                    className="fixed inset-0 z-40 bg-black/40 lg:hidden"
                    onClick={() => setMobileOpen(false)}
                    aria-hidden="true"
                />
            )}

            {/* Sidebar */}
            <aside
                className={
                    "fixed inset-y-0 left-0 z-50 flex w-64 flex-col border-r border-secondary bg-white transition-transform duration-200 ease-linear lg:translate-x-0 " +
                    (mobileOpen ? "translate-x-0" : "-translate-x-full")
                }
            >
                <div className="flex items-center justify-between px-3 py-5">
                    <Link href="/" className="flex shrink-0 items-center">
                        <img src="/logo.svg" alt="Prestige Smile" className="h-11 w-auto" />
                    </Link>
                    <button
                        type="button"
                        aria-label="Close navigation"
                        onClick={() => setMobileOpen(false)}
                        className="rounded-lg p-2 text-secondary hover:bg-primary_hover hover:text-primary lg:hidden"
                    >
                        <X className="size-5" />
                    </button>
                </div>
                <div className="px-6 pb-4">
                    <span className="inline-block rounded-full bg-brand-50 px-2.5 py-1 text-xs font-semibold text-brand-700">
                        Admin Panel
                    </span>
                </div>
                <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-4 pb-4">
                    {navItems.map((item) => {
                        const active = isActive(item.href, item.exact);
                        const Icon = item.icon;
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={
                                    active
                                        ? "flex items-center gap-3 rounded-lg bg-brand-50 px-3 py-2.5 text-sm font-semibold text-brand-700"
                                        : "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-secondary hover:bg-primary_hover hover:text-primary"
                                }
                            >
                                <Icon className={active ? "size-5 text-brand-700" : "size-5 text-fg-secondary"} />
                                {item.label}
                            </Link>
                        );
                    })}
                </nav>
                <div className="border-t border-secondary px-4 py-4">
                    <Link
                        href="/"
                        className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-secondary hover:bg-primary_hover hover:text-primary"
                    >
                        <ArrowLeft className="size-5 text-fg-secondary" />
                        Back to Site
                    </Link>
                </div>
            </aside>

            <main className="min-w-0 max-w-full px-4 py-6 sm:px-6 sm:py-8 lg:pl-68 lg:pr-4">
                {children}
            </main>
        </div>
    );
}
