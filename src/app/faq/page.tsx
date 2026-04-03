"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, SearchSm } from "@untitledui/icons";
import { Header } from "@/app/components/header";
import { Footer } from "@/app/components/footer";
import { RatingBadge } from "@/components/foundations/rating-badge";

const faqCategories = [
    {
        name: "Teeth Whitening",
        faqs: [
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
        ],
    },
    {
        name: "Products & Orders",
        faqs: [
            {
                question: "How do I track my order?",
                answer: "Once your order is shipped, you'll receive an email with a tracking number. You can use this number to track your package on our website or the carrier's website. You can also view your order status in your account under 'My Orders'.",
            },
            {
                question: "What payment methods do you accept?",
                answer: "We accept Twint, Revolut, and cash payments. All transactions are secure and encrypted for your protection.",
            },
            {
                question: "Can I return or exchange products?",
                answer: "Yes, we offer a 30-day return policy for unopened and unused products in their original packaging. To initiate a return, please contact our customer support team with your order number. Refunds are processed within 5-7 business days.",
            },
            {
                question: "Do you offer international shipping?",
                answer: "Yes! We deliver within France as well as internationally. All orders include fast shipping with tracking. Estimated delivery time is 2 to 4 business days. Shipping fee is €3.90, and we offer free shipping on orders over €20.",
            },
        ],
    },
    {
        name: "Booking & Appointments",
        faqs: [
            {
                question: "How do I book an appointment?",
                answer: "You can book an appointment through our online booking system, by calling us at +41 78 300 06 19, or by visiting our studio at 1 rue Jean Moulin, 74100 Ambilly. We recommend booking at least 1 week in advance, especially for weekend appointments.",
            },
            {
                question: "What is your cancellation policy?",
                answer: "We understand plans can change. Please cancel or reschedule at least 24 hours before your appointment to avoid a cancellation fee. Late cancellations or no-shows may be charged 50% of the service price.",
            },
            {
                question: "Do you offer consultations before treatment?",
                answer: "Yes, all our treatments include a complimentary consultation. During this time, we assess your teeth, discuss your goals, and create a personalized treatment plan. This consultation is also a great opportunity to ask any questions you may have.",
            },
        ],
    },
    {
        name: "Account & Support",
        faqs: [
            {
                question: "How do I create an account?",
                answer: "Click on 'Sign Up' in the top right corner of our website and fill in your details. You can also sign up using your Google or Facebook account for faster registration. Having an account allows you to track orders, save favorites, and access exclusive member benefits.",
            },
            {
                question: "I forgot my password. How can I reset it?",
                answer: "Click on 'Login' and then 'Forgot Password'. Enter your email address and we'll send you a link to reset your password. The link expires after 24 hours for security reasons.",
            },
            {
                question: "How can I contact customer support?",
                answer: "You can reach our support team via email at hello@prestigesmile.ch, by phone at +41 78 300 06 19 (Mon-Fri 10am-8pm, Sat 10am-7pm), or through the contact form on our website. We aim to respond to all inquiries within 24 hours.",
            },
        ],
    },
];

export default function FAQPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [openItems, setOpenItems] = useState<string[]>([]);
    const [activeCategory, setActiveCategory] = useState("all");

    const toggleItem = (id: string) => {
        setOpenItems((prev) =>
            prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
        );
    };

    const filteredCategories = faqCategories
        .filter((category) => activeCategory === "all" || category.name === activeCategory)
        .map((category) => ({
            ...category,
            faqs: category.faqs.filter(
                (faq) =>
                    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
            ),
        }))
        .filter((category) => category.faqs.length > 0);

    return (
        <div className="overflow-x-hidden">
            <Header />
            <main className="bg-primary">
                {/* Hero Header */}
                <section className="border-b border-teal-400 bg-teal-50 px-4 py-12 md:px-8 md:py-10 lg:px-16">
                    <div className="mx-auto max-w-7xl">
                        <nav className="mb-4 flex items-center gap-2 text-sm text-tertiary">
                            <a href="/" className="uppercase transition hover:text-teal-600">Home</a>
                            <span>/</span>
                            <span className="uppercase text-teal-600">FAQ</span>
                        </nav>
                        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
                            <div className="max-w-3xl">
                                <motion.h1
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.1 }}
                                    className="text-2xl font-semibold uppercase text-primary md:text-3xl"
                                >
                                    Frequently Asked <span className="text-teal-600">Questions</span>
                                </motion.h1>
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    className="mt-4 text-lg text-tertiary"
                                >
                                    Find answers to common questions about our teeth whitening services and products.
                                </motion.p>
                            </div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="hidden shrink-0 md:block"
                            >
                                <RatingBadge rating={4.9} title="Quick Support" subtitle="24hr response time" />
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* FAQ Content */}
                <section className="px-4 py-12 md:px-8 md:py-16 lg:px-16">
                    <div className="mx-auto max-w-7xl">
                        {/* Search Bar */}
                        <div className="relative mb-8">
                            <SearchSm className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-tertiary" />
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search for answers..."
                                className="w-full rounded-xl border border-secondary bg-primary py-4 pl-12 pr-4 text-sm text-primary placeholder:text-tertiary focus:border-brand-500 focus:outline-none"
                            />
                        </div>

                        {/* Category Filters */}
                        <div className="mb-8 flex flex-wrap gap-2">
                            <button
                                onClick={() => setActiveCategory("all")}
                                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                                    activeCategory === "all"
                                        ? "bg-brand-600 text-white"
                                        : "bg-secondary text-tertiary hover:text-primary"
                                }`}
                            >
                                All
                            </button>
                            {faqCategories.map((category) => (
                                <button
                                    key={category.name}
                                    onClick={() => setActiveCategory(category.name)}
                                    className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                                        activeCategory === category.name
                                            ? "bg-brand-600 text-white"
                                            : "bg-secondary text-tertiary hover:text-primary"
                                    }`}
                                >
                                    {category.name}
                                </button>
                            ))}
                        </div>

                        {/* FAQ Items */}
                        {filteredCategories.length > 0 ? (
                            <div className="space-y-8">
                                {filteredCategories.map((category) => (
                                    <div key={category.name}>
                                        <h2 className="mb-4 text-lg font-semibold text-primary">
                                            {category.name}
                                        </h2>
                                        <div className="space-y-3">
                                            {category.faqs.map((faq, index) => {
                                                const id = `${category.name}-${index}`;
                                                const isOpen = openItems.includes(id);

                                                return (
                                                    <motion.div
                                                        key={id}
                                                        initial={{ opacity: 0, y: 10 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        transition={{ duration: 0.3, delay: index * 0.05 }}
                                                        className="rounded-xl border border-secondary bg-primary"
                                                    >
                                                        <button
                                                            onClick={() => toggleItem(id)}
                                                            className="flex w-full items-center justify-between p-5 text-left"
                                                        >
                                                            <span className="pr-4 font-medium text-primary">
                                                                {faq.question}
                                                            </span>
                                                            <ChevronDown
                                                                className={`size-5 shrink-0 text-tertiary transition ${
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
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="py-12 text-center">
                                <p className="text-tertiary">
                                    No results found for "{searchQuery}"
                                </p>
                            </div>
                        )}

                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
