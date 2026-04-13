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
    metadataBase: new URL("https://www.prestige-smile.com"),
    title: {
        default: "Prestige Smile | Professional Teeth Whitening in Geneva",
        template: "%s | Prestige Smile",
    },
    description:
        "Private aesthetic teeth whitening studio at 1 rue Jean Moulin, 74100 Ambilly, near Geneva. Give your smile a visibly whiter, brighter and more natural glow. Up to 7 shades lighter in one session.",
    keywords: [
        "teeth whitening",
        "Geneva",
        "Ambilly",
        "cosmetic dentistry",
        "smile",
        "whitening treatment",
        "aesthetic",
        "teeth whitening near me",
        "professional teeth whitening Geneva",
        "blanchiment dentaire Genève",
    ],
    authors: [{ name: "Prestige Smile" }],
    alternates: {
        canonical: "https://www.prestige-smile.com",
    },
    openGraph: {
        title: "Prestige Smile | Professional Teeth Whitening",
        description:
            "Private aesthetic teeth whitening studio near Geneva. Give your smile a visibly whiter, brighter and more natural glow.",
        url: "https://www.prestige-smile.com",
        type: "website",
        locale: "en_US",
        siteName: "Prestige Smile",
    },
    twitter: {
        card: "summary_large_image",
        title: "Prestige Smile | Professional Teeth Whitening",
        description:
            "Private aesthetic teeth whitening studio. Give your smile a visibly whiter, brighter and more natural glow.",
    },
};

export const viewport: Viewport = {
    themeColor: "#14aa9e",
    colorScheme: "light dark",
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.prestige-smile.com",
    name: "Prestige Smile",
    description:
        "Private aesthetic teeth whitening studio at 1 rue Jean Moulin, 74100 Ambilly, near Geneva. Up to 7 shades lighter in one session.",
    url: "https://www.prestige-smile.com",
    telephone: "+41783000619",
    email: "contact@prestige-smile.com",
    address: {
        "@type": "PostalAddress",
        streetAddress: "1 rue Jean Moulin",
        addressLocality: "Ambilly",
        postalCode: "74100",
        addressCountry: "FR",
    },
    geo: {
        "@type": "GeoCoordinates",
        latitude: 46.1965,
        longitude: 6.1481,
    },
    openingHoursSpecification: [
        {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "10:00",
            closes: "20:00",
        },
        {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: "Saturday",
            opens: "10:00",
            closes: "19:00",
        },
    ],
    priceRange: "$$",
    image: "https://www.prestige-smile.com/logo.svg",
    sameAs: [],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={cx(jost.variable, playfairDisplay.variable, tangerine.variable, "bg-primary antialiased")}>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
                <RouteProvider>
                    <Theme>
                        <ToastProvider>{children}</ToastProvider>
                    </Theme>
                </RouteProvider>
            </body>
        </html>
    );
}
