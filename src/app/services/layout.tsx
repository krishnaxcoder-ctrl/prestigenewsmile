import type { Metadata } from "next";

const SITE_URL = "https://www.prestige-smile.com";

export const metadata: Metadata = {
    title: "Our Services · Nos Services",
    description:
        "Cosmetic and safe teeth whitening with instant results for a natural white smile. Blanchiment dentaire esthétique, sans danger, avec résultats immédiats. Serving Annecy and Haute-Savoie. Single sessions from CHF 99.",
    keywords: [
        // English
        "cosmetic teeth whitening",
        "safe teeth whitening",
        "instant teeth whitening results",
        "teeth whitening session",
        "natural white smile",
        "teeth whitening Haute-Savoie",
        "teeth whitening Annecy",
        // French
        "blanchiment dentaire esthétique",
        "blanchiment dentaire sans danger",
        "résultats immédiats blanchiment dentaire",
        "séance de blanchiment dentaire",
        "sourire naturellement blanc",
        "blanchiment dentaire Haute-Savoie",
        "blanchiment dentaire Annecy",
    ],
    alternates: {
        canonical: `${SITE_URL}/services`,
    },
    openGraph: {
        title: "Teeth Whitening Services · Services de blanchiment dentaire | Prestige Smile",
        description:
            "Cosmetic, safe teeth whitening in Haute-Savoie and Annecy. Blanchiment dentaire esthétique sans danger avec résultats immédiats.",
        url: `${SITE_URL}/services`,
        type: "website",
        siteName: "Prestige Smile",
        locale: "en_US",
        alternateLocale: ["fr_FR", "fr_CH"],
    },
};

const servicesJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Teeth Whitening",
    provider: {
        "@type": "LocalBusiness",
        name: "Prestige Smile",
        address: {
            "@type": "PostalAddress",
            streetAddress: "1 rue Jean Moulin",
            addressLocality: "Ambilly",
            postalCode: "74100",
            addressCountry: "FR",
        },
    },
    hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Teeth Whitening Services",
        itemListElement: [
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Initial Teeth Whitening Session",
                    description:
                        "Single 60-minute professional whitening session with LED technology. Up to 7 shades lighter.",
                },
                price: "99",
                priceCurrency: "CHF",
            },
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Complete Treatment",
                    description:
                        "Two professional whitening sessions for maximum results.",
                },
                price: "169",
                priceCurrency: "CHF",
            },
        ],
    },
};

export default function ServicesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
            />
            {children}
        </>
    );
}
