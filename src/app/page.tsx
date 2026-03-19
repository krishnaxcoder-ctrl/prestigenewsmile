import { BlogsSection } from "./components/blogs-section";
import { CategoryCarousel } from "./components/category-carousel";
import { CtaSection } from "./components/cta-section";
import { FeaturesSection } from "./components/features-section";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { HeroCarousel } from "./components/hero-carousel";
import { HeroSection } from "./components/hero-section";
import { InstagramPosts } from "./components/instagram-posts";
import { MarqueeSection } from "./components/marquee-section";
import { ProductsFeaturedSection } from "./components/products-featured-section";
import { ProductsSection } from "./components/products-section";

export default function Page() {
	return (
		<>
			<Header />
			<main>
				<HeroCarousel />
				<MarqueeSection />
				<HeroSection />
				<CategoryCarousel />
				<ProductsSection />
				<FeaturesSection />
				<ProductsFeaturedSection />
				<BlogsSection />
				<InstagramPosts />
				<Footer />
			</main>
		</>
	);
}
