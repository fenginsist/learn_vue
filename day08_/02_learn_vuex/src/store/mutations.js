import {INCREMENT} from "./mutations-types";

export default {
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
}
