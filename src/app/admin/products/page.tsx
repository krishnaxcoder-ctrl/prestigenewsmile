"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Plus, SearchLg, Edit02, Trash01, AlertTriangle } from "@untitledui/icons";
import { getProducts, deleteProduct, type Product } from "@/lib/supabase";

function formatEuro(v: number | null | undefined) {
    if (v == null) return "-";
    return `${Number(v).toFixed(2)}€`;
}

export default function AdminProductsPage() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [query, setQuery] = useState("");
    const [stockFilter, setStockFilter] = useState<"all" | "in" | "out">("all");
    const [deleting, setDeleting] = useState<string | null>(null);

    async function load() {
        setLoading(true);
        try {
            const data = await getProducts();
            setProducts(data);
        } catch (err) {
            console.error(err);
            setError("Could not load products.");
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        load();
    }, []);

    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase();
        return products.filter((p) => {
            if (stockFilter === "in" && p.in_stock === false) return false;
            if (stockFilter === "out" && p.in_stock !== false) return false;
            if (!q) return true;
            return (
                p.name.toLowerCase().includes(q) ||
                p.slug.toLowerCase().includes(q) ||
                (p.category || "").toLowerCase().includes(q)
            );
        });
    }, [products, query, stockFilter]);

    const outCount = products.filter((p) => p.in_stock === false).length;

    async function handleDelete(product: Product) {
        if (!confirm(`Delete "${product.name}"? This cannot be undone.`)) return;
        setDeleting(product.id);
        try {
            await deleteProduct(product.id);
            setProducts((prev) => prev.filter((p) => p.id !== product.id));
        } catch (err) {
            console.error(err);
            alert("Failed to delete product.");
        } finally {
            setDeleting(null);
        }
    }

    return (
        <div className="space-y-6">
            <div className="flex items-start justify-between">
                <div>
                    <h1 className="text-2xl font-light text-primary" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                        Products
                    </h1>
                    <p className="mt-1 text-sm text-tertiary">
                        {products.length} total · {outCount} out of stock · {filtered.length} shown
                    </p>
                </div>
                <Link
                    href="/admin/products/new"
                    className="inline-flex items-center gap-2 rounded-lg bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-700"
                >
                    <Plus className="size-4" /> New product
                </Link>
            </div>

            {outCount > 0 && (
                <div className="flex items-center gap-3 rounded-xl border border-warning-200 bg-warning-50 px-4 py-3 text-sm text-warning-800">
                    <AlertTriangle className="size-4 text-warning-600" />
                    {outCount} product{outCount === 1 ? " is" : "s are"} currently marked out of stock.
                </div>
            )}

            <div className="flex flex-col gap-3 rounded-xl border border-secondary bg-white p-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex gap-2">
                    {(["all", "in", "out"] as const).map((v) => (
                        <button
                            key={v}
                            onClick={() => setStockFilter(v)}
                            className={
                                stockFilter === v
                                    ? "rounded-full bg-brand-600 px-3 py-1.5 text-xs font-semibold text-white"
                                    : "rounded-full border border-secondary px-3 py-1.5 text-xs font-medium text-secondary hover:border-brand-300 hover:text-brand-700"
                            }
                        >
                            {v === "all" ? "All" : v === "in" ? "In stock" : "Out of stock"}
                        </button>
                    ))}
                </div>
                <div className="relative w-full sm:max-w-xs">
                    <SearchLg className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-tertiary" />
                    <input
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search name, slug, category"
                        className="w-full rounded-lg border border-secondary bg-white py-2 pl-9 pr-3 text-sm text-primary placeholder:text-tertiary focus:border-brand-500 focus:outline-none"
                    />
                </div>
            </div>

            {loading ? (
                <div className="flex items-center justify-center py-20">
                    <div className="size-8 animate-spin rounded-full border-2 border-brand-600 border-t-transparent" />
                </div>
            ) : error ? (
                <div className="rounded-xl border border-error-200 bg-error-50 p-6 text-sm text-error-700">{error}</div>
            ) : filtered.length === 0 ? (
                <div className="rounded-xl border border-secondary bg-white py-16 text-center text-sm text-tertiary">
                    No products match.
                </div>
            ) : (
                <div className="overflow-hidden rounded-2xl border border-secondary bg-white">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-secondary/40 text-xs uppercase tracking-wider text-tertiary">
                            <tr>
                                <th className="px-4 py-3 font-medium">Product</th>
                                <th className="px-4 py-3 font-medium">Category</th>
                                <th className="px-4 py-3 font-medium">Price</th>
                                <th className="px-4 py-3 font-medium">Stock</th>
                                <th className="px-4 py-3 text-right font-medium">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-secondary">
                            {filtered.map((p) => (
                                <tr key={p.id} className="hover:bg-secondary/20">
                                    <td className="px-4 py-3">
                                        <div className="flex items-center gap-3">
                                            {p.images?.[0] && (
                                                // eslint-disable-next-line @next/next/no-img-element
                                                <img
                                                    src={p.images[0]}
                                                    alt={p.name}
                                                    className="size-12 rounded-lg object-cover"
                                                />
                                            )}
                                            <div>
                                                <p className="font-semibold text-primary">{p.name}</p>
                                                <p className="text-xs text-tertiary">/{p.slug}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-4 py-3 text-secondary">{p.category}</td>
                                    <td className="px-4 py-3 text-secondary">
                                        {formatEuro(p.price)}
                                        {p.original_price && (
                                            <div className="text-xs text-tertiary line-through">{formatEuro(p.original_price)}</div>
                                        )}
                                    </td>
                                    <td className="px-4 py-3">
                                        {p.in_stock === false ? (
                                            <span className="inline-flex rounded-full bg-error-100 px-2.5 py-0.5 text-xs font-semibold text-error-700">
                                                Out
                                            </span>
                                        ) : (
                                            <span className="inline-flex rounded-full bg-success-100 px-2.5 py-0.5 text-xs font-semibold text-success-700">
                                                In stock
                                            </span>
                                        )}
                                    </td>
                                    <td className="px-4 py-3">
                                        <div className="flex items-center justify-end gap-2">
                                            <Link
                                                href={`/admin/products/${p.id}/edit`}
                                                className="inline-flex items-center gap-1 rounded-lg border border-secondary px-3 py-1.5 text-xs font-medium text-secondary hover:border-brand-300 hover:text-brand-700"
                                            >
                                                <Edit02 className="size-3.5" /> Edit
                                            </Link>
                                            <button
                                                onClick={() => handleDelete(p)}
                                                disabled={deleting === p.id}
                                                className="inline-flex items-center gap-1 rounded-lg border border-error-200 px-3 py-1.5 text-xs font-medium text-error-700 hover:bg-error-50 disabled:opacity-50"
                                            >
                                                <Trash01 className="size-3.5" />
                                                {deleting === p.id ? "Deleting..." : "Delete"}
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}
