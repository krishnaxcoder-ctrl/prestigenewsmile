import Link from "next/link";
import { Header } from "@/app/components/header";
import { Footer } from "@/app/components/footer";

const blogPosts = [
	{
		slug: "brighter-smile-tips",
		title: "10 Tips for a Brighter, Whiter Smile",
		category: "Whitening",
		date: "Jan 15, 2026",
		readTime: "8 min read",
		image: "https://mp-cms.medparkhospital.com/assets/bb4a30f0-af60-44ab-99cf-6a8ab20d016f/zoom-banner-1.jpeg",
		excerpt: "Expert tips to achieve and maintain a radiant smile, from professional treatments to daily habits.",
	},
	{
		slug: "whitening-session-guide",
		title: "What to Expect During Your Whitening Session",
		category: "Guide",
		date: "Jan 12, 2026",
		readTime: "6 min read",
		image: "https://mp-cms.medparkhospital.com/assets/7988113b-562a-4f03-94bc-e106ca849e75",
		excerpt: "A step-by-step guide to your professional whitening appointment at Prestige Smile.",
	},
	{
		slug: "maintain-results",
		title: "How to Maintain Your Results After Treatment",
		category: "Aftercare",
		date: "Jan 10, 2026",
		readTime: "5 min read",
		image: "https://mp-cms.medparkhospital.com/assets/56b474a5-973a-468a-853c-a856f04f6060",
		excerpt: "Follow these aftercare guidelines to keep your teeth looking their best for as long as possible.",
	},
	{
		slug: "professional-vs-home",
		title: "Professional vs At-Home Whitening: The Truth",
		category: "FAQ",
		date: "Jan 8, 2026",
		readTime: "7 min read",
		image: "https://mp-cms.medparkhospital.com/assets/fd8a0998-0ee8-4657-a6db-d92f0c167b13",
		excerpt: "Breaking down the key differences between professional in-studio whitening and at-home alternatives.",
	},
];

export default function ArticlesPage() {
	return (
		<>
			<Header />
			<main>
				{/* Hero */}
				<section className="bg-white px-4 py-16 md:px-8 md:py-24 lg:px-16">
					<div className="mx-auto max-w-[1400px]">
						<div className="mb-12 text-center md:mb-16">
							<p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-600">Blog & Tips</p>
							<h1 className="mt-4 text-3xl font-light text-primary md:text-4xl lg:text-5xl" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
								Our Latest{" "}
								<span className="italic text-brand-600">Articles</span>
							</h1>
							<p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-tertiary">
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
							{blogPosts.map((post) => (
								<article key={post.slug} className="group">
									<Link href={`/articles/${post.slug}`} className="block overflow-hidden">
										<img
											src={post.image}
											alt={post.title}
											className="aspect-[3/4] w-full object-cover object-[70%_center] transition duration-300 group-hover:scale-105"
										/>
									</Link>
									<div className="mt-5 text-center">
										<div className="flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-tertiary">
											<span>{post.category}</span>
											<span className="size-1 rounded-full bg-tertiary" />
											<span>{post.date}</span>
										</div>
										<h2 className="mt-3 text-lg font-normal leading-snug text-primary md:text-md">
											<Link href={`/articles/${post.slug}`} className="hover:text-brand-600 transition duration-100 ease-linear">
												{post.title}
											</Link>
										</h2>
										<p className="mt-2 text-sm leading-relaxed text-tertiary line-clamp-2">{post.excerpt}</p>
									</div>
								</article>
							))}
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
}
