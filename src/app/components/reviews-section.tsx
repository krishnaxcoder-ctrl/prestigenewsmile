"use client";

import { Star01 } from "@untitledui/icons";

const testimonials = [
    { id: 1, name: "Natalie Schaller", date: "04 July, 2025", avatar: "olivia-rhye", title: "Shiny Finds For Every Mood", content: "Great selection, excellent quality, my go-to store for all beauty needs. Highly recommend!", rating: 5 },
    { id: 2, name: "Jhone Doe", date: "02 July, 2025", avatar: "phoenix-baker", title: "Perfect Pieces For Everyone", content: "Exceptional products, amazing customer service, and my skin has never looked better!", rating: 5 },
];

export function ReviewsSection() {
    return (
        <section className="bg-white px-4 py-16 md:px-8 md:py-20 lg:px-16">
            <div className="mx-auto max-w-7xl">
                <div className="grid grid-cols-1 gap-10 lg:grid-cols-[300px_1fr] lg:gap-16">
                    {/* Left Side - Heading */}
                    <div>
                        <p className="text-sm font-medium uppercase tracking-widest text-tertiary">Testimonial</p>
                        <h2 className="mt-4 text-display-sm font-medium uppercase text-primary md:text-display-md lg:text-display-lg" style={{ fontFamily: "var(--global-heading-font-family)" }}>
                            What Client Say
                        </h2>
                        <a
                            href="/reviews"
                            className="mt-8 inline-block border border-gray-900 bg-transparent px-8 py-3 text-sm font-medium uppercase text-gray-900 transition duration-100 ease-linear hover:bg-gray-900 hover:text-white"
                        >
                            View All
                        </a>
                    </div>

                    {/* Right Side - Testimonial Cards */}
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                        {testimonials.map((testimonial) => (
                            <div key={testimonial.id} className="relative bg-[#f9f9f9] py-5 pl-6 pr-5 before:absolute before:inset-y-0 before:left-0 before:w-0.5 before:bg-gradient-to-b before:from-amber-300 before:via-amber-400 before:to-amber-500 before:shadow-[0_0_8px_rgba(251,191,36,0.6)]">
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
            </div>
        </section>
    );
}
