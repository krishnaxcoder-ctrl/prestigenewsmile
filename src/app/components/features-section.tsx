"use client";

import { Button } from "@/components/base/buttons/button";

const features = [
	{
		id: 1,
		subtitle: "Glow Starts Here",
		title: "Reveal Your",
		titleHighlight: "Radiance",
		description:
			"Nurture your skin with clean, conscious ingredients designed to reveal a naturally luminous, healthy single day.",
		buttonText: "Shop Now",
		buttonHref: "#",
		image: "https://placehold.co/600x500/f8dad3/1f1d1d?text=Feature+1",
		imagePosition: "left",
	},
	{
		id: 2,
		title: "5 Key Things to Know Before Buying Skincare",
		titleHighlight: "Products",
		buttonText: "Explore",
		buttonHref: "#",
		image: "https://placehold.co/600x500/f8dad3/1f1d1d?text=Feature+2",
		imagePosition: "right",
	},
];

export function FeaturesSection() {
	return (
		<section className="bg-primary">
			<div className="flex flex-col">
				{features.map((feature) => (
					<div
						key={feature.id}
						className={`grid grid-cols-1 md:grid-cols-2 ${
							feature.imagePosition === "right" ? "" : ""
						}`}
					>
						{/* Image - conditionally ordered */}
						<div
							className={`relative aspect-square overflow-hidden md:aspect-auto ${
								feature.imagePosition === "right" ? "md:order-2" : "md:order-1"
							}`}
						>
							<img
								src={feature.image}
								alt={feature.title}
								className="size-full object-cover"
							/>
						</div>

						{/* Content */}
						<div
							className={`flex flex-col justify-center gap-6 px-6 py-12 md:px-12 lg:px-20 ${
								feature.imagePosition === "right" ? "md:order-1" : "md:order-2"
							}`}
						>
							{feature.subtitle && (
								<span className="text-sm uppercase tracking-widest text-tertiary">
									{feature.subtitle}
								</span>
							)}
							<h2 className="text-2xl font-medium text-primary md:text-3xl lg:text-4xl">
								{feature.title}{" "}
								{feature.titleHighlight && (
									<span className="text-brand-secondary">
										{feature.titleHighlight}
									</span>
								)}
							</h2>
							{feature.description && (
								<p className="text-base text-tertiary">{feature.description}</p>
							)}
							<div>
								<Button href={feature.buttonHref} color="primary" size="md">
									{feature.buttonText}
								</Button>
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
