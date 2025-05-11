/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.infrastructureLogging = {
      level: 'error',
    };
    return config;
  },
  // Configurações de imagens
  images: {
    domains: [
      'solana.com',
      'raw.githubusercontent.com',
      'github.com',
      'avatars.githubusercontent.com',
      'pbs.twimg.com',
      'abs.twimg.com'
    ],
    formats: ['image/avif', 'image/webp'],
  },
  // Configurações de performance
  poweredByHeader: false,
  compress: true,
}

module.exports = nextConfig 