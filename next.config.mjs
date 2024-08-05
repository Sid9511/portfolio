import { withSentryConfig } from '@sentry/nextjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: '', // Correct for root directory
    assetPrefix: '', // Also set to empty for root
    output: 'export', 
    async rewrites() {
        return [];
    },
};

// Sentry configuration
const sentryConfig = {
    org: "self-nn2",
    project: "my-portfolio",
    silent: !process.env.CI, // Only log if not in CI
    widenClientFileUpload: true,
    hideSourceMaps: true,
    disableLogger: true,
    automaticVercelMonitors: true,
};

export default withSentryConfig(nextConfig, sentryConfig);
