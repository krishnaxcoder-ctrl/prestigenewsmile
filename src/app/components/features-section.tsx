"use client";

const features = [
    {
        id: 1,
        title: "SHIELD AND",
        titleLine2: "SHINE",
        subtitle: "Protection & Radiance",
        href: "/shop",
        image: "https://wordpressthemes.live/WCG10/WCM231_cosmika/cosmetic02/wp-content/uploads/2025/04/banner_01.jpg",
    },
    {
        id: 2,
        title: "SOMEONE",
        titleLine2: "SPECIAL",
        subtitle: "Gift Sets & Bundles",
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
                            className="group relative block aspect-[4/3] overflow-hidden rounded-sm shadow-lg md:aspect-[6/4]"
                        >
                            {/* Background Image */}
                            <img
                                src={feature.image}
                                alt={feature.title}
                                className="size-full object-cover object-center transition duration-700 group-hover:scale-110"
                            />

                            {/* Overlay gradient for text readability */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent transition duration-500 group-hover:from-black/60" />

                            {/* Decorative inner frame */}
                            <div className="absolute inset-4 border border-white/20 transition duration-500 group-hover:inset-5 group-hover:border-white/30 md:inset-6 md:group-hover:inset-7" />

                            {/* Content */}
                            <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 lg:p-10">
                                {/* Subtitle */}
                                <span className="mb-2 text-xs font-medium uppercase tracking-widest text-white/80 md:text-sm">
                                    {feature.subtitle}
                                </span>

                                {/* Title */}
                                <h2
                                    className="text-2xl font-medium uppercase leading-tight tracking-wide text-white drop-shadow-lg md:text-3xl lg:text-4xl"
                                    style={{ fontFamily: "var(--global-heading-font-family)" }}
                                >
                                    {feature.title}
                                    <br />
                                    {feature.titleLine2}
                                </h2>

                                {/* Decorative line */}
                                <div className="mt-4 h-0.5 w-12 bg-brand-500 transition-all duration-500 group-hover:w-20" />

                                {/* CTA Link */}
                                <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-brand-400 transition group-hover:text-white">
                                    Discover Now
                                    <svg
                                        className="size-4 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
                                    </svg>
                                </span>
                            </div>

                            {/* Hover shine effect */}
                            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition duration-700 group-hover:translate-x-full" />
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
