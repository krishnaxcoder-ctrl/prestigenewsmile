import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Checkout",
    description: "Complete your purchase securely. Fast shipping with tracking. Free shipping on orders over €20. Delivery in 2 to 4 business days. We accept Twint, Revolut, and cash payments.",
};

export default function CheckoutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
