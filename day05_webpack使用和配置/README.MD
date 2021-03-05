# 一、各项目分析

## 1. 01-webpack的使用
1. 01-webpack的起步 初始用  
    初使用打包命令进行打包： `webpack ./src/main1.js -o ./dist/bundle.js` 打包
2. 02-webpack的配置   
    使用webpack的配置文件 `webpack.config.js` 进行配置打包信息，进而简化打包命令： `webpack`,详细看项目内的 README.MD
3. 03-webpack的loader  
    安装使用别的语法的 loader，并且在 `webpack.config.js` 中配置，详细看项目内的 README.MD
4. 04-webpack配置vue  
    webpack 配置整合vue ，一步一步的提取`main.js` 和 `index.html` 代码到 `.vue` 格式的文件，详细看项目内的 README.MD
5. 05-webpack的Plugin  
    webpack 整合 plugin ，学习使用那几个插件，可以简化开发：`html-webpack-plugin`、`uglifyjs-webpack-plugin`、`webpack-dev-server`
6. 06-webpack的配置文件分离  
    webpack 的配置文件 `webpack.config.js` 进行分离成 开发环境 和 生产环境，并修改名称，然后再 `package.json` 指定配置文件。

## 2. 02-vuecli2test
1. 使用 vue 脚手架 @vue/cli2 版本进行 创建 vue项目  
2. 命令 `vue init webpack peoject-name`
3. 安装前需要 全局安装 vue 的脚手架 `@vue/cli` ,默认安装 3版本；如果想使用2 版本 再安装 一个连接工具 `@vue/cli-init` 即可，命令如下:
    ```$xslt
    npm init @vue/cli
    npm init @vue/cli-init
    ```
4. 查看vue 脚手架版本
    ```$xslt
    vue --version
    vue -V
    ```
5. 

## 3. 03-vuecli3test
1. 使用 vue 脚手架 @vue/cli 3版本进行创建 vue 项目
2. 命令 `vue create project-name`

## 4. 04-vuecli3test
1. vue 脚手架 @vue/cli 3版本  可以使用可视化开发
2. 命令 `vue ui`


