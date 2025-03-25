/** @type {import('next').NextConfig} */
// This is the main Next.js configuration file for static exporting
const nextConfig = {
  output: 'export', // Enable static export
  images: {
    unoptimized: true, // Required for static export
    domains: ['your-media-storage-domain.com'], // Add your storage domain
  },
  // Remove any server-side features
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Add trailing slash for better static hosting compatibility
  trailingSlash: true,
  // Remove swcMinify as it's no longer necessary in Next.js 15.1.0
  // swcMinify: true,
  // Custom headers are not supported with static export; removing the headers function
  // headers() {
  //   return [
  //     {
  //       source: '/(.*)',
  //       headers: [
  //         {
  //           key: 'Cache-Control',
  //           value: 'public, max-age=31536000, immutable',
  //         },
  //       ],
  //     },
  //     {
  //       source: '/',
  //       headers: [
  //         {
  //           key: 'Cache-Control',
  //           value: 'public, max-age=3600, must-revalidate',
  //         },
  //       ],
  //     },
  //   ];
  // },
}

export default nextConfig;
