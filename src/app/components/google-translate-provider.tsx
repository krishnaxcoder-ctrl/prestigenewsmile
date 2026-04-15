"use client";

import { useEffect } from "react";

declare global {
    interface Window {
        googleTranslateElementInit?: () => void;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        google?: any;
    }
}

export function GoogleTranslateProvider() {
    useEffect(() => {
        // Define the callback before injecting the script
        window.googleTranslateElementInit = () => {
            if (window.google?.translate?.TranslateElement) {
                new window.google.translate.TranslateElement(
                    {
                        pageLanguage: "en",
                        includedLanguages: "en,fr",
                        autoDisplay: false,
                        layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
                    },
                    "google_translate_element"
                );
            }
        };

        if (!document.querySelector('script[src*="translate.google.com/translate_a/element.js"]')) {
            const script = document.createElement("script");
            script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
            script.async = true;
            document.body.appendChild(script);
        }
    }, []);

    return (
        <>
            {/* Hidden mount node for Google's widget */}
            <div id="google_translate_element" aria-hidden="true" className="pointer-events-none fixed -top-96 left-0 size-0 opacity-0" />
            {/* Hide Google's banner/toolbar and prevent body offset */}
            <style>{`
                .goog-te-banner-frame,
                .goog-te-gadget,
                .goog-te-balloon-frame,
                #goog-gt-tt,
                .goog-tooltip,
                .goog-tooltip:hover,
                .goog-text-highlight { display: none !important; box-shadow: none !important; background: none !important; }
                body { top: 0 !important; position: static !important; }
                .skiptranslate > iframe { display: none !important; }
                font, font > font { background-color: transparent !important; box-shadow: none !important; }
            `}</style>
        </>
    );
}

export function applyLanguage(lang: string) {
    if (typeof document === "undefined") return;

    const host = window.location.hostname;
    const expire = "expires=Thu, 01 Jan 1970 00:00:00 GMT";

    // Clear existing Google Translate cookies on every known scope
    document.cookie = `googtrans=; path=/; ${expire}`;
    document.cookie = `googtrans=; path=/; domain=${host}; ${expire}`;
    document.cookie = `googtrans=; path=/; domain=.${host}; ${expire}`;

    if (lang !== "en") {
        const value = `/en/${lang}`;
        document.cookie = `googtrans=${value}; path=/`;
        document.cookie = `googtrans=${value}; path=/; domain=${host}`;
        document.cookie = `googtrans=${value}; path=/; domain=.${host}`;
    }

    window.location.reload();
}
