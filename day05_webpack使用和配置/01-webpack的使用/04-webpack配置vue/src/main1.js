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

const app = new Vue({
  el: '#app',
  data: {
    // 这里的 message  可以在 index.html 中使用，那里被注释了
    message: '冯凡利 i love you'
  }
})

