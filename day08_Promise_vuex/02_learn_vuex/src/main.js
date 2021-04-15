import Vue from 'vue'
import App from './App'
import router from './router'
import store  from "./store";

Vue.config.productionTip = false

/*
* 下面配置的 store ，就会在Vue 中设置下面这句话
* */
// Vue.prototype.$store = store

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
