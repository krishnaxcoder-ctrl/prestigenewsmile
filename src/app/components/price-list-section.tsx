"use client";

const priceItems = [
    { id: 1, name: "Séance de blanchiment dentaire", price: "99 CHF / €", highlighted: true },
    { id: 2, name: "Traitement complet - 2 séances", price: "169 CHF / €", highlighted: false },
    { id: 3, name: "Séance d'entretien", price: "79 CHF / €", highlighted: false },
    { id: 4, name: "Avantage Duo / Couple", price: "-10%", highlighted: false },
];

const paymentMethods = ["Twint", "Révolut", "Cash"];

export function PriceListSection() {
    return (
        <section className="bg-[#F9F7F5]">
            {/* Top accent line */}
            <div className="h-[2px] w-full bg-[#8B6F6F] shadow-[0_0_10px_rgba(139,111,111,0.8)]" />

            <div className="mx-auto max-w-[1400px] px-4 py-16 md:px-8 md:py-24">
                {/* Desktop: 2-column layout */}
                <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-20">
                    {/* Left - Header & payment */}
                    <div className="lg:col-span-5">
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8b6b5a]">
                            Our Pricing
                        </p>
                        <h2
                            className="mt-4 text-4xl font-light text-[#4a3728] md:text-5xl lg:text-6xl"
                            style={{ fontFamily: "'Cormorant Garamond', serif" }}
                        >
                            Price{" "}
                            <span
                                className="italic"
                                style={{ fontFamily: "'Eyesome Script', cursive" }}
                            >
                                List
                            </span>
                        </h2>
                        <p
                            className="mt-3 text-lg text-[#8b6b5a] lg:text-xl"
                            style={{ fontFamily: "'Cormorant Garamond', serif" }}
                        >
                            Teeth Whitening Services
                        </p>

                        {/* Decorative divider */}
                        <div className="my-8 h-px w-20 bg-[#c9bdb3]" />

                        <p
                            className="text-[15px] leading-relaxed text-[#8b6b5a]"
                            style={{ fontFamily: "'Cormorant Garamond', serif" }}
                        >
                            Des tarifs transparents pour un sourire éclatant. Chaque séance est réalisée avec des produits professionnels dans un cadre confortable et sécurisé.
                        </p>

                        {/* Payment methods */}
                        <div className="mt-8">
                            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8b6b5a]">
                                Moyens de paiement
                            </p>
                            <div className="flex items-center gap-3">
                                {paymentMethods.map((method) => (
                                    <span
                                        key={method}
                                        className="rounded-full border border-[#c9bdb3] bg-white px-4 py-1.5 text-[13px] font-medium text-[#5a4639]"
                                    >
                                        {method}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right - Price cards */}
                    <div className="lg:col-span-7">
                        <div className="space-y-4">
                            {priceItems.map((item) => (
                                <div
                                    key={item.id}
                                    className={`group relative overflow-hidden rounded-xl transition-all duration-200 ${
                                        item.highlighted
                                            ? "shadow-lg shadow-[#8b6b5a]/10"
                                            : "hover:shadow-md hover:shadow-[#8b6b5a]/5"
                                    }`}
                                >
                                    {/* Gold border for highlighted */}
                                    {item.highlighted && (
                                        <div
                                            className="absolute inset-0 rounded-xl p-[2px]"
                                            style={{
                                                background: "linear-gradient(135deg, #d4af37, #f5e6a3, #d4af37)",
                                            }}
                                        >
                                            <div className="size-full rounded-[10px] bg-white" />
                                        </div>
                                    )}

                                    <div
                                        className={`relative flex items-center justify-between rounded-xl px-7 py-6 lg:px-8 lg:py-7 ${
                                            item.highlighted
                                                ? "bg-transparent"
                                                : "border border-[#e8e0d8] bg-white"
                                        }`}
                                    >
                                        <div className="flex items-center gap-4">
                                            {item.highlighted && (
                                                <span className="flex size-6 items-center justify-center text-[14px]">
                                                    &#9733;
                                                </span>
                                            )}
                                            <span
                                                className="text-[16px] font-medium text-[#4a3728] lg:text-[18px]"
                                                style={{ fontFamily: "'Cormorant Garamond', serif" }}
                                            >
                                                {item.name}
                                            </span>
                                        </div>
                                        <span
                                            className={`shrink-0 text-right text-[18px] font-semibold lg:text-[22px] ${
                                                item.highlighted ? "text-[#8b6b5a]" : "text-[#4a3728]"
                                            }`}
                                            style={{ fontFamily: "'Cormorant Garamond', serif" }}
                                        >
                                            {item.price}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom accent line */}
            <div className="h-[2px] w-full bg-[#8B6F6F] shadow-[0_0_10px_rgba(139,111,111,0.8)]" />
        </section>
    );
}

export default PriceListSection;
