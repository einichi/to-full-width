module.exports = {
  presets: [
    [
      "@babel/preset-env",
      { targets: { node: "18", chrome: "109", firefox: "109", safari: "16" } },
    ],
    "@babel/preset-typescript",
  ],
};
