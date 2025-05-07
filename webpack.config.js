const path = require("path");
const nodeExternals = require("webpack-node-externals");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  target: "node", // For backend apps
  mode: "production",
  entry: "./src/server.js", // Adjust if your entry point differs
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "server.js",
  },
  externals: [nodeExternals()], // Ignore node_modules for bundling
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader", // If you're using ES6+
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        path.resolve(__dirname, "src", "index.html"), // Copies HTML/assets
      ],
    }),
  ],
  resolve: {
    extensions: [".js"],
  },
};
