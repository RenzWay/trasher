const path = require("path");
const htmlPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/script/main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  devServer: {
    static: path.resolve(__dirname, "dist"),
    hot: true,
  },
  plugins: [
    new htmlPlugin({
      template: "index.html",
    }),
  ],
};
