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
* 9. 封装成 request.js 第四种 方案
* */


import {request} from "./network/request";

request({
  url: '/home/multidata'
}).then(res => {
  console.log('main.js res:', res)
}).catch(err => {
  console.log('main.js err:', err)
})
