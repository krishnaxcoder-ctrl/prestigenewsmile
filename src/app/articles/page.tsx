"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Header } from "@/app/components/header";
import { Footer } from "@/app/components/footer";
import { getPublishedBlogPosts, type BlogPost } from "@/lib/supabase";

export default function ArticlesPage() {
	const [posts, setPosts] = useState<BlogPost[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		async function load() {
			try {
				const data = await getPublishedBlogPosts();
				setPosts(data);
			} catch {
				// silently fail
			} finally {
				setLoading(false);
			}
		}
		load();
	}, []);

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

						{loading ? (
							<div className="flex items-center justify-center py-12">
								<div className="size-8 animate-spin rounded-full border-2 border-brand-600 border-t-transparent" />
							</div>
						) : posts.length === 0 ? (
							<p className="text-center text-sm text-tertiary">No articles yet. Check back soon!</p>
						) : (
							<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
								{posts.map((post) => (
									<article key={post.id} className="group">
										<Link href={`/articles/${post.slug}`} className="block overflow-hidden">
											<img
												src={post.hero_image || ""}
												alt={post.title}
												className="aspect-[3/4] w-full object-cover object-[70%_center] transition duration-300 group-hover:scale-105"
											/>
										</Link>
										<div className="mt-5 text-center">
											<div className="flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-tertiary">
												<span>{post.category}</span>
												<span className="size-1 rounded-full bg-tertiary" />
												<span>
													{post.published_at
														? new Date(post.published_at).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
														: ""}
												</span>
											</div>
											<h2 className="mt-3 text-lg font-normal leading-snug text-primary md:text-md">
												<Link href={`/articles/${post.slug}`} className="hover:text-brand-600 transition duration-100 ease-linear">
													{post.title}
												</Link>
											</h2>
											{post.excerpt && (
												<p className="mt-2 text-sm leading-relaxed text-tertiary line-clamp-2">{post.excerpt}</p>
											)}
										</div>
									</article>
								))}
							</div>
						)}
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
}
