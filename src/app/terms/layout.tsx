import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms & Conditions",
    description:
        "Read our terms and conditions for using Prestige Smile services and products. Important information about orders, returns, and more.",
    alternates: {
        canonical: "https://www.prestige-smile.com/terms",
    },
};

export default function TermsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
