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
				<div className="order-2 flex flex-col justify-center px-6 py-10 md:px-12 md:py-16 lg:order-1 lg:py-24">
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
				<div className="relative order-1 lg:order-2">
					<div
						className="relative flex h-[350px] cursor-grab items-center overflow-hidden pl-4 active:cursor-grabbing md:h-[650px] md:pl-0 lg:h-[700px]"
						onMouseDown={handleDragStart}
						onMouseMove={handleDragMove}
						onMouseUp={handleDragEnd}
						onMouseLeave={handleDragEnd}
						onTouchStart={handleDragStart}
						onTouchMove={handleDragMove}
						onTouchEnd={handleDragEnd}
					>
						<div
							className="flex items-center transition-transform duration-300 [--slide-width:320px] md:[--slide-width:640px]"
							style={{ transform: `translateX(calc(-${activeIndex} * var(--slide-width)))` }}
						>
							{giftCardImages.map((image) => (
								<div
									key={image.id}
									className="relative w-[var(--slide-width)] flex-shrink-0"
								>
									<img src={image.src} alt={image.alt} className="size-[300px] object-cover md:size-[600px]" draggable={false} />
								</div>
							))}
						</div>
					</div>
					<div className="absolute inset-x-0 bottom-0 flex justify-end gap-3 pr-4 md:pr-8">
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
