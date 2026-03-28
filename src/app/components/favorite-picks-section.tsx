"use client";

import { useState } from "react";
import { Star01, Heart, Eye, ChevronLeft, ChevronRight } from "@untitledui/icons";

const products = [
	{
		id: 1,
		category: "Whitening Kit",
		name: "Professional Whitening Gel",
		price: "$55.00",
		priceMax: "$64.00",
		rating: 5,
		image: "https://images.unsplash.com/photo-1571875257727-256c39da42af?w=400&auto=format&fit=crop",
		imageLarge: "https://images.unsplash.com/photo-1571875257727-256c39da42af?w=800&auto=format&fit=crop",
	},
	{
		id: 2,
		category: "Daily Care",
		name: "Sensitive Toothpaste",
		price: "$30.00",
		priceMax: "$35.00",
		rating: 5,
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

function ProductCard({ product }: { product: (typeof products)[0] }) {
	return (
		<div className="group flex flex-col">
			{/* Image Container */}
			<div className="relative aspect-square overflow-hidden">
				<img
					src={product.image}
					alt={product.name}
					className="size-full object-cover transition duration-100 ease-linear group-hover:scale-105"
				/>
				{/* Action Icons */}
				<div className="absolute right-3 top-3 flex flex-col gap-2">
					<button
						className="flex size-9 items-center justify-center rounded-full bg-white shadow-sm transition duration-100 ease-linear hover:bg-gray-50"
						aria-label="Add to wishlist"
					>
						<Heart className="size-5 text-gray-700" />
					</button>
					<button
						className="flex size-9 items-center justify-center rounded-full bg-white shadow-sm transition duration-100 ease-linear hover:bg-gray-50"
						aria-label="Quick view"
					>
						<Eye className="size-5 text-gray-700" />
					</button>
				</div>
			</div>
			{/* Product Info */}
			<div className="mt-4 flex flex-col gap-1">
				<h3 className="text-sm font-medium text-primary line-clamp-2">{product.name}</h3>
				<RatingStars rating={product.rating} />
				<p className="text-sm font-semibold text-primary">{product.price}</p>
			</div>
			{/* Add to Cart Button */}
			<button className="mt-3 border border-gray-900 px-4 py-2.5 text-sm font-medium text-gray-900 transition duration-100 ease-linear hover:bg-gray-900 hover:text-white">
				Add To Cart
			</button>
		</div>
	);
}

export function FavoritePicksSection() {
	const [page, setPage] = useState(0);

	const handlePrev = () => {
		setPage((prev) => (prev === 0 ? 1 : 0));
	};

	const handleNext = () => {
		setPage((prev) => (prev === 1 ? 0 : 1));
	};

	return (
		<section className="bg-white py-12 md:py-16 lg:py-20">
			<div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
				{/* Section Header */}
				<div className="text-center">
					<span className="text-xs uppercase tracking-widest text-tertiary">New Collection</span>
					<h2 className="mt-2 text-2xl font-semibold uppercase text-primary md:text-3xl lg:text-display-xs" style={{ fontFamily: "var(--global-heading-font-family)" }}>
						Beauty For Every Story
					</h2>
				</div>

				{/* Products Grid */}
				<div className="mt-10 grid grid-cols-2 gap-3 md:gap-6 lg:grid-cols-3">
					{products.map((product) => (
						<ProductCard key={product.id} product={product} />
					))}
				</div>

				{/* Bottom Navigation */}
				<div className="mt-10 flex items-center justify-between">
					<a
						href="/shop"
						className="border-b border-gray-900 pb-1 text-sm font-medium text-gray-900 transition duration-100 ease-linear hover:border-gray-600 hover:text-gray-600"
					>
						View All
					</a>
					<div className="flex items-center gap-3">
						<button
							onClick={handlePrev}
							className="flex size-10 items-center justify-center rounded-sm border border-gray-300 bg-white text-gray-900 shadow-sm transition duration-100 ease-linear hover:bg-gray-50"
							aria-label="Previous products"
						>
							<ChevronLeft className="size-5" />
						</button>
						<button
							onClick={handleNext}
							className="flex size-10 items-center justify-center rounded-sm border border-gray-300 bg-white text-gray-900 shadow-sm transition duration-100 ease-linear hover:bg-gray-50"
							aria-label="Next products"
						>
							<ChevronRight className="size-5" />
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}
