const path = require('path')

module.exports = {
  entry: './src/main1.js',
  output: {
    path: path.resolve(__dirname, 'dist'), // __dirname: 当前文件的目录
    filename: 'bundle.js'
  },
}