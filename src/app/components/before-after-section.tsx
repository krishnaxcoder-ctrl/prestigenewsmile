"use client";

import { useState, useRef, useCallback } from "react";

export function BeforeAfterSection() {
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

    const handleMouseDown = () => { isDragging.current = true; };
    const handleMouseUp = () => { isDragging.current = false; };
    const handleMouseMove = (e: React.MouseEvent) => { if (isDragging.current) handleMove(e.clientX); };
    const handleTouchMove = (e: React.TouchEvent) => { handleMove(e.touches[0].clientX); };

    return (
        <section className="bg-secondary px-4 py-16 md:px-8 md:py-24 lg:px-16">
            <div className="mx-auto max-w-7xl">
                <div className="mb-10 text-center md:mb-14">
                    <span className="mb-3 inline-block rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-700">
                        Flawless Skin Starts Here
                    </span>
                    <h2 className="mt-4 text-display-xs font-semibold uppercase text-primary md:text-display-sm lg:text-display-md">
                        Real <span className="text-brand-600">Transformations</span>
                    </h2>
                </div>
                <div className="relative">
                    <div
                        ref={containerRef}
                        className="relative aspect-[16/9] cursor-ew-resize select-none overflow-hidden"
                        onMouseDown={handleMouseDown}
                        onMouseUp={handleMouseUp}
                        onMouseLeave={handleMouseUp}
                        onMouseMove={handleMouseMove}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleMouseUp}
                    >
                        <div className="absolute inset-0">
                            <img src="/bigyellow.jpg" alt="Before" className="size-full object-cover" draggable={false} />
                            <span className="absolute bottom-3 left-3 rounded-full bg-black/70 px-3 py-1.5 text-xs font-medium uppercase tracking-wider text-white backdrop-blur-sm sm:bottom-6 sm:left-6 sm:px-4 sm:py-2 sm:text-sm">
                                Before
                            </span>
                        </div>
                        <div className="absolute inset-0" style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}>
                            <img src="/bigwhite.jpg" alt="After" className="size-full object-cover" draggable={false} />
                            <span className="absolute bottom-3 right-3 rounded-full bg-brand-600 px-3 py-1.5 text-xs font-medium uppercase tracking-wider text-white sm:bottom-6 sm:right-6 sm:px-4 sm:py-2 sm:text-sm">
                                After
                            </span>
                        </div>
                        <div
                            className="absolute bottom-0 top-0 z-10 w-1 bg-white shadow-lg"
                            style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
                        >
                            <div
                                className="absolute left-1/2 top-1/2 flex size-10 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-center rounded-full border-2 border-white bg-brand-600 shadow-xl sm:size-14 sm:border-4"
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
                        <div className="absolute inset-x-0 top-3 z-10 text-center sm:top-6">
                            <span className="inline-block rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-primary shadow-lg backdrop-blur-sm sm:px-5 sm:py-2.5 sm:text-sm">
                                Visible result in just 15 days
                            </span>
                        </div>
                    </div>
                    <p className="mt-4 text-center text-sm text-tertiary">
                        Drag the slider to compare before and after results
                    </p>
                </div>
            </div>
        </section>
    );
}
