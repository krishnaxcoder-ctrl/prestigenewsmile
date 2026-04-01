import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Cookie Policy | Prestige Smile",
    description: "Learn about how Prestige Smile uses cookies and similar technologies on our website. Manage your cookie preferences.",
};

export default function CookiesLayout({ children }: { children: React.ReactNode }) {
    return children;
}
