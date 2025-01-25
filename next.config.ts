import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "challenge-uno.vercel.app",
                port: "",
                pathname: "/images/**",
                search: "",
            },
        ],
    },
};

export default nextConfig;
