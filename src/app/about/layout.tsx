import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us",
    description: "Discover Prestige Smile - a private aesthetic teeth whitening studio at 1 rue Jean Moulin, 74100 Ambilly, near Geneva. Our story, values, and commitment to brighter smiles.",
};

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
