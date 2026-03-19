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
        <section className="overflow-hidden bg-brand-600 py-4">
            <div className="relative flex">
                {/* First marquee */}
                <div className="animate-marquee flex shrink-0 items-center gap-8">
                    {marqueeItems.map((item, index) => (
                        <div
                            key={index}
                            className="flex shrink-0 items-center gap-3 px-4"
                        >
                            <item.icon className="size-5 text-white/80" />
                            <span className="whitespace-nowrap text-sm font-semibold uppercase tracking-widest text-white">
                                {item.text}
                            </span>
                            <span className="size-1.5 rounded-full bg-white/40" />
                        </div>
                    ))}
                </div>

                {/* Duplicate for seamless loop */}
                <div className="animate-marquee flex shrink-0 items-center gap-8" aria-hidden="true">
                    {marqueeItems.map((item, index) => (
                        <div
                            key={index}
                            className="flex shrink-0 items-center gap-3 px-4"
                        >
                            <item.icon className="size-5 text-white/80" />
                            <span className="whitespace-nowrap text-sm font-semibold uppercase tracking-widest text-white">
                                {item.text}
                            </span>
                            <span className="size-1.5 rounded-full bg-white/40" />
                        </div>
                    ))}
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
