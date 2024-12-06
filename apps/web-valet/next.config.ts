import { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { hostname: 'api.mapbox.com' },
      { hostname: 'res.cloudinary.com' },
    ],
  },
}

export default nextConfig
