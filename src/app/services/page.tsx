import Link from "next/link";
import { Header } from "@/app/components/header";
import { Footer } from "@/app/components/footer";

const services = [
	{
		id: "single-session",
		title: "Initial Teeth Whitening Session",
		subtitle: "1 Session",
		price: "99",
		currency: "CHF/€",
		duration: "60 minutes",
		shades: "Up to 7 shades lighter",
		description:
			"Our signature single session treatment is perfect for a first whitening experience. Using professional-grade LED technology and EU-approved whitening gels, we deliver visible results from the very first appointment. Ideal for those looking to brighten their smile quickly and safely.",
		includes: [
			"Initial consultation and shade assessment",
			"Gum protection application",
			"Professional whitening gel application",
			"LED light activation (3 cycles of 15–20 min)",
			"Post-treatment shade comparison",
			"Personalised aftercare advice",
		],
		idealFor: "First-time clients, special events, or anyone wanting a noticeable improvement in a single visit.",
		before: "/before and after images/1.jpg",
		after: "/before and after images/2.png",
		before2: "/before and after images/7.jpg",
		after2: "/before and after images/8.jpg",
	},
	{
		id: "complete-treatment",
		title: "Complete Treatment",
		subtitle: "2 Sessions",
		price: "169",
		currency: "CHF/€",
		duration: "2 × 60 minutes (spaced 48h apart)",
		shades: "Up to 9+ shades lighter",
		description:
			"Our most comprehensive whitening programme, designed for deeper discolouration or those seeking maximum results. Two sessions spaced 48 hours apart allow the whitening agents to work progressively, delivering intensified lightening with longer-lasting results.",
		includes: [
			"Two full whitening sessions (48h apart)",
			"Initial consultation and shade assessment",
			"Gum protection at each session",
			"Professional whitening gel application × 2",
			"LED light activation × 2 (3 cycles per session)",
			"Progress tracking between sessions",
			"Comprehensive aftercare plan",
		],
		idealFor: "Clients with darker teeth, heavy staining from coffee/tea/smoking, or those wanting the most dramatic transformation.",
		before: "/before and after images/5.jpg",
		after: "/before and after images/6.png",
		before2: "/before and after images/9.png",
		after2: "/before and after images/10.png",
	},
	{
		id: "maintenance",
		title: "Maintenance Session (Touch-up)",
		subtitle: "Touch-up",
		price: "79",
		currency: "CHF/€",
		duration: "45 minutes",
		shades: "Restore original brightness",
		description:
			"Keep your smile at its brightest with regular maintenance sessions. Recommended approximately 6 months after your initial treatment, the touch-up session revives the radiance of your smile and prolongs your whitening results over time.",
		includes: [
			"Shade check and progress assessment",
			"Gum protection application",
			"Professional whitening gel application",
			"LED light activation (2 cycles of 15–20 min)",
			"Updated aftercare recommendations",
		],
		idealFor: "Existing clients who want to maintain their results. Recommended every 6–12 months depending on lifestyle.",
		before: "/before and after images/11.webp",
		after: "/before and after images/12.webp",
		before2: "/before and after images/13.jpg",
		after2: "/before and after images/14.jpg",
	},
];

const duoOffer = {
	title: "Duo / Couple Offer",
	discount: "10%",
	description:
		"Share the experience with a friend, partner, or family member. Book two sessions together and enjoy 10% off for both. A brighter smile is always better when shared.",
};

export default function ServicesPage() {
	return (
		<>
			<Header />
			<main className="bg-primary">
				{/* Hero Header */}
				<section className="border-b border-brand-400 bg-brand-50 px-4 py-12 md:px-8 md:py-10 lg:px-16">
					<div className="mx-auto max-w-7xl">
						<nav className="mb-4 flex items-center gap-2 text-sm text-tertiary">
							<a href="/" className="uppercase transition hover:text-brand-600">Home</a>
							<span>/</span>
							<span className="uppercase text-brand-600">Services</span>
						</nav>
						<div className="max-w-3xl">
							<h1 className="text-2xl font-semibold uppercase text-primary md:text-3xl">
								Our <span className="text-brand-600">Services</span>
							</h1>
							<p className="mt-4 text-lg text-tertiary">
								Professional teeth whitening treatments tailored to your needs. Safe, effective, and visible results from the very first session.
							</p>
						</div>
					</div>
				</section>

				{/* Services */}
				<div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24 lg:px-16">
					<div className="space-y-24 md:space-y-32">
						{services.map((service, index) => (
							<section key={service.id} id={service.id} className="scroll-mt-24">
								{/* Service Header */}
								<div className="mb-10 text-center md:mb-14">
									<span className="inline-block rounded-full bg-brand-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-700">
										{service.subtitle}
									</span>
									<h2
										className="mt-4 text-3xl font-light text-primary md:text-4xl lg:text-5xl"
										style={{ fontFamily: "'Cormorant Garamond', serif" }}
									>
										{service.title}
									</h2>
									<div className="mt-4 flex items-center justify-center gap-6">
										<span className="text-2xl font-light text-primary md:text-3xl" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
											{service.price} <span className="text-lg text-tertiary">{service.currency}</span>
										</span>
									</div>
									{/* Divider */}
									<div className="mt-6 flex items-center justify-center gap-4">
										<div className="h-px w-16 bg-gradient-to-r from-transparent via-brand-600/30 to-brand-600/50 md:w-24" />
										<div className="size-2 rotate-45 border border-brand-600/60" />
										<div className="h-px w-16 bg-gradient-to-l from-transparent via-brand-600/30 to-brand-600/50 md:w-24" />
									</div>
								</div>

								{/* Before/After + Details Grid */}
								<div className={`grid items-start gap-10 lg:grid-cols-2 lg:gap-16 ${index % 2 === 1 ? "lg:direction-rtl" : ""}`}>
									{/* Before/After Images */}
									<div className={`space-y-6 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
										{/* First pair */}
										<div className="relative grid grid-cols-2 overflow-hidden rounded-2xl">
											<div className="relative">
												<img src={service.before} alt="Before treatment" className="aspect-[3/4] w-full object-cover" />
												<span className="absolute left-3 top-3 rounded bg-black/50 px-2.5 py-1 text-[10px] font-medium uppercase tracking-widest text-white backdrop-blur-sm">
													Before
												</span>
											</div>
											<div className="relative">
												<img src={service.after} alt="After treatment" className="aspect-[3/4] w-full object-cover" />
												<span className="absolute left-3 top-3 rounded bg-brand-600 px-2.5 py-1 text-[10px] font-medium uppercase tracking-widest text-white">
													After
												</span>
											</div>
											{/* Center line */}
											<div className="absolute inset-y-0 left-1/2 w-0.5 -translate-x-1/2 bg-white/80" />
											<div className="absolute left-1/2 top-1/2 flex size-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-brand-600 bg-white text-xs text-brand-600 shadow-md">
												↔
											</div>
										</div>

										{/* Second pair */}
										<div className="relative grid grid-cols-2 overflow-hidden rounded-2xl">
											<div className="relative">
												<img src={service.before2} alt="Before treatment" className="aspect-[3/4] w-full object-cover" />
												<span className="absolute left-3 top-3 rounded bg-black/50 px-2.5 py-1 text-[10px] font-medium uppercase tracking-widest text-white backdrop-blur-sm">
													Before
												</span>
											</div>
											<div className="relative">
												<img src={service.after2} alt="After treatment" className="aspect-[3/4] w-full object-cover" />
												<span className="absolute left-3 top-3 rounded bg-brand-600 px-2.5 py-1 text-[10px] font-medium uppercase tracking-widest text-white">
													After
												</span>
											</div>
											<div className="absolute inset-y-0 left-1/2 w-0.5 -translate-x-1/2 bg-white/80" />
											<div className="absolute left-1/2 top-1/2 flex size-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-brand-600 bg-white text-xs text-brand-600 shadow-md">
												↔
											</div>
										</div>
									</div>

									{/* Details */}
									<div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
										<p className="text-base leading-relaxed text-tertiary">
											{service.description}
										</p>

										{/* Quick Stats */}
										<div className="mt-8 grid grid-cols-2 gap-4">
											<div className="rounded-xl bg-[#f8f6f4] p-4">
												<p className="text-[10px] font-semibold uppercase tracking-widest text-tertiary">Duration</p>
												<p className="mt-1 text-sm font-medium text-primary">{service.duration}</p>
											</div>
											<div className="rounded-xl bg-[#f8f6f4] p-4">
												<p className="text-[10px] font-semibold uppercase tracking-widest text-tertiary">Results</p>
												<p className="mt-1 text-sm font-medium text-primary">{service.shades}</p>
											</div>
										</div>

										{/* What's included */}
										<div className="mt-8">
											<h3 className="text-sm font-semibold uppercase tracking-wider text-primary">What's Included</h3>
											<ul className="mt-4 space-y-3">
												{service.includes.map((item, i) => (
													<li key={i} className="flex items-start gap-3">
														<svg className="mt-0.5 size-4 flex-shrink-0 text-brand-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
															<path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
														</svg>
														<span className="text-sm text-tertiary">{item}</span>
													</li>
												))}
											</ul>
										</div>

										{/* Ideal for */}
										<div className="mt-8 rounded-xl border border-brand-200 bg-brand-50 p-5">
											<p className="text-xs font-semibold uppercase tracking-wider text-brand-700">Ideal For</p>
											<p className="mt-2 text-sm leading-relaxed text-brand-800">{service.idealFor}</p>
										</div>

										{/* CTA */}
										<div className="mt-8 flex flex-col gap-3 sm:flex-row">
											<Link
												href="/booking"
												className="inline-flex items-center justify-center rounded-lg bg-brand-600 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
											>
												Book This Treatment
											</Link>
											<a
												href="tel:+41783000619"
												className="inline-flex items-center justify-center rounded-lg border border-secondary bg-white px-8 py-3.5 text-sm font-semibold text-primary transition-colors hover:bg-primary_hover"
											>
												Call +41 78 300 06 19
											</a>
										</div>
									</div>
								</div>
							</section>
						))}
					</div>

					{/* Duo Offer */}
					<section className="mt-24 md:mt-32">
						<div className="rounded-2xl bg-[#f8f6f4] p-8 text-center md:p-14">
							<span className="inline-block rounded-full bg-brand-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-700">
								Special Offer
							</span>
							<h2
								className="mt-4 text-3xl font-light text-primary md:text-4xl"
								style={{ fontFamily: "'Cormorant Garamond', serif" }}
							>
								{duoOffer.title}
							</h2>
							<div className="mx-auto mt-2 flex items-center justify-center">
								<span className="text-4xl font-light text-brand-600 md:text-5xl" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
									-{duoOffer.discount}
								</span>
							</div>
							<p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-tertiary">
								{duoOffer.description}
							</p>
							<div className="mt-8">
								<Link
									href="/booking"
									className="inline-flex items-center justify-center rounded-lg bg-brand-600 px-10 py-4 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
								>
									Book a Duo Session
								</Link>
							</div>
						</div>
					</section>

					{/* Payment & Info */}
					<section className="mt-16 text-center">
						<div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-tertiary">
							<span>Payment accepted:</span>
							<span className="font-medium text-primary">Twint</span>
							<span className="text-secondary">•</span>
							<span className="font-medium text-primary">Revolut</span>
							<span className="text-secondary">•</span>
							<span className="font-medium text-primary">Cash</span>
						</div>
						<p className="mt-4 text-sm text-tertiary">
							All treatments performed by certified professionals · EU-approved products · Individual results may vary
						</p>
					</section>
				</div>
			</main>
			<Footer />
		</>
	);
}
