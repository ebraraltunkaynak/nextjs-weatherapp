/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  images:{
    domains: [
      'images5.alphacoders.com',"openweathermap.org"
    ]
  }
}
