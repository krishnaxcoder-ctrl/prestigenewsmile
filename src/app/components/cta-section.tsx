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
        <section className="relative overflow-hidden bg-teal-600 py-16 lg:py-24">
            {/* Dot pattern */}
            <div
                className="absolute inset-0 opacity-[0.15]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='3' cy='3' r='1.5' fill='%23ffffff'/%3E%3C/svg%3E")`,
                    backgroundSize: '24px 24px',
                }}
            />

            <div className="relative mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center text-center">
                    {/* Badge */}
                    <div className="mb-6 inline-flex">
                        <Badge type="pill-color" size="md" color="warning">
                            Limited Slots Available
                        </Badge>
                    </div>

                    {/* Main heading */}
                    <h2 className="text-display-sm font-semibold tracking-tight text-white sm:text-display-md lg:text-display-lg">
                        Ready to transform your smile?
                    </h2>

                    {/* Subheading */}
                    <p className="mt-4 max-w-2xl text-base leading-relaxed text-teal-100 lg:text-lg">
                        Join <span className="font-semibold text-white">500+ happy clients</span> who have already brightened their smiles.
                        Book your appointment today and see results in just one session.
                    </p>

                    {/* CTA Buttons */}
                    <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
                        <Link href="/booking">
                            <Button color="secondary" size="xl" iconTrailing={ArrowRight} className="w-full sm:w-auto">
                                Book Your Appointment
                            </Button>
                        </Link>
                        <Link href="tel:+41783000619">
                            <Button
                                size="xl"
                                iconLeading={Phone01}
                                className="w-full sm:w-auto bg-white/20 text-white hover:bg-white/30"
                            >
                                Call Us
                            </Button>
                        </Link>
                    </div>

                    {/* Trust Badges */}
                    <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                        {trustBadges.map((badge) => (
                            <div
                                key={badge.label}
                                className="flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 transition-all duration-200 hover:bg-white/20"
                            >
                                <badge.icon className="size-4 text-teal-200" />
                                <span className="text-xs font-medium text-teal-100">{badge.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
});
