import Vue from 'vue'
import App from './App'
import router from './router'

import axios from "axios";

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

/*
*
* 5. 创建对应的 axios 实例
*
* */
const instance1 = axios.create({
  baseURL: 'http://123.207.32.32:8000',
  timeout: 5000
})

instance1({
  url: '/home/multidata'
}).then(res => {
  console.log('111111111111111111', res)
})


instance1({
  url: '/home/data',
  params: {
    type: 'sell',
    page: 5
  }
}).then(res => {
  console.log('2222222222222222222', res)
})


// 创建对应 实例， 可以调用其他 服务器 请求
// const instance2 = axios.create({
//   baseURL: 'http://222.111.333.444:8000',
//   timeout: 5000
// })
//
// instance2({
//   url: '/home/multidata'
// }).then(res => {
//   console.log('111111111111111111', res)
// })
