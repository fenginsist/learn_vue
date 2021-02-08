# 安装各loader

1. css
```$xslt
npm install --save-dev css-loader@2.0.2
npm install --save-dev style-loader@0.23.1 --force
```
1. less
```$xslt
npm install less-loader@4.1.0 less@3.9.0 --save-dev --force
```
3. 图片
```$xslt
npm install url-loader@1.1.2 --save-dev --force
npm install file-loader@3.0.1 --save-dev --force
```

4. babel
```$xslt
npm install -D babel-loader @babel/core @babel/preset-env
```

5. vue

```$xslt
npm install --save-dev vue
```

# 二、配置vue

vue 安装完成，开始使用

在main.js 中，按以前的方式使用，引入vue, 并实例化  
定义一个data.message 并在 index.html 进行显示  

npm run build 打包成功

浏览器中，没有显示message 信息，而且 console 报错了，如下
![](./assert/error.png)

先了解这两个模式：  
runtime-only -> 代码中，不可以有任何的template，
runtime-compiler -> 代码中，可以有template ，因为游compiler 可以用于编译 template 

需要在webpack.config.js 配置文件中 指定为 vue
也就是在main.js 中 import vue 时，回来 配置文件中，看是否有指向的某个文件夹
```$xslt
  resolve: {
    // alias： 别名， $： 以vue为结尾的
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  }
```


# 三、SPA（simple page web application） 单页面应用
HTML 不在 index.html 中写

然后在main.js 中写




# 四、安装vue 的loader

```$xslt
npm install vue-loader@15.4.2 vue-template-compiler@2.5.21 --save-dev 
```
