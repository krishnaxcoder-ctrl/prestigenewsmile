"use client";

import { useState, useEffect } from "react";
import { Star01, Heart, Eye, ChevronLeft, ChevronRight } from "@untitledui/icons";
import { getProducts, type Product } from "@/lib/supabase";

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

function ProductCard({ product }: { product: Product }) {
	const imageUrl = product.images?.[0] || "https://images.unsplash.com/photo-1571875257727-256c39da42af?w=400&auto=format&fit=crop";
	const formattedPrice = `$${product.price.toFixed(2)}`;

	return (
		<div className="group flex flex-col">
			{/* Image Container */}
			<div className="relative aspect-square overflow-hidden border border-gray-100 p-2 shadow-sm">
				<img
					src={imageUrl}
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
				<RatingStars rating={product.rating ?? 5} />
				<p className="text-sm font-semibold text-primary">{formattedPrice}</p>
			</div>
			{/* Add to Cart Button */}
			<button className="mt-3 border border-gray-900 px-4 py-2.5 text-sm font-medium text-gray-900 transition duration-100 ease-linear hover:bg-gray-900 hover:text-white">
				Add To Cart
			</button>
		</div>
	);
}

export function FavoritePicksSection() {
	const [products, setProducts] = useState<Product[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [page, setPage] = useState(0);
	const productsPerPage = 3;

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

	const totalPages = Math.ceil(products.length / productsPerPage);
	const displayedProducts = products.slice(page * productsPerPage, (page + 1) * productsPerPage);

	const handlePrev = () => {
		setPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
	};

	const handleNext = () => {
		setPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
	};

	return (
		<section className="bg-white py-12 md:py-16 lg:py-20">
			<div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
				{/* Section Header */}
				<div className="mb-8 text-center md:mb-12">
					<p className="text-[10px] font-medium uppercase tracking-[0.25em] text-brand-600 md:text-xs">
						New Collection
					</p>
					<h2
						className="mt-3 text-2xl font-light leading-tight tracking-tight text-primary md:text-3xl lg:text-4xl"
						style={{ fontFamily: "'Cormorant Garamond', serif" }}
					>
						Beauty For{" "}
						<em className="italic text-brand-600">Every Story</em>
					</h2>
					<p className="mx-auto mt-4 max-w-2xl text-sm font-light tracking-wide text-tertiary md:text-base">
						Discover our curated selection of premium teeth whitening products
					</p>
				</div>

				{/* Decorative Divider */}
				<div className="mb-10 flex items-center justify-center gap-4 md:mb-14">
					<div className="h-px w-15 bg-brand-600 opacity-50" />
					<div className="size-1.5 rounded-full bg-brand-600 opacity-60" />
					<div className="h-px w-15 bg-brand-600 opacity-50" />
				</div>

				{/* Products Grid */}
				{isLoading ? (
					<div className="flex items-center justify-center py-20">
						<div className="size-8 animate-spin rounded-full border-4 border-gray-200 border-t-gray-900" />
					</div>
				) : (
					<div className="grid grid-cols-2 gap-3 md:gap-6 lg:grid-cols-3">
						{displayedProducts.map((product) => (
							<ProductCard key={product.id} product={product} />
						))}
					</div>
				)}

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
