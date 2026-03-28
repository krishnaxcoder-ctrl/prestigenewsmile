"use client";

const features = [
    {
        id: 1,
        title: "SHIELD AND",
        titleLine2: "SHINE",
        href: "/shop",
        image: "https://wordpressthemes.live/WCG10/WCM231_cosmika/cosmetic02/wp-content/uploads/2025/04/banner_01.jpg",
    },
    {
        id: 2,
        title: "SOMEONE",
        titleLine2: "SPECIAL",
        href: "/shop",
        image: "https://wordpressthemes.live/WCG10/WCM231_cosmika/cosmetic02/wp-content/uploads/2025/04/banner_02.jpg",
    },
];

export function FeaturesSection() {
    return (
        <section className="bg-primary px-4 py-8 md:px-6 md:py-12 lg:px-8">
            <div className="mx-auto max-w-[1400px]">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
                    {features.map((feature) => (
                        <a
                            key={feature.id}
                            href={feature.href}
                            className="group relative block aspect-[4/3] overflow-hidden md:aspect-[6/4]"
                        >
                            {/* Background Image */}
                            <img
                                src={feature.image}
                                alt={feature.title}
                                className="size-full object-cover object-center transition duration-500 group-hover:scale-105"
                            />

                            {/* Overlay gradient for text readability */}
                            <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-black/10 to-transparent" />

                            {/* Content */}
                            <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 lg:p-10">
                                <h2
                                    className="text-2xl font-medium uppercase leading-tight tracking-wide text-white md:text-3xl lg:text-4xl"
                                    style={{ fontFamily: "var(--global-heading-font-family)" }}
                                >
                                    {feature.title}
                                    <br />
                                    {feature.titleLine2}
                                </h2>

                                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand-400 transition group-hover:text-brand-300">
                                    Discover Now
                                    <svg
                                        className="size-4 transition group-hover:translate-x-0.5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                    </svg>
                                </span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
