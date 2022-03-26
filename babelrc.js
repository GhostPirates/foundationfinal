module.exports = {
  "presets": [
      [
          "@babel/preset-env",
          {
              "useBuiltIns": "entry",
              "targets": "defaults, not ie < 11, last 2 versions, > 1%, iOS 7, last 3 iOS versions"
          }
      ]
  ],
  "plugins": [
      [
          "@babel/plugin-transform-runtime",
          {
            "regenerator": true
          }
      ],
      "@babel/plugin-transform-object-assign",
      "@babel/plugin-transform-spread",
      [
          "@babel/plugin-proposal-decorators",
          {
              "legacy": true
          }
      ],
      "@babel/plugin-proposal-optional-chaining",
      "@babel/plugin-proposal-class-properties"
  ]
};
