module.exports = {
    "presets": [
        [
          "@babel/preset-env",
          {
            "loose": true,
            "shippedProposals": true
          }
        ]
      ],
    "plugins": [
      "@babel/plugin-proposal-class-properties",
      "@babel/plugin-proposal-object-rest-spread",
    // ["@babel/plugin-proposal-class-properties", {loose: true}],
    // ["@babel/plugin-proposal-private-methods", {loose: true}],
    // ["@babel/plugin-proposal-private-property-in-object", {loose: true}]
    ],
    "babelrcRoots": [ "./", "./almLib/almLib" ]
}