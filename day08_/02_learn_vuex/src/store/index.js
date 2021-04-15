import Vue from 'vue'
import Vuex from 'vuex'
import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";
import moduleA from "./modules/moduleA";

// 1. 安装插件
Vue.use(Vuex)

const state = {
  counter: 1000,
  students: [
    {id: 110, name: 'why', age: 18},
    {id: 111, name: 'kobe', age: 24},
    {id: 112, name: 'james', age: 30},
    {id: 113, name: 'curry', age: 10}
  ],
  userInfo: {
    name: 'kobe',
    age: 40,
    height: 1.98
  }
}

// 2. 创建对象
const store = new Vuex.Store({
  // 数据 初始化state 里面的 属性 都是响应式的 ，响应式：数据和界面同时刷新
  state: state,
  // 获取 state 的 特殊操作数据
  getters: getters,
  // 唯一更新 state 数据地方
  mutations: mutations,
  // 异步操作
  actions: actions,
  // 模块化
  /*
  * 这里面的 module a 会放到 store 中的 state， 所以获取是这样 {{$store.state.a.name}}
  * */
  modules: {
    a: moduleA,
    b: {
      state: {},
      mutations: {},
      actions: {},
      getters: {}
    }
  }
})

// 3. 导出store
export default store


// 对象的解构
const obj = {
  name: 'why',
  age: 18,
  height: 1.88,
  address: '洛杉矶'
}

const {name, height, age} = obj;
console.log(name)
