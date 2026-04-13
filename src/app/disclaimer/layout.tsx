import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Service Terms & Disclaimer | Prestige Smile",
    description:
        "Important information about our cosmetic teeth whitening services, including contraindications, risks, and limitations. Please read before booking.",
    alternates: {
        canonical: "https://www.prestige-smile.com/disclaimer",
    },
};

export default function DisclaimerLayout({ children }: { children: React.ReactNode }) {
    return children;
}
