import type { Metadata } from "next";

const SITE_URL = "https://www.prestige-smile.com";

export const metadata: Metadata = {
    title: "Gift Cards · Cartes Cadeaux",
    description:
        "Give the gift of a brighter smile with a Prestige Smile gift card. Offrez un sourire éclatant avec une carte cadeau Prestige Smile, valable sur nos traitements et produits.",
    alternates: {
        canonical: `${SITE_URL}/gift-cards`,
    },
    openGraph: {
        title: "Gift Cards · Cartes Cadeaux | Prestige Smile",
        description:
            "Give a brighter smile. Offrez un sourire éclatant avec une carte cadeau Prestige Smile.",
        url: `${SITE_URL}/gift-cards`,
        type: "website",
        siteName: "Prestige Smile",
        locale: "en_US",
        alternateLocale: ["fr_FR", "fr_CH"],
    },
};

export default function GiftCardsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
