"use client";

import { useState } from "react";
import { ChevronDown, Phone } from "@untitledui/icons";

const faqs = [
    {
        question: "Is teeth whitening painful?",
        answer: "The treatment is painless. Some people may experience slight sensitivity during or after the session, but it is temporary and usually disappears within 24 hours."
    },
    {
        question: "Are the results visible from the first session?",
        answer: "Yes, a result is visible from the first session. Depending on the initial shade, a two-session protocol may be recommended for a more intense and lasting result."
    },
    {
        question: "How many shades can you gain?",
        answer: "Teeth can be whitened up to 7 shades, depending on the initial shade."
    },
    {
        question: "How long does the result last?",
        answer: "The stability of the result depends on the protocol followed and lifestyle habits (coffee, tea, tobacco, etc.).\n\nAfter a session, the result generally remains between 6 and 8 months.\n\nAfter a complete protocol (2 sessions), the results can remain on average between 8 and 12 months, with a more intense and lasting lightening.\n\nTo maintain optimal shine over time, a maintenance session can be considered starting from 6 months, according to your needs."
    },
    {
        question: "Does teeth whitening damage teeth?",
        answer: "No. The protocol used is respectful of enamel and gums when carried out under the prescribed conditions."
    },
    {
        question: "Does the treatment work on all teeth?",
        answer: "Teeth whitening only works on natural teeth. Crowns, veneers and implants do not respond to the treatment."
    },
    {
        question: "Should I have my teeth cleaned before the session?",
        answer: "Yes, descaling is recommended in the weeks leading up to the session in order to optimize the results of whitening."
    },
    {
        question: "Is it possible to eat or drink after the session?",
        answer: "Yes, you can eat and drink after your session.\n\nHowever, during the 24 to 48 hours following treatment, it is recommended to avoid foods and drinks that may stain teeth, in order to optimize and prolong the result.\n\nTo be limited during this period:\n• Coffee, tea, red wine, sodas and colored drinks\n• Red fruits (raspberries, blueberries, cherries...)\n• Colorful sauces (tomato, ketchup...)\n• Pigmented spices (curry, paprika...)\n• Tobacco\n\nAcidic foods (lemon, grapefruit, etc.) should also be avoided in order not to sensitize the enamel."
    },
    {
        question: "Are there any contraindications?",
        answer: "Yes. The treatment is not recommended in certain cases (pregnancy, untreated cavities, infections, significant hypersensitivity, etc.). A health questionnaire is systematically sent before the session to ensure your safety."
    },
    {
        question: "Who is teeth whitening for?",
        answer: "The treatment is aimed at adults (18 years and over) wishing to regain a brighter smile and improve the aesthetics of their teeth."
    },
    {
        question: "How often can I have teeth whitening?",
        answer: "A maintenance session can be considered every 6 to 12 months, according to your needs and lifestyle."
    },
];

export function FAQSection() {
    const [openItems, setOpenItems] = useState<number[]>([0]);

    const toggleItem = (index: number) => {
        setOpenItems((prev) => prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]);
    };

    return (
        <section className="bg-[#faf8f6] px-4 py-16 md:px-8 md:py-24 lg:px-16">
            <div className="mx-auto max-w-[1400px]">
                {/* Header */}
                <div className="mb-12 text-center">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-600">FAQ</p>
                    <h2 className="mt-4 text-3xl font-light text-primary md:text-4xl lg:text-5xl" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                        Frequently Asked{" "}
                        <span className="italic text-brand-600">Questions</span>
                    </h2>
                    <div className="mx-auto mt-6 h-px w-24 bg-gradient-to-r from-transparent via-[#d4c4b8] to-transparent" />
                </div>

                {/* FAQ Items */}
                <div className="mx-auto max-w-3xl space-y-4">
                    {faqs.map((faq, index) => {
                        const isOpen = openItems.includes(index);
                        return (
                            <div key={index} className="overflow-hidden rounded-xl border border-gray-200 bg-white transition-shadow duration-200 hover:shadow-sm">
                                <button onClick={() => toggleItem(index)} className="flex w-full items-center justify-between p-4 text-left">
                                    <span className="pr-4 font-medium text-gray-900" style={{ fontFamily: "Jost, 'Jost Fallback'" }}>{faq.question}</span>
                                    <div className={`flex size-5 shrink-0 items-center justify-center rounded-full bg-[#f5f0ec] transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}>
                                        <ChevronDown className="size-4 text-brand-600" />
                                    </div>
                                </button>
                                {isOpen && (
                                    <div className="border-t border-gray-100 bg-[#fdfcfb] px-5 py-4">
                                        <p className="whitespace-pre-line text-sm leading-relaxed text-gray-600">{faq.answer}</p>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* Contact Section */}
                <div className="mt-16 rounded-2xl bg-white p-8 text-center shadow-sm md:p-12">
                    <h3 className="text-xl font-medium text-gray-900 md:text-2xl" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                        Do you have a question?
                    </h3>
                    <p className="mt-2 text-gray-500">Feel free to contact us. I remain available to advise and support you in your process.</p>

                    <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8">
                        <a href="tel:+41783000619" className="flex items-center gap-3 rounded-full bg-[#f5f0ec] px-6 py-3 text-sm font-medium text-gray-700 transition hover:bg-[#ebe4dd]">
                            <Phone className="size-4 text-brand-600" />
                            +41 78 300 06 19
                        </a>
                        <a href="https://instagram.com/prestige.smile.studio" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-full bg-[#f5f0ec] px-6 py-3 text-sm font-medium text-gray-700 transition hover:bg-[#ebe4dd]">
                            <svg className="size-4 text-brand-600" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                            </svg>
                            @prestige.smile.studio
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FAQSection;
