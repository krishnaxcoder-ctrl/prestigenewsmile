"use client";

import { memo } from "react";
import Link from "next/link";
import { ArrowRight, Phone01, Shield01, Award01, Star01 } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";

// Best practice: rendering-hoist-jsx - static data defined outside component
const trustBadges = [
    { icon: Shield01, label: "Safe & Gentle" },
    { icon: Award01, label: "Professional Care" },
    { icon: Star01, label: "500+ Happy Clients" },
] as const;

// Best practice: rerender-memo - memoize to prevent unnecessary re-renders
export const CTASection = memo(function CTASection() {
    return (
        <section className="relative overflow-hidden bg-teal-600 px-4 py-10 sm:px-6 sm:py-14 md:py-16 lg:py-24">
            {/* Dot pattern */}
            <div
                className="absolute inset-0 opacity-[0.15]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='3' cy='3' r='1.5' fill='%23ffffff'/%3E%3C/svg%3E")`,
                    backgroundSize: '24px 24px',
                }}
            />

            <div className="relative mx-auto max-w-7xl">
                <div className="flex flex-col items-center text-center">
                    {/* Badge */}
                    <div className="mb-4 inline-flex sm:mb-6">
                        <div className="flex w-max cursor-pointer items-center rounded-full bg-white/10 py-1 pl-1 pr-2 text-xs font-medium text-white shadow-xs backdrop-blur-sm transition duration-100 ease-linear hover:bg-white/20 sm:text-sm">
                            <span className="mr-1.5 flex items-center gap-1 rounded-full bg-white/20 px-1.5 py-0.5 shadow-xs sm:mr-2 sm:gap-1.5 sm:px-2">
                                <span className="inline-block size-1.5 shrink-0 rounded-full bg-teal-300 outline-2 -outline-offset-1 outline-teal-300/30 sm:size-2 sm:outline-3"></span>
                                <span className="hidden sm:inline">Limited Slots</span>
                                <span className="sm:hidden">Limited</span>
                            </span>
                            <span className="hidden sm:inline">Book your session today</span>
                            <span className="sm:hidden">Book now</span>
                            <ArrowRight className="ml-1 size-3.5 text-teal-200 sm:size-4" />
                        </div>
                    </div>

                    {/* Main heading */}
                    <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl md:text-display-sm lg:text-display-md">
                        Ready to transform your smile?
                    </h2>

                    {/* Subheading */}
                    <p className="mt-3 max-w-2xl text-sm leading-relaxed text-teal-100 sm:mt-4 sm:text-base lg:text-lg">
                        Join <span className="font-semibold text-white">500+ happy clients</span> who have already brightened their smiles.
                        <span className="hidden sm:inline"> Book your appointment today and see results in just one session.</span>
                    </p>

                    {/* CTA Buttons */}
                    <div className="mt-6 flex w-full flex-col items-center gap-3 sm:mt-8 sm:w-auto sm:flex-row">
                        <Link href="/booking" className="w-full sm:w-auto">
                            <Button color="secondary" size="lg" iconTrailing={ArrowRight} className="w-full justify-center sm:size-xl">
                                Book Appointment
                            </Button>
                        </Link>
                        <Link href="tel:+41783000619" className="w-full sm:w-auto">
                            <Button
                                size="lg"
                                iconLeading={Phone01}
                                className="w-full justify-center bg-white/20 text-white hover:bg-white/30 sm:size-xl"
                            >
                                Call Us
                            </Button>
                        </Link>
                    </div>

                    {/* Trust Badges */}
                    <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:mt-10 sm:gap-4">
                        {trustBadges.map((badge) => (
                            <div
                                key={badge.label}
                                className="flex items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-1 transition-all duration-200 hover:bg-white/20 sm:gap-2 sm:px-3 sm:py-1.5"
                            >
                                <badge.icon className="size-3.5 text-teal-200 sm:size-4" />
                                <span className="text-[10px] font-medium text-teal-100 sm:text-xs">{badge.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
});
