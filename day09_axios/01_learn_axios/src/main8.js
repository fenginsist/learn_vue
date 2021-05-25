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
* 8. 封装成 request.js 第三种 方案
* */

import {request3} from "./network/request3";

request3({
  url: '/home/multidata'
}).then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})

