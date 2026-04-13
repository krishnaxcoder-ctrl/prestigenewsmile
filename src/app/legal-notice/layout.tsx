import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Legal Notice | Mentions Légales | Prestige Smile",
    description:
        "Legal information required under French law (LCEN) for Prestige Smile - Professional teeth whitening studio at 1 rue Jean Moulin, 74100 Ambilly, near Geneva.",
    alternates: {
        canonical: "https://www.prestige-smile.com/legal-notice",
    },
};

export default function LegalNoticeLayout({ children }: { children: React.ReactNode }) {
    return children;
}
