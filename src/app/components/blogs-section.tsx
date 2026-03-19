"use client";

import { Button } from "@/components/base/buttons/button";
import { ArrowRight, Calendar } from "@untitledui/icons";

const blogPosts = [
	{
		id: 1,
		category: "Green Choices Matter",
		date: "Jan 06, 2026",
		title: "Essential Daily Skincare Rituals for Long-Lasting Radiance",
		image: "https://placehold.co/800x400/f8dad3/1f1d1d?text=Blog+1",
		href: "#",
	},
	{
		id: 2,
		category: "Green Choices Matter",
		date: "Dec 31, 2025",
		title: "Mastering the Art of Natural Makeup for a Healthy, Luminous Glow",
		image: "https://placehold.co/800x400/f8dad3/1f1d1d?text=Blog+2",
		href: "#",
	},
];

export function BlogsSection() {
	return (
		<section
			className="px-4 py-16 md:px-8 md:py-24 lg:px-16"
			style={{ backgroundColor: "#f5eee8" }}
		>
			<div className="mx-auto max-w-7xl">
				{/* Header */}
				<div className="mb-10 flex flex-col items-center justify-between gap-6 md:flex-row md:items-end">
					<div className="text-center md:text-left">
						<span className="mb-2 block text-sm uppercase tracking-widest text-tertiary">
							latest articles
						</span>
						<h2 className="text-2xl font-medium text-primary md:text-3xl lg:text-4xl">
							5 Makeup Hacks Every Woman{" "}
							<span className="text-brand-secondary">Should</span>{" "}
							<span className="text-brand-secondary">Know</span>
						</h2>
					</div>
					<Button href="#" color="secondary" size="md">
						View All
					</Button>
				</div>

				{/* Blog Grid */}
				<div className="grid grid-cols-1 gap-8 md:grid-cols-2">
					{blogPosts.map((post) => (
						<article
							key={post.id}
							className="group flex flex-col overflow-hidden"
						>
							{/* Meta */}
							<div className="mb-3 flex items-center gap-4">
								<a
									href="#"
									className="text-sm uppercase text-brand-secondary transition duration-100 ease-linear hover:underline"
								>
									{post.category}
								</a>
								<div className="flex items-center gap-1.5  text-sm text-tertiary">
									<Calendar className="size-4" />
									{post.date}
								</div>
							</div>

							{/* Title */}
							<h3 className="mb-4 text-xl font-medium text-primary md:text-2xl">
								<a
									href={post.href}
									className="transition duration-100 ease-linear hover:text-brand-secondary"
								>
									{post.title}
								</a>
							</h3>

							{/* Image */}
							<a
								href={post.href}
								className="relative mb-4 aspect-[2/1] overflow-hidden rounded-lg"
							>
								<img
									src={post.image}
									alt={post.title}
									className="size-full object-cover transition duration-300 ease-linear group-hover:scale-105"
								/>
							</a>

							{/* Read More */}
							<Button
								href={post.href}
								color="link-gray"
								size="md"
								iconTrailing={ArrowRight}
							>
								Read Article
							</Button>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}
