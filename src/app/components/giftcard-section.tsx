"use client";

import { useState, useRef, useCallback } from "react";
import { Button } from "@/components/base/buttons/button";
import { motion } from "framer-motion";

const giftCardImages = [
	{
		id: 1,
		src: "https://firstsight.design/cherie/beauty/wp-content/uploads/2020/09/Gift-Card-1-1@1.5x.jpg",
		alt: "Gift Card",
	},
	{
		id: 2,
		src: "https://firstsight.design/cherie/beauty/wp-content/uploads/2020/09/Gift-Card-3@1.5x.jpg",
		alt: "Gift Card $100",
	},
	{
		id: 3,
		src: "https://firstsight.design/cherie/beauty/wp-content/uploads/2020/09/Gift-Card-1-1@1.5x.jpg",
		alt: "Gift Card",
	},
	{
		id: 4,
		src: "https://firstsight.design/cherie/beauty/wp-content/uploads/2020/09/Gift-Card-3@1.5x.jpg",
		alt: "Gift Card $100",
	},
];

export function GiftcardSection() {
	const [activeIndex, setActiveIndex] = useState(0);
	const [isDragging, setIsDragging] = useState(false);
	const dragStartX = useRef(0);
	const dragCurrentX = useRef(0);

	const handleDragStart = useCallback(
		(e: React.MouseEvent | React.TouchEvent) => {
			setIsDragging(true);
			const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
			dragStartX.current = clientX;
			dragCurrentX.current = clientX;
		},
		[]
	);

	const handleDragMove = useCallback(
		(e: React.MouseEvent | React.TouchEvent) => {
			if (!isDragging) return;
			const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
			dragCurrentX.current = clientX;
		},
		[isDragging]
	);

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

	const goToSlide = (index: number) => {
		setActiveIndex(index);
	};

	return (
		<section className="bg-primary">
			<div className="grid grid-cols-1 lg:grid-cols-2">
				{/* Left Content */}
				<div className="flex flex-col justify-center px-6 py-16 md:px-12 md:py-20 lg:px-20 lg:py-24">
					<div className="max-w-lg">
						<motion.h2
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-100px" }}
							transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
							className="font-serif text-display-xs font-normal text-primary md:text-display-sm lg:text-display-md"
						>
							Gift Cards
						</motion.h2>

						<motion.p
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-100px" }}
							transition={{
								duration: 0.5,
								delay: 0.1,
								ease: [0.25, 0.46, 0.45, 0.94],
							}}
							className="mt-6 text-md leading-relaxed text-tertiary md:text-lg"
						>
							When in doubt what to buy as a gift, this is the best option. Our
							gift cards have no expiration date and can be used to pay for all
							the services in our beauty studio or in our cosmetic shop. You can
							choose physical or electronic format of the gift card. Amount is
							also flexible. You can personalize your gift card with a message.
						</motion.p>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-100px" }}
							transition={{
								duration: 0.5,
								delay: 0.2,
								ease: [0.25, 0.46, 0.45, 0.94],
							}}
							className="mt-8"
						>
							<Button
								href="/gift-cards"
								color="secondary"
								size="lg"
								className="border-primary text-primary uppercase tracking-widest hover:bg-primary hover:text-white"
							>
								Learn More
							</Button>
						</motion.div>
					</div>
				</div>

				{/* Right Slider */}
				<motion.div
					initial={{ opacity: 0, x: 50 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true, margin: "-100px" }}
					transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
					className="relative"
				>
					{/* Slider Container */}
					<div
						className="relative flex h-[500px] cursor-grab items-center overflow-hidden active:cursor-grabbing md:h-[550px] lg:h-[650px]"
						onMouseDown={handleDragStart}
						onMouseMove={handleDragMove}
						onMouseUp={handleDragEnd}
						onMouseLeave={handleDragEnd}
						onTouchStart={handleDragStart}
						onTouchMove={handleDragMove}
						onTouchEnd={handleDragEnd}
					>
						{/* Slides Track - center mode with partial right peek */}
						<div
							className="flex items-center transition-transform duration-500 ease-out"
							style={{
								transform: `translateX(calc(-${activeIndex * 493}px))`,
							}}
						>
							{giftCardImages.map((image, index) => (
								<div
									key={image.id}
									className="relative flex-shrink-0 pr-10"
									style={{ width: "493px" }}
								>
									<img
										src={image.src}
										alt={image.alt}
										className="size-[453px] object-cover"
										draggable={false}
									/>
								</div>
							))}
						</div>
					</div>

					{/* Pagination Dots */}
					<div className="absolute inset-x-0 bottom-8 flex justify-center gap-3">
						{giftCardImages.map((_, index) => (
							<button
								key={index}
								onClick={() => goToSlide(index)}
								className={`size-2.5 rounded-full transition-all duration-300 ${
									index === activeIndex
										? "bg-gray-900"
										: "border border-gray-400 bg-transparent hover:bg-gray-400"
								}`}
								aria-label={`Go to slide ${index + 1}`}
							/>
						))}
					</div>
				</motion.div>
			</div>
		</section>
	);
}
