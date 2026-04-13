import type { Metadata } from "next";

const SITE_URL = "https://www.prestige-smile.com";

export const metadata: Metadata = {
    title: "Frequently Asked Questions",
    description:
        "Find answers to common questions about teeth whitening at Prestige Smile. Learn about the treatment, results, contraindications, and more.",
    alternates: {
        canonical: `${SITE_URL}/faq`,
    },
    openGraph: {
        title: "Frequently Asked Questions | Prestige Smile",
        description:
            "Find answers to common questions about teeth whitening at Prestige Smile.",
        url: `${SITE_URL}/faq`,
        type: "website",
        siteName: "Prestige Smile",
    },
};

const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "How long does a teeth whitening session take?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "A typical teeth whitening session takes between 45 to 60 minutes. Our Initial Teeth Whitening Session includes consultation, preparation, and the whitening treatment itself. For optimal results, we recommend the Complete Treatment which includes multiple sessions over several weeks.",
            },
        },
        {
            "@type": "Question",
            name: "Is teeth whitening safe?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, professional teeth whitening is completely safe when performed by trained specialists using approved products. Our treatments use gentle yet effective formulas that protect your enamel while delivering visible results. We always conduct a consultation to ensure the treatment is suitable for you.",
            },
        },
        {
            "@type": "Question",
            name: "How long do the results last?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Results typically last between 6 months to 2 years, depending on your lifestyle and oral care habits. Avoiding staining foods and beverages like coffee, tea, and red wine, along with regular brushing and occasional maintenance sessions, can help prolong your results.",
            },
        },
        {
            "@type": "Question",
            name: "Will my teeth be sensitive after whitening?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Some clients may experience mild sensitivity for 24-48 hours after treatment. This is normal and temporary. We provide aftercare instructions and products to minimize any discomfort. If you have sensitive teeth, please inform us during consultation so we can adjust the treatment accordingly.",
            },
        },
        {
            "@type": "Question",
            name: "How do I track my order?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Once your order is shipped, you'll receive an email with a tracking number. You can use this number to track your package on our website or the carrier's website. You can also view your order status in your account under 'My Orders'.",
            },
        },
        {
            "@type": "Question",
            name: "What payment methods do you accept?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "We accept Twint, Revolut, and cash payments. All transactions are secure and encrypted for your protection.",
            },
        },
        {
            "@type": "Question",
            name: "Do you offer international shipping?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes! We deliver within France as well as internationally. All orders include fast shipping with tracking. Estimated delivery time is 2 to 4 business days. Shipping fee is \u20ac3.90, and we offer free shipping on orders over \u20ac20.",
            },
        },
        {
            "@type": "Question",
            name: "How do I book an appointment?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "You can book an appointment through our online booking system, by calling us at +41 78 300 06 19, or by visiting our studio at 1 rue Jean Moulin, 74100 Ambilly. We recommend booking at least 1 week in advance, especially for weekend appointments.",
            },
        },
        {
            "@type": "Question",
            name: "What is your cancellation policy?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "We understand plans can change. Please cancel or reschedule at least 24 hours before your appointment to avoid a cancellation fee. Late cancellations or no-shows may be charged 50% of the service price.",
            },
        },
        {
            "@type": "Question",
            name: "How can I contact customer support?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "You can reach our support team via email at contact@prestige-smile.com, by phone at +41 78 300 06 19 (Mon-Fri 10am-8pm, Sat 10am-7pm), or through the contact form on our website. We aim to respond to all inquiries within 24 hours.",
            },
        },
    ],
};

export default function FAQLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
            />
            {children}
        </>
    );
}
