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
    // NEXT_URL: "https://insignia-frontend.vercel.app",
    STRAPI_API: "http://44.212.38.42:1337",
    STRAPI_API_KEY:
      "732963aa3b1576a31aa69362b4c25027c72b95a407f3fc90c195e333195cae56939b835cd15d40830b25979ba7c0aa4a71d4a7eb6f3de262b60dbd0eb4d867cc55a401f3d9614cdea344991c6e1e52c30206d65017d64eff6b1664ead93ddd4e3c695264e8ce35c78f63aae4de9f5c62719f16f7bd8e214488fd64f81801bc7d",
    // TEST SELLER USER MP KEYS
    MP_PUBLIC_KEY: "TEST-5566f696-0000-45dc-a864-c6e04f1be9be",
    MP_ACCESS_TOKEN:
      "TEST-946760120223851-021813-7c799c97063e706fadf745b149713ae6-1444066948",
    // MP_NOTIFY_URL: "insignia-frontend.vercel.app/api/notify",
    MP_NOTIFY_URL:
      "insignia-frontend-git-develop-eguidazusan.vercel.app/api/notify",
    MP_WEBHOOKS_KEY:
      "ac15d6fbc8acf3f5a3ff52d891111164a4dab513cece4ec1251378b4680f0036",

    // VERCEL DEVELOPMENT
    NEXT_URL: "https://insignia-frontend-git-develop-eguidazusan.vercel.app",
    MP_NOTIFY_URL:
      "insignia-frontend-git-develop-eguidazusan.vercel.app/api/notify",

    // LOCAL DEVELOPMENT
    // NEXT_URL: "http://127.0.0.1:3000",
    // STRAPI_API: "http://127.0.0.1:1337",
    // STRAPI_API_KEY:
    //   "4a9799a151854835643a898efd00b9f573e5d39cc208a87fce223f87a2d2a3b9d993e1274723ccc37e16ed6d6afd58cbcaf7d005f307763d51b9245b3694afd7c281cc474bfbe213d5e1f33141eda4566af3aec50cd260f189167477b4dd6eb94157e0aabf70772f2a13e79eda082460ee9cbd2b3870b919343fb02274e74d17",
    // SANTI MP KEYS
    // MP_PUBLIC_KEY: "TEST-4974ccff-35e0-4dbb-9b34-ce0968df36e1",
    // MP_ACCESS_TOKEN:
    //   "TEST-8960315899622366-013122-7f481e632ba4e407e5e4d79b0846329b-281117384",
  },
};

module.exports = nextConfig;
