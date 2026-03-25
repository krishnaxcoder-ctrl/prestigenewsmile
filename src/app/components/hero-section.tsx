"use client";

export function HeroSection() {
    return (
        <section>
            {/* Hero Image Section */}
            <div className="relative min-h-[40vh] md:min-h-[85vh]">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop"
                        alt="Teeth whitening treatment"
                        className="size-full object-cover"
                    />
                    {/* Overlay for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50" />
                </div>

                {/* Content */}
                <div className="relative flex min-h-[40vh] flex-col justify-center px-6 py-20 md:min-h-[85vh] md:px-12 lg:px-20">
                    <div className="max-w-xl">
                        <h1
                            className="text-display-sm font-normal italic leading-tight text-white md:text-display-md lg:text-display-lg"
                            style={{ fontFamily: "var(--global-heading-font-family)" }}
                        >
                            Always Make Room for a Brighter Smile in Your Life
                        </h1>

                        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:gap-4">
                            <a
                                href="/booking"
                                className="inline-block border border-white bg-white px-8 py-4 text-center text-sm font-medium uppercase tracking-[0.15em] text-gray-900 transition duration-100 ease-linear hover:bg-transparent hover:text-white"
                            >
                                Book Appointment
                            </a>
                            <a
                                href="/services"
                                className="inline-block border border-white bg-transparent px-8 py-4 text-center text-sm font-medium uppercase tracking-[0.15em] text-white transition duration-100 ease-linear hover:bg-white hover:text-gray-900"
                            >
                                View Services
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Info Section */}
            <div className="bg-secondary px-6 py-12 md:px-8 md:py-16">
                <div className="mx-auto max-w-4xl">
                    <div className="grid grid-cols-1 gap-10 text-center md:grid-cols-3 md:gap-8">
                        {/* Contact */}
                        <div>
                            <h3 className="text-sm font-semibold uppercase tracking-widest text-primary">
                                Contact
                            </h3>
                            <div className="mt-4 space-y-1">
                                <p className="text-md text-tertiary">T: +41 22 123 4567</p>
                                <p className="text-md text-tertiary">hello@prestigesmile.studio</p>
                            </div>
                        </div>

                        {/* Hours */}
                        <div>
                            <h3 className="text-sm font-semibold uppercase tracking-widest text-primary">
                                Hours
                            </h3>
                            <div className="mt-4 space-y-1">
                                <p className="text-md text-tertiary">Mon to Fri: 10:00 am — 7:00 pm</p>
                                <p className="text-md text-tertiary">Sat: 10:00 am — 5:00 pm</p>
                                <p className="text-md text-tertiary">Sun: Closed</p>
                            </div>
                        </div>

                        {/* Location */}
                        <div>
                            <h3 className="text-sm font-semibold uppercase tracking-widest text-primary">
                                Location
                            </h3>
                            <div className="mt-4 space-y-1">
                                <p className="text-md text-tertiary">12 Rue du Rhône,</p>
                                <p className="text-md text-tertiary">1204 Geneva,</p>
                                <p className="text-md text-tertiary">Switzerland</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
