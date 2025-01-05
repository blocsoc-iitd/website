/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    trailingSlash: true, // Ensures static files work with GitHub Pages
    output: 'export',    // Required for static site generation
};

import withVideos from "next-videos";

export default {
    ...nextConfig,
    ...withVideos(),
};