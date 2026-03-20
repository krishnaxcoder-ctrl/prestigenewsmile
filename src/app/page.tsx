import { ArticlesSection } from "./components/articles-section";
import { BeforeAfterSection } from "./components/before-after-section";
import { FeaturesSection } from "./components/features-section";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { HeroCarousel } from "./components/hero-carousel";
import { InstagramSection } from "./components/instagram-section";
import { MarqueeSection } from "./components/marquee-section";
import { NewsletterSection } from "./components/newsletter-section";
import { ProductsSection } from "./components/products-section";
import { ReviewsSection } from "./components/reviews-section";
import { ServicesSection } from "./components/services-section";
import { TaglineSection } from "./components/tagline-section";

export default function Page() {
	return (
		<div className="overflow-x-hidden">
			<Header />
			<main>
				<HeroCarousel />
				<MarqueeSection />
				<TaglineSection />
				<ServicesSection />
				<ProductsSection />
				<FeaturesSection />
				<BeforeAfterSection />
				<ReviewsSection />
				<ArticlesSection />
				<NewsletterSection />
				<InstagramSection />
				<Footer />
			</main>
		</div>
	);
}
