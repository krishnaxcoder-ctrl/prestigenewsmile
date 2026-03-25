"use client";

import { Phone01, Clock, MarkerPin01 } from "@untitledui/icons";

const contactInfo = [
    {
        id: 1,
        icon: Phone01,
        title: "Contacts",
        lines: ["T: +41 22 123 4567", "hello@prestigesmile.studio"],
    },
    {
        id: 2,
        icon: Clock,
        title: "Hours",
        lines: ["Mon to Fri: 10:00 am — 7:00 pm", "Sat: 10:00 am — 5:00 pm", "Sun: Closed"],
    },
    {
        id: 3,
        icon: MarkerPin01,
        title: "Location",
        lines: ["12 Rue du Rhône,", "1204 Geneva, Switzerland"],
    },
];

export function ContactSection() {
    return (
        <section className="bg-secondary">
            <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
                <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
                    {contactInfo.map((item) => (
                        <div key={item.id} className="flex flex-col items-center text-center">
                            <div className="flex size-14 items-center justify-center rounded-full bg-brand-50">
                                <item.icon className="size-6 text-brand-600" />
                            </div>
                            <h3
                                className="mt-5 text-lg font-medium uppercase tracking-wide text-primary"
                                style={{ fontFamily: "var(--global-heading-font-family)" }}
                            >
                                {item.title}
                            </h3>
                            <div className="mt-3 space-y-1">
                                {item.lines.map((line, index) => (
                                    <p key={index} className="text-md text-tertiary">
                                        {line}
                                    </p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* Bottom accent line */}
            <div className="h-1 bg-brand-600" />
        </section>
    );
}
