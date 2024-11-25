import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['res.cloudinary.com'], // Add the allowed hostname(s)
  },
}

export default nextConfig
