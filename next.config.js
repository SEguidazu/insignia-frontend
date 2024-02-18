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
    NEXT_URL: "https://insignia-frontend.vercel.app",
    // NEXT_URL: "http://127.0.0.1:3000",
    STRAPI_API: "http://44.212.38.42:1337",
    // STRAPI_API: "http://127.0.0.1:1337",
    STRAPI_API_KEY:
      "3121148a70a31fcbcb73ca67f8348646b51fabccb095a96b5380b516c09a73e0ba40a2065e87f62c0f665df655a36ec2ef8d3b1c832768bd2c138cea9e7d245b0e34cb380d50aea4622309044a24fdd2bc02bd7c51eac17a9c00d7270d2cbfe79a18eead446ba1a8c7477a7285f3e14824f198600aee3cf28754830945aa17a5",
    // SANTI MP KEYS
    // MP_PUBLIC_KEY: "TEST-4974ccff-35e0-4dbb-9b34-ce0968df36e1",
    // MP_ACCESS_TOKEN:
    //   "TEST-8960315899622366-013122-7f481e632ba4e407e5e4d79b0846329b-281117384",
    // TEST SELLER USER MP KEYS
    MP_PUBLIC_KEY: "TEST-5566f696-0000-45dc-a864-c6e04f1be9be",
    MP_ACCESS_TOKEN:
      "TEST-946760120223851-021813-7c799c97063e706fadf745b149713ae6-1444066948",
    MP_NOTIFY_URL: "insignia-frontend.vercel.app/api/notify",
    MP_WEBHOOKS_KEY:
      "ac15d6fbc8acf3f5a3ff52d891111164a4dab513cece4ec1251378b4680f0036",
  },
};

module.exports = nextConfig;
