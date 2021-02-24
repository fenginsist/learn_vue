const baseConfig = require('./webpack.base.config')

const webpackMerge = require('webpack-merge')
const uglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = webpackMerge(baseConfig, {
    plugins: [
        new uglifyJsPlugin()
    ]
})
