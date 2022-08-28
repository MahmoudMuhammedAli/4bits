/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [ "images.unsplash.com" ],
  },
};
module.exports = { nextConfig, i18n };
