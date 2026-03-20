import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Gift Cards",
    description: "Give the gift of a brighter smile. Purchase a Prestige Smile gift card for teeth whitening treatments and premium products.",
};

export default function GiftCardsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
