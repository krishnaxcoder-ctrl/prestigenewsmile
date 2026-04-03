import { AlertTriangle, InfoCircle, CheckCircle, XCircle } from "@untitledui/icons";
import { Header } from "@/app/components/header";
import { Footer } from "@/app/components/footer";

const sections = [
    {
        title: "1. Nature of Services",
        content: `IMPORTANT: The teeth whitening services provided by Prestige Smile are COSMETIC, NON-MEDICAL, and NON-INVASIVE treatments.

Our services:
• Are purely aesthetic in nature
• Do NOT constitute dental or medical treatment
• Do NOT replace professional dental care
• Are NOT performed by licensed dental practitioners
• Do NOT diagnose, treat, cure, or prevent any disease or medical condition

Prestige Smile is NOT a dental clinic, medical facility, or healthcare provider. Our staff are trained cosmetic teeth whitening technicians, NOT dentists or medical professionals.

You should continue to see your dentist for regular check-ups and dental care.`,
    },
    {
        title: "2. Results Disclaimer",
        content: `INDIVIDUAL RESULTS MAY VARY

The results of cosmetic teeth whitening treatments vary significantly from person to person. Factors that affect results include:

• Natural tooth color and shade
• Condition and porosity of tooth enamel
• Type and extent of staining
• Age and dental history
• Lifestyle habits (coffee, tea, wine, tobacco use)
• Diet and oral hygiene practices
• Genetic factors

We do NOT guarantee:
• Specific shade improvements
• A certain number of shades whiter
• Permanent or long-lasting results
• Results identical to before/after photos shown
• That results will meet your expectations

Before/after photographs on our website and marketing materials represent individual results and should not be interpreted as typical or guaranteed outcomes.

Results typically last 6-12 months depending on lifestyle factors and maintenance.`,
    },
    {
        title: "3. Contraindications and Eligibility",
        content: `Teeth whitening is NOT suitable for everyone. You MUST NOT undergo treatment if you:

ABSOLUTE CONTRAINDICATIONS:
• Are under 18 years of age
• Are pregnant or breastfeeding
• Have untreated tooth decay or cavities
• Have active gum disease (gingivitis, periodontitis)
• Have exposed tooth roots or severe gum recession
• Have oral infections, sores, or wounds
• Have had recent oral surgery
• Are allergic to hydrogen peroxide or carbamide peroxide
• Have extremely sensitive teeth

RELATIVE CONTRAINDICATIONS (requires assessment):
• Have dental restorations on visible teeth (crowns, veneers, implants, bridges, fillings) - these will NOT whiten
• Have significant tooth sensitivity
• Have enamel hypoplasia or developmental defects
• Are undergoing orthodontic treatment
• Have temporomandibular joint (TMJ) disorders
• Are taking photosensitizing medications

A health questionnaire is mandatory before treatment. Providing false or incomplete information may result in adverse effects for which Prestige Smile cannot be held responsible.

If you are unsure about your eligibility, consult your dentist before booking a session.`,
    },
    {
        title: "4. Potential Side Effects and Risks",
        content: `While cosmetic teeth whitening is generally safe when performed correctly, potential side effects may include:

COMMON SIDE EFFECTS (usually temporary):
• Tooth sensitivity to hot and cold
• Gum sensitivity or irritation
• Tingling sensation in teeth
• White spots on gums (gum blanching)

These effects typically resolve within 24-48 hours after treatment.

LESS COMMON SIDE EFFECTS:
• Prolonged tooth sensitivity
• Uneven whitening results
• Gum inflammation
• Temporary change in taste sensation

RARE SIDE EFFECTS:
• Allergic reaction to whitening agents
• Damage to existing dental work
• Severe or persistent sensitivity

BY PROCEEDING WITH TREATMENT, YOU ACKNOWLEDGE AND ACCEPT THESE POTENTIAL RISKS.

If you experience severe or prolonged side effects, discontinue use of any take-home products and consult a dental professional immediately.`,
    },
    {
        title: "5. Pre-Treatment Requirements",
        content: `To optimize results and minimize risks, we STRONGLY RECOMMEND:

BEFORE YOUR APPOINTMENT:
• Have a professional dental cleaning (scaling) within 1-2 months prior to treatment
• Ensure all cavities are treated by your dentist
• Inform us of any dental work, medical conditions, or medications
• Complete the health questionnaire honestly and thoroughly
• Avoid whitening products for at least 2 weeks before treatment

ON THE DAY OF TREATMENT:
• Brush your teeth before arriving
• Avoid eating or drinking colored substances
• Inform us of any changes to your health status
• Arrive on time for your appointment

Failure to follow these recommendations may affect your results and safety.`,
    },
    {
        title: "6. Post-Treatment Care",
        content: `For optimal results and safety, you MUST follow these post-treatment instructions:

FIRST 24-48 HOURS AFTER TREATMENT:
Avoid consuming:
• Coffee, tea, and colored beverages
• Red wine and dark-colored alcoholic drinks
• Cola and dark sodas
• Colored fruit juices (grape, cherry, etc.)
• Dark-colored foods (berries, tomato sauce, soy sauce, curry)
• Acidic foods and drinks (citrus, vinegar)
• Tobacco products (smoking, vaping, chewing tobacco)

Also avoid:
• Very hot or very cold foods and drinks
• Colored mouthwash
• Lipstick or colored lip products

ONGOING MAINTENANCE:
• Maintain good oral hygiene
• Use a soft-bristled toothbrush
• Consider using sensitivity toothpaste if needed
• Attend regular dental check-ups
• Consider maintenance sessions every 6-12 months

Failure to follow post-treatment instructions may affect your results and Prestige Smile cannot be held responsible for diminished outcomes.`,
    },
    {
        title: "7. Limitations on Liability",
        content: `TO THE MAXIMUM EXTENT PERMITTED BY FRENCH LAW:

Prestige Smile, its owners, employees, and agents shall NOT be liable for:

• Results that do not meet your expectations
• Natural variations in whitening outcomes
• Temporary side effects as described in this disclaimer
• Complications arising from undisclosed medical conditions
• Damage to existing dental restorations
• Results affected by failure to follow pre/post-treatment instructions
• Any indirect, consequential, or incidental damages

Our total liability for any claim shall not exceed the amount paid for the specific treatment giving rise to the claim.

This limitation does not affect your statutory rights as a consumer under French law or your right to seek compensation for damages caused by our negligence or breach of duty.`,
    },
    {
        title: "8. Informed Consent",
        content: `By booking and attending a teeth whitening session at Prestige Smile, you confirm that:

• You have read and understood this Service Disclaimer
• You have completed the health questionnaire honestly and accurately
• You have disclosed all relevant medical conditions and medications
• You understand this is a cosmetic, non-medical treatment
• You understand that results vary and are not guaranteed
• You understand the potential side effects and risks
• You meet the eligibility requirements for treatment
• You are at least 18 years of age
• You are not pregnant or breastfeeding
• You consent to the treatment with full knowledge of the above

A written consent form will be provided before your first treatment.

You have the right to withdraw your consent and refuse treatment at any time.`,
    },
    {
        title: "9. Photography and Testimonials",
        content: `Before/after photographs may be taken to document your results.

These photographs:
• Will only be used with your explicit written consent
• May be used for marketing and promotional purposes if consented
• Will not include identifying information without your permission
• Can be removed from use upon your request

Testimonials and reviews:
• Are individual experiences and opinions
• Do not represent guaranteed results
• Should not be relied upon as typical outcomes

You are under no obligation to allow photography or provide testimonials.`,
    },
    {
        title: "10. Professional Dental Advice",
        content: `THIS DISCLAIMER DOES NOT CONSTITUTE DENTAL OR MEDICAL ADVICE.

Always consult a qualified dental professional:
• Before undergoing any whitening treatment if you have concerns
• If you have dental conditions or oral health issues
• For diagnosis and treatment of dental problems
• For advice on dental restorations and their compatibility with whitening
• If you experience severe or prolonged side effects

Prestige Smile does not provide dental examinations, diagnoses, or dental treatments.

If you have any dental concerns or symptoms, please see a licensed dentist.`,
    },
    {
        title: "11. Changes to This Disclaimer",
        content: `We may update this Service Disclaimer from time to time.

Changes will be posted on our website with an updated "Last Updated" date.

By continuing to use our services after changes are posted, you accept the updated disclaimer.

For significant changes, we may notify you directly or request renewed consent.`,
    },
    {
        title: "12. Contact Information",
        content: `If you have questions about this disclaimer or our services:

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

const contraindications = [
    "Under 18 years of age",
    "Pregnant or breastfeeding",
    "Untreated cavities or tooth decay",
    "Active gum disease or infections",
    "Severe tooth sensitivity",
    "Allergy to peroxide products",
    "Recent oral surgery",
    "Exposed tooth roots",
];

export default function DisclaimerPage() {
    return (
        <div className="overflow-x-hidden">
            <Header />
            <main className="bg-primary">
                {/* Hero Header */}
                <section className="border-b border-brand-300 bg-brand-50 px-4 py-12 md:px-8 md:py-10 lg:px-16">
                    <div className="mx-auto max-w-7xl">
                        <nav className="mb-4 flex items-center gap-2 text-sm text-tertiary">
                            <a href="/" className="uppercase transition hover:text-brand-600">Home</a>
                            <span>/</span>
                            <span className="uppercase text-brand-600">Service Disclaimer</span>
                        </nav>
                        <div className="max-w-3xl">
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="text-2xl font-semibold uppercase text-primary md:text-3xl"
                            >
                                Service Terms & <span className="text-amber-600">Disclaimer</span>
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="mt-4 text-lg text-tertiary"
                            >
                                Important information about our cosmetic teeth whitening services. Please read carefully before booking.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Important Notice Banner */}
                <section className="bg-brand-100 px-4 py-6 md:px-8 lg:px-16">
                    <div className="mx-auto max-w-7xl">
                        <div className="flex items-start gap-4 rounded-xl border border-brand-300 bg-white p-6">
                            <AlertTriangle className="mt-0.5 size-6 shrink-0 text-brand-600" />
                            <div>
                                <h3 className="font-semibold text-primary">Important Notice</h3>
                                <p className="mt-1 text-sm text-tertiary">
                                    The teeth whitening services offered by Prestige Smile are <strong>cosmetic, non-medical treatments</strong>.
                                    They do not constitute dental care and do not replace professional dental treatment.
                                    Results vary between individuals and are not guaranteed. Please read this entire disclaimer before booking a session.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contraindications Quick Reference */}
                <section className="border-b border-secondary px-4 py-8 md:px-8 lg:px-16">
                    <div className="mx-auto max-w-7xl">
                        <div className="grid gap-6 md:grid-cols-2">
                            <div className="rounded-xl border border-red-200 bg-red-50 p-6">
                                <div className="flex items-center gap-3">
                                    <XCircle className="size-6 text-red-600" />
                                    <h3 className="font-semibold text-primary">Treatment NOT Suitable For</h3>
                                </div>
                                <ul className="mt-4 space-y-2">
                                    {contraindications.map((item) => (
                                        <li key={item} className="flex items-start gap-2 text-sm text-tertiary">
                                            <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-red-500" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="rounded-xl border border-green-200 bg-green-50 p-6">
                                <div className="flex items-center gap-3">
                                    <CheckCircle className="size-6 text-green-600" />
                                    <h3 className="font-semibold text-primary">Before Your Session</h3>
                                </div>
                                <ul className="mt-4 space-y-2">
                                    {[
                                        "Complete health questionnaire honestly",
                                        "Have dental cleaning 1-2 months prior",
                                        "Ensure cavities are treated",
                                        "Disclose all medical conditions",
                                        "Be at least 18 years old",
                                        "Not pregnant or breastfeeding",
                                        "Brush teeth before arriving",
                                        "Read and understand this disclaimer",
                                    ].map((item) => (
                                        <li key={item} className="flex items-start gap-2 text-sm text-tertiary">
                                            <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-green-500" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Content */}
                <section className="px-4 py-12 md:px-8 md:py-16 lg:px-16">
                    <div className="mx-auto max-w-7xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="mb-8 rounded-xl bg-blue-50 p-6"
                        >
                            <div className="flex items-start gap-3">
                                <InfoCircle className="mt-0.5 size-5 shrink-0 text-brand-600" />
                                <div>
                                    <p className="text-md text-tertiary">
                                        <strong className="text-primary">Last Updated:</strong> April 2025
                                    </p>
                                    <p className="mt-2 text-md text-tertiary">
                                        By booking a session with Prestige Smile, you acknowledge that you have read, understood, and agree to the terms outlined in this disclaimer.
                                    </p>
                                </div>
                            </div>
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
