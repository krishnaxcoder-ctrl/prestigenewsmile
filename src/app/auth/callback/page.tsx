"use client";

import { Suspense, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function AuthCallbackPage() {
    return (
        <Suspense
            fallback={
                <div className="flex min-h-screen items-center justify-center">
                    <div className="size-8 animate-spin rounded-full border-4 border-brand-200 border-t-brand-600" />
                </div>
            }
        >
            <AuthCallbackContent />
        </Suspense>
    );
}

function AuthCallbackContent() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const redirectTo = searchParams.get("redirect") || "/account";

    useEffect(() => {
        const finishAuth = async () => {
            const { data: { session } } = await supabase.auth.getSession();
            if (session?.user) {
                router.replace(redirectTo);
                return;
            }

            const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, newSession) => {
                if (newSession?.user) {
                    subscription.unsubscribe();
                    router.replace(redirectTo);
                }
            });

            setTimeout(() => {
                subscription.unsubscribe();
                supabase.auth.getSession().then(({ data: { session: s } }) => {
                    router.replace(s?.user ? redirectTo : "/login?error=oauth_failed");
                });
            }, 5000);
        };

        finishAuth();
    }, [router, redirectTo]);

    return (
        <div className="flex min-h-screen flex-col items-center justify-center gap-4">
            <div className="size-8 animate-spin rounded-full border-4 border-brand-200 border-t-brand-600" />
            <p className="text-sm text-secondary">Signing you in...</p>
        </div>
    );
}
