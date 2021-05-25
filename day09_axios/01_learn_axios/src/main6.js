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
* 6. 封装成 request.js 第一种 方案
* */

import {request1} from "./network/request1";

request1({
  url: '/home/multidata'
}, res => {
  console.log('111111111111111111111111111111111', res);
}, err => {
  console.log('222222222222222222222222222222222', err)
})
