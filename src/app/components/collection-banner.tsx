"use client";

export function CollectionBanner() {
    return (
        <section className="bg-primary px-4 py-8 md:px-6 md:py-12 ">
            {/* Background Image */}
            <div className="relative mx-auto h-[500px] rounded-sm w-full max-w-[1400px] overflow-hidden md:h-[650px] lg:h-[650px]">
                <img
                    src="/images/collection-banner.png"
                    alt="Collection Banner"
                    className="size-full object-cover object-center"
                />


                {/* Brand Logo - Bottom Right */}
                <div className="absolute bottom-0 right-0    hidden md:bottom-0 md:right-10 md:block lg:bottom-4 lg:right-10">
                    <img
                        src="/logo.svg"
                        alt="Brand Logo"
                        className="h-16 w-auto opacity-90 brightness-0 invert md:h-20 lg:h-16"
                    />
                </div>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-start justify-end p-6 text-left md:p-10 lg:p-12">
                    {/* Subtitle */}
                    <span className="text-xs font-medium uppercase tracking-[0.3em] text-white md:text-sm">
                        Private Aesthetic Studio
                    </span>

                    {/* Title */}
                    <h2
                        className="mt-4 text-3xl font-normal uppercase leading-tight text-white md:text-4xl lg:text-5xl xl:text-6xl"
                        style={{ fontFamily: "var(--global-heading-font-family)" }}
                    >
                        Reveal Your
                        <br />
                        Brightest Smile
                    </h2>

                    
                    {/* Button */}
                    <a
                        href="/booking"
                        className="mt-6 inline-block bg-white px-6 py-3 text-sm font-medium uppercase tracking-wider text-primary transition duration-300 hover:bg-brand-50 md:mt-8 md:px-8 md:py-3"
                    >
                        Book My Session
                    </a>
                </div>
            </div>
        </section>
    );
}

export default CollectionBanner;
