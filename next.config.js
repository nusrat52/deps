/**@type {import ('next').NextConfig} */

const webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",




  experimental: {
    images: {
      domains: ['**.194.233.173.232/**'],
    },
  },
  
  i18n: {
    locales: ['az', 'en', 'ru'],
    defaultLocale: 'az',
    localeDetection: false
  },

  module: {
 
    rules: [
       {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "images/[hash]-[name].[ext]",
            },
          },
        ],
      },
    ],
  },

  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.plugins.push(
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery",
      })
    );

    return config;
  },
};
