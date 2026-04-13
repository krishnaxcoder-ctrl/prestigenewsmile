import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Refund Policy | Prestige Smile",
    description:
        "Learn about our refund policy, 14-day withdrawal right, and return conditions. Full details on how to request refunds for products and services.",
    alternates: {
        canonical: "https://www.prestige-smile.com/refunds",
    },
};

export default function RefundsLayout({ children }: { children: React.ReactNode }) {
    return children;
}
