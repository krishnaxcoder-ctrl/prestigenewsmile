import type { Metadata } from "next";

const SITE_URL = "https://www.prestige-smile.com";

export const metadata: Metadata = {
    title: "About Us · À Propos",
    description:
        "Discover Prestige Smile — a luxury, high-end teeth whitening studio offering smile aesthetic treatments in French-speaking Switzerland. Blanchiment dentaire de luxe et traitement esthétique du sourire à Ambilly, près de Genève.",
    keywords: [
        // English
        "luxury teeth whitening",
        "high-end teeth whitening",
        "smile aesthetic treatment",
        "perfect smile Geneva",
        "cosmetic dental treatment",
        "professional bright smile",
        "teeth whitening French-speaking Switzerland",
        // French
        "blanchiment dentaire de luxe",
        "blanchiment dentaire haut de gamme",
        "traitement esthétique du sourire",
        "sourire parfait Genève",
        "traitement dentaire esthétique",
        "sourire éclatant professionnel",
        "blanchiment dentaire Suisse romande",
    ],
    alternates: {
        canonical: `${SITE_URL}/about`,
    },
    openGraph: {
        title: "About Us · À Propos | Prestige Smile",
        description:
            "Luxury teeth whitening studio near Geneva. Studio de blanchiment dentaire haut de gamme en Suisse romande.",
        url: `${SITE_URL}/about`,
        type: "website",
        siteName: "Prestige Smile",
        locale: "en_US",
        alternateLocale: ["fr_FR", "fr_CH"],
    },
};

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
