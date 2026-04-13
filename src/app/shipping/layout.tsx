import type { Metadata } from "next";

const SITE_URL = "https://www.prestige-smile.com";

export const metadata: Metadata = {
    title: "Shipping & Returns",
    description:
        "Fast shipping with tracking to France and internationally. Free shipping on orders over \u20ac20. Delivery in 2 to 4 business days. 30-day return policy.",
    alternates: {
        canonical: `${SITE_URL}/shipping`,
    },
};

export default function ShippingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
