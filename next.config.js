/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    async rewrites(){
        return [
            {
                source: '/:path*',
                destination: process.env.HOST + '/:path*'
            }
        ]
    }
}

module.exports = nextConfig
