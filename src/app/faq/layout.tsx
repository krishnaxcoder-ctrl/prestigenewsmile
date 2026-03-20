import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Frequently Asked Questions",
    description: "Find answers to common questions about teeth whitening at Prestige Smile. Learn about the treatment, results, contraindications, and more.",
};

export default function FAQLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
