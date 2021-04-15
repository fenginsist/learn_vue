export default {
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
}
