import type { Metadata } from "next";

const SITE_URL = "https://www.prestige-smile.com";

export const metadata: Metadata = {
    title: "Shop",
    description:
        "Browse our collection of premium teeth whitening products and skincare. Professional-grade formulas for a brighter, more radiant smile.",
    alternates: {
        canonical: `${SITE_URL}/shop`,
    },
    openGraph: {
        title: "Shop | Prestige Smile",
        description:
            "Premium teeth whitening products and skincare. Professional-grade formulas for a brighter smile.",
        url: `${SITE_URL}/shop`,
        type: "website",
        siteName: "Prestige Smile",
    },
};

export default function ShopLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
