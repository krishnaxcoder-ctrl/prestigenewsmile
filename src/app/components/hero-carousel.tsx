"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/base/buttons/button";
import { ChevronLeft, ChevronRight } from "@untitledui/icons";

const slides = [
    {
        id: 1,
        title: "Clean",
        highlight: "Ingredients",
        subtitle: "Visible Glow",
        image: "https://wdtmonica.wpengine.com/wp-content/uploads/2026/01/Home1-slider-img-04.jpg",
        href: "/shop",
    },
    {
        id: 2,
        title: "Luxury",
        highlight: "Formulas",
        subtitle: "Proven Results",
        image: "https://wdtmonica.wpengine.com/wp-content/uploads/2026/01/Home1-slider-img-01.jpg",
        href: "/shop",
    },
    {
        id: 3,
        title: "Expert",
        highlight: "Care",
        subtitle: "for Radiant Skin",
        image: "https://wdtmonica.wpengine.com/wp-content/uploads/2026/01/Home1-slider-img-05.jpg",
        href: "/shop",
    },
];

export const HeroCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const nextSlide = useCallback(() => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, []);

    const prevSlide = useCallback(() => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
    }, []);

    useEffect(() => {
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, [nextSlide]);

    const currentSlide = slides[currentIndex];

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? "100%" : "-100%",
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
        },
        exit: (direction: number) => ({
            x: direction < 0 ? "100%" : "-100%",
            opacity: 0,
        }),
    };

    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (delay: number) => ({
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay, ease: "easeOut" },
        }),
    };

    return (
        <section className="flex h-[675px] flex-col md:flex-row">
            {/* Content Side - 50% */}
            <div className="flex w-full flex-col justify-end bg-secondary px-6 pb-12 md:w-1/2 md:px-12 md:pb-16 lg:px-20 lg:pb-20">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        className="max-w-lg"
                    >
                        {/* Subtitle Tag */}
                        <motion.span
                            custom={0}
                            variants={textVariants}
                            className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest text-brand-600"
                        >
                            Premium Skincare
                        </motion.span>

                        <motion.h2
                            custom={0.05}
                            variants={textVariants}
                            className="text-display-sm font-semibold leading-tight text-primary md:text-display-md lg:text-display-lg"
                        >
                            {currentSlide.title}{" "}
                            <span className="text-brand-600">{currentSlide.highlight}</span>{" "}
                            {currentSlide.subtitle}
                        </motion.h2>

                        <motion.p
                            custom={0.1}
                            variants={textVariants}
                            className="mt-5 text-md leading-relaxed text-tertiary md:mt-6 md:text-lg"
                        >
                            Discover our collection of premium skincare products crafted with
                            natural ingredients for radiant, healthy skin. Experience the
                            perfect blend of science and nature.
                        </motion.p>

                        {/* Features List */}
                        <motion.div
                            custom={0.15}
                            variants={textVariants}
                            className="mt-6 flex flex-wrap gap-x-6 gap-y-2"
                        >
                            <span className="flex items-center gap-2 text-sm text-secondary">
                                <span className="size-1.5 rounded-full bg-brand-600" />
                                100% Natural
                            </span>
                            <span className="flex items-center gap-2 text-sm text-secondary">
                                <span className="size-1.5 rounded-full bg-brand-600" />
                                Cruelty Free
                            </span>
                            <span className="flex items-center gap-2 text-sm text-secondary">
                                <span className="size-1.5 rounded-full bg-brand-600" />
                                Dermatologist Tested
                            </span>
                        </motion.div>

                        <motion.div
                            custom={0.2}
                            variants={textVariants}
                            className="mt-8 flex items-center gap-4 md:mt-10"
                        >
                            <Button href={currentSlide.href} color="primary" size="xl">
                                SHOP NOW
                            </Button>
                            <Button href="/about" color="tertiary" size="xl">
                                Learn More
                            </Button>
                        </motion.div>
                    </motion.div>
                </AnimatePresence>

                {/* Dots Indicator */}
                <div className="mt-10 flex gap-2 md:mt-12">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                setDirection(index > currentIndex ? 1 : -1);
                                setCurrentIndex(index);
                            }}
                            className={`h-2 rounded-full transition-all duration-300 ${
                                index === currentIndex
                                    ? "w-8 bg-brand-600"
                                    : "w-2 bg-tertiary hover:bg-secondary"
                            }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>

            {/* Slider Side - 50% */}
            <div className="relative w-full overflow-hidden md:w-1/2">
                <AnimatePresence initial={false} custom={direction}>
                    <motion.div
                        key={currentIndex}
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="absolute inset-0"
                    >
                        <img
                            src={currentSlide.image}
                            alt={`${currentSlide.title} ${currentSlide.highlight} ${currentSlide.subtitle}`}
                            className="size-full object-cover"
                        />
                    </motion.div>
                </AnimatePresence>

                {/* Navigation Arrows */}
                <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 z-10 flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-primary shadow-md backdrop-blur-sm transition duration-100 ease-linear hover:bg-white md:size-12"
                    aria-label="Previous slide"
                >
                    <ChevronLeft className="size-5 md:size-6" />
                </button>

                <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 z-10 flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-primary shadow-md backdrop-blur-sm transition duration-100 ease-linear hover:bg-white md:size-12"
                    aria-label="Next slide"
                >
                    <ChevronRight className="size-5 md:size-6" />
                </button>
            </div>
        </section>
    );
};

export default HeroCarousel;
