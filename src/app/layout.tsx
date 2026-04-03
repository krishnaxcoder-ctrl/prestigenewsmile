import type { Metadata, Viewport } from "next";
import { Jost, Playfair_Display, Tangerine } from "next/font/google";
import { RouteProvider } from "@/providers/router-provider";
import { Theme } from "@/providers/theme";
import { ToastProvider } from "@/components/base/toast/toast";
import "@/styles/globals.css";
import { cx } from "@/utils/cx";

const jost = Jost({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-body",
});

const playfairDisplay = Playfair_Display({
    subsets: ["latin"],
    display: "swap",
    variable: "--global-heading-font-family",
});

const tangerine = Tangerine({
    subsets: ["latin"],
    display: "swap",
    weight: ["400", "700"],
    variable: "--font-tangerine",
});

export const metadata: Metadata = {
    title: {
        default: "Prestige Smile | Professional Teeth Whitening in Geneva",
        template: "%s | Prestige Smile",
    },
    description: "Private aesthetic teeth whitening studio at 1 rue Jean Moulin, 74100 Ambilly, near Geneva. Give your smile a visibly whiter, brighter and more natural glow. Up to 7 shades lighter in one session.",
    keywords: ["teeth whitening", "Geneva", "Ambilly", "cosmetic dentistry", "smile", "whitening treatment", "aesthetic"],
    authors: [{ name: "Prestige Smile" }],
    openGraph: {
        title: "Prestige Smile | Professional Teeth Whitening",
        description: "Private aesthetic teeth whitening studio. Give your smile a visibly whiter, brighter and more natural glow.",
        type: "website",
        locale: "en_US",
        siteName: "Prestige Smile",
    },
    twitter: {
        card: "summary_large_image",
        title: "Prestige Smile | Professional Teeth Whitening",
        description: "Private aesthetic teeth whitening studio. Give your smile a visibly whiter, brighter and more natural glow.",
    },
};

export const viewport: Viewport = {
    themeColor: "#14aa9e",
    colorScheme: "light dark",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={cx(jost.variable, playfairDisplay.variable, tangerine.variable, "bg-primary antialiased")}>
                <RouteProvider>
                    <Theme>
                        <ToastProvider>{children}</ToastProvider>
                    </Theme>
                </RouteProvider>
            </body>
        </html>
    );
}
