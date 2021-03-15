// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

// 在vue 原型上 添加 test 方法，意味着：不仅仅vue有test方法，而且所有组件都有vue方法
Vue.prototype.test = function () {
  console.log('test')
}
// 意味着所有组件都有 name, 而且 name 指向 哈哈哈
Vue.prototype.name = "哈哈哈"



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

// const obj = {
//   name: 'feng'
// }
// Object.defineProperty(obj, 'age', 18) // 给 obj 对象 添加属性

// console.log(router);
