"use client";

import { motion } from "framer-motion";
import { Heart, MessageChatCircle } from "@untitledui/icons";

const instagramPosts = [
    {
        id: 1,
        image: "https://plus.unsplash.com/premium_photo-1661436629100-ba3c5ea70514?w=600&auto=format&fit=crop&q=60",
        likes: "2.4k",
        comments: "48",
    },
    {
        id: 2,
        image: "https://plus.unsplash.com/premium_photo-1674998806375-58edc35ddf3b?w=600&auto=format&fit=crop&q=60",
        likes: "3.1k",
        comments: "92",
    },
    {
        id: 3,
        image: "https://plus.unsplash.com/premium_photo-1664476419863-abc647c1d12f?w=600&auto=format&fit=crop&q=60",
        likes: "1.8k",
        comments: "36",
    },
    {
        id: 4,
        image: "https://plus.unsplash.com/premium_photo-1661436277204-221c8040e4d2?w=600&auto=format&fit=crop&q=60",
        likes: "2.9k",
        comments: "67",
    },
    {
        id: 5,
        image: "https://plus.unsplash.com/premium_photo-1677174625968-d1daf44042dc?w=600&auto=format&fit=crop&q=60",
        likes: "4.2k",
        comments: "124",
    },
    {
        id: 6,
        image: "https://plus.unsplash.com/premium_photo-1661768526823-8e7941279818?w=600&auto=format&fit=crop&q=60",
        likes: "1.5k",
        comments: "29",
    },
    {
        id: 7,
        image: "https://images.unsplash.com/photo-1588776814546-daab30f310ce?w=600&auto=format&fit=crop&q=60",
        likes: "3.8k",
        comments: "85",
    },
    {
        id: 8,
        image: "https://images.unsplash.com/photo-1588776813677-77aaf5595b83?w=600&auto=format&fit=crop&q=60",
        likes: "2.1k",
        comments: "52",
    },
    {
        id: 9,
        image: "https://ledgeviewdental.com/img/upload/teeth-whitening1_2.jpg",
        likes: "4.5k",
        comments: "108",
    },
    {
        id: 10,
        image: "https://drrickdentistry.com/wp-content/uploads/2019/12/how-does-professional-teeth-whitening-work.gif",
        likes: "1.9k",
        comments: "41",
    },
    {
        id: 11,
        image: "https://dental101.in/wp-content/uploads/2025/09/istockphoto-1492174304-612x612-1.jpg",
        likes: "3.3k",
        comments: "76",
    },
    {
        id: 12,
        image: "https://www.thesmiledesign.com/wp-content/uploads/2025/04/smile-design-blog-teeth-whitening-v3.png",
        likes: "2.7k",
        comments: "63",
    },
];

export function InstagramSection() {
    return (
        <section className="bg-secondary py-16 md:py-24">
            {/* Header */}
            <div className="mb-10 text-center md:mb-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="mb-4 flex items-center justify-center gap-3"
                >
                    <span className="h-px w-12 bg-border-primary" />
                    <svg
                        className="size-6 text-primary"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                    >
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                    <span className="h-px w-12 bg-border-primary" />
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, filter: "blur(8px)" }}
                    whileInView={{ opacity: 1, filter: "blur(0px)" }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="text-display-xs font-semibold text-primary md:text-display-sm"
                >
                    Follow Us on{" "}
                    <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 bg-clip-text text-transparent">
                        Instagram
                    </span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, filter: "blur(8px)" }}
                    whileInView={{ opacity: 1, filter: "blur(0px)" }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="mt-3 text-md text-tertiary"
                >
                    @prestige.smile.studio
                </motion.p>
            </div>

            {/* Instagram Grid */}
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-6">
                {instagramPosts.map((post, index) => (
                    <motion.a
                        key={post.id}
                        href="https://www.instagram.com/prestige.smile.studio/"
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
                        className="group relative aspect-square overflow-hidden"
                    >
                        <img
                            src={post.image}
                            alt={`Instagram post ${post.id}`}
                            className="size-full object-cover transition duration-500 group-hover:scale-110"
                        />

                        {/* Hover Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition duration-300 group-hover:opacity-100">
                            <div className="flex items-center gap-4 text-white">
                                <span className="flex items-center gap-1.5 text-sm font-medium">
                                    <Heart className="size-5 fill-white" />
                                    {post.likes}
                                </span>
                                <span className="flex items-center gap-1.5 text-sm font-medium">
                                    <MessageChatCircle className="size-5" />
                                    {post.comments}
                                </span>
                            </div>
                        </div>
                    </motion.a>
                ))}
            </div>

            {/* Follow Button */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                className="mt-10 text-center"
            >
                <a
                    href="https://www.instagram.com/prestige.smile.studio/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:shadow-lg hover:shadow-pink-500/25"
                >
                    <svg
                        className="size-5"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                    >
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                    Follow @prestige.smile.studio
                </a>
            </motion.div>
        </section>
    );
}
