/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true
    },
    // Remove trailing slash if you have any
    trailingSlash: false
}

module.exports = nextConfig