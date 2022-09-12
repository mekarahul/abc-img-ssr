/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    // assuming you were using the Sanity.io image CDN
    // domains is an array of comma-separated strings
    // ['cdn.sanity.io', 'cdn.not-sanity.io', 'another domain']
    domains: ['www.gstatic.com', 'live.staticflickr.com'],
  }

}

module.exports = nextConfig
