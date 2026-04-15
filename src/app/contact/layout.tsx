import type { Metadata } from "next";

const SITE_URL = "https://www.prestige-smile.com";

export const metadata: Metadata = {
    title: "Contact Us · Contact",
    description:
        "Teeth whitening near the Geneva border, easily reachable from Geneva city center and Annecy city center. Blanchiment dentaire centre-ville Genève, centre-ville Annecy, et près de la frontière suisse. Call +41 78 300 06 19.",
    keywords: [
        // English
        "teeth whitening Geneva city center",
        "teeth whitening Annecy city center",
        "teeth whitening near Geneva border",
        // French
        "blanchiment dentaire centre-ville Genève",
        "blanchiment dentaire centre-ville Annecy",
        "blanchiment dentaire près de la frontière suisse",
    ],
    alternates: {
        canonical: `${SITE_URL}/contact`,
    },
    openGraph: {
        title: "Contact · Contact | Prestige Smile",
        description:
            "Teeth whitening near the Geneva border. Blanchiment dentaire près de la frontière suisse, accessible depuis le centre de Genève et d'Annecy.",
        url: `${SITE_URL}/contact`,
        type: "website",
        siteName: "Prestige Smile",
        locale: "en_US",
        alternateLocale: ["fr_FR", "fr_CH"],
    },
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
