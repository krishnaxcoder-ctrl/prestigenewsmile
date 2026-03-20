"use client";

import { motion } from "framer-motion";
import { Star01, Heart, Award01, Users01 } from "@untitledui/icons";
import { Header } from "@/app/components/header";
import { Footer } from "@/app/components/footer";
import { NewsletterSection } from "@/app/components/newsletter-section";
import { RatingBadge } from "@/components/foundations/rating-badge";

const stats = [
    { value: "50K+", label: "Happy Customers" },
    { value: "15+", label: "Years Experience" },
    { value: "100%", label: "Natural Ingredients" },
    { value: "4.9", label: "Average Rating" },
];

const values = [
    {
        icon: Heart,
        title: "Passion for Beauty",
        description: "We believe everyone deserves to feel confident and radiant. Our passion drives us to create products that bring out your natural beauty.",
    },
    {
        icon: Award01,
        title: "Quality First",
        description: "We never compromise on quality. Every product undergoes rigorous testing to ensure it meets our high standards of excellence.",
    },
    {
        icon: Users01,
        title: "Customer Focus",
        description: "Your satisfaction is our priority. We listen to our customers and continuously improve based on your feedback.",
    },
    {
        icon: Star01,
        title: "Innovation",
        description: "We stay at the forefront of beauty technology, combining traditional wisdom with modern science for exceptional results.",
    },
];

const team = [
    {
        name: "Sophie Martin",
        role: "Founder & CEO",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        bio: "With over 15 years in the beauty industry, Sophie founded Prestige Smile with a vision to make professional teeth whitening accessible to everyone.",
    },
    {
        name: "Emma Laurent",
        role: "Head of Product Development",
        image: "https://randomuser.me/api/portraits/women/68.jpg",
        bio: "Emma leads our R&D team, ensuring every product meets the highest standards of safety and efficacy.",
    },
    {
        name: "Marie Dubois",
        role: "Lead Specialist",
        image: "https://randomuser.me/api/portraits/women/65.jpg",
        bio: "Marie brings her expertise in cosmetic dentistry to help clients achieve their dream smile.",
    },
];

export default function AboutPage() {
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
                            <span className="uppercase text-teal-600">About</span>
                        </nav>
                        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
                            <div className="max-w-3xl">
                                <motion.h1
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.1 }}
                                    className="text-2xl font-semibold uppercase text-primary md:text-3xl"
                                >
                                    About <span className="text-teal-600">Prestige Smile</span>
                                </motion.h1>
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    className="mt-4 text-lg text-tertiary"
                                >
                                    We're on a mission to help everyone achieve a confident, radiant smile through professional teeth whitening treatments.
                                </motion.p>
                            </div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="shrink-0"
                            >
                                <RatingBadge rating={4.9} title="15+ Years Experience" subtitle="50K+ happy customers" />
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Stats */}
                <section className="border-b border-secondary py-12">
                    <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-16">
                        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="text-center"
                                >
                                    <p className="text-3xl font-bold text-brand-600 md:text-4xl">
                                        {stat.value}
                                    </p>
                                    <p className="mt-2 text-sm text-tertiary">{stat.label}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Story Section */}
                <section className="px-4 py-16 md:px-8 md:py-24 lg:px-16">
                    <div className="mx-auto max-w-7xl">
                        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <h2 className="text-2xl font-semibold text-primary md:text-3xl lg:text-4xl">
                                    Our Journey to Brighter Smiles
                                </h2>
                                <div className="mt-6 space-y-4 text-tertiary">
                                    <p>
                                        Founded in Geneva, Prestige Smile was born from a simple belief: everyone deserves a smile they're proud to show. What started as a small studio has grown into a trusted destination for teeth whitening in the region.
                                    </p>
                                    <p>
                                        We combine Swiss precision with cutting-edge technology to deliver safe, effective, and long-lasting results. Our team of specialists is dedicated to providing a comfortable, personalized experience for every client.
                                    </p>
                                    <p>
                                        Today, we're proud to have helped over 50,000 customers achieve their dream smile. Our commitment to quality, safety, and customer satisfaction remains at the heart of everything we do.
                                    </p>
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="relative"
                            >
                                <div className="aspect-[4/3] overflow-hidden rounded-2xl">
                                    <img
                                        src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800"
                                        alt="Our Studio"
                                        className="size-full object-cover"
                                    />
                                </div>
                                <div className="absolute -bottom-6 -left-6 rounded-2xl bg-brand-600 p-6 text-white shadow-xl">
                                    <p className="text-3xl font-bold">15+</p>
                                    <p className="text-sm text-brand-100">Years of Excellence</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Values */}
                <section className="bg-secondary px-4 py-16 md:px-8 md:py-24 lg:px-16">
                    <div className="mx-auto max-w-7xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-center"
                        >
                            <span className="mb-4 inline-block rounded-full bg-brand-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-700">
                                Our Values
                            </span>
                            <h2 className="text-2xl font-semibold text-primary md:text-3xl lg:text-4xl">
                                What Drives Us
                            </h2>
                        </motion.div>

                        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                            {values.map((value, index) => (
                                <motion.div
                                    key={value.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="rounded-2xl bg-primary p-6 text-center"
                                >
                                    <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-brand-50">
                                        <value.icon className="size-7 text-brand-600" />
                                    </div>
                                    <h3 className="mt-4 text-lg font-semibold text-primary">
                                        {value.title}
                                    </h3>
                                    <p className="mt-2 text-sm text-tertiary">
                                        {value.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Team */}
                <section className="px-4 py-16 md:px-8 md:py-24 lg:px-16">
                    <div className="mx-auto max-w-7xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-center"
                        >
                            <span className="mb-4 inline-block rounded-full bg-brand-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-700">
                                Our Team
                            </span>
                            <h2 className="text-2xl font-semibold text-primary md:text-3xl lg:text-4xl">
                                Meet the Experts
                            </h2>
                            <p className="mx-auto mt-4 max-w-2xl text-tertiary">
                                Our dedicated team of professionals is committed to helping you achieve your best smile.
                            </p>
                        </motion.div>

                        <div className="mt-12 grid gap-8 md:grid-cols-3">
                            {team.map((member, index) => (
                                <motion.div
                                    key={member.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="text-center"
                                >
                                    <div className="mx-auto size-32 overflow-hidden rounded-full">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="size-full object-cover"
                                        />
                                    </div>
                                    <h3 className="mt-4 text-lg font-semibold text-primary">
                                        {member.name}
                                    </h3>
                                    <p className="text-sm font-medium text-brand-600">
                                        {member.role}
                                    </p>
                                    <p className="mt-3 text-sm text-tertiary">
                                        {member.bio}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                <NewsletterSection />
            </main>
            <Footer />
        </div>
    );
}
