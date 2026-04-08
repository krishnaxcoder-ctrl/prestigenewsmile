export function OpeningHoursSection() {
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
        <section className="bg-cover bg-center bg-no-repeat px-4 py-12 md:py-16" style={{ backgroundImage: "url('/bgreviewssection.webp')" }}>
            <div className="mx-auto max-w-md">
                {/* Card */}
                <div className="relative rounded-2xl bg-[#d9cfc7] px-6 py-8 shadow-sm sm:px-10 sm:py-10">
                    {/* Pin decorations */}
                    <div className="absolute left-4 top-4 size-3 rounded-full bg-[#e8e0d0] shadow-inner sm:left-6 sm:top-6 sm:size-4" />
                    <div className="absolute right-4 top-4 size-3 rounded-full bg-[#e8e0d0] shadow-inner sm:right-6 sm:top-6 sm:size-4" />

                    {/* Title */}
                    <div className="mb-6 text-center sm:mb-8">
                        <h2
                            className="text-2xl font-medium uppercase tracking-[0.15em] text-[#5a3d2b] sm:text-3xl"
                            style={{ fontFamily: "'Cormorant Garamond', serif" }}
                        >
                            Opening
                        </h2>
                        <p
                            className="mt-0.5 text-lg italic text-[#8b6b5a] sm:text-xl"
                            style={{ fontFamily: "'Cormorant Garamond', serif" }}
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
                </div>

                {/* QR Code Section */}
                <div className="mt-8 flex items-center justify-center gap-4 sm:gap-6">
                    <div>
                        <p className="text-lg font-bold text-primary sm:text-xl" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                            Scan here.
                        </p>
                        <p className="text-xs uppercase tracking-widest text-tertiary sm:text-sm">
                            To book your<br />appointment.
                        </p>
                    </div>
                    <img
                        src="/qrcode.png"
                        alt="QR code to book appointment"
                        className="size-20 sm:size-24"
                    />
                </div>
            </div>
        </section>
    );
}
