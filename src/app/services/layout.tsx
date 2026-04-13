import type { Metadata } from "next";

const SITE_URL = "https://www.prestige-smile.com";

export const metadata: Metadata = {
    title: "Our Services",
    description:
        "Professional teeth whitening services at Prestige Smile near Geneva. Single sessions from CHF 99, complete treatments, and maintenance plans. Up to 7 shades lighter.",
    alternates: {
        canonical: `${SITE_URL}/services`,
    },
    openGraph: {
        title: "Teeth Whitening Services | Prestige Smile",
        description:
            "Professional teeth whitening services near Geneva. Single sessions, complete treatments, and maintenance plans.",
        url: `${SITE_URL}/services`,
        type: "website",
        siteName: "Prestige Smile",
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
