"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/base/buttons/button";
import { Mail01, Lock01, Eye, EyeOff, User01 } from "@untitledui/icons";
import { Header } from "@/app/components/header";
import { Footer } from "@/app/components/footer";

export default function RegisterPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        acceptTerms: false,
        newsletter: false,
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
        // Handle registration
        console.log("Register:", formData);
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
                            Create Account
                        </h1>
                        <nav className="mt-4 flex items-center justify-center gap-2 text-sm text-tertiary">
                            <a href="/" className="transition hover:text-brand-600">Home</a>
                            <span>/</span>
                            <span className="text-primary">Register</span>
                        </nav>
                    </div>
                </div>

                {/* Register Form */}
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
                                    Join Our Community
                                </h2>
                                <p className="mt-2 text-sm text-tertiary">
                                    Create an account to get exclusive offers
                                </p>
                            </div>

                            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                                {/* Name Fields */}
                                <div className="grid gap-4 sm:grid-cols-2">
                                    <div>
                                        <label className="mb-2 block text-sm font-medium text-primary">
                                            First Name
                                        </label>
                                        <div className="relative">
                                            <User01 className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-tertiary" />
                                            <input
                                                type="text"
                                                name="firstName"
                                                value={formData.firstName}
                                                onChange={handleInputChange}
                                                placeholder="John"
                                                className="w-full rounded-lg border border-secondary py-3 pl-12 pr-4 text-sm focus:border-brand-500 focus:outline-none"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="mb-2 block text-sm font-medium text-primary">
                                            Last Name
                                        </label>
                                        <div className="relative">
                                            <User01 className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-tertiary" />
                                            <input
                                                type="text"
                                                name="lastName"
                                                value={formData.lastName}
                                                onChange={handleInputChange}
                                                placeholder="Doe"
                                                className="w-full rounded-lg border border-secondary py-3 pl-12 pr-4 text-sm focus:border-brand-500 focus:outline-none"
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Email */}
                                <div>
                                    <label className="mb-2 block text-sm font-medium text-primary">
                                        Email Address
                                    </label>
                                    <div className="relative">
                                        <Mail01 className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-tertiary" />
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            placeholder="your@email.com"
                                            className="w-full rounded-lg border border-secondary py-3 pl-12 pr-4 text-sm focus:border-brand-500 focus:outline-none"
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Password */}
                                <div>
                                    <label className="mb-2 block text-sm font-medium text-primary">
                                        Password
                                    </label>
                                    <div className="relative">
                                        <Lock01 className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-tertiary" />
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            name="password"
                                            value={formData.password}
                                            onChange={handleInputChange}
                                            placeholder="Create a password"
                                            className="w-full rounded-lg border border-secondary py-3 pl-12 pr-12 text-sm focus:border-brand-500 focus:outline-none"
                                            required
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute right-4 top-1/2 -translate-y-1/2 text-tertiary transition hover:text-primary"
                                        >
                                            {showPassword ? (
                                                <EyeOff className="size-5" />
                                            ) : (
                                                <Eye className="size-5" />
                                            )}
                                        </button>
                                    </div>
                                    <p className="mt-1.5 text-xs text-tertiary">
                                        Must be at least 8 characters
                                    </p>
                                </div>

                                {/* Confirm Password */}
                                <div>
                                    <label className="mb-2 block text-sm font-medium text-primary">
                                        Confirm Password
                                    </label>
                                    <div className="relative">
                                        <Lock01 className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-tertiary" />
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            name="confirmPassword"
                                            value={formData.confirmPassword}
                                            onChange={handleInputChange}
                                            placeholder="Confirm your password"
                                            className="w-full rounded-lg border border-secondary py-3 pl-12 pr-4 text-sm focus:border-brand-500 focus:outline-none"
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Checkboxes */}
                                <div className="space-y-3">
                                    <label className="flex cursor-pointer items-start gap-2">
                                        <input
                                            type="checkbox"
                                            name="acceptTerms"
                                            checked={formData.acceptTerms}
                                            onChange={handleInputChange}
                                            className="mt-0.5 size-4 rounded accent-brand-600"
                                            required
                                        />
                                        <span className="text-sm text-tertiary">
                                            I agree to the{" "}
                                            <a href="/terms" className="text-brand-600 hover:underline">
                                                Terms of Service
                                            </a>{" "}
                                            and{" "}
                                            <a href="/privacy" className="text-brand-600 hover:underline">
                                                Privacy Policy
                                            </a>
                                        </span>
                                    </label>
                                    <label className="flex cursor-pointer items-start gap-2">
                                        <input
                                            type="checkbox"
                                            name="newsletter"
                                            checked={formData.newsletter}
                                            onChange={handleInputChange}
                                            className="mt-0.5 size-4 rounded accent-brand-600"
                                        />
                                        <span className="text-sm text-tertiary">
                                            Subscribe to our newsletter for exclusive offers and updates
                                        </span>
                                    </label>
                                </div>

                                {/* Submit */}
                                <Button
                                    type="submit"
                                    color="primary"
                                    size="lg"
                                    className="w-full justify-center"
                                >
                                    Create Account
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

                            {/* Sign In Link */}
                            <p className="mt-8 text-center text-sm text-tertiary">
                                Already have an account?{" "}
                                <a
                                    href="/login"
                                    className="font-semibold text-brand-600 transition hover:text-brand-700"
                                >
                                    Sign in
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
