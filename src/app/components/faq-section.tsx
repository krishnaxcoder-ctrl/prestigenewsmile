"use client";

import { useState } from "react";
import { ChevronDown, ArrowRight } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";

const faqs = [
    { question: "How long does a teeth whitening session take?", answer: "A typical teeth whitening session takes between 45 to 60 minutes. Our Radiance Session includes consultation, preparation, and the whitening treatment itself. For optimal results, we recommend the Complete Treatment which includes multiple sessions over several weeks." },
    { question: "Is teeth whitening safe?", answer: "Yes, professional teeth whitening is completely safe when performed by trained specialists using approved products. Our treatments use gentle yet effective formulas that protect your enamel while delivering visible results. We always conduct a consultation to ensure the treatment is suitable for you." },
    { question: "How long do the results last?", answer: "Results typically last between 6 months to 2 years, depending on your lifestyle and oral care habits. Avoiding staining foods and beverages like coffee, tea, and red wine, along with regular brushing and occasional maintenance sessions, can help prolong your results." },
    { question: "Will my teeth be sensitive after whitening?", answer: "Some clients may experience mild sensitivity for 24-48 hours after treatment. This is normal and temporary. We provide aftercare instructions and products to minimize any discomfort. If you have sensitive teeth, please inform us during consultation so we can adjust the treatment accordingly." },
];

export function FAQSection() {
    const [openItems, setOpenItems] = useState<number[]>([0]);

    const toggleItem = (index: number) => {
        setOpenItems((prev) => prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]);
    };

    return (
        <section className="bg-secondary px-4 py-16 md:px-8 md:py-24 lg:px-16">
            <div className="mx-auto max-w-[1400px]">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
                    <div>
                        <span className="mb-3 inline-block rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-700">FAQ</span>
                        <h2 className="mt-4 text-display-xs font-semibold uppercase text-primary md:text-display-sm" style={{ fontFamily: "var(--global-heading-font-family)" }}>
                            Frequently Asked <span className="text-brand-600">Questions</span>
                        </h2>
                        <p className="mt-4 text-tertiary">Find answers to common questions about our teeth whitening services and products.</p>
                        <div className="mt-8">
                            <Button href="/faq" color="secondary" size="lg" iconTrailing={ArrowRight}>View All FAQs</Button>
                        </div>
                    </div>
                    <div className="space-y-3">
                        {faqs.map((faq, index) => {
                            const isOpen = openItems.includes(index);
                            return (
                                <div key={index} className="rounded-xl border border-secondary bg-primary">
                                    <button onClick={() => toggleItem(index)} className="flex w-full items-center justify-between p-5 text-left">
                                        <span className="pr-4 font-medium text-primary">{faq.question}</span>
                                        <ChevronDown className={`size-5 shrink-0 text-tertiary ${isOpen ? "rotate-180" : ""}`} />
                                    </button>
                                    {isOpen && (
                                        <div className="overflow-hidden">
                                            <div className="border-t border-secondary px-5 py-4">
                                                <p className="text-sm leading-relaxed text-tertiary">{faq.answer}</p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FAQSection;
