"use client";

export const TaglineSection = () => {
    return (
        <section className="bg-primary px-4 py-12 md:py-20 lg:py-34">
            <div className="mx-auto max-w-6xl">
                <div className="mb-6 text-center">
                    <span className="text-xs font-medium uppercase tracking-[0.2em] text-tertiary">
                        Professional Teeth Whitening Studio
                    </span>
                </div>
                <div
                    className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-center text-display-sm font-normal uppercase tracking-wide text-primary md:gap-x-5 md:gap-y-3 md:text-display-lg lg:text-display-xl"
                    style={{ fontFamily: "var(--global-heading-font-family)" }}
                >
                    <span>More Than</span>
                    <span>Just A</span>
                    <span className="text-brand-600">Detail,</span>
                    <span className="inline-flex h-8 w-20 overflow-hidden rounded-full md:h-12 md:w-32 lg:h-14 lg:w-36">
                        <img
                            src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=200&auto=format&fit=crop"
                            alt="Bright smile"
                            className="size-full object-cover"
                        />
                    </span>
                    <span>Your</span>
                    <span className="text-brand-600">Smile</span>
                    <span>Reflects</span>
                    <span>The</span>
                    <span className="inline-flex h-8 w-20 overflow-hidden rounded-full md:h-12 md:w-32 lg:h-14 lg:w-36">
                        <img
                            src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=200&auto=format&fit=crop"
                            alt="Teeth whitening treatment"
                            className="size-full object-cover"
                        />
                    </span>
                    <span className="text-brand-600">Confidence</span>
                    <span>Within</span>
                    <span className="text-brand-600">You.</span>
                </div>
            </div>
        </section>
    );
};

export default TaglineSection;