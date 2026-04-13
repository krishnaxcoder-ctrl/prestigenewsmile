import type { Metadata } from "next";

const SITE_URL = "https://www.prestige-smile.com";

export const metadata: Metadata = {
    title: "About Us",
    description:
        "Discover Prestige Smile - a private aesthetic teeth whitening studio at 1 rue Jean Moulin, 74100 Ambilly, near Geneva. Our story, values, and commitment to brighter smiles.",
    alternates: {
        canonical: `${SITE_URL}/about`,
    },
    openGraph: {
        title: "About Us | Prestige Smile",
        description:
            "Discover Prestige Smile - a private aesthetic teeth whitening studio near Geneva.",
        url: `${SITE_URL}/about`,
        type: "website",
        siteName: "Prestige Smile",
    },
};

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
