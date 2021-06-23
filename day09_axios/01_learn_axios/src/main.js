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
* 10 测试封装方法。
* 编写 api/test/index.js  在这里进行封装请求方法，进行调用
* */

import {getInfo, getInfo2} from './api/test/index'

let param = {}
getInfo(param).then(res => {
  console.log('zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz')
  console.log('getInfo:', JSON.stringify(res));
}).catch(err=>{
  console.log(err)
})

getInfo2({
  type: 'sell',
  page: 5
}).then(res=>{
  console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx')
  console.log('getInfo2', JSON.stringify(res));
}).catch(err=>{
  console.log(err)
})
