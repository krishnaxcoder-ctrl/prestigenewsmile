"use client";

import { motion } from "framer-motion";
import { Header } from "@/app/components/header";
import { Footer } from "@/app/components/footer";
import { Star01 } from "@untitledui/icons";

const avatars = [
    "olivia-rhye", "phoenix-baker", "lana-steiner", "demi-wilkinson", "candice-wu",
    "natali-craig", "drew-cano", "orlando-diggs", "andi-lane", "kate-morrison",
    "koray-okumus", "aliah-lane", "rene-wells", "lori-bryson", "noah-pierre",
    "mathilde-lewis", "zahir-mays", "olivia-rhye", "phoenix-baker", "lana-steiner",
    "demi-wilkinson", "candice-wu", "natali-craig", "drew-cano", "orlando-diggs",
    "andi-lane", "kate-morrison", "koray-okumus", "aliah-lane", "rene-wells"
];

const testimonials = [
    {
        id: 1,
        name: "Sophie Laurent",
        role: "Marketing Director",
        location: "Geneva, Switzerland",
        avatar: avatars[0],
        content: "I was skeptical at first, but the results were incredible! My teeth are now 6 shades whiter and I couldn't be happier. The team was so professional and made me feel comfortable throughout the entire process.",
        rating: 5,
        badge: "6 Shades",
    },
    {
        id: 2,
        name: "Marc Dubois",
        role: "Business Owner",
        location: "Lyon, France",
        avatar: avatars[1],
        content: "Best investment I've made in myself. The results speak for themselves - everyone keeps complimenting my smile! Would definitely recommend to anyone looking for professional whitening.",
        rating: 5,
        badge: "5 Shades",
    },
    {
        id: 3,
        name: "Emma Fischer",
        role: "Event Planner",
        location: "Zurich, Switzerland",
        avatar: avatars[2],
        content: "Had my teeth whitened before my wedding and it was the perfect decision. The photos turned out amazing and I felt so confident on my special day. Thank you Prestige Smile!",
        rating: 5,
        badge: "Wedding",
    },
    {
        id: 4,
        name: "Lucas Bernard",
        role: "Software Engineer",
        location: "Paris, France",
        avatar: avatars[3],
        content: "Quick, painless, and effective. What more could you ask for? The staff was friendly and the results exceeded my expectations.",
        rating: 5,
        badge: "7 Shades",
    },
    {
        id: 5,
        name: "Amélie Martin",
        role: "Dentist",
        location: "Annecy, France",
        avatar: avatars[4],
        content: "As a dental professional myself, I was impressed by the quality of service and products used. I now recommend Prestige Smile to all my patients looking for professional whitening.",
        rating: 5,
        badge: "Pro Pick",
    },
    {
        id: 6,
        name: "Thomas Müller",
        role: "Photographer",
        location: "Basel, Switzerland",
        avatar: avatars[5],
        content: "The difference is unbelievable. My before and after photos look like two different people! As a photographer, I know lighting tricks, but this is real transformation.",
        rating: 5,
        badge: "8 Shades",
    },
    {
        id: 7,
        name: "Isabelle Roux",
        role: "Teacher",
        location: "Grenoble, France",
        avatar: avatars[6],
        content: "I've tried many whitening products over the years, but nothing compares to this professional treatment. Finally found something that actually works!",
        rating: 5,
        badge: "5 Shades",
    },
    {
        id: 8,
        name: "David Chen",
        role: "Consultant",
        location: "Geneva, Switzerland",
        avatar: avatars[7],
        content: "From booking to the final result, everything was seamless. The online booking was easy, the location is convenient, and the results are stunning. Highly recommend!",
        rating: 5,
        badge: "6 Shades",
    },
    {
        id: 9,
        name: "Nadia Kovač",
        role: "Actress",
        location: "Milan, Italy",
        avatar: avatars[8],
        content: "In my profession, a bright smile is essential. Prestige Smile delivered exactly what I needed. My smile has never looked better on camera.",
        rating: 5,
        badge: "7 Shades",
    },
    {
        id: 10,
        name: "Pierre Lefebvre",
        role: "Sales Manager",
        location: "Lausanne, Switzerland",
        avatar: avatars[9],
        content: "Confidence boost like no other. I used to hide my smile in photos, now I can't stop showing it off! The team made the whole experience comfortable and enjoyable.",
        rating: 5,
        badge: "6 Shades",
    },
    {
        id: 11,
        name: "Julia Andersson",
        role: "Nurse",
        location: "Stockholm, Sweden",
        avatar: avatars[10],
        content: "The sensitivity was minimal and gone within a day. The team really knows what they're doing. Amazing results that exceeded my expectations. Very professional service!",
        rating: 5,
        badge: "No Pain",
    },
    {
        id: 12,
        name: "Oliver Schmidt",
        role: "Architect",
        location: "Munich, Germany",
        avatar: avatars[11],
        content: "Worth every penny. The atmosphere is relaxing, the staff is wonderful, and the results are professional-grade. Will definitely be back for maintenance.",
        rating: 5,
        badge: "5 Shades",
    },
    {
        id: 13,
        name: "Claire Fontaine",
        role: "Flight Attendant",
        location: "Paris, France",
        avatar: avatars[12],
        content: "I travel constantly and needed a quick solution. One session and my smile was transformed. The convenience and professionalism were outstanding!",
        rating: 5,
        badge: "1 Session",
    },
    {
        id: 14,
        name: "Antoine Moreau",
        role: "Chef",
        location: "Lyon, France",
        avatar: avatars[13],
        content: "Finally feel confident smiling in front of customers. The treatment was gentle and the results are natural-looking. Exactly what I wanted.",
        rating: 5,
        badge: "Natural",
    },
    {
        id: 15,
        name: "Léa Petit",
        role: "Yoga Instructor",
        location: "Nice, France",
        avatar: avatars[14],
        content: "Such a calming experience. The studio has a spa-like atmosphere and the team made sure I was comfortable. My smile is radiant now!",
        rating: 5,
        badge: "Relaxing",
    },
    {
        id: 16,
        name: "Henrik Johansson",
        role: "Financial Analyst",
        location: "Zurich, Switzerland",
        avatar: avatars[15],
        content: "ROI on this treatment is incredible. Better than any product I've bought. Professional results that last and the value for money is exceptional. Highly recommend!",
        rating: 5,
        badge: "8 Shades",
    },
    {
        id: 17,
        name: "Marta Gonzalez",
        role: "Interior Designer",
        location: "Barcelona, Spain",
        avatar: avatars[16],
        content: "The attention to detail here is impressive. From the beautiful studio to the precise treatment - everything was perfect. Love my new smile!",
        rating: 5,
        badge: "6 Shades",
    },
    {
        id: 18,
        name: "James Wilson",
        role: "Real Estate Agent",
        location: "London, UK",
        avatar: avatars[17],
        content: "In my line of work, first impressions matter. This treatment gave me the confidence boost I needed. Clients always comment on my smile now.",
        rating: 5,
        badge: "7 Shades",
    },
    {
        id: 19,
        name: "Céline Dupont",
        role: "Pharmacist",
        location: "Geneva, Switzerland",
        avatar: avatars[18],
        content: "I was worried about sensitivity given my dental history, but the team was so careful and used the right products. Zero discomfort and amazing results!",
        rating: 5,
        badge: "Gentle",
    },
    {
        id: 20,
        name: "Alessandro Ricci",
        role: "Hotel Manager",
        location: "Rome, Italy",
        avatar: avatars[19],
        content: "Brought my whole team here for a group session before our hotel's grand opening. Everyone was thrilled with the results. Highly professional service.",
        rating: 5,
        badge: "Team Day",
    },
    {
        id: 21,
        name: "Katarina Novak",
        role: "Model",
        location: "Vienna, Austria",
        avatar: avatars[20],
        content: "My agency recommended Prestige Smile and I understand why. The results are camera-ready and completely natural. A must for anyone in front of the lens.",
        rating: 5,
        badge: "8 Shades",
    },
    {
        id: 22,
        name: "François Blanc",
        role: "Lawyer",
        location: "Geneva, Switzerland",
        avatar: avatars[21],
        content: "Discrete location, professional service, remarkable results. Everything a busy professional needs. Booked my next maintenance session already.",
        rating: 5,
        badge: "5 Shades",
    },
    {
        id: 23,
        name: "Anna Bergström",
        role: "Graphic Designer",
        location: "Copenhagen, Denmark",
        avatar: avatars[22],
        content: "The before/after difference is like a filter in real life! So happy with my brighter smile. The team was lovely too and made sure I was comfortable throughout the process.",
        rating: 5,
        badge: "6 Shades",
    },
    {
        id: 24,
        name: "Michael Torres",
        role: "Personal Trainer",
        location: "Madrid, Spain",
        avatar: avatars[23],
        content: "I preach self-improvement to my clients, and this was the perfect addition to my routine. Quick session, lasting results. 10/10 recommend!",
        rating: 5,
        badge: "Quick",
    },
    {
        id: 25,
        name: "Elise Bonnet",
        role: "Journalist",
        location: "Paris, France",
        avatar: avatars[24],
        content: "As someone who's on camera regularly, this was a game-changer. Natural results that photograph beautifully. Thank you Prestige Smile!",
        rating: 5,
        badge: "7 Shades",
    },
    {
        id: 26,
        name: "Viktor Petrov",
        role: "Entrepreneur",
        location: "Berlin, Germany",
        avatar: avatars[25],
        content: "Time is money, and this treatment is efficient. In and out in under 2 hours with a completely transformed smile. Brilliant service.",
        rating: 5,
        badge: "2 Hours",
    },
    {
        id: 27,
        name: "Sophia Rossi",
        role: "Wedding Planner",
        location: "Florence, Italy",
        avatar: avatars[26],
        content: "I recommend Prestige Smile to all my brides and grooms. The results are consistently amazing and the team is so accommodating with schedules.",
        rating: 5,
        badge: "Top Pick",
    },
    {
        id: 28,
        name: "Nicolas Favre",
        role: "Pilot",
        location: "Toulouse, France",
        avatar: avatars[27],
        content: "Found this place during a layover in Geneva. Best spontaneous decision ever! My crew was so impressed they all booked appointments.",
        rating: 5,
        badge: "6 Shades",
    },
    {
        id: 29,
        name: "Lena Weber",
        role: "HR Director",
        location: "Frankfurt, Germany",
        avatar: avatars[28],
        content: "Organized a team wellness day here. The group booking was easy and everyone left with brighter smiles and higher morale!",
        rating: 5,
        badge: "Team Day",
    },
    {
        id: 30,
        name: "Raphaël Mercier",
        role: "Musician",
        location: "Brussels, Belgium",
        avatar: avatars[29],
        content: "Stage presence improved instantly. When you feel good about your smile, it shows. The whole band came back for treatments!",
        rating: 5,
        badge: "7 Shades",
    },
];

export default function ReviewsPage() {
    return (
        <div className="overflow-x-hidden">
            <Header />
            <main className="bg-primary">
                {/* Hero Section */}
                <section className="bg-white px-4 py-16 md:px-8 md:py-20 lg:px-16">
                    <div className="mx-auto max-w-7xl text-center">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-sm font-medium uppercase tracking-widest text-tertiary"
                        >
                            Testimonials
                        </motion.p>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="mt-4 text-display-sm font-medium uppercase text-primary md:text-display-md lg:text-display-lg"
                            style={{ fontFamily: "var(--global-heading-font-family)" }}
                        >
                            What Our Clients Say
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="mx-auto mt-4 max-w-2xl text-tertiary"
                        >
                            Real stories from our happy clients who transformed their smiles with Prestige Smile
                        </motion.p>
                    </div>
                </section>

                {/* Testimonials Masonry Grid */}
                <section className="bg-white px-4 pb-16 md:px-8 md:pb-20 lg:px-16">
                    <div className="mx-auto max-w-7xl">
                        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                            {/* Distribute testimonials across 3 columns horizontally */}
                            {[0, 1, 2].map((colIndex) => (
                                <div key={colIndex} className="flex flex-col gap-5">
                                    {testimonials
                                        .filter((_, i) => i % 3 === colIndex)
                                        .map((testimonial, index) => (
                                            <motion.div
                                                key={testimonial.id}
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                                className="relative bg-gradient-to-br from-amber-50/80 to-orange-50/50 py-5 pl-6 pr-5 before:absolute before:inset-y-0 before:left-0 before:w-0.5 before:bg-gradient-to-b before:from-amber-300 before:via-amber-400 before:to-amber-500 before:shadow-[0_0_8px_rgba(251,191,36,0.6)]"
                                            >
                                                {/* Stars */}
                                                <div className="flex gap-0.5">
                                                    {[...Array(testimonial.rating)].map((_, i) => (
                                                        <Star01 key={i} className="size-4 fill-amber-400 text-amber-400" />
                                                    ))}
                                                </div>

                                                {/* Title from badge */}
                                                <h3 className="mt-4 text-base font-medium uppercase tracking-wide text-primary" style={{ fontFamily: "var(--global-heading-font-family)" }}>
                                                    {testimonial.badge}
                                                </h3>

                                                {/* Quote */}
                                                <p className="mt-2 text-sm leading-relaxed text-tertiary line-clamp-3">"{testimonial.content}"</p>

                                                {/* Author */}
                                                <div className="mt-5 flex items-center gap-3">
                                                    <img
                                                        src={`https://www.untitledui.com/images/avatars/${testimonial.avatar}`}
                                                        alt={testimonial.name}
                                                        className="size-10 shrink-0 rounded-full object-cover"
                                                    />
                                                    <div>
                                                        <div className="text-sm font-semibold text-primary">{testimonial.name}</div>
                                                        <div className="text-xs text-brand-600">{testimonial.role}</div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Before & After Section */}
                <section className="bg-white px-4 py-12 md:px-8 md:py-16 lg:px-16">
                    <div className="mx-auto max-w-7xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="text-center"
                        >
                            <p className="text-sm font-medium uppercase tracking-widest text-tertiary">Transformations</p>
                            <h2 className="mt-4 text-display-xs font-medium uppercase text-primary md:text-display-sm lg:text-display-md" style={{ fontFamily: "var(--global-heading-font-family)" }}>
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

                        <div className="mt-10 text-center">
                            <a
                                href="/booking"
                                className="inline-block border border-gray-900 bg-transparent px-8 py-3 text-sm font-medium uppercase text-gray-900 transition duration-100 ease-linear hover:bg-gray-900 hover:text-white"
                            >
                                Book Your Session
                            </a>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
}
