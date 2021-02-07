# 执行顺序流程
1. npm init , 生成 package.json
2. npm install, 生成 package-lock.json 
3. 手动创建 webpack.config.js 配置文件，这是webpack的配置文件
   上一个案例使用的打包命令是： webpack ./src/main.js -o ./dist/bundle.js  
   这样太麻烦了，将后面的输入文件（./src/main.js）和输出文件（./dist/bundle.js ）放在 配置文件webpack.config.js 中  
   然后只执行 webpack 就可以生成 bundle.js 了

4. 还有一个方式：
   webpack 命令 放到 了 package.json 文件中 script 脚本中的 build 中  
   所以 只执行 npm run build  也可以生成bundle.js 文件了
   
   
# 安装局部webpack
基本上都会安装全局的webpack，但是你公司的项目或者别的项目有可能使用的和你全局的webpack的版本不一致

那就有必须安装局部版本的webpack了，安装命令如下：

npm install webpack@3.6.0 --save-dev  

在安装一个 package，而此 package 要打包到生产环境 bundle 中时，你应该使用 npm install --save。如果你在安装一个用于开发环境目的的 package 时（例如，linter, 测试库等），你应该使用 npm install --save-dev

# script 命令执行流程
1. package.json中的scripts的脚本在执行时，会按照一定的顺序寻找命令对应的位置。
2. 首先，会寻找本地的node_modules/.bin路径中对应的命令。
3. 如果没有找到，会去全局的环境变量中寻找。