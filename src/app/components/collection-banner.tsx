"use client";

export function CollectionBanner() {
    return (
        <section className="relative">
            {/* Background Image */}
            <div className="relative h-[500px] w-full md:h-[600px] lg:h-[700px]">
                <img
                    src="/images/collection-banner.jpg"
                    alt="Collection Banner"
                    className="size-full object-cover object-center"
                />

                {/* Overlay for better text readability */}
                <div className="absolute inset-0 bg-black/10" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
                    {/* Subtitle */}
                    <span className="text-xs font-medium uppercase tracking-[0.3em] text-white md:text-sm">
                        New Week - New Arrivals
                    </span>

                    {/* Title */}
                    <h2
                        className="mt-4 text-4xl font-normal uppercase leading-tight text-white md:text-5xl lg:text-6xl xl:text-7xl"
                        style={{ fontFamily: "var(--global-heading-font-family)" }}
                    >
                        Feeling Blush
                        <br />
                        Huda Beauty
                    </h2>

                    {/* Button */}
                    <a
                        href="/shop"
                        className="mt-8 inline-block bg-white px-8 py-3 text-sm font-medium uppercase tracking-wider text-primary transition duration-300 hover:bg-brand-50 md:px-10 md:py-4 md:text-base"
                    >
                        See Collection
                    </a>
                </div>
            </div>
        </section>
    );
}

export default CollectionBanner;
