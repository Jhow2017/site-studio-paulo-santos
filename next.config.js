/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'readdy.ai',
                port: '',
                pathname: '/api/search-image/**',
            },
        ],
    },
};

module.exports = nextConfig;
