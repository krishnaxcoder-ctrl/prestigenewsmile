import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "My Account",
    description: "Manage your Prestige Smile account. View orders, update settings, and access your wishlist.",
};

export default function AccountLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
