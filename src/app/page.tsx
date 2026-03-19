import { BlogsSection } from "./components/blogs-section";
import { CtaSection } from "./components/cta-section";
import { FeaturesSection } from "./components/features-section";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { HeroSection } from "./components/hero-section";
import { InstagramPosts } from "./components/instagram-posts";

export default function Page() {
	return (
		<>
			<Header />
			<main>
				<HeroSection />
				<FeaturesSection />
				<BlogsSection />
				<InstagramPosts />
				<Footer />
			</main>
		</>
	);
}
