import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy",
    description:
        "Learn how Prestige Smile collects, uses, and protects your personal information. Your privacy matters to us.",
    alternates: {
        canonical: "https://www.prestige-smile.com/privacy",
    },
};

export default function PrivacyLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
