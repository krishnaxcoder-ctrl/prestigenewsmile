import type { Metadata } from "next";

const SITE_URL = "https://www.prestige-smile.com";

export const metadata: Metadata = {
    title: "Customer Reviews · Avis Clients",
    description:
        "Teeth whitening reviews, real results and smile transformations from our clients. Avis blanchiment dentaire, résultats et transformations du sourire, photos avant après de véritables clients.",
    keywords: [
        // English
        "teeth whitening reviews",
        "teeth whitening results",
        "smile transformation",
        "teeth whitening before and after",
        // French
        "avis blanchiment dentaire",
        "résultats blanchiment dentaire",
        "transformation du sourire",
        "blanchiment dentaire avant après",
    ],
    alternates: {
        canonical: `${SITE_URL}/reviews`,
    },
    openGraph: {
        title: "Reviews · Avis Clients | Prestige Smile",
        description:
            "Real teeth whitening reviews and smile transformations. Avis authentiques et photos de blanchiment dentaire avant après.",
        url: `${SITE_URL}/reviews`,
        type: "website",
        siteName: "Prestige Smile",
        locale: "en_US",
        alternateLocale: ["fr_FR", "fr_CH"],
    },
};

export default function ReviewsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
