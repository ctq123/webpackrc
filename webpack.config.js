const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const htmlPlugin = new HtmlWebpackPlugin({
  template: path.join(__dirname, 'public/index.html'),
  filename: './index.html'
})
const cssPlugin = new MiniCssExtractPlugin({
  filename: '[name].css',
  chunkFilename: '[name].css'
})
const cleanPlugin = new CleanWebpackPlugin(['dist'])

module.exports = (env, argv) => {
  const devMode = argv.mode !== 'production'
  return {
    entry: {
      main: [
        "babel-polyfill",
        path.join(__dirname, './public/index.js'),
      ],
      vendor: ['react', 'react-dom']
    },
    output: {
      path: path.join(__dirname, './dist/'),
      filename: '[name].js',
      chunkFilename: '[name].js'
    },
    module: {
      rules: [{
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            "presets": ["env", "react"],
            "plugins": ["transform-runtime", ["import", {"libraryName": "antd", "style": true}]] 
          }
        }
      }, {
        test: /\.css$/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader'
        ],
      }, {
        test: /\.less$/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader'
        }, {
          loader: 'less-loader',
          options: {
            modifyVars: {
              'primary-color': '#1DA57A',
              'primary-color': '#1DA57A',
              'border-radius-base': '2px',
            },
            javascriptEnabled: true 
          }
        }]
      }, {
        test: /\.(png|jpg|gif|svg)$/,
        use: ['file-loader']
      }]
    },
    // devtool: 'source-map',
    plugins: [
      htmlPlugin,
      cssPlugin,
      cleanPlugin
    ],
    optimization: {
      splitChunks: {
        chunks: 'all',
        minSize: 30000, // 大于30K才会抽离到公共模块
        minChunks: Infinity,
        name: 'vendor'
      },
    },
    resolve: {
      extensions: ['.js', '.jsx', '.html', '.css', '.less']
    },
    devServer: {
      port: 3001
    },
    performance: {
      hints: false
    },
    stats: {
      entrypoints: false,
      children: false,
      modules: false,
      errors: true,
      errorDetails: true,
      warnings: true
    }
  }
}