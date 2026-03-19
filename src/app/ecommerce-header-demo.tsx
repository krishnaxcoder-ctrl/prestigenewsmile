"use client";

import { EcommerceHeader } from "@/components/marketing/header-navigation/ecommerce-header";

export const EcommerceHeaderDemo = () => {
    return (
        <div className="min-h-screen bg-secondary">
            <EcommerceHeader
                cartItemCount={3}
                cartTotal="$149.99"
                promoSlides={[
                    { text: "Get up to 60% savings with code", linkText: "FRIDAYGLOW", linkHref: "#" },
                    { text: "Free shipping on orders over $50", linkText: "Shop now", linkHref: "/shop" },
                    { text: "New arrivals just dropped!", linkText: "Explore", linkHref: "/new-arrivals" },
                ]}
            />

            {/* Demo content */}
            <main className="mx-auto max-w-7xl px-4 py-16 md:px-8">
                <div className="text-center">
                    <h1 className="text-display-md font-semibold text-primary">
                        Monica Beauty Store
                    </h1>
                    <p className="mt-4 text-lg text-tertiary">
                        E-commerce header component demo. Scroll down to see the sticky header behavior.
                    </p>
                </div>

                {/* Spacer for scroll testing */}
                <div className="mt-16 grid gap-8 md:grid-cols-3">
                    {Array.from({ length: 9 }).map((_, i) => (
                        <div
                            key={i}
                            className="aspect-[4/5] rounded-2xl bg-primary shadow-sm ring-1 ring-secondary"
                        />
                    ))}
                </div>
            </main>
        </div>
    );
};
