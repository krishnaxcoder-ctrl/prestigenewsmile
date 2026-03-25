"use client";

const blogPosts = [
	{ id: 1, category: "Whitening", date: "Jan 15, 2026", title: "10 Tips for a Brighter, Whiter Smile", image: "https://mp-cms.medparkhospital.com/assets/bb4a30f0-af60-44ab-99cf-6a8ab20d016f/zoom-banner-1.jpeg", href: "/blog/brighter-smile-tips" },
	{ id: 2, category: "Guide", date: "Jan 12, 2026", title: "What to Expect During Your Whitening Session", image: "https://mp-cms.medparkhospital.com/assets/7988113b-562a-4f03-94bc-e106ca849e75", href: "/blog/whitening-session-guide" },
	{ id: 3, category: "Aftercare", date: "Jan 10, 2026", title: "How to Maintain Your Results After Treatment", image: "https://mp-cms.medparkhospital.com/assets/56b474a5-973a-468a-853c-a856f04f6060", href: "/blog/maintain-results" },
	{ id: 4, category: "FAQ", date: "Jan 8, 2026", title: "Professional vs At-Home Whitening: The Truth", image: "https://mp-cms.medparkhospital.com/assets/fd8a0998-0ee8-4657-a6db-d92f0c167b13", href: "/blog/professional-vs-home" },
];

export function ArticlesSection() {
	return (
		<section className="bg-secondary px-4 py-16 md:px-8 md:py-24 lg:px-16">
			<div className="mx-auto max-w-7xl">
				<h2 className="mb-1 text-center text-display-xs font-medium uppercase text-primary md:mb-8 md:text-display-sm lg:text-display-md" style={{ fontFamily: "var(--global-heading-font-family)" }}>
					Blog
				</h2>
				<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
					{blogPosts.map((post) => (
						<article key={post.id} className="group">
							<a href={post.href} className="block overflow-hidden">
								<img src={post.image} alt={post.title} className="aspect-[3/4] w-full object-cover object-[70%_center]" />
							</a>
							<div className="mt-5 text-center">
								<div className="flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-tertiary">
									<span>{post.category}</span>
									<span className="size-1 rounded-full bg-tertiary" />
									<span>{post.date}</span>
								</div>
								<h3 className="mt-3 font-body text-lg font-normal leading-snug text-primary md:text-md">
									<a href={post.href} className="hover:text-brand-600">{post.title}</a>
								</h3>
							</div>
						</article>
					))}
				</div>
				<div className="mt-16 text-center">
					<a
						href="/blog"
						className="inline-block border border-gray-900 bg-transparent px-12 py-4 text-sm uppercase tracking-[0.2em] text-gray-900 hover:bg-gray-900 hover:text-white"
					>
						View All Posts
					</a>
				</div>
			</div>
		</section>
	);
}
