"use client";

import { motion } from "framer-motion";
import { Header } from "@/app/components/header";
import { Footer } from "@/app/components/footer";
import { Star01, CheckVerified01 } from "@untitledui/icons";

const testimonials = [
    {
        id: 1,
        name: "Sophie Laurent",
        role: "Marketing Director",
        content: "I was skeptical at first, but the results were incredible! My teeth are now 6 shades whiter and I couldn't be happier. The team was so professional and made me feel comfortable throughout the entire process.",
        rating: 5,
        source: "Google",
        featured: false,
    },
    {
        id: 2,
        name: "Marc Dubois",
        role: "Business Owner",
        content: "Best investment I've made in myself. The results speak for themselves - everyone keeps complimenting my smile!",
        rating: 5,
        source: "Instagram",
        featured: false,
    },
    {
        id: 3,
        name: "Emma Fischer",
        role: "Event Planner",
        content: "Had my teeth whitened before my wedding and it was the perfect decision. The photos turned out amazing and I felt so confident on my special day. Thank you Prestige Smile!",
        rating: 5,
        source: "Google",
        featured: true,
    },
    {
        id: 4,
        name: "Lucas Bernard",
        role: "Software Engineer",
        content: "Quick, painless, and effective. What more could you ask for? The staff was friendly and the results exceeded my expectations.",
        rating: 5,
        source: "Facebook",
        featured: false,
    },
    {
        id: 5,
        name: "Amélie Martin",
        role: "Dentist",
        content: "As a dental professional myself, I was impressed by the quality of service and products used. I now recommend Prestige Smile to all my patients looking for professional whitening.",
        rating: 5,
        source: "LinkedIn",
        featured: true,
    },
    {
        id: 6,
        name: "Thomas Müller",
        role: "Photographer",
        content: "The difference is unbelievable. My before and after photos look like two different people!",
        rating: 5,
        source: "Google",
        featured: false,
    },
    {
        id: 7,
        name: "Isabelle Roux",
        role: "Teacher",
        content: "I've tried many whitening products over the years, but nothing compares to this professional treatment. Finally found something that actually works!",
        rating: 5,
        source: "Instagram",
        featured: false,
    },
    {
        id: 8,
        name: "David Chen",
        role: "Consultant",
        content: "From booking to the final result, everything was seamless. The online booking was easy, the location is convenient, and the results are stunning. Highly recommend!",
        rating: 5,
        source: "Google",
        featured: true,
    },
    {
        id: 9,
        name: "Nadia Kovač",
        role: "Actress",
        content: "In my profession, a bright smile is essential. Prestige Smile delivered exactly what I needed. My smile has never looked better on camera.",
        rating: 5,
        source: "Instagram",
        featured: false,
    },
    {
        id: 10,
        name: "Pierre Lefebvre",
        role: "Sales Manager",
        content: "Confidence boost like no other. I used to hide my smile in photos, now I can't stop showing it off!",
        rating: 5,
        source: "Google",
        featured: false,
    },
    {
        id: 11,
        name: "Julia Andersson",
        role: "Nurse",
        content: "The sensitivity was minimal and gone within a day. The team really knows what they're doing. Amazing results!",
        rating: 5,
        source: "Facebook",
        featured: false,
    },
    {
        id: 12,
        name: "Oliver Schmidt",
        role: "Architect",
        content: "Worth every penny. The atmosphere is relaxing, the staff is wonderful, and the results are professional-grade. Will definitely be back for maintenance.",
        rating: 5,
        source: "Google",
        featured: false,
    },
    {
        id: 13,
        name: "Claire Fontaine",
        role: "Flight Attendant",
        content: "I travel constantly and needed a quick solution. One session and my smile was transformed. The convenience and professionalism were outstanding!",
        rating: 5,
        source: "Google",
        featured: false,
    },
    {
        id: 14,
        name: "Antoine Moreau",
        role: "Chef",
        content: "Finally feel confident smiling in front of customers. The treatment was gentle and the results are natural-looking. Exactly what I wanted.",
        rating: 5,
        source: "Instagram",
        featured: true,
    },
    {
        id: 15,
        name: "Léa Petit",
        role: "Yoga Instructor",
        content: "Such a calming experience. The studio has a spa-like atmosphere and the team made sure I was comfortable. My smile is radiant now!",
        rating: 5,
        source: "Google",
        featured: false,
    },
    {
        id: 16,
        name: "Henrik Johansson",
        role: "Financial Analyst",
        content: "ROI on this treatment is incredible. Better than any product I've bought. Professional results that last.",
        rating: 5,
        source: "LinkedIn",
        featured: false,
    },
    {
        id: 17,
        name: "Marta Gonzalez",
        role: "Interior Designer",
        content: "The attention to detail here is impressive. From the beautiful studio to the precise treatment - everything was perfect. Love my new smile!",
        rating: 5,
        source: "Instagram",
        featured: false,
    },
    {
        id: 18,
        name: "James Wilson",
        role: "Real Estate Agent",
        content: "In my line of work, first impressions matter. This treatment gave me the confidence boost I needed. Clients always comment on my smile now.",
        rating: 5,
        source: "Google",
        featured: true,
    },
    {
        id: 19,
        name: "Céline Dupont",
        role: "Pharmacist",
        content: "I was worried about sensitivity given my dental history, but the team was so careful and used the right products. Zero discomfort and amazing results!",
        rating: 5,
        source: "Facebook",
        featured: false,
    },
    {
        id: 20,
        name: "Alessandro Ricci",
        role: "Hotel Manager",
        content: "Brought my whole team here for a group session before our hotel's grand opening. Everyone was thrilled with the results. Highly professional service.",
        rating: 5,
        source: "Google",
        featured: false,
    },
    {
        id: 21,
        name: "Katarina Novak",
        role: "Model",
        content: "My agency recommended Prestige Smile and I understand why. The results are camera-ready and completely natural. A must for anyone in front of the lens.",
        rating: 5,
        source: "Instagram",
        featured: true,
    },
    {
        id: 22,
        name: "François Blanc",
        role: "Lawyer",
        content: "Discrete location, professional service, remarkable results. Everything a busy professional needs. Booked my next maintenance session already.",
        rating: 5,
        source: "Google",
        featured: false,
    },
    {
        id: 23,
        name: "Anna Bergström",
        role: "Graphic Designer",
        content: "The before/after difference is like a filter in real life! So happy with my brighter smile. The team was lovely too.",
        rating: 5,
        source: "Instagram",
        featured: false,
    },
    {
        id: 24,
        name: "Michael Torres",
        role: "Personal Trainer",
        content: "I preach self-improvement to my clients, and this was the perfect addition to my routine. Quick session, lasting results. 10/10 recommend!",
        rating: 5,
        source: "Google",
        featured: false,
    },
    {
        id: 25,
        name: "Elise Bonnet",
        role: "Journalist",
        content: "As someone who's on camera regularly, this was a game-changer. Natural results that photograph beautifully. Thank you Prestige Smile!",
        rating: 5,
        source: "LinkedIn",
        featured: false,
    },
    {
        id: 26,
        name: "Viktor Petrov",
        role: "Entrepreneur",
        content: "Time is money, and this treatment is efficient. In and out in under 2 hours with a completely transformed smile. Brilliant service.",
        rating: 5,
        source: "Google",
        featured: false,
    },
    {
        id: 27,
        name: "Sophia Rossi",
        role: "Wedding Planner",
        content: "I recommend Prestige Smile to all my brides and grooms. The results are consistently amazing and the team is so accommodating with schedules.",
        rating: 5,
        source: "Instagram",
        featured: true,
    },
    {
        id: 28,
        name: "Nicolas Favre",
        role: "Pilot",
        content: "Found this place during a layover in Geneva. Best spontaneous decision ever! My crew was so impressed they all booked appointments.",
        rating: 5,
        source: "Google",
        featured: false,
    },
    {
        id: 29,
        name: "Lena Weber",
        role: "HR Director",
        content: "Organized a team wellness day here. The group booking was easy and everyone left with brighter smiles and higher morale!",
        rating: 5,
        source: "LinkedIn",
        featured: false,
    },
    {
        id: 30,
        name: "Raphaël Mercier",
        role: "Musician",
        content: "Stage presence improved instantly. When you feel good about your smile, it shows. The whole band came back for treatments!",
        rating: 5,
        source: "Instagram",
        featured: false,
    },
];

const stats = [
    { value: "500+", label: "Happy Clients" },
    { value: "4.9", label: "Average Rating" },
    { value: "6+", label: "Shades Whiter" },
    { value: "98%", label: "Satisfaction Rate" },
];

export default function ReviewsPage() {
    return (
        <div className="overflow-x-hidden">
            <Header />
            <main className="bg-primary">
                {/* Hero Section */}
                <section className="border-b border-secondary px-4 py-16 md:px-8 md:py-24 lg:px-16">
                    <div className="mx-auto max-w-4xl text-center">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-4xl font-semibold text-primary md:text-5xl lg:text-6xl"
                        >
                            What our customers say...
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="mx-auto mt-6 max-w-2xl text-lg text-tertiary"
                        >
                            Real stories from real people who transformed their smiles with Prestige Smile Studio.
                        </motion.p>

                        {/* Stats */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4"
                        >
                            {stats.map((stat) => (
                                <div key={stat.label}>
                                    <div className="text-3xl font-semibold text-brand-600 md:text-4xl">
                                        {stat.value}
                                    </div>
                                    <div className="mt-1 text-sm text-tertiary">{stat.label}</div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* Testimonials Masonry Grid */}
                <section className="px-4 py-12 md:px-8 md:py-16 lg:px-16">
                    <div className="mx-auto max-w-7xl">
                        <div className="columns-1 gap-6 md:columns-2 lg:columns-3">
                            {testimonials.map((testimonial, index) => (
                                <motion.div
                                    key={testimonial.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.05 }}
                                    className={`mb-6 break-inside-avoid rounded-2xl border border-secondary p-6 ${
                                        testimonial.featured ? 'bg-brand-50' : 'bg-primary'
                                    }`}
                                >
                                    {/* Rating */}
                                    <div className="flex gap-1">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star01 key={i} className="size-5 fill-amber-400 text-amber-400" />
                                        ))}
                                    </div>

                                    {/* Content */}
                                    <p className="mt-4 text-primary">"{testimonial.content}"</p>

                                    {/* Author */}
                                    <div className="mt-6 flex items-center justify-between">
                                        <div>
                                            <div className="flex items-center gap-2">
                                                <span className="font-semibold text-primary">{testimonial.name}</span>
                                                {testimonial.featured && (
                                                    <CheckVerified01 className="size-4 text-brand-600" />
                                                )}
                                            </div>
                                            <div className="text-sm text-tertiary">{testimonial.role}</div>
                                        </div>
                                        <div className="text-xs text-quaternary">via {testimonial.source}</div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Before & After Section */}
                <section className="border-t border-secondary bg-secondary/30 px-4 py-12 md:px-8 md:py-16 lg:px-16">
                    <div className="mx-auto max-w-7xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="text-center"
                        >
                            <h2 className="text-3xl font-semibold text-primary md:text-4xl">
                                See the Results
                            </h2>
                            <p className="mx-auto mt-4 max-w-xl text-tertiary">
                                Real transformations from our clients. Results visible in just one session.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="mt-10 grid gap-6 md:grid-cols-2"
                        >
                            {[1, 3, 5, 7].map((beforeNum) => (
                                <div
                                    key={beforeNum}
                                    className="relative overflow-hidden rounded-2xl bg-primary shadow-lg"
                                >
                                    <div className="flex">
                                        {/* Before */}
                                        <div className="relative flex-1">
                                            <div className="aspect-square overflow-hidden">
                                                <img
                                                    src={`/teeth before and after images/${beforeNum}.png`}
                                                    alt="Before treatment"
                                                    className="size-full object-cover"
                                                />
                                            </div>
                                            <div className="absolute bottom-3 left-3">
                                                <span className="rounded-full bg-black/70 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
                                                    Before
                                                </span>
                                            </div>
                                        </div>

                                        {/* Center Divider */}
                                        <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
                                            <div className="flex size-10 items-center justify-center rounded-full border-2 border-white bg-brand-600 shadow-lg">
                                                <svg className="size-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h8M8 12h8m-8 5h8M4 7h.01M4 12h.01M4 17h.01" />
                                                </svg>
                                            </div>
                                        </div>

                                        {/* After */}
                                        <div className="relative flex-1">
                                            <div className="aspect-square overflow-hidden">
                                                <img
                                                    src={`/teeth before and after images/${beforeNum + 1}.png`}
                                                    alt="After treatment"
                                                    className="size-full object-cover"
                                                />
                                            </div>
                                            <div className="absolute bottom-3 right-3">
                                                <span className="rounded-full bg-brand-600 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
                                                    After
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </motion.div>

                        <div className="mt-8 text-center">
                            <a
                                href="/booking"
                                className="inline-flex items-center gap-2 text-brand-600 transition hover:text-brand-700"
                            >
                                <span className="font-medium">See more results</span>
                                <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="border-t border-secondary px-4 py-16 md:px-8 md:py-24 lg:px-16">
                    <div className="mx-auto max-w-4xl text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2 className="text-3xl font-semibold text-primary md:text-4xl">
                                Ready to transform your smile?
                            </h2>
                            <p className="mx-auto mt-4 max-w-xl text-lg text-tertiary">
                                Join hundreds of happy clients who have already brightened their smiles with us.
                            </p>
                            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                                <a
                                    href="/booking"
                                    className="inline-flex items-center justify-center rounded-full bg-brand-600 px-8 py-3 font-medium text-white transition hover:bg-brand-700"
                                >
                                    Book Your Appointment
                                </a>
                                <a
                                    href="/contact"
                                    className="inline-flex items-center justify-center rounded-full border border-secondary bg-primary px-8 py-3 font-medium text-primary transition hover:bg-secondary"
                                >
                                    Contact Us
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
