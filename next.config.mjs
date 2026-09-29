/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: true
    },
    async headers() {
        return [
            {
                source: '/verify/:path*',
                headers: [
                    {
                        key: 'X-Robots-Tag',
                        value: 'noindex, nofollow, noarchive'
                    },
                    {
                        key: 'Cache-Control',
                        value: 'private, no-cache, no-store, must-revalidate'
                    }
                ]
            },
            {
                source: '/api/certificates/:path*',
                headers: [
                    {
                        key: 'X-Robots-Tag',
                        value: 'noindex, nofollow, noarchive'
                    },
                    {
                        key: 'Cache-Control',
                        value: 'private, no-cache, no-store, must-revalidate'
                    }
                ]
            }
        ];
    }
};

export default nextConfig;
