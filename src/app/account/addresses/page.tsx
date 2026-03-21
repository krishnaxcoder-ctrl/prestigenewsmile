"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/base/buttons/button";
import { Input } from "@/components/base/input/input";
import {
    MarkerPin01,
    Plus,
    Edit02,
    Trash01,
    Check,
    X,
    Loading01,
    Home02,
    Building07,
} from "@untitledui/icons";
import { Header } from "@/app/components/header";
import { Footer } from "@/app/components/footer";
import { RatingBadge } from "@/components/foundations/rating-badge";
import {
    getSession,
    getAddresses,
    addAddress,
    updateAddress,
    deleteAddress,
    setDefaultAddress,
    type Address,
} from "@/lib/supabase";
import { useToastActions } from "@/components/base/toast/toast";

const addressLabels = [
    { value: "Home", icon: Home02 },
    { value: "Work", icon: Building07 },
    { value: "Other", icon: MarkerPin01 },
];

interface AddressFormData {
    label: string;
    first_name: string;
    last_name: string;
    address: string;
    apartment: string;
    city: string;
    postal_code: string;
    country: string;
    phone: string;
    is_default: boolean;
}

const emptyForm: AddressFormData = {
    label: "Home",
    first_name: "",
    last_name: "",
    address: "",
    apartment: "",
    city: "",
    postal_code: "",
    country: "Switzerland",
    phone: "",
    is_default: false,
};

export default function AddressesPage() {
    const router = useRouter();
    const toast = useToastActions();
    const [addresses, setAddresses] = useState<Address[]>([]);
    const [loading, setLoading] = useState(true);
    const [userId, setUserId] = useState<string | null>(null);
    const [showForm, setShowForm] = useState(false);
    const [editingId, setEditingId] = useState<string | null>(null);
    const [formData, setFormData] = useState<AddressFormData>(emptyForm);
    const [submitting, setSubmitting] = useState(false);
    const [deletingId, setDeletingId] = useState<string | null>(null);

    useEffect(() => {
        async function fetchAddresses() {
            try {
                const session = await getSession();

                if (!session?.user) {
                    router.push("/login");
                    return;
                }

                setUserId(session.user.id);
                const data = await getAddresses(session.user.id);
                setAddresses(data);
            } catch (err) {
                console.error("Error fetching addresses:", err);
                toast.error("Error loading addresses", "Please try again.");
            } finally {
                setLoading(false);
            }
        }

        fetchAddresses();
    }, [router, toast]);

    const handleEdit = (address: Address) => {
        setFormData({
            label: address.label,
            first_name: address.first_name,
            last_name: address.last_name,
            address: address.address,
            apartment: address.apartment || "",
            city: address.city,
            postal_code: address.postal_code,
            country: address.country,
            phone: address.phone || "",
            is_default: address.is_default,
        });
        setEditingId(address.id);
        setShowForm(true);
    };

    const handleCancel = () => {
        setFormData(emptyForm);
        setEditingId(null);
        setShowForm(false);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!userId) return;

        setSubmitting(true);

        try {
            const addressData = {
                ...formData,
                apartment: formData.apartment || null,
                phone: formData.phone || null,
            };

            if (editingId) {
                // Update existing address
                const updated = await updateAddress(editingId, userId, addressData);
                setAddresses((prev) =>
                    prev.map((addr) => (addr.id === editingId ? updated : addr))
                );
                toast.success("Address updated");
            } else {
                // Add new address
                const newAddress = await addAddress(userId, addressData);
                setAddresses((prev) => [newAddress, ...prev]);
                toast.success("Address added");
            }

            handleCancel();
        } catch (err) {
            console.error("Error saving address:", err);
            toast.error("Error saving address", "Please try again.");
        } finally {
            setSubmitting(false);
        }
    };

    const handleDelete = async (addressId: string) => {
        if (!userId) return;

        setDeletingId(addressId);

        try {
            await deleteAddress(addressId, userId);
            setAddresses((prev) => prev.filter((addr) => addr.id !== addressId));
            toast.success("Address deleted");
        } catch (err) {
            console.error("Error deleting address:", err);
            toast.error("Error deleting address", "Please try again.");
        } finally {
            setDeletingId(null);
        }
    };

    const handleSetDefault = async (addressId: string) => {
        if (!userId) return;

        try {
            await setDefaultAddress(addressId, userId);
            setAddresses((prev) =>
                prev.map((addr) => ({
                    ...addr,
                    is_default: addr.id === addressId,
                }))
            );
            toast.success("Default address updated");
        } catch (err) {
            console.error("Error setting default:", err);
            toast.error("Error updating default", "Please try again.");
        }
    };

    const getLabelIcon = (label: string) => {
        const found = addressLabels.find((l) => l.value === label);
        return found?.icon || MarkerPin01;
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
                            <a href="/account" className="uppercase transition hover:text-teal-600">Account</a>
                            <span>/</span>
                            <span className="uppercase text-teal-600">Addresses</span>
                        </nav>
                        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
                            <h1 className="text-2xl font-semibold uppercase text-primary md:text-3xl">
                                My <span className="text-teal-600">Addresses</span>
                            </h1>
                            <div className="hidden shrink-0 md:block">
                                <RatingBadge rating={4.9} title="Fast Delivery" subtitle="Worldwide Shipping" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Addresses Content */}
                <section className="px-4 py-12 md:px-8 md:py-16 lg:px-16">
                    <div className="mx-auto max-w-4xl">
                        {/* Header */}
                        <div className="mb-8 flex items-center justify-between">
                            <p className="text-sm text-tertiary">
                                <span className="font-semibold text-primary">{addresses.length}</span> saved addresses
                            </p>
                            {!showForm && (
                                <Button
                                    color="primary"
                                    size="sm"
                                    iconLeading={Plus}
                                    onClick={() => {
                                        setFormData({
                                            ...emptyForm,
                                            is_default: addresses.length === 0,
                                        });
                                        setShowForm(true);
                                    }}
                                >
                                    Add Address
                                </Button>
                            )}
                        </div>

                        {/* Address Form */}
                        <AnimatePresence>
                            {showForm && (
                                <motion.div
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    className="mb-8 rounded-2xl border border-secondary bg-primary p-6"
                                >
                                    <h2 className="mb-6 text-lg font-semibold text-primary">
                                        {editingId ? "Edit Address" : "Add New Address"}
                                    </h2>
                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        {/* Label Selection */}
                                        <div className="space-y-1.5">
                                            <label className="text-sm font-medium text-secondary">
                                                Address Label
                                            </label>
                                            <div className="flex gap-2">
                                                {addressLabels.map((label) => {
                                                    const Icon = label.icon;
                                                    return (
                                                        <button
                                                            key={label.value}
                                                            type="button"
                                                            onClick={() => setFormData({ ...formData, label: label.value })}
                                                            className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition ${
                                                                formData.label === label.value
                                                                    ? "bg-brand-600 text-white"
                                                                    : "bg-secondary text-tertiary hover:text-primary"
                                                            }`}
                                                        >
                                                            <Icon className="size-4" />
                                                            {label.value}
                                                        </button>
                                                    );
                                                })}
                                            </div>
                                        </div>

                                        {/* Name Fields */}
                                        <div className="grid gap-4 sm:grid-cols-2">
                                            <Input
                                                type="text"
                                                label="First Name"
                                                value={formData.first_name}
                                                onChange={(value) => setFormData({ ...formData, first_name: value })}
                                                placeholder="John"
                                                isRequired
                                                size="md"
                                            />
                                            <Input
                                                type="text"
                                                label="Last Name"
                                                value={formData.last_name}
                                                onChange={(value) => setFormData({ ...formData, last_name: value })}
                                                placeholder="Doe"
                                                isRequired
                                                size="md"
                                            />
                                        </div>

                                        {/* Address */}
                                        <Input
                                            type="text"
                                            label="Street Address"
                                            value={formData.address}
                                            onChange={(value) => setFormData({ ...formData, address: value })}
                                            placeholder="123 Main Street"
                                            isRequired
                                            size="md"
                                        />

                                        {/* Apartment */}
                                        <Input
                                            type="text"
                                            label="Apartment, Suite, etc."
                                            value={formData.apartment}
                                            onChange={(value) => setFormData({ ...formData, apartment: value })}
                                            placeholder="Apt 4B"
                                            size="md"
                                        />

                                        {/* City, Postal, Country */}
                                        <div className="grid gap-4 sm:grid-cols-3">
                                            <Input
                                                type="text"
                                                label="City"
                                                value={formData.city}
                                                onChange={(value) => setFormData({ ...formData, city: value })}
                                                placeholder="Zurich"
                                                isRequired
                                                size="md"
                                            />
                                            <Input
                                                type="text"
                                                label="Postal Code"
                                                value={formData.postal_code}
                                                onChange={(value) => setFormData({ ...formData, postal_code: value })}
                                                placeholder="8001"
                                                isRequired
                                                size="md"
                                            />
                                            <Input
                                                type="text"
                                                label="Country"
                                                value={formData.country}
                                                onChange={(value) => setFormData({ ...formData, country: value })}
                                                placeholder="Switzerland"
                                                isRequired
                                                size="md"
                                            />
                                        </div>

                                        {/* Phone */}
                                        <Input
                                            type="tel"
                                            label="Phone (optional)"
                                            value={formData.phone}
                                            onChange={(value) => setFormData({ ...formData, phone: value })}
                                            placeholder="+41 79 123 45 67"
                                            size="md"
                                        />

                                        {/* Default Checkbox */}
                                        <label className="flex items-center gap-3">
                                            <input
                                                type="checkbox"
                                                checked={formData.is_default}
                                                onChange={(e) => setFormData({ ...formData, is_default: e.target.checked })}
                                                className="size-4 rounded border-secondary text-brand-600 focus:ring-brand-600"
                                            />
                                            <span className="text-sm text-secondary">Set as default address</span>
                                        </label>

                                        {/* Actions */}
                                        <div className="flex justify-end gap-3 pt-4">
                                            <Button
                                                type="button"
                                                color="secondary"
                                                size="md"
                                                onClick={handleCancel}
                                            >
                                                Cancel
                                            </Button>
                                            <Button
                                                type="submit"
                                                color="primary"
                                                size="md"
                                                isLoading={submitting}
                                            >
                                                {editingId ? "Update Address" : "Add Address"}
                                            </Button>
                                        </div>
                                    </form>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Addresses List */}
                        {addresses.length > 0 ? (
                            <div className="space-y-4">
                                {addresses.map((address, index) => {
                                    const LabelIcon = getLabelIcon(address.label);
                                    return (
                                        <motion.div
                                            key={address.id}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.3, delay: index * 0.05 }}
                                            className={`relative rounded-2xl border bg-primary p-6 ${
                                                address.is_default ? "border-brand-300 ring-1 ring-brand-100" : "border-secondary"
                                            }`}
                                        >
                                            {/* Default Badge */}
                                            {address.is_default && (
                                                <span className="absolute right-4 top-4 rounded-full bg-brand-50 px-2 py-1 text-xs font-semibold text-brand-600">
                                                    Default
                                                </span>
                                            )}

                                            <div className="flex gap-4">
                                                {/* Icon */}
                                                <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-brand-50">
                                                    <LabelIcon className="size-6 text-brand-600" />
                                                </div>

                                                {/* Content */}
                                                <div className="flex-1">
                                                    <div className="flex items-center gap-2">
                                                        <h3 className="font-semibold text-primary">{address.label}</h3>
                                                    </div>
                                                    <p className="mt-1 text-sm text-secondary">
                                                        {address.first_name} {address.last_name}
                                                    </p>
                                                    <p className="text-sm text-tertiary">
                                                        {address.address}
                                                        {address.apartment && `, ${address.apartment}`}
                                                    </p>
                                                    <p className="text-sm text-tertiary">
                                                        {address.postal_code} {address.city}, {address.country}
                                                    </p>
                                                    {address.phone && (
                                                        <p className="mt-1 text-sm text-tertiary">{address.phone}</p>
                                                    )}

                                                    {/* Actions */}
                                                    <div className="mt-4 flex flex-wrap gap-2">
                                                        <Button
                                                            color="secondary"
                                                            size="sm"
                                                            iconLeading={Edit02}
                                                            onClick={() => handleEdit(address)}
                                                        >
                                                            Edit
                                                        </Button>
                                                        {!address.is_default && (
                                                            <Button
                                                                color="secondary"
                                                                size="sm"
                                                                iconLeading={Check}
                                                                onClick={() => handleSetDefault(address.id)}
                                                            >
                                                                Set as Default
                                                            </Button>
                                                        )}
                                                        <Button
                                                            color="tertiary-destructive"
                                                            size="sm"
                                                            iconLeading={Trash01}
                                                            onClick={() => handleDelete(address.id)}
                                                            isLoading={deletingId === address.id}
                                                        >
                                                            Delete
                                                        </Button>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        ) : (
                            /* Empty State */
                            !showForm && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="py-16 text-center"
                                >
                                    <div className="mx-auto flex size-24 items-center justify-center rounded-full bg-secondary">
                                        <MarkerPin01 className="size-12 text-tertiary" />
                                    </div>
                                    <h2 className="mt-6 text-xl font-semibold text-primary">
                                        No addresses saved
                                    </h2>
                                    <p className="mt-2 text-tertiary">
                                        Add an address for faster checkout.
                                    </p>
                                    <Button
                                        color="primary"
                                        size="lg"
                                        className="mt-8"
                                        iconLeading={Plus}
                                        onClick={() => {
                                            setFormData({ ...emptyForm, is_default: true });
                                            setShowForm(true);
                                        }}
                                    >
                                        Add Your First Address
                                    </Button>
                                </motion.div>
                            )
                        )}
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
