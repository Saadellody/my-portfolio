import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Désactiver les indicateurs de dev
  devIndicators: false,

  // Optimisation des images
  images: {
    formats: ["image/webp", "image/avif"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    qualities: [75, 90],
    // Cache les images optimisées pendant 60 jours
    minimumCacheTTL: 60 * 60 * 24 * 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Compression brotli et gzip
  compress: true,

  // Production source maps (désactivé pour réduire la taille)
  productionBrowserSourceMaps: false,

  // Optimiser pour les performance metrics
  experimental: {
    // Optimiser le rendering côté serveur
    serverMinification: true,
    // Optimiser les dépendances externes
    optimizePackageImports: [
      "lodash-es",
      "date-fns",
    ],
  },

  // Turbopack configuration pour production build
  turbopack: {},

  // Headers de sécurité et performance
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // Performance headers
          // {
          //   key: "Cache-Control",
          //   value: "public, max-age=31536000, immutable",
          // },
          // Force Clear Cache - REMOVED
          // Sécurité headers
          // Sécurité headers
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          // Performance hints
          {
            key: "Link",
            value: "</fonts/geist.woff2>; rel=preload; as=font; type=font/woff2; crossorigin",
          },
        ],
      },
      // Cache les assets statiques longtemps
      {
        source: "/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      // Cache les images optimisées
      {
        source: "/_next/image(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
