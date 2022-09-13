
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
})
module.exports = withPWA({
  reactStrictMode: true,
  images: {
    domains: ['www.gstatic.com', 'live.staticflickr.com'],
  }
})
