import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us",
    description: "Get in touch with Prestige Smile. Book your teeth whitening session or ask us a question. Located in Ambilly, near Geneva. Call +41 78 300 06 19.",
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
