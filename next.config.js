/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  images : {
    domains : ['b.thumbs.redditmedia.com']
  }
};

module.exports = nextConfig;
