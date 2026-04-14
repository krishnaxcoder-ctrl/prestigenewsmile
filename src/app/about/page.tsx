"use client";

import { motion } from "framer-motion";
import { Star01, Heart, Award01, Users01 } from "@untitledui/icons";
import { Header } from "@/app/components/header";
import { Footer } from "@/app/components/footer";
import { NewsletterSection } from "@/app/components/newsletter-section";
import { AboutSection } from "@/app/components/about-section";

const stats = [
    { value: "18+", label: "Years of Experience" },
    { value: "50K+", label: "Happy Clients" },
    { value: "1:1", label: "Personal Training" },
    { value: "90%", label: "Practical Focus" },
    { value: "454+", label: "Students Trained" },
    { value: "24/7", label: "Support Available" },
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
        name: "Anaëlle",
        role: "Founder & CEO",
        image: "/client.webp",
        bio: "Passionate about aesthetics and well-being, I founded Prestige Smile Studio with a clear vision: to offer everyone access to a brighter, more confident smile. Every session is tailored to your needs, using safe and effective techniques for visible results from the very first appointment.",
    },
];

export default function AboutPage() {
    return (
        <div className="overflow-x-hidden">
            <Header />
            <main className="bg-primary">
                <AboutSection />

                {/* Stats */}
                <section className="bg-white px-4 py-0 md:px-8 lg:px-16">
                    <div className="mx-auto max-w-[1400px] border border-secondary">
                        <div className="grid grid-cols-2 divide-x divide-y divide-secondary sm:grid-cols-3 sm:divide-y-0 lg:grid-cols-6">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="flex flex-col items-center justify-center px-6 py-10 text-center"
                                >
                                    <p className="text-xl font-semibold text-primary md:text-2xl">
                                        {stat.value}
                                    </p>
                                    <p className="mt-3 text-xs font-medium uppercase tracking-[0.15em] text-tertiary">
                                        {stat.label}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Story Section */}
                <section className="relative overflow-hidden bg-gradient-to-b from-[#f7f2ec] via-[#f3ede6] to-[#ebe2d8] px-4 py-20 md:px-8 md:py-28 lg:px-16">
                    {/* Ambient glow */}
                    <div className="pointer-events-none absolute -top-24 right-1/4 size-[520px] translate-x-1/2 rounded-full bg-[radial-gradient(circle,#f5efe7_0%,transparent_70%)] opacity-60" />
                    <div className="pointer-events-none absolute -bottom-32 left-0 size-[380px] rounded-full bg-[radial-gradient(circle,#d4b5a0_0%,transparent_70%)] opacity-25" />

                    <div className="relative mx-auto max-w-7xl">
                        <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_1fr] lg:gap-24">
                            {/* Left - Image with decorative frame */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="relative order-2 lg:order-1"
                            >
                                {/* Decorative offset border */}
                                <div className="absolute -left-6 -top-6 bottom-6 right-6 border border-[#c9a5ab]/40" />

                                {/* Main image */}
                                <div className="relative aspect-[4/5] overflow-hidden">
                                    <img
                                        src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800"
                                        alt="Our Studio"
                                        className="size-full object-cover"
                                    />
                                </div>

                                {/* Floating accent line */}
                                <div className="absolute -right-6 top-1/3 h-px w-12 bg-[#c9a5ab]/60" />

                                {/* Minimal years badge */}
                                <div className="absolute -bottom-8 left-8 bg-[#f7f2ec] px-6 py-4 border border-[#c9a5ab]/40">
                                    <p
                                        className="text-3xl font-light text-[#4a2d3a]"
                                        style={{ fontFamily: "'Cormorant Garamond', serif" }}
                                    >
                                        15+
                                    </p>
                                    <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.25em] text-[#b8929a]">
                                        Years of Excellence
                                    </p>
                                </div>
                            </motion.div>

                            {/* Right - Text content */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="order-1 lg:order-2"
                            >
                                <p className="mb-2 text-xs font-medium uppercase tracking-[0.3em] text-[#b8929a]">
                                    Our Story
                                </p>

                                <h2
                                    className="text-4xl font-light uppercase tracking-[0.15em] text-[#4a2d3a] md:text-5xl lg:text-6xl"
                                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                                >
                                    Our Journey to{" "}
                                    <span className="italic">Brighter Smiles</span>
                                </h2>

                                {/* Decorative divider */}
                                <div className="my-6 flex items-center gap-3">
                                    <div className="h-px w-12 bg-[#c9a5ab]" />
                                    <div className="size-1.5 rotate-45 border border-[#c9a5ab]" />
                                    <div className="h-px w-12 bg-[#c9a5ab]" />
                                </div>

                                <div className="space-y-5 text-[16px] leading-[1.9] text-[#5a3d4a]/85">
                                    <p>
                                        Founded in Geneva, <span className="font-semibold text-[#4a2d3a]">Prestige Smile</span> was born from a simple belief: everyone deserves a smile they&apos;re proud to show. What started as a small studio has grown into a trusted destination for teeth whitening in the region.
                                    </p>
                                    <p>
                                        We combine <span className="italic">Swiss precision</span> with cutting-edge technology to deliver safe, effective, and long-lasting results. Our team of specialists is dedicated to providing a comfortable, personalized experience for every client.
                                    </p>
                                    <p>
                                        Today, we&apos;re proud to have helped over <span className="font-semibold text-[#4a2d3a]">50,000 customers</span> achieve their dream smile. Our commitment to quality, safety, and satisfaction remains at the heart of everything we do.
                                    </p>
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
                                Meet the Founder
                            </h2>
                            <p className="mx-auto mt-4 max-w-2xl text-tertiary">
                                The person behind Prestige Smile Studio, dedicated to helping you achieve your best smile.
                            </p>
                        </motion.div>

                        <div className="mt-12 mx-auto max-w-sm">
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
