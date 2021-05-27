# 一、学习各loader

## 1. 打包css 的 loader
要使用css，需要导入css-loader 和 style-loader  

1. 先安装css-loader:  解析 CSS 文件后，使用 import 加载，并且返回 CSS 代码  
`npm install --save-dev css-loader@2.0.2`

2. 在安装style-loader:将模块的导出作为样式添加到 DOM 中
`npm install --save-dev style-loader@0.23.1 --force`

3. webpack.config.js配置：
```$xslt
      {
        /*
        * 使用多个 loader时，从右往左执行
        * css-loader : 解析 CSS 文件后，使用 import 加载，并且返回 CSS 代码
        * style-loader: 将模块的导出作为样式添加到 DOM 中
        * */
        test: /\.css$/, use: ['style-loader', 'css-loader']
      },
```



## 2. 打包 less 的 loader
`npm install less-loader@4.1.0 less@3.9.0 --save-dev --force`

webpack.config.js配置：
```$xslt
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
```

## 3. 打包图片的 loader
需要安装 url-loader  file-loader这两个loader  
图片的转换使用哪个loader 取决于 webpack.config.js 配置文件中的 limit 配置大小  
当图片的大小小于 limit 配置时，使用 url-loader   
当图片的大小大于 limit 配置时，使用 file-loader  

`npm install url-loader@1.1.2 --save-dev --force`  
`npm install file-loader@3.0.1 --save-dev --force`

webpack.config.js配置：
```$xslt
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
```

## 4. ES6转ES5的babel

`npm install -D babel-loader @babel/core @babel/preset-env`

webpack.config.js配置：
```$xslt
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
      }
```

# 二、 安装loader 中发生的错误

## 打包css报错
```$xslt
ERROR in ./src/css/normal.css
Module parse failed: F:\ffl\webProject\study\vueStudy\day05_webpack使用和配置\01-webpack的使用\03-webpack的loader\src\css\normal.css Une
xpected token (1:0)
You may need an appropriate loader to handle this file type.
| .background{
|   background-color: red;
| }
 @ ./src/main1.js 15:0-27
npm ERR! code 2
npm ERR! path F:\ffl\webProject\study\vueStudy\day05_webpack使用和配置\01-webpack的使用\03-webpack的loader
npm ERR! command failed
npm ERR! command C:\Windows\system32\cmd.exe /d /s /c webpack

npm ERR! A complete log of this run can be found in:
npm ERR!     C:\Program Files\nodejs\node_cache\_logs\2021-02-07T09_55_33_666Z-debug.log
``` 
需要在webpack.config.js 中加入 loader，  
至于要加入什么loader，这里使用的是css ,所以要加入 css-loader  
去官网找 loader部分   
执行命令： npm install --save-dev css-loader@2.0.2  


## 安装 css-loader 报错
npm install --save-dev css-loader
```$xslt
npm ERR! code ERESOLVE
npm ERR! ERESOLVE unable to resolve dependency tree
npm ERR!
npm ERR! While resolving: webpackloader@1.0.0
npm ERR! Found: webpack@3.12.0
npm ERR! node_modules/webpack
npm ERR!   dev webpack@"^3.6.0" from the root project
npm ERR!
npm ERR! Could not resolve dependency:
npm ERR! peer webpack@"^4.27.0 || ^5.0.0" from css-loader@5.0.1
npm ERR! node_modules/css-loader
npm ERR!   dev css-loader@"*" from the root project
npm ERR!
npm ERR! Fix the upstream dependency conflict, or retry
npm ERR! this command with --force, or --legacy-peer-deps
npm ERR! to accept an incorrect (and potentially broken) dependency resolution.
npm ERR!
npm ERR! See C:\Program Files\nodejs\node_cache\eresolve-report.txt for a full report.

npm ERR! A complete log of this run can be found in:
npm ERR!     C:\Program Files\nodejs\node_cache\_logs\2021-02-07T10_12_37_544Z-debug.log
```
最下面有提示 可以 加入参数 --force, or --legacy-peer-deps

`npm install --save-dev css-loader --force`

虽然安装成功，这里注意下，安装后的css-loader版本 为5版本，但还是打包报错, 如下：
```$xslt
TypeError: this.getResolve is not a function
```
这里还是版本问题，下载的css-loader 版本过高

指定低版本安装
`npm install --save-dev css-loader@2.0.2 --force`
安装成功

执行打包命令

`npm run build`

如下，打包成功
```$xslt
> webpackloader@1.0.0 build
> webpack

Hash: 4c21336511099320a1ae
Version: webpack 3.6.0
Time: 353ms
    Asset     Size  Chunks             Chunk Names
bundle.js  6.41 kB       0  [emitted]  main
   [0] ./src/main1.js 358 bytes {0} [built]
   [1] ./src/js/mathUtils.js 148 bytes {0} [built]
   [2] ./src/js/info.js 79 bytes {0} [built]
   [3] ./src/css/normal.css 181 bytes {0} [built]
    + 1 hidden module

```

## 安装 style-loader 

直接指定版本
`npm install --save-dev style-loader@0.23.1 --force`


## 安装 less-loader less
less-loader 加载 less 文件

less 转化 less 文件
`npm install less-loader@4.1.0 less@3.9.0 --save-dev --force`

## 安装 url-loader  file-loader

`npm install url-loader@1.1.2 --save-dev --force`

报错 ：
```$xslt
Module build failed: Error: Cannot find module 'file-loader'
```
报错原因：

安装 file-loader

`npm install file-loader@3.0.1 --save-dev --force`

## 安装 babel-core babel-loader babel-preset-es2015
在打包好的bundle.js 中发现还有es6的语法 如const关键字，这样有的浏览器是不支持的
所以需要 babel 进行转译

下面这个是老师教学的，安装成功，但是打包报错。
`npm install --save-dev babel-core@6.26.3 babel-loader@7.1.5 babel-preset-es2015@6.24.1 --force`

于是按照官网上，安装成功，打包成功。
`npm install -D babel-loader @babel/core @babel/preset-env`
安装成功后他们的版本是：
```$xslt
"@babel/core": "^7.12.13",
"@babel/preset-env": "^7.12.13",
"babel-loader": "^8.2.2",
```

打包后，再去 bundle.js  就找不到es6的语法了，如 const关键字,const 都变成了 var


## webpack 配置 vue
