"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/base/buttons/button";

const blogPosts = [
	{
		id: 1,
		category: "Whitening",
		date: "Jan 15, 2026",
		title: "10 Tips for a Brighter, Whiter Smile",
		image: "https://mp-cms.medparkhospital.com/assets/bb4a30f0-af60-44ab-99cf-6a8ab20d016f/zoom-banner-1.jpeg",
		href: "/blog/brighter-smile-tips",
	},
	{
		id: 2,
		category: "Guide",
		date: "Jan 12, 2026",
		title: "What to Expect During Your Whitening Session",
		image: "https://mp-cms.medparkhospital.com/assets/7988113b-562a-4f03-94bc-e106ca849e75",
		href: "/blog/whitening-session-guide",
	},
	{
		id: 3,
		category: "Aftercare",
		date: "Jan 10, 2026",
		title: "How to Maintain Your Results After Treatment",
		image: "https://mp-cms.medparkhospital.com/assets/56b474a5-973a-468a-853c-a856f04f6060",
		href: "/blog/maintain-results",
	},
	{
		id: 4,
		category: "FAQ",
		date: "Jan 8, 2026",
		title: "Professional vs At-Home Whitening: The Truth",
		image: "https://mp-cms.medparkhospital.com/assets/fd8a0998-0ee8-4657-a6db-d92f0c167b13",
		href: "/blog/professional-vs-home",
	},
];

export function ArticlesSection() {
	return (
		<section className="bg-secondary px-4 py-16 md:px-8 md:py-24 lg:px-16">
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
