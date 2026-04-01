import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Shipping & Returns",
    description: "Learn about our shipping options, delivery zones, and 30-day return policy. Free shipping on orders over €20. Delivery in 2-4 business days with tracking.",
};

export default function ShippingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
