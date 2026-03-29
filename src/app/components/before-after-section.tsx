"use client";

const transformations = [
    {
        id: 1,
        before: "/before and after images/1.jpg",
        after: "/before and after images/2.png",
        title: "Results after one session",
        description: "Up to 7 shades lighter",
        price: "CHF/€ 99",
    },
    {
        id: 2,
        before: "/before and after images/4.jpg",
        after: "/before and after images/3.jpg",
        title: "Results after one session",
        description: "Up to 7 shades lighter",
        price: "CHF/€ 99",
    },
    {
        id: 3,
        before: "/before and after images/5.jpg",
        after: "/before and after images/6.png",
        title: "Results after one session",
        description: "Up to 7 shades lighter",
        price: "CHF/€ 99",
    },
    {
        id: 4,
        before: "/before and after images/13.jpg",
        after: "/before and after images/14.jpg",
        title: "Results after one session",
        description: "Up to 7 shades lighter",
        price: "CHF/€ 99",
    },
    {
        id: 5,
        before: "/before and after images/11.webp",
        after: "/before and after images/12.webp",
        title: "Results after one session",
        description: "Up to 7 shades lighter",
        price: "CHF/€ 99",
    },
    {
        id: 6,
        before: "/before and after images/9.png",
        after: "/before and after images/10.png",
        title: "Results after one session",
        description: "Up to 7 shades lighter",
        price: "CHF/€ 99",
    },
];

export function BeforeAfterSection() {
    return (
        <section className="bg-secondary px-4 py-16 md:px-8 md:py-24">
            <div className="mx-auto max-w-[1400px]">
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
                            {/* Card Title */}
                            <p
                                className="mb-3 text-center text-sm font-medium uppercase tracking-wider text-tertiary"
                                style={{ fontFamily: "var(--global-heading-font-family)" }}
                            >
                                {item.title}
                            </p>
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
                                    <span className="text-xs font-medium uppercase tracking-wider text-tertiary">
                                        Price:
                                    </span>
                                    <p className="mt-1 text-lg font-medium tracking-tight text-primary md:text-xl">
                                        {item.price}
                                    </p>
                                </div>
                                <div className="text-right">
                                    <span className="text-xs font-medium uppercase tracking-wider text-tertiary">
                                        Results:
                                    </span>
                                    <p className="mt-1 text-lg font-medium tracking-tight text-primary md:text-xl">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default BeforeAfterSection;
