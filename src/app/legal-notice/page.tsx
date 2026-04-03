import { Header } from "@/app/components/header";
import { Footer } from "@/app/components/footer";

const sections = [
    {
        title: "1. Publisher Information (Éditeur du Site)",
        content: `This website is published by:

Company Name: Prestige Smile
Legal Form: [Auto-entrepreneur / SARL / SAS - to be completed]
Registered Address: 1 rue Jean Moulin, 74100 Ambilly, France
SIRET Number: [To be completed]
RCS Registration: [To be completed]
VAT Number (TVA Intracommunautaire): [To be completed if applicable]

Director / Responsible Person: [Name to be completed]
Email: hello@prestigesmile.ch
Phone: +41 78 300 06 19`,
    },
    {
        title: "2. Website Hosting (Hébergement)",
        content: `This website is hosted by:

Hosting Provider: Vercel Inc.
Address: 340 S Lemon Ave #4133, Walnut, CA 91789, USA
Website: https://vercel.com
Contact: https://vercel.com/contact`,
    },
    {
        title: "3. Intellectual Property (Propriété Intellectuelle)",
        content: `All content on this website, including but not limited to text, graphics, logos, images, photographs, videos, and software, is the exclusive property of Prestige Smile or its licensors and is protected by French and international intellectual property laws.

Any reproduction, representation, modification, publication, transmission, or distortion of all or part of the site or its content, by any means whatsoever, without the prior written authorization of Prestige Smile, is strictly prohibited and constitutes an infringement punishable under Articles L.335-2 and following of the French Intellectual Property Code.

The Prestige Smile name, logo, and all related trademarks are the exclusive property of Prestige Smile.`,
    },
    {
        title: "4. Personal Data Protection (Protection des Données Personnelles)",
        content: `In accordance with the General Data Protection Regulation (GDPR - EU Regulation 2016/679) and the French Data Protection Act (Loi Informatique et Libertés), you have the following rights regarding your personal data:

• Right of access to your personal data
• Right to rectification of inaccurate data
• Right to erasure ("right to be forgotten")
• Right to restriction of processing
• Right to data portability
• Right to object to processing
• Right to withdraw consent at any time

Data Controller: Prestige Smile
Contact for data protection matters: hello@prestigesmile.ch

For more information, please consult our Privacy Policy.

You may also file a complaint with the CNIL (Commission Nationale de l'Informatique et des Libertés):
Address: 3 Place de Fontenoy - TSA 80715 - 75334 Paris Cedex 07
Website: www.cnil.fr`,
    },
    {
        title: "5. Cookies",
        content: `This website uses cookies to improve your browsing experience, analyze traffic, and provide personalized content.

In accordance with Article 82 of the French Data Protection Act and the ePrivacy Directive, we request your consent before placing non-essential cookies on your device.

For more information about the cookies we use and how to manage your preferences, please consult our Cookie Policy.`,
    },
    {
        title: "6. Limitation of Liability (Limitation de Responsabilité)",
        content: `Prestige Smile makes every effort to ensure the accuracy and up-to-date nature of the information on this website. However, we cannot guarantee that the information is complete, accurate, or current at all times.

Prestige Smile shall not be held liable for:
• Any direct or indirect damages resulting from access to or use of this website
• Any interruption or unavailability of the website
• Any technical errors or omissions
• Any damage resulting from fraudulent intrusion by third parties
• The content of external websites linked from this site

The cosmetic teeth whitening services offered are non-medical treatments. Results may vary depending on individual factors. Please refer to our Service Terms & Disclaimer for complete information.`,
    },
    {
        title: "7. Applicable Law and Jurisdiction (Droit Applicable et Juridiction)",
        content: `This website and its legal notices are governed by French law.

Any dispute relating to the use of this website or its content shall be subject to the exclusive jurisdiction of the French courts, unless otherwise provided by mandatory consumer protection laws.

For consumers residing in the European Union, you may also use the European Online Dispute Resolution platform: https://ec.europa.eu/consumers/odr`,
    },
    {
        title: "8. Consumer Mediation (Médiation de la Consommation)",
        content: `In accordance with Articles L.611-1 and R.612-1 of the French Consumer Code, in the event of a dispute, you have the right to free recourse to a consumer mediator.

Consumer Mediator: [Mediator name and contact to be completed]

Before contacting the mediator, you must first attempt to resolve the dispute directly with Prestige Smile by sending a written complaint to:
Email: hello@prestigesmile.ch
Address: 1 rue Jean Moulin, 74100 Ambilly, France

The mediator can be contacted within one year of the date of your written complaint.`,
    },
    {
        title: "9. Contact Information",
        content: `For any questions regarding these legal notices, please contact us:

Prestige Smile
Address: 1 rue Jean Moulin, 74100 Ambilly, France
Email: hello@prestigesmile.ch
Phone: +41 78 300 06 19
Instagram: @prestige.smile.studio

Business Hours:
Monday to Friday: 10:00 AM - 8:00 PM
Saturday: 10:00 AM - 7:00 PM
Sunday: Closed`,
    },
];

export default function LegalNoticePage() {
    return (
        <div className="overflow-x-hidden">
            <Header />
            <main className="bg-primary">
                {/* Hero Header */}
                <section className="border-b border-brand-200 bg-brand-50 px-4 py-12 md:px-8 md:py-10 lg:px-16">
                    <div className="mx-auto max-w-7xl">
                        <nav className="mb-4 flex items-center gap-2 text-sm text-tertiary">
                            <a href="/" className="uppercase transition hover:text-brand-600">Home</a>
                            <span>/</span>
                            <span className="uppercase text-brand-600">Legal Notice</span>
                        </nav>
                        <div className="max-w-3xl">
                            <h1 className="text-2xl font-semibold uppercase text-primary md:text-3xl">
                                Legal <span className="text-brand-600">Notice</span>
                            </h1>
                            <p className="mt-4 text-lg text-tertiary">
                                Mentions Légales - Required information under French law (LCEN)
                            </p>
                        </div>
                    </div>
                </section>

                {/* Content */}
                <section className="px-4 py-12 md:px-8 md:py-16 lg:px-16">
                    <div className="mx-auto max-w-7xl">
                        <div className="mb-8 rounded-xl bg-brand-50 p-6">
                            <p className="text-md text-tertiary">
                                <strong className="text-primary">Last Updated:</strong> April 2025
                            </p>
                            <p className="mt-2 text-md text-tertiary">
                                In accordance with Law No. 2004-575 of June 21, 2004 (LCEN - Loi pour la Confiance dans l'Économie Numérique), this page provides the legal information required for this website.
                            </p>
                        </div>

                        <div className="space-y-10">
                            {sections.map((section, index) => (
                                <div key={section.title}>
                                    <h2 className="text-xl font-semibold text-primary">
                                        {section.title}
                                    </h2>
                                    <div className="mt-4 whitespace-pre-line text-md leading-relaxed text-tertiary">
                                        {section.content}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
