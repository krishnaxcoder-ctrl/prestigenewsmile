import { ArticlesSection } from "./components/articles-section";
import { BeforeAfterSection } from "./components/before-after-section";
import { ContactSection } from "./components/contact-section";
import { FAQSection } from "./components/faq-section";
import { FavoritePicksSection } from "./components/favorite-picks-section";
import { FeaturesSection } from "./components/features-section";
import { Footer } from "./components/footer";
import { GiftcardSection } from "./components/giftcard-section";
import { Header } from "./components/header";
import { HeroSection } from "./components/hero-section";
import { InstagramSection } from "./components/instagram-section";
import { PriceListSection } from "./components/price-list-section";
import { ProductsSection } from "./components/products-section";
import { ReviewsSection } from "./components/reviews-section";
import { ServicesSection } from "./components/services-section";
import { TaglineSection } from "./components/tagline-section";

export default function Page() {
	return (
		<div className="overflow-x-hidden">
			<Header />
			<main>
				<HeroSection />
				<TaglineSection />
				<ServicesSection />
				<PriceListSection />
				<ProductsSection />
				<FavoritePicksSection />
				<GiftcardSection />
				<FeaturesSection />
				<BeforeAfterSection />
				<ReviewsSection />
				<FAQSection />
				<ArticlesSection />
				<InstagramSection />
				<ContactSection />
				<Footer />
			</main>
		</div>
	);
}
