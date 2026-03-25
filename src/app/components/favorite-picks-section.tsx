"use client";

import { useState, useEffect } from "react";
import { Star01 } from "@untitledui/icons";

const products = [
	{
		id: 1,
		category: "Whitening Kit",
		name: "Professional Whitening Gel",
		price: "$55.00",
		priceMax: "$64.00",
		rating: 4,
		image: "https://images.unsplash.com/photo-1571875257727-256c39da42af?w=400&auto=format&fit=crop",
		imageLarge: "https://images.unsplash.com/photo-1571875257727-256c39da42af?w=800&auto=format&fit=crop",
	},
	{
		id: 2,
		category: "Daily Care",
		name: "Sensitive Toothpaste",
		price: "$30.00",
		priceMax: "$35.00",
		rating: 4,
		image: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=400&auto=format&fit=crop",
		imageLarge: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=800&auto=format&fit=crop",
	},
	{
		id: 3,
		category: "Treatment",
		name: "Enamel Repair Serum",
		price: "$65.00",
		priceMax: "$84.00",
		rating: 5,
		image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&auto=format&fit=crop",
		imageLarge: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&auto=format&fit=crop",
	},
];

function RatingStars({ rating }: { rating: number }) {
	return (
		<div className="flex gap-0.5">
			{[1, 2, 3, 4, 5].map((star) => (
				<Star01
					key={star}
					className={`size-4 ${star <= rating ? "fill-amber-400 text-amber-400" : "fill-gray-200 text-gray-200"}`}
				/>
			))}
		</div>
	);
}

export function FavoritePicksSection() {
	const [activeIndex, setActiveIndex] = useState(0);
	const activeProduct = products[activeIndex];

	useEffect(() => {
		const interval = setInterval(() => {
			setActiveIndex((prev) => (prev + 1) % products.length);
		}, 4000);
		return () => clearInterval(interval);
	}, []);

	return (
		<section className="bg-secondary">
			{/* Mobile Layout */}
			<div className="block lg:hidden">
				<div className="px-6 py-12">
					<span className="text-xs uppercase tracking-widest text-tertiary">Our Picks</span>
					<h2 className="mt-3 font-body text-2xl font-medium uppercase text-primary md:text-3xl">
						Our Favorite Picks <span className="text-tertiary">Shop</span>
					</h2>
					<a
						href="/shop"
						className="mt-6 inline-block border border-gray-900 bg-gray-900 px-6 py-3 text-xs uppercase tracking-[0.2em] text-white hover:bg-transparent hover:text-gray-900"
					>
						View All
					</a>
					<div className="mt-8">
						<div className="aspect-[3/4] w-full overflow-hidden">
							<img src={activeProduct.imageLarge} alt={activeProduct.name} className="size-full object-cover" />
						</div>
						<div className="mt-6 flex items-end justify-between">
							<div>
								<span className="text-xs uppercase tracking-widest text-tertiary">{activeProduct.category}</span>
								<h3 className="mt-1 font-body text-base font-medium uppercase tracking-wide text-primary">{activeProduct.name}</h3>
							</div>
							<div className="text-right">
								<RatingStars rating={activeProduct.rating} />
								<p className="mt-1 text-sm text-tertiary">
									{activeProduct.price} <span className="text-quaternary">—</span> {activeProduct.priceMax}
								</p>
							</div>
						</div>
						<div className="mt-6 flex justify-center gap-2">
							{products.map((_, index) => (
								<button
									key={index}
									onClick={() => setActiveIndex(index)}
									className={`size-2.5 rounded-full ${index === activeIndex ? "bg-gray-900" : "border border-gray-400 bg-transparent"}`}
									aria-label={`Go to product ${index + 1}`}
								/>
							))}
						</div>
					</div>
				</div>
			</div>

			{/* Desktop Layout */}
			<div className="hidden lg:grid lg:grid-cols-2">
				<div className="px-6 py-12 md:px-12 md:py-14 lg:px-16 lg:py-16">
					<div className="mx-auto max-w-xl lg:ml-auto lg:mr-0">
						<span className="text-xs uppercase tracking-widest text-tertiary">Our Picks</span>
						<div className="mt-3 flex flex-wrap items-start justify-between gap-4">
							<h2 className="font-body text-display-xs font-medium uppercase text-primary md:text-display-sm">
								Our Favorite<br />Picks <span className="text-tertiary">Shop</span>
							</h2>
							<a
								href="/shop"
								className="inline-block border border-gray-900 bg-gray-900 px-6 py-3 text-xs uppercase tracking-[0.2em] text-white hover:bg-transparent hover:text-gray-900"
							>
								View All
							</a>
						</div>
						<div className="mt-8 space-y-4">
							{products.map((product) => (
								<a key={product.id} href={`/shop/${product.id}`} className="group flex items-center gap-6">
									<div className="size-28 shrink-0 overflow-hidden bg-[#f5e6e0]">
										<img src={product.image} alt={product.name} className="size-full object-cover" />
									</div>
									<div className="flex flex-1 items-center justify-between gap-4">
										<div>
											<span className="text-xs uppercase tracking-widest text-tertiary">{product.category}</span>
											<h3 className="mt-1 font-body text-sm font-medium uppercase tracking-wide text-primary group-hover:text-brand-600 md:text-base">
												{product.name}
											</h3>
										</div>
										<div className="text-right">
											<RatingStars rating={product.rating} />
											<p className="mt-1 text-sm text-tertiary">
												{product.price} <span className="text-quaternary">—</span> {product.priceMax}
											</p>
										</div>
									</div>
								</a>
							))}
						</div>
					</div>
				</div>
				<div className="relative min-h-[350px] lg:min-h-[550px]">
					<img
						src="https://cdn2.hubspot.net/hubfs/4845087/GSD-Teeth-Whitening-Methods-Blog.jpg"
						alt="Featured products"
						className="size-full object-cover object-right"
					/>
				</div>
			</div>
		</section>
	);
}
