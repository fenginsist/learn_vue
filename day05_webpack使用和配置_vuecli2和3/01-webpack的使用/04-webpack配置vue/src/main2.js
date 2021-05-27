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


// 相比于 main2.js ，这里把 内容放到了 template 中

const app = new Vue({
  el: '#app',
  // 这里 替换了 index.html 中的 div
  template: `
    <div>
      <span>{{message}}</span>
      <button>按钮</button>
      <span>{{name}}</span>
    </div>
  `,
  data: {
    message: '冯凡利 i love you',
    name: '冯安晨'
  }
})

