"use client";

import { useRef, useState, useId } from "react";
import Link from "next/link";
import {
    ChevronDown,
    ChevronLeft,
    ChevronRight,
    Globe02,
    Menu01,
} from "@untitledui/icons";
import {
    Button as AriaButton,
    Dialog as AriaDialog,
    DialogTrigger as AriaDialogTrigger,
    ListBox as AriaListBox,
    ListBoxItem as AriaListBoxItem,
    Popover as AriaPopover,
    Select as AriaSelect,
    SelectValue as AriaSelectValue,
} from "react-aria-components";
import { Button } from "@/components/base/buttons/button";
import { cx } from "@/utils/cx";

// Promo slides data
const promoSlides = [
    { text: "Book your session today", linkText: "CHF 99", linkHref: "/contact" },
    { text: "Up to 7 shades lighter in one session", linkText: "Learn more", linkHref: "/about" },
    { text: "Duo offer: -10% for two people", linkText: "Book now", linkHref: "/contact" },
];

// Navigation items
const navItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/about", hasDropdown: true },
    { label: "Shop", href: "/shop" },
    { label: "About", href: "/about" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
];

// Promo Banner
const PromoBanner = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % promoSlides.length);
    const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + promoSlides.length) % promoSlides.length);

    return (
        <div className="relative flex h-10 items-center justify-center bg-brand-solid text-white">
            <button
                onClick={prevSlide}
                className="absolute left-4 flex size-6 items-center justify-center rounded-full transition duration-100 ease-linear hover:bg-white/10"
                aria-label="Previous"
            >
                <ChevronLeft className="size-4" />
            </button>

            <div className="flex items-center gap-1.5 px-8 text-center text-[10px] font-medium uppercase tracking-widest sm:px-0 sm:text-xs">
                <span className="line-clamp-1">{promoSlides[currentSlide].text}</span>
                {promoSlides[currentSlide].linkText && (
                    <Link
                        href={promoSlides[currentSlide].linkHref}
                        className="font-semibold underline underline-offset-2 transition duration-100 ease-linear hover:opacity-80"
                    >
                        {promoSlides[currentSlide].linkText}
                    </Link>
                )}
            </div>

            <button
                onClick={nextSlide}
                className="absolute right-4 flex size-6 items-center justify-center rounded-full transition duration-100 ease-linear hover:bg-white/10"
                aria-label="Next"
            >
                <ChevronRight className="size-4" />
            </button>
        </div>
    );
};

// Services Dropdown Menu
const ServicesDropdown = () => {
    const columns = [
        {
            title: "Treatments",
            items: [
                { label: "Radiance Session", description: "1 hour • CHF 99", href: "/about#services" },
                { label: "Complete Treatment", description: "2 sessions • CHF 169", href: "/about#services" },
                { label: "Maintenance Session", description: "Touch-up • CHF 79", href: "/about#services" },
                { label: "Duo Offer", description: "2 people • -10%", href: "/about#services" },
            ],
        },
        {
            title: "Information",
            items: [
                { label: "How It Works", description: "Session process", href: "/about#how-it-works" },
                { label: "FAQs", description: "Common questions", href: "/faq" },
                { label: "Shipping & Returns", description: "Delivery info", href: "/shipping" },
                { label: "Terms & Conditions", description: "Our policies", href: "/terms" },
            ],
        },
        {
            title: "Shop",
            items: [
                { label: "All Products", description: "Browse collection", href: "/shop" },
                { label: "Gift Cards", description: "Perfect gift", href: "/gift-cards" },
                { label: "My Cart", description: "View cart", href: "/cart" },
                { label: "My Account", description: "Orders & settings", href: "/account" },
            ],
        },
        {
            title: "Contact",
            items: [
                { label: "Book a Session", description: "Schedule appointment", href: "/contact" },
                { label: "Contact Us", description: "Questions?", href: "/contact" },
                { label: "About Us", description: "Our story", href: "/about" },
                { label: "Privacy Policy", description: "Your data", href: "/privacy" },
            ],
        },
    ];

    return (
        <div className="w-full border-b border-secondary bg-primary shadow-lg">
            <div className="mx-auto max-w-7xl px-4 py-8 md:px-8">
                <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:gap-12">
                    {columns.map((column) => (
                        <div key={column.title}>
                            <h4 className="mb-5 text-[11px] font-semibold uppercase tracking-[0.15em] text-quaternary">
                                {column.title}
                            </h4>
                            <ul className="flex flex-col gap-0.5">
                                {column.items.map((item) => (
                                    <li key={item.label}>
                                        <Link
                                            href={item.href}
                                            className="group block rounded-lg py-2.5 transition duration-100 ease-linear hover:translate-x-1"
                                        >
                                            <span className="block text-sm font-medium text-primary transition group-hover:text-brand-secondary">
                                                {item.label}
                                            </span>
                                            <span className="mt-0.5 block text-xs text-tertiary">
                                                {item.description}
                                            </span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            {/* Featured Banner */}
            <div className="border-t border-secondary bg-secondary/50 px-4 py-4 md:px-8">
                <div className="mx-auto flex max-w-7xl items-center justify-between">
                    <div className="flex items-center gap-3">
                        <span className="rounded-full bg-brand-100 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-brand-700">
                            Limited
                        </span>
                        <span className="text-sm text-secondary">
                            Ambilly, near Geneva — Professional teeth whitening studio
                        </span>
                    </div>
                    <Link
                        href="/contact"
                        className="text-xs font-semibold uppercase tracking-wider text-brand-secondary transition hover:text-brand-primary"
                    >
                        Book Now →
                    </Link>
                </div>
            </div>
        </div>
    );
};

// Language Selector
const languages = [
    { id: "en", label: "English", flag: "🇬🇧" },
    { id: "fr", label: "Français", flag: "🇫🇷" },
];

const LanguageSelector = () => {
    const id = useId();
    return (
        <AriaSelect
            id={`language-selector-${id}`}
            defaultSelectedKey="en"
            aria-label="Select language"
            className="relative"
        >
            <AriaButton className="flex cursor-pointer items-center gap-1.5 rounded-lg px-2 py-2 text-sm font-medium text-secondary transition duration-100 ease-linear hover:bg-primary_hover hover:text-primary">
                <Globe02 className="size-4" />
                <AriaSelectValue className="hidden sm:inline">
                    {({ selectedText }) => selectedText}
                </AriaSelectValue>
                <ChevronDown className="size-3.5 text-quaternary" />
            </AriaButton>
            <AriaPopover
                className={({ isEntering, isExiting }) =>
                    cx(
                        "min-w-32 overflow-hidden rounded-xl bg-primary py-1 shadow-lg ring-1 ring-secondary_alt",
                        isEntering && "duration-150 ease-out animate-in fade-in zoom-in-95",
                        isExiting && "duration-100 ease-in animate-out fade-out zoom-out-95"
                    )
                }
                offset={8}
            >
                <AriaListBox className="outline-none">
                    {languages.map((lang) => (
                        <AriaListBoxItem
                            key={lang.id}
                            id={lang.id}
                            textValue={lang.label}
                            className="flex cursor-pointer items-center gap-2.5 px-3 py-2 text-sm text-secondary outline-none transition duration-100 ease-linear hover:bg-primary_hover hover:text-primary focus:bg-primary_hover focus:text-primary"
                        >
                            <span>{lang.flag}</span>
                            <span>{lang.label}</span>
                        </AriaListBoxItem>
                    ))}
                </AriaListBox>
            </AriaPopover>
        </AriaSelect>
    );
};

// Mobile Navigation
const MobileNav = () => {
    const [expandedItems, setExpandedItems] = useState<string[]>([]);

    const toggleItem = (label: string) => {
        setExpandedItems((prev) =>
            prev.includes(label) ? prev.filter((l) => l !== label) : [...prev, label]
        );
    };

    return (
        <nav className="flex flex-col bg-primary">
            <ul className="flex flex-col py-2">
                {navItems.map((item) => (
                    <li key={item.label} className="border-b border-secondary last:border-b-0">
                        {item.hasDropdown ? (
                            <div>
                                <button
                                    onClick={() => toggleItem(item.label)}
                                    className="flex w-full items-center justify-between px-4 py-3 text-md font-medium text-primary"
                                >
                                    {item.label}
                                    <ChevronDown
                                        className={cx(
                                            "size-5 text-quaternary transition duration-100 ease-linear",
                                            expandedItems.includes(item.label) && "-rotate-180"
                                        )}
                                    />
                                </button>
                            </div>
                        ) : (
                            <Link
                                href={item.href}
                                className="block px-4 py-3 text-md font-medium text-primary"
                            >
                                {item.label}
                            </Link>
                        )}
                    </li>
                ))}
            </ul>

            <div className="flex flex-col gap-3 border-t border-secondary p-4">
                <Button href="/contact" size="lg">Book Your Session</Button>
                <Button href="tel:+41783000619" color="secondary" size="lg">Call +41 78 300 06 19</Button>
            </div>
        </nav>
    );
};

// Main Header Component
export const Header = () => {
    const headerRef = useRef<HTMLElement>(null);

    return (
        <header ref={headerRef} className="sticky top-0 z-50 w-full bg-primary">
            {/* Promo Banner */}
            <PromoBanner />

            {/* Main Header */}
            <div className="border-b border-secondary">
                <div className="relative mx-auto flex h-16 max-w-full items-center justify-between px-4 md:h-18 md:px-8">
                    {/* Logo */}
                    <Link href="/" className="flex shrink-0 items-center">
                        <img
                            src="/logo.svg"
                            alt="Prestige Smile"
                            className="h-8 w-auto sm:h-14"
                        />
                    </Link>

                    {/* Desktop Navigation - Centered */}
                    <nav className="absolute left-1/2 hidden -translate-x-1/2 lg:block">
                        <ul className="flex items-center gap-2">
                            {navItems.map((item) => (
                                <li key={item.label}>
                                    {item.label === "Services" ? (
                                        <AriaDialogTrigger>
                                            <AriaButton
                                                id="services-menu-trigger"
                                                className="flex cursor-pointer items-center gap-0.5 rounded-lg px-3 py-2 text-xs font-semibold uppercase tracking-widest text-secondary outline-focus-ring transition duration-100 ease-linear hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2"
                                            >
                                                <span>{item.label}</span>
                                                <ChevronDown className="size-4 text-quaternary transition duration-100 ease-linear in-aria-expanded:-rotate-180" />
                                            </AriaButton>

                                            <AriaPopover
                                                className={({ isEntering, isExiting }) =>
                                                    cx(
                                                        "w-full origin-top will-change-transform",
                                                        isEntering && "duration-200 ease-out animate-in fade-in slide-in-from-top-1",
                                                        isExiting && "duration-150 ease-in animate-out fade-out slide-out-to-top-1"
                                                    )
                                                }
                                                offset={0}
                                                containerPadding={0}
                                                triggerRef={headerRef}
                                            >
                                                <AriaDialog className="w-full origin-top outline-hidden">
                                                    <ServicesDropdown />
                                                </AriaDialog>
                                            </AriaPopover>
                                        </AriaDialogTrigger>
                                    ) : (
                                        <Link
                                            href={item.href}
                                            className="flex cursor-pointer items-center rounded-lg px-3 py-2 text-xs font-semibold uppercase tracking-widest text-secondary outline-focus-ring transition duration-100 ease-linear hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2"
                                        >
                                            {item.label}
                                        </Link>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Header Actions */}
                    <div className="flex items-center gap-1 sm:gap-2">
                        {/* Language Selector */}
                        <LanguageSelector />

                        {/* Phone */}
                        <a
                            href="tel:+41783000619"
                            className="hidden items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-secondary transition duration-100 ease-linear hover:bg-primary_hover hover:text-primary lg:flex"
                        >
                            +41 78 300 06 19
                        </a>

                        {/* Book Now Button */}
                        <Link
                            href="/contact"
                            className="rounded-lg bg-brand-solid px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white transition duration-100 ease-linear hover:bg-brand-700 sm:px-5 sm:py-2.5 sm:text-sm"
                        >
                            Book Now
                        </Link>

                        {/* Mobile Menu Trigger */}
                        <AriaDialogTrigger>
                            <AriaButton
                                id="mobile-menu-trigger"
                                aria-label="Menu"
                                className={({ isFocusVisible, isHovered }) =>
                                    cx(
                                        "group ml-2 flex size-10 cursor-pointer items-center justify-center rounded-lg lg:hidden",
                                        isHovered && "bg-primary_hover",
                                        isFocusVisible && "outline-2 outline-offset-2 outline-focus-ring"
                                    )
                                }
                            >
                                <Menu01 className="size-6 text-secondary" />
                            </AriaButton>

                            <AriaPopover
                                triggerRef={headerRef}
                                className="w-full shadow-lg lg:hidden"
                                offset={0}
                                containerPadding={0}
                                placement="bottom left"
                            >
                                <AriaDialog className="outline-hidden">
                                    <MobileNav />
                                </AriaDialog>
                            </AriaPopover>
                        </AriaDialogTrigger>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
