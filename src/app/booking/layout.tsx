import type { Metadata } from "next";

const SITE_URL = "https://www.prestige-smile.com";

export const metadata: Metadata = {
    title: "Book an Appointment · Réserver",
    description:
        "Transparent teeth whitening price in Geneva — how much does teeth whitening cost? Prix et coût du blanchiment dentaire à Genève. Mobile teeth whitening Geneva available. Book your session at 1 rue Jean Moulin, 74100 Ambilly.",
    keywords: [
        // English
        "teeth whitening price Geneva",
        "teeth whitening cost",
        "how much does teeth whitening cost",
        "teeth whitening session price",
        "mobile teeth whitening Geneva",
        // French
        "prix blanchiment dentaire Genève",
        "coût blanchiment dentaire",
        "combien coûte le blanchiment dentaire",
        "prix séance blanchiment dentaire",
        "blanchiment dentaire mobile Genève",
    ],
    alternates: {
        canonical: `${SITE_URL}/booking`,
    },
    openGraph: {
        title: "Book an Appointment · Réserver | Prestige Smile",
        description:
            "Transparent price for professional teeth whitening in Geneva. Prix transparent pour une séance de blanchiment dentaire.",
        url: `${SITE_URL}/booking`,
        type: "website",
        siteName: "Prestige Smile",
        locale: "en_US",
        alternateLocale: ["fr_FR", "fr_CH"],
    },
};

export default function BookingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
