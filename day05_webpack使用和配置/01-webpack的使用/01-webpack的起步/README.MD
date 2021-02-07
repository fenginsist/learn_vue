# 前言
通过 webpack 进行打包到 dist 文件夹  dist->distribution 发行、发布  
这里的 webpack 是全局安装的 webpack  
版本不同 使用方式不同  

# 一、问题
如果不使用webpack打包直接打开 index.html网页
会报错
```$xslt
Uncaught SyntaxError: Unexpected token 'export
Uncaught SyntaxError: Cannot use import statement outside a module
```
因为 es6 的语法 浏览器识别不了，所以要进行webpack打包成 浏览器可以识别的

# 二、打包
我这里下载使用的是 webpack 4.0.0  

执行打包命令： webpack ./src/main.js -o ./dist/bundle.js

便自动生成 \dist\bundle.js\main.js

index.html 页面中 js 便可成功执行