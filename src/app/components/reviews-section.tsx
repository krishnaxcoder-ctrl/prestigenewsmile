"use client";

import { Star01 } from "@untitledui/icons";

const testimonials = [
    { id: 1, name: "Natalie Schaller", date: "04 July, 2025", avatar: "olivia-rhye", title: "Shiny Finds For Every Mood", content: "Great selection, excellent quality, my go-to store for all beauty needs. Highly recommend!", rating: 5 },
    { id: 2, name: "Jhone Doe", date: "02 July, 2025", avatar: "phoenix-baker", title: "Perfect Pieces For Everyone", content: "Exceptional products, amazing customer service, and my skin has never looked better!", rating: 5 },
    { id: 3, name: "Sarah Mitchell", date: "28 June, 2025", avatar: "lana-steiner", title: "Amazing Transformation", content: "My teeth have never been whiter! The results exceeded my expectations. Will definitely come back!", rating: 5 },
    { id: 4, name: "Michael Chen", date: "25 June, 2025", avatar: "demi-wilkinson", title: "Professional & Friendly", content: "The staff was incredibly professional and made me feel comfortable throughout the entire process.", rating: 5 },
];

export function ReviewsSection() {
    return (
        <section className="bg-[#faf8f6] px-4 py-16 md:px-8 md:py-20 lg:px-16">
            <div className="mx-auto max-w-[1400px]">
                <div className="grid grid-cols-1 gap-10 lg:grid-cols-[300px_1fr] lg:gap-16">
                    {/* Left Side - Heading */}
                    <div>
                        <p className="text-sm font-medium uppercase tracking-widest text-tertiary">Testimonial</p>
                        <h2 className="mt-4 text-display-sm font-medium uppercase text-primary md:text-display-md lg:text-display-lg" style={{ fontFamily: "var(--global-heading-font-family)" }}>
                            What Client Say
                        </h2>
                        <a
                            href="/reviews"
                            className="mt-8 hidden border border-gray-900 bg-transparent px-8 py-3 text-sm font-medium uppercase text-gray-900 transition duration-100 ease-linear hover:bg-gray-900 hover:text-white lg:inline-block"
                        >
                            View All
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

                                {/* Title */}
                                <h3 className="mt-4 text-base font-medium uppercase tracking-wide text-primary md:text-lg" style={{ fontFamily: "var(--global-heading-font-family)" }}>
                                    {testimonial.title}
                                </h3>

                                {/* Content */}
                                <p className="mt-2 text-sm leading-relaxed text-tertiary">
                                    {testimonial.content}
                                </p>

                                {/* Author */}
                                <div className="mt-5 flex items-center gap-3">
                                    <img
                                        src={`https://www.untitledui.com/images/avatars/${testimonial.avatar}`}
                                        alt={testimonial.name}
                                        className="size-10 shrink-0 rounded-full object-cover"
                                    />
                                    <div>
                                        <div className="text-sm font-semibold text-primary">{testimonial.name}</div>
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
