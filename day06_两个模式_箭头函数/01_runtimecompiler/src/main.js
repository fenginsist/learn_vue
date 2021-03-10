// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
const cpn = {
  template: '<div>{{message}}</div>',
  data() {
    return {
      message: '我是组件message'
    }
  }
}


new Vue({
  el: '#app',
  // components: { App },
  // template: '<App/>'
  render: function (createElement) {
    // 使用方式一、普通用法: createElement('标签', {标签的属性}, [''])
    /*return createElement('h2',
      {class: 'box'},
      ['Hello World', createElement('button', ['按钮'])]
    )*/

    // 使用方式二、传入组件对象:
    return createElement(App)
  }
})
