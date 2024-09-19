/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
    remotePatterns: [
        {
            protocol: 'https',
            hostname: 'avatars.githubusercontent.com',
            port: '',
        },
        {
            protocol: 'https',
            hostname: 'lh3.googleusercontent.com',
            port: '',
        },
        {
            protocol: 'https',
            hostname: 'c10.patreonusercontent.com',
            port: '',
        },
        {
            protocol: 'https',
            hostname: 'encrypted-tbn0.gstatic.com',
            port: '',
        },
    ],
},};

export default nextConfig;
