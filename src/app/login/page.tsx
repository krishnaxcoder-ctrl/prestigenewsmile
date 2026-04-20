"use client";

import { Suspense, useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/base/buttons/button";
import { Input } from "@/components/base/input/input";
import { Mail01, Lock01, Eye, EyeOff } from "@untitledui/icons";
import { signIn, supabase } from "@/lib/supabase";
import { useToastActions } from "@/components/base/toast/toast";
import { Avatar } from "@/components/base/avatar/avatar";

export default function LoginPage() {
    return (
        <Suspense
            fallback={
                <div className="flex min-h-screen items-center justify-center">
                    <div className="size-8 animate-spin rounded-full border-4 border-brand-200 border-t-brand-600" />
                </div>
            }
        >
            <LoginPageContent />
        </Suspense>
    );
}

function LoginPageContent() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const redirectTo = searchParams.get("redirect") || "/account";
    const toast = useToastActions();
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [checkingAuth, setCheckingAuth] = useState(true);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            if (session?.user) {
                router.push(redirectTo);
            } else {
                setCheckingAuth(false);
            }
        });

        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            if (session?.user) {
                router.push(redirectTo);
            }
        });

        return () => subscription.unsubscribe();
    }, [router, redirectTo]);

    if (checkingAuth) {
        return (
            <div className="flex min-h-screen items-center justify-center">
                <div className="size-8 animate-spin rounded-full border-4 border-brand-200 border-t-brand-600" />
            </div>
        );
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            await signIn(formData.email, formData.password);
            toast.success("Welcome back!", "You have been signed in successfully.");
            router.push(redirectTo);
        } catch (error: any) {
            console.error("Login error:", error);
            toast.error("Login failed", error.message || "Invalid email or password.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex min-h-screen">
            {/* Left Side - Form */}
            <div className="flex w-full flex-col justify-center px-6 py-12 lg:w-1/2 lg:px-16 xl:px-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mx-auto w-full max-w-md"
                >
                    {/* Logo */}
                    <a href="/" className="mb-12 flex items-center gap-2">
                        <div className="flex size-10 items-center justify-center rounded-lg bg-brand-600">
                            <svg className="size-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                            </svg>
                        </div>
                        <span className="text-xl font-semibold text-brand-600">Prestige Smile</span>
                    </a>

                    {/* Heading */}
                    <h1 className="text-3xl font-semibold text-primary">Welcome Back!</h1>
                    <p className="mt-2 text-secondary">
                        Sign in to access your account and continue your smile journey.
                    </p>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                        {/* Email */}
                        <Input
                            type="email"
                            name="email"
                            label="Email"
                            icon={Mail01}
                            value={formData.email}
                            onChange={(value) => setFormData({ ...formData, email: value })}
                            placeholder="Enter your email"
                            isRequired
                            size="md"
                        />

                        {/* Password */}
                        <div className="space-y-1.5">
                            <label className="text-sm font-medium text-secondary">
                                Password
                            </label>
                            <div className="relative">
                                <div className="pointer-events-none absolute left-3 top-1/2 z-10 -translate-y-1/2">
                                    <Lock01 className="size-5 text-fg-quaternary" />
                                </div>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    placeholder="Enter your password"
                                    className="w-full rounded-lg bg-primary py-2.5 pl-10 pr-12 text-md text-primary shadow-xs ring-1 ring-inset ring-primary placeholder:text-placeholder focus:outline-none focus:ring-2 focus:ring-brand"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-fg-quaternary transition hover:text-fg-quaternary_hover"
                                >
                                    {showPassword ? (
                                        <EyeOff className="size-5" />
                                    ) : (
                                        <Eye className="size-5" />
                                    )}
                                </button>
                            </div>
                            <div className="flex justify-end">
                                <a
                                    href="/forgot-password"
                                    className="text-sm font-medium text-brand-600 transition hover:text-brand-700"
                                >
                                    Forgot Password?
                                </a>
                            </div>
                        </div>

                        {/* Submit */}
                        <Button
                            type="submit"
                            color="primary"
                            size="lg"
                            className="w-full justify-center"
                            isLoading={isLoading}
                        >
                            Sign In
                        </Button>
                    </form>

                    {/* Divider */}
                    <div className="my-6 flex items-center gap-4">
                        <div className="h-px flex-1 bg-secondary" />
                        <span className="text-sm text-tertiary">OR</span>
                        <div className="h-px flex-1 bg-secondary" />
                    </div>

                    {/* Social Login */}
                    <div className="space-y-3">
                        <button className="flex w-full items-center justify-center gap-3 rounded-lg border border-secondary bg-primary px-4 py-3 text-sm font-medium text-primary transition hover:bg-secondary">
                            <svg className="size-5" viewBox="0 0 24 24">
                                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                            </svg>
                            Continue with Google
                        </button>
                        <button className="flex w-full items-center justify-center gap-3 rounded-lg border border-secondary bg-primary px-4 py-3 text-sm font-medium text-primary transition hover:bg-secondary">
                            <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                            </svg>
                            Continue with Apple
                        </button>
                    </div>

                    {/* Sign Up Link */}
                    <p className="mt-8 text-center text-sm text-tertiary">
                        Don't have an Account?{" "}
                        <a
                            href="/register"
                            className="font-semibold text-brand-600 transition hover:text-brand-700"
                        >
                            Sign Up
                        </a>
                    </p>
                </motion.div>
            </div>

            {/* Right Side - Branded Panel */}
            <div className="relative hidden overflow-hidden lg:flex lg:w-1/2 lg:flex-col lg:justify-center">
                {/* Background with gradient and pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-600 via-brand-700 to-brand-900" />
                <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }} />

                {/* Decorative circles */}
                <div className="absolute -right-20 -top-20 size-80 rounded-full bg-white/5 blur-3xl" />
                <div className="absolute -bottom-32 -left-32 size-96 rounded-full bg-brand-400/10 blur-3xl" />

                {/* Content */}
                <div className="relative z-10 px-12 xl:px-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        {/* Headline */}
                        <h2 className="text-4xl font-bold leading-tight text-white xl:text-5xl">
                            Brighten Your Smile
                            <span className="mt-2 block text-brand-200">with Confidence</span>
                        </h2>
                        <p className="mt-4 max-w-md text-lg text-brand-100/80">
                            Professional teeth whitening treatments that deliver visible results in just one session.
                        </p>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="mt-10 grid grid-cols-3 gap-6"
                    >
                        {[
                            { value: "7+", label: "Shades Whiter" },
                            { value: "1000+", label: "Happy Clients" },
                            { value: "4.9", label: "Star Rating" },
                        ].map((stat) => (
                            <div key={stat.label} className="text-center">
                                <p className="text-3xl font-bold text-white">{stat.value}</p>
                                <p className="mt-1 text-sm text-brand-200">{stat.label}</p>
                            </div>
                        ))}
                    </motion.div>

                    {/* Testimonial Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="mt-10 rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-sm"
                    >
                        <div className="flex gap-1">
                            {[...Array(5)].map((_, i) => (
                                <svg key={i} className="size-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            ))}
                        </div>
                        <p className="mt-4 text-base leading-relaxed text-white/90">
                            "Prestige Smile transformed my smile completely. The treatment was professional, comfortable, and the results exceeded my expectations!"
                        </p>
                        <div className="mt-5 flex items-center gap-3">
                            <Avatar
                                size="lg"
                                src="https://randomuser.me/api/portraits/women/44.jpg"
                                alt="Emma Laurent"
                                contrastBorder={false}
                            />
                            <div>
                                <p className="font-semibold text-white">Emma Laurent</p>
                                <p className="text-sm text-brand-200">Geneva, Switzerland</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Avatars stack */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="mt-8 flex items-center gap-4"
                    >
                        <div className="flex -space-x-2">
                            <Avatar
                                size="md"
                                src="https://randomuser.me/api/portraits/men/32.jpg"
                                alt="Customer"
                                contrastBorder={false}
                                className="ring-2 ring-brand-700"
                            />
                            <Avatar
                                size="md"
                                src="https://randomuser.me/api/portraits/women/68.jpg"
                                alt="Customer"
                                contrastBorder={false}
                                className="ring-2 ring-brand-700"
                            />
                            <Avatar
                                size="md"
                                src="https://randomuser.me/api/portraits/men/75.jpg"
                                alt="Customer"
                                contrastBorder={false}
                                className="ring-2 ring-brand-700"
                            />
                            <Avatar
                                size="md"
                                src="https://randomuser.me/api/portraits/women/90.jpg"
                                alt="Customer"
                                contrastBorder={false}
                                className="ring-2 ring-brand-700"
                            />
                            <div className="flex size-10 items-center justify-center rounded-full bg-brand-500 text-xs font-semibold text-white ring-2 ring-brand-700">
                                +99
                            </div>
                        </div>
                        <p className="text-sm text-brand-100">
                            Join <span className="font-semibold text-white">1,000+</span> happy customers
                        </p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
