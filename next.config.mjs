/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        optimizePackageImports: [
            "@untitledui/icons",
            "@untitledui/file-icons",
            "react-aria-components",
            "react-aria",
            "motion",
        ],
    },
    images: {
        formats: ["image/avif", "image/webp"],
        minimumCacheTTL: 60 * 60 * 24 * 30,
        remotePatterns: [
            { protocol: "https", hostname: "images.unsplash.com" },
            { protocol: "https", hostname: "plus.unsplash.com" },
            { protocol: "https", hostname: "firstsight.design" },
        ],
    },
    devIndicators: false,
};

export default nextConfig;
