import { ArticlesSection } from "./components/articles-section";
import { CollectionBanner } from "./components/collection-banner";
import { ComparisonSlider } from "./components/comparison-slider";
import { ContactSection } from "./components/contact-section";
import { FAQSection } from "./components/faq-section";
import { FavoritePicksSection } from "./components/favorite-picks-section";
import { FeaturesSection } from "./components/features-section";
import { Footer } from "./components/footer";
import { GiftcardSection } from "./components/giftcard-section";
import { Header } from "./components/header";
import { HeroSection } from "./components/hero-section";
import { InstagramSection } from "./components/instagram-section";
import { OpeningHoursSection } from "./components/opening-hours-section";
import { PriceListSection } from "./components/price-list-section";
import { ReviewsSection } from "./components/reviews-section";
import { AboutSection } from "./components/about-section";
import { ServiceMenuSection } from "./components/service-menu-section";
import { ServicesSection } from "./components/services-section";
import { TaglineSection } from "./components/tagline-section";
import { SessionNoteSection } from "./components/session-note-section";
import { WhiteningInfoSection } from "./components/whitening-info-section";
import { WhiteningResults } from "@/components/whitening-results";

export default function Page() {
	return (
		<div className="overflow-x-hidden">
			<Header />
			<main>
				<HeroSection />
				<ServiceMenuSection />
				<ServicesSection />
				<TaglineSection />

				<PriceListSection />
				<FavoritePicksSection />
				<FeaturesSection />

				<AboutSection />
				<WhiteningInfoSection />
				<SessionNoteSection />
				<ComparisonSlider />
				<WhiteningResults />
				<ReviewsSection />
				<ArticlesSection />
				<FAQSection />

				<CollectionBanner />
				<GiftcardSection />

				<OpeningHoursSection />
				<InstagramSection />
				<ContactSection />
				<Footer />
			</main>
		</div>
	);
}
