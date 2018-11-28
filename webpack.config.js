const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const ProgressBarWebpackPlugin = require('progress-bar-webpack-plugin')

const htmlPlugin = new HtmlWebpackPlugin({
  template: path.join(__dirname, 'public/index.html'),
  filename: './index.html'
})
const cssPlugin = new MiniCssExtractPlugin({
  filename: '[name].css',
  chunkFilename: '[name].css'
})
const cleanPlugin = new CleanWebpackPlugin(['dist'])
const copyPlugin = new CopyWebpackPlugin([
  {
    from: path.join(__dirname, './assets'), to: 'assets/'
  }
])
const progressPlugin = new ProgressBarWebpackPlugin({
  format: 'building [:bar] :percent (:elapsed seconds)',
  clear: false,
  width: 30
})

const publishEnv = process.env.npm_lifecycle_event.replace('build:', '')

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
        test: /\.(png|jpeg|jpg|gif|svg)$/i,
        use: [{
          loader: 'url-loader',
          options: {
            name: '[name].[ext]',
            limit: 10240
          }
        }]
      }]
    },
    devtool: publishEnv != 'prod' ? 'source-map' : '',
    plugins: [
      htmlPlugin,
      cssPlugin,
      cleanPlugin,
      copyPlugin,
      progressPlugin      
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
    },
    devServer: {
      open: true,
      stats: {
        assets: false,
        entrypoints: false,
        children: false,
        modules: false,
        errors: true,
        errorDetails: true,
        warnings: true
      }
    }
  }
}