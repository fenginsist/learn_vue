import Vue from 'vue'
import Vuex from 'vuex'
import {INCREMENT} from "./mutations-types";

// 1. 安装插件
Vue.use(Vuex)

const moduleA = {
  state: {
    name: '冯凡利'
  },
  mutations: {
    updateName(state, payload) {
      state.name = '冯凡利' + payload
    }
  },
  getters: {
    /*
    * 这里的 state  都是值得 moduleA 里面的数据
    * */
    fullName(state) {
      console.log(state)
      return state.name + '1111'
    },
    fullName2(state, getters) {
      return getters.fullName + "222"
    },
    fullName3(state, getters, rootState) {
      return getters.fullName2 + rootState.counter
    }
  },
  actions: {
    asyncUpdateName(context) {
      console.log(context);
      console.log(context.rootState);
      console.log(context.rootGetters);
      console.log(context.getters);
      setTimeout(() => {
        context.commit('updateName', '王五')
      })
    }
  },
}

// 2. 创建对象
const store = new Vuex.Store({
  // 数据 初始化state 里面的 属性 都是响应式的 ，响应式：数据和界面同时刷新
  state: {
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
  },
  // 获取 state 的 特殊操作数据
  getters: {
    // 返回 counter 的平方
    powerCounter(state) {
      return state.counter * state.counter
    },
    // 学生年龄大于20
    more20stu(state) {
      return state.students.filter(s => s.age > 20)
    },
    // 学生年龄大于20 的长度
    more20stuLength(state, getters) {
      return getters.more20stu.length
    },
    // 传入自定义年龄 ，返回大于传入年龄的 数据
    moreAgeStu(state, getters) {
      // return function (age) {
      //   return state.students.filter(s => s.age > age)
      // }
      // 箭头函数 骚操作
      return age => state.students.filter(s => s.age > age)
    },
  },
  // 唯一更新 state 数据地方
  mutations: {
    // 自增
    [INCREMENT](state) {
      state.counter++
    },
    // 自减
    decrement(state) {
      state.counter--
    },
    // 自定义自增 传参
    incrementCountOne(state, count) {
      state.counter += count;
    },
    incrementCountTwo(state, payload) {
      console.log(payload.count);
      state.counter += payload.count;
    },
    // 传对象
    addStudent(state, student) {
      state.students.push(student)
    },
    updateUserInfo(state) {
      state.userInfo.name = '冯安晨 '

      /*
      * 错误代码：模拟异步 操作，虽然界面改掉了，但是 state 中的数据没有改掉，所以不推荐在这里进行 异步操作。
      * */
      // setTimeout(() => {
      //   state.userInfo.name = '冯安晨'
      // }, 1000)

      /*
      * 关于响应式：响应式： 数据和界面同时刷新
      * 还有一些响应式的 数组： day02_事件_条件_循环/03-循环遍历/04-哪些数组的方法是响应式的.html
      * */

      /*
      * 响应式 添加属性
      * */
      // state.userInfo['address'] = '洛杉矶' // 无法做到响应式，数据有，但界面不刷新
      // 方式一：
      // Vue.set(state.userInfo, 'address', '洛杉矶') // 可以响应式
      // 方式二：
      // state.userInfo = {...state.userInfo, 'address': '洛杉矶'}

      /*
      * 响应式 删除属性
      * */
      // delete state.userInfo.age // 无法做到响应式
      // Vue.delete(state.userInfo, 'age') // 可以响应式
    }
  },
  // 异步操作
  actions: {
    // 方式一：
    a1UpdateUserInfo(context) {
      setTimeout(() => {
        // 提交到 mutations
        context.commit('updateUserInfo')
      }, 1000)
    },
    // 方式二：
    a2UpdateUserInfo2(context, payload){
      setTimeout(() => {
        // 提交到 mutations
        context.commit('updateUserInfo')
        console.log(payload);
      }, 1000)
    },
    // 方式三：
    a3UpdateUserInfo(context, payload) {
      setTimeout(() => {
        // 提交到 mutations
        context.commit('updateUserInfo')
        console.log(payload.message);
      }, 1000)
    },
    // 方式四：
    a4UpdateUserInfo(context, payload) {
      setTimeout(() => {
        // 提交到 mutations
        context.commit('updateUserInfo')
        console.log(payload.message);
        payload.success()
      }, 1000)
    },
    // 方式五：对方式三的 优化
    a5UpdateUserInfo(context, payload) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          // 提交到 mutations
          context.commit('updateUserInfo')
          console.log(payload);
          resolve('1111111111111')
        }, 1000)
      })
    }
  },
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
