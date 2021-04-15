export default {
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
