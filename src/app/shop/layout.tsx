import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Shop",
    description: "Browse our collection of premium teeth whitening products and skincare. Professional-grade formulas for a brighter, more radiant smile.",
};

export default function ShopLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
