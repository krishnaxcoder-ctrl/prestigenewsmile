import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "My Wishlist",
    description: "Your saved items. Add products to your cart or share your wishlist with friends.",
};

export default function WishlistLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
