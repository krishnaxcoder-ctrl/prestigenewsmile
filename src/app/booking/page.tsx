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

                {/* Salonized Booking Section */}
                <section
                    className="px-4 py-12 md:px-8 md:py-16 lg:px-16"
                    style={{ backgroundColor: "#fcf5f0" }}
                >
                    <div className="mx-auto max-w-5xl">
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
                        <div className="overflow-hidden rounded-2xl border border-[#c9bdb3] shadow-lg">
                            <iframe
                                src="https://institut-prestige-smile.salonized.com/widget_bookings/new"
                                title="Book an appointment at Prestige Smile"
                                className="relative z-10 w-full border-0"
                                style={{ height: "700px" }}
                                allow="payment"
                            />
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
