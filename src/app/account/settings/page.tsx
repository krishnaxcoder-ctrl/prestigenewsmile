"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/base/buttons/button";
import { Input } from "@/components/base/input/input";
import {
    User01,
    Mail01,
    Phone01,
    Lock01,
    Eye,
    EyeOff,
    Camera01,
    Loading01,
    Check,
} from "@untitledui/icons";
import { Header } from "@/app/components/header";
import { Footer } from "@/app/components/footer";
import { Avatar } from "@/components/base/avatar/avatar";
import { RatingBadge } from "@/components/foundations/rating-badge";
import {
    getSession,
    getProfile,
    updateProfile,
    supabase,
    type Profile,
} from "@/lib/supabase";
import { useToastActions } from "@/components/base/toast/toast";

export default function SettingsPage() {
    const router = useRouter();
    const toast = useToastActions();
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [userId, setUserId] = useState<string | null>(null);
    const [profile, setProfile] = useState<Profile | null>(null);

    // Profile form
    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        phone: "",
    });

    // Password form
    const [passwordData, setPasswordData] = useState({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
    });
    const [showCurrentPassword, setShowCurrentPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [changingPassword, setChangingPassword] = useState(false);

    useEffect(() => {
        async function fetchProfile() {
            try {
                const session = await getSession();

                if (!session?.user) {
                    router.push("/login");
                    return;
                }

                setUserId(session.user.id);
                const profileData = await getProfile(session.user.id);

                if (profileData) {
                    setProfile(profileData);
                    setFormData({
                        first_name: profileData.first_name || "",
                        last_name: profileData.last_name || "",
                        phone: profileData.phone || "",
                    });
                }
            } catch (err) {
                console.error("Error fetching profile:", err);
                toast.error("Error loading profile", "Please try again.");
            } finally {
                setLoading(false);
            }
        }

        fetchProfile();
    }, [router, toast]);

    const handleSaveProfile = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!userId) return;

        setSaving(true);

        try {
            const updated = await updateProfile(userId, {
                first_name: formData.first_name || null,
                last_name: formData.last_name || null,
                phone: formData.phone || null,
            });
            setProfile(updated);
            toast.success("Profile updated", "Your changes have been saved.");
        } catch (err) {
            console.error("Error updating profile:", err);
            toast.error("Error saving profile", "Please try again.");
        } finally {
            setSaving(false);
        }
    };

    const handleChangePassword = async (e: React.FormEvent) => {
        e.preventDefault();

        // Validation
        if (passwordData.newPassword !== passwordData.confirmPassword) {
            toast.error("Passwords don't match", "Please make sure your passwords match.");
            return;
        }

        if (passwordData.newPassword.length < 8) {
            toast.error("Password too short", "Password must be at least 8 characters.");
            return;
        }

        setChangingPassword(true);

        try {
            const { error } = await supabase.auth.updateUser({
                password: passwordData.newPassword,
            });

            if (error) throw error;

            toast.success("Password updated", "Your password has been changed.");
            setPasswordData({
                currentPassword: "",
                newPassword: "",
                confirmPassword: "",
            });
        } catch (err: any) {
            console.error("Error changing password:", err);
            toast.error("Error changing password", err.message || "Please try again.");
        } finally {
            setChangingPassword(false);
        }
    };

    const fullName = profile
        ? [profile.first_name, profile.last_name].filter(Boolean).join(" ") || "User"
        : "User";

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

    return (
        <div className="overflow-x-hidden">
            <Header />
            <main className="bg-primary">
                {/* Hero Header */}
                <section className="border-b border-brand-400 bg-brand-50 px-4 py-12 md:px-8 md:py-10 lg:px-16">
                    <div className="mx-auto max-w-7xl">
                        <nav className="mb-4 flex items-center gap-2 text-sm text-tertiary">
                            <a href="/" className="uppercase transition hover:text-brand-600">Home</a>
                            <span>/</span>
                            <a href="/account" className="uppercase transition hover:text-brand-600">Account</a>
                            <span>/</span>
                            <span className="uppercase text-brand-600">Settings</span>
                        </nav>
                        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
                            <h1 className="text-2xl font-semibold uppercase text-primary md:text-3xl">
                                Account <span className="text-brand-600">Settings</span>
                            </h1>
                            <div className="hidden shrink-0 md:block">
                                <RatingBadge rating={4.9} title="Secure Account" subtitle="Your Data is Safe" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Settings Content */}
                <section className="px-4 py-12 md:px-8 md:py-16 lg:px-16">
                    <div className="mx-auto max-w-2xl space-y-8">
                        {/* Profile Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="rounded-2xl border border-secondary bg-primary p-6"
                        >
                            <h2 className="mb-6 text-lg font-semibold text-primary">
                                Profile Information
                            </h2>

                            {/* Avatar */}
                            <div className="mb-6 flex items-center gap-4">
                                <div className="relative">
                                    <Avatar
                                        size="2xl"
                                        src={profile?.avatar_url}
                                        alt={fullName}
                                        initials={`${formData.first_name?.[0] || ""}${formData.last_name?.[0] || ""}`}
                                        className="ring-4 ring-brand-100"
                                    />
                                    <button
                                        className="absolute bottom-0 right-0 flex size-8 items-center justify-center rounded-full bg-brand-600 text-white shadow-md transition hover:bg-brand-700"
                                        aria-label="Change avatar"
                                    >
                                        <Camera01 className="size-4" />
                                    </button>
                                </div>
                                <div>
                                    <p className="font-semibold text-primary">{fullName}</p>
                                    <p className="text-sm text-tertiary">{profile?.email}</p>
                                </div>
                            </div>

                            <form onSubmit={handleSaveProfile} className="space-y-4">
                                <div className="grid gap-4 sm:grid-cols-2">
                                    <Input
                                        type="text"
                                        label="First Name"
                                        icon={User01}
                                        value={formData.first_name}
                                        onChange={(value) => setFormData({ ...formData, first_name: value })}
                                        placeholder="John"
                                        size="md"
                                    />
                                    <Input
                                        type="text"
                                        label="Last Name"
                                        icon={User01}
                                        value={formData.last_name}
                                        onChange={(value) => setFormData({ ...formData, last_name: value })}
                                        placeholder="Doe"
                                        size="md"
                                    />
                                </div>

                                <Input
                                    type="email"
                                    label="Email"
                                    icon={Mail01}
                                    value={profile?.email || ""}
                                    onChange={() => {}}
                                    placeholder="your@email.com"
                                    size="md"
                                    isDisabled
                                    hint="Email cannot be changed"
                                />

                                <Input
                                    type="tel"
                                    label="Phone Number"
                                    icon={Phone01}
                                    value={formData.phone}
                                    onChange={(value) => setFormData({ ...formData, phone: value })}
                                    placeholder="+41 79 123 45 67"
                                    size="md"
                                />

                                <div className="flex justify-end pt-2">
                                    <Button
                                        type="submit"
                                        color="primary"
                                        size="md"
                                        iconLeading={Check}
                                        isLoading={saving}
                                    >
                                        Save Changes
                                    </Button>
                                </div>
                            </form>
                        </motion.div>

                        {/* Password Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="rounded-2xl border border-secondary bg-primary p-6"
                        >
                            <h2 className="mb-6 text-lg font-semibold text-primary">
                                Change Password
                            </h2>

                            <form onSubmit={handleChangePassword} className="space-y-4">
                                {/* New Password */}
                                <div className="space-y-1.5">
                                    <label className="text-sm font-medium text-secondary">
                                        New Password
                                    </label>
                                    <div className="relative">
                                        <div className="pointer-events-none absolute left-3 top-1/2 z-10 -translate-y-1/2">
                                            <Lock01 className="size-5 text-fg-quaternary" />
                                        </div>
                                        <input
                                            type={showNewPassword ? "text" : "password"}
                                            value={passwordData.newPassword}
                                            onChange={(e) => setPasswordData({ ...passwordData, newPassword: e.target.value })}
                                            placeholder="Enter new password"
                                            className="w-full rounded-lg bg-primary py-2.5 pl-10 pr-12 text-md text-primary shadow-xs ring-1 ring-inset ring-primary placeholder:text-placeholder focus:outline-none focus:ring-2 focus:ring-brand"
                                            required
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowNewPassword(!showNewPassword)}
                                            className="absolute right-3 top-1/2 -translate-y-1/2 text-fg-quaternary transition hover:text-fg-quaternary_hover"
                                        >
                                            {showNewPassword ? (
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
                                        Confirm New Password
                                    </label>
                                    <div className="relative">
                                        <div className="pointer-events-none absolute left-3 top-1/2 z-10 -translate-y-1/2">
                                            <Lock01 className="size-5 text-fg-quaternary" />
                                        </div>
                                        <input
                                            type={showNewPassword ? "text" : "password"}
                                            value={passwordData.confirmPassword}
                                            onChange={(e) => setPasswordData({ ...passwordData, confirmPassword: e.target.value })}
                                            placeholder="Confirm new password"
                                            className="w-full rounded-lg bg-primary py-2.5 pl-10 pr-4 text-md text-primary shadow-xs ring-1 ring-inset ring-primary placeholder:text-placeholder focus:outline-none focus:ring-2 focus:ring-brand"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="flex justify-end pt-2">
                                    <Button
                                        type="submit"
                                        color="primary"
                                        size="md"
                                        isLoading={changingPassword}
                                    >
                                        Update Password
                                    </Button>
                                </div>
                            </form>
                        </motion.div>

                        {/* Danger Zone */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="rounded-2xl border border-error-200 bg-error-50 p-6"
                        >
                            <h2 className="mb-2 text-lg font-semibold text-error-700">
                                Danger Zone
                            </h2>
                            <p className="mb-4 text-sm text-error-600">
                                Once you delete your account, there is no going back. Please be certain.
                            </p>
                            <Button
                                color="primary-destructive"
                                size="sm"
                            >
                                Delete Account
                            </Button>
                        </motion.div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
