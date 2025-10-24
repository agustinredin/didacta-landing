/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    typescript: {
        ignoreBuildErrors: true,
    },
    images: {
        unoptimized: true,
    },
    env: {
        NEXT_PUBLIC_API_URL: process.env.API_URL,
        NEXT_PUBLIC_APP_URL: process.env.APP_URL,
    },
    allowedDevOrigins: ['http://localhost:3000', 'http://192.168.0.15:3000', '*'],
}

export default nextConfig