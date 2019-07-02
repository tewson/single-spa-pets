const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  output: {
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: "babel-loader"
      }
    ]
  },
  externals: {
    /*
     * SystemJS is bundled with the "IIFE" format by rollup.
     * Therefore, we have to load it from the <script> tag instead of the usual `import`.
     */
    systemjs: "System"
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html"
    })
  ],
  devServer: {
    port: 8082,
    historyApiFallback: true
  }
};
