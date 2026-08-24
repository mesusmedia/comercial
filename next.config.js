/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'clinica.esteticalosangeles.com.br',
      'whatsapp.com',
      'images.unsplash.com',
    ],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 600,
  },
  trailingSlash: true,
};

module.exports = nextConfig;