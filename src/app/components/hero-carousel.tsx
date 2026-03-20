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
        hidden: { opacity: 0, filter: "blur(8px)", scale: 0.97 },
        visible: (delay: number) => ({
            opacity: 1,
            filter: "blur(0px)",
            scale: 1,
            transition: { duration: 0.35, delay, ease: [0.25, 0.46, 0.45, 0.94] },
        }),
    };

    return (
        <section className="flex min-h-[100svh] flex-col md:min-h-0 md:h-[675px] md:flex-row">
            {/* Content Side - 50% */}
            <div className="order-2 flex w-full flex-col justify-center bg-secondary px-4 py-10 sm:px-6 sm:py-12 md:order-1 md:w-1/2 md:justify-end md:px-12 md:pb-16 lg:px-20 lg:pb-20">
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
                            className="text-display-xs font-semibold leading-tight text-primary sm:text-display-sm md:text-display-md lg:text-display-lg"
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
                            className="mt-6 flex flex-wrap items-center gap-3 sm:mt-8 sm:gap-4 md:mt-10"
                        >
                            <Button href={currentSlide.href} color="primary" size="md" className="sm:text-md sm:px-5 sm:py-3">
                                SHOP NOW
                            </Button>
                            <Button href="/about" color="tertiary" size="md" className="sm:text-md sm:px-5 sm:py-3">
                                Learn More
                            </Button>
                        </motion.div>
                    </motion.div>
                </AnimatePresence>

            </div>

            {/* Slider Side - 50% */}
            <div className="relative order-1 aspect-[4/3] w-full overflow-hidden sm:aspect-[16/10] md:order-2 md:aspect-auto md:w-1/2">
                {/* Image Slider */}
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
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />
                    </motion.div>
                </AnimatePresence>

                {/* Top Badge */}
                <div className="absolute left-6 top-6 z-10">
                    <motion.div
                        key={`badge-${currentIndex}`}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                        className="rounded-full bg-white/95 px-4 py-2 shadow-lg backdrop-blur-sm"
                    >
                        <span className="text-xs font-semibold uppercase tracking-wider text-brand-600">
                            New Collection 2026
                        </span>
                    </motion.div>
                </div>

                {/* Bottom Content Overlay */}
                <div className="absolute inset-x-0 bottom-0 z-10 p-6 md:p-8">
                    <div className="flex items-end justify-between">
                        {/* Slide Info */}
                        <motion.div
                            key={`info-${currentIndex}`}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: 0.1 }}
                        >
                            <p className="text-sm font-medium text-white/80">
                                {String(currentIndex + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
                            </p>
                            <h3 className="mt-1 text-xl font-semibold text-white md:text-2xl">
                                {currentSlide.title} {currentSlide.highlight}
                            </h3>
                        </motion.div>

                        {/* Navigation Arrows */}
                        <div className="flex items-center gap-2">
                            <button
                                onClick={prevSlide}
                                className="flex size-11 items-center justify-center rounded-full border-2 border-white/30 bg-white/10 text-white backdrop-blur-sm transition duration-200 hover:border-white hover:bg-white hover:text-primary md:size-12"
                                aria-label="Previous slide"
                            >
                                <ChevronLeft className="size-5" />
                            </button>
                            <button
                                onClick={nextSlide}
                                className="flex size-11 items-center justify-center rounded-full border-2 border-white/30 bg-white/10 text-white backdrop-blur-sm transition duration-200 hover:border-white hover:bg-white hover:text-primary md:size-12"
                                aria-label="Next slide"
                            >
                                <ChevronRight className="size-5" />
                            </button>
                        </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="mt-5 flex gap-2">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    setDirection(index > currentIndex ? 1 : -1);
                                    setCurrentIndex(index);
                                }}
                                className="group relative h-1 flex-1 overflow-hidden rounded-full bg-white/30"
                                aria-label={`Go to slide ${index + 1}`}
                            >
                                <motion.div
                                    className="absolute inset-y-0 left-0 bg-white"
                                    initial={{ width: "0%" }}
                                    animate={{
                                        width: index === currentIndex ? "100%" : index < currentIndex ? "100%" : "0%"
                                    }}
                                    transition={{
                                        duration: index === currentIndex ? 5 : 0.3,
                                        ease: index === currentIndex ? "linear" : "easeOut"
                                    }}
                                />
                            </button>
                        ))}
                    </div>
                </div>

                {/* Decorative Corner Element */}
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
