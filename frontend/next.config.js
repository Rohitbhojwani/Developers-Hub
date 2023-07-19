/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_URL: 'sea-lion-app-c7gzh.ondigitalocean.app',
  },
  // images: {
  //       domains: ['anuragbhandari.com'],
  //   },
};

const withImages = require('next-images')
module.exports = withImages({
  webpack(config, options) {
    return config
  }
})

// module.exports = nextConfig;

// module.exports = {
//   env: {
//     PUBLIC_URL: 'https://s.tmimgcdn.com/scr/53500/jobsfactory-job-portal-multipage-html5-website-template_53534-original.jpg',
//   }
// };

// module.exports = {
//   images: {
//       domains: ['s.tmimgcdn.com'],
//   },

// };

module.exports = {
  images: {
    unoptimized: true,
  },
}

// anuragbhandari.com
