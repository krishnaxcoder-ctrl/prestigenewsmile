"use client";

import { useState, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "@untitledui/icons";

export function ComparisonSlider() {
    const [sliderPosition, setSliderPosition] = useState(50);
    const containerRef = useRef<HTMLDivElement>(null);
    const isDragging = useRef(false);

    const handleMove = useCallback((clientX: number) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = clientX - rect.left;
        const percentage = Math.min(Math.max((x / rect.width) * 100, 0), 100);
        setSliderPosition(percentage);
    }, []);

    const handleMouseDown = useCallback(() => {
        isDragging.current = true;
    }, []);

    const handleMouseUp = useCallback(() => {
        isDragging.current = false;
    }, []);

    const handleMouseMove = useCallback((e: React.MouseEvent) => {
        if (!isDragging.current) return;
        handleMove(e.clientX);
    }, [handleMove]);

    const handleTouchMove = useCallback((e: React.TouchEvent) => {
        handleMove(e.touches[0].clientX);
    }, [handleMove]);

    const handleClick = useCallback((e: React.MouseEvent) => {
        handleMove(e.clientX);
    }, [handleMove]);

    return (
        <section className="bg-primary px-4 py-12 md:px-6 md:py-16 lg:py-20">
            <div className="mx-auto max-w-[1400px]">
                {/* Header */}
                <div className="mb-8 text-center md:mb-12">
                    <p className="text-[13px] font-medium uppercase tracking-[0.25em] text-brand-600 md:text-xs">
                        Clear Contrast
                    </p>
                    <h2
                        className="mt-3 text-4xl font-medium leading-tight tracking-tight text-primary md:text-3xl  lg:text-5xl"
                        style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                        See The{" "}
                        <em className="italic text-brand-600">Difference</em>
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-sm font-light tracking-wide text-tertiary md:text-base">
                        Slide to reveal the stunning before and after transformation
                    </p>
                </div>

                {/* Comparison Container */}
                <div
                    ref={containerRef}
                    className="relative mx-auto aspect-[9/4] max-w-8xl cursor-ew-resize select-none overflow-hidden"
                    onMouseDown={handleMouseDown}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseUp}
                    onMouseMove={handleMouseMove}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleMouseUp}
                    onClick={handleClick}
                >
                    {/* After Image (Background) */}
                    <img
                        src="/compareafter.jpg"
                        alt="After treatment"
                        className="absolute inset-0 size-full object-cover"
                        draggable={false}
                    />

                    {/* Before Image (Clipped) */}
                    <div
                        className="absolute inset-0 overflow-hidden"
                        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                    >
                        <img
                            src="/comparebefore.png"
                            alt="Before treatment"
                            className="absolute inset-0 size-full object-cover"
                            draggable={false}
                        />
                    </div>

                    {/* Before Label */}
                    <div className="absolute left-4 top-4 md:left-6 md:top-6">
                        <span className="bg-black px-4 py-2 text-xs font-medium uppercase tracking-wider text-white md:text-sm">
                            Before
                        </span>
                    </div>

                    {/* After Label */}
                    <div className="absolute right-4 top-4 md:right-6 md:top-6">
                        <span className="bg-black px-4 py-2 text-xs font-medium uppercase tracking-wider text-white md:text-sm">
                            After
                        </span>
                    </div>

                    {/* Slider Line */}
                    <div
                        className="absolute bottom-0 top-0 w-0.5 bg-black"
                        style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
                    />

                    {/* Slider Handle */}
                    <div
                        className="absolute top-1/2 flex size-12 -translate-y-1/2 cursor-ew-resize items-center justify-center rounded-full bg-black shadow-lg md:size-14"
                        style={{ left: `${sliderPosition}%`, transform: 'translate(-50%, -50%)' }}
                    >
                        <ChevronLeft className="size-4 text-white md:size-5" />
                        <ChevronRight className="size-4 text-white md:size-5" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ComparisonSlider;
