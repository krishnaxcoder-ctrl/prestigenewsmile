import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us",
    description: "Discover Prestige Smile - a private aesthetic teeth whitening studio in Ambilly, near Geneva. Our story, values, and commitment to brighter smiles.",
};

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
