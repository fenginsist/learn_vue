import Vue from 'vue'
import App from './App.vue'

/*
* vue的配置提示信息，
* 当打包时，改成true，会显示很多包信息。
* 开发模式：npm run dev是前端自己开发用的
* 生产模式：npm run build 打包之后给后端放在服务端上用的
* Vue.config.productionTip = false
*
* 上面这行代码的意思 是阻止显示生产模式的消息。
* 如果没有这行代码，或者设置为true，控制台就会多出这么一段代码。
*
* You are running Vue in development mode.
* Make sure to turn on production mode when deploying for production.
* */
Vue.config.productionTip = false

/*
* 原来有 el 元素
* 没有 $mount('#app') 方法
*
* 其实 原来的  el 元素 在底层也会 使用到 $mount('#app') 这个方法
* */
new Vue({
  render: h => h(App),
}).$mount('#app')
