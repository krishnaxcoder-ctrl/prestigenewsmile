"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { supabase, checkIsAdmin } from "@/lib/supabase";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const [isAdmin, setIsAdmin] = useState(false);

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
                <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-6">
                        <Link href="/" className="flex shrink-0 items-center">
                            <img src="/logo.svg" alt="Prestige Smile" className="h-8 w-auto" />
                        </Link>
                        <div className="h-6 w-px bg-secondary" />
                        <nav className="flex items-center gap-1">
                            <Link
                                href="/admin/blog"
                                className="rounded-lg px-3 py-2 text-sm font-medium text-secondary hover:bg-primary_hover hover:text-primary"
                            >
                                Blog Posts
                            </Link>
                        </nav>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="rounded-full bg-brand-50 px-2.5 py-1 text-xs font-semibold text-brand-700">Admin</span>
                        <Link href="/" className="text-sm text-tertiary hover:text-primary">
                            Back to Site
                        </Link>
                    </div>
                </div>
            </header>
            <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                {children}
            </main>
        </div>
    );
}
