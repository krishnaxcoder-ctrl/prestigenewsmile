import type { Metadata } from "next";

const SITE_URL = "https://www.prestige-smile.com";

export const metadata: Metadata = {
    title: "Articles & Blog · Blog",
    description:
        "Guides and insights on teeth whitening and oral care. Conseils et guides sur le blanchiment dentaire et les soins bucco-dentaires par l'équipe Prestige Smile.",
    alternates: {
        canonical: `${SITE_URL}/articles`,
    },
    openGraph: {
        title: "Articles & Blog · Blog | Prestige Smile",
        description:
            "Guides on teeth whitening. Conseils et guides sur le blanchiment dentaire.",
        url: `${SITE_URL}/articles`,
        type: "website",
        siteName: "Prestige Smile",
        locale: "en_US",
        alternateLocale: ["fr_FR", "fr_CH"],
    },
};

export default function ArticlesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
