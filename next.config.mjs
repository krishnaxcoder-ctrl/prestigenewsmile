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
    devIndicators: false,
};

export default nextConfig;
