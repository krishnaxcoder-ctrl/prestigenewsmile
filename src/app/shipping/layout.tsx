import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Shipping & Returns",
    description: "Fast shipping with tracking to France and internationally. Free shipping on orders over €20. Delivery in 2 to 4 business days. 30-day return policy.",
};

export default function ShippingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
