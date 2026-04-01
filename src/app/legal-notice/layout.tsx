import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Legal Notice | Mentions Légales | Prestige Smile",
    description: "Legal information required under French law (LCEN) for Prestige Smile - Professional teeth whitening studio in Ambilly, near Geneva.",
};

export default function LegalNoticeLayout({ children }: { children: React.ReactNode }) {
    return children;
}
