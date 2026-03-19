"use client";

export function InstagramPosts() {
	const placeholderImages = [
		"https://placehold.co/400x400/e2e8f0/64748b?text=1",
		"https://placehold.co/400x400/e2e8f0/64748b?text=2",
		"https://placehold.co/400x400/e2e8f0/64748b?text=3",
		"https://placehold.co/400x400/e2e8f0/64748b?text=4",
		"https://placehold.co/400x400/e2e8f0/64748b?text=5",
	];

	return (
		<section className="bg-primary">
			<h2 className="py-8 text-center text-2xl font-semibold text-primary md:text-3xl">
				#Instagram
			</h2>
			<div className="grid grid-cols-2 gap-0 sm:grid-cols-3 md:grid-cols-5">
				{placeholderImages.map((src, index) => (
					<a
						key={index}
						href="https://instagram.com"
						target="_blank"
						rel="noopener noreferrer"
						className="group relative aspect-square overflow-hidden bg-tertiary transition duration-100 ease-linear hover:opacity-90"
					>
						<img
							src={src}
							alt={`Instagram post ${index + 1}`}
							className="size-full object-cover transition duration-100 ease-linear group-hover:scale-105"
						/>
					</a>
				))}
			</div>
		</section>
	);
}
