import type { Metadata } from "next";

const SITE_URL = "https://www.prestige-smile.com";

export const metadata: Metadata = {
    title: "Articles & Blog",
    description:
        "Stay informed with tips, guides, and insights about teeth whitening and oral care from the Prestige Smile team.",
    alternates: {
        canonical: `${SITE_URL}/articles`,
    },
    openGraph: {
        title: "Articles & Blog | Prestige Smile",
        description:
            "Stay informed with tips, guides, and insights about teeth whitening and oral care.",
        url: `${SITE_URL}/articles`,
        type: "website",
        siteName: "Prestige Smile",
    },
};

export default function ArticlesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
