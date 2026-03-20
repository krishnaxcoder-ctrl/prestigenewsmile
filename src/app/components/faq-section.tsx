"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";

const faqs = [
    {
        question: "How long does a teeth whitening session take?",
        answer: "A typical teeth whitening session takes between 45 to 60 minutes. Our Radiance Session includes consultation, preparation, and the whitening treatment itself. For optimal results, we recommend the Complete Treatment which includes multiple sessions over several weeks.",
    },
    {
        question: "Is teeth whitening safe?",
        answer: "Yes, professional teeth whitening is completely safe when performed by trained specialists using approved products. Our treatments use gentle yet effective formulas that protect your enamel while delivering visible results. We always conduct a consultation to ensure the treatment is suitable for you.",
    },
    {
        question: "How long do the results last?",
        answer: "Results typically last between 6 months to 2 years, depending on your lifestyle and oral care habits. Avoiding staining foods and beverages like coffee, tea, and red wine, along with regular brushing and occasional maintenance sessions, can help prolong your results.",
    },
    {
        question: "Will my teeth be sensitive after whitening?",
        answer: "Some clients may experience mild sensitivity for 24-48 hours after treatment. This is normal and temporary. We provide aftercare instructions and products to minimize any discomfort. If you have sensitive teeth, please inform us during consultation so we can adjust the treatment accordingly.",
    },
];

const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (delay: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay, ease: [0, 0, 0.2, 1] as const },
    }),
};

export function FAQSection() {
    const [openItems, setOpenItems] = useState<number[]>([0]);

    const toggleItem = (index: number) => {
        setOpenItems((prev) =>
            prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
        );
    };

    return (
        <section className="bg-secondary px-4 py-16 md:px-8 md:py-24 lg:px-16">
            <div className="mx-auto max-w-7xl">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
                    {/* Left Side - Header */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <motion.span
                            custom={0}
                            variants={fadeIn}
                            className="mb-3 inline-block rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-700"
                        >
                            FAQ
                        </motion.span>
                        <motion.h2
                            custom={0.05}
                            variants={fadeIn}
                            className="mt-4 text-display-xs font-semibold text-primary md:text-display-sm"
                        >
                            Frequently Asked{" "}
                            <span className="text-brand-600">Questions</span>
                        </motion.h2>
                        <motion.p
                            custom={0.1}
                            variants={fadeIn}
                            className="mt-4 text-tertiary"
                        >
                            Find answers to common questions about our teeth whitening services and products.
                        </motion.p>
                        <motion.div custom={0.15} variants={fadeIn} className="mt-8">
                            <Button
                                href="/faq"
                                color="secondary"
                                size="lg"
                                iconTrailing={ArrowRight}
                            >
                                View All FAQs
                            </Button>
                        </motion.div>
                    </motion.div>

                    {/* Right Side - FAQ Accordion */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="space-y-3"
                    >
                        {faqs.map((faq, index) => {
                            const isOpen = openItems.includes(index);

                            return (
                                <motion.div
                                    key={index}
                                    custom={index * 0.1}
                                    variants={fadeIn}
                                    className="rounded-xl border border-secondary bg-primary"
                                >
                                    <button
                                        onClick={() => toggleItem(index)}
                                        className="flex w-full items-center justify-between p-5 text-left"
                                    >
                                        <span className="pr-4 font-medium text-primary">
                                            {faq.question}
                                        </span>
                                        <ChevronDown
                                            className={`size-5 shrink-0 text-tertiary transition duration-200 ${
                                                isOpen ? "rotate-180" : ""
                                            }`}
                                        />
                                    </button>
                                    <AnimatePresence>
                                        {isOpen && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.2 }}
                                                className="overflow-hidden"
                                            >
                                                <div className="border-t border-secondary px-5 py-4">
                                                    <p className="text-sm leading-relaxed text-tertiary">
                                                        {faq.answer}
                                                    </p>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default FAQSection;
