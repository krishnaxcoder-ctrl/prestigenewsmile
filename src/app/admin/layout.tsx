"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { supabase, checkIsAdmin } from "@/lib/supabase";

const navItems = [
    { href: "/admin", label: "Dashboard", exact: true },
    { href: "/admin/orders", label: "Orders" },
    { href: "/admin/products", label: "Products" },
    { href: "/admin/blog", label: "Blog Posts" },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const pathname = usePathname();
    const [loading, setLoading] = useState(true);
    const [isAdmin, setIsAdmin] = useState(false);

    const isActive = (href: string, exact?: boolean) =>
        exact ? pathname === href : pathname === href || pathname.startsWith(`${href}/`);

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
        <div className="min-h-screen bg-[#faf8f5]">
            {/* Admin Header */}
            <header className="sticky top-0 z-50 border-b border-secondary bg-white">
                <div className="flex flex-col gap-2 px-4 py-3 sm:grid sm:h-20 sm:grid-cols-3 sm:items-center sm:gap-6 sm:px-6 sm:py-0 lg:px-8">
                    <div className="flex items-center justify-between gap-4 sm:justify-start sm:gap-6">
                        <Link href="/" className="flex shrink-0 items-center">
                            <img src="/logo.svg" alt="Prestige Smile" className="h-12 w-auto sm:h-14" />
                        </Link>
                        <div className="flex items-center gap-3 sm:hidden">
                            <span className="rounded-full bg-brand-50 px-2.5 py-1 text-xs font-semibold text-brand-700">Admin</span>
                            <Link href="/" className="text-sm text-tertiary hover:text-primary">
                                Back
                            </Link>
                        </div>
                    </div>
                    <nav className="-mx-1 flex items-center gap-1 overflow-x-auto px-1 pb-2 sm:mx-0 sm:justify-center sm:overflow-visible sm:pb-0">
                        {navItems.map((item) => {
                            const active = isActive(item.href, item.exact);
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={
                                        active
                                            ? "whitespace-nowrap rounded-lg bg-brand-50 px-3 py-2 text-sm font-semibold text-brand-700"
                                            : "whitespace-nowrap rounded-lg px-3 py-2 text-sm font-medium text-secondary hover:bg-primary_hover hover:text-primary"
                                    }
                                >
                                    {item.label}
                                </Link>
                            );
                        })}
                    </nav>
                    <div className="hidden items-center justify-end gap-3 sm:flex">
                        <span className="rounded-full bg-brand-50 px-2.5 py-1 text-xs font-semibold text-brand-700">Admin</span>
                        <Link href="/" className="text-sm text-tertiary hover:text-primary">
                            Back to Site
                        </Link>
                    </div>
                </div>
            </header>
            <main className="w-full px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
                {children}
            </main>
        </div>
    );
}
