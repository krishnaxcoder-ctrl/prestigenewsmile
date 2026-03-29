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
			{/* Top accent line */}
			<div className="h-[2px] w-full bg-[#8B6F6F]" />

			<div className="mx-auto max-w-[1400px] px-4 py-16 md:px-8 md:py-24">
				<div className="mx-auto w-full max-w-xl">
					{/* Header */}
					<div className="mb-10 text-center">
						<h2
							className="text-2xl font-light uppercase tracking-[0.3em] text-[#5D4E4E] md:text-display-xs"
							style={{ fontFamily: "var(--global-heading-font-family)" }}
						>
							Price List
						</h2>
						<p
							className="mt-3 text-2xl text-[#8B6F6F] md:text-3xl"
							style={{ fontFamily: "'Eyesome Script', cursive" }}
						>
							Blanchiment dentaire
						</p>

						{/* Instagram handle */}
						<div className="mt-6 inline-block rounded-full border border-[#C5B8B8] bg-[#E8E2DE] px-5 py-2">
							<span className="text-sm text-[#8B7B7B]">@prestige.smile.studio</span>
						</div>
					</div>

					{/* Price items */}
					<div className="space-y-4">
						{priceItems.map((item) => (
							<div
								key={item.id}
								className={`flex items-center justify-between rounded-lg px-6 py-5 ${
									item.variant === "mauve"
										? "bg-[#D4C4C4]"
										: "bg-[#EDE7E2]"
								} ${
									item.highlighted
										? "ring-2 ring-[#E8D5A3] shadow-[0_0_20px_rgba(232,213,163,0.6)]"
										: ""
								}`}
							>
								<span className="text-base font-medium text-[#5D4E4E] md:text-lg">{item.name}</span>
								<span className="text-base font-semibold text-[#5D4E4E] md:text-lg">{item.price}</span>
							</div>
						))}
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
		</section>
	);
}

export default PriceListSection;
