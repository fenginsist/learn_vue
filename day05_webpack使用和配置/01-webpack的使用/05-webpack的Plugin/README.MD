# 一、总结前面的安装各loader

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

6. 配置vue
vue 安装完，需要指定路径。  
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

7. 安装 vue 的 loader
```$xslt
npm install vue-loader@13.0.0 vue-template-compiler@2.6.12 --save-dev 
```
注意：这里的 vue-template-compiler 最好与 vue 版本一致。

# 二、学习使用plugin

## 1. 安装 html-webpack-plugin 插件
插件目的：
```$xslt
npm install html-webpack-plugin@3.2.0 --save-dev
```