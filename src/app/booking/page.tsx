"use client";

import { Header } from "@/app/components/header";
import { Footer } from "@/app/components/footer";

export default function BookingPage() {
    const hours = [
        { day: "Monday", time: "10am - 8pm" },
        { day: "Tuesday", time: "10am - 8pm" },
        { day: "Wednesday", time: "10am - 8pm" },
        { day: "Thursday", time: "10am - 8pm" },
        { day: "Friday", time: "10am - 8pm" },
        { day: "Saturday", time: "10am - 7pm" },
        { day: "Sunday", time: "Closed" },
    ];

    return (
        <div>
            <Header />
            <main>
                {/* Opening Hours Section - same as homepage */}
                <section className="bg-cover bg-center bg-no-repeat px-4 py-12 md:py-16" style={{ backgroundImage: "url('/bgreviewssection.webp')" }}>
                    <div className="mx-auto grid max-w-5xl grid-cols-1 overflow-hidden rounded-2xl lg:grid-cols-2">
                        {/* Left - CTA */}
                        <div className="hidden flex-col justify-center bg-white px-5 py-10 text-left lg:flex lg:py-20">
                            <p className="text-sm uppercase tracking-[0.3em] text-[#8b6b5a]">
                                Ready for a brighter smile?
                            </p>

                            <div className="my-5 h-px w-full bg-[#c9bdb3]" />

                            <h2
                                className="text-3xl font-medium leading-snug text-[#4a3728] xl:text-5xl"
                                style={{ fontFamily: "'Eyesome Script', cursive" }}
                            >
                                Book your whitening consultation today!
                            </h2>

                            <p className="mt-4 text-sm leading-relaxed text-[#8b6b5a]">
                                Transform your smile with our professional teeth whitening treatments. Safe, effective, and tailored to your needs.
                            </p>

                            <div className="my-5 h-px w-full bg-[#c9bdb3]" />

                            {/* Features */}
                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <div className="flex size-8 items-center justify-center rounded-full bg-[#f5efe9]">
                                        <svg className="size-4 text-[#8b6b5a]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                                    </div>
                                    <span className="text-sm text-[#5a4639]">Professional whitening in 30 minutes</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="flex size-8 items-center justify-center rounded-full bg-[#f5efe9]">
                                        <svg className="size-4 text-[#8b6b5a]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                                    </div>
                                    <span className="text-sm text-[#5a4639]">Safe &amp; gentle on sensitive teeth</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="flex size-8 items-center justify-center rounded-full bg-[#f5efe9]">
                                        <svg className="size-4 text-[#8b6b5a]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                                    </div>
                                    <span className="text-sm text-[#5a4639]">Up to 8 shades whiter</span>
                                </div>
                            </div>
                        </div>

                        {/* Right - Opening Hours Card */}
                        <div className="bg-[#fcf5f0] px-6 py-8 sm:px-10 sm:py-10">
                            {/* Title */}
                            <div className="mb-6 text-center sm:mb-8">
                                <img src="/logobookingnow1.png" alt="Prestige Smile Studio" className="mx-auto h-15 sm:h-10" />
                                <h2
                                    className="mt-3 text-3xl font-medium uppercase tracking-[0.15em] text-[#5a3d2b] sm:text-5xl"
                                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                                >
                                    Opening
                                </h2>
                                <p
                                    className="mt-1 text-6xl text-[#8b6b5a]"
                                    style={{ fontFamily: "'Abramo Script', cursive" }}
                                >
                                    hours
                                </p>
                            </div>

                            {/* Hours list */}
                            <div className="space-y-0">
                                {hours.map((item, i) => (
                                    <div
                                        key={item.day}
                                        className={`flex items-center justify-between py-2.5 text-sm sm:py-3 sm:text-base ${i < hours.length - 1 ? "border-b border-[#c9bdb3]" : ""}`}
                                    >
                                        <span className="font-semibold text-[#4a3728]">{item.day}</span>
                                        <span className={`font-medium ${item.time === "Closed" ? "text-[#8b6b5a]" : "text-[#5a4639]"}`}>
                                            {item.time}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            {/* QR Code */}
                            <div className="mt-8 flex items-center justify-center gap-4 sm:gap-6">
                                <div>
                                    <p className="text-2xl font-bold text-primary sm:text-3xl" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                                        Scan here.
                                    </p>
                                    <p className="text-sm uppercase tracking-widest text-tertiary sm:text-base">
                                        To book your<br />appointment.
                                    </p>
                                </div>
                                <img
                                    src="/qrcode.png"
                                    alt="QR code to book appointment"
                                    className="size-28 border-2 border-[#c9bdb3] sm:size-32"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Salonized Booking Section - 2 Column */}
                <section
                    className="px-4 py-12 md:px-8 md:py-16 lg:px-16"
                    style={{ backgroundColor: "#fcf5f0" }}
                >
                    <div className="mx-auto max-w-6xl">
                        <div className="mb-10 text-center">
                            <p className="text-sm uppercase tracking-[0.3em] text-[#8b6b5a]">
                                Schedule Online
                            </p>
                            <h2
                                className="mt-3 text-3xl font-medium leading-snug md:text-4xl xl:text-5xl"
                                style={{ fontFamily: "'Eyesome Script', cursive", color: "#4a3728" }}
                            >
                                Pick a date &amp; time
                            </h2>
                            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-[#8b6b5a]">
                                Choose a convenient time for your professional teeth whitening session. Quick, easy, and hassle-free booking.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[480px_1fr]">
                            {/* Left - Why Book / How It Works / Info */}
                            <div className="space-y-6 lg:sticky lg:top-8 lg:self-start">
                                {/* How It Works */}
                                <div className="overflow-hidden rounded-2xl border border-brand-200 bg-white shadow-lg">
                                    <div className="bg-brand-50 px-6 py-5">
                                        <h3
                                            className="text-xl font-medium text-primary"
                                            style={{ fontFamily: "'Cormorant Garamond', serif" }}
                                        >
                                            Comment se d&eacute;roule votre s&eacute;ance
                                        </h3>
                                    </div>

                                    <div className="p-5">
                                        <div className="space-y-4">
                                            {[
                                                { step: "1", title: "Diagnostic & &Eacute;ligibilit&eacute;", desc: "Questionnaire de sant&eacute; confidentiel avant votre rendez-vous" },
                                                { step: "2", title: "Analyse de la teinte", desc: "&Eacute;valuation avec un teintier professionnel" },
                                                { step: "3", title: "Protection gencives", desc: "Application d&apos;une protection gingivale" },
                                                { step: "4", title: "Gel blanchissant", desc: "Application du gel professionnel sur les dents" },
                                                { step: "5", title: "Activation LED", desc: "La lampe LED active le gel pour un &eacute;claircissement uniforme" },
                                                { step: "6", title: "R&eacute;sultats", desc: "Comparaison de teinte pour observer l&apos;&eacute;claircissement" },
                                            ].map((item) => (
                                                <div key={item.step} className="flex gap-3">
                                                    <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-brand-600 text-xs font-bold text-white">
                                                        {item.step}
                                                    </div>
                                                    <div>
                                                        <p className="text-sm font-semibold text-primary" dangerouslySetInnerHTML={{ __html: item.title }} />
                                                        <p className="mt-0.5 text-xs text-tertiary" dangerouslySetInnerHTML={{ __html: item.desc }} />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="mt-5 flex items-center gap-2 rounded-xl bg-brand-50 p-3">
                                            <svg className="size-4 shrink-0 text-brand-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <p className="text-xs text-tertiary">Dur&eacute;e de la s&eacute;ance : environ <strong className="text-primary">1 heure</strong></p>
                                        </div>
                                    </div>
                                </div>

                                {/* Duo Offer */}
                                <div className="flex items-center gap-4 rounded-2xl border border-brand-200 bg-white p-5 shadow-lg">
                                    <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-brand-100">
                                        <svg className="size-6 text-brand-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-primary">Offre Duo &mdash; <span className="text-brand-600">-10%</span></p>
                                        <p className="mt-0.5 text-xs text-tertiary">Pour toute r&eacute;servation &agrave; deux personnes le m&ecirc;me jour</p>
                                    </div>
                                </div>

                            </div>

                            {/* Right - Salonized Widget */}
                            <div className="overflow-hidden rounded-2xl border border-[#c9bdb3] shadow-lg">
                                <iframe
                                    src="https://institut-prestige-smile.salonized.com/widget_bookings/new"
                                    title="Book an appointment at Prestige Smile"
                                    className="w-full border-0"
                                    style={{ height: "800px", backgroundColor: "transparent" }}
                                    allow="payment"
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
