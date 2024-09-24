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
            hostname: 'plus.unsplash.com',
            port: '',
        },
        {
            protocol: 'https',
            hostname: 'encrypted-tbn0.gstatic.com',
            port: '',
        },
        {
            protocol: 'https',
            hostname: 'www.svgrepo.com',
            port: '',
        },
        {
            protocol: 'https',
            hostname: 'res.cloudinary.com',
            port: '',
        },
    ],
},};

export default nextConfig;
