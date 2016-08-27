module.exports = {
    context: __dirname,
    entry: "./src/app.js",
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
    },
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          loader: 'babel-loader'
        }
      ]
    }
}
