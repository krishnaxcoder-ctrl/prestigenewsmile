import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Product Details",
    description: "Explore our premium teeth whitening and skincare products. Professional-grade formulas for visible results.",
};

export default function ProductLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
