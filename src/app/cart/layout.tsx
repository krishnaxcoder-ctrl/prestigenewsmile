import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Shopping Cart",
    description: "Review your cart and proceed to checkout. Free shipping on orders over CHF 120.",
};

export default function CartLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
