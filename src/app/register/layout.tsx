import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Create Account",
    description: "Join the Prestige Smile community. Create an account to access exclusive offers, track orders, and more.",
};

export default function RegisterLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
