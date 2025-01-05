/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: "/website",
};

import withVideos from "next-videos";

export default {
    ...nextConfig,
    ...withVideos(),
};