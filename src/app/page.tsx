import { BlogsSection } from "./components/blogs-section";
import { CtaSection } from "./components/cta-section";
import { FeaturesSection } from "./components/features-section";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { InstagramPosts } from "./components/instagram-posts";

export default function Page() {
	return (
		<>
			<Header />
			<main>
				<FeaturesSection />
				<BlogsSection />
				<InstagramPosts />
				<Footer />
			</main>
		</>
	);
}
