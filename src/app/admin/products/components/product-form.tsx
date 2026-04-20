"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Save01, ArrowLeft } from "@untitledui/icons";
import Link from "next/link";
import {
    createProduct,
    updateProduct,
    type Product,
    type ProductInput,
} from "@/lib/supabase";

interface ProductFormProps {
    mode: "create" | "edit";
    initial?: Product;
}

function toCsv(values: string[] | null | undefined): string {
    return (values ?? []).join(", ");
}

function fromCsv(value: string): string[] {
    return value
        .split(",")
        .map((v) => v.trim())
        .filter(Boolean);
}

export function ProductForm({ mode, initial }: ProductFormProps) {
    const router = useRouter();
    const [saving, setSaving] = useState(false);
    const [flash, setFlash] = useState<{ type: "error" | "success"; message: string } | null>(null);

    const [slug, setSlug] = useState(initial?.slug ?? "");
    const [name, setName] = useState(initial?.name ?? "");
    const [category, setCategory] = useState(initial?.category ?? "");
    const [price, setPrice] = useState(initial?.price != null ? String(initial.price) : "");
    const [originalPrice, setOriginalPrice] = useState(
        initial?.original_price != null ? String(initial.original_price) : "",
    );
    const [inStock, setInStock] = useState(initial?.in_stock !== false);
    const [description, setDescription] = useState(initial?.description ?? "");
    const [benefits, setBenefits] = useState(initial?.benefits ?? "");
    const [rating, setRating] = useState(initial?.rating != null ? String(initial.rating) : "");
    const [reviewsCount, setReviewsCount] = useState(
        initial?.reviews != null ? String(initial.reviews) : "",
    );
    const [images, setImages] = useState(toCsv(initial?.images));
    const [badges, setBadges] = useState(toCsv(initial?.badges));
    const [sizes, setSizes] = useState(toCsv(initial?.sizes));
    const [colors, setColors] = useState(toCsv(initial?.colors));
    const [features, setFeatures] = useState(toCsv(initial?.features));

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setSaving(true);
        setFlash(null);

        const priceNum = Number(price);
        if (!slug.trim() || !name.trim() || !category.trim() || Number.isNaN(priceNum)) {
            setFlash({ type: "error", message: "Slug, name, category, and price are required." });
            setSaving(false);
            return;
        }

        const payload: ProductInput = {
            slug: slug.trim(),
            name: name.trim(),
            category: category.trim(),
            price: priceNum,
            original_price: originalPrice ? Number(originalPrice) : null,
            rating: rating ? Number(rating) : null,
            reviews: reviewsCount ? Number(reviewsCount) : null,
            in_stock: inStock,
            description: description.trim() || null,
            images: fromCsv(images).length ? fromCsv(images) : null,
            badges: fromCsv(badges).length ? fromCsv(badges) : null,
            sizes: fromCsv(sizes).length ? fromCsv(sizes) : null,
            colors: fromCsv(colors).length ? fromCsv(colors) : null,
            features: fromCsv(features).length ? fromCsv(features) : null,
            benefits: benefits.trim() || null,
            additional_info: initial?.additional_info ?? null,
            customer_reviews: initial?.customer_reviews ?? null,
        };

        try {
            if (mode === "create") {
                const created = await createProduct(payload);
                router.push(`/admin/products/${created.id}/edit`);
            } else if (initial) {
                await updateProduct(initial.id, payload);
                setFlash({ type: "success", message: "Product saved." });
            }
        } catch (err) {
            console.error(err);
            const msg = err instanceof Error ? err.message : "Failed to save product.";
            setFlash({ type: "error", message: msg });
        } finally {
            setSaving(false);
        }
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                    <Link
                        href="/admin/products"
                        className="inline-flex items-center gap-2 text-sm text-tertiary hover:text-primary"
                    >
                        <ArrowLeft className="size-4" /> Back to products
                    </Link>
                    <h1
                        className="mt-2 text-2xl font-light text-primary"
                        style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                        {mode === "create" ? "New product" : initial?.name}
                    </h1>
                </div>
                <button
                    type="submit"
                    disabled={saving}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-700 disabled:opacity-50 sm:w-auto"
                >
                    <Save01 className="size-4" />
                    {saving ? "Saving..." : mode === "create" ? "Create" : "Save changes"}
                </button>
            </div>

            {flash && (
                <div
                    className={
                        flash.type === "error"
                            ? "rounded-lg border border-error-200 bg-error-50 px-4 py-3 text-sm text-error-700"
                            : "rounded-lg border border-brand-200 bg-brand-50 px-4 py-3 text-sm text-brand-800"
                    }
                >
                    {flash.message}
                </div>
            )}

            <div className="grid gap-6 lg:grid-cols-3">
                <div className="space-y-6 lg:col-span-2">
                    <section className="rounded-2xl border border-secondary bg-white p-6">
                        <h2 className="text-sm font-semibold uppercase tracking-wider text-tertiary">Basics</h2>
                        <div className="mt-4 grid gap-4 sm:grid-cols-2">
                            <Field label="Name" required>
                                <input
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="form-input"
                                    required
                                />
                            </Field>
                            <Field label="Slug" required hint="Lowercase, hyphenated">
                                <input
                                    value={slug}
                                    onChange={(e) => setSlug(e.target.value)}
                                    className="form-input"
                                    required
                                />
                            </Field>
                            <Field label="Category" required>
                                <input
                                    value={category}
                                    onChange={(e) => setCategory(e.target.value)}
                                    className="form-input"
                                    required
                                />
                            </Field>
                            <Field label="Description">
                                <textarea
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    rows={3}
                                    className="form-input"
                                />
                            </Field>
                            <Field label="Benefits (long text)">
                                <textarea
                                    value={benefits}
                                    onChange={(e) => setBenefits(e.target.value)}
                                    rows={3}
                                    className="form-input"
                                />
                            </Field>
                        </div>
                    </section>

                    <section className="rounded-2xl border border-secondary bg-white p-6">
                        <h2 className="text-sm font-semibold uppercase tracking-wider text-tertiary">Media &amp; variants</h2>
                        <div className="mt-4 space-y-4">
                            <Field label="Image URLs" hint="Comma-separated">
                                <textarea
                                    value={images}
                                    onChange={(e) => setImages(e.target.value)}
                                    rows={2}
                                    className="form-input"
                                />
                            </Field>
                            <Field label="Badges" hint="e.g. Bestseller, Limited">
                                <input value={badges} onChange={(e) => setBadges(e.target.value)} className="form-input" />
                            </Field>
                            <Field label="Sizes" hint="e.g. S, M, L">
                                <input value={sizes} onChange={(e) => setSizes(e.target.value)} className="form-input" />
                            </Field>
                            <Field label="Colors" hint="Hex values or names, comma-separated">
                                <input value={colors} onChange={(e) => setColors(e.target.value)} className="form-input" />
                            </Field>
                            <Field label="Features">
                                <textarea
                                    value={features}
                                    onChange={(e) => setFeatures(e.target.value)}
                                    rows={2}
                                    className="form-input"
                                />
                            </Field>
                        </div>
                    </section>
                </div>

                <div className="space-y-6">
                    <section className="rounded-2xl border border-secondary bg-white p-6">
                        <h2 className="text-sm font-semibold uppercase tracking-wider text-tertiary">Pricing &amp; stock</h2>
                        <div className="mt-4 space-y-4">
                            <Field label="Price (€)" required>
                                <input
                                    type="number"
                                    step="0.01"
                                    min="0"
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                    className="form-input"
                                    required
                                />
                            </Field>
                            <Field label="Original price (€)" hint="Optional, shown as struck-through">
                                <input
                                    type="number"
                                    step="0.01"
                                    min="0"
                                    value={originalPrice}
                                    onChange={(e) => setOriginalPrice(e.target.value)}
                                    className="form-input"
                                />
                            </Field>
                            <label className="flex items-center gap-2 text-sm text-secondary">
                                <input
                                    type="checkbox"
                                    checked={inStock}
                                    onChange={(e) => setInStock(e.target.checked)}
                                    className="size-4 rounded border-secondary text-brand-600 focus:ring-brand-500"
                                />
                                In stock
                            </label>
                        </div>
                    </section>

                    <section className="rounded-2xl border border-secondary bg-white p-6">
                        <h2 className="text-sm font-semibold uppercase tracking-wider text-tertiary">Reviews</h2>
                        <div className="mt-4 space-y-4">
                            <Field label="Average rating" hint="0-5">
                                <input
                                    type="number"
                                    step="0.1"
                                    min="0"
                                    max="5"
                                    value={rating}
                                    onChange={(e) => setRating(e.target.value)}
                                    className="form-input"
                                />
                            </Field>
                            <Field label="Review count">
                                <input
                                    type="number"
                                    min="0"
                                    value={reviewsCount}
                                    onChange={(e) => setReviewsCount(e.target.value)}
                                    className="form-input"
                                />
                            </Field>
                        </div>
                    </section>
                </div>
            </div>

            <style jsx>{`
                .form-input {
                    width: 100%;
                    border-radius: 0.5rem;
                    border: 1px solid rgb(229 229 229);
                    background: #fff;
                    padding: 0.5rem 0.75rem;
                    font-size: 0.875rem;
                    color: rgb(23 23 23);
                }
                .form-input:focus {
                    outline: none;
                    border-color: rgb(var(--color-brand-500) / 1);
                }
            `}</style>
        </form>
    );
}

function Field({
    label,
    hint,
    required,
    children,
}: {
    label: string;
    hint?: string;
    required?: boolean;
    children: React.ReactNode;
}) {
    return (
        <label className="block">
            <span className="mb-1 block text-xs font-medium text-tertiary">
                {label}
                {required && <span className="text-error-600"> *</span>}
            </span>
            {children}
            {hint && <span className="mt-1 block text-xs text-tertiary">{hint}</span>}
        </label>
    );
}
