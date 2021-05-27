# 一、01_learn_axios

> A Vue.js project


# 二、01_learn_axios
1. main1.js : axios 发 get 普通请求，
2. main2.js : axios 发 并发请求
3. main3.js : axios 发 并发请求，并对 单个请求 设置 超时时间和基本URL
4. main4.js : axios 发 并发请求，并对 单个请求 设置 超时时间和基本URL， 并设置全局的 默认 URL
5. main5.js : 创建 axios 实例，并设置单个实例对应的超时时间和基本URL， 也实现了：不同的实例可向不同的服务器发送请求。

6. main6.js、network/request1.js : 将基本的信息，如超时时间、基本URL等 封装成一个工具类，也防止以后换网络框架而带来额外的工作量，
7. main7.js、network/request2.js : 对 request1.js 进一步封装。（但还不是最优封装）
8. main8.js、network/request3.js : 对 request2.js 进一步封装。（但还不是最优封装）
8. main.js、network/request.js : 对 request3.js 进一步封装。（最优封装） request.js 封装中，还进行了 请求拦截 和 响应拦截。

# 三、Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
