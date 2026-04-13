import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
                disallow: ["/admin/", "/account/", "/cart", "/checkout", "/login", "/register"],
            },
        ],
        sitemap: "https://www.prestige-smile.com/sitemap.xml",
    };
}
