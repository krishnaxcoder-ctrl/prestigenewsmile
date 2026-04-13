import type { Metadata } from "next";
import { createClient } from "@supabase/supabase-js";

const SITE_URL = "https://www.prestige-smile.com";

async function getProduct(slug: string) {
    const supabase = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );

    const { data } = await supabase
        .from("products")
        .select("name, description, images, price, original_price, category, in_stock, rating, reviews")
        .eq("slug", slug)
        .single();

    return data;
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const product = await getProduct(slug);

    if (!product) {
        return {
            title: "Product Not Found",
            description: "The product you are looking for does not exist.",
        };
    }

    const title = product.name;
    const description =
        product.description?.slice(0, 160) ||
        `Shop ${product.name} at Prestige Smile. Professional teeth whitening and oral care products.`;
    const image = product.images?.[0] || undefined;

    return {
        title,
        description,
        alternates: {
            canonical: `${SITE_URL}/product/${slug}`,
        },
        openGraph: {
            title,
            description,
            url: `${SITE_URL}/product/${slug}`,
            type: "website",
            images: image ? [{ url: image, alt: product.name }] : undefined,
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

export default async function ProductSlugLayout({
    params,
    children,
}: {
    params: Promise<{ slug: string }>;
    children: React.ReactNode;
}) {
    const { slug } = await params;
    const product = await getProduct(slug);

    const jsonLd = product
        ? {
              "@context": "https://schema.org",
              "@type": "Product",
              name: product.name,
              description: product.description || undefined,
              image: product.images?.[0] || undefined,
              url: `${SITE_URL}/product/${slug}`,
              brand: {
                  "@type": "Brand",
                  name: "Prestige Smile",
              },
              offers: {
                  "@type": "Offer",
                  price: product.price,
                  priceCurrency: "EUR",
                  availability: product.in_stock
                      ? "https://schema.org/InStock"
                      : "https://schema.org/OutOfStock",
                  seller: {
                      "@type": "Organization",
                      name: "Prestige Smile",
                  },
              },
              ...(product.rating && product.reviews
                  ? {
                        aggregateRating: {
                            "@type": "AggregateRating",
                            ratingValue: product.rating,
                            reviewCount: product.reviews,
                        },
                    }
                  : {}),
          }
        : null;

    return (
        <>
            {jsonLd && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            )}
            {children}
        </>
    );
}
