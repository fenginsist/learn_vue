// 1.使用commonjs的模块化规范
const {add, mul} = require('./js/mathUtils.js')

console.log(add(20, 30));
console.log(mul(20, 30));

// 2.使用ES6的模块化的规范
import {name, age, height} from "./js/info";

console.log(name);
console.log(age);
console.log(height);

// 3. 引入静态资源 css 文件
require('./css/normal.css')


// 4. 引入静态资源 less 文件
require('./css/special.less')
document.writeln('<h2>你好啊 冯凡利</h2>')

// 5. 引入vue进行开发
import Vue from 'vue'

// import App from './js/app'
import App from './vue/App'

/*
* 这里多了一个 .vue 文件，所以要加一个 loader。
* */


/*
* 相比较于 main4.js ，
* 这里把 提出来的组件 vue/app.js ，进行了模板 与 js 分离，
* 写了一个新的文件 vue/App.vue，把模板组件给提出来了。
* */
const app = new Vue({
  el: '#app',
  template: `<App/>`,
  components: {
    App
  }
})

