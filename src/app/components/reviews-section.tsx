"use client";

import { Star01 } from "@untitledui/icons";

const testimonials = [
    { id: 1, name: "Mélanie", date: "04 July, 2025", avatar: "/avatar1.png", title: "A Real Confidence Boost", content: "I'm honestly so impressed with the results of my teeth whitening session! I noticed a visible difference right after the treatment, my teeth look so much brighter but still natural. The entire process was comfortable, and the team made me feel at ease from start to finish. Highly recommend for anyone wanting a confidence boost in their smile!", rating: 5 },
    { id: 2, name: "Leyna Gonzalez", date: "02 July, 2025", avatar: "/avatar2.webp", title: "Un Sourire Incroyable", content: "Merci pour ta performance exceptionnelle ! Je suis absolument ravie du résultat, j'ai aujourd'hui un sourire incroyable, plus lumineux et plein de confiance. L'expérience a été très agréable du début à la fin, avec beaucoup de professionnalisme et d'attention aux détails. On sent vraiment la passion dans ton travail. Continue comme ça, tu fais un travail remarquable!", rating: 5 },
];

export function ReviewsSection() {
    return (
        <section className="bg-[#faf8f6] px-4 py-16 md:px-8 md:py-20 lg:px-16">
            <div className="mx-auto max-w-[1400px]">
                <div className="grid grid-cols-1 gap-10 lg:grid-cols-[400px_1fr] lg:gap-16">
                    {/* Left Side - Heading */}
                    <div>
                        <p className="text-sm font-medium uppercase tracking-widest text-brand-600">Testimonial</p>

                        <h2 className="mt-3 text-display-sm font-medium text-primary md:text-display-md lg:text-display-lg" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                            What Our <br className="hidden lg:block" />
                            <span className="italic text-brand-600">Clients Say</span>
                        </h2>

                          <p className="mt-6 text-sm leading-relaxed text-gray-500">
                            Discover why hundreds of clients trust us for their smile transformation journey.
                        </p>

                        <a
                            href="/reviews"
                            className="mt-8 hidden items-center gap-2 border border-brand-600 bg-transparent px-8 py-3 text-sm font-medium uppercase text-brand-600 transition duration-200 ease-linear hover:bg-brand-600 hover:text-white lg:inline-flex"
                        >
                            View All Reviews
                            <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                    </div>

                    {/* Right Side - Testimonial Cards */}
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-x-5 md:gap-y-8">
                        {testimonials.map((testimonial) => (
                            <div key={testimonial.id} className="relative bg-white border border-gray-200 py-5 pl-6 pr-5 before:absolute before:inset-y-0 before:left-0 before:w-1 before:rounded-full before:bg-gradient-to-b before:from-[#e8ddd5] before:via-[#d4c4b8] before:to-[#c5b5a8]">
                                {/* Stars */}
                                <div className="flex gap-0.5">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star01 key={i} className="size-4 fill-amber-400 text-amber-400" />
                                    ))}
                                </div>

                                {/* Content */}
                                <p className="mt-4 text-sm leading-relaxed text-tertiary">
                                    {testimonial.content}
                                </p>

                                {/* Author */}
                                <div className="mt-5 flex items-center gap-3">
                                    <img
                                        src={testimonial.avatar.startsWith("/") ? testimonial.avatar : `https://www.untitledui.com/images/avatars/${testimonial.avatar}`}
                                        alt={testimonial.name}
                                        className="size-14 shrink-0 object-cover"
                                        style={{ clipPath: "polygon(50% 0%, 59% 2%, 63% 8%, 71% 6%, 78% 12%, 80% 20%, 88% 22%, 92% 30%, 97% 37%, 100% 46%, 98% 55%, 100% 63%, 95% 70%, 92% 78%, 86% 82%, 80% 88%, 74% 92%, 66% 94%, 58% 98%, 50% 100%, 42% 98%, 34% 94%, 26% 92%, 20% 88%, 14% 82%, 8% 78%, 5% 70%, 0% 63%, 2% 55%, 0% 46%, 3% 37%, 8% 30%, 12% 22%, 20% 20%, 22% 12%, 29% 6%, 37% 8%, 41% 2%)" }}
                                    />
                                    <div>
                                        <div className="text-base font-semibold text-primary">{testimonial.name}</div>
                                        <div className="text-xs text-brand-600">{testimonial.date}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Mobile View All Button */}
                <div className="mt-8 text-center lg:hidden">
                    <a
                        href="/reviews"
                        className="inline-block border border-gray-900 bg-transparent px-8 py-3 text-sm font-medium uppercase text-gray-900 transition duration-100 ease-linear hover:bg-gray-900 hover:text-white"
                    >
                        View All
                    </a>
                </div>
            </div>
        </section>
    );
}
