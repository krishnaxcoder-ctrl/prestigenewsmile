import type { Metadata } from "next";
import { createClient } from "@supabase/supabase-js";

const SITE_URL = "https://www.prestige-smile.com";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;

    const supabase = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );

    const { data: post } = await supabase
        .from("blog_posts")
        .select(
            "title, excerpt, seo_title, seo_description, seo_keywords, og_image, hero_image, canonical_url, published_at, updated_at, author"
        )
        .eq("slug", slug)
        .eq("status", "published")
        .single();

    if (!post) {
        return {
            title: "Article Not Found",
            description: "The article you are looking for does not exist.",
        };
    }

    const title = post.seo_title || post.title;
    const description =
        post.seo_description || post.excerpt || `Read ${post.title} on the Prestige Smile blog.`;
    const image = post.og_image || post.hero_image || undefined;
    const canonical = post.canonical_url || `${SITE_URL}/articles/${slug}`;

    return {
        title,
        description,
        keywords: post.seo_keywords || undefined,
        authors: [{ name: post.author }],
        alternates: {
            canonical,
        },
        openGraph: {
            title,
            description,
            url: canonical,
            type: "article",
            publishedTime: post.published_at || undefined,
            modifiedTime: post.updated_at || undefined,
            images: image ? [{ url: image, alt: post.title }] : undefined,
            siteName: "Prestige Smile",
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: image ? [image] : undefined,
        },
    };
}

export default function ArticleSlugLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
