"use client";

import { Star01, Heart, Sun, Award01, Shield01, Globe01 } from "@untitledui/icons";

const marqueeItems = [
    { icon: Star01, text: "Premium Quality" },
    { icon: Heart, text: "Cruelty Free" },
    { icon: Sun, text: "Natural Ingredients" },
    { icon: Award01, text: "Award Winning" },
    { icon: Shield01, text: "Dermatologist Tested" },
    { icon: Globe01, text: "Eco Friendly" },
];

export function MarqueeSection() {
    return (
        <section className="my-2.5 overflow-hidden">
            {/* Rotated marquee container */}
            <div className="bg-brand-600 py-12 md:py-14" style={{ transform: "rotate(-1deg) scale(1.02)" }}>
                <div className="relative flex">
                    {/* First marquee */}
                    <div className="animate-marquee flex shrink-0 items-center gap-12">
                        {marqueeItems.map((item, index) => (
                            <div
                                key={index}
                                className="flex shrink-0 items-center gap-4 px-6"
                            >
                                <item.icon className="size-5 text-white/90" />
                                <span className="whitespace-nowrap font-medium uppercase tracking-[0.2em] text-white">
                                    {item.text}
                                </span>
                                <span className="size-2 rounded-full bg-white/50" />
                            </div>
                        ))}
                    </div>

                    {/* Duplicate for seamless loop */}
                    <div className="animate-marquee flex shrink-0 items-center gap-12" aria-hidden="true">
                        {marqueeItems.map((item, index) => (
                            <div
                                key={index}
                                className="flex shrink-0 items-center gap-4 px-6"
                            >
                                <item.icon className="size-5 text-white/90" />
                                <span className="whitespace-nowrap font-medium uppercase tracking-[0.2em] text-white">
                                    {item.text}
                                </span>
                                <span className="size-2 rounded-full bg-white/50" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes marquee {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-100%);
                    }
                }
                .animate-marquee {
                    animation: marquee 25s linear infinite;
                }
            `}</style>
        </section>
    );
}
