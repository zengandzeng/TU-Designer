/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React strict mode for better development experience
  reactStrictMode: true,
  // Configure webpack for ag-psd (handles buffer polyfill)
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Fallbacks for node modules in browser environment
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
        buffer: false,
      };
    }
    
    return config;
  },
}

module.exports = nextConfig
