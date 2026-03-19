"use client";

import { ArrowRight } from "@untitledui/icons";

export function CtaSection() {
	return (
		<section
			className="relative bg-cover bg-center px-4 py-16 md:px-8 md:py-20 lg:px-16"
			style={{
				backgroundColor: "#e8a9a0",
				backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
				backgroundBlendMode: "soft-light",
			}}
		>
			<div className="absolute inset-0 bg-gradient-to-br from-[#f0b8b0]/80 via-[#e8a9a0]/60 to-[#dba090]/70" />
			<div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">
				<div>
					<h2 className="text-2xl font-medium uppercase tracking-widest text-gray-900 md:text-3xl lg:text-4xl">
						Glow First! Sign Up
						<br />
						For Updates
					</h2>
				</div>

				<div className="flex flex-col gap-4">
					<h3 className="text-sm font-medium uppercase tracking-widest text-gray-900">
						Subscribe to Our Newsletter
					</h3>

					<form className="flex items-center border-b border-gray-900/30">
						<input
							type="email"
							placeholder="Enter Email ID"
							className="flex-1 bg-transparent py-3 text-sm text-gray-900 placeholder:text-gray-700 focus:outline-none"
						/>
						<button
							type="submit"
							className="flex items-center gap-2 px-2 py-3 text-sm font-medium uppercase tracking-wider text-gray-900 transition duration-100 ease-linear hover:opacity-70"
						>
							Submit
							<ArrowRight className="size-4" />
						</button>
					</form>

					<p className="text-sm text-gray-800">
						Get insider access to exclusive deals, skincare tips, and the latest
						beauty store arrivals—delivered directly to your inbox.
					</p>
				</div>
			</div>
		</section>
	);
}
