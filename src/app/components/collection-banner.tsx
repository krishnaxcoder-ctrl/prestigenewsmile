"use client";

export function CollectionBanner() {
    return (
        <section className="bg-primary px-4 py-8 md:px-6 md:py-12 lg:px-8">
            {/* Background Image */}
            <div className="relative mx-auto h-[500px] w-full max-w-[1400px] overflow-hidden md:h-[600px] lg:h-[600px]">
                <img
                    src="/images/collection-banner.png"
                    alt="Collection Banner"
                    className="size-full object-cover object-center"
                />


                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-start justify-end p-6 text-left md:p-10 lg:p-12">
                    {/* Subtitle */}
                    <span className="text-xs font-medium uppercase tracking-[0.3em] text-white md:text-sm">
                        New Week - New Arrivals
                    </span>

                    {/* Title */}
                    <h2
                        className="mt-4 text-3xl font-normal uppercase leading-tight text-white md:text-4xl lg:text-5xl xl:text-6xl"
                        style={{ fontFamily: "var(--global-heading-font-family)" }}
                    >
                        Feeling Blush
                        <br />
                        Huda Beauty
                    </h2>

                    {/* Button */}
                    <a
                        href="/shop"
                        className="mt-6 inline-block bg-white px-6 py-3 text-sm font-medium uppercase tracking-wider text-primary transition duration-300 hover:bg-brand-50 md:mt-8 md:px-8 md:py-3"
                    >
                        See Collection
                    </a>
                </div>
            </div>
        </section>
    );
}

export default CollectionBanner;
