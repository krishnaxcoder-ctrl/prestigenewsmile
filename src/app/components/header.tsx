"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Globe02, Menu01 } from "@untitledui/icons";
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
import { applyLanguage } from "@/app/components/google-translate-provider";

const navItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/about#services", hasDropdown: true },
    { label: "Shop", href: "/shop" },
    { label: "About", href: "/about" },
    { label: "Gift Cards", href: "/gift-cards" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
];

const ServicesDropdown = () => {
    const columns = [
        { title: "Services", items: [
            { label: "Initial Teeth Whitening Session", description: "1 hour • CHF 99", href: "/about#services" },
            { label: "Complete Treatment", description: "2 sessions • CHF 169", href: "/about#services" },
            { label: "Maintenance Session (Touch-up)", description: "Touch-up • CHF 79", href: "/about#services" },
            { label: "Duo Offer", description: "2 people • -10%", href: "/about#services" },
            { label: "Gift Cards", description: "Perfect gift", href: "/gift-cards" },
        ]},
        { title: "Shop", items: [
            { label: "All Products", description: "Browse collection", href: "/shop" },
            { label: "My Cart", description: "View cart", href: "/cart" },
            { label: "My Account", description: "Orders & settings", href: "/account" },
            { label: "My Orders", description: "Order history", href: "/account/orders" },
            { label: "My Wishlist", description: "Saved items", href: "/account/wishlist" },
        ]},
        { title: "Information", items: [
            { label: "About Us", description: "Our story", href: "/about" },
            { label: "FAQs", description: "Common questions", href: "/faq" },
            { label: "Shipping & Delivery", description: "Delivery info", href: "/shipping" },
            { label: "Refund Policy", description: "Returns & refunds", href: "/refunds" },
            { label: "Service Disclaimer", description: "Important notice", href: "/disclaimer" },
        ]},
        { title: "Legal", items: [
            { label: "Terms & Conditions", description: "CGV - Our policies", href: "/terms" },
            { label: "Privacy Policy", description: "GDPR compliant", href: "/privacy" },
            { label: "Cookie Policy", description: "Cookie usage", href: "/cookies" },
            { label: "Legal Notice", description: "Mentions légales", href: "/legal-notice" },
        ]},
    ];

    return (
        <div className="w-full border-b border-secondary bg-primary shadow-lg">
            <div className="mx-auto max-w-[1400px] px-4 py-8 md:px-8">
                <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:gap-12">
                    {columns.map((column) => (
                        <div key={column.title}>
                            <h4 className="mb-5 text-[11px] font-semibold uppercase tracking-[0.15em] text-quaternary">{column.title}</h4>
                            <ul className="flex flex-col gap-0.5">
                                {column.items.map((item) => (
                                    <li key={item.label}>
                                        <Link href={item.href} className="group block rounded-lg py-2.5">
                                            <span className="block text-sm font-medium text-primary group-hover:text-brand-secondary">{item.label}</span>
                                            <span className="mt-0.5 block text-xs text-tertiary">{item.description}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            <div className="border-t border-secondary bg-secondary/50 px-4 py-4 md:px-8">
                <div className="mx-auto flex max-w-[1400px] items-center justify-between">
                    <div className="flex items-center gap-3">
                        <span className="rounded-full bg-brand-100 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-brand-700">Limited</span>
                        <span className="text-sm text-secondary">1 rue Jean Moulin, 74100 Ambilly — Professional teeth whitening studio</span>
                    </div>
                    <Link href="/booking" className="text-xs font-semibold uppercase tracking-wider text-brand-secondary hover:text-brand-primary">Book Now →</Link>
                </div>
            </div>
        </div>
    );
};

const languages = [
    { id: "en", label: "English", flag: "🇬🇧" },
    { id: "fr", label: "Français", flag: "🇫🇷" },
];

const LANG_STORAGE_KEY = "preferred-language";

const setLanguagePreference = (lang: string) => {
    if (typeof window === "undefined") return;
    localStorage.setItem(LANG_STORAGE_KEY, lang);
    document.cookie = `${LANG_STORAGE_KEY}=${lang}; path=/; max-age=31536000; SameSite=Lax`;
    document.documentElement.lang = lang;
    window.dispatchEvent(new CustomEvent("languagechange", { detail: { lang } }));
    // Trigger Google Translate + page reload so the translation applies
    applyLanguage(lang);
};

const getLanguagePreference = (): string => {
    if (typeof window === "undefined") return "en";
    return localStorage.getItem(LANG_STORAGE_KEY) || "en";
};

const LanguageSelector = () => {
    const [mounted, setMounted] = useState(false);
    const [currentLang, setCurrentLang] = useState<string>("en");

    useEffect(() => {
        setMounted(true);
        setCurrentLang(getLanguagePreference());
    }, []);

    const handleChange = (lang: string) => {
        setCurrentLang(lang);
        setLanguagePreference(lang);
    };

    const current = languages.find((l) => l.id === currentLang) ?? languages[0];

    // Render static placeholder during SSR to avoid hydration mismatch
    if (!mounted) {
        return (
            <div className="flex cursor-pointer items-center gap-1.5 rounded-lg px-2 py-2 text-sm font-medium text-secondary">
                <Globe02 className="size-4" />
                <span className="hidden sm:inline">English</span>
                <ChevronDown className="size-3.5 text-quaternary" />
            </div>
        );
    }

    return (
        <AriaSelect
            id="language-selector"
            selectedKey={currentLang}
            onSelectionChange={(key) => handleChange(key as string)}
            aria-label="Select language"
            className="relative"
        >
            <AriaButton className="flex cursor-pointer items-center gap-1.5 rounded-lg px-2 py-2 text-sm font-medium text-secondary hover:bg-primary_hover hover:text-primary">
                <Globe02 className="size-4" />
                <span className="hidden sm:inline">
                    <AriaSelectValue>{() => `${current.flag} ${current.label}`}</AriaSelectValue>
                </span>
                <ChevronDown className="size-3.5 text-quaternary" />
            </AriaButton>
            <AriaPopover className="min-w-36 overflow-hidden rounded-xl bg-primary py-1 shadow-lg ring-1 ring-secondary_alt" offset={8}>
                <AriaListBox className="outline-none">
                    {languages.map((lang) => (
                        <AriaListBoxItem
                            key={lang.id}
                            id={lang.id}
                            textValue={lang.label}
                            className="flex cursor-pointer items-center gap-2.5 px-3 py-2 text-sm text-secondary outline-none hover:bg-primary_hover hover:text-primary focus:bg-primary_hover focus:text-primary aria-selected:bg-primary_hover aria-selected:text-primary"
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

const mobileMenuSections = [
    { title: "Services", items: [
        { label: "Initial Teeth Whitening Session", href: "/about#services" },
        { label: "Complete Treatment", href: "/about#services" },
        { label: "Maintenance Session (Touch-up)", href: "/about#services" },
        { label: "Duo Offer", href: "/about#services" },
        { label: "Gift Cards", href: "/gift-cards" },
    ]},
    { title: "Shop", items: [
        { label: "All Products", href: "/shop" },
        { label: "My Cart", href: "/cart" },
        { label: "My Account", href: "/account" },
        { label: "My Orders", href: "/account/orders" },
        { label: "My Wishlist", href: "/account/wishlist" },
    ]},
    { title: "Information", items: [
        { label: "About Us", href: "/about" },
        { label: "FAQs", href: "/faq" },
        { label: "Shipping & Delivery", href: "/shipping" },
        { label: "Refund Policy", href: "/refunds" },
        { label: "Service Disclaimer", href: "/disclaimer" },
    ]},
    { title: "Legal", items: [
        { label: "Terms & Conditions", href: "/terms" },
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Cookie Policy", href: "/cookies" },
        { label: "Legal Notice", href: "/legal-notice" },
    ]},
];

const MobileNav = () => {
    const [expandedItems, setExpandedItems] = useState<string[]>([]);
    const toggleItem = (title: string) => setExpandedItems((prev) => prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title]);
    const [mobileLang, setMobileLang] = useState<string>("en");

    useEffect(() => {
        setMobileLang(getLanguagePreference());
    }, []);

    const handleLangChange = (lang: string) => {
        setMobileLang(lang);
        setLanguagePreference(lang);
    };

    return (
        <nav className="flex h-[calc(100vh-64px)] flex-col bg-primary md:h-[calc(100vh-72px)]">
            <ul className="flex flex-1 flex-col overflow-y-auto">
                {/* Main nav links */}
                <li className="border-b border-secondary">
                    <Link href="/" className="block px-4 py-4 text-md font-medium text-primary">Home</Link>
                </li>
                <li className="border-b border-secondary">
                    <Link href="/contact" className="block px-4 py-4 text-md font-medium text-primary">Contact</Link>
                </li>

                {/* Expandable sections */}
                {mobileMenuSections.map((section) => (
                    <li key={section.title} className="border-b border-secondary">
                        <button
                            onClick={() => toggleItem(section.title)}
                            className="flex w-full items-center justify-between px-4 py-4 text-md font-medium text-primary"
                        >
                            {section.title}
                            <ChevronDown className={cx("size-5 text-quaternary transition-transform", expandedItems.includes(section.title) && "-rotate-180")} />
                        </button>
                        {expandedItems.includes(section.title) && (
                            <ul className="bg-secondary/50 pb-2">
                                {section.items.map((item) => (
                                    <li key={item.label}>
                                        <Link href={item.href} className="block px-6 py-2.5 text-sm text-secondary hover:text-brand-600">
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
            <div className="border-t border-secondary">
                {/* Language selector */}
                <div className="flex items-center gap-2 border-b border-secondary px-4 py-3">
                    <Globe02 className="size-4 text-tertiary" />
                    <span className="text-xs font-semibold uppercase tracking-wider text-tertiary">Language</span>
                    <div className="ml-auto flex gap-1">
                        {languages.map((lang) => {
                            const isActive = mobileLang === lang.id;
                            return (
                                <button
                                    key={lang.id}
                                    onClick={() => handleLangChange(lang.id)}
                                    aria-pressed={isActive}
                                    className={cx(
                                        "rounded-md px-3 py-1.5 text-sm font-medium transition",
                                        isActive
                                            ? "bg-primary_hover text-primary"
                                            : "text-secondary hover:bg-primary_hover hover:text-primary"
                                    )}
                                >
                                    {lang.flag} {lang.label}
                                </button>
                            );
                        })}
                    </div>
                </div>
                <div className="flex flex-col gap-3 p-4">
                    <Button href="/booking" size="lg">Book Your Session</Button>
                    <Button href="tel:+41783000619" color="secondary" size="lg">Call +41 78 300 06 19</Button>
                </div>
            </div>
        </nav>
    );
};

export const Header = () => {
    const headerRef = useRef<HTMLElement>(null);

    return (
        <header ref={headerRef} className="sticky top-0 z-50 w-full bg-primary">
            <div className="border-b border-secondary">
                <div className="relative mx-auto flex h-14 max-w-full items-center justify-between px-2 md:h-18 md:px-8">
                    <Link href="/" className="flex shrink-0 items-center">
                        <img src="/logo.svg" alt="Prestige Smile" className="h-8 w-auto sm:h-14" />
                    </Link>
                    <nav className="absolute left-1/2 hidden -translate-x-1/2 lg:block">
                        <ul className="flex items-center gap-2">
                            {navItems.map((item) => (
                                <li key={item.label}>
                                    {item.label === "Services" ? (
                                        <AriaDialogTrigger>
                                            <AriaButton id="services-menu-trigger" className="flex cursor-pointer items-center gap-0.5 rounded-lg px-3 py-2 text-xs font-semibold uppercase tracking-widest text-secondary outline-focus-ring hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2">
                                                <span>{item.label}</span>
                                                <ChevronDown className="size-4 text-quaternary in-aria-expanded:-rotate-180" />
                                            </AriaButton>
                                            <AriaPopover className="w-full origin-top will-change-transform" offset={0} containerPadding={0} triggerRef={headerRef}>
                                                <AriaDialog className="w-full origin-top outline-hidden">
                                                    <ServicesDropdown />
                                                </AriaDialog>
                                            </AriaPopover>
                                        </AriaDialogTrigger>
                                    ) : (
                                        <Link href={item.href} className="flex cursor-pointer items-center rounded-lg px-3 py-2 text-xs font-semibold uppercase tracking-widest text-secondary outline-focus-ring hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2">
                                            {item.label}
                                        </Link>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <div className="flex items-center gap-1 sm:gap-2">
                        <div className="hidden lg:block">
                            <LanguageSelector />
                        </div>
                        <Link href="/booking" className="rounded-lg bg-[#7c5d48] px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white hover:bg-amber-800 sm:px-5 sm:py-2.5 sm:text-sm">
                            Book Now
                        </Link>
                        <AriaDialogTrigger>
                            <AriaButton id="mobile-menu-trigger" aria-label="Menu" className={({ isFocusVisible, isHovered }) => cx("group ml-2 flex size-10 cursor-pointer items-center justify-center rounded-lg lg:hidden", isHovered && "bg-primary_hover", isFocusVisible && "outline-2 outline-offset-2 outline-focus-ring")}>
                                <Menu01 className="size-6 text-secondary" />
                            </AriaButton>
                            <AriaPopover triggerRef={headerRef} className="w-screen shadow-lg lg:hidden" offset={0} containerPadding={0} placement="bottom left">
                                <AriaDialog className="w-full outline-hidden">
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
