"use client";

import { use, useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "@untitledui/icons";
import { getProductById, type Product } from "@/lib/supabase";
import { ProductForm } from "../../components/product-form";

export default function AdminEditProductPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let alive = true;
        getProductById(id)
            .then((p) => {
                if (!alive) return;
                if (!p) setError("Product not found.");
                else setProduct(p);
            })
            .catch((err) => {
                console.error(err);
                if (alive) setError("Could not load product.");
            })
            .finally(() => {
                if (alive) setLoading(false);
            });
        return () => {
            alive = false;
        };
    }, [id]);

    if (loading) {
        return (
            <div className="flex items-center justify-center py-20">
                <div className="size-8 animate-spin rounded-full border-2 border-brand-600 border-t-transparent" />
            </div>
        );
    }

    if (error || !product) {
        return (
            <div className="space-y-4">
                <Link href="/admin/products" className="inline-flex items-center gap-2 text-sm text-tertiary hover:text-primary">
                    <ArrowLeft className="size-4" /> Back to products
                </Link>
                <div className="rounded-xl border border-error-200 bg-error-50 p-6 text-sm text-error-700">
                    {error ?? "Product not found."}
                </div>
            </div>
        );
    }

    return <ProductForm mode="edit" initial={product} />;
}
