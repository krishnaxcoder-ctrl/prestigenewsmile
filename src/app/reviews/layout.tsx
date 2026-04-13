import type { Metadata } from "next";

const SITE_URL = "https://www.prestige-smile.com";

export const metadata: Metadata = {
    title: "Customer Reviews",
    description:
        "Read what our clients say about their teeth whitening experience at Prestige Smile. Real reviews from real customers near Geneva.",
    alternates: {
        canonical: `${SITE_URL}/reviews`,
    },
    openGraph: {
        title: "Customer Reviews | Prestige Smile",
        description:
            "Read what our clients say about their teeth whitening experience at Prestige Smile.",
        url: `${SITE_URL}/reviews`,
        type: "website",
        siteName: "Prestige Smile",
    },
};

export default function ReviewsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
