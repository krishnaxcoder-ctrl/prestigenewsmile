"use client";

import { useState } from "react";
import Link from "next/link";

const services = [
    {
        id: "whitening",
        name: "WHITENING",
        icon: (
            <svg viewBox="0 0 64 64" fill="none" className="size-12" stroke="currentColor" strokeWidth="1.5">
                <path d="M32 8c-4 0-7 3-8 8-1 5 0 12 2 18 2 6 5 14 6 22 0 2 0 4-2 4s-3-2-4-6c-1-4-3-10-6-16-3-6-6-14-6-22 0-6 4-10 10-10" strokeLinecap="round" />
                <path d="M32 8c4 0 7 3 8 8 1 5 0 12-2 18-2 6-5 14-6 22 0 2 0 4 2 4s3-2 4-6c1-4 3-10 6-16 3-6 6-14 6-22 0-6-4-10-10-10" strokeLinecap="round" />
                <path d="M28 16l8 0" strokeLinecap="round" />
                <path d="M26 24l12 0" strokeLinecap="round" />
            </svg>
        ),
        description: "Reveal your brightest smile with our professional whitening treatments. Up to 7 shades lighter in just one session.",
    },
    {
        id: "maintenance",
        name: "MAINTENANCE",
        icon: (
            <svg viewBox="0 0 64 64" fill="none" className="size-12" stroke="currentColor" strokeWidth="1.5">
                <circle cx="32" cy="32" r="20" />
                <path d="M32 18v14l8 8" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M32 8v4M32 52v4M8 32h4M52 32h4" strokeLinecap="round" />
            </svg>
        ),
        description: "Keep your smile radiant with regular maintenance sessions. Recommended every 6 months for lasting results.",
    },
    {
        id: "duo",
        name: "DUO OFFER",
        icon: (
            <svg viewBox="0 0 64 64" fill="none" className="size-12" stroke="currentColor" strokeWidth="1.5">
                <circle cx="22" cy="24" r="10" />
                <circle cx="42" cy="24" r="10" />
                <path d="M12 52c0-8 6-14 14-14h4" strokeLinecap="round" />
                <path d="M52 52c0-8-6-14-14-14h-4" strokeLinecap="round" />
                <path d="M28 44h8" strokeLinecap="round" />
            </svg>
        ),
        description: "Share the experience with a friend or partner. Enjoy 10% off when you book together.",
    },
    {
        id: "products",
        name: "PRODUCTS",
        icon: (
            <svg viewBox="0 0 64 64" fill="none" className="size-12" stroke="currentColor" strokeWidth="1.5">
                <rect x="16" y="24" width="32" height="28" rx="4" />
                <path d="M16 36h32" />
                <path d="M24 24v-6a8 8 0 0116 0v6" strokeLinecap="round" />
                <circle cx="32" cy="46" r="4" />
            </svg>
        ),
        description: "Professional-grade whitening products for at-home care. Maintain your results between sessions.",
    },
    {
        id: "consultation",
        name: "CONSULTATION",
        icon: (
            <svg viewBox="0 0 64 64" fill="none" className="size-12" stroke="currentColor" strokeWidth="1.5">
                <circle cx="32" cy="20" r="12" />
                <path d="M16 52c0-10 7-18 16-18s16 8 16 18" strokeLinecap="round" />
                <path d="M44 38l8-4M44 44l6 2" strokeLinecap="round" />
            </svg>
        ),
        description: "Book a free consultation to discuss your smile goals. Our experts will create a personalized treatment plan.",
    },
];

export function ServiceMenuSection() {
    const [activeService, setActiveService] = useState(services[0].id);
    const activeServiceData = services.find((s) => s.id === activeService);

    return (
        <section className="relative py-12 md:py-24" style={{ background: "linear-gradient(135deg, #ffffff 0%, #fdf8f6 30%, #faf0ed 60%, #f5e6e0 100%)" }}>
            <div className="mx-auto max-w-4xl">
                {/* Heading */}
                <h2
                    className="mb-8 text-center text-display-xs font-normal text-primary md:mb-16 md:text-display-sm"
                    style={{ fontFamily: "var(--global-heading-font-family)" }}
                >
                    Service Menu
                </h2>

                {/* Service Icons */}
                <div className="mb-10 px-4 md:px-0">
                    <div className="grid grid-cols-5 gap-3 md:gap-10">
                        {services.map((service) => (
                            <button
                                key={service.id}
                                onClick={() => setActiveService(service.id)}
                                className={`flex flex-col items-center gap-2 transition-all duration-200 md:gap-3 ${
                                    activeService === service.id
                                        ? "text-primary"
                                        : "text-tertiary hover:text-secondary"
                                }`}
                            >
                                <div className="text-current [&_svg]:size-8 sm:[&_svg]:size-10 md:[&_svg]:size-12">{service.icon}</div>
                                <div className="relative pb-2">
                                    <span className="whitespace-nowrap text-[8px] font-medium uppercase tracking-[0.05em] sm:text-[10px] sm:tracking-[0.1em] md:text-xs md:tracking-[0.15em]">
                                        {service.name}
                                    </span>
                                    {activeService === service.id && (
                                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
                                    )}
                                </div>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Description */}
                <div className="mb-8 text-center md:mb-10">
                    <p
                        className="mx-auto max-w-lg px-4 text-2xl text-secondary md:max-w-2xl md:px-0 md:text-3xl"
                        style={{ fontFamily: "'Eyesome Script', cursive" }}
                    >
                        {activeServiceData?.description}
                    </p>
                </div>

                {/* Button */}
                <div className="text-center">
                    <Link
                        href="/services"
                        className="inline-block border border-gray-900 bg-gray-900 px-8 py-3.5 text-[11px] font-medium uppercase tracking-[0.2em] text-white transition-colors hover:bg-transparent hover:text-gray-900 md:px-10 md:py-4 md:text-xs"
                    >
                        View Service Menu
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default ServiceMenuSection;
