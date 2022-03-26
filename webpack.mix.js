/* = LARAVEL MIX
----------------------------------------------- */
const mix = require("laravel-mix");
const fs = require('graceful-fs');
const path = require('path');
const rimraf = require("rimraf");
const isDevelopment = process.env.NODE_ENV === "development";
const pe = require('pretty-error').start();
var LiveReloadPlugin = require('webpack-livereload-plugin');

pe.skip(function (traceLine, lineNumber) {
  if (
    typeof traceLine.packageName !== 'undefined' &&
    traceLine.packageName !== 'demo'
  ) return true;
});

console.log(`✔ OK, NODE_ENV is {${process.env.NODE_ENV}: ${isDevelopment}}`);

mix
  .js("./src/js/app.js", "./public/js")
  .sourceMaps(true)
  .js("./src/js/vendor.js", "./public/js")
  .sourceMaps(true)
  .sass("./src/scss/style.scss", "./public/css/style.css", {
    sassOptions: {
      sourceMap: isDevelopment
    }
  })
  .sourceMaps(true)
  .copy('./src/icons', './public/icons')
  .copy('./src/images', './public/images')
  .copy([
    './src/*.html',
    './src/*.ico'
  ], './public/');

mix
  .disableNotifications()
  .setPublicPath("/")
  .options({
    processCssUrls: true,
    postCss: {
      plugins: [
        require("autoprefixer")
      ]
    },
    clearConsole: false
  })
  .webpackConfig(webpack => {
    return {
      plugins: [
        new webpack.ProvidePlugin({
          $: 'jquery',
          jQuery: 'jquery',
          'window.jQuery': 'jquery'
        })
      ],
      watchOptions: {
        ignored: ['**/icons', '**/images', '**/node_modules'],
      },
      devtool: 'eval',
      devServer: {
        proxy: {
          '/websocket': {
            target: 'ws://localhost:8080',
            ws: true
          },
        },
        static: [
          {
            directory: path.join(__dirname, 'public'),
            publicPath: '/',
          }
        ],
        host: "localhost",
        open: true,
        compress: true,
        port: 3001,
        hot: false,
        allowedHosts: [
          'all'
        ],
        client: {
          logging: 'info',
        }
      }
    }
  });
