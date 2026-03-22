"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/base/buttons/button";

const blogPosts = [
	{
		id: 1,
		category: "Health",
		date: "June 29, 2020",
		title: "10 Tips for Healthy Mind and Body",
		image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=800&auto=format&fit=crop",
		href: "/blog/healthy-mind-body",
	},
	{
		id: 2,
		category: "Health",
		date: "June 20, 2020",
		title: "How to Maintain Healthy Hair: 10 Easy Tips",
		image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop",
		href: "/blog/healthy-hair",
	},
	{
		id: 3,
		category: "Health",
		date: "June 20, 2020",
		title: "Aroma Therapy and Aroma Massages",
		image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=800&auto=format&fit=crop",
		href: "/blog/aroma-therapy",
	},
	{
		id: 4,
		category: "Health",
		date: "June 20, 2020",
		title: "10 Ways to Spend Your Weekend Outside",
		image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?q=80&w=800&auto=format&fit=crop",
		href: "/blog/weekend-outside",
	},
];

export function ArticlesSection() {
	return (
		<section className="bg-[#f8f3f0] px-4 py-16 md:px-8 md:py-24 lg:px-16">
			<div className="mx-auto max-w-7xl">
				{/* Header */}
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-100px" }}
					transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
					className="mb-1 text-center font-body text-display-xs font-medium text-primary md:mb-8 md:text-display-sm lg:text-display-md"
				>
					Blog
				</motion.h2>

				{/* Blog Grid - 4 Columns on desktop, 1 on mobile */}
				<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
					{blogPosts.map((post, index) => (
						<motion.article
							key={post.id}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-100px" }}
							transition={{
								duration: 0.5,
								delay: index * 0.1,
								ease: [0, 0, 0.2, 1],
							}}
							className="group"
						>
							{/* Image */}
							<a href={post.href} className="block overflow-hidden">
								<img
									src={post.image}
									alt={post.title}
									className="aspect-[3/4] w-full object-cover transition duration-500 group-hover:scale-105"
								/>
							</a>

							{/* Content */}
							<div className="mt-5 text-center">
								{/* Category & Date */}
								<div className="flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-tertiary">
									<span>{post.category}</span>
									<span className="size-1 rounded-full bg-tertiary" />
									<span>{post.date}</span>
								</div>

								{/* Title */}
								<h3 className="mt-3 font-body text-lg font-normal leading-snug text-primary  md:text-md">
									<a
										href={post.href}
										className="transition duration-100 ease-linear hover:text-brand-600"
									>
										{post.title}
									</a>
								</h3>
							</div>
						</motion.article>
					))}
				</div>

				{/* View All Button */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
					className="mt-16 text-center"
				>
					<Button
						href="/blog"
						color="secondary"
						size="lg"
						className="border-primary text-primary uppercase tracking-widest hover:bg-primary hover:text-white"
					>
						View All Posts
					</Button>
				</motion.div>
			</div>
		</section>
	);
}
