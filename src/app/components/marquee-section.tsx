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

function MarqueeContent() {
    return (
        <>
            {marqueeItems.map((item, index) => (
                <div
                    key={index}
                    className="flex shrink-0 items-center gap-6 px-2"
                >
                    <div className="flex items-center gap-3">
                        <item.icon className="size-5 text-brand-200" strokeWidth={2.5} />
                        <span className="whitespace-nowrap text-lg font-medium tracking-wide text-white">
                            {item.text}
                        </span>
                    </div>
                    <span className="text-2xl text-brand-300">✦</span>
                </div>
            ))}
        </>
    );
}

export function MarqueeSection() {
    return (
        <section className="relative overflow-hidden bg-brand-600">
            {/* Decorative pattern overlay */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
                    backgroundSize: '24px 24px'
                }} />
            </div>

            {/* Main marquee */}
            <div className="relative py-5">
                <div className="flex">
                    <div className="animate-marquee flex shrink-0 items-center">
                        <MarqueeContent />
                    </div>
                    <div className="animate-marquee flex shrink-0 items-center" aria-hidden="true">
                        <MarqueeContent />
                    </div>
                    <div className="animate-marquee flex shrink-0 items-center" aria-hidden="true">
                        <MarqueeContent />
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
                    animation: marquee 20s linear infinite;
                }
            `}</style>
        </section>
    );
}
