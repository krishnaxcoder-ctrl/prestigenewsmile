"use client";

import Link from "next/link";
import { Facebook, Instagram } from "@/components/foundations/social-icons";

const footerLinks = {
	services: { title: "Services", links: [
		{ label: "Radiance Session", href: "/about#services" },
		{ label: "Complete Treatment", href: "/about#services" },
		{ label: "Maintenance Session", href: "/about#services" },
		{ label: "Duo Offer", href: "/about#services" },
		{ label: "Gift Cards", href: "/gift-cards" },
	]},
	shop: { title: "Shop", links: [
		{ label: "All Products", href: "/shop" },
		{ label: "My Cart", href: "/cart" },
		{ label: "My Account", href: "/account" },
		{ label: "My Orders", href: "/account/orders" },
		{ label: "My Wishlist", href: "/account/wishlist" },
	]},
	information: { title: "Information", links: [
		{ label: "About Us", href: "/about" },
		{ label: "FAQs", href: "/faq" },
		{ label: "Shipping & Returns", href: "/shipping" },
		{ label: "Privacy Policy", href: "/privacy" },
		{ label: "Terms & Conditions", href: "/terms" },
	]},
	contact: { title: "Contact", links: [
		{ label: "+41 78 300 06 19", href: "tel:+41783000619" },
		{ label: "@prestige.smile.studio", href: "https://www.instagram.com/prestige.smile.studio/" },
		{ label: "Ambilly, near Geneva", href: "/contact" },
		{ label: "Mon-Fri: 10am - 8pm", href: "/contact" },
		{ label: "Sat: 10am - 7pm", href: "/contact" },
		{ label: "Sun: Closed", href: "/contact" },
	]},
};

const socialLinks = [
	{ icon: Instagram, href: "https://www.instagram.com/prestige.smile.studio/", label: "Instagram" },
	{ icon: Facebook, href: "https://facebook.com", label: "Facebook" },
];

const legalLinks = [
	{ label: "Terms & Conditions", href: "/terms" },
	{ label: "Privacy Policy", href: "/privacy" },
	{ label: "Shipping & Returns", href: "/shipping" },
];

export function Footer() {
	return (
		<footer className="w-full bg-secondary">
			<section className="px-4 py-12 md:px-8 lg:px-16">
				<div className="mx-auto max-w-[1400px]">
					<div className="grid grid-cols-2 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
						<div className="col-span-2 mb-4 sm:col-span-2 md:col-span-4 md:mb-0 lg:order-first lg:col-span-1">
							<Link href="/" className="inline-block">
								<img src="/logo.svg" alt="Prestige Smile" className="h-18 w-auto" />
							</Link>
							<p className="mt-3 text-sm text-secondary">
								A bright smile is much more than a detail: it reveals the confidence you have in yourself. Professional teeth whitening in Ambilly, near Geneva.
							</p>
							<div className="mt-6">
								<p className="text-xs text-tertiary">Payment Methods</p>
								<p className="mt-2 text-sm text-secondary">Twint • Revolut • Cash</p>
							</div>
						</div>
						{Object.values(footerLinks).map((section) => (
							<div key={section.title}>
								<h3 className="text-sm font-semibold uppercase tracking-wider text-primary">{section.title}</h3>
								<ul className="mt-4 space-y-3">
									{section.links.map((link) => (
										<li key={link.label}>
											{link.href.startsWith("http") || link.href.startsWith("tel:") ? (
												<a href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined} className="text-sm text-secondary hover:text-primary">
													{link.label}
												</a>
											) : (
												<Link href={link.href} className="text-sm text-secondary hover:text-primary">{link.label}</Link>
											)}
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</div>
			</section>
			<section className="overflow-hidden border-t border-secondary py-8">
				<div className="mx-auto flex max-w-[1400px] justify-center px-6">
					<Link href="/">
						<h2 className="select-none whitespace-nowrap text-4xl font-bold uppercase tracking-wider hover:opacity-80 sm:text-6xl md:text-7xl lg:text-[140px]" style={{ WebkitTextStroke: "2px var(--color-brand-500)", WebkitTextFillColor: "var(--color-bg-secondary)", paintOrder: "stroke fill" }}>
							PRESTIGE SMILE
						</h2>
					</Link>
				</div>
			</section>
			<section className="border-t border-secondary px-4 py-6 md:px-8 lg:px-16">
				<div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
					<p className="order-3 text-xs text-tertiary sm:text-sm md:order-1">© {new Date().getFullYear()} Prestige Smile. All Rights Reserved.</p>
					<div className="order-1 flex items-center gap-4 md:order-2">
						<span className="hidden text-sm text-tertiary sm:inline">Follow on:</span>
						<div className="flex items-center gap-3">
							{socialLinks.map((social) => (
								<a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label} className="text-secondary hover:text-primary">
									<social.icon className="size-5" />
								</a>
							))}
						</div>
					</div>
					<div className="order-2 flex flex-wrap items-center justify-center gap-2 sm:gap-4 md:order-3">
						{legalLinks.map((link, index) => (
							<span key={link.label} className="flex items-center gap-2 sm:gap-4">
								<Link href={link.href} className="text-xs text-secondary hover:text-primary sm:text-sm">{link.label}</Link>
								{index < legalLinks.length - 1 && <span className="text-tertiary">·</span>}
							</span>
						))}
					</div>
				</div>
			</section>
		</footer>
	);
}
