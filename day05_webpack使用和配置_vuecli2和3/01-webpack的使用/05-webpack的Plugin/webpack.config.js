const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const uglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'), // __dirname: 当前文件的目录
        filename: 'bundle.js',
        // publicPath: 'dist/'
    },
    module: {
        rules: [
            {
                /*
                * 使用多个 loader时，从右往左执行
                * css-loader : 解析 CSS 文件后，使用 import 加载，并且返回 CSS 代码
                * style-loader: 将模块的导出作为样式添加到 DOM 中
                * */
                test: /\.css$/, use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                use: [{
                    loader: 'style-loader' // creates style nodes from JS strings
                }, {
                    loader: 'css-loader' // translates CSS into CommonJS
                }, {
                    loader: 'less-loader' // compiles Less to CSS
                }]
            },
            {
                test: /\.(png|jpg|gif)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            // 当加载的图片，小于 limit 时，会将图片编译成 base64字符串形式
                            // 当加载的图片，大于 limit 时，会使用 file-loader 模块进行加载
                            limit: 8192,
                            // 这个 name 配置  可以在 file-loader 的官网中看到
                            /*
                            * img 文件夹
                            * [name] 传过来的图片名称
                            * [hash:8] 哈希值取前8位
                            * [ext] 带上ext
                            * */
                            name: 'img/[name].[hash:8].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.m?js$/,
                // 排除 一些包
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-proposal-object-rest-spread']
                    }
                }
            },
            {
                test: /\.vue$/,
                use: ['vue-loader']
            }
        ],
    },
    resolve: {
        // import 文件时，可以不写后缀，在这里配置，但是我这里不写配置不写后缀也可以成功。
        extensions: ['.js', '.css', '.vue'],
        // alias： 别名， $：以vue为结尾的
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    plugins: [
        new webpack.BannerPlugin('最终版权归冯安晨所有！！！'),
        new HtmlWebpackPlugin({
            template: 'index.html'
        }),
        new uglifyJsPlugin()
    ],
    devServer: {
        contentBase: './dist',
        inline: true
    }
}