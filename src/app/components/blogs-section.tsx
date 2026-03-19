"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/base/buttons/button";
import { ArrowRight, ArrowUpRight, Clock } from "@untitledui/icons";

const blogPosts = [
    {
        id: 1,
        category: "Skincare Tips",
        readTime: "5 min read",
        title: "Essential Daily Skincare Rituals for Long-Lasting Radiance",
        excerpt:
            "Discover the morning and evening routines that dermatologists swear by for maintaining healthy, glowing skin year-round.",
        image: "https://wdtmonica.wpengine.com/wp-content/uploads/2026/01/Home1-blog-img-01.jpg",
        href: "/blog/skincare-rituals",
    },
    {
        id: 2,
        category: "Natural Beauty",
        readTime: "4 min read",
        title: "Mastering the Art of Natural Makeup for a Luminous Glow",
        excerpt:
            "Learn how to enhance your natural features with minimal products for an effortlessly beautiful, radiant look.",
        image: "https://wdtmonica.wpengine.com/wp-content/uploads/2026/01/Home1-blog-img-02.jpg",
        href: "/blog/natural-makeup",
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
    hidden: { opacity: 0, y: 20 },
    visible: (delay: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay, ease: "easeOut" },
    }),
};

export function BlogsSection() {
    return (
        <section className="bg-secondary px-4 py-16 md:px-8 md:py-24 lg:px-16">
            <div className="mx-auto max-w-7xl">
                {/* Header */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="mb-12 flex flex-col items-center justify-between gap-6 md:mb-16 md:flex-row md:items-end"
                >
                    <div className="text-center md:text-left">
                        <motion.span
                            custom={0}
                            variants={fadeIn}
                            className="mb-3 inline-block rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-700"
                        >
                            Our Blog
                        </motion.span>
                        <motion.h2
                            custom={0.05}
                            variants={fadeIn}
                            className="mt-4 text-display-xs font-semibold text-primary md:text-display-sm lg:text-display-md"
                        >
                            Beauty Tips &{" "}
                            <span className="text-brand-600">Expert Advice</span>
                        </motion.h2>
                        <motion.p
                            custom={0.1}
                            variants={fadeIn}
                            className="mt-3 max-w-md text-md text-tertiary md:text-lg"
                        >
                            Stay updated with the latest skincare trends, tips, and tutorials from our beauty experts.
                        </motion.p>
                    </div>
                    <motion.div custom={0.15} variants={fadeIn}>
                        <Button
                            href="/blog"
                            color="secondary"
                            size="lg"
                            iconTrailing={ArrowRight}
                        >
                            View All Articles
                        </Button>
                    </motion.div>
                </motion.div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    {blogPosts.map((post, index) => (
                        <motion.article
                            key={post.id}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            custom={index * 0.1}
                            variants={cardFadeIn}
                            className="group flex flex-col overflow-hidden rounded-2xl bg-primary shadow-sm transition duration-300 hover:shadow-lg"
                        >
                            {/* Image */}
                            <a
                                href={post.href}
                                className="relative aspect-[16/10] overflow-hidden"
                            >
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="size-full object-cover transition duration-500 group-hover:scale-105"
                                />
                                {/* Category Badge */}
                                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-primary backdrop-blur-sm">
                                    {post.category}
                                </span>
                            </a>

                            {/* Content */}
                            <div className="flex flex-1 flex-col p-6 md:p-8">
                                {/* Read Time */}
                                <div className="mb-3 flex items-center gap-1.5 text-sm text-tertiary">
                                    <Clock className="size-4" />
                                    {post.readTime}
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-semibold leading-tight text-primary md:text-2xl">
                                    <a
                                        href={post.href}
                                        className="transition duration-100 ease-linear hover:text-brand-600"
                                    >
                                        {post.title}
                                    </a>
                                </h3>

                                {/* Excerpt */}
                                <p className="mt-3 flex-1 text-md leading-relaxed text-tertiary">
                                    {post.excerpt}
                                </p>

                                {/* Read More */}
                                <div className="mt-6 flex items-center justify-between border-t border-secondary pt-6">
                                    <Button
                                        href={post.href}
                                        color="link-color"
                                        size="md"
                                        iconTrailing={ArrowUpRight}
                                    >
                                        Read Article
                                    </Button>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
