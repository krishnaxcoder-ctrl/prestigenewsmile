import { Header } from "@/app/components/header";
import { Footer } from "@/app/components/footer";

const sections = [
    {
        title: "1. What Are Cookies?",
        content: `Cookies are small text files that are stored on your device (computer, tablet, or mobile phone) when you visit a website. They are widely used to make websites work more efficiently, provide a better user experience, and provide information to website owners.

Cookies can be "persistent" (remaining on your device until they expire or you delete them) or "session" cookies (deleted when you close your browser).`,
    },
    {
        title: "2. How We Use Cookies",
        content: `We use cookies and similar technologies for the following purposes:

Essential Cookies (Strictly Necessary)
These cookies are necessary for the website to function properly. They enable basic functions such as page navigation, secure access, and shopping cart functionality. The website cannot function properly without these cookies.
• Session management
• Shopping cart functionality
• Security features
• User authentication

Performance and Analytics Cookies
These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve our website and services.
• Google Analytics (traffic analysis)
• Page load performance
• Error tracking

Functionality Cookies
These cookies enable enhanced functionality and personalization, such as remembering your preferences and settings.
• Language preferences
• Display preferences
• Previously viewed products

Marketing Cookies (if applicable)
These cookies may be set through our website by advertising partners to build a profile of your interests and show you relevant advertisements on other websites.
• Social media tracking
• Advertising targeting
• Remarketing`,
    },
    {
        title: "3. Your Cookie Choices",
        content: `In accordance with Article 82 of the French Data Protection Act and the CNIL guidelines, we request your consent before placing non-essential cookies on your device.

You can manage your cookie preferences at any time:

Browser Settings
Most web browsers allow you to control cookies through their settings. You can:
• View cookies stored on your device
• Allow, block, or delete cookies
• Set preferences for specific websites

Please note that disabling certain cookies may affect the functionality of our website.

How to manage cookies in popular browsers:
• Chrome: Settings > Privacy and security > Cookies
• Firefox: Options > Privacy & Security > Cookies
• Safari: Preferences > Privacy > Cookies
• Edge: Settings > Cookies and site permissions

Opt-Out Links
• Google Analytics: https://tools.google.com/dlpage/gaoptout
• Facebook: https://www.facebook.com/settings/?tab=ads
• Your Online Choices (EU): https://www.youronlinechoices.eu`,
    },
    {
        title: "4. Cookies We Use",
        content: `Below is a detailed list of the cookies we use on our website:

ESSENTIAL COOKIES
| Cookie Name | Purpose | Duration |
|-------------|---------|----------|
| session_id | Session management | Session |
| cart | Shopping cart contents | 30 days |
| csrf_token | Security protection | Session |
| cookie_consent | Your cookie preferences | 1 year |

ANALYTICS COOKIES
| Cookie Name | Purpose | Duration |
|-------------|---------|----------|
| _ga | Google Analytics - Distinguishes users | 2 years |
| _gid | Google Analytics - Distinguishes users | 24 hours |
| _gat | Google Analytics - Throttles request rate | 1 minute |

FUNCTIONALITY COOKIES
| Cookie Name | Purpose | Duration |
|-------------|---------|----------|
| language | Language preference | 1 year |
| recently_viewed | Recently viewed products | 30 days |`,
    },
    {
        title: "5. Third-Party Cookies",
        content: `Some cookies on our website are placed by third-party services. These third parties may use cookies to:
• Analyze website traffic (Google Analytics)
• Enable social media features (Instagram, Facebook)
• Process payments securely

We do not control these third-party cookies. Please refer to the respective privacy policies of these third parties for more information:
• Google: https://policies.google.com/privacy
• Facebook/Meta: https://www.facebook.com/policy.php
• Instagram: https://help.instagram.com/519522125107875`,
    },
    {
        title: "6. Local Storage and Similar Technologies",
        content: `In addition to cookies, we may use other similar technologies such as:

Local Storage
Used to store data locally on your browser with no expiration date. This data persists until cleared by you or our website.

Session Storage
Similar to local storage but data is cleared when you close your browser tab.

Pixels and Web Beacons
Small graphic images used to track user behavior and conversions.

These technologies are subject to the same consent requirements as cookies.`,
    },
    {
        title: "7. Updates to This Policy",
        content: `We may update this Cookie Policy from time to time to reflect changes in our practices, technologies, legal requirements, or other factors.

We will notify you of any material changes by:
• Posting the updated policy on our website
• Updating the "Last Updated" date at the top of this policy
• Requesting your consent again if required by law

We encourage you to review this policy periodically to stay informed about our use of cookies.`,
    },
    {
        title: "8. Your Rights Under French Law",
        content: `Under French law (Loi Informatique et Libertés) and the GDPR, you have the right to:

• Be informed about cookies before they are placed
• Give or refuse consent for non-essential cookies
• Withdraw your consent at any time
• Access information about how your data is used
• Request deletion of your data

The CNIL (Commission Nationale de l'Informatique et des Libertés) oversees compliance with cookie regulations in France.

If you believe your rights have been violated, you may file a complaint with the CNIL:
Website: www.cnil.fr
Address: 3 Place de Fontenoy - TSA 80715 - 75334 Paris Cedex 07`,
    },
    {
        title: "9. Contact Us",
        content: `If you have any questions about our use of cookies or this Cookie Policy, please contact us:

Prestige Smile
Email:  contact@prestige-smile.com
Phone: +41 78 300 06 19
Address: 1 rue Jean Moulin, 74100 Ambilly, France

We will respond to your inquiry within 30 days.`,
    },
];

export default function CookiesPage() {
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
                            <span className="uppercase text-brand-600">Cookie Policy</span>
                        </nav>
                        <div className="max-w-3xl">
                            <h1 className="text-2xl font-semibold uppercase text-primary md:text-3xl">
                                Cookie <span className="text-brand-600">Policy</span>
                            </h1>
                            <p className="mt-4 text-lg text-tertiary">
                                Information about how we use cookies and similar technologies on our website.
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
                                This Cookie Policy explains how Prestige Smile uses cookies and similar technologies in accordance with French law and EU regulations (GDPR, ePrivacy Directive).
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
