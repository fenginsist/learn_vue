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


// 发  get  普通 请求

axios({
  url: 'http://123.207.32.32:8000/home/multidata',
  method: 'get'
}).then((res) => {
  console.log('111111111111111', res);
})

axios({
  url: 'http://123.207.32.32:8000/home/data',
  method: 'get',
  // 专门针对 get 请求的 参数拼接
  param: {
    type: 'pop',
    page: 1
  }
}).then(res => {
  console.log('2222222222222222', res);
})

// 2. axios 发送并发请求
axios.all([axios({
  url: 'http://123.207.32.32:8000/home/multidata'
}), axios({
  url: 'http://123.207.32.32:8000/home/data',
  param: {
    type: 'sell',
    page: 5
  }
})]).then(result => {
  console.log('3333333333333333333', result)
})


axios.all([axios({
  url: 'http://123.207.32.32:8000/home/multidata'
}), axios({
  url: 'http://123.207.32.32:8000/home/data',
  param: {
    type: 'sell',
    page: 5
  }
})]).then(axios.spread((res1, res2) => {
  console.log('4444444444444444444', res1)
  console.log('5555555555555555555', res2)
}))


// 3. axios 设置超时时间和 基本URL

axios.all([axios({
  baseURL: 'http://123.207.32.32:8000',
  timeout: 5000,
  url: '/home/multidata'
}), axios({
  url: 'http://123.207.32.32:8000/home/data',
  param: {
    type: 'sell',
    page: 5
  }
})]).then(axios.spread((res1, res2) => {
  console.log('6666666666666666666', res1)
  console.log('7777777777777777777', res2)
}))


// 4. axios  抽取： 设置超时时间和 基本URL

axios.defaults.baseURL = 'http://123.207.32.32:8000'
axios.defaults.timeout = 5000

axios.all([axios({
  url: '/home/multidata'
}), axios({
  url: 'http://123.207.32.32:8000/home/data',
  param: {
    type: 'sell',
    page: 5
  }
})]).then(axios.spread((res1, res2) => {
  console.log('8888888888888888888', res1)
  console.log('9999999999999999999', res2)
}))


//  5. 创建对应的 axios 实例
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


// 穿件对应 实例， 可以调用其他 服务器 请求
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
