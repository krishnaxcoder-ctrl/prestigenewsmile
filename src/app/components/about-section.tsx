export function AboutSection() {
    return (
        <section className="relative overflow-hidden">
            {/* Top - Hero area with gradient bg */}
            <div className="bg-gradient-to-b from-[#b8929a] to-[#c9a5ab] px-4 py-12 md:px-8 md:py-20">
                <div className="mx-auto grid max-w-[1100px] grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-12">
                    {/* Left - Photo */}
                    <div className="relative mx-auto w-full max-w-sm md:max-w-none">
                        <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                            <img
                                src="/logobookingnow1.png"
                                alt="Anaëlle - Prestige Smile Studio"
                                className="size-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Right - About text */}
                    <div>
                        <h2
                            className="text-3xl font-medium uppercase tracking-[0.15em] text-white md:text-4xl lg:text-5xl"
                            style={{ fontFamily: "'Cormorant Garamond', serif" }}
                        >
                            About Me
                        </h2>

                        <div className="my-4 h-px w-16 bg-white/40" />

                        <p
                            className="text-base italic leading-relaxed text-white/90 md:text-lg"
                            style={{ fontFamily: "'Cormorant Garamond', serif" }}
                        >
                            Passionate about aesthetics and well-being, I founded Prestige Smile Studio with a clear vision: to offer everyone access to a brighter, more confident smile. Every session is tailored to your needs, using safe and effective techniques for visible results from the very first appointment.
                        </p>

                        <p
                            className="mt-6 text-2xl text-white md:text-3xl"
                            style={{ fontFamily: "'Eyesome Script', cursive" }}
                        >
                            Anaëlle
                        </p>
                    </div>
                </div>
            </div>

            {/* Bottom - Two column text */}
            <div className="bg-[#d4b0b8] px-4 py-10 md:px-8 md:py-14">
                <div className="mx-auto grid max-w-[1100px] grid-cols-1 gap-6 md:grid-cols-2 md:gap-12">
                    <div>
                        <p className="text-sm leading-relaxed text-[#4a2d3a]">
                            At Prestige Smile Studio, we believe that a beautiful smile is the most powerful accessory you can wear. Our professional teeth whitening treatments are designed to deliver stunning, natural-looking results in a comfortable and relaxing environment. We use only the highest quality products that are gentle on your teeth while delivering maximum brightness.
                        </p>
                    </div>
                    <div>
                        <p className="text-sm leading-relaxed text-[#4a2d3a]">
                            Whether you&apos;re preparing for a special occasion or simply want to boost your everyday confidence, our personalized approach ensures that every treatment is tailored to your unique needs. From your first consultation to your final result, we are committed to making your experience exceptional and your smile unforgettable.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
