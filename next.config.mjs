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
    allowedDevOrigins: ['http://localhost:3000', 'http://192.168.0.15:3000'],
}

export default nextConfig