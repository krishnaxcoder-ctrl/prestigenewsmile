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
		image: "/RADIANCE SESSION.png",
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
		image: "/COMPLETE TREATMENT.avif",
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
		image: "https://images.unsplash.com/photo-1445527815219-ecbfec67492e?q=80&w=2070&auto=format&fit=crop",
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
			<main className="mx-auto overflow-x-hidden bg-primary">
				{/* Hero Header */}
				<section className="border-b border-brand-400 bg-brand-50 px-4 py-8 md:px-8 md:py-10 lg:px-16">
					<div>
						<nav className="mb-3 flex items-center gap-2 text-sm text-tertiary">
							<a href="/" className="uppercase transition hover:text-brand-600">Home</a>
							<span>/</span>
							<span className="uppercase text-brand-600">Services</span>
						</nav>
						<h1 className="text-2xl font-semibold uppercase text-primary md:text-3xl">
							Our <span className="text-brand-600">Services</span>
						</h1>
						<p className="mt-3 text-base text-tertiary md:text-lg">
							Professional teeth whitening treatments tailored to your needs. Safe, effective, and visible results from the very first session.
						</p>
					</div>
				</section>

				{/* Services */}
				<div className="px-4  max-w-7xl mx-auto py-10 md:px-8 md:py-10 lg:px-0">
					<div className="space-y-16 md:space-y-20">
						{services.map((service, index) => (
							<section key={service.id} id={service.id} className="scroll-mt-24">
								{/* Service Header */}
								<div className="mb-8 md:mb-14">
									<span className="inline-block rounded-full bg-brand-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-brand-700 md:px-4 md:py-1.5 md:text-xs">
										{service.subtitle}
									</span>
									<h2
										className="mt-3 text-2xl font-light text-primary md:mt-4 md:text-4xl lg:text-5xl"
										style={{ fontFamily: "'Cormorant Garamond', serif" }}
									>
										{service.title}
									</h2>
									
								</div>

								{/* Image + Details */}
								<div className={`grid items-start gap-8 lg:grid-cols-2 lg:gap-16`}>
									{/* Service Image */}
									<div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
										<div className="overflow-hidden rounded-xl md:rounded-2xl">
											<img
												src={service.image}
												alt={service.title}
												className="aspect-[3/4] w-full object-cover"
											/>
										</div>
									</div>

									{/* Details */}
									<div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
										<p className="text-sm leading-relaxed text-tertiary md:text-base">
											{service.description}
										</p>

										{/* Quick Stats */}
										<div className="mt-6 grid grid-cols-2 gap-3 md:mt-8 md:gap-4">
											<div className="rounded-lg bg-[#f8f6f4] p-3 md:rounded-xl md:p-4">
												<p className="text-[9px] font-semibold uppercase tracking-widest text-tertiary md:text-[10px]">Duration</p>
												<p className="mt-1 text-xs font-medium text-primary md:text-sm">{service.duration}</p>
											</div>
											<div className="rounded-lg bg-[#f8f6f4] p-3 md:rounded-xl md:p-4">
												<p className="text-[9px] font-semibold uppercase tracking-widest text-tertiary md:text-[10px]">Results</p>
												<p className="mt-1 text-xs font-medium text-primary md:text-sm">{service.shades}</p>
											</div>
										</div>

										{/* What's included */}
										<div className="mt-6 md:mt-8">
											<h3 className="text-xs font-semibold uppercase tracking-wider text-primary md:text-sm">What's Included</h3>
											<ul className="mt-3 space-y-2.5 md:mt-4 md:space-y-3">
												{service.includes.map((item, i) => (
													<li key={i} className="flex items-start gap-2.5 md:gap-3">
														<svg className="mt-0.5 size-3.5 flex-shrink-0 text-brand-600 md:size-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
															<path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
														</svg>
														<span className="text-xs text-tertiary md:text-sm">{item}</span>
													</li>
												))}
											</ul>
										</div>

										{/* Ideal for */}
										<div className="mt-6 rounded-lg border border-brand-200 bg-brand-50 p-4 md:mt-8 md:rounded-xl md:p-5">
											<p className="text-[10px] font-semibold uppercase tracking-wider text-brand-700 md:text-xs">Ideal For</p>
											<p className="mt-1.5 text-xs leading-relaxed text-brand-800 md:mt-2 md:text-sm">{service.idealFor}</p>
										</div>

										{/* CTA */}
										<div className="mt-6 flex flex-col gap-3 md:mt-8 sm:flex-row">
											<Link
												href="/booking"
												className="inline-flex items-center justify-center rounded-lg bg-brand-600 px-6 py-3 text-xs font-semibold text-white transition-colors hover:bg-brand-700 md:px-8 md:py-3.5 md:text-sm"
											>
												Book This Treatment
											</Link>
											<a
												href="tel:+41783000619"
												className="inline-flex items-center justify-center rounded-lg border border-secondary bg-white px-6 py-3 text-xs font-semibold text-primary transition-colors hover:bg-primary_hover md:px-8 md:py-3.5 md:text-sm"
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
					<section className="mt-16 md:mt-32">
						<div className="rounded-xl bg-[#f8f6f4] p-6 text-center md:rounded-2xl md:p-14">
							<span className="inline-block rounded-full bg-brand-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-brand-700 md:px-4 md:py-1.5 md:text-xs">
								Special Offer
							</span>
							<h2
								className="mt-3 text-2xl font-light text-primary md:mt-4 md:text-4xl"
								style={{ fontFamily: "'Cormorant Garamond', serif" }}
							>
								{duoOffer.title}
							</h2>
							<span className="mt-1 inline-block text-3xl font-light text-brand-600 md:text-5xl" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
								-{duoOffer.discount}
							</span>
							<p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-tertiary md:mt-4 md:text-base">
								{duoOffer.description}
							</p>
							<div className="mt-6 md:mt-8">
								<Link
									href="/booking"
									className="inline-flex items-center justify-center rounded-lg bg-brand-600 px-8 py-3 text-xs font-semibold text-white transition-colors hover:bg-brand-700 md:px-10 md:py-4 md:text-sm"
								>
									Book a Duo Session
								</Link>
							</div>
						</div>
					</section>

					{/* Payment & Info */}
					<section className="mt-10 text-center md:mt-16">
						<div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-xs text-tertiary md:gap-x-6 md:text-sm">
							<span>Payment accepted:</span>
							<span className="font-medium text-primary">Twint</span>
							<span className="text-secondary">•</span>
							<span className="font-medium text-primary">Revolut</span>
							<span className="text-secondary">•</span>
							<span className="font-medium text-primary">Cash</span>
						</div>
						<p className="mt-3 text-xs text-tertiary md:mt-4 md:text-sm">
							All treatments performed by certified professionals · EU-approved products · Individual results may vary
						</p>
					</section>
				</div>
			</main>
			<Footer />
		</>
	);
}
