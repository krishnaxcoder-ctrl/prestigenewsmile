"use client";

import { memo } from "react";
import Link from "next/link";
import { ArrowRight, Phone01, Shield01, Award01, Star01 } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";

const trustBadges = [
    { icon: Shield01, label: "Safe & Gentle" },
    { icon: Award01, label: "Professional Care" },
    { icon: Star01, label: "500+ Happy Clients" },
] as const;

export const CTASection = memo(function CTASection() {
    return (
        <section className="relative overflow-hidden bg-brand-600 px-4 py-12 sm:px-6 sm:py-14 md:py-16 lg:py-24">
            <div className="absolute inset-0 opacity-[0.15]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='3' cy='3' r='1.5' fill='%23ffffff'/%3E%3C/svg%3E")`, backgroundSize: '24px 24px' }} />
            <div className="relative mx-auto max-w-[1400px]">
                <div className="flex flex-col items-center text-center">
                    <div className="mb-4 hidden sm:mb-6 sm:inline-flex">
                        <div className="flex w-max cursor-pointer items-center rounded-full bg-white/10 py-1 pl-1 pr-2 text-sm font-medium text-white shadow-xs backdrop-blur-sm hover:bg-white/20">
                            <span className="mr-2 flex items-center gap-1.5 rounded-full bg-white/20 px-2 py-0.5 shadow-xs">
                                <span className="inline-block size-2 shrink-0 rounded-full bg-brand-300 outline-3 -outline-offset-1 outline-brand-300/30"></span>
                                Limited Slots
                            </span>
                            Book your session today
                            <ArrowRight className="ml-1 size-4 text-brand-200" />
                        </div>
                    </div>
                    <div className="mb-3 inline-flex sm:hidden">
                        <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">Limited Slots Available</span>
                    </div>
                    <h2 className="text-xl font-semibold uppercase tracking-tight text-white sm:text-3xl md:text-display-sm lg:text-display-md" style={{ fontFamily: "var(--global-heading-font-family)" }}>Ready to transform your smile?</h2>
                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-brand-100 sm:mt-4 sm:text-base lg:text-lg">
                        Join <span className="font-semibold text-white">500+ happy clients</span> who have already brightened their smiles.
                        <span className="hidden sm:inline"> Book your appointment today and see results in just one session.</span>
                    </p>
                    <div className="mt-5 flex w-full items-center justify-center gap-2 sm:mt-8 sm:w-auto sm:gap-3">
                        <Link href="/booking" className="flex-1 sm:flex-none">
                            <Button color="secondary" size="md" iconTrailing={ArrowRight} className="w-full justify-center sm:size-xl">
                                <span className="sm:hidden">Book Now</span>
                                <span className="hidden sm:inline">Book Appointment</span>
                            </Button>
                        </Link>
                        <Link href="tel:+41783000619" className="flex-1 sm:flex-none">
                            <Button size="md" iconLeading={Phone01} className="w-full justify-center bg-white/20 text-white hover:bg-white/30 sm:size-xl">
                                <span className="sm:hidden">Call</span>
                                <span className="hidden sm:inline">Call Us</span>
                            </Button>
                        </Link>
                    </div>
                    <div className="mt-6 flex items-center justify-center gap-3 sm:mt-10 sm:flex-wrap sm:gap-4">
                        {trustBadges.map((badge) => (
                            <div key={badge.label} className="flex shrink-0 items-center gap-1.5 text-brand-100 sm:gap-2 sm:rounded-full sm:bg-white/10 sm:px-3 sm:py-1.5 sm:hover:bg-white/20">
                                <badge.icon className="size-4 text-brand-200" />
                                <span className="text-xs font-medium">{badge.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
});
