"use client";

const priceItems = [
	{
		id: 1,
		name: "Séance de blanchiment dentaire",
		tagline: "Initial whitening session",
		price: "99",
		currency: "CHF / €",
		highlighted: true,
		badge: "Most Requested",
	},
	{
		id: 2,
		name: "Traitement complet",
		tagline: "2 séances",
		price: "169",
		currency: "CHF / €",
		premium: true,
	},
	{
		id: 3,
		name: "Séance d'entretien",
		tagline: "Maintenance touch-up",
		price: "79",
		currency: "CHF / €",
	},
	{
		id: 4,
		name: "Avantage Duo / Couple",
		tagline: "Two clients, same day",
		price: "−10",
		currency: "%",
	},
];

const paymentMethods = ["Twint", "Révolut", "Cash"];

export function PriceListSection() {
	const hero = priceItems.find((i) => i.highlighted)!;
	const others = priceItems.filter((i) => !i.highlighted);

	return (
		<section className="relative overflow-hidden bg-[#F9F7F5]">
			{/* Ambient glows — desktop only */}
			<div className="pointer-events-none absolute -top-32 left-1/4 hidden size-[480px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,#f5efe7_0%,transparent_70%)] opacity-70 lg:block" />
			<div className="pointer-events-none absolute -bottom-40 right-0 hidden size-[420px] rounded-full bg-[radial-gradient(circle,#d4b5a0_0%,transparent_70%)] opacity-25 lg:block" />

			<div className="relative mx-auto max-w-[1400px] px-4 py-16 md:px-8 md:py-24">
				{/* Header */}
				<div className="mx-auto mb-10 max-w-xl text-center md:mb-4">
					<p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-600">Our Pricing</p>
					<h2
						className="mt-4 text-3xl font-light text-[#5D4E4E] md:text-4xl lg:text-5xl"
						style={{ fontFamily: "'Cormorant Garamond', serif" }}
					>
						Price <span className="italic text-brand-600">List</span>
					</h2>
					<p className="mt-3 text-lg text-[#8B6F6F] md:text-xl">Teeth Whitening Services</p>

					{/* Decorative Divider */}
					<div className="mt-6 flex items-center justify-center gap-4">
						<div className="h-px w-16 bg-gradient-to-r from-transparent via-brand-600/30 to-brand-600/50 md:w-24" />
						<div className="size-2 rotate-45 border border-brand-600/60" />
						<div className="h-px w-16 bg-gradient-to-l from-transparent via-brand-600/30 to-brand-600/50 md:w-24" />
					</div>
				</div>

				{/* Mobile layout — simple list */}
				<div className="mx-auto w-full max-w-xl space-y-3 lg:hidden">
					{priceItems.map((item) =>
						item.premium ? (
							<div
								key={item.id}
								className="rounded-lg p-[2px] shadow-[0_2px_10px_-8px_rgba(212,175,55,0.15)]"
								style={{
									background:
										"linear-gradient(135deg, #f4e4a8 0%, #d4af37 25%, #f9e9a1 50%, #b8860b 75%, #e6c769 100%)",
								}}
							>
								<div className="relative flex items-center justify-between gap-3 rounded-[6px] bg-white px-4 py-4 sm:px-6 sm:py-5">
									<div className="min-w-0 flex-1">
										<p className="text-sm font-medium text-[#5D4E4E] sm:text-base md:text-lg">{item.name}</p>
										<p className="mt-0.5 text-xs text-[#8B6F6F]">{item.tagline}</p>
									</div>
									<span className="shrink-0 whitespace-nowrap text-base font-semibold text-[#5D4E4E] sm:text-lg">
										{item.price}
										<span className="ml-1 text-xs font-normal text-[#8B6F6F]">{item.currency}</span>
									</span>
								</div>
							</div>
						) : (
							<div
								key={item.id}
								className={`relative flex items-center justify-between gap-3 rounded-lg border px-4 py-4 sm:px-6 sm:py-5 ${
									item.highlighted
										? "border-brand-600/40 bg-white shadow-[0_8px_30px_-12px_rgba(139,90,106,0.25)]"
										: "border-[#c9a5ab]/30 bg-white/60"
								}`}
							>
								<div className="min-w-0 flex-1">
									<p className="text-sm font-medium text-[#5D4E4E] sm:text-base md:text-lg">{item.name}</p>
									<p className="mt-0.5 text-xs text-[#8B6F6F]">{item.tagline}</p>
								</div>
								<span className="shrink-0 whitespace-nowrap text-base font-semibold text-[#5D4E4E] sm:text-lg">
									{item.price}
									<span className="ml-1 text-xs font-normal text-[#8B6F6F]">{item.currency}</span>
								</span>
							</div>
						)
					)}
				</div>

				{/* Desktop layout — hero card + 3-column grid */}
				<div className="mx-auto hidden w-full max-w-4xl lg:block">
					{/* Hero highlighted card */}
					<div className="relative">
						{/* Decorative corner accents */}
						<div className="pointer-events-none absolute -top-2 -left-2 size-6 border-l border-t border-brand-600/60" />
						<div className="pointer-events-none absolute -top-2 -right-2 size-6 border-r border-t border-brand-600/60" />
						<div className="pointer-events-none absolute -bottom-2 -left-2 size-6 border-b border-l border-brand-600/60" />
						<div className="pointer-events-none absolute -bottom-2 -right-2 size-6 border-b border-r border-brand-600/60" />

						<div className="relative overflow-hidden border border-brand-600/20 bg-gradient-to-br from-white via-[#fdfaf7] to-[#f5efe7] shadow-[0_20px_60px_-20px_rgba(139,90,106,0.25)]">
							{/* Badge ribbon */}
							{hero.badge && (
								<div className="absolute right-0 top-0 z-10 flex items-center gap-2 bg-brand-600 px-5 py-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-white">
									<span className="size-1 rotate-45 bg-white/80" />
									{hero.badge}
								</div>
							)}

							<div className="grid items-center gap-8 p-10 xl:grid-cols-[1fr_auto]">
								<div>
									<p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-brand-600/80">
										{hero.tagline}
									</p>
									<h3
										className="mt-2 text-3xl font-light text-[#4a2d3a] xl:text-4xl"
										style={{ fontFamily: "'Cormorant Garamond', serif" }}
									>
										{hero.name}
									</h3>
									<div className="mt-4 flex items-center gap-3">
										<div className="h-px w-10 bg-brand-600/50" />
										<div className="size-1.5 rotate-45 border border-brand-600/60" />
										<div className="h-px w-12 bg-brand-600/30" />
									</div>
									<p className="mt-4 max-w-md text-sm italic leading-relaxed text-[#8B6F6F]">
										The complete professional treatment. Reveal your brightest, most radiant smile in a single session.
									</p>
								</div>

								<div className="flex items-baseline gap-2 xl:flex-col xl:items-end xl:gap-0">
									<span
										className="text-6xl font-light leading-none text-[#4a2d3a] xl:text-7xl"
										style={{ fontFamily: "'Cormorant Garamond', serif" }}
									>
										{hero.price}
									</span>
									<span className="text-sm font-medium uppercase tracking-[0.25em] text-brand-600 xl:mt-2">
										{hero.currency}
									</span>
								</div>
							</div>
						</div>
					</div>

					{/* Three-column grid for remaining items */}
					<div className="mt-8 grid grid-cols-3 gap-5">
						{others.map((item) =>
							item.premium ? (
								<div
									key={item.id}
									className="group relative p-[2px] shadow-[0_3px_12px_-10px_rgba(212,175,55,0.18)] transition duration-300 hover:shadow-[0_6px_18px_-12px_rgba(212,175,55,0.28)]"
									style={{
										background:
											"linear-gradient(135deg, #f4e4a8 0%, #d4af37 20%, #f9e9a1 40%, #b8860b 60%, #e6c769 80%, #d4af37 100%)",
									}}
								>
									{/* Premium ribbon */}
									<div
										className="absolute -top-px left-0 right-0 z-10 flex items-center justify-center gap-2 py-1.5 text-[9px] font-semibold uppercase tracking-[0.3em] text-[#5a3d10]"
										style={{
											background: "linear-gradient(90deg, transparent 0%, rgba(212,175,55,0.25) 50%, transparent 100%)",
										}}
									>
										<span className="size-1 rotate-45 bg-[#b8860b]" />
										Best Value
										<span className="size-1 rotate-45 bg-[#b8860b]" />
									</div>

									<div className="relative overflow-hidden bg-gradient-to-br from-white via-[#fffdf6] to-[#faf2dc] p-7 pt-10">
										<p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#b8860b]">
											{item.tagline}
										</p>
										<h4
											className="mt-2 text-xl font-light leading-tight text-[#4a2d3a]"
											style={{ fontFamily: "'Cormorant Garamond', serif" }}
										>
											{item.name}
										</h4>

										<div className="mt-4 flex items-center gap-2">
											<div className="h-px w-6 bg-[#d4af37]/70" />
											<div className="size-1 rotate-45 bg-[#d4af37]" />
										</div>

										<div className="mt-5 flex items-baseline gap-2">
											<span
												className="text-4xl font-light leading-none text-[#4a2d3a]"
												style={{ fontFamily: "'Cormorant Garamond', serif" }}
											>
												{item.price}
											</span>
											<span className="text-xs font-medium uppercase tracking-[0.2em] text-[#b8860b]">
												{item.currency}
											</span>
										</div>
									</div>
								</div>
							) : (
								<div
									key={item.id}
									className="group relative overflow-hidden border border-[#c9a5ab]/30 bg-white/70 p-7 backdrop-blur-sm transition duration-300 hover:border-brand-600/40 hover:bg-white hover:shadow-[0_12px_32px_-16px_rgba(139,90,106,0.2)]"
								>
									{/* Top decorative strip */}
									<div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-600/30 to-transparent" />

									<p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-brand-600/80">
										{item.tagline}
									</p>
									<h4
										className="mt-2 text-xl font-light leading-tight text-[#4a2d3a]"
										style={{ fontFamily: "'Cormorant Garamond', serif" }}
									>
										{item.name}
									</h4>

									<div className="mt-4 flex items-center gap-2">
										<div className="h-px w-6 bg-[#c9a5ab]/60" />
										<div className="size-1 rotate-45 bg-[#c9a5ab]/70" />
									</div>

									<div className="mt-5 flex items-baseline gap-2">
										<span
											className="text-4xl font-light leading-none text-[#4a2d3a]"
											style={{ fontFamily: "'Cormorant Garamond', serif" }}
										>
											{item.price}
										</span>
										<span className="text-xs font-medium uppercase tracking-[0.2em] text-brand-600">
											{item.currency}
										</span>
									</div>
								</div>
							)
						)}
					</div>
				</div>

				{/* Payment methods */}
				<div className="mt-12 text-center md:mt-8">
					<p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#b8929a]">
						Accepted Payment Methods
					</p>
					<div className="mt-4 inline-flex items-center gap-5 border-y border-[#c9a5ab]/30 px-8 py-3">
						{paymentMethods.map((method, index) => (
							<span key={method} className="flex items-center gap-5">
								<span className="text-sm font-medium tracking-wide text-[#5D4E4E]">{method}</span>
								{index < paymentMethods.length - 1 && (
									<span className="size-1 rotate-45 bg-[#c9a5ab]/70" />
								)}
							</span>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

export default PriceListSection;
