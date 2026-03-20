import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Shipping & Returns",
    description: "Learn about our shipping options, delivery zones, and 30-day return policy. Free shipping on orders over CHF 120 to Switzerland.",
};

export default function ShippingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
