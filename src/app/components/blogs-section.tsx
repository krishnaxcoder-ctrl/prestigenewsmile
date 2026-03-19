"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/base/buttons/button";
import { ArrowRight, ArrowUpRight, Clock, User01 } from "@untitledui/icons";

const blogPosts = [
    {
        id: 1,
        category: "Skincare Tips",
        readTime: "5 min read",
        date: "Jan 15, 2026",
        author: "Emma Roberts",
        title: "Essential Daily Skincare Rituals for Long-Lasting Radiance",
        excerpt:
            "Discover the morning and evening routines that dermatologists swear by for healthy, glowing skin.",
        image: "https://wdtmonica.wpengine.com/wp-content/uploads/2026/01/Home1-category-img-01.jpg",
        href: "/blog/skincare-rituals",
    },
    {
        id: 2,
        category: "Natural Beauty",
        readTime: "4 min read",
        date: "Jan 12, 2026",
        author: "Sophie Chen",
        title: "Mastering Natural Makeup for a Luminous Glow",
        excerpt:
            "Learn how to enhance your natural features with minimal products for an effortlessly beautiful look.",
        image: "https://wdtmonica.wpengine.com/wp-content/uploads/2026/01/Home1-category-img-02.jpg",
        href: "/blog/natural-makeup",
    },
    {
        id: 3,
        category: "Wellness",
        readTime: "6 min read",
        date: "Jan 10, 2026",
        author: "Olivia Grace",
        title: "The Connection Between Diet and Skin Health",
        excerpt:
            "Explore how nutrition impacts your skin and which foods can help you achieve that coveted glow.",
        image: "https://wdtmonica.wpengine.com/wp-content/uploads/2026/01/Home1-category-img-03.jpg",
        href: "/blog/diet-skin-health",
    },
];

const fadeIn = {
    hidden: { opacity: 0, filter: "blur(8px)" },
    visible: (delay: number) => ({
        opacity: 1,
        filter: "blur(0px)",
        transition: { duration: 0.5, delay, ease: [0.25, 0.46, 0.45, 0.94] },
    }),
};

const cardFadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: (delay: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay, ease: "easeOut" },
    }),
};

export function BlogsSection() {
    return (
        <section className="bg-primary px-4 py-16 md:px-8 md:py-24 lg:px-16">
            <div className="mx-auto max-w-7xl">
                {/* Header */}
                <div className="mb-12 text-center md:mb-16">
                    <motion.span
                        initial={{ opacity: 0, filter: "blur(8px)" }}
                        whileInView={{ opacity: 1, filter: "blur(0px)" }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: 0, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="mb-3 inline-block rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-700"
                    >
                        Our Blog
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, filter: "blur(8px)" }}
                        whileInView={{ opacity: 1, filter: "blur(0px)" }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: 0.05, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="mt-4 text-display-xs font-semibold text-primary md:text-display-sm lg:text-display-md"
                    >
                        Beauty Tips &{" "}
                        <span className="text-brand-600">Expert Advice</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, filter: "blur(8px)" }}
                        whileInView={{ opacity: 1, filter: "blur(0px)" }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="mx-auto mt-4 max-w-2xl text-md text-tertiary md:text-lg"
                    >
                        Stay updated with the latest skincare trends, tips, and tutorials from our beauty experts.
                    </motion.p>
                </div>

                {/* Blog Grid - 3 Columns */}
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {blogPosts.map((post, index) => (
                        <motion.article
                            key={post.id}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            custom={index * 0.1}
                            variants={cardFadeIn}
                            className="group flex flex-col overflow-hidden rounded-3xl bg-secondary transition duration-300 hover:shadow-xl"
                        >
                            {/* Image */}
                            <a
                                href={post.href}
                                className="relative aspect-[4/3] overflow-hidden"
                            >
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="size-full object-cover transition duration-500 group-hover:scale-110"
                                />
                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />

                                {/* Category Badge */}
                                <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-primary shadow-sm">
                                    {post.category}
                                </span>

                                {/* Read More on Hover */}
                                <div className="absolute inset-x-4 bottom-4 translate-y-4 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                                    <span className="inline-flex items-center gap-2 text-sm font-medium text-white">
                                        Read Article
                                        <ArrowUpRight className="size-4" />
                                    </span>
                                </div>
                            </a>

                            {/* Content */}
                            <div className="flex flex-1 flex-col p-6">
                                {/* Meta */}
                                <div className="mb-3 flex items-center gap-3 text-xs text-tertiary">
                                    <span className="flex items-center gap-1">
                                        <Clock className="size-3.5" />
                                        {post.readTime}
                                    </span>
                                    <span className="size-1 rounded-full bg-tertiary" />
                                    <span>{post.date}</span>
                                </div>

                                {/* Title */}
                                <h3 className="text-lg font-semibold leading-snug text-primary">
                                    <a
                                        href={post.href}
                                        className="transition duration-100 ease-linear hover:text-brand-600"
                                    >
                                        {post.title}
                                    </a>
                                </h3>

                                {/* Excerpt */}
                                <p className="mt-3 flex-1 text-sm leading-relaxed text-tertiary">
                                    {post.excerpt}
                                </p>

                                {/* Author */}
                                <div className="mt-5 flex items-center gap-3 border-t border-primary pt-5">
                                    <div className="flex size-9 items-center justify-center rounded-full bg-brand-100">
                                        <User01 className="size-4 text-brand-600" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-primary">{post.author}</p>
                                        <p className="text-xs text-tertiary">Author</p>
                                    </div>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>

                {/* View All Button */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={0.3}
                    variants={fadeIn}
                    className="mt-12 text-center"
                >
                    <Button
                        href="/blog"
                        color="primary"
                        size="lg"
                        iconTrailing={ArrowRight}
                    >
                        View All Articles
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
