/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "127.0.0.1",
      },
      {
        protocol: "http",
        hostname: "44.212.38.42",
      },
      {
        protocol: "https",
        hostname: "strapi-insignia-media.s3.us-east-1.amazonaws.com",
      },
    ],
  },
  env: {
    // VERCEL PROD
    NEXT_URL: process.env.NEXT_URL,
    STRAPI_API: process.env.STRAPI_API,
    STRAPI_API_KEY: process.env.STRAPI_API_KEY,
    // TEST SELLER USER MP KEYS
    MP_PUBLIC_KEY: process.env.MP_PUBLIC_KEY,
    MP_ACCESS_TOKEN: process.env.MP_ACCESS_TOKEN,
    MP_NOTIFY_URL: process.env.MP_NOTIFY_URL,
    MP_WEBHOOKS_KEY: process.env.MP_WEBHOOKS_KEY,
  },
};

module.exports = nextConfig;
