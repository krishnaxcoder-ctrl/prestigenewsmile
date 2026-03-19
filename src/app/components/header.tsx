"use client";

import { useRef, useState } from "react";
import {
    ChevronDown,
    ChevronLeft,
    ChevronRight,
    Menu01,
    SearchLg,
    ShoppingBag02,
    User01,
    X,
} from "@untitledui/icons";
import {
    Button as AriaButton,
    Dialog as AriaDialog,
    DialogTrigger as AriaDialogTrigger,
    Popover as AriaPopover,
} from "react-aria-components";
import { Button } from "@/components/base/buttons/button";
import { cx } from "@/utils/cx";

// Promo slides data
const promoSlides = [
    { text: "Get up to 60% savings with code", linkText: "FRIDAYGLOW", linkHref: "#" },
    { text: "Free shipping on orders over $50", linkText: "Shop now", linkHref: "/shop" },
    { text: "New arrivals just dropped!", linkText: "Explore", linkHref: "/new-arrivals" },
];

// Navigation items
const navItems = [
    { label: "Home", href: "/" },
    { label: "Shop", href: "/shop", hasDropdown: true },
    { label: "Pages", href: "#", hasDropdown: true },
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

            <div className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-widest">
                <span>{promoSlides[currentSlide].text}</span>
                {promoSlides[currentSlide].linkText && (
                    <a
                        href={promoSlides[currentSlide].linkHref}
                        className="font-semibold underline underline-offset-2 transition duration-100 ease-linear hover:opacity-80"
                    >
                        {promoSlides[currentSlide].linkText}
                    </a>
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

// Shop Dropdown Menu
const ShopDropdown = () => {
    const columns = [
        {
            title: "Shop Listings",
            items: [
                { label: "With Left Sidebar", href: "/shop" },
                { label: "With Right Sidebar", href: "/shop-right" },
                { label: "Without Sidebar", href: "/shop-full" },
            ],
        },
        {
            title: "Shop Layouts",
            items: [
                { label: "Gift Card", href: "/gift-card" },
                { label: "Cart", href: "/cart" },
                { label: "Checkout", href: "/checkout" },
                { label: "Wishlist", href: "/wishlist" },
            ],
        },
        {
            title: "Shop Details",
            items: [
                { label: "Simple Product", href: "/product/simple" },
                { label: "Variable Product", href: "/product/variable" },
                { label: "Grouped Products", href: "/product/grouped" },
            ],
        },
    ];

    return (
        <div className="w-full max-w-5xl px-4 py-6 md:px-8">
            <div className="overflow-hidden rounded-2xl bg-primary p-6 shadow-lg ring-1 ring-secondary_alt">
                <div className="grid grid-cols-3 gap-8">
                    {columns.map((column) => (
                        <div key={column.title} className="flex flex-col gap-3">
                            <h4 className="text-xs font-semibold uppercase tracking-widest text-quaternary">
                                {column.title}
                            </h4>
                            <ul className="flex flex-col gap-2">
                                {column.items.map((item) => (
                                    <li key={item.label}>
                                        <a
                                            href={item.href}
                                            className="text-sm text-secondary transition duration-100 ease-linear hover:text-brand-secondary"
                                        >
                                            {item.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// Pages Dropdown Menu
const PagesDropdown = () => {
    const items = [
        { label: "About Us", href: "/about" },
        { label: "Article", href: "/article" },
        { label: "404 Error Page", href: "/404" },
    ];

    return (
        <div className="min-w-48 overflow-hidden rounded-xl bg-primary py-2 shadow-lg ring-1 ring-secondary_alt">
            <ul className="flex flex-col">
                {items.map((item) => (
                    <li key={item.label}>
                        <a
                            href={item.href}
                            className="flex items-center px-4 py-2 text-sm text-secondary transition duration-100 ease-linear hover:bg-primary_hover hover:text-primary"
                        >
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
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
                            <a
                                href={item.href}
                                className="block px-4 py-3 text-md font-medium text-primary"
                            >
                                {item.label}
                            </a>
                        )}
                    </li>
                ))}
            </ul>

            <div className="flex flex-col gap-3 border-t border-secondary p-4">
                <Button size="lg">Sign up</Button>
                <Button color="secondary" size="lg">Log in</Button>
            </div>
        </nav>
    );
};

// Main Header Component
export const Header = () => {
    const headerRef = useRef<HTMLElement>(null);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    return (
        <header ref={headerRef} className="sticky top-0 z-50 w-full bg-primary">
            {/* Promo Banner */}
            <PromoBanner />

            {/* Main Header */}
            <div className="border-b border-secondary">
                <div className="relative mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:h-18 md:px-8">
                    {/* Logo */}
                    <a href="/" className="flex shrink-0 items-center">
                        <span className="text-2xl font-semibold tracking-tight text-primary">
                            Monica
                        </span>
                    </a>

                    {/* Desktop Navigation - Centered */}
                    <nav className="absolute left-1/2 hidden -translate-x-1/2 lg:block">
                        <ul className="flex items-center gap-2">
                            {navItems.map((item) => (
                                <li key={item.label}>
                                    {item.label === "Shop" ? (
                                        <AriaDialogTrigger>
                                            <AriaButton className="flex cursor-pointer items-center gap-0.5 rounded-lg px-3 py-2 text-xs font-semibold uppercase tracking-widest text-secondary outline-focus-ring transition duration-100 ease-linear hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2">
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
                                                <AriaDialog className="mx-auto origin-top outline-hidden">
                                                    <ShopDropdown />
                                                </AriaDialog>
                                            </AriaPopover>
                                        </AriaDialogTrigger>
                                    ) : item.label === "Pages" ? (
                                        <AriaDialogTrigger>
                                            <AriaButton className="flex cursor-pointer items-center gap-0.5 rounded-lg px-3 py-2 text-xs font-semibold uppercase tracking-widest text-secondary outline-focus-ring transition duration-100 ease-linear hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2">
                                                <span>{item.label}</span>
                                                <ChevronDown className="size-4 text-quaternary transition duration-100 ease-linear in-aria-expanded:-rotate-180" />
                                            </AriaButton>

                                            <AriaPopover
                                                className={({ isEntering, isExiting }) =>
                                                    cx(
                                                        "origin-top-left will-change-transform",
                                                        isEntering && "duration-200 ease-out animate-in fade-in zoom-in-95 slide-in-from-top-1",
                                                        isExiting && "duration-150 ease-in animate-out fade-out zoom-out-95 slide-out-to-top-1"
                                                    )
                                                }
                                                offset={8}
                                            >
                                                <AriaDialog className="outline-hidden">
                                                    <PagesDropdown />
                                                </AriaDialog>
                                            </AriaPopover>
                                        </AriaDialogTrigger>
                                    ) : (
                                        <a
                                            href={item.href}
                                            className="flex cursor-pointer items-center rounded-lg px-3 py-2 text-xs font-semibold uppercase tracking-widest text-secondary outline-focus-ring transition duration-100 ease-linear hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2"
                                        >
                                            {item.label}
                                        </a>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Header Actions */}
                    <div className="flex items-center gap-1">
                        {/* Search */}
                        <button
                            onClick={() => setIsSearchOpen(!isSearchOpen)}
                            className="flex size-10 items-center justify-center rounded-lg transition duration-100 ease-linear hover:bg-primary_hover"
                            aria-label="Search"
                        >
                            <SearchLg className="size-5 text-secondary" />
                        </button>

                        {/* Account */}
                        <a
                            href="/my-account"
                            className="flex size-10 items-center justify-center rounded-lg transition duration-100 ease-linear hover:bg-primary_hover"
                            aria-label="My account"
                        >
                            <User01 className="size-5 text-secondary" />
                        </a>

                        {/* Cart */}
                        <a
                            href="/cart"
                            className="flex items-center gap-2 rounded-lg px-2 py-2 transition duration-100 ease-linear hover:bg-primary_hover"
                            aria-label="Cart"
                        >
                            <div className="relative">
                                <ShoppingBag02 className="size-5 text-secondary" />
                                <span className="absolute -top-1 -right-1 flex size-4 items-center justify-center rounded-full bg-brand-solid text-[10px] font-bold text-white">
                                    3
                                </span>
                            </div>
                            <span className="hidden text-sm font-medium text-secondary md:inline">
                                $149.99
                            </span>
                        </a>

                        {/* Mobile Menu Trigger */}
                        <AriaDialogTrigger>
                            <AriaButton
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
