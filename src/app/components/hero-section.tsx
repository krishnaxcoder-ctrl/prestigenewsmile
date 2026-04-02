"use client";

import Link from "next/link";

export function HeroSection() {
    return (
        <section>
            {/* Hero Image Section */}
            <div className="relative min-h-[50vh] md:min-h-[calc(100vh-72px)]">
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
                <div className="relative flex min-h-[50vh] flex-col justify-center px-6 py-16 md:min-h-[calc(100vh-72px)] md:px-12 lg:px-20">
                    <div className="max-w-xl">
                        {/* Tagline */}
                        <div className="mb-5 flex items-center gap-3">
                            <div className="h-px w-8 bg-gradient-to-r from-white/60 to-white/30" />
                            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/90">
                                Prestige Smile Studio
                            </span>
                            <div className="h-px w-8 bg-gradient-to-l from-white/60 to-white/30" />
                        </div>

                        <h1
                            className="text-3xl font-light max-w-sm leading-tight text-white md:text-4xl lg:text-5xl xl:text-4xl"
                            style={{ fontFamily: "'Cormorant Garamond', serif" }}
                        >
                            Always Make Room for a
                            Brighter Smile in Your Life
                        </h1>

                        {/* Decorative Divider */}
                        <div className="my-6 flex items-center gap-3">
                            <div className="h-px w-12 bg-gradient-to-r from-white/50 to-white/20" />
                            <div className="size-1.5 rotate-45 border border-white/50" />
                            <div className="h-px w-12 bg-gradient-to-l from-white/50 to-white/20" />
                        </div>

                        {/* Description */}
                        <p className="max-w-md text-base leading-relaxed text-white/80 md:text-lg">
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

                {/* Desktop Contact Info - Inside Hero */}
                <div className="absolute inset-x-0 bottom-0 hidden bg-white/10 backdrop-blur-md md:block">
                    <div className=" max-w-[1400px] px-8 py-6 lg:px-20">
                        <div className="grid grid-cols-3 gap-8">
                            {/* Contact */}
                            <div className="text-left">
                                <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white">
                                    Contact
                                </h3>
                                <div className="mt-2 space-y-0.5">
                                    <p className="text-sm text-white/80">T: +41 22 123 4567</p>
                                    <p className="text-sm text-white/80">hello@prestigesmile.studio</p>
                                </div>
                            </div>

                            {/* Hours */}
                            <div className="text-left">
                                <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white">
                                    Hours
                                </h3>
                                <div className="mt-2 space-y-0.5">
                                    <p className="text-sm text-white/80">Mon to Fri: 10:00 am — 7:00 pm</p>
                                    <p className="text-sm text-white/80">Sat: 10:00 am — 5:00 pm</p>
                                    <p className="text-sm text-white/80">Sun: Closed</p>
                                </div>
                            </div>

                            {/* Location */}
                            <div className="text-left">
                                <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white">
                                    Location
                                </h3>
                                <div className="mt-2 space-y-0.5">
                                    <p className="text-sm text-white/80">12 Rue du Rhône,</p>
                                    <p className="text-sm text-white/80">1204 Geneva, Switzerland</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* Mobile Contact Info Section - Below Hero */}
            <div className="bg-secondary px-6 py-8 md:hidden">
                <div className="mx-auto max-w-md">
                    {/* Contact */}
                    <div className="flex items-start gap-3 border-b border-primary/10 pb-5">
                        <svg className="mt-0.5 size-5 shrink-0 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <div>
                            <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-primary">Contact</h3>
                            <p className="mt-1.5 text-sm text-tertiary">+41 22 123 4567</p>
                            <p className="text-sm text-brand-600">hello@prestigesmile.studio</p>
                        </div>
                    </div>

                    {/* Hours */}
                    <div className="flex items-start gap-3 border-b border-primary/10 py-5">
                        <svg className="mt-0.5 size-5 shrink-0 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <div>
                            <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-primary">Hours</h3>
                            <div className="mt-1.5 space-y-0.5 text-sm text-tertiary">
                                <p>Mon – Fri: 10:00 am — 7:00 pm</p>
                                <p>Sat: 10:00 am — 5:00 pm</p>
                                <p>Sun: Closed</p>
                            </div>
                        </div>
                    </div>

                    {/* Location */}
                    <div className="flex items-start gap-3 pt-5">
                        <svg className="mt-0.5 size-5 shrink-0 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <div>
                            <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-primary">Location</h3>
                            <p className="mt-1.5 text-sm text-tertiary">12 Rue du Rhône,</p>
                            <p className="text-sm text-tertiary">1204 Geneva, Switzerland</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
