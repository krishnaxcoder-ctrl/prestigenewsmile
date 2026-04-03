"use client";

import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/base/buttons/button";
import { ChevronLeft, ChevronRight } from "@untitledui/icons";

const slides = [
    {
        id: 1,
        title: "Brighter",
        highlight: "Smile",
        subtitle: "Visible Results",
        image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1974&auto=format&fit=crop",
        href: "/booking",
    },
    {
        id: 2,
        title: "Up to",
        highlight: "7 Shades",
        subtitle: "Lighter",
        image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=2070&auto=format&fit=crop",
        href: "/services",
    },
    {
        id: 3,
        title: "Professional",
        highlight: "Care",
        subtitle: "Safe & Effective",
        image: "https://images.unsplash.com/photo-1445527815219-ecbfec67492e?q=80&w=2070&auto=format&fit=crop",
        href: "/booking",
    },
];

export const HeroCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, []);

    const prevSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
    }, []);

    useEffect(() => {
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, [nextSlide]);

    const currentSlide = slides[currentIndex];

    return (
        <section className="flex flex-col md:h-[675px] md:flex-row">
            {/* Content Side */}
            <div className="relative order-2 flex w-full flex-col justify-center bg-secondary px-4 py-10 sm:px-6 sm:py-12 md:order-1 md:w-1/2 md:justify-end md:px-12 md:pb-16 lg:px-20 lg:pb-20">
                <div
                    className="pointer-events-none absolute inset-0 opacity-40"
                    style={{
                        backgroundImage: `radial-gradient(circle at 1.5px 1.5px, var(--color-gray-300) 1.5px, transparent 0)`,
                        backgroundSize: '24px 24px'
                    }}
                />
                <div className="relative z-10 max-w-lg">
                    <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest text-brand-600">
                        Teeth Whitening Studio
                    </span>
                    <h2 className="text-display-xs font-semibold leading-tight text-primary sm:text-display-sm md:text-display-md lg:text-display-lg">
                        {currentSlide.title}{" "}
                        <span className="text-brand-600">{currentSlide.highlight}</span>{" "}
                        {currentSlide.subtitle}
                    </h2>
                    <p className="mt-5 text-md leading-relaxed text-tertiary md:mt-6 md:text-lg">
                        Give your smile a visibly whiter, brighter and more natural glow.
                        Professional cosmetic teeth whitening in a private, secure studio
                        near Geneva.
                    </p>
                    <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
                        <span className="flex items-center gap-2 text-sm text-secondary">
                            <span className="size-1.5 rounded-full bg-brand-600" />
                            Up to 7 Shades
                        </span>
                        <span className="flex items-center gap-2 text-sm text-secondary">
                            <span className="size-1.5 rounded-full bg-brand-600" />
                            Enamel Safe
                        </span>
                        <span className="flex items-center gap-2 text-sm text-secondary">
                            <span className="size-1.5 rounded-full bg-brand-600" />
                            From CHF 99
                        </span>
                    </div>
                    <div className="mt-6 flex flex-wrap items-center gap-3 sm:mt-8 sm:gap-4 md:mt-10">
                        <Button href={currentSlide.href} color="primary" size="md" className="sm:text-md sm:px-5 sm:py-3">
                            BOOK MY SESSION
                        </Button>
                        <Button href="/services" color="tertiary" size="md" className="sm:text-md sm:px-5 sm:py-3">
                            View Services
                        </Button>
                    </div>
                </div>
            </div>

            {/* Slider Side */}
            <div className="relative order-1 aspect-[4/3] w-full overflow-hidden sm:aspect-[16/10] md:order-2 md:aspect-auto md:w-1/2">
                <div className="absolute inset-0">
                    <img
                        src={currentSlide.image}
                        alt={`${currentSlide.title} ${currentSlide.highlight} ${currentSlide.subtitle}`}
                        className="size-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />
                </div>

                <div className="absolute left-6 top-6 z-10">
                    <div className="rounded-full bg-white/95 px-4 py-2 shadow-lg backdrop-blur-sm">
                        <span className="text-xs font-semibold uppercase tracking-wider text-brand-600">
                            1 rue Jean Moulin, 74100 Ambilly
                        </span>
                    </div>
                </div>

                <div className="absolute inset-x-0 bottom-0 z-10 p-6 md:p-8">
                    <div className="flex items-end justify-between">
                        <div>
                            <p className="text-sm font-medium text-white/80">
                                {String(currentIndex + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
                            </p>
                            <h3 className="mt-1 text-xl font-semibold text-white md:text-2xl">
                                {currentSlide.title} {currentSlide.highlight}
                            </h3>
                        </div>
                        <div className="flex items-center gap-2">
                            <button
                                onClick={prevSlide}
                                className="flex size-11 items-center justify-center rounded-full border-2 border-white/30 bg-white/10 text-white backdrop-blur-sm hover:border-white hover:bg-white hover:text-primary md:size-12"
                                aria-label="Previous slide"
                            >
                                <ChevronLeft className="size-5" />
                            </button>
                            <button
                                onClick={nextSlide}
                                className="flex size-11 items-center justify-center rounded-full border-2 border-white/30 bg-white/10 text-white backdrop-blur-sm hover:border-white hover:bg-white hover:text-primary md:size-12"
                                aria-label="Next slide"
                            >
                                <ChevronRight className="size-5" />
                            </button>
                        </div>
                    </div>
                    <div className="mt-5 flex gap-2">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`h-1 flex-1 rounded-full ${index <= currentIndex ? "bg-white" : "bg-white/30"}`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>

                <div className="absolute right-0 top-0 z-10">
                    <svg className="size-24 text-white/10" viewBox="0 0 100 100" fill="currentColor">
                        <polygon points="100,0 100,100 0,0" />
                    </svg>
                </div>
            </div>
        </section>
    );
};

export default HeroCarousel;
