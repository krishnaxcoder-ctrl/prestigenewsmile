"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Heart, Loading01 } from "@untitledui/icons";
import { cx } from "@/utils/cx";
import {
    getSession,
    isInWishlist,
    addToWishlist,
    removeFromWishlist,
} from "@/lib/supabase";
import { useToastActions } from "@/components/base/toast/toast";

interface WishlistButtonProps {
    productId: string;
    productName?: string;
    size?: "sm" | "md" | "lg";
    variant?: "icon" | "button";
    className?: string;
}

const sizeClasses = {
    sm: "size-8",
    md: "size-9",
    lg: "size-10",
};

const iconSizeClasses = {
    sm: "size-4",
    md: "size-4",
    lg: "size-5",
};

export function WishlistButton({
    productId,
    productName,
    size = "md",
    variant = "icon",
    className,
}: WishlistButtonProps) {
    const router = useRouter();
    const toast = useToastActions();
    const [isWishlisted, setIsWishlisted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [userId, setUserId] = useState<string | null>(null);
    const [checking, setChecking] = useState(true);

    useEffect(() => {
        async function checkWishlistStatus() {
            try {
                const session = await getSession();
                if (session?.user) {
                    setUserId(session.user.id);
                    const inWishlist = await isInWishlist(session.user.id, productId);
                    setIsWishlisted(inWishlist);
                }
            } catch (err) {
                console.error("Error checking wishlist:", err);
            } finally {
                setChecking(false);
            }
        }

        checkWishlistStatus();
    }, [productId]);

    const handleToggle = async (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();

        if (!userId) {
            toast.info("Sign in required", "Please sign in to save items to your wishlist.");
            router.push("/login");
            return;
        }

        setLoading(true);

        try {
            if (isWishlisted) {
                await removeFromWishlist(userId, productId);
                setIsWishlisted(false);
                toast.success("Removed from wishlist", productName ? `${productName} removed.` : undefined);
            } else {
                await addToWishlist(userId, productId);
                setIsWishlisted(true);
                toast.success("Added to wishlist", productName ? `${productName} saved.` : undefined);
            }
        } catch (err) {
            console.error("Error toggling wishlist:", err);
            toast.error("Error", "Please try again.");
        } finally {
            setLoading(false);
        }
    };

    if (variant === "icon") {
        return (
            <button
                onClick={handleToggle}
                disabled={loading || checking}
                className={cx(
                    "flex items-center justify-center rounded-full bg-white shadow-md transition duration-100 ease-linear",
                    isWishlisted
                        ? "text-error-500 hover:bg-error-50"
                        : "text-gray-700 hover:bg-brand-50 hover:text-brand-600",
                    loading || checking ? "opacity-50" : "",
                    sizeClasses[size],
                    className
                )}
                aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
            >
                {loading ? (
                    <Loading01 className={cx("animate-spin", iconSizeClasses[size])} />
                ) : (
                    <Heart
                        className={cx(
                            iconSizeClasses[size],
                            isWishlisted ? "fill-current" : ""
                        )}
                    />
                )}
            </button>
        );
    }

    return (
        <button
            onClick={handleToggle}
            disabled={loading || checking}
            className={cx(
                "flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition",
                isWishlisted
                    ? "bg-error-50 text-error-600 hover:bg-error-100"
                    : "bg-secondary text-secondary hover:bg-tertiary",
                loading || checking ? "opacity-50" : "",
                className
            )}
        >
            {loading ? (
                <Loading01 className="size-4 animate-spin" />
            ) : (
                <Heart className={cx("size-4", isWishlisted ? "fill-current" : "")} />
            )}
            {isWishlisted ? "Saved" : "Save"}
        </button>
    );
}
