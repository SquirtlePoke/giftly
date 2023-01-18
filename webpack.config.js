const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/client/index.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "bundle.js",
  },
  mode: process.env.NODE_ENV,
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/env", "@babel/react"],
        },
      },
      {
        test: /\.s?css/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },

  devtool: "source-map",

  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
      publicPath: "/dist",
    },
    proxy: {
      "/": "http://localhost:3000",
    },
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/client/template.html",
      filename: 'index.html'
    }),
  ],
};
