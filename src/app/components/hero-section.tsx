"use client";

import Link from "next/link";

export function HeroSection() {
    return (
        <section>
            {/* Hero Image Section */}
            <div className="relative min-h-[50vh] md:min-h-[85vh]">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <img
                        src="/bghero.webp"
                        alt="Teeth whitening treatment"
                        className="size-full object-cover object-center"
                    />
                    {/* Overlay for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-950/70 via-amber-900/30 to-transparent md:from-amber-950/60 md:via-amber-900/20" />
                </div>

                {/* Content */}
                <div className="relative flex min-h-[50vh] flex-col justify-center px-6 py-16 md:min-h-[85vh] md:px-12 lg:px-20">
                    <div className="max-w-lg">
                        {/* Tagline */}
                        <div className="mb-4 flex items-center gap-3">
                            <span className="h-px w-3 bg-white/50" />
                            <span className="text-xs font-medium uppercase tracking-[0.25em] text-white/80">
                                Prestige Smile Studio
                            </span>
                        </div>

                        <h1
                            className="text-display-xs font-normal  leading-tight text-white md:text-display-sm lg:text-display-md"
                            style={{ fontFamily: "var(--global-heading-font-family)" }}
                        >
                            Always Make Room for a Brighter Smile in Your Life
                        </h1>

                        {/* Description */}
                        <p className="mt-4 max-w-md text-md leading-relaxed text-white/70 md:text-base">
                            Professional teeth whitening in the heart of Geneva. Reveal your brightest, most confident smile.
                        </p>

                        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
                            <Link
                                href="/booking"
                                className="inline-block border border-white bg-white px-8 py-3.5 text-center text-xs font-medium uppercase tracking-[0.2em] text-gray-900 transition duration-200 ease-out hover:bg-transparent hover:text-white"
                            >
                                Book Appointment
                            </Link>
                            <Link
                                href="/services"
                                className="inline-block border border-white/80 bg-transparent px-8 py-3.5 text-center text-xs font-medium uppercase tracking-[0.2em] text-white transition duration-200 ease-out hover:bg-white hover:text-gray-900"
                            >
                                View Services
                            </Link>
                        </div>
                    </div>
                </div>

            </div>

            {/* Contact Info Section */}
            <div className="bg-secondary px-6 py-10 md:px-8 md:py-14">
                <div className="mx-auto max-w-5xl">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6">
                        {/* Contact */}
                        <div className="flex flex-col items-center text-center">
                            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                                Contact
                            </h3>
                            <div className="mt-3 space-y-0.5">
                                <p className="text-sm text-tertiary">T: +41 22 123 4567</p>
                                <p className="text-sm text-tertiary">hello@prestigesmile.studio</p>
                            </div>
                        </div>

                        {/* Hours */}
                        <div className="flex flex-col items-center text-center">
                            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                                Hours
                            </h3>
                            <div className="mt-3 space-y-0.5">
                                <p className="text-sm text-tertiary">Mon to Fri: 10:00 am — 7:00 pm</p>
                                <p className="text-sm text-tertiary">Sat: 10:00 am — 5:00 pm</p>
                                <p className="text-sm text-tertiary">Sun: Closed</p>
                            </div>
                        </div>

                        {/* Location */}
                        <div className="flex flex-col items-center text-center">
                            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                                Location
                            </h3>
                            <div className="mt-3 space-y-0.5">
                                <p className="text-sm text-tertiary">12 Rue du Rhône,</p>
                                <p className="text-sm text-tertiary">1204 Geneva, Switzerland</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
