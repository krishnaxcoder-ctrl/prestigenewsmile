import type { Metadata } from "next";

const SITE_URL = "https://www.prestige-smile.com";

export const metadata: Metadata = {
    title: "Contact Us",
    description:
        "Get in touch with Prestige Smile. Book your teeth whitening session or ask us a question. Located at 1 rue Jean Moulin, 74100 Ambilly, near Geneva. Call +41 78 300 06 19.",
    alternates: {
        canonical: `${SITE_URL}/contact`,
    },
    openGraph: {
        title: "Contact Us | Prestige Smile",
        description:
            "Book your teeth whitening session or ask us a question. Located near Geneva.",
        url: `${SITE_URL}/contact`,
        type: "website",
        siteName: "Prestige Smile",
    },
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
