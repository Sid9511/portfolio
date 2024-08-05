import { withSentryConfig } from '@sentry/nextjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: '/portfolio', // Replace with your repository name
    assetPrefix: '/portfolio/',
    output: 'export', // Ensure this is set for static export
    experimental: {
        appDir: true, // Example for experimental features
    },
    // Exclude API routes from static export
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: '/api/:path*', // Pass through to the API routes
            },
        ];
    },
};

export default withSentryConfig(nextConfig, {
    org: "self-nn2",
    project: "my-portfolio",
    silent: !process.env.CI,
    widenClientFileUpload: true,
    hideSourceMaps: true,
    disableLogger: true,
    automaticVercelMonitors: true,
});
