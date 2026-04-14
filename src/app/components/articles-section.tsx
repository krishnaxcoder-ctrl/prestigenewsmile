const posts = [
	{
		slug: "how-professional-teeth-whitening-works",
		title: "How Professional Teeth Whitening Works",
		category: "Whitening",
		date: "Mar 12, 2026",
		image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=1200&auto=format&fit=crop",
	},
	{
		slug: "aftercare-tips-for-a-lasting-bright-smile",
		title: "Aftercare Tips for a Lasting Bright Smile",
		category: "Aftercare",
		date: "Feb 28, 2026",
		image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1200&auto=format&fit=crop",
	},
	{
		slug: "foods-and-drinks-that-stain-your-teeth",
		title: "Foods and Drinks That Stain Your Teeth",
		category: "Lifestyle",
		date: "Feb 14, 2026",
		image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=1200&auto=format&fit=crop",
	},
	{
		slug: "is-teeth-whitening-safe-for-enamel",
		title: "Is Teeth Whitening Safe for Your Enamel?",
		category: "Dental Health",
		date: "Jan 30, 2026",
		image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=1200&auto=format&fit=crop",
	},
];

export function ArticlesSection() {
	return (
		<section className="bg-white px-4 py-16 md:px-8 md:py-24 lg:px-16">
			<div className="mx-auto max-w-[1400px]">
				{/* Section Header */}
				<div className="mb-12 text-center md:mb-16">
					<p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-600">Blog & Tips</p>
					<h2 className="mt-4 text-3xl font-light text-primary md:text-4xl lg:text-5xl" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
						Our Latest{" "}
						<span className="italic text-brand-600">News</span>
					</h2>
					<p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-gray-500">
						Stay informed with tips, guides, and insights about teeth whitening and oral care
					</p>
					{/* Decorative Divider */}
					<div className="mt-8 flex items-center justify-center gap-4">
						<div className="h-px flex-1 max-w-32 bg-gradient-to-r from-transparent via-brand-600/30 to-brand-600/50" />
						<div className="size-2 rotate-45 border border-brand-600/60" />
						<div className="h-px flex-1 max-w-32 bg-gradient-to-l from-transparent via-brand-600/30 to-brand-600/50" />
					</div>
				</div>

				<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
					{posts.map((post) => (
						<article key={post.slug} className="group">
							<a href={`/articles/${post.slug}`} className="block overflow-hidden">
								<img src={post.image} alt={post.title} className="aspect-[3/4] w-full object-cover object-[70%_center]" />
							</a>
							<div className="mt-5 text-center">
								<div className="flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-tertiary">
									<span>{post.category}</span>
									<span className="size-1 rounded-full bg-tertiary" />
									<span>{post.date}</span>
								</div>
								<h3 className="mt-3 font-body text-lg font-normal leading-snug text-primary md:text-md">
									<a href={`/articles/${post.slug}`} className="hover:text-brand-600">{post.title}</a>
								</h3>
							</div>
						</article>
					))}
				</div>

				<div className="mt-16 text-center">
					<a
						href="/articles"
						className="inline-block border border-gray-900 bg-transparent px-12 py-4 text-sm uppercase tracking-[0.2em] text-gray-900 hover:bg-gray-900 hover:text-white"
					>
						View All Posts
					</a>
				</div>
			</div>
		</section>
	);
}
