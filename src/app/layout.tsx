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
        default: "Prestige Smile | Professional Teeth Whitening Geneva · Blanchiment Dentaire Genève",
        template: "%s | Prestige Smile",
    },
    description:
        "Professional teeth whitening in Geneva — blanchiment dentaire professionnel. Private aesthetic clinic at 1 rue Jean Moulin, 74100 Ambilly. The best teeth whitening clinic near Geneva with visible results in one session, up to 7 shades lighter.",
    keywords: [
        // English
        "teeth whitening Geneva",
        "professional teeth whitening",
        "teeth whitening services Geneva",
        "teeth whitening clinic Geneva",
        "teeth whitening near me",
        "best teeth whitening Geneva",
        "Ambilly",
        "cosmetic dentistry",
        "whitening treatment",
        // French
        "blanchiment dentaire Genève",
        "blanchiment dentaire professionnel",
        "services de blanchiment dentaire Genève",
        "clinique de blanchiment dentaire Genève",
        "blanchiment dentaire près de chez moi",
        "meilleur blanchiment dentaire Genève",
        "dentisterie esthétique",
    ],
    authors: [{ name: "Prestige Smile" }],
    alternates: {
        canonical: "https://www.prestige-smile.com",
        languages: {
            "en": "https://www.prestige-smile.com",
            "fr": "https://www.prestige-smile.com",
            "x-default": "https://www.prestige-smile.com",
        },
    },
    openGraph: {
        title: "Prestige Smile | Professional Teeth Whitening Geneva · Blanchiment Dentaire",
        description:
            "Professional teeth whitening services in Geneva. Blanchiment dentaire professionnel dans une clinique esthétique privée près de la frontière suisse.",
        url: "https://www.prestige-smile.com",
        type: "website",
        locale: "en_US",
        alternateLocale: ["fr_FR", "fr_CH"],
        siteName: "Prestige Smile",
    },
    twitter: {
        card: "summary_large_image",
        title: "Prestige Smile | Teeth Whitening Geneva · Blanchiment Dentaire",
        description:
            "The best teeth whitening clinic near Geneva. Up to 7 shades lighter in one professional session.",
    },
};

export const viewport: Viewport = {
    themeColor: "#14aa9e",
    colorScheme: "light dark",
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HealthAndBeautyBusiness"],
    "@id": "https://www.prestige-smile.com",
    name: "Prestige Smile",
    alternateName: "Prestige Smile Studio",
    description:
        "Professional teeth whitening clinic — blanchiment dentaire professionnel — at 1 rue Jean Moulin, 74100 Ambilly, near Geneva. Up to 7 shades lighter in one session.",
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
    areaServed: [
        { "@type": "City", name: "Geneva" },
        { "@type": "City", name: "Genève" },
        { "@type": "City", name: "Annecy" },
        { "@type": "AdministrativeArea", name: "Haute-Savoie" },
        { "@type": "AdministrativeArea", name: "French-speaking Switzerland" },
        { "@type": "AdministrativeArea", name: "Suisse romande" },
    ],
    knowsLanguage: ["en", "fr"],
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
    aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "500",
        bestRating: "5",
        worstRating: "1",
    },
    hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Teeth Whitening Services · Services de blanchiment dentaire",
        itemListElement: [
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Initial Teeth Whitening Session",
                    alternateName: "Séance de blanchiment dentaire",
                },
                price: "99",
                priceCurrency: "CHF",
            },
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Complete Treatment",
                    alternateName: "Traitement complet - 2 séances",
                },
                price: "169",
                priceCurrency: "CHF",
            },
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Maintenance Session",
                    alternateName: "Séance d'entretien",
                },
                price: "79",
                priceCurrency: "CHF",
            },
        ],
    },
    sameAs: [],
};

// WebSite schema — enables the Google search box sitelink and signals brand identity
const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.prestige-smile.com/#website",
    url: "https://www.prestige-smile.com",
    name: "Prestige Smile",
    alternateName: ["Prestige Smile Studio", "Prestige Smile Geneva"],
    description:
        "Professional teeth whitening clinic in Geneva — blanchiment dentaire professionnel près de Genève.",
    publisher: {
        "@id": "https://www.prestige-smile.com",
    },
    inLanguage: ["en", "fr"],
    potentialAction: {
        "@type": "SearchAction",
        target: {
            "@type": "EntryPoint",
            urlTemplate: "https://www.prestige-smile.com/shop?q={search_term_string}",
        },
        "query-input": "required name=search_term_string",
    },
};

// Organization schema — reinforces brand identity for knowledge panel / sitelinks
const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.prestige-smile.com/#organization",
    name: "Prestige Smile",
    url: "https://www.prestige-smile.com",
    logo: {
        "@type": "ImageObject",
        url: "https://www.prestige-smile.com/logo.svg",
        width: 512,
        height: 512,
    },
    contactPoint: {
        "@type": "ContactPoint",
        telephone: "+41783000619",
        email: "contact@prestige-smile.com",
        contactType: "customer service",
        availableLanguage: ["English", "French"],
        areaServed: ["FR", "CH"],
    },
    sameAs: [],
};

// SiteNavigationElement — explicit signals about main navigation (helps Google build sitelinks)
const siteNavigationJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Main Navigation",
    itemListElement: [
        { "@type": "SiteNavigationElement", position: 1, name: "Home", url: "https://www.prestige-smile.com" },
        { "@type": "SiteNavigationElement", position: 2, name: "Services", url: "https://www.prestige-smile.com/services" },
        { "@type": "SiteNavigationElement", position: 3, name: "Shop", url: "https://www.prestige-smile.com/shop" },
        { "@type": "SiteNavigationElement", position: 4, name: "About", url: "https://www.prestige-smile.com/about" },
        { "@type": "SiteNavigationElement", position: 5, name: "Booking", url: "https://www.prestige-smile.com/booking" },
        { "@type": "SiteNavigationElement", position: 6, name: "Reviews", url: "https://www.prestige-smile.com/reviews" },
        { "@type": "SiteNavigationElement", position: 7, name: "Gift Cards", url: "https://www.prestige-smile.com/gift-cards" },
        { "@type": "SiteNavigationElement", position: 8, name: "FAQ", url: "https://www.prestige-smile.com/faq" },
        { "@type": "SiteNavigationElement", position: 9, name: "Contact", url: "https://www.prestige-smile.com/contact" },
    ],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-DV7R2XQ11J" />
                <script
                    dangerouslySetInnerHTML={{
                        __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','G-DV7R2XQ11J');`,
                    }}
                />
            </head>
            <body className={cx(jost.variable, playfairDisplay.variable, tangerine.variable, "bg-primary antialiased")}>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(siteNavigationJsonLd) }}
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
