"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/base/buttons/button";
import {
    Heart,
    Star01,
    ShoppingBag01,
    X,
    Trash01,
    Loading01,
} from "@untitledui/icons";
import { Header } from "@/app/components/header";
import { Footer } from "@/app/components/footer";
import { RatingBadge } from "@/components/foundations/rating-badge";
import {
    supabase,
    getWishlist,
    removeFromWishlist,
    clearWishlist,
    type WishlistItem,
    type Product,
} from "@/lib/supabase";
import { useToastActions } from "@/components/base/toast/toast";

function StarRating({ rating }: { rating: number }) {
    return (
        <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
                <Star01
                    key={i}
                    className={`size-3.5 ${
                        i < rating ? "fill-warning-400 text-warning-400" : "text-tertiary"
                    }`}
                />
            ))}
        </div>
    );
}

export default function WishlistPage() {
    const router = useRouter();
    const toast = useToastActions();
    const [wishlist, setWishlist] = useState<WishlistItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [userId, setUserId] = useState<string | null>(null);
    const [removingIds, setRemovingIds] = useState<Set<string>>(new Set());

    useEffect(() => {
        async function loadWishlist(uid: string) {
            try {
                setUserId(uid);
                const data = await getWishlist(uid);
                setWishlist(data);
            } catch (err) {
                console.error("Error fetching wishlist:", err);
                toast.error("Error loading wishlist", "Please try again.");
            } finally {
                setLoading(false);
            }
        }

        supabase.auth.getSession().then(({ data: { session } }) => {
            if (!session?.user) {
                router.push("/login");
                return;
            }
            loadWishlist(session.user.id);
        });

        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            if (!session?.user) {
                router.push("/login");
            }
        });

        return () => subscription.unsubscribe();
    }, [router, toast]);

    const handleRemoveItem = async (productId: string) => {
        if (!userId) return;

        setRemovingIds((prev) => new Set(prev).add(productId));

        try {
            await removeFromWishlist(userId, productId);
            setWishlist((items) => items.filter((item) => item.product_id !== productId));
            toast.success("Removed from wishlist");
        } catch (err) {
            console.error("Error removing item:", err);
            toast.error("Error removing item", "Please try again.");
        } finally {
            setRemovingIds((prev) => {
                const next = new Set(prev);
                next.delete(productId);
                return next;
            });
        }
    };

    const handleClearWishlist = async () => {
        if (!userId) return;

        try {
            await clearWishlist(userId);
            setWishlist([]);
            toast.success("Wishlist cleared");
        } catch (err) {
            console.error("Error clearing wishlist:", err);
            toast.error("Error clearing wishlist", "Please try again.");
        }
    };

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
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
                <section className="border-b border-brand-400 bg-brand-50 px-4 py-12 md:px-8 md:py-10 lg:px-16">
                    <div className="mx-auto max-w-7xl">
                        <nav className="mb-4 flex items-center gap-2 text-sm text-tertiary">
                            <a href="/" className="uppercase transition hover:text-brand-600">Home</a>
                            <span>/</span>
                            <a href="/account" className="uppercase transition hover:text-brand-600">Account</a>
                            <span>/</span>
                            <span className="uppercase text-brand-600">Wishlist</span>
                        </nav>
                        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
                            <h1 className="text-2xl font-semibold uppercase text-primary md:text-3xl">
                                My <span className="text-brand-600">Wishlist</span>
                            </h1>
                            <div className="hidden shrink-0 md:block">
                                <RatingBadge rating={4.9} title="Save Favorites" subtitle="Never Miss a Deal" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Wishlist Content */}
                <section className="px-4 py-12 md:px-8 md:py-16 lg:px-16">
                    <div className="mx-auto max-w-6xl">
                        {wishlist.length > 0 ? (
                            <>
                                {/* Header */}
                                <div className="mb-8 flex items-center justify-between">
                                    <p className="text-sm text-tertiary">
                                        <span className="font-semibold text-primary">{wishlist.length}</span> items in your wishlist
                                    </p>
                                    <button
                                        onClick={handleClearWishlist}
                                        className="flex items-center gap-2 text-sm text-tertiary transition hover:text-error-500"
                                    >
                                        <Trash01 className="size-4" />
                                        Clear All
                                    </button>
                                </div>

                                {/* Wishlist Grid */}
                                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                                    {wishlist.map((item, index) => {
                                        const product = item.product as Product;
                                        if (!product) return null;

                                        return (
                                            <motion.div
                                                key={item.id}
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                                className="group relative rounded-2xl border border-secondary bg-primary"
                                            >
                                                {/* Remove Button */}
                                                <button
                                                    onClick={() => handleRemoveItem(item.product_id)}
                                                    disabled={removingIds.has(item.product_id)}
                                                    className="absolute right-3 top-3 z-10 flex size-8 items-center justify-center rounded-full bg-white shadow-md transition hover:bg-error-50 hover:text-error-500 disabled:opacity-50"
                                                >
                                                    {removingIds.has(item.product_id) ? (
                                                        <Loading01 className="size-4 animate-spin" />
                                                    ) : (
                                                        <X className="size-4" />
                                                    )}
                                                </button>

                                                {/* Product Image */}
                                                <a href={`/product/${product.slug}`} className="block">
                                                    <div className="relative aspect-square overflow-hidden rounded-t-2xl bg-secondary">
                                                        <img
                                                            src={product.images?.[0] || "https://via.placeholder.com/300"}
                                                            alt={product.name}
                                                            className="size-full object-cover transition duration-300 group-hover:scale-105"
                                                        />
                                                        {!product.in_stock && (
                                                            <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                                                                <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-primary">
                                                                    Out of Stock
                                                                </span>
                                                            </div>
                                                        )}
                                                    </div>
                                                </a>

                                                {/* Product Info */}
                                                <div className="p-4">
                                                    <p className="text-xs text-tertiary">{product.category}</p>
                                                    <a
                                                        href={`/product/${product.slug}`}
                                                        className="mt-1 block font-semibold text-primary transition hover:text-brand-600"
                                                    >
                                                        {product.name}
                                                    </a>
                                                    <div className="mt-2 flex items-center justify-between">
                                                        <StarRating rating={product.rating || 5} />
                                                        <div className="flex items-center gap-2">
                                                            <span className="font-semibold text-primary">
                                                                {Number(product.price).toFixed(2)}€
                                                            </span>
                                                            {product.original_price && product.original_price > product.price && (
                                                                <span className="text-xs text-tertiary line-through">
                                                                    {Number(product.original_price).toFixed(2)}€
                                                                </span>
                                                            )}
                                                        </div>
                                                    </div>
                                                    <p className="mt-2 text-xs text-tertiary">
                                                        Added {formatDate(item.created_at)}
                                                    </p>
                                                    <Button
                                                        href={`/product/${product.slug}`}
                                                        color={product.in_stock ? "primary" : "secondary"}
                                                        size="sm"
                                                        iconLeading={ShoppingBag01}
                                                        className="mt-4 w-full justify-center"
                                                        isDisabled={!product.in_stock}
                                                    >
                                                        {product.in_stock ? "Add to Cart" : "Notify Me"}
                                                    </Button>
                                                </div>
                                            </motion.div>
                                        );
                                    })}
                                </div>
                            </>
                        ) : (
                            /* Empty State */
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="py-16 text-center"
                            >
                                <div className="mx-auto flex size-24 items-center justify-center rounded-full bg-secondary">
                                    <Heart className="size-12 text-tertiary" />
                                </div>
                                <h2 className="mt-6 text-xl font-semibold text-primary">
                                    Your wishlist is empty
                                </h2>
                                <p className="mt-2 text-tertiary">
                                    Save items you love by clicking the heart icon on any product.
                                </p>
                                <Button
                                    href="/shop"
                                    color="primary"
                                    size="lg"
                                    className="mt-8"
                                    iconLeading={ShoppingBag01}
                                >
                                    Browse Products
                                </Button>
                            </motion.div>
                        )}
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
