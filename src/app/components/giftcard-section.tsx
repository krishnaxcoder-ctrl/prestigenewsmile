"use client";

import { useState, useRef, useCallback } from "react";

const giftCardImages = [
	{ id: 1, src: "https://firstsight.design/cherie/beauty/wp-content/uploads/2020/09/Gift-Card-1-1@1.5x.jpg", alt: "Gift Card" },
	{ id: 2, src: "https://firstsight.design/cherie/beauty/wp-content/uploads/2020/09/Gift-Card-3@1.5x.jpg", alt: "Gift Card $100" },
	{ id: 3, src: "https://firstsight.design/cherie/beauty/wp-content/uploads/2020/09/Gift-Card-1-1@1.5x.jpg", alt: "Gift Card" },
	{ id: 4, src: "https://firstsight.design/cherie/beauty/wp-content/uploads/2020/09/Gift-Card-3@1.5x.jpg", alt: "Gift Card $100" },
];

export function GiftcardSection() {
	const [activeIndex, setActiveIndex] = useState(0);
	const [isDragging, setIsDragging] = useState(false);
	const dragStartX = useRef(0);
	const dragCurrentX = useRef(0);

	const handleDragStart = useCallback((e: React.MouseEvent | React.TouchEvent) => {
		setIsDragging(true);
		const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
		dragStartX.current = clientX;
		dragCurrentX.current = clientX;
	}, []);

	const handleDragMove = useCallback((e: React.MouseEvent | React.TouchEvent) => {
		if (!isDragging) return;
		const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
		dragCurrentX.current = clientX;
	}, [isDragging]);

	const handleDragEnd = useCallback(() => {
		if (!isDragging) return;
		setIsDragging(false);
		const diff = dragStartX.current - dragCurrentX.current;
		const threshold = 50;
		if (diff > threshold && activeIndex < giftCardImages.length - 1) {
			setActiveIndex((prev) => prev + 1);
		} else if (diff < -threshold && activeIndex > 0) {
			setActiveIndex((prev) => prev - 1);
		}
	}, [isDragging, activeIndex]);

	return (
		<section className="bg-primary">
			<div className="grid grid-cols-1 lg:grid-cols-2">
				<div className="flex flex-col justify-center px-6 py-16 md:px-12 md:py-20 lg:py-24">
					<div className="ml-auto max-w-7xl lg:px-20">
						<h2 className="text-display-xs font-normal uppercase text-primary md:text-display-sm lg:text-display-md" style={{ fontFamily: "var(--global-heading-font-family)" }}>
							Gift Cards
						</h2>
						<p className="mt-6 text-md leading-relaxed text-tertiary md:text-lg">
							When in doubt what to buy as a gift, this is the best option. Our gift cards have no expiration date and can be used to pay for all the services in our beauty studio or in our cosmetic shop. You can choose physical or electronic format of the gift card. Amount is also flexible. You can personalize your gift card with a message.
						</p>
						<div className="mt-8">
							<a
								href="/gift-cards"
								className="inline-block border border-gray-900 bg-transparent px-12 py-4 text-sm uppercase tracking-[0.2em] text-gray-900 hover:bg-gray-900 hover:text-white"
							>
								Learn More
							</a>
						</div>
					</div>
				</div>
				<div className="relative">
					<div
						className="relative flex h-[550px] cursor-grab items-center overflow-hidden active:cursor-grabbing md:h-[650px] lg:h-[700px]"
						onMouseDown={handleDragStart}
						onMouseMove={handleDragMove}
						onMouseUp={handleDragEnd}
						onMouseLeave={handleDragEnd}
						onTouchStart={handleDragStart}
						onTouchMove={handleDragMove}
						onTouchEnd={handleDragEnd}
					>
						<div
							className="flex items-center"
							style={{ transform: `translateX(calc(-${activeIndex * 640}px))` }}
						>
							{giftCardImages.map((image) => (
								<div key={image.id} className="relative flex-shrink-0 pr-10" style={{ width: "640px" }}>
									<img src={image.src} alt={image.alt} className="size-[600px] object-cover" draggable={false} />
								</div>
							))}
						</div>
					</div>
					<div className="absolute inset-x-0 bottom-8 flex justify-center gap-3">
						{giftCardImages.map((_, index) => (
							<button
								key={index}
								onClick={() => setActiveIndex(index)}
								className={`size-2.5 rounded-full ${index === activeIndex ? "bg-gray-900" : "border border-gray-400 bg-transparent"}`}
								aria-label={`Go to slide ${index + 1}`}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
