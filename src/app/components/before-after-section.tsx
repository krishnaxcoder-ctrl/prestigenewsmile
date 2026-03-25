"use client";

const transformations = [
    {
        id: 1,
        before: "/teeth before and after images/3.png",
        after: "/teeth before and after images/4.png",
        title: "Teeth Whitening",
        description: "Up to 7 shades lighter",
        price: "CHF/€ 99",
    },
    {
        id: 2,
        before: "/teeth before and after images/13.png",
        after: "/teeth before and after images/14.png",
        title: "Complete Treatment",
        description: "Two sessions for dramatic results",
        price: "CHF/€ 169",
    },
    {
        id: 3,
        before: "/teeth before and after images/1.png",
        after: "/teeth before and after images/2.png",
        title: "Teeth Whitening",
        description: "Up to 7 shades lighter",
        price: "CHF/€ 99",
    },
    {
        id: 4,
        before: "/teeth before and after images/11.png",
        after: "/teeth before and after images/6.png",
        title: "Teeth Whitening",
        description: "Up to 7 shades lighter",
        price: "CHF/€ 169",
    },
    {
        id: 5,
        before: "/teeth before and after images/3.png",
        after: "/teeth before and after images/4.png",
        title: "Teeth Whitening",
        description: "Up to 7 shades lighter",
        price: "CHF/€ 99",
    },
    {
        id: 6,
        before: "/teeth before and after images/13.png",
        after: "/teeth before and after images/14.png",
        title: "Complete Treatment",
        description: "Two sessions for dramatic results",
        price: "CHF/€ 169",
    },
];

export function BeforeAfterSection() {
    return (
        <section className="bg-secondary px-4 py-16 md:px-8 md:py-24">
            <div className="mx-auto max-w-7xl">
                {/* Header */}
                <div className="mb-12 text-center md:mb-16">
                    <span className="text-xs font-medium uppercase tracking-[0.2em] text-tertiary">
                        Real Results
                    </span>
                    <h2
                        className="mt-4 text-display-xs font-normal text-primary md:text-display-sm"
                        style={{ fontFamily: "var(--global-heading-font-family)" }}
                    >
                        Before & After
                    </h2>
                    <p className="mx-auto mt-4 max-w-lg text-md text-tertiary">
                        See the transformations our clients have achieved with our professional whitening treatments.
                    </p>
                </div>

                {/* 2 Column Grid */}
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
                    {transformations.map((item) => (
                        <div key={item.id} className="group">
                            <div className="grid grid-cols-2 gap-3 md:gap-4">
                                {/* Before */}
                                <div className="relative overflow-hidden rounded-xl">
                                    <div className="aspect-[4/4]">
                                        <img
                                            src={item.before}
                                            alt="Before treatment"
                                            className="size-full object-cover"
                                        />
                                    </div>
                                    <span className="absolute bottom-3 left-3 rounded-full bg-black/70 px-3 py-1.5 text-[10px] font-medium uppercase tracking-wider text-white backdrop-blur-sm md:text-xs">
                                        Before
                                    </span>
                                </div>

                                {/* After */}
                                <div className="relative overflow-hidden rounded-xl">
                                    <div className="aspect-[4/4]">
                                        <img
                                            src={item.after}
                                            alt="After treatment"
                                            className="size-full object-cover"
                                        />
                                    </div>
                                    <span className="absolute bottom-3 right-3 rounded-full bg-brand-600 px-3 py-1.5 text-[10px] font-medium uppercase tracking-wider text-white md:text-xs">
                                        After
                                    </span>
                                </div>
                            </div>

                            {/* Caption */}
                            <div className="mt-5 flex items-center justify-between">
                                <div>
                                    <h3
                                        className="text-md font-medium uppercase tracking-wide text-primary md:text-lg"
                                        style={{ fontFamily: "var(--global-heading-font-family)" }}
                                    >
                                        {item.title}
                                    </h3>
                                    <p className="mt-1 text-sm text-tertiary">
                                        {item.description}
                                    </p>
                                </div>
                                <p className="text-xl font-normal tracking-tight text-brand-600 md:text-2xl">
                                    {item.price}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default BeforeAfterSection;
