import type { Metadata } from "next";

const SITE_URL = "https://www.prestige-smile.com";

export const metadata: Metadata = {
    title: "Shop · Boutique",
    description:
        "Premium products for smile aesthetics and your perfect smile routine. Boutique dédiée à l'esthétique du sourire et à l'entretien du blanchiment dentaire, avec des formules de qualité professionnelle.",
    keywords: [
        // English
        "smile aesthetics",
        "perfect smile routine",
        "teeth whitening maintenance",
        "at-home teeth whitening",
        // French
        "esthétique du sourire",
        "routine sourire parfait",
        "entretien blanchiment dentaire",
        "blanchiment dentaire à domicile",
    ],
    alternates: {
        canonical: `${SITE_URL}/shop`,
    },
    openGraph: {
        title: "Shop · Boutique | Prestige Smile",
        description:
            "Premium teeth whitening maintenance products. Produits pour l'esthétique du sourire et l'entretien du blanchiment.",
        url: `${SITE_URL}/shop`,
        type: "website",
        siteName: "Prestige Smile",
        locale: "en_US",
        alternateLocale: ["fr_FR", "fr_CH"],
    },
};

export default function ShopLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
