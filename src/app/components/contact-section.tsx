export function ContactSection() {
    return (
        <section className="bg-secondary">
            <div className="mx-auto max-w-[1400px] px-4 py-16 md:px-8 md:py-20">
                <div className="mx-auto grid max-w-lg grid-cols-1 gap-0 md:max-w-none md:grid-cols-3 md:gap-8">
                    {/* Contact */}
                    <div className="flex flex-col items-start gap-4 border-b border-primary/10 pb-6 md:items-center md:border-b-0 md:border-r md:pb-0 md:pr-8 md:text-center">
                        <svg className="size-7 shrink-0 text-brand-600 md:size-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <div>
                            <h3 className="text-base font-semibold uppercase tracking-[0.15em] text-primary">Contact</h3>
                            <p className="mt-2 text-lg text-tertiary">+41 22 123 4567</p>
                            <p className="text-lg text-brand-600">hello@prestigesmile.studio</p>
                        </div>
                    </div>

                    {/* Hours */}
                    <div className="flex flex-col items-start gap-4 border-b border-primary/10 py-6 md:items-center md:border-b-0 md:border-r md:py-0 md:px-8 md:text-center">
                        <svg className="size-7 shrink-0 text-brand-600 md:size-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <div>
                            <h3 className="text-base font-semibold uppercase tracking-[0.15em] text-primary">Hours</h3>
                            <div className="mt-2 space-y-1 text-lg text-tertiary">
                                <p>Mon – Fri: 10:00 am — 7:00 pm</p>
                                <p>Sat: 10:00 am — 5:00 pm</p>
                                <p>Sun: Closed</p>
                            </div>
                        </div>
                    </div>

                    {/* Location */}
                    <div className="flex flex-col items-start gap-4 pt-6 md:items-center md:pt-0 md:pl-8 md:text-center">
                        <svg className="size-7 shrink-0 text-brand-600 md:size-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <div>
                            <h3 className="text-base font-semibold uppercase tracking-[0.15em] text-primary">Location</h3>
                            <p className="mt-2 text-lg text-tertiary">12 Rue du Rhône,</p>
                            <p className="text-lg text-tertiary">1204 Geneva, Switzerland</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Bottom accent line */}
            <div className="h-1 bg-brand-600" />
        </section>
    );
}
