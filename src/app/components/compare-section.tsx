"use client";

import { useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";

export function CompareSection() {
    const [sliderPosition, setSliderPosition] = useState(50);
    const containerRef = useRef<HTMLDivElement>(null);
    const isDragging = useRef(false);

    const handleMove = useCallback((clientX: number) => {
        if (!containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();
        const x = clientX - rect.left;
        const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
        setSliderPosition(percentage);
    }, []);

    const handleMouseDown = () => {
        isDragging.current = true;
    };

    const handleMouseUp = () => {
        isDragging.current = false;
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging.current) return;
        handleMove(e.clientX);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        handleMove(e.touches[0].clientX);
    };

    return (
        <section className="bg-secondary px-4 py-16 md:px-8 md:py-24 lg:px-16">
            <div className="mx-auto max-w-5xl">
                {/* Header */}
                <div className="mb-10 text-center md:mb-14">
                    <motion.span
                        initial={{ opacity: 0, filter: "blur(8px)" }}
                        whileInView={{ opacity: 1, filter: "blur(0px)" }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="mb-3 inline-block rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-700"
                    >
                        Flawless Skin Starts Here
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, filter: "blur(8px)" }}
                        whileInView={{ opacity: 1, filter: "blur(0px)" }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: 0.05, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="mt-4 text-display-xs font-semibold text-primary md:text-display-sm lg:text-display-md"
                    >
                        Real <span className="text-brand-600">Transformations</span>
                    </motion.h2>
                </div>

                {/* Before/After Slider */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                    className="relative"
                >
                    <div
                        ref={containerRef}
                        className="relative aspect-[16/9] cursor-ew-resize select-none overflow-hidden rounded-3xl"
                        onMouseDown={handleMouseDown}
                        onMouseUp={handleMouseUp}
                        onMouseLeave={handleMouseUp}
                        onMouseMove={handleMouseMove}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleMouseUp}
                    >
                        {/* Before Image (Background) */}
                        <div className="absolute inset-0">
                            <img
                                src="https://wdtmonica.wpengine.com/wp-content/uploads/2026/01/before-after-slide-img-01.jpg"
                                alt="Before"
                                className="size-full object-cover"
                                draggable={false}
                            />
                            {/* Before Label */}
                            <span className="absolute bottom-6 left-6 rounded-full bg-black/70 px-4 py-2 text-sm font-medium uppercase tracking-wider text-white backdrop-blur-sm">
                                Before
                            </span>
                        </div>

                        {/* After Image (Foreground with clip) */}
                        <div
                            className="absolute inset-0"
                            style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
                        >
                            <img
                                src="https://wdtmonica.wpengine.com/wp-content/uploads/2026/01/before-after-slide-img-02.jpg"
                                alt="After"
                                className="size-full object-cover"
                                draggable={false}
                            />
                            {/* After Label */}
                            <span className="absolute bottom-6 right-6 rounded-full bg-brand-600 px-4 py-2 text-sm font-medium uppercase tracking-wider text-white">
                                After
                            </span>
                        </div>

                        {/* Slider Line */}
                        <div
                            className="absolute bottom-0 top-0 z-10 w-1 bg-white shadow-lg"
                            style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
                        >
                            {/* Slider Handle */}
                            <div
                                className="absolute left-1/2 top-1/2 flex size-14 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-center rounded-full border-4 border-white bg-brand-600 shadow-xl transition-transform hover:scale-110"
                                onMouseDown={handleMouseDown}
                            >
                                <div className="flex items-center gap-1">
                                    <svg className="size-4 rotate-180 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                    </svg>
                                    <svg className="size-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Result Text Overlay */}
                        <div className="absolute inset-x-0 top-6 z-10 text-center">
                            <span className="inline-block rounded-full bg-white/90 px-5 py-2.5 text-sm font-semibold uppercase tracking-wider text-primary shadow-lg backdrop-blur-sm">
                                Visible result in just 15 days
                            </span>
                        </div>
                    </div>

                    {/* Instructions */}
                    <p className="mt-4 text-center text-sm text-tertiary">
                        Drag the slider to compare before and after results
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
