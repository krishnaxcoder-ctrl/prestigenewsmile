import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Shopping Cart",
    description: "Review your cart and proceed to checkout. Free shipping on orders over €20. Delivery in 2-4 business days with tracking.",
};

export default function CartLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
