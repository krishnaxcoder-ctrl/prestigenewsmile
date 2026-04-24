"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { X } from "@untitledui/icons";

const BOOKING_URL = "https://institut-prestige-smile.salonized.com/widget_bookings/new";

export const FloatingDock = () => {
    const [isBookingOpen, setIsBookingOpen] = useState(false);

    useEffect(() => {
        if (!isBookingOpen) return;
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") setIsBookingOpen(false);
        };
        window.addEventListener("keydown", onKey);
        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener("keydown", onKey);
        };
    }, [isBookingOpen]);

    return (
        <>
            <div className="pointer-events-none fixed inset-x-0 bottom-5 z-50 flex justify-center px-4 sm:bottom-6 sm:justify-end sm:pr-6">
                <nav
                    aria-label="Quick actions"
                    className="pointer-events-auto flex items-stretch overflow-hidden rounded-lg bg-neutral-900/95 shadow-[0_8px_28px_rgba(0,0,0,0.28)] ring-1 ring-white/10 backdrop-blur-md"
                >
                    <Link
                        href="/"
                        aria-label="Prestige Smile home"
                        className="flex items-center justify-center px-4 py-3 text-white transition duration-100 ease-linear hover:bg-white/10"
                    >
                        <img
                            src="/favicon.png"
                            alt="Prestige Smile"
                            className="h-9 w-auto invert"
                        />
                    </Link>

                    <span aria-hidden="true" className="my-2 w-px bg-white/15" />

                    <button
                        type="button"
                        onClick={() => setIsBookingOpen(true)}
                        className="flex items-center px-5 py-3 text-sm font-medium text-white transition duration-100 ease-linear hover:bg-white/10 sm:text-base"
                    >
                        Book appointment
                    </button>

                    <span aria-hidden="true" className="my-2 w-px bg-white/15" />

                    <Link
                        href="/gift-cards"
                        className="flex items-center px-5 py-3 text-sm font-medium text-white transition duration-100 ease-linear hover:bg-white/10 sm:text-base"
                    >
                        Gift card
                    </Link>
                </nav>
            </div>

            {isBookingOpen && (
                <div
                    role="dialog"
                    aria-modal="true"
                    aria-label="Book an appointment"
                    className="fixed inset-0 z-[100] flex justify-end"
                >
                    <div
                        aria-hidden="true"
                        onClick={() => setIsBookingOpen(false)}
                        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                    />
                    <div className="relative flex h-full w-full max-w-xl flex-col bg-white shadow-2xl">
                        <button
                            type="button"
                            onClick={() => setIsBookingOpen(false)}
                            aria-label="Close booking"
                            className="absolute top-4 right-4 z-10 flex size-9 items-center justify-center rounded-full bg-white/90 text-neutral-800 shadow-md ring-1 ring-black/5 transition duration-100 ease-linear hover:bg-white"
                        >
                            <X className="size-5" />
                        </button>
                        <iframe
                            src={BOOKING_URL}
                            title="Prestige Smile booking"
                            className="h-full w-full border-0"
                            allow="payment"
                        />
                    </div>
                </div>
            )}
        </>
    );
};
