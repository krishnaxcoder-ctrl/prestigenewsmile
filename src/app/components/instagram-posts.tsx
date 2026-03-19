"use client";

export function InstagramPosts() {
	const instagramImages = [
		"https://wdtmonica.wpengine.com/wp-content/uploads/2026/01/Home1-category-img-01.jpg",
		"https://wdtmonica.wpengine.com/wp-content/uploads/2026/01/Home1-slider-img-01.jpg",
		"https://wdtmonica.wpengine.com/wp-content/uploads/2026/01/Home1-category-img-02.jpg",
		"https://wdtmonica.wpengine.com/wp-content/uploads/2026/01/Home1-slider-img-04.jpg",
		"https://wdtmonica.wpengine.com/wp-content/uploads/2026/01/Home1-category-img-03.jpg",
	];

	return (
		<section className="bg-primary">
			<h2 className="py-8 text-center text-2xl font-semibold text-primary md:text-3xl">
				#Instagram
			</h2>
			<div className="grid grid-cols-2 gap-0 sm:grid-cols-3 md:grid-cols-5">
				{instagramImages.map((src, index) => (
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
