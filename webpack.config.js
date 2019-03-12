const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
  mode: 'development',
  entry: {
    main: "./example/index.tsx"
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, 'dist')
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",
  devServer: {
    contentBase: './dist/',
    historyApiFallback: true
  },
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".json"],
    alias: {
      $root: path.resolve(__dirname),
      $src: path.resolve(__dirname, 'src'),
      $component: path.resolve(__dirname, 'src/component'),
      $widget: path.resolve(__dirname, 'src/widget'),
      $tools: path.resolve(__dirname, 'src/script/tools.tsx'),
      $preset: path.resolve(__dirname, 'src/script/preset.tsx'),
    }
  },

  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader"
      },

      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.(eot|woff|woff2|svg|ttf)([\?]?.*)$/,
        loader: "file-loader"
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'style.css',
      allChunks: true
    }),
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: './example/index.html'
    })
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  }
};