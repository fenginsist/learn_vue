const path = require('path')
import css from 'normal.css';

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'), // __dirname: 当前文件的目录
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/, use: ['css-loader'],
      },
    ],
  },
}