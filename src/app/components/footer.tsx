"use client";

import { ArrowRight } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { Input } from "@/components/base/input/input";
import { Facebook, Instagram, LinkedIn, X } from "@/components/foundations/social-icons";
import {
	AmexIcon,
	ApplePayIcon,
	MastercardIcon,
	PayPalIcon,
	VisaIcon,
} from "@/components/foundations/payment-icons";

const footerLinks = {
	pages: {
		title: "Pages",
		links: [
			{ label: "Home", href: "/" },
			{ label: "About Us", href: "/about-us" },
			{ label: "Shop", href: "/shop" },
			{ label: "Collections", href: "/collections" },
			{ label: "Beauty Blog", href: "/blog" },
		],
	},
	resources: {
		title: "Resources",
		links: [
			{ label: "Skincare Guide", href: "/skincare-guide" },
			{ label: "Ingredients List", href: "/ingredients" },
			{ label: "Size & Usage Tips", href: "/usage-tips" },
			{ label: "Beauty Journal", href: "/journal" },
			{ label: "FAQs", href: "/faq" },
		],
	},
	support: {
		title: "Support",
		links: [
			{ label: "Contact Support", href: "/contact" },
			{ label: "Shipping & Delivery", href: "/shipping" },
			{ label: "Returns & Refunds", href: "/returns" },
			{ label: "Order Tracking", href: "/track-order" },
			{ label: "Help Center", href: "/help" },
		],
	},
	contact: {
		title: "Contact Us",
		links: [
			{ label: "Get in Touch", href: "/contact" },
			{ label: "Store Locations", href: "/stores" },
			{ label: "Business Enquiries", href: "/business" },
			{ label: "Customer Care", href: "/customer-care" },
			{ label: "Partnerships", href: "/partnerships" },
		],
	},
};

const socialLinks = [
	{ icon: Facebook, href: "https://facebook.com", label: "Facebook" },
	{ icon: Instagram, href: "https://instagram.com", label: "Instagram" },
	{ icon: X, href: "https://x.com", label: "X" },
	{ icon: LinkedIn, href: "https://linkedin.com", label: "LinkedIn" },
];

const legalLinks = [
	{ label: "Copyright", href: "/copyright" },
	{ label: "Terms & Conditions", href: "/terms" },
	{ label: "Privacy Policy", href: "/privacy" },
];

export function Footer() {
	return (
		<footer className="w-full bg-secondary">

			{/* Main Footer Content */}
			<section className="px-4 py-12 md:px-8 lg:px-16">
				<div className="mx-auto max-w-7xl">
					<div className="grid grid-cols-2 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
						{/* Logo and Description Column - First on mobile */}
						<div className="col-span-2 mb-4 sm:col-span-2 md:col-span-4 md:mb-0 lg:order-last lg:col-span-1">
							<a href="/" className="inline-block">
								<span className="text-2xl font-bold text-primary">Monica</span>
							</a>
							<p className="mt-4 text-sm text-secondary">
								Get insider access to exclusive deals, skincare tips, latest
								beauty store arrivals delivered directly to your inbox.
							</p>
							<div className="mt-6">
								<p className="text-xs text-tertiary">Our Payment Gateways</p>
								<div className="mt-2 flex items-center gap-2">
									<VisaIcon className="h-6 w-auto text-tertiary" />
									<MastercardIcon className="h-6 w-auto text-tertiary" />
									<AmexIcon className="h-6 w-auto text-tertiary" />
									<PayPalIcon className="h-6 w-auto text-tertiary" />
									<ApplePayIcon className="h-6 w-auto text-tertiary" />
								</div>
							</div>
						</div>

						{/* Footer Link Columns */}
						{Object.values(footerLinks).map((section) => (
							<div key={section.title}>
								<h3 className="text-sm font-semibold uppercase tracking-wider text-primary">
									{section.title}
								</h3>
								<ul className="mt-4 space-y-3">
									{section.links.map((link) => (
										<li key={link.label}>
											<a
												href={link.href}
												className="text-sm text-secondary transition duration-100 ease-linear hover:text-primary"
											>
												{link.label}
											</a>
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Brand Text */}
			<section className="overflow-hidden border-t border-secondary py-8">
				<div className="mx-auto flex max-w-7xl justify-center px-6">
					<h2
						className="select-none whitespace-nowrap text-5xl font-bold uppercase tracking-wider text-transparent sm:text-7xl md:text-8xl lg:text-[150px]"
						style={{
							WebkitTextStroke: "1px var(--color-brand-500)",
							WebkitTextFillColor: "transparent",
						}}
					>
						MONICA
					</h2>
				</div>
			</section>

			{/* Bottom Bar */}
			<section className="border-t border-secondary px-4 py-6 md:px-8 lg:px-16">
				<div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
					{/* Copyright */}
					<p className="order-3 text-xs text-tertiary sm:text-sm md:order-1">
						© {new Date().getFullYear()}{" "}
						<a
							href="https://wedesigntech.com"
							className="transition duration-100 ease-linear hover:text-primary"
							target="_blank"
							rel="noopener noreferrer"
						>
							WedesignTech
						</a>
						. All Rights Reserved.
					</p>

					{/* Social Links */}
					<div className="order-1 flex items-center gap-4 md:order-2">
						<span className="hidden text-sm text-tertiary sm:inline">Follow on:</span>
						<div className="flex items-center gap-3">
							{socialLinks.map((social) => (
								<a
									key={social.label}
									href={social.href}
									target="_blank"
									rel="noopener noreferrer"
									aria-label={social.label}
									className="text-secondary transition duration-100 ease-linear hover:text-primary"
								>
									<social.icon className="size-5" />
								</a>
							))}
						</div>
					</div>

					{/* Legal Links */}
					<div className="order-2 flex flex-wrap items-center justify-center gap-2 sm:gap-4 md:order-3">
						{legalLinks.map((link, index) => (
							<span key={link.label} className="flex items-center gap-2 sm:gap-4">
								<a
									href={link.href}
									className="text-xs text-secondary transition duration-100 ease-linear hover:text-primary sm:text-sm"
								>
									{link.label}
								</a>
								{index < legalLinks.length - 1 && (
									<span className="text-tertiary">·</span>
								)}
							</span>
						))}
					</div>
				</div>
			</section>
		</footer>
	);
}
