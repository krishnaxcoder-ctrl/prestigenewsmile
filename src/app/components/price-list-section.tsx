"use client";

const priceItems = [
	{ id: 1, name: "Séance de blanchiment dentaire", price: "99 CHF / €", variant: "beige", highlighted: true },
	{ id: 2, name: "Traitement complet - 2 séances", price: "169 CHF / €", variant: "mauve", highlighted: false },
	{ id: 3, name: "Séance d'entretien", price: "79 CHF / €", variant: "beige", highlighted: false },
	{ id: 4, name: "Avantage Duo / Couple", price: "-10%", variant: "mauve", highlighted: false },
];

const paymentMethods = ["Twint", "Révolut", "Cash"];

export function PriceListSection() {
	return (
		<section className="bg-[#F9F7F5]">

			<div className="mx-auto max-w-[1400px] px-4 py-16 md:px-8 md:py-24">
				<div className="mx-auto w-full max-w-xl">
					{/* Header */}
					<div className="mb-10 text-center">
						<p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-600">Our Pricing</p>
						<h2 className="mt-4 text-3xl font-light text-[#5D4E4E] md:text-4xl lg:text-5xl" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
							Price{" "}
							<span className="italic text-brand-600">List</span>
						</h2>
						<p className="mt-3 text-lg text-[#8B6F6F] md:text-xl">
							Teeth Whitening Services
						</p>

						{/* Decorative Divider */}
						<div className="mt-6 flex items-center justify-center gap-4">
							<div className="h-px w-16 bg-gradient-to-r from-transparent via-brand-600/30 to-brand-600/50 md:w-24" />
							<div className="size-2 rotate-45 border border-brand-600/60" />
							<div className="h-px w-16 bg-gradient-to-l from-transparent via-brand-600/30 to-brand-600/50 md:w-24" />
						</div>

						
					</div>

					{/* Price items */}
					<div className="space-y-4">
						{priceItems.map((item) =>
							item.highlighted ? (
								<div
									key={item.id}
									className="rounded-lg p-[3px] shadow-[0_0_20px_rgba(212,175,55,0.4)]"
									style={{
										backgroundImage: "url('https://img.freepik.com/free-vector/gold-metal-background_78370-154.jpg?semt=ais_hybrid&w=740&q=80')",
										backgroundSize: "cover",
										backgroundPosition: "center",
									}}
								>
									<div className={`flex items-center justify-between gap-3 rounded-md px-4 py-4 sm:px-6 sm:py-5 ${
										item.variant === "mauve" ? "bg-[#D4C4C4]" : "bg-[#EDE7E2]"
									}`}>
										<span className="min-w-0 flex-1 text-sm font-medium text-[#5D4E4E] sm:text-base md:text-lg">{item.name}</span>
										<span className="shrink-0 whitespace-nowrap text-sm font-semibold text-[#5D4E4E] sm:text-base md:text-lg">{item.price}</span>
									</div>
								</div>
							) : (
								<div
									key={item.id}
									className={`flex items-center justify-between gap-3 rounded-lg px-4 py-4 sm:px-6 sm:py-5 ${
										item.variant === "mauve"
											? "bg-[#D4C4C4]"
											: "bg-[#EDE7E2]"
									}`}
								>
									<span className="min-w-0 flex-1 text-sm font-medium text-[#5D4E4E] sm:text-base md:text-lg">{item.name}</span>
									<span className="shrink-0 whitespace-nowrap text-sm font-semibold text-[#5D4E4E] sm:text-base md:text-lg">{item.price}</span>
								</div>
							)
						)}
					</div>

					{/* Payment methods */}
					<div className="mt-10 text-center">
						<div className="flex items-center justify-center gap-2 text-sm text-[#8B7B7B]">
							{paymentMethods.map((method, index) => (
								<span key={method} className="flex items-center gap-2">
									{method}
									{index < paymentMethods.length - 1 && <span className="text-[#C5B8B8]">•</span>}
								</span>
							))}
						</div>
					</div>
				</div>
			</div>

			{/* Bottom accent line with glow animation */}
			<div className="h-[2px] w-full animate-[glow_2s_ease-in-out] bg-[#8B6F6F] shadow-[0_0_10px_rgba(139,111,111,0.8)]" />
		</section>
	);
}

export default PriceListSection;
