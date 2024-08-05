import { withSentryConfig } from '@sentry/nextjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: '/portfolio', // Replace with your repository name
    assetPrefix: '/portfolio/',
    output: 'export', // Ensure this is set for static export
    experimental: {
      // Add experimental settings if needed
      appDir: true, // Example for experimental features
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