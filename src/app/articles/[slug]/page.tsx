"use client";

import { useEffect, useState, use } from "react";
import Link from "next/link";
import { Header } from "@/app/components/header";
import { Footer } from "@/app/components/footer";
import { getPublishedBlogPostBySlug, getPublishedBlogPosts, type BlogPost, type BlogContentBlock } from "@/lib/supabase";

export default function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
	const { slug } = use(params);
	const [post, setPost] = useState<BlogPost | null>(null);
	const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
	const [loading, setLoading] = useState(true);
	const [notFound, setNotFound] = useState(false);

	useEffect(() => {
		async function load() {
			try {
				const data = await getPublishedBlogPostBySlug(slug);
				if (!data) {
					setNotFound(true);
					return;
				}
				setPost(data);

				// Set SEO meta tags dynamically
				document.title = data.seo_title || data.title;
				const metaDesc = document.querySelector('meta[name="description"]');
				if (metaDesc) {
					metaDesc.setAttribute("content", data.seo_description || data.excerpt || "");
				} else {
					const meta = document.createElement("meta");
					meta.name = "description";
					meta.content = data.seo_description || data.excerpt || "";
					document.head.appendChild(meta);
				}
				// Keywords
				if (data.seo_keywords?.length) {
					let metaKw = document.querySelector('meta[name="keywords"]');
					if (!metaKw) {
						metaKw = document.createElement("meta");
						metaKw.setAttribute("name", "keywords");
						document.head.appendChild(metaKw);
					}
					metaKw.setAttribute("content", data.seo_keywords.join(", "));
				}
				// OG tags
				setMetaProperty("og:title", data.seo_title || data.title);
				setMetaProperty("og:description", data.seo_description || data.excerpt || "");
				setMetaProperty("og:image", data.og_image || data.hero_image || "");
				setMetaProperty("og:type", "article");
				// Canonical
				if (data.canonical_url) {
					let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
					if (!link) {
						link = document.createElement("link");
						link.rel = "canonical";
						document.head.appendChild(link);
					}
					link.href = data.canonical_url;
				}

				// Load related posts (other published posts, excluding current)
				const allPosts = await getPublishedBlogPosts();
				setRelatedPosts(allPosts.filter((p) => p.slug !== slug).slice(0, 3));
			} catch {
				setNotFound(true);
			} finally {
				setLoading(false);
			}
		}
		load();
	}, [slug]);

	if (loading) {
		return (
			<>
				<Header />
				<div className="flex min-h-[60vh] items-center justify-center">
					<div className="size-8 animate-spin rounded-full border-2 border-brand-600 border-t-transparent" />
				</div>
				<Footer />
			</>
		);
	}

	if (notFound || !post) {
		return (
			<>
				<Header />
				<div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
					<h1 className="text-2xl font-light text-primary" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Article Not Found</h1>
					<p className="mt-2 text-sm text-tertiary">This article may have been removed or doesn&apos;t exist.</p>
					<Link href="/articles" className="mt-6 rounded-lg bg-brand-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-brand-700">
						View All Articles
					</Link>
				</div>
				<Footer />
			</>
		);
	}

	const contentBlocks = (post.content || []) as BlogContentBlock[];
	const initials = post.author_initials || post.author?.slice(0, 2).toUpperCase() || "PS";
	const publishedDate = post.published_at
		? new Date(post.published_at).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
		: "";

	return (
		<>
			<Header />
			<main>
				{/* JSON-LD Structured Data for SEO */}
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							"@context": "https://schema.org",
							"@type": "BlogPosting",
							headline: post.seo_title || post.title,
							description: post.seo_description || post.excerpt || "",
							image: post.og_image || post.hero_image || "",
							author: {
								"@type": "Organization",
								name: post.author,
							},
							datePublished: post.published_at,
							dateModified: post.updated_at,
							publisher: {
								"@type": "Organization",
								name: "Prestige Smile",
							},
							keywords: post.seo_keywords?.join(", ") || post.tags?.join(", ") || "",
						}),
					}}
				/>

				{/* Hero */}
				<section className="relative overflow-hidden bg-white">
					<div className="relative h-64 sm:h-80 lg:h-[420px] mx-auto">
						{post.hero_image && (
							<img
								src={post.hero_image}
								alt={post.title}
								className="absolute inset-0 h-full w-full object-cover"
							/>
						)}
						<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

						<div className="absolute left-0 top-0 p-4 sm:p-6 lg:p-8">
							<Link
								href="/articles"
								className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-medium text-white backdrop-blur-md transition-all hover:bg-white/20"
							>
								<svg className="size-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
								</svg>
								All Articles
							</Link>
						</div>

						<div className="absolute bottom-0 left-0 right-0 lg:py-20 max-w-7xl mx-auto p-4">
							<span className="rounded-full bg-brand-600 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
								{post.category}
							</span>
							<h1 className="mt-4 max-w-6xl text-2xl font-light text-white sm:text-3xl lg:text-4xl xl:text-5xl" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
								{post.title}
							</h1>
						</div>
					</div>
				</section>

				{/* Meta bar */}
				<section className="border-b border-secondary bg-white">
					<div className="mx-auto flex max-w-screen-2xl flex-wrap items-center gap-4 px-4 py-4 sm:gap-6 sm:px-6 lg:px-8">
						<div className="flex items-center gap-3">
							<div className="flex size-9 items-center justify-center rounded-full bg-brand-600 text-xs font-bold text-white">
								{initials}
							</div>
							<div>
								<p className="text-sm font-semibold text-primary">{post.author}</p>
								<p className="text-xs text-tertiary">{post.author_role || ""}</p>
							</div>
						</div>
						<div className="h-5 w-px bg-secondary" />
						<span className="flex items-center gap-1.5 text-xs text-tertiary">
							<svg className="size-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
							</svg>
							{publishedDate}
						</span>
						<span className="flex items-center gap-1.5 text-xs text-tertiary">
							<svg className="size-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
							</svg>
							{post.read_time || "5 min read"}
						</span>
						{post.tags && post.tags.length > 0 && (
							<>
								<div className="h-5 w-px bg-secondary" />
								<div className="flex flex-wrap gap-1.5">
									{post.tags.map((tag) => (
										<span key={tag} className="rounded-full bg-brand-50 px-2 py-0.5 text-xs font-medium text-brand-700">
											{tag}
										</span>
									))}
								</div>
							</>
						)}
					</div>
				</section>

				{/* Content */}
				<section className="bg-white py-12 sm:py-8">
					<div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
						<div className="grid gap-10 lg:grid-cols-[1fr_360px]">
							{/* Article */}
							<article className="min-w-0 space-y-6">
								{contentBlocks.map((block, i) => {
									if (block.type === "heading") {
										return (
											<h2
												key={i}
												className="mt-10 text-xl font-normal tracking-tight text-primary first:mt-0 sm:text-2xl"
												style={{ fontFamily: "'Cormorant Garamond', serif" }}
											>
												{block.text}
											</h2>
										);
									}
									if (block.type === "list") {
										return (
											<ul key={i} className="space-y-2.5">
												{block.text && <p className="text-sm font-semibold text-primary">{block.text}</p>}
												{block.items?.map((item, j) => (
													<li key={j} className="flex items-start gap-3">
														<svg className="mt-0.5 size-4 flex-shrink-0 text-brand-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
															<path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
														</svg>
														<span className="text-base leading-relaxed text-tertiary">{item}</span>
													</li>
												))}
											</ul>
										);
									}
									if (block.type === "callout") {
										return (
											<div key={i} className="rounded-2xl border border-brand-200 bg-brand-50 p-6">
												<div className="flex items-start gap-3">
													<svg className="mt-0.5 size-5 flex-shrink-0 text-brand-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
														<path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
													</svg>
													<p className="text-sm leading-relaxed text-brand-800">{block.text}</p>
												</div>
											</div>
										);
									}
									return (
										<p key={i} className="text-base leading-relaxed text-tertiary">
											{block.text}
										</p>
									);
								})}
							</article>

							{/* Sidebar */}
							<aside className="lg:sticky lg:top-8 lg:self-start">
								<div className="space-y-6">
									{/* Author card */}
									<div className="rounded-2xl border border-secondary bg-white p-6 shadow-sm">
										<p className="text-xs font-semibold uppercase tracking-wider text-tertiary">Written by</p>
										<div className="mt-3 flex items-center gap-3">
											<div className="flex size-11 items-center justify-center rounded-full bg-brand-600 text-sm font-bold text-white">
												{initials}
											</div>
											<div>
												<p className="text-sm font-semibold text-primary">{post.author}</p>
												<p className="text-xs text-tertiary">{post.author_role || ""}</p>
											</div>
										</div>
									</div>

									{/* CTA */}
									<div className="rounded-2xl border border-secondary bg-[#faf8f5] p-6 text-center shadow-sm">
										<h3 className="text-xl font-normal text-primary" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
											Ready for a brighter <span className="font-medium italic text-brand-600">smile</span>?
										</h3>
										<p className="mt-2 text-sm text-tertiary">
											Book your professional whitening session at Prestige Smile today.
										</p>
										<div className="mt-5 flex flex-col gap-3">
											<Link
												href="/booking"
												className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-600 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
											>
												Book a Session
											</Link>
											<a
												href="tel:+41783000619"
												className="inline-flex items-center justify-center gap-2 rounded-lg border border-secondary bg-white px-6 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary_hover"
											>
												<svg className="size-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
													<path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
												</svg>
												+41 78 300 06 19
											</a>
										</div>
									</div>

									{/* Related posts */}
									{relatedPosts.length > 0 && (
										<div className="rounded-2xl border border-secondary bg-white p-6 shadow-sm">
											<p className="text-xs font-semibold uppercase tracking-wider text-tertiary">Related Articles</p>
											<div className="mt-4 space-y-4">
												{relatedPosts.map((rp) => (
													<Link key={rp.slug} href={`/articles/${rp.slug}`} className="group block">
														<span className="text-xs font-semibold text-brand-600">{rp.category}</span>
														<p className="mt-0.5 text-sm font-semibold leading-snug text-primary transition-colors group-hover:text-brand-600 line-clamp-2">
															{rp.title}
														</p>
														<span className="mt-1 flex items-center gap-1 text-xs text-tertiary">
															<svg className="size-3" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
																<path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
															</svg>
															{rp.read_time || "5 min read"}
														</span>
													</Link>
												))}
											</div>
										</div>
									)}
								</div>
							</aside>
						</div>
					</div>
				</section>

				{/* Related Posts Grid */}
				{relatedPosts.length > 0 && (
					<section className="border-t border-secondary bg-[#faf8f5] py-16 sm:py-6">
						<div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
							<div className="text-center">
								<h2 className="text-2xl font-normal tracking-tight text-primary sm:text-3xl" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
									Related <span className="font-medium italic text-brand-600">Articles</span>
								</h2>
							</div>

							<div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
								{relatedPosts.map((rp) => (
									<Link key={rp.slug} href={`/articles/${rp.slug}`}>
										<div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-secondary bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
											<div className="flex flex-1 flex-col p-6">
												<span className="inline-flex w-fit items-center rounded-full bg-brand-50 px-2.5 py-0.5 text-xs font-semibold text-brand-600 ring-1 ring-brand-100">
													{rp.category}
												</span>
												<h3 className="mt-3 text-base font-semibold leading-snug text-primary transition-colors duration-300 group-hover:text-brand-600 line-clamp-2">
													{rp.title}
												</h3>
												<div className="mt-auto flex items-center gap-3 pt-5 text-xs text-tertiary">
													<span>{rp.author}</span>
													<span className="flex items-center gap-1">
														<svg className="size-3" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
															<path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
														</svg>
														{rp.read_time || "5 min read"}
													</span>
												</div>
											</div>
											<div className="h-1 w-full bg-gradient-to-r from-brand-400 via-brand-500 to-brand-600 opacity-0 transition-all duration-300 group-hover:opacity-100" />
										</div>
									</Link>
								))}
							</div>
						</div>
					</section>
				)}
			</main>
			<Footer />
		</>
	);
}

function setMetaProperty(property: string, content: string) {
	if (!content) return;
	let meta = document.querySelector(`meta[property="${property}"]`);
	if (!meta) {
		meta = document.createElement("meta");
		meta.setAttribute("property", property);
		document.head.appendChild(meta);
	}
	meta.setAttribute("content", content);
}
