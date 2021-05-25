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
* 7. 封装成 request.js 第二种 方案
* */


import {request2} from "./network/request2";

request2({
  baseConfig: {},
  success: function (res) {

  },
  failure: function (err) {

  }
})
