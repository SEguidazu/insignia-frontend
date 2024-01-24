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
        protocol: "http",
        hostname: "bucket-lvplz6.s3.us-east-1.amazonaws.com",
      },
    ],
  },
  env: {
    // STRAPI_API: "http://127.0.0.1:1337",
    STRAPI_API: "http://44.212.38.42:1337",
    STRAPI_API_KEY:
      "4a9799a151854835643a898efd00b9f573e5d39cc208a87fce223f87a2d2a3b9d993e1274723ccc37e16ed6d6afd58cbcaf7d005f307763d51b9245b3694afd7c281cc474bfbe213d5e1f33141eda4566af3aec50cd260f189167477b4dd6eb94157e0aabf70772f2a13e79eda082460ee9cbd2b3870b919343fb02274e74d17",
  },
};

module.exports = nextConfig;
