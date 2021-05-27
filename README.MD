# 前言
.gitkeep 文件的作用： 避免空文件上传不到 GitHub 上。

# 一、every day content
## 1. day01_指令_动态绑定_计算属性
1. ES6 的学习
    块级作用域  
    const 关键字  
    对象字面量的增强写法  
2. vue初体验  
    helloworld  
    v-for 列表展示  
    v-on 计数器  
    MVVM和方法、函数  
    template  
3. 差值表达式
    Mustache语法-差值表达式  
    v-once  
    v-html  
    v-text  
    v-pre  
    v-cloak  
4. 动态绑定属性
    v-bind基本使用    
    v-bind 动态绑定的class语法和数组语法  
    一个案例（v-for和v-bind）  
    v-bind动态绑定style  
5. 计算属性
    01-计算属性的基本使用  
    02-计算属性的复杂操作  
    03-计算属性的setter和getter  
    04-计算属性和methods的对比  

## 2. day02_事件_条件_循环
1. 事件监听    
    v-on基本使用  
    v-on参数问题  
    v-on修饰符  
2. 条件判断
    01-v-if的使用  
    02-v-if和v-else的使用  
    03-v-if和v-else-if和v-else的使用  
    04-用户登录切换的案例  
    05-用户登录切换的案例(小问题)  
    06-v-show的使用  
3. 循环遍历
    01-v-for遍历数组  
    02-v-for遍历对象  
    03-v-for使用过程添加key  
    04-哪些数组的方法是响应式的  
    05-作业的回顾和完成  
4. 书籍购物车案例

## 3. day03_双向绑定指令_组件化开发_组件化高级(slot插槽使用)
1. v-model使用
    01-v-model的基本使用  
    02-v-model的原理  
    03-v-model结合radio类型  
    04-v-model结合checkbox类型  
    05-v-model结合select类型  
    06-v-model修饰符的使用  

2. 组件化开发
    01-组件化的基本使用.html  
    02-全局组件和局部组件.html  
    03-父组件和子组件.html  
    04-组件的语法糖注册方式.html  
    05-组件模板的分离写法.html  
    06-组件中的数据存放问题.html  
    07-组件中的data为什么是函数.html  
    08-组件通信-父组件向子组件传递数据.html  
    09-组件通信-父传子(props中的驼峰标识).html  
    10-组件通信-子传父(自定义事件).html  
    11-组件通信-父子组件通信案例.html  
    12-组件通信-父子组件通信案例(watch实现).html  
    13-组件访问-父访问子-$children-$refs.html  
    14-组件访问-子访问父-$parent-root.html  
3. 03-组件化高级  
    01-slot-插槽的基本使用.html  
    02-slot-具名插槽的使用.html  
    03-什么是编译的作用域.html  
    04-作用域插槽的案例.html  

## 4. day04 前端模块化（这里没有文字说明）
1. 01-为什么要有模块化  
3. 02-ES6的模块化实现  

## 5. day05_webpack使用和配置_vuecli2和3
1. 01-webpack的使用  
    01-webpack的起步  
    02-webpack的配置  
    03-webpack的loader  
    04-webpack配置vue  
    05-webpack的Plugin  
    06-webpack的配置文件分离  
2. 02-vuecli2test  
    使用vue脚手架@vue/cli 2 版本 命令方式 创建的项目，细节看csdn博客：[https://blog.csdn.net/qq_40036754/article/details/114222522](https://blog.csdn.net/qq_40036754/article/details/114222522)
    ```$xslt
    vue init webpack my-project-name
    ```
3. 03-vuecli3test  
    使用vue脚手架@vue/cli 3 版本 命令方式 创建的项目，细节看csdn博客：[https://blog.csdn.net/qq_40036754/article/details/114222522](https://blog.csdn.net/qq_40036754/article/details/114222522)
    ```$xslt
    vue create 03-vuecli3test
    ```
4. 04-vuecli3test  
    使用vue脚手架@vue/cli 3 版本 可视化方式 创建的项目，细节看csdn博客：[https://blog.csdn.net/qq_40036754/article/details/114222522](https://blog.csdn.net/qq_40036754/article/details/114222522)
    ```$xslt
    vue ui
    ```

## 6. day06_两个模式_箭头函数
1. 01_runtimecompiler  
    使用vue脚手架@vue/cli 2 版本 命令方式 创建的项目， 创建过程中，选择的 runtimecompiler 模式
2. 02_runtimeonly  
    使用vue脚手架@vue/cli 2 版本 命令方式 创建的项目， 创建过程中，选择的 runtimeonly 模式
3. 03-箭头函数  
    01-箭头函数的基本使用.html  
    02-箭头函数参数和返回值.html  
    03-箭头函数中的this的使用.html  
4. README.MD 记载了 两个模式的不同和细节（important）
    
    
    
    
## 7. day07_router
1. 01_learn-vue-router  学习使用 vue-router  
    细节请看博客： [vue-router学习一：什么是路由，路由分类，路由安装，路由使用，路由默认路径，history模式，默认的linkActiveClass属性，路由代码跳转](https://blog.csdn.net/qq_40036754/article/details/114758077)   
    [vue-router学习二：动态路由（路由传递数据的一种方式），路由懒加载，嵌套路由，路由传递参数方式，导航守卫，keep-alive标签](https://blog.csdn.net/qq_40036754/article/details/114793276)
2. 02-tabbar 封装组件 TarBar  
    细节请看博客： [vue-router学习三：封装组件，封装TabBar组件。](https://blog.csdn.net/qq_40036754/article/details/114898378)   
3. 03-tabbar-自定义路径，这个属于webpack的配置  
    在第二小节2小节的基础上，自定义了路径，自定义位置：`build/webpack.base.conf.js` 中的 `resolve` 属性的 `alias` 属性
    
    
## 8. day08_Promise_vuex
1. 01-Promise使用  
    01-Promise的基本使用.html
    02-Promise的另外处理形式.html
    03-Promise的链式调用(一).html
    04-Promise的链式调用(二).html
    05-Promise的all方法使用.html
2. 02_learn_vuex
    [Vuex学习一：了解Vuex，初始用vuex，vuex状态管理图的讲解](https://blog.csdn.net/qq_40036754/article/details/115658647)  
    [Vuex学习二：Vuex的重点属性学习，state、mutations、getters、actions、module。](https://blog.csdn.net/qq_40036754/article/details/115704550)  
    细节还用到 项目内的 README.md（important）
    
    
## 9. day09_axios
1. 01_learn_axios  
    详细看项目和项目内的 README.MD 文档。
    
    
    
    

    