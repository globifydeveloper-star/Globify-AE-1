/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { unoptimized: true },
  async headers() {
    return [
      {
        source: '/llms.txt',
        headers: [
          { key: 'Content-Type', value: 'text/plain; charset=utf-8' },
        ],
      },
    ];
  },
  async redirects() {
    return [
      { source: '/checkout', destination: '/', permanent: true },
      { source: '/cart', destination: '/', permanent: true },
      { source: '/sample-page', destination: '/', permanent: true },
      { source: '/hello-world', destination: '/', permanent: true },
      { source: '/shop', destination: '/services', permanent: true },
      { source: '/faq', destination: '/', permanent: true },
      { source: '/social-media-brand', destination: '/social-media-marketing', permanent: true },
    ];
  },
};
export default nextConfig;
