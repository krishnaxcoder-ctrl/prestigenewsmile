"use client";

import Link from "next/link";
import { Instagram } from "@/components/foundations/social-icons";
import { Phone01, Mail01, MarkerPin01, Clock } from "@untitledui/icons";

const footerLinks = {
	services: { title: "Services", links: [
		{ label: "Initial Teeth Whitening Session", href: "/about#services" },
		{ label: "Complete Treatment", href: "/about#services" },
		{ label: "Maintenance Session (Touch-up)", href: "/about#services" },
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
		{ label: "Shipping & Delivery", href: "/shipping" },
		{ label: "Refund Policy", href: "/refunds" },
		{ label: "Service Disclaimer", href: "/disclaimer" },
	]},
	legal: { title: "Legal", links: [
		{ label: "Terms & Conditions", href: "/terms" },
		{ label: "Privacy Policy", href: "/privacy" },
		{ label: "Cookie Policy", href: "/cookies" },
		{ label: "Legal Notice", href: "/legal-notice" },
	]},
};

const socialLinks = [
	{ icon: Instagram, href: "https://www.instagram.com/prestige.smile.studio/", label: "Instagram" },
];

const legalLinks = [
	{ label: "Terms & Conditions", href: "/terms" },
	{ label: "Privacy Policy", href: "/privacy" },
	{ label: "Cookie Policy", href: "/cookies" },
	{ label: "Legal Notice", href: "/legal-notice" },
];

export function Footer() {
	const linkSections = [footerLinks.services, footerLinks.shop, footerLinks.information, footerLinks.legal];

	return (
		<footer className="w-full bg-secondary">
			<section className="px-4 py-12 md:px-8 lg:px-16">
				<div className="mx-auto max-w-[1400px]">
					{/* Main Footer Grid */}
					<div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
						{/* Logo & Brand Section */}
						<div className="lg:col-span-4">
							<Link href="/" className="inline-block">
								<img src="/logo.svg" alt="Prestige Smile" className="h-16 w-auto" />
							</Link>
							<p className="mt-4 max-w-sm text-sm leading-relaxed text-secondary">
								A bright smile is much more than a detail: it reveals the confidence you have in yourself. Professional teeth whitening at 1 rue Jean Moulin, 74100 Ambilly, near Geneva.
							</p>

							{/* Social Links */}
							<div className="mt-6 flex items-center gap-3">
								{socialLinks.map((social) => (
									<a
										key={social.label}
										href={social.href}
										target="_blank"
										rel="noopener noreferrer"
										aria-label={social.label}
										className="flex size-12 items-center justify-center rounded-full bg-primary text-secondary transition hover:bg-brand-100 hover:text-brand-600"
									>
										<social.icon className="size-7" />
									</a>
								))}
							</div>
						</div>

						{/* Links Section - 4 columns */}
						<div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-8">
							{linkSections.map((section) => (
								<div key={section.title}>
									<h3 className="text-xs font-semibold uppercase tracking-widest text-primary">{section.title}</h3>
									<ul className="mt-4 space-y-2.5">
										{section.links.map((link) => (
											<li key={link.label}>
												{link.href.startsWith("http") || link.href.startsWith("tel:") ? (
													<a href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined} className="text-sm text-tertiary transition hover:text-brand-600">
														{link.label}
													</a>
												) : (
													<Link href={link.href} className="text-sm text-tertiary transition hover:text-brand-600">{link.label}</Link>
												)}
											</li>
										))}
									</ul>
								</div>
							))}
						</div>
					</div>

					{/* Contact & Payment Row */}
					<div className="mt-10 grid grid-cols-1 gap-8 border-t border-secondary pt-10 md:grid-cols-3">
						{/* Contact Info */}
						<div className="flex items-start gap-3">
							<div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-brand-100">
								<Phone01 className="size-5 text-brand-600" />
							</div>
							<div>
								<p className="text-xs font-medium uppercase tracking-wider text-tertiary">Call Us</p>
								<a href="tel:+41783000619" className="mt-1 block text-sm font-medium text-primary hover:text-brand-600">+41 78 300 06 19</a>
							</div>
						</div>

						<div className="flex items-start gap-3">
							<div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-brand-100">
								<MarkerPin01 className="size-5 text-brand-600" />
							</div>
							<div>
								<p className="text-xs font-medium uppercase tracking-wider text-tertiary">Location</p>
								<p className="mt-1 text-sm font-medium text-primary">1 rue Jean Moulin, 74100 Ambilly</p>
							</div>
						</div>

						<div className="flex items-start gap-3">
							<div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-brand-100">
								<Clock className="size-5 text-brand-600" />
							</div>
							<div>
								<p className="text-xs font-medium uppercase tracking-wider text-tertiary">Hours</p>
								<p className="mt-1 text-sm text-primary">Mon-Fri: 10am-8pm • Sat: 10am-7pm</p>
							</div>
						</div>
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
									<social.icon className="size-7" />
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
