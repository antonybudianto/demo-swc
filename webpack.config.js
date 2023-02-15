const path = require("path");

module.exports = {
  target: "web",
  entry: "./index.tsx",
  stats: "minimal",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.[tj]sx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: "swc-loader",
          options: {
            jsc: {
              parser: {
                syntax: "typescript",
                tsx: true,
              },
              transform: {
                react: {
                  runtime: "automatic",
                },
              },
              experimental: {
                plugins: [[require.resolve("swc-plugin-hello"), {}]],
              },
            },
          },
        },
      },
    ],
  },
};
