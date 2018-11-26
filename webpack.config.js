const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const hwp = new HtmlWebpackPlugin({
  template: path.join(__dirname, 'public/index.html'),
  filename: './index.html'
})

module.exports = {
  entry: path.join(__dirname, 'public/index.js'),
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          "presets": ["env", "react"],
          "plugins": [["import", {"libraryName": "antd", "style": true}]] 
        }
      }
    }, {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
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
  plugins: [
    hwp
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.html', '.css', '.less']
  },
  devServer: {
    port: 3001
  }
}