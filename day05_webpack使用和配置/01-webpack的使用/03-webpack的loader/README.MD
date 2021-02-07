# 打包css报错
```$xslt
ERROR in ./src/css/normal.css
Module parse failed: F:\ffl\webProject\study\vueStudy\day05_webpack使用和配置\01-webpack的使用\03-webpack的loader\src\css\normal.css Une
xpected token (1:0)
You may need an appropriate loader to handle this file type.
| .background{
|   background-color: red;
| }
 @ ./src/main.js 15:0-27
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
执行命令： npm install --save-dev css-loader


# 安装 css-loader 报错
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

npm install --save-dev css-loader --force

则安装成功