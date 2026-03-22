"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Star01 } from "@untitledui/icons";

const products = [
	{
		id: 1,
		category: "Whitening Kit",
		name: "Professional Whitening Gel",
		price: "$55.00",
		priceMax: "$64.00",
		rating: 4,
		image: "https://images.unsplash.com/photo-1609840112855-9250889c50dc?w=400&auto=format&fit=crop",
		imageLarge: "https://images.unsplash.com/photo-1609840112855-9250889c50dc?w=800&auto=format&fit=crop",
	},
	{
		id: 2,
		category: "Daily Care",
		name: "Sensitive Toothpaste",
		price: "$30.00",
		priceMax: "$35.00",
		rating: 4,
		image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&auto=format&fit=crop",
		imageLarge: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=800&auto=format&fit=crop",
	},
	{
		id: 3,
		category: "Treatment",
		name: "Enamel Repair Serum",
		price: "$65.00",
		priceMax: "$84.00",
		rating: 5,
		image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400&auto=format&fit=crop",
		imageLarge: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=800&auto=format&fit=crop",
	},
	{
		id: 4,
		category: "Maintenance",
		name: "Whitening Mouthwash",
		price: "$66.00",
		priceMax: "$75.00",
		rating: 4,
		image: "https://images.unsplash.com/photo-1571875257727-256c39da42af?w=400&auto=format&fit=crop",
		imageLarge: "https://images.unsplash.com/photo-1571875257727-256c39da42af?w=800&auto=format&fit=crop",
	},
];

function RatingStars({ rating }: { rating: number }) {
	return (
		<div className="flex gap-0.5">
			{[1, 2, 3, 4, 5].map((star) => (
				<Star01
					key={star}
					className={`size-4 ${
						star <= rating
							? "fill-amber-400 text-amber-400"
							: "fill-gray-200 text-gray-200"
					}`}
				/>
			))}
		</div>
	);
}

export function FavoritePicksSection() {
	const [activeIndex, setActiveIndex] = useState(0);
	const activeProduct = products[activeIndex];

	return (
		<section className="bg-secondary">
			{/* Mobile Layout */}
			<div className="block lg:hidden">
				<div className="px-6 py-12">
					{/* Header */}
					<motion.span
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-100px" }}
						transition={{ duration: 0.5 }}
						className="text-xs uppercase tracking-widest text-tertiary"
					>
						Our Picks
					</motion.span>

					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-100px" }}
						transition={{ duration: 0.5, delay: 0.05 }}
						className="mt-3 font-body text-2xl font-medium uppercase text-primary md:text-3xl"
					>
						Our Favorite Picks <span className="text-tertiary">Shop</span>
					</motion.h2>

					<motion.a
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-100px" }}
						transition={{ duration: 0.5, delay: 0.1 }}
						href="/shop"
						className="mt-6 inline-block border border-gray-900 bg-gray-900 px-6 py-3 text-xs uppercase tracking-[0.2em] text-white transition duration-200 hover:bg-transparent hover:text-gray-900"
					>
						View All
					</motion.a>

					{/* Large Product Image */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-100px" }}
						transition={{ duration: 0.5, delay: 0.15 }}
						className="mt-8"
					>
						<div className="aspect-[3/4] w-full overflow-hidden">
							<img
								src={activeProduct.imageLarge}
								alt={activeProduct.name}
								className="size-full object-cover"
							/>
						</div>

						{/* Product Info */}
						<div className="mt-6 flex items-end justify-between">
							<div>
								<span className="text-xs uppercase tracking-widest text-tertiary">
									{activeProduct.category}
								</span>
								<h3 className="mt-1 font-body text-base font-medium uppercase tracking-wide text-primary">
									{activeProduct.name}
								</h3>
							</div>

							<div className="text-right">
								<RatingStars rating={activeProduct.rating} />
								<p className="mt-1 text-sm text-tertiary">
									{activeProduct.price}{" "}
									<span className="text-quaternary">—</span>{" "}
									{activeProduct.priceMax}
								</p>
							</div>
						</div>

						{/* Pagination Dots */}
						<div className="mt-6 flex justify-center gap-2">
							{products.map((_, index) => (
								<button
									key={index}
									onClick={() => setActiveIndex(index)}
									className={`size-2.5 rounded-full transition-all duration-300 ${
										index === activeIndex
											? "bg-gray-900"
											: "border border-gray-400 bg-transparent hover:bg-gray-400"
									}`}
									aria-label={`Go to product ${index + 1}`}
								/>
							))}
						</div>
					</motion.div>
				</div>
			</div>

			{/* Desktop Layout */}
			<div className="hidden lg:grid lg:grid-cols-2">
				{/* Left Content */}
				<div className="px-6 py-16 md:px-12 md:py-20 lg:px-16 lg:py-24">
					<div className="mx-auto max-w-xl lg:ml-auto lg:mr-0">
						{/* Header */}
						<motion.span
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-100px" }}
							transition={{ duration: 0.5 }}
							className="text-xs uppercase tracking-widest text-tertiary"
						>
							Our Picks
						</motion.span>

						<div className="mt-3 flex flex-wrap items-start justify-between gap-4">
							<motion.h2
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, margin: "-100px" }}
								transition={{ duration: 0.5, delay: 0.05 }}
								className="font-body text-display-xs font-medium uppercase text-primary md:text-display-sm"
							>
								Our Favorite
								<br />
								Picks <span className="text-tertiary">Shop</span>
							</motion.h2>

							<motion.a
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, margin: "-100px" }}
								transition={{ duration: 0.5, delay: 0.1 }}
								href="/shop"
								className="inline-block border border-gray-900 bg-gray-900 px-6 py-3 text-xs uppercase tracking-[0.2em] text-white transition duration-200 hover:bg-transparent hover:text-gray-900"
							>
								View All
							</motion.a>
						</div>

						{/* Product List */}
						<div className="mt-10 space-y-6">
							{products.map((product, index) => (
								<motion.a
									key={product.id}
									href={`/shop/${product.id}`}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true, margin: "-100px" }}
									transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
									className="group flex items-center gap-6"
								>
									{/* Product Image */}
									<div className="size-28 shrink-0 overflow-hidden bg-[#f5e6e0]">
										<img
											src={product.image}
											alt={product.name}
											className="size-full object-cover transition duration-300 group-hover:scale-105"
										/>
									</div>

									{/* Product Info */}
									<div className="flex flex-1 items-center justify-between gap-4">
										<div>
											<span className="text-xs uppercase tracking-widest text-tertiary">
												{product.category}
											</span>
											<h3 className="mt-1 font-body text-sm font-medium uppercase tracking-wide text-primary transition duration-200 group-hover:text-brand-600 md:text-base">
												{product.name}
											</h3>
										</div>

										<div className="text-right">
											<RatingStars rating={product.rating} />
											<p className="mt-1 text-sm text-tertiary">
												{product.price}{" "}
												<span className="text-quaternary">—</span>{" "}
												{product.priceMax}
											</p>
										</div>
									</div>
								</motion.a>
							))}
						</div>
					</div>
				</div>

				{/* Right Image */}
				<motion.div
					initial={{ opacity: 0, x: 50 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true, margin: "-100px" }}
					transition={{ duration: 0.6, delay: 0.2 }}
					className="relative min-h-[400px] lg:min-h-[700px]"
				>
					<img
						src="https://images.unsplash.com/photo-1629198688000-71f23e745b6e?w=800&auto=format&fit=crop"
						alt="Featured products"
						className="size-full object-cover"
					/>
				</motion.div>
			</div>
		</section>
	);
}
