"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/base/buttons/button";
import { Input } from "@/components/base/input/input";
import { Mail01, Lock01, Eye, EyeOff, User01 } from "@untitledui/icons";
import { Checkbox } from "@/components/base/checkbox/checkbox";
import { signUp, signInWithGoogle, signInWithMagicLink, supabase } from "@/lib/supabase";
import { useToastActions } from "@/components/base/toast/toast";

export default function RegisterPage() {
    const router = useRouter();
    const toast = useToastActions();
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isGoogleLoading, setIsGoogleLoading] = useState(false);
    const [isMagicLoading, setIsMagicLoading] = useState(false);
    const [magicLinkSent, setMagicLinkSent] = useState(false);
    const [checkingAuth, setCheckingAuth] = useState(true);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        acceptTerms: false,
    });

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            if (session?.user) {
                router.push("/account");
            } else {
                setCheckingAuth(false);
            }
        });

        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            if (session?.user) {
                router.push("/account");
            }
        });

        return () => subscription.unsubscribe();
    }, [router]);

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

        // Validate passwords match
        if (formData.password !== formData.confirmPassword) {
            toast.error("Passwords don't match", "Please make sure your passwords match.");
            return;
        }

        // Validate password length
        if (formData.password.length < 8) {
            toast.error("Password too short", "Password must be at least 8 characters.");
            return;
        }

        // Validate terms accepted
        if (!formData.acceptTerms) {
            toast.error("Terms required", "Please accept the Terms of Service.");
            return;
        }

        setIsLoading(true);

        try {
            await signUp(
                formData.email,
                formData.password,
                formData.firstName,
                formData.lastName
            );
            toast.success("Account created!", "Welcome to Prestige Smile.");
            router.push("/");
        } catch (error: any) {
            console.error("Registration error:", error);
            toast.error("Registration failed", error.message || "Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    const handleGoogleSignIn = async () => {
        setIsGoogleLoading(true);
        try {
            await signInWithGoogle("/account");
        } catch (error: any) {
            console.error("Google sign-in error:", error);
            toast.error("Google sign-in failed", error.message || "Please try again.");
            setIsGoogleLoading(false);
        }
    };

    const handleMagicLink = async () => {
        if (!formData.email) {
            toast.error("Email required", "Please enter your email above first.");
            return;
        }
        if (!formData.acceptTerms) {
            toast.error("Terms required", "Please accept the Terms of Service.");
            return;
        }
        setIsMagicLoading(true);
        try {
            await signInWithMagicLink(formData.email, "/account", {
                first_name: formData.firstName || undefined,
                last_name: formData.lastName || undefined,
            });
            setMagicLinkSent(true);
            toast.success("Check your email", `We sent a sign-in link to ${formData.email}.`);
        } catch (error: any) {
            console.error("Magic link error:", error);
            toast.error("Couldn't send link", error.message || "Please try again.");
        } finally {
            setIsMagicLoading(false);
        }
    };

    return (
        <div className="flex min-h-screen">
            {/* Left Side - Branded Panel */}
            <div className="hidden bg-gradient-to-br from-brand-700 via-brand-800 to-brand-900 lg:flex lg:w-1/2 lg:flex-col lg:justify-center lg:px-16 xl:px-24">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {/* Headline */}
                    <h2 className="text-4xl font-semibold leading-tight text-white xl:text-5xl">
                        Start Your Journey<br />
                        to a Brighter Smile
                    </h2>

                    <p className="mt-6 text-lg text-brand-100">
                        Join thousands of happy customers who have transformed their smiles with our professional teeth whitening treatments.
                    </p>

                    {/* Benefits */}
                    <div className="mt-12 space-y-6">
                        {[
                            { title: "Professional Treatment", desc: "Up to 7 shades whiter in one session" },
                            { title: "Safe & Comfortable", desc: "Gentle on your teeth and gums" },
                            { title: "Lasting Results", desc: "Enjoy your bright smile for months" },
                        ].map((benefit, i) => (
                            <motion.div
                                key={benefit.title}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                                className="flex items-start gap-4"
                            >
                                <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-brand-600">
                                    <svg className="size-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="font-semibold text-white">{benefit.title}</p>
                                    <p className="text-sm text-brand-200">{benefit.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Trust Badges */}
                    <div className="mt-16">
                        <div className="flex items-center gap-6">
                            <div className="flex items-center gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="size-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            <span className="text-sm text-brand-200">4.9/5 from 1000+ customers</span>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Right Side - Form */}
            <div className="flex w-full flex-col justify-center px-6 py-4    lg:w-1/2 lg:px-16 xl:px-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mx-auto w-full max-w-md"
                >
                    
                    {/* Heading */}
                    <h1 className="text-3xl font-semibold text-primary">Create Account</h1>
                    <p className="mt-2 text-secondary">
                        Join us and start your journey to a brighter smile.
                    </p>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="mt-4 space-y-4">
                        {/* Name Fields */}
                        <div className="grid gap-4 sm:grid-cols-2">
                            <Input
                                type="text"
                                name="firstName"
                                label="First Name"
                                icon={User01}
                                value={formData.firstName}
                                onChange={(value) => setFormData({ ...formData, firstName: value })}
                                placeholder="John"
                                isRequired
                                size="md"
                            />
                            <Input
                                type="text"
                                name="lastName"
                                label="Last Name"
                                icon={User01}
                                value={formData.lastName}
                                onChange={(value) => setFormData({ ...formData, lastName: value })}
                                placeholder="Doe"
                                isRequired
                                size="md"
                            />
                        </div>

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
                                    placeholder="Create a password"
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
                            <p className="text-xs text-tertiary">Must be at least 8 characters</p>
                        </div>

                        {/* Confirm Password */}
                        <div className="space-y-1.5">
                            <label className="text-sm font-medium text-secondary">
                                Confirm Password
                            </label>
                            <div className="relative">
                                <div className="pointer-events-none absolute left-3 top-1/2 z-10 -translate-y-1/2">
                                    <Lock01 className="size-5 text-fg-quaternary" />
                                </div>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleInputChange}
                                    placeholder="Confirm your password"
                                    className="w-full rounded-lg bg-primary py-2.5 pl-10 pr-4 text-md text-primary shadow-xs ring-1 ring-inset ring-primary placeholder:text-placeholder focus:outline-none focus:ring-2 focus:ring-brand"
                                    required
                                />
                            </div>
                        </div>

                        {/* Terms Checkbox */}
                        <Checkbox
                            isSelected={formData.acceptTerms}
                            onChange={(checked) => setFormData({ ...formData, acceptTerms: checked })}
                            isRequired
                            label={
                                <span className="text-tertiary">
                                    I agree to the{" "}
                                    <a href="/terms" className="text-brand-600 hover:underline">
                                        Terms of Service
                                    </a>{" "}
                                    and{" "}
                                    <a href="/privacy" className="text-brand-600 hover:underline">
                                        Privacy Policy
                                    </a>
                                </span>
                            }
                        />

                        {/* Submit */}
                        <Button
                            type="submit"
                            color="primary"
                            size="lg"
                            className="w-full justify-center"
                            isLoading={isLoading}
                        >
                            Create Account
                        </Button>
                    </form>

                    {/* Divider */}
                    <div className="my-4 flex items-center gap-4">
                        <div className="h-px flex-1 bg-secondary" />
                        <span className="text-sm text-tertiary">OR</span>
                        <div className="h-px flex-1 bg-secondary" />
                    </div>

                    {/* Social Login */}
                    <div className="grid grid-cols-2 gap-3">
                        <button
                            type="button"
                            onClick={handleGoogleSignIn}
                            disabled={isGoogleLoading}
                            className="flex items-center justify-center gap-2 rounded-lg border border-secondary bg-primary px-4 py-3 text-sm font-medium text-primary transition hover:bg-secondary disabled:opacity-60"
                        >
                            <svg className="size-5" viewBox="0 0 24 24">
                                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                            </svg>
                            {isGoogleLoading ? "..." : "Google"}
                        </button>
                        <button
                            type="button"
                            onClick={handleMagicLink}
                            disabled={isMagicLoading || magicLinkSent}
                            className="flex items-center justify-center gap-2 rounded-lg border border-secondary bg-primary px-4 py-3 text-sm font-medium text-primary transition hover:bg-secondary disabled:opacity-60"
                        >
                            <Mail01 className="size-5 text-fg-secondary" />
                            {magicLinkSent ? "Link sent" : isMagicLoading ? "..." : "Email Link"}
                        </button>
                    </div>

                    {/* Sign In Link */}
                    <p className="mt-8 text-center text-sm text-tertiary">
                        Already have an account?{" "}
                        <a
                            href="/login"
                            className="font-semibold text-brand-600 transition hover:text-brand-700"
                        >
                            Sign In
                        </a>
                    </p>
                </motion.div>
            </div>
        </div>
    );
}
