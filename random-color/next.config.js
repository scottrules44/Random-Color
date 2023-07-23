/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    assetPrefix: './',
    // Optional: Add a trailing slash to all paths `/about` -> `/about/`
    // trailingSlash: true,
    distDir: 'dist',
  }

module.exports = nextConfig
