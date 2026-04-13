import type { Metadata } from "next";

const SITE_URL = "https://www.prestige-smile.com";

export const metadata: Metadata = {
    title: "Book an Appointment",
    description:
        "Book your professional teeth whitening session at Prestige Smile. Located at 1 rue Jean Moulin, 74100 Ambilly, near Geneva. Open Mon-Sat.",
    alternates: {
        canonical: `${SITE_URL}/booking`,
    },
    openGraph: {
        title: "Book an Appointment | Prestige Smile",
        description:
            "Book your professional teeth whitening session at Prestige Smile near Geneva.",
        url: `${SITE_URL}/booking`,
        type: "website",
        siteName: "Prestige Smile",
    },
};

export default function BookingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
