"use client";

import { motion } from "framer-motion";

const priceItems = [
	{
		id: 1,
		name: "Séance de blanchiment dentaire",
		price: "99 CHF / €",
		highlighted: false,
	},
	{
		id: 2,
		name: "Traitement complet - 2 séances",
		price: "169 CHF / €",
		highlighted: true,
	},
	{
		id: 3,
		name: "Séance d'entretien",
		price: "79 CHF / €",
		highlighted: false,
	},
	{
		id: 4,
		name: "Avantage Duo / Couple",
		price: "-10%",
		highlighted: false,
	},
];

const paymentMethods = ["Twint", "Révolut", "Cash"];

const fadeInUp = {
	hidden: { opacity: 0, y: 30 },
	visible: (delay: number) => ({
		opacity: 1,
		y: 0,
		transition: { duration: 0.6, delay, ease: [0, 0, 0.2, 1] as const },
	}),
};

export function PriceListSection() {
	return (
		<section className="relative min-h-[900px] overflow-hidden">
			{/* Background Image */}
			<div className="absolute inset-0">
				<img
					src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1974&auto=format&fit=crop"
					alt="Smile background"
					className="size-full object-cover"
				/>
				{/* Overlay */}
				<div className="absolute inset-0 bg-[#8B7B7B]/60" />
			</div>

			{/* Content */}
			<div className="relative z-10 flex min-h-[900px] flex-col items-center justify-center px-4 py-16 md:py-24">
				<div className="w-full max-w-xl">
					{/* Header */}
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, margin: "-100px" }}
						custom={0}
						variants={fadeInUp}
						className="mb-10 text-center"
					>
						<h2 className="font-serif text-display-sm font-light uppercase tracking-[0.3em] text-white md:text-display-md">
							Price List
						</h2>
						<p className="mt-2 font-serif text-xl italic text-white/90 md:text-2xl">
							Blanchiment dentaire
						</p>

						{/* Instagram Handle Badge */}
						<div className="mt-6 inline-block rounded-full bg-white/20 px-6 py-2 backdrop-blur-sm">
							<span className="text-sm text-white/90">
								@prestige.smile.studio
							</span>
						</div>
					</motion.div>

					{/* Price Cards */}
					<div className="space-y-4">
						{priceItems.map((item, index) => (
							<motion.div
								key={item.id}
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true, margin: "-50px" }}
								custom={0.1 + index * 0.1}
								variants={fadeInUp}
								className={`flex items-center justify-between rounded-xl px-6 py-4 backdrop-blur-sm transition duration-100 ${
									item.highlighted
										? "bg-[#F5E6D3]/95 ring-2 ring-amber-400/50"
										: "bg-[#F5E6D3]/90 hover:bg-[#F5E6D3]/95"
								}`}
							>
								<span className="text-md font-medium text-gray-800 md:text-lg">
									{item.name}
								</span>
								<span className="text-md font-semibold text-gray-700 md:text-lg">
									{item.price}
								</span>
							</motion.div>
						))}
					</div>

					{/* Payment Methods */}
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, margin: "-50px" }}
						custom={0.6}
						variants={fadeInUp}
						className="mt-10 text-center"
					>
						<div className="flex items-center justify-center gap-2 text-sm text-white/80">
							{paymentMethods.map((method, index) => (
								<span key={method} className="flex items-center gap-2">
									{method}
									{index < paymentMethods.length - 1 && (
										<span className="text-white/50">•</span>
									)}
								</span>
							))}
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}

export default PriceListSection;
