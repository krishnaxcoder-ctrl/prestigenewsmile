import type { MetadataRoute } from "next";
import { createClient } from "@supabase/supabase-js";

const SITE_URL = "https://www.prestige-smile.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const supabase = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );

    // Static pages
    const staticPages: MetadataRoute.Sitemap = [
        { url: SITE_URL, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
        { url: `${SITE_URL}/shop`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
        { url: `${SITE_URL}/services`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
        { url: `${SITE_URL}/booking`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
        { url: `${SITE_URL}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
        { url: `${SITE_URL}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
        { url: `${SITE_URL}/reviews`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
        { url: `${SITE_URL}/faq`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
        { url: `${SITE_URL}/articles`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
        { url: `${SITE_URL}/gift-cards`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
        { url: `${SITE_URL}/shipping`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.4 },
        { url: `${SITE_URL}/refunds`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.3 },
        { url: `${SITE_URL}/terms`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.3 },
        { url: `${SITE_URL}/privacy`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.3 },
        { url: `${SITE_URL}/cookies`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.3 },
        { url: `${SITE_URL}/legal-notice`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.3 },
        { url: `${SITE_URL}/disclaimer`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.3 },
    ];

    // Dynamic product pages
    let productPages: MetadataRoute.Sitemap = [];
    try {
        const { data: products } = await supabase.from("products").select("slug, created_at");
        if (products) {
            productPages = products.map((product) => ({
                url: `${SITE_URL}/product/${product.slug}`,
                lastModified: product.created_at ? new Date(product.created_at) : new Date(),
                changeFrequency: "weekly" as const,
                priority: 0.8,
            }));
        }
    } catch {
        // Continue without product pages if DB is unavailable
    }

    // Dynamic article pages
    let articlePages: MetadataRoute.Sitemap = [];
    try {
        const { data: articles } = await supabase
            .from("blog_posts")
            .select("slug, published_at, updated_at")
            .eq("status", "published");
        if (articles) {
            articlePages = articles.map((article) => ({
                url: `${SITE_URL}/articles/${article.slug}`,
                lastModified: article.updated_at
                    ? new Date(article.updated_at)
                    : article.published_at
                      ? new Date(article.published_at)
                      : new Date(),
                changeFrequency: "monthly" as const,
                priority: 0.7,
            }));
        }
    } catch {
        // Continue without article pages if DB is unavailable
    }

    return [...staticPages, ...productPages, ...articlePages];
}
