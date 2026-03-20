"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/base/buttons/button";
import { Input } from "@/components/base/input/input";
import { Checkbox } from "@/components/base/checkbox/checkbox";
import { Mail01, Lock01, Eye, EyeOff } from "@untitledui/icons";
import { Header } from "@/app/components/header";
import { Footer } from "@/app/components/footer";

export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        rememberMe: false,
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle login
        console.log("Login:", formData);
    };

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
                            Login
                        </h1>
                        <nav className="mt-4 flex items-center justify-center gap-2 text-sm text-tertiary">
                            <a href="/" className="transition hover:text-brand-600">Home</a>
                            <span>/</span>
                            <span className="text-primary">Login</span>
                        </nav>
                    </div>
                </div>

                {/* Login Form */}
                <section className="px-4 py-12 md:px-8 md:py-16 lg:px-16">
                    <div className="mx-auto max-w-md">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="rounded-2xl border border-secondary bg-primary p-8 shadow-sm"
                        >
                            <div className="text-center">
                                <h2 className="text-2xl font-semibold text-primary">
                                    Welcome Back
                                </h2>
                                <p className="mt-2 text-sm text-tertiary">
                                    Sign in to your account to continue
                                </p>
                            </div>

                            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                                {/* Email */}
                                <Input
                                    type="email"
                                    name="email"
                                    label="Email Address"
                                    icon={Mail01}
                                    value={formData.email}
                                    onChange={(value) => setFormData({ ...formData, email: value })}
                                    placeholder="your@email.com"
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
                                            className="w-full rounded-lg bg-primary py-2.5 pl-10 pr-12 text-md text-primary shadow-xs ring-1 ring-primary ring-inset placeholder:text-placeholder focus:ring-2 focus:ring-brand focus:outline-none"
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
                                </div>

                                {/* Remember Me & Forgot Password */}
                                <div className="flex items-center justify-between">
                                    <Checkbox
                                        isSelected={formData.rememberMe}
                                        onChange={(checked) => setFormData({ ...formData, rememberMe: checked })}
                                        label="Remember me"
                                    />
                                    <a
                                        href="/forgot-password"
                                        className="text-sm text-brand-600 transition hover:text-brand-700"
                                    >
                                        Forgot password?
                                    </a>
                                </div>

                                {/* Submit */}
                                <Button
                                    type="submit"
                                    color="primary"
                                    size="lg"
                                    className="w-full justify-center"
                                >
                                    Sign In
                                </Button>
                            </form>

                            {/* Divider */}
                            <div className="my-8 flex items-center gap-4">
                                <div className="h-px flex-1 bg-secondary" />
                                <span className="text-sm text-tertiary">or continue with</span>
                                <div className="h-px flex-1 bg-secondary" />
                            </div>

                            {/* Social Login */}
                            <div className="grid gap-3 sm:grid-cols-2">
                                <button className="flex items-center justify-center gap-2 rounded-lg border border-secondary px-4 py-3 text-sm font-medium text-primary transition hover:bg-secondary">
                                    <svg className="size-5" viewBox="0 0 24 24">
                                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                                    </svg>
                                    Google
                                </button>
                                <button className="flex items-center justify-center gap-2 rounded-lg border border-secondary px-4 py-3 text-sm font-medium text-primary transition hover:bg-secondary">
                                    <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"/>
                                    </svg>
                                    Facebook
                                </button>
                            </div>

                            {/* Sign Up Link */}
                            <p className="mt-8 text-center text-sm text-tertiary">
                                Don't have an account?{" "}
                                <a
                                    href="/register"
                                    className="font-semibold text-brand-600 transition hover:text-brand-700"
                                >
                                    Sign up
                                </a>
                            </p>
                        </motion.div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
