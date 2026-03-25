"use client";

import Link from "next/link";
import { Star01, ArrowRight } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";

const avatars = ["olivia-rhye", "phoenix-baker", "lana-steiner", "demi-wilkinson", "candice-wu", "natali-craig"];

const testimonials = [
    { id: 1, name: "Sophie Laurent", role: "Marketing Director", location: "Geneva, Switzerland", avatar: avatars[0], content: "I was skeptical at first, but the results were incredible! My teeth are now 6 shades whiter and I couldn't be happier.", rating: 5, badge: "6 Shades" },
    { id: 2, name: "Marc Dubois", role: "Business Owner", location: "Lyon, France", avatar: avatars[1], content: "Best investment I've made in myself. The results speak for themselves - everyone keeps complimenting my smile!", rating: 5, badge: "5 Shades" },
    { id: 3, name: "Emma Fischer", role: "Event Planner", location: "Zurich, Switzerland", avatar: avatars[2], content: "Had my teeth whitened before my wedding and it was the perfect decision. The photos turned out absolutely amazing!", rating: 5, badge: "Wedding" },
    { id: 4, name: "Lucas Bernard", role: "Software Engineer", location: "Paris, France", avatar: avatars[3], content: "Quick, painless, and effective. What more could you ask for? The staff was friendly and the results exceeded my expectations.", rating: 5, badge: "7 Shades" },
    { id: 5, name: "Amélie Martin", role: "Dentist", location: "Annecy, France", avatar: avatars[4], content: "As a dental professional myself, I was impressed by the quality of service and products. I now recommend Prestige Smile to my patients.", rating: 5, badge: "Pro Pick" },
    { id: 6, name: "Thomas Müller", role: "Photographer", location: "Basel, Switzerland", avatar: avatars[5], content: "The difference is unbelievable. My before and after photos look like two different people! Highly recommend for anyone wanting a brighter smile.", rating: 5, badge: "8 Shades" },
];

export function ReviewsSection() {
    return (
        <section className="border-b border-teal-400 bg-teal-50 px-4 py-16 md:px-8 md:py-20 lg:px-16">
            <div className="mx-auto max-w-7xl">
                <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
                    <div>
                        <p className="text-sm font-medium uppercase tracking-wider text-teal-600">What our customers say...</p>
                        <h2 className="mt-3 max-w-2xl text-2xl font-semibold uppercase text-primary md:text-3xl" style={{ fontFamily: "var(--global-heading-font-family)" }}>
                            Real stories from our happy clients
                        </h2>
                    </div>
                    <Link href="/reviews">
                        <Button color="primary" size="lg" iconTrailing={ArrowRight}>See All Reviews</Button>
                    </Link>
                </div>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="rounded-md border border-teal-200 bg-white p-3">
                            <div className="flex items-center justify-between">
                                <div className="flex gap-0.5">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star01 key={i} className="size-4 fill-amber-400 text-amber-400" />
                                    ))}
                                </div>
                                {testimonial.badge && (
                                    <span className="rounded-full border border-teal-200 bg-teal-50 px-3 py-1 text-xs font-medium text-teal-700">
                                        {testimonial.badge}
                                    </span>
                                )}
                            </div>
                            <p className="mt-4 leading-relaxed text-primary">"{testimonial.content}"</p>
                            <div className="mt-6 flex items-center gap-3">
                                <img
                                    src={`https://www.untitledui.com/images/avatars/${testimonial.avatar}`}
                                    alt={testimonial.name}
                                    className="size-10 shrink-0 rounded-full object-cover"
                                />
                                <div>
                                    <div className="font-semibold text-primary">{testimonial.name}</div>
                                    <div className="text-sm text-tertiary">
                                        {testimonial.role} <span className="text-quaternary">•</span> {testimonial.location}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
