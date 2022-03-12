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

// Clean css/js folder
// rimraf("dist/{css,js}/*.{css,js}", fs, () => {
// 	console.log("✔ OK - Cleaned out the dist folder! ✌(◕‿-)✌ ");
// });

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
          // {
          //   directory: path.join(__dirname, 'dist'),
          //   publicPath: '/assets',
          // }
        ],
        host: "localhost",
        open: true,
        compress: true,
        port: 8080,
        allowedHosts: [
          'all'
        ],
        client: {
          logging: 'info',
        }
      }
    }
  })
  .browserSync('localhost:8080')
  .js("src/js/app.js", "public/assets/js")
  .js("src/js/vendor.js", "public/assets/js")
  .sass("src/scss/style.scss", "public/assets/css", {
    sassOptions: {
      sourceMap: isDevelopment
    }
  })
  .sourceMaps(isDevelopment, "inline-source-map")
  .copy('src/icons', 'public/icons')
  .copy('src/images', 'public/images')
  .copy([
    'src/*.html',
    'src/*.ico'
  ], 'public/')
  // .copy('dist', 'public/assets');

// if (!isDevelopment) {
// 	mix
// 		.js("src/js/app.js", "dist/js")
// 		.minify("public/js/main.js")
// 		.version();
//     mix
// 		.js("src/js/vendor.js", "dist/js")
// 		.minify("public/js/vendor.js")
// 		.version();
// 	mix
// 		.sass("src/scss/style.scss", "dist/css")
// 		.minify("public/css/style.css")
// 		.version();
// }

// Static assets.
// mix.copy("dist", "public/assets", false);
