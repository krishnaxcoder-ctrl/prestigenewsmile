import type { Metadata } from "next";

const SITE_URL = "https://www.prestige-smile.com";

export const metadata: Metadata = {
    title: "Gift Cards",
    description:
        "Give the gift of a brighter smile. Purchase a Prestige Smile gift card for teeth whitening treatments and premium products.",
    alternates: {
        canonical: `${SITE_URL}/gift-cards`,
    },
    openGraph: {
        title: "Gift Cards | Prestige Smile",
        description:
            "Give the gift of a brighter smile. Purchase a Prestige Smile gift card.",
        url: `${SITE_URL}/gift-cards`,
        type: "website",
        siteName: "Prestige Smile",
    },
};

export default function GiftCardsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
