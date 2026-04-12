export function AboutSection() {
    return (
        <section className="relative overflow-hidden">
            {/* Mobile layout */}
            <div className="bg-gradient-to-b from-[#b8929a] to-[#c9a5ab] md:hidden">
                <div className="mx-auto grid max-w-7xl grid-cols-[1fr_4fr] items-stretch gap-4">
                    {/* Left - Photo (20%) */}
                    <div className="h-full overflow-hidden">
                        <img
                            src="/bgreviewssection.webp"
                            alt=""
                            className="size-full object-cover"
                        />
                    </div>

                    {/* Right - About text (80%) */}
                    <div>
                        <div className="relative -left-18 my-6 max-w-[200px] overflow-hidden rounded-lg border border-secondary">
                            <img
                                src="/client.webp"
                                alt="Anaëlle - Prestige Smile Studio"
                                className="size-full object-cover"
                            />
                        </div>
                        <h2
                            className="text-3xl font-medium uppercase tracking-[0.15em] text-white"
                            style={{ fontFamily: "'Cormorant Garamond', serif" }}
                        >
                            About Me
                        </h2>

                        <div className="my-4 w-16 bg-white/40" />

                        <div
                            className="space-y-4 text-base italic leading-relaxed text-white/90"
                            style={{ fontFamily: "'Cormorant Garamond', serif" }}
                        >
                            <p>
                                I&apos;m Anaëlle, founder of Prestige Smile, specializing in aesthetic teeth whitening.
                            </p>
                            <p>
                                Naturally demanding and detail-oriented, I have always placed great importance on aesthetics, precision, and the overall quality of each treatment.
                            </p>
                            <p>
                                Faced with a lack of standards and quality that met my expectations, I chose to create Prestige Smile, with the ambition to offer a more refined, precise approach, firmly focused on visible and harmonious results.
                            </p>
                            <p>
                                I pay close attention to every client, ensuring a natural, radiant result that is perfectly aligned with each smile.
                            </p>
                            <p>
                                Because a smile is much more than a detail… it is a true source of confidence.
                            </p>
                        </div>

                        <p
                            className="mt-6 pb-10 text-2xl text-white"
                            style={{ fontFamily: "'Eyesome Script', cursive" }}
                        >
                            Anaëlle
                        </p>
                    </div>
                </div>
            </div>

            {/* Desktop layout */}
            <div className="hidden bg-[#faf8f6] md:block">
                <div className="mx-auto max-w-7xl py-28">
                    <div className="grid grid-cols-[1fr_1.2fr] items-center gap-20">
                        {/* Left - Photo with decorative frame */}
                        <div className="relative">
                            {/* Decorative offset border */}
                            <div className="absolute -right-6 -bottom-6 top-6 left-6 border border-[#c9a5ab]/40" />

                            {/* Main image */}
                            <div className="relative aspect-[3/4] overflow-hidden">
                                <img
                                    src="/client.webp"
                                    alt="Anaëlle - Fondatrice de Prestige Smile"
                                    className="size-full object-cover"
                                />
                            </div>

                            {/* Floating accent line */}
                            <div className="absolute -left-6 top-1/2 h-px w-12 bg-[#c9a5ab]/60" />
                        </div>

                        {/* Right - Text content */}
                        <div>
                            <p
                                className="mb-3 text-xs uppercase tracking-[0.3em] text-[#b8929a]"
                                style={{ fontFamily: "'Cormorant Garamond', serif" }}
                            >
                                La fondatrice
                            </p>

                            <h2
                                className="mb-2 text-5xl font-light uppercase tracking-[0.18em] text-[#4a2d3a] lg:text-6xl"
                                style={{ fontFamily: "'Cormorant Garamond', serif" }}
                            >
                                About Me
                            </h2>

                            {/* Decorative divider */}
                            <div className="my-8 flex items-center gap-3">
                                <div className="h-px w-12 bg-[#c9a5ab]" />
                                <div className="size-1.5 rotate-45 border border-[#c9a5ab]" />
                                <div className="h-px w-12 bg-[#c9a5ab]" />
                            </div>

                            <div
                                className="space-y-5 text-[17px] leading-[1.9] text-[#5a3d4a]/85"
                                style={{ fontFamily: "'Cormorant Garamond', serif" }}
                            >
                                <p>
                                    I&apos;m <span className="font-semibold text-[#4a2d3a]">Anaëlle</span>, founder
                                    of Prestige Smile, specializing in aesthetic teeth whitening.
                                </p>
                                <p>
                                    Naturally demanding and detail-oriented, I have always placed great importance on
                                    aesthetics, precision, and the overall quality of each treatment.
                                </p>
                                <p>
                                    Faced with a lack of standards and quality that met my expectations, I chose to
                                    create <span className="font-semibold text-[#4a2d3a]">Prestige Smile</span>,
                                    with the ambition to offer a more refined, precise approach, firmly focused on
                                    visible and harmonious results.
                                </p>
                                <p>
                                    I pay close attention to every client, ensuring a natural, radiant result that is
                                    perfectly aligned with each smile.
                                </p>
                                <p className="italic text-[#4a2d3a]">
                                    Because a smile is much more than a detail… it is a true source of confidence.
                                </p>
                            </div>

                            {/* Signature */}
                            <div className="mt-10 flex items-center justify-end gap-4">
                                <div className="h-px w-8 bg-[#c9a5ab]/50" />
                                <p
                                    className="text-4xl text-[#4a2d3a]"
                                    style={{ fontFamily: "'Eyesome Script', cursive" }}
                                >
                                    Anaëlle
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
