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
    
## 2. 使用@vue/cli 脚手架前环境搭建
1. 使用vue 脚手架， 需要先安装全局的 `@vue/cli` ，现在默认安装 3版本；如果想使用2 版本 再安装 一个连接工具 `@vue/cli-init`。
2. 安装命令
    ```$xslt
    npm init @vue/cli
    npm init @vue/cli-init
    ```
3. 查看vue 脚手架版本
    ```$xslt
    vue --version
    vue -V
    ```

## 3. 02-vuecli2test
1. 使用 vue 脚手架 @vue/cli2 版本进行 创建 vue项目  
2. 命令 `vue init webpack peoject-name`


## 4. 03-vuecli3test
1. 使用 vue 脚手架 @vue/cli 3版本进行创建 vue 项目
2. 命令 `vue create project-name`

## 5. 04-vuecli3test
1. vue 脚手架 @vue/cli 3版本  可以使用可视化开发
2. 命令 `vue ui`

## 6. vue项目管理器
1. 通过命令 `vue UI` 进行启动服务 vue项目管理器。
2. 有三个模块：项目、创建、导入
    * 项目：vue项目管理器 进行管理 通过脚手架创建的项目
    * 创建：脚手架3版本 可视化创建vue项目
    * 导入： 没有通过脚手架3版本可视化创建的项目，是不会出现在项目模块中，可以通过导入进行使用 `vue项目管理器` 进行管理
    ![](./assert/03-vue项目管理器.png)
3. 点击项目，就进入了项目的管理界面，如下：
    ![](./assert/04-vue项目管理器-项目界面.png)
4. 分析项目界面的五个模块
    * 仪表盘：没什么好说的
    * 插件： 可以看到已经安装的插件，也可以进行安装新插件
    * 依赖： 可以看到已经安装的依赖包，也可以在此安装新依赖包，如axios、vue-router等
    * 配置： 一些webpack的配置
    * 任务： 启动项目等操作，对应 `package.json` 的 `script` 脚本操作。

## 7. 可视化创建项目的配置文件配置
有三种 方式
1. 通过 `vue UI` 命令启动 `vue项目管理器` 服务。
    ![](assert/01-vue项目管理器-项目的任务.png)
    配置中修改，这里其实就是替换了项目中的`webpack.config.js`如下：
    ![](./assert/02-vue项目管理器中的webpack的配置.png)
    
2. 脚手架2版本中，有两个文件build 和config 存放配置文件，  
    而在脚手架3版本中，是没有这两个配置文件的，而在被隐藏了  
    隐藏路径：`04-vuecli3test/node_modules/@vue/cli-service/webpack.config.js`  
    `webpack.config.js` 文件中又引入了其他文件。一层层的去调用和引用
   
3. 在项目根目录下创建配置文件 `vue.config,js`， 作为额外的 配置文件内容。  
   里面的内容会和 隐藏起来的配置文件内容 进行合并。  
   `文件名称固定，不可以更改。`