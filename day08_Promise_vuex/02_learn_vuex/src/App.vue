<template>
  <div id="app">
    <h2>----------------App 内容-------------</h2>
    <h2>{{message}}</h2>
    <h2>{{$store.state.counter}}</h2>
    <!--    <button @click="$store.state.counter++">+</button>-->
    <!--    <button @click="$store.state.counter&#45;&#45;">-</button>-->
    <button @click="addition">+</button>
    <button @click="subtraction">-</button>
    <button @click="addCount(5)">+ 5</button>
    <button @click="addCount(10)">+ 10</button>
    <button @click="addStudent">addStudent</button>

    <h2>----------------Hello Vuex 内容-------------</h2>
    <!--子组件能调用父组件的属性，是因为父组件向子组件传值了，是有关系的，但是如果没有关系，就要使用vuex-->
    <hello-vuex :counter="counter"/> <!-- 显示两行-->
    <hello-vuex/> <!--显示一行-->

    <h2>----------------App 内容 state.getters 相关信息 -------------</h2>
    <h2>counter 的平方： {{this.$store.getters.powerCounter}}</h2>
    <h2>学生年龄大于 20： {{this.$store.getters.more20stu}}</h2>
    <h2>学生年龄大于 20 的长度： {{this.$store.getters.more20stuLength}}</h2>
    <h2>传入自定义年龄，返回大于传入年龄的 数据： {{this.$store.getters.moreAgeStu(12)}}</h2>

    <h2>----------------App 内容 state.userInfo 对象 是否是响应式 -------------</h2>
    <h2>{{this.$store.state.userInfo}}</h2>
    <button @click="updateStudent">更改用户信息</button>

    <h2>----------------App 内容: modules 中的内容 -------------</h2>
    <!-- 获取 modules 中 的state 有点特殊-->
    <h2>{{$store.state.a.name}}</h2>
    <button @click="updateName">修改名字</button>
    <h2>{{$store.getters.fullName}}</h2>
    <h2>{{$store.getters.fullName2}}</h2>
    <h2>{{$store.getters.fullName3}}</h2>
    <button @click="asyncUpdateName">异步修改名字</button>

  </div>
</template>

<script>
  import HelloVuex from "./components/HelloVuex";
  import {INCREMENT} from './store/mutations-types'

  export default {
    name: 'App',
    data() {
      return {
        message: '我是APP组件',
        counter: 0,
      }
    },
    computed: {},
    methods: {
      // 响应式 自加
      addition() {
        this.$store.commit(INCREMENT)
      },
      // 响应式 自减
      subtraction() {
        this.$store.commit('decrement')
      },
      // 响应式 加自定义数字
      addCount(count) {
        // 1. 普通的提交封装
        /*
        * count 可以是一个 类型，也可以传一个对象
        * */
        // count: 就是 payload - 负载
        // this.$store.commit('incrementCountOne', count)

        // 2. 特殊的提交封装
        /*
        * count: count 根据ES6语法 可以直接写成 count
        * 这样传过去的就是一个对象，在 store/index.js 中接受的 第二个参数 就是一个对象
        * */
        this.$store.commit({
          type: 'incrementCountTwo',
          count: count
        })
      },
      // 响应式添加 对象
      addStudent() {
        const stu = {id: 114, name: 'alan', age: 35}
        this.$store.commit('addStudent', stu)
      },
      // 响应式 更新 对象
      updateStudent() {
        /*
        * 同步请求
        * */
        // this.$store.commit('updateUserInfo')

        /*
        * 以下是 异步请求
        * */
        // 方式一：
        // this.$store.dispatch('a1UpdateUserInfo')

        // 方式二： 字符串
        // this.$store.dispatch('a2UpdateUserInfo', '我是 payload 信息')

        // 方式三：
        // this.$store.dispatch({
        //   type: 'a3UpdateUserInfo',
        //   message: '我是 payload 对象中的 message'
        // })

        // 方式四：
        // this.$store.dispatch('a4UpdateUserInfo', {
        //   message: '我是携带的信息',
        //   success: () => {
        //     console.log('里面已经完成了');
        //   }
        // })

        // 方式五：对方式四的 优化
        this.$store
          .dispatch('a5UpdateUserInfo', '我是携带的信息')
          .then(res => {
            console.log('里面已经完成了提交！！');
            console.log(res)
          })
      },
      updateName() {
        this.$store.commit('updateName', 'zhangyang')
      },
      asyncUpdateName(){
        this.$store.dispatch('asyncUpdateName')
      }
    },
    components: {
      HelloVuex
    }
  }
</script>

<style>

</style>
