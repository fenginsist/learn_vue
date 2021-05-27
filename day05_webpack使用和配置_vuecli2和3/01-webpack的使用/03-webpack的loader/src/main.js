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


