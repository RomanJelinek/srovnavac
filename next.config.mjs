/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'www.adrop.cz',
                port: '',
                pathname: '/files/fotos/**',
            },
        ],
    },
};

export default nextConfig;
