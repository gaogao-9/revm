/* eslint-env node */
/* eslint-disable @typescript-eslint/no-var-requires */
// @ts-check
const path = require("path");

module.exports = {
  future: {
    webpack5: true,
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "~": path.resolve(__dirname, "src"),
    };

    return config;
  },
};
