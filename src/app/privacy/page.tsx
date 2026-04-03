import { Header } from "@/app/components/header";
import { Footer } from "@/app/components/footer";
import { RatingBadge } from "@/components/foundations/rating-badge";

const sections = [
    {
        title: "1. Data Controller (Responsable du Traitement)",
        content: `In accordance with the General Data Protection Regulation (EU 2016/679 - GDPR) and the French Data Protection Act (Loi Informatique et Libertés), we inform you of the following:

Data Controller:
Prestige Smile
Address: 1 rue Jean Moulin, 74100 Ambilly, France
Email: hello@prestigesmile.ch
Phone: +41 78 300 06 19
SIRET: [To be completed]

For all data protection inquiries, please contact us at hello@prestigesmile.ch.`,
    },
    {
        title: "2. Information We Collect (Données Collectées)",
        content: `We collect the following categories of personal data:

2.1 Information You Provide Directly:
• Identity information: Name, surname
• Contact information: Email address, phone number, postal address
• Account information: Username, password (encrypted)
• Order information: Purchase history, shipping addresses, billing addresses
• Health information: Health questionnaire responses (for service eligibility only)
• Communication: Messages, inquiries, feedback you send us
• Payment information: Processed by secure third-party providers (we do not store full card details)

2.2 Information Collected Automatically:
• Device information: Browser type, operating system, device type
• Connection information: IP address, approximate location
• Usage information: Pages visited, time spent, actions taken
• Referral information: How you found our website
• Cookie data: See our Cookie Policy for details

2.3 Information From Third Parties:
• Social media: If you interact with us via social platforms
• Analytics providers: Aggregated website usage data

2.4 Special Categories of Data:
We collect limited health information solely to assess your eligibility for teeth whitening services. This data is processed with your explicit consent and is necessary for the performance of our services.`,
    },
    {
        title: "3. Legal Basis for Processing (Base Juridique)",
        content: `We process your personal data based on the following legal grounds:

3.1 Contract Performance (Article 6(1)(b) GDPR)
• Processing orders and delivering products
• Managing service bookings
• Providing customer support
• Managing your account

3.2 Legal Obligations (Article 6(1)(c) GDPR)
• Tax and accounting requirements
• Responding to legal requests
• Consumer protection compliance

3.3 Legitimate Interests (Article 6(1)(f) GDPR)
• Improving our website and services
• Fraud prevention and security
• Business analytics
• Sending service-related communications

3.4 Consent (Article 6(1)(a) GDPR)
• Marketing communications and newsletters
• Non-essential cookies
• Processing health data for service eligibility
• Sharing before/after photos for marketing

You may withdraw your consent at any time without affecting the lawfulness of processing based on consent before its withdrawal.`,
    },
    {
        title: "4. How We Use Your Information (Utilisation des Données)",
        content: `We use your personal data for the following purposes:

4.1 Order Fulfillment
• Processing and shipping your orders
• Sending order confirmations and updates
• Managing returns and refunds
• Providing invoices and receipts

4.2 Service Delivery
• Scheduling and managing appointments
• Assessing treatment eligibility
• Providing teeth whitening services
• Sending appointment reminders

4.3 Customer Support
• Responding to your inquiries
• Resolving complaints and issues
• Providing product information

4.4 Account Management
• Creating and maintaining your account
• Managing preferences and settings
• Providing order history access

4.5 Communications
• Service-related notifications (non-marketing)
• Marketing communications (with consent)
• Newsletter distribution (with consent)

4.6 Website Improvement
• Analyzing website performance
• Understanding user behavior
• Enhancing user experience
• Testing new features

4.7 Security and Fraud Prevention
• Protecting against unauthorized access
• Detecting fraudulent activity
• Ensuring website security

4.8 Legal Compliance
• Meeting tax and accounting obligations
• Responding to legal processes
• Exercising or defending legal claims`,
    },
    {
        title: "5. Data Sharing (Partage des Données)",
        content: `We do NOT sell, rent, or trade your personal data to third parties.

We may share your data with:

5.1 Service Providers
Third parties who help us operate our business:
• Payment processors (for secure transaction processing)
• Shipping carriers (for order delivery)
• Email service providers (for communications)
• Hosting providers (Vercel)
• Analytics services (Google Analytics)

These providers:
• Only access data necessary for their services
• Are bound by confidentiality agreements
• Must comply with data protection laws
• Cannot use data for their own purposes

5.2 Legal Requirements
We may disclose your data when required by:
• French law or regulations
• Court orders or legal processes
• Government or regulatory authorities
• To protect our legal rights

5.3 Business Transfers
In case of merger, acquisition, or sale of assets, your data may be transferred. We will notify you of any such transfer and your options.

5.4 With Your Consent
We may share data with third parties when you explicitly consent.

5.5 International Transfers
Some of our service providers may be located outside the EU/EEA. When transferring data internationally, we ensure appropriate safeguards:
• Standard Contractual Clauses (SCCs)
• Adequacy decisions
• Other approved transfer mechanisms`,
    },
    {
        title: "6. Data Retention (Conservation des Données)",
        content: `We retain your personal data only for as long as necessary to fulfill the purposes for which it was collected:

6.1 Retention Periods
• Account data: Duration of account + 3 years after deletion
• Order data: 10 years (French accounting requirements)
• Invoice data: 10 years (French tax requirements)
• Health questionnaire: 5 years from last treatment
• Marketing consent: Until withdrawal + 3 years
• Customer support records: 5 years
• Website analytics: 26 months (Google Analytics)
• Cookie consent: 13 months (CNIL guidelines)

6.2 Criteria for Retention
Retention periods are determined by:
• Legal and regulatory requirements
• Statute of limitations for legal claims
• Business necessity
• Your relationship with us

6.3 Data Deletion
After the retention period expires, we will:
• Securely delete or anonymize your data
• Ensure third parties also delete your data
• Maintain records of deletion where required`,
    },
    {
        title: "7. Your Rights (Vos Droits)",
        content: `Under the GDPR and French law, you have the following rights:

7.1 Right of Access (Article 15 GDPR)
You can request a copy of your personal data and information about how it is processed.

7.2 Right to Rectification (Article 16 GDPR)
You can request correction of inaccurate or incomplete data.

7.3 Right to Erasure (Article 17 GDPR)
You can request deletion of your data ("right to be forgotten") when:
• Data is no longer necessary
• You withdraw consent
• Data was unlawfully processed
• Legal obligation requires deletion

Note: We may retain certain data for legal compliance.

7.4 Right to Restriction (Article 18 GDPR)
You can request limited processing of your data in certain circumstances.

7.5 Right to Data Portability (Article 20 GDPR)
You can receive your data in a structured, machine-readable format and transfer it to another controller.

7.6 Right to Object (Article 21 GDPR)
You can object to processing based on legitimate interests, including:
• Direct marketing (absolute right)
• Profiling related to direct marketing

7.7 Right to Withdraw Consent
You can withdraw consent at any time without affecting prior processing.

7.8 Right to Lodge a Complaint
You can file a complaint with the supervisory authority:
CNIL (Commission Nationale de l'Informatique et des Libertés)
Address: 3 Place de Fontenoy - TSA 80715 - 75334 Paris Cedex 07
Website: www.cnil.fr

7.9 Right Not to Be Subject to Automated Decisions
You have the right not to be subject to decisions based solely on automated processing, including profiling, that significantly affect you.`,
    },
    {
        title: "8. Exercising Your Rights",
        content: `To exercise any of your rights, please contact us:

Email: hello@prestigesmile.ch
Phone: +41 78 300 06 19
Address: 1 rue Jean Moulin, 74100 Ambilly, France

8.1 Request Requirements
Please provide:
• Your full name
• Email address associated with your account
• Specific right(s) you wish to exercise
• Any relevant details to help locate your data

8.2 Identity Verification
We may request additional information to verify your identity before processing your request.

8.3 Response Time
We will respond to your request within 30 days. If your request is complex, we may extend this period by up to 60 additional days (we will notify you of any extension).

8.4 Free of Charge
Exercising your rights is free of charge. However, we may charge a reasonable fee for manifestly unfounded or excessive requests.

8.5 Third Parties
If you make a request, we will also inform relevant third parties with whom your data has been shared.`,
    },
    {
        title: "9. Data Security (Sécurité des Données)",
        content: `We implement appropriate technical and organizational measures to protect your personal data:

9.1 Technical Measures
• Encryption of data in transit (SSL/TLS)
• Encryption of sensitive data at rest
• Secure authentication systems
• Regular security updates and patches
• Firewall and intrusion detection
• Secure payment processing (PCI DSS compliant providers)

9.2 Organizational Measures
• Access controls and authentication
• Staff training on data protection
• Confidentiality agreements
• Regular security assessments
• Incident response procedures
• Data minimization practices

9.3 Security Incidents
In case of a data breach that poses a high risk to your rights:
• We will notify the CNIL within 72 hours
• We will inform affected individuals without undue delay
• We will document the breach and remedial actions

9.4 Limitations
While we strive to protect your data, no transmission over the Internet is 100% secure. We cannot guarantee absolute security.`,
    },
    {
        title: "10. Cookies and Tracking Technologies",
        content: `We use cookies and similar technologies on our website.

10.1 What Are Cookies
Cookies are small text files stored on your device that help us provide and improve our services.

10.2 Types of Cookies We Use
• Essential cookies (necessary for website function)
• Analytics cookies (to understand usage)
• Functionality cookies (to remember preferences)
• Marketing cookies (with your consent)

10.3 Cookie Consent
In accordance with CNIL guidelines, we request your consent before placing non-essential cookies.

10.4 Managing Cookies
You can manage cookie preferences through:
• Our cookie consent banner
• Your browser settings
• Opt-out links for specific services

For complete information, please see our Cookie Policy at /cookies.`,
    },
    {
        title: "11. Children's Privacy (Protection des Mineurs)",
        content: `Our services are not directed to individuals under 18 years of age.

11.1 Age Restrictions
• Teeth whitening services require clients to be 18+
• Account creation requires you to be at least 16 years old
• Marketing communications are only sent to adults

11.2 Parental Consent
If we learn that we have collected personal data from a child without proper parental consent:
• We will delete that information promptly
• We will notify the parent or guardian

11.3 Reporting
If you believe we have collected data from a minor, please contact us immediately at hello@prestigesmile.ch.`,
    },
    {
        title: "12. Third-Party Links",
        content: `Our website may contain links to third-party websites and services.

12.1 External Sites
We are not responsible for the privacy practices of external websites. We encourage you to read their privacy policies.

12.2 Social Media
If you interact with us through social media platforms (Instagram, Facebook), those platforms' privacy policies apply to your data on their services.

12.3 Payment Processors
Payment transactions are handled by secure third-party processors. Your payment data is subject to their privacy policies and security measures.`,
    },
    {
        title: "13. International Users - Additional Rights",
        content: `If you are located outside the European Union, additional privacy rights may apply to you:

13.1 UNITED KINGDOM (UK GDPR)
If you are a UK resident, you have rights under the UK General Data Protection Regulation (UK GDPR):
• All rights listed in Section 7 apply to you
• The supervisory authority for the UK is the Information Commissioner's Office (ICO)
  Website: www.ico.org.uk
  Phone: +44 303 123 1113
• Data transfers from the UK are protected by appropriate safeguards

13.2 UNITED STATES - CALIFORNIA (CCPA/CPRA)
If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA) and California Privacy Rights Act (CPRA):

Your California Privacy Rights:
• Right to Know: Request disclosure of personal information collected, used, and disclosed
• Right to Delete: Request deletion of your personal information
• Right to Correct: Request correction of inaccurate personal information
• Right to Opt-Out: Opt out of the sale or sharing of personal information
• Right to Limit Use: Limit the use of sensitive personal information
• Right to Non-Discrimination: We will not discriminate against you for exercising your rights

We Do NOT:
• Sell your personal information
• Share your personal information for cross-context behavioral advertising
• Use or disclose sensitive personal information for purposes other than those permitted by CCPA

To exercise your California rights, contact us at hello@prestigesmile.ch or call +41 78 300 06 19.

Categories of Personal Information Collected (past 12 months):
• Identifiers (name, email, phone, address)
• Commercial information (purchase history)
• Internet activity (browsing, interactions)
• Geolocation data (approximate location)

13.3 UNITED STATES - OTHER STATES
If you are a resident of Virginia, Colorado, Connecticut, Utah, or other US states with privacy laws, you may have similar rights to California residents. Contact us to exercise your rights.

13.4 SWITZERLAND
If you are a Swiss resident, you have rights under the Swiss Federal Act on Data Protection (nFADP/revDSG):
• Similar rights to those under GDPR
• The supervisory authority is the Federal Data Protection and Information Commissioner (FDPIC)
  Website: www.edoeb.admin.ch

13.5 CANADA
If you are a Canadian resident, you have rights under the Personal Information Protection and Electronic Documents Act (PIPEDA) and provincial privacy laws:
• Right to access your personal information
• Right to challenge accuracy and request correction
• Right to withdraw consent
• Right to file a complaint with the Privacy Commissioner of Canada
  Website: www.priv.gc.ca

13.6 AUSTRALIA
If you are an Australian resident, you have rights under the Privacy Act 1988:
• Right to access and correct your personal information
• Right to make a complaint
• Contact the Office of the Australian Information Commissioner (OAIC)
  Website: www.oaic.gov.au`,
    },
    {
        title: "14. Updates to This Policy",
        content: `We may update this Privacy Policy from time to time.

14.1 Notification of Changes
We will notify you of material changes by:
• Posting the updated policy on our website
• Updating the "Last Updated" date
• Sending email notification for significant changes
• Requesting renewed consent if required

14.2 Review
We encourage you to review this policy periodically.

14.3 Continued Use
Continued use of our services after changes constitutes acceptance of the updated policy.`,
    },
    {
        title: "15. Contact Information",
        content: `For any questions about this Privacy Policy or our data practices:

Data Controller:
Prestige Smile
Address: 1 rue Jean Moulin, 74100 Ambilly, France
Email: hello@prestigesmile.ch
Phone: +41 78 300 06 19

We will respond to your inquiry within 30 days.

Supervisory Authority:
CNIL - Commission Nationale de l'Informatique et des Libertés
Address: 3 Place de Fontenoy - TSA 80715 - 75334 Paris Cedex 07
Website: www.cnil.fr
Phone: +33 1 53 73 22 22`,
    },
];

export default function PrivacyPage() {
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
                            <span className="uppercase text-brand-600">Privacy Policy</span>
                        </nav>
                        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
                            <div className="max-w-3xl">
                                <h1 className="text-2xl font-semibold uppercase text-primary md:text-3xl">
                                    Privacy <span className="text-brand-600">Policy</span>
                                </h1>
                                <p className="mt-4 text-lg text-tertiary">
                                    Politique de Confidentialité - How we protect your personal data under GDPR and French law.
                                </p>
                            </div>
                            <div className="hidden shrink-0 md:block">
                                <RatingBadge rating={4.9} title="Data Protected" subtitle="GDPR Compliant" />
                            </div>
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
                                This Privacy Policy explains how Prestige Smile collects, uses, and protects your personal data in compliance with the General Data Protection Regulation (GDPR) and French data protection laws (Loi Informatique et Libertés).
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
