export default {
  // 方式一：
  a1UpdateUserInfo(context) {
    setTimeout(() => {
      // 提交到 mutations
      context.commit('updateUserInfo')
    }, 1000)
  },
  // 方式二：
  a2UpdateUserInfo2(context, payload) {
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
}
