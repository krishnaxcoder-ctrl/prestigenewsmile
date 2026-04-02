"use client";

import { useState, useEffect } from "react";
import { Star01, Heart, ShoppingBag01, ChevronLeft, ChevronRight, ArrowRight } from "@untitledui/icons";
import { getProducts, type Product } from "@/lib/supabase";

function RatingStars({ rating }: { rating: number }) {
	return (
		<div className="flex gap-0.5">
			{[1, 2, 3, 4, 5].map((star) => (
				<Star01
					key={star}
					className={`size-3.5 ${star <= rating ? "fill-amber-400 text-amber-400" : "fill-gray-200 text-gray-200"}`}
				/>
			))}
		</div>
	);
}

function ProductCard({ product }: { product: Product }) {
	const imageUrl = product.images?.[0] || "https://images.unsplash.com/photo-1571875257727-256c39da42af?w=400&auto=format&fit=crop";
	const formattedPrice = `$${product.price.toFixed(2)}`;

	return (
		<div className="group flex h-full flex-col rounded-2xl bg-gradient-to-b from-white to-gray-50/50 p-4 shadow-[0_4px_20px_rgba(0,0,0,0.06)] transition duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)]">
			{/* Image Container */}
			<div className="relative aspect-square overflow-hidden rounded-xl bg-gradient-to-br from-gray-50 to-gray-100">
				<img
					src={imageUrl}
					alt={product.name}
					className="size-full object-cover transition duration-500 ease-out group-hover:scale-110"
				/>
				{/* Overlay on hover */}
				<div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />

				{/* Wishlist Button */}
				<button
					className="absolute right-3 top-3 flex size-10 items-center justify-center rounded-full bg-white/90 shadow-lg backdrop-blur-sm transition duration-300 hover:bg-white hover:scale-110"
					aria-label="Add to wishlist"
				>
					<Heart className="size-5 text-gray-600 transition hover:text-red-500" />
				</button>

				{/* Quick Add Button */}
				<div className="absolute inset-x-3 bottom-3 translate-y-4 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
					<button className="flex w-full items-center justify-center gap-2 rounded-lg bg-white/95 px-4 py-3 text-sm font-medium text-gray-900 shadow-lg backdrop-blur-sm transition hover:bg-white">
						<ShoppingBag01 className="size-4" />
						Quick Add
					</button>
				</div>
			</div>

			{/* Product Info */}
			<div className="mt-4 flex flex-1 flex-col">
				<div className="mb-2 flex items-center gap-2">
					<RatingStars rating={product.rating ?? 5} />
					<span className="text-xs text-gray-400">(124)</span>
				</div>
				<h3 className="text-base font-medium leading-snug text-gray-900 line-clamp-2">{product.name}</h3>
				<p className="mt-1 text-xs text-gray-500 line-clamp-2">{product.description || "Premium quality oral care"}</p>

				<div className="mt-auto pt-4">
					<div className="flex items-baseline gap-2">
						<span className="text-xl font-semibold text-gray-900">{formattedPrice}</span>
						<span className="text-sm text-gray-400 line-through">$49.99</span>
					</div>
				</div>
			</div>
		</div>
	);
}

const galleryImages = [
	{ src: "/images/newnew1.png", alt: "Natural care", label: "Natural Ingredients" },
	{ src: "/images/newnew2.png", alt: "Herbal ingredients", label: "Herbal Formula" },
	{ src: "/images/newnew3.png", alt: "Oral health", label: "Oral Wellness" },
	{ src: "/images/newnew4.png", alt: "Premium quality", label: "Premium Quality" },
];

export function FavoritePicksSection() {
	const [products, setProducts] = useState<Product[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [productIndex, setProductIndex] = useState(0);

	useEffect(() => {
		async function fetchProducts() {
			try {
				const data = await getProducts();
				setProducts(data);
			} catch (error) {
				console.error("Failed to fetch products:", error);
			} finally {
				setIsLoading(false);
			}
		}
		fetchProducts();
	}, []);

	const handlePrev = () => {
		setProductIndex((prev) => (prev === 0 ? Math.max(0, products.length - 1) : prev - 1));
	};

	const handleNext = () => {
		setProductIndex((prev) => (prev >= products.length - 1 ? 0 : prev + 1));
	};

	const currentProduct = products[productIndex];

	return (
		<section className="bg-gradient-to-b from-white via-gray-50/30 to-white py-16 md:py-20 lg:py-24">
			<div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
				{/* Section Header */}
				<div className="mb-12 text-center md:mb-16">
					<p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-brand-600 md:text-xs">
						Featured Collection
					</p>
					<h2
						className="mt-4 text-3xl font-light leading-tight tracking-tight text-gray-900 md:text-4xl lg:text-5xl"
						style={{ fontFamily: "'Cormorant Garamond', serif" }}
					>
						Curated For{" "}
						<em className="font-normal italic text-brand-600">Your Smile</em>
					</h2>
					<p className="mx-auto mt-5 max-w-xl text-sm font-light leading-relaxed text-gray-500 md:text-base">
						Handpicked premium products designed to transform and elevate your oral care routine
					</p>
				</div>

				{/* Decorative Divider */}
				<div className="mb-12 flex items-center justify-center gap-4 md:mb-16">
					<div className="h-px flex-1 bg-gradient-to-r from-transparent via-brand-600/30 to-brand-600/50" />
					<div className="size-2 rotate-45 border border-brand-600/60" />
					<div className="h-px flex-1 bg-gradient-to-l from-transparent via-brand-600/30 to-brand-600/50" />
				</div>

				{/* 3-Column Layout */}
				<div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-3">
					{/* Column 1 - Product */}
					<div className="flex flex-col">
						{isLoading ? (
							<div className="flex aspect-[3/4] items-center justify-center rounded-2xl bg-gray-50">
								<div className="size-10 animate-spin rounded-full border-4 border-gray-200 border-t-brand-600" />
							</div>
						) : currentProduct ? (
							<div className="flex flex-col">
								<ProductCard product={currentProduct} />

								{/* Shipping Details */}
								<div className="mt-5 rounded-xl border border-gray-100 bg-gradient-to-br from-gray-50 to-white p-4">
									<div className="flex items-center gap-2 text-sm font-medium text-gray-900">
										<svg className="size-4 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
											<path strokeLinecap="round" strokeLinejoin="round" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
										</svg>
										Shipping Info
									</div>
									<div className="mt-3 space-y-2">
										<div className="flex items-center justify-between text-xs">
											<span className="text-gray-500">Delivery</span>
											<span className="font-medium text-gray-700">2-4 business days</span>
										</div>
										<div className="flex items-center justify-between text-xs">
											<span className="text-gray-500">Shipping</span>
											<span className="font-medium text-gray-700">€3.90</span>
										</div>
										<div className="flex items-center gap-1.5 pt-1 text-xs text-brand-600">
											<svg className="size-3.5" fill="currentColor" viewBox="0 0 20 20">
												<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
											</svg>
											<span className="font-medium">Free shipping over €20</span>
										</div>
									</div>
								</div>

								{/* Navigation */}
								<div className="mt-4 flex items-center justify-between rounded-xl bg-white px-4 py-3 shadow-sm">
									<div className="flex items-center gap-3">
										<button
											onClick={handlePrev}
											className="flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 transition duration-200 hover:border-brand-600 hover:text-brand-600"
											aria-label="Previous product"
										>
											<ChevronLeft className="size-5" />
										</button>
										<button
											onClick={handleNext}
											className="flex size-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 transition duration-200 hover:border-brand-600 hover:text-brand-600"
											aria-label="Next product"
										>
											<ChevronRight className="size-5" />
										</button>
									</div>
									<div className="flex items-center gap-2">
										{products.slice(0, 5).map((_, i) => (
											<button
												key={i}
												onClick={() => setProductIndex(i)}
												className={`size-2 rounded-full transition duration-200 ${
													i === productIndex ? "bg-brand-600 scale-125" : "bg-gray-300 hover:bg-gray-400"
												}`}
												aria-label={`Go to product ${i + 1}`}
											/>
										))}
									</div>
								</div>
							</div>
						) : (
							<div className="flex aspect-[3/4] items-center justify-center rounded-2xl bg-gray-50 text-gray-400">
								No products available
							</div>
						)}
					</div>

					{/* Columns 2 & 3 - Image Gallery (2x2 Grid) */}
					<div className="lg:col-span-2">
						<div className="grid grid-cols-2 gap-4 md:gap-6">
							{galleryImages.map((image, index) => (
								<div
									key={index}
									className="relative aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.06)]"
								>
									<img
										src={image.src}
										alt={image.alt}
										className="size-full object-cover"
									/>
								</div>
							))}
						</div>

						{/* Gallery CTA */}
						<div className="mt-6 flex items-center justify-between rounded-xl bg-gradient-to-r from-brand-50 to-brand-100/50 px-6 py-4">
							<div>
								<p className="text-sm font-medium text-gray-900">Discover Our Full Range</p>
								<p className="mt-0.5 text-xs text-gray-500">Premium oral care products for every need</p>
							</div>
							<a
								href="/shop"
								className="flex items-center gap-2 rounded-full bg-brand-600 px-5 py-2.5 text-sm font-medium text-white transition duration-200 hover:bg-brand-700"
							>
								Shop All
								<ArrowRight className="size-4" />
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
