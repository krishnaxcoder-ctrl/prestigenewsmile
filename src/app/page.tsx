import { BlogsSection } from "./components/blogs-section";
import { CtaSection } from "./components/cta-section";
import { FeaturesSection } from "./components/features-section";
import { Footer } from "./components/footer";
import { InstagramPosts } from "./components/instagram-posts";

export default function Page() {
	return (
		<main>
			<FeaturesSection />
			<BlogsSection />
			<InstagramPosts />
			<Footer />
		</main>
	);
}
