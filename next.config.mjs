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
            {
                protocol: 'https',
                hostname: 'alis.zazitky.cz',
                port: '',
                pathname: '/data/images/**',
            },
        ],
    },
};

export default nextConfig;
