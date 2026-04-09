import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/app/components/header";
import { Footer } from "@/app/components/footer";

const blogPosts: Record<
	string,
	{
		title: string;
		category: string;
		date: string;
		readTime: string;
		author: string;
		authorRole: string;
		authorInitials: string;
		heroImage: string;
		content: { type: "paragraph" | "heading" | "list" | "callout"; text: string; items?: string[] }[];
		relatedSlugs: string[];
	}
> = {
	"brighter-smile-tips": {
		title: "10 Tips for a Brighter, Whiter Smile",
		category: "Whitening",
		date: "Jan 15, 2026",
		readTime: "8 min read",
		author: "Prestige Smile",
		authorRole: "Dental Aesthetics Team",
		authorInitials: "PS",
		heroImage: "https://mp-cms.medparkhospital.com/assets/bb4a30f0-af60-44ab-99cf-6a8ab20d016f/zoom-banner-1.jpeg",
		content: [
			{ type: "paragraph", text: "A bright, white smile can boost your confidence and make a lasting first impression. Whether you're preparing for a special event or simply want to enhance your everyday look, these expert tips will help you achieve and maintain a radiant smile." },
			{ type: "heading", text: "1. Schedule a Professional Whitening Session" },
			{ type: "paragraph", text: "Nothing beats the results of a professional teeth whitening treatment. At Prestige Smile, our LED-accelerated whitening sessions can brighten your teeth by several shades in just one visit. Professional treatments are safer and more effective than over-the-counter products." },
			{ type: "heading", text: "2. Brush Twice Daily with Whitening Toothpaste" },
			{ type: "paragraph", text: "Use a whitening toothpaste with gentle abrasives and hydrogen peroxide. Brush for at least two minutes, covering all surfaces of your teeth. An electric toothbrush can provide more consistent cleaning than manual brushing." },
			{ type: "heading", text: "3. Avoid Staining Foods and Drinks" },
			{ type: "list", text: "", items: [
				"Coffee and tea — the tannins cling to tooth enamel and cause yellowing",
				"Red wine — one of the most common culprits for tooth stains",
				"Dark berries and sauces (soy sauce, balsamic vinegar, tomato sauce)",
				"Curry and turmeric-based dishes",
				"Sugary sodas and energy drinks that erode enamel",
			] },
			{ type: "heading", text: "4. Drink Through a Straw" },
			{ type: "paragraph", text: "When you do enjoy staining beverages, using a straw minimises contact with your teeth. This simple habit can significantly reduce surface staining over time." },
			{ type: "heading", text: "5. Rinse After Eating" },
			{ type: "paragraph", text: "Swish water around your mouth after meals to wash away food particles and acids. Wait 30 minutes before brushing to avoid damaging softened enamel." },
			{ type: "heading", text: "6. Don't Skip Flossing" },
			{ type: "paragraph", text: "Flossing removes plaque and staining particles between teeth that your toothbrush can't reach. Floss at least once a day for the best results." },
			{ type: "heading", text: "7. Quit Smoking" },
			{ type: "paragraph", text: "Tobacco is one of the worst offenders for tooth discolouration. The tar and nicotine in cigarettes cause stubborn yellow and brown stains that are difficult to remove even with professional cleaning." },
			{ type: "heading", text: "8. Eat Crunchy Fruits and Vegetables" },
			{ type: "paragraph", text: "Apples, celery, carrots, and raw cauliflower act as natural tooth scrubbers. Their crisp texture helps remove surface stains and stimulates saliva production, which naturally cleanses your mouth." },
			{ type: "heading", text: "9. Schedule Regular Touch-Up Sessions" },
			{ type: "callout", text: "At Prestige Smile, we recommend a professional touch-up session every 6 to 12 months to maintain your results. Our team will assess your teeth and recommend the ideal frequency based on your lifestyle and habits." },
			{ type: "heading", text: "10. Stay Hydrated" },
			{ type: "paragraph", text: "Drinking plenty of water throughout the day helps keep your mouth clean and supports saliva production. Saliva is your body's natural defence against staining and tooth decay." },
			{ type: "paragraph", text: "A brighter smile is within reach. Combine these daily habits with professional whitening treatments at Prestige Smile for the best, longest-lasting results." },
		],
		relatedSlugs: ["whitening-session-guide", "maintain-results", "professional-vs-home"],
	},
	"whitening-session-guide": {
		title: "What to Expect During Your Whitening Session",
		category: "Guide",
		date: "Jan 12, 2026",
		readTime: "6 min read",
		author: "Prestige Smile",
		authorRole: "Dental Aesthetics Team",
		authorInitials: "PS",
		heroImage: "https://mp-cms.medparkhospital.com/assets/7988113b-562a-4f03-94bc-e106ca849e75",
		content: [
			{ type: "paragraph", text: "If you're considering a professional teeth whitening treatment, you might be wondering what the experience is actually like. At Prestige Smile, we want you to feel fully informed and comfortable before your visit. Here's a step-by-step guide to what happens during a whitening session." },
			{ type: "heading", text: "Before Your Appointment" },
			{ type: "list", text: "", items: [
				"Brush and floss your teeth normally before arriving",
				"Avoid very hot or cold foods if you have sensitive teeth",
				"Let us know about any dental work (crowns, veneers, fillings) as these won't whiten",
				"Come with clean, makeup-free lips for the best results",
			] },
			{ type: "heading", text: "Step 1: Consultation and Shade Assessment" },
			{ type: "paragraph", text: "Your session begins with a brief consultation. Our specialist will examine your teeth, discuss your whitening goals, and take a shade reading so you can see your before-and-after results clearly." },
			{ type: "heading", text: "Step 2: Preparation" },
			{ type: "paragraph", text: "We apply a protective barrier to your gums to shield them from the whitening gel. A comfortable lip retractor is placed to keep your mouth open and your teeth accessible throughout the treatment." },
			{ type: "heading", text: "Step 3: Whitening Gel Application" },
			{ type: "paragraph", text: "A professional-grade hydrogen peroxide or carbamide peroxide gel is carefully applied to each tooth. This gel breaks down stains at a molecular level, penetrating the enamel to lift discolouration from within." },
			{ type: "heading", text: "Step 4: LED Light Activation" },
			{ type: "paragraph", text: "Our advanced LED light is positioned over your teeth to accelerate the whitening process. The light activates the gel, allowing it to work faster and more effectively. Each light cycle typically lasts 15 to 20 minutes." },
			{ type: "callout", text: "Most clients relax, listen to music, or simply rest during the LED cycles. The treatment is completely painless for the vast majority of people." },
			{ type: "heading", text: "Step 5: Results and Aftercare" },
			{ type: "paragraph", text: "After the final cycle, we remove the gel and protective barriers. You'll immediately see a noticeable difference in your smile. We'll take a final shade reading and provide you with aftercare instructions to maximise the longevity of your results." },
			{ type: "heading", text: "How Long Does It Take?" },
			{ type: "paragraph", text: "A full whitening session at Prestige Smile takes approximately 60 to 90 minutes. You'll walk out with a visibly brighter smile in just one visit — no multiple appointments required." },
			{ type: "heading", text: "Is It Safe?" },
			{ type: "paragraph", text: "Absolutely. Professional teeth whitening is one of the safest cosmetic dental procedures when performed by trained specialists. Our products are EU-approved and our team follows strict safety protocols to protect your teeth and gums." },
		],
		relatedSlugs: ["brighter-smile-tips", "maintain-results", "professional-vs-home"],
	},
	"maintain-results": {
		title: "How to Maintain Your Results After Treatment",
		category: "Aftercare",
		date: "Jan 10, 2026",
		readTime: "5 min read",
		author: "Prestige Smile",
		authorRole: "Dental Aesthetics Team",
		authorInitials: "PS",
		heroImage: "https://mp-cms.medparkhospital.com/assets/56b474a5-973a-468a-853c-a856f04f6060",
		content: [
			{ type: "paragraph", text: "Congratulations on your brighter smile! A professional whitening treatment delivers impressive results, but how long those results last depends largely on your aftercare routine. Follow these guidelines to keep your teeth looking their best for as long as possible." },
			{ type: "heading", text: "The First 48 Hours Are Critical" },
			{ type: "paragraph", text: "Right after your whitening treatment, your teeth are more porous and susceptible to staining. The first 48 hours are the most important period for protecting your results." },
			{ type: "heading", text: "The White Diet: What to Eat and Avoid" },
			{ type: "paragraph", text: "For the first 48 hours after treatment, stick to white or light-coloured foods and drinks. This is sometimes called the 'white diet'." },
			{ type: "list", text: "Foods to enjoy:", items: [
				"White rice, pasta, and bread",
				"Chicken, fish, and egg whites",
				"Bananas, apples (peeled), and pears",
				"Milk, water, and clear/white drinks",
				"Plain yoghurt and white cheese",
			] },
			{ type: "list", text: "Foods to avoid:", items: [
				"Coffee, tea, and red wine",
				"Dark sauces (soy, tomato, balsamic)",
				"Berries, beetroot, and dark fruits",
				"Coloured sweets and fizzy drinks",
				"Tobacco products of any kind",
			] },
			{ type: "heading", text: "Long-Term Maintenance Tips" },
			{ type: "list", text: "", items: [
				"Brush twice daily with a whitening toothpaste",
				"Floss daily to prevent plaque build-up between teeth",
				"Use a straw for coffee, tea, and other staining drinks",
				"Rinse your mouth with water after consuming staining foods",
				"Visit your dentist for regular cleanings every 6 months",
				"Avoid smoking — it's the fastest way to undo your results",
			] },
			{ type: "heading", text: "When to Schedule a Touch-Up" },
			{ type: "callout", text: "We recommend a professional touch-up every 6 to 12 months, depending on your diet and lifestyle. Book your next session at Prestige Smile to keep your smile at its brightest. Call us at +41 78 300 06 19 or book online." },
			{ type: "heading", text: "How Long Do Results Last?" },
			{ type: "paragraph", text: "With proper care, professional whitening results can last anywhere from 6 months to 2 years. Lifestyle factors like diet, smoking, and oral hygiene habits play the biggest role in how quickly stains return." },
			{ type: "paragraph", text: "Your smile is an investment — protect it with good habits and regular professional care. At Prestige Smile, we're here to help you maintain your results for the long term." },
		],
		relatedSlugs: ["brighter-smile-tips", "whitening-session-guide", "professional-vs-home"],
	},
	"professional-vs-home": {
		title: "Professional vs At-Home Whitening: The Truth",
		category: "FAQ",
		date: "Jan 8, 2026",
		readTime: "7 min read",
		author: "Prestige Smile",
		authorRole: "Dental Aesthetics Team",
		authorInitials: "PS",
		heroImage: "https://mp-cms.medparkhospital.com/assets/fd8a0998-0ee8-4657-a6db-d92f0c167b13",
		content: [
			{ type: "paragraph", text: "With so many whitening products available — from strips and trays to charcoal powders and LED kits — it can be hard to know which option is right for you. Let's break down the key differences between professional in-studio whitening and at-home alternatives." },
			{ type: "heading", text: "Professional Whitening: The Gold Standard" },
			{ type: "paragraph", text: "Professional teeth whitening performed by trained specialists uses higher-concentration whitening agents combined with advanced LED technology. This combination delivers dramatic results in a single session that at-home products simply cannot match." },
			{ type: "list", text: "Advantages of professional whitening:", items: [
				"Results visible immediately — teeth can lighten several shades in one session",
				"Higher-concentration gels that are only available to professionals",
				"Custom application ensures even, consistent whitening across all teeth",
				"Gum protection applied before treatment to prevent sensitivity",
				"Supervised by trained specialists who can adjust the treatment to your needs",
				"Safe, EU-approved products and equipment",
			] },
			{ type: "heading", text: "At-Home Whitening Products" },
			{ type: "paragraph", text: "Over-the-counter whitening products have improved over the years, but they come with significant limitations compared to professional treatments." },
			{ type: "list", text: "Common at-home options:", items: [
				"Whitening strips — low-concentration peroxide, results take 1 to 2 weeks",
				"Whitening toothpaste — removes surface stains only, doesn't change tooth colour",
				"Charcoal products — can actually damage enamel with excessive use",
				"At-home LED kits — much weaker light and gel than professional systems",
				"Custom trays from a dentist — effective but slower than in-studio treatment",
			] },
			{ type: "heading", text: "The Key Differences" },
			{ type: "list", text: "", items: [
				"Strength: professional gels contain up to 6% hydrogen peroxide (EU limit), while most OTC products contain under 0.1%",
				"Speed: one professional session vs. weeks of daily at-home application",
				"Safety: professional treatment includes gum protection and expert supervision",
				"Consistency: professional application ensures even results; strips and trays often miss spots",
				"Longevity: professional results typically last 6 to 24 months vs. a few weeks for most OTC products",
			] },
			{ type: "heading", text: "What About Sensitivity?" },
			{ type: "paragraph", text: "Tooth sensitivity is the most common concern with whitening. Professional treatments actually tend to cause less sensitivity than many at-home products because the application is controlled, timed precisely, and includes desensitising agents. At-home overuse of strips or trays is a common cause of unnecessary sensitivity." },
			{ type: "callout", text: "At Prestige Smile, we use gentle, EU-approved whitening gels with built-in desensitising agents. If you have sensitive teeth, let us know — we'll tailor the treatment to ensure your comfort." },
			{ type: "heading", text: "The Verdict" },
			{ type: "paragraph", text: "At-home products can help maintain results between professional sessions, but they're no substitute for the real thing. If you want safe, fast, and dramatic whitening results, a professional session at Prestige Smile is the way to go." },
			{ type: "paragraph", text: "Ready to see the difference for yourself? Book your whitening session today and experience the Prestige Smile difference." },
		],
		relatedSlugs: ["brighter-smile-tips", "whitening-session-guide", "maintain-results"],
	},
};

const allPostsMeta = Object.entries(blogPosts).map(([slug, post]) => ({
	slug,
	title: post.title,
	category: post.category,
	date: post.date,
	readTime: post.readTime,
	author: post.author,
}));

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params;
	const post = blogPosts[slug];

	if (!post) {
		notFound();
	}

	const relatedPosts = post.relatedSlugs
		.map((s) => {
			const p = blogPosts[s];
			return p ? { slug: s, title: p.title, category: p.category, readTime: p.readTime, author: p.author, date: p.date } : null;
		})
		.filter(Boolean) as { slug: string; title: string; category: string; readTime: string; author: string; date: string }[];

	return (
		<>
			<Header />
			<main>
				{/* Hero */}
				<section className="relative overflow-hidden bg-white">
					<div className="relative h-64 sm:h-80 lg:h-[420px]  mx-auto">
						<img
							src={post.heroImage}
							alt={post.title}
							className="absolute inset-0 h-full w-full object-cover"
						/>
						<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

						{/* Back button */}
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

						{/* Category + title */}
						<div className="absolute bottom-0 left-0 right-0   lg:py-20 max-w-7xl mx-auto p-4" >
							<span className="rounded-full bg-brand-600 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
								{post.category}
							</span>
							<h1 className="mt-4 max-w-6xl text-2xl font-light text-white sm:text-3xl lg:text-4xl xl:text-5xl " style={{ fontFamily: "'Cormorant Garamond', serif" }}>
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
								{post.authorInitials}
							</div>
							<div>
								<p className="text-sm font-semibold text-primary">{post.author}</p>
								<p className="text-xs text-tertiary">{post.authorRole}</p>
							</div>
						</div>
						<div className="h-5 w-px bg-secondary" />
						<span className="flex items-center gap-1.5 text-xs text-tertiary">
							<svg className="size-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
							</svg>
							{post.date}
						</span>
						<span className="flex items-center gap-1.5 text-xs text-tertiary">
							<svg className="size-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
							</svg>
							{post.readTime}
						</span>
					</div>
				</section>

				{/* Content */}
				<section className="bg-white py-12 sm:py-8">
					<div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
						<div className="grid gap-10 lg:grid-cols-[1fr_360px]">
							{/* Article */}
							<article className="min-w-0 space-y-6">
								{post.content.map((block, i) => {
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
												{post.authorInitials}
											</div>
											<div>
												<p className="text-sm font-semibold text-primary">{post.author}</p>
												<p className="text-xs text-tertiary">{post.authorRole}</p>
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
															{rp.readTime}
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
														{rp.readTime}
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
