# 一、02_learn_vuex

> A Vue.js project

# 二、02_learn_vuex

## 1. 问题反思
想要子组件显示父组件的数据，需要父组件向子组件传值：
1. 新建 HelloVuex.vue
2. App.vue 引入 HelloVuex.vue 组件，
3. 父组件传值操作：
    ```html
    <hello-vuex :counter="counter"/>
    ```
4. 子组件HelloVuex.vue操作
    ```html
    <template>
      <div>
        <h2>{{counter}}</h2>
      </div>
    </template>
    <script>
      export default {
        name: "HelloVuex",
        props: {
          counter: Number
        }
      }
    </script>
    ```
5. 反思：
    >但是如果不在App.vue组件中引入了HelloVuex.vue组件，不进行父对子传参，那应该怎么在HelloVuex.vue组件中显示App.vue组件中的counter数据呢，其实就可以用vuex来进行显示了，

## 2. vuex 操作： 子组件和父组件显示 同一数据
1. 新建 store/index.js
```JavaScript
import Vue from 'vue'
import Vuex from 'vuex'

// 1. 安装插件
Vue.use(Vuex)

// 2. 创建对象
const store = new Vuex.Store({
  state: {
    counter: 1000
  },
  mutations: {

  },
  actions: {

  },
  getters: {

  },
  modules: {

  }
})

// 3. 导出store
export default store
```
2. App.vue
```html
<template>
  <div id="app">
    <h2>----------------App 内容-------------</h2>
    <h2>{{message}}</h2>
    <h2>{{$store.state.counter}}</h2>
    <button @click="$store.state.counter++">+</button>
    <button @click="$store.state.counter--">-</button>


    <h2>----------------Hello Vuex 内容-------------</h2>
    <!--子组件能调用父组件的属性，是因为父组件向子组件传值了，是有关系的，但是如果没有关系，就要使用vuex-->
    <hello-vuex :counter="counter"/>
    <hello-vuex/>
  </div>
</template>

<script>
  import HelloVuex from "./components/HelloVuex";

  export default {
    name: 'App',
    data() {
      return {
        message: '我是APP组件',
        counter: 0
      }
    },
    methods: {

    },
    components: {
      HelloVuex
    }
  }
</script>

<style>

</style>
```
3. components/HelloVuex.vue
```html
<template>
  <div>
    <h2>{{counter}}</h2>
    <h2>{{$store.state.counter}}</h2>
  </div>
</template>

<script>
  export default {
    name: "HelloVuex",
    props: {
      counter: Number
    }
  }
</script>

<style scoped>

</style>


```
4. 反思
这种操作是正规的，使用vuex 管理共同数据

## 3.Mutations 初始用
1. store/index.js
```js
import Vue from 'vue'
import Vuex from 'vuex'

// 1. 安装插件
Vue.use(Vuex)

// 2. 创建对象
const store = new Vuex.Store({
  // 数据 初始化state 里面的 属性 都是响应式的 ，响应式：数据和界面同时刷新
  state: {
    counter: 1000
  },
  // 获取 state 的 特殊操作数据
  getters: {
  },
  // 唯一更新 state 数据地方
  mutations: {
    // 自增
    increment(state) {
      state.counter++
    },
    // 自减
    decrement(state) {
      state.counter--
    },
  },
  // 异步操作
  actions: {
  },
  // 模块化
  modules: {
  }
})
```
2. App.vue
```html
<template>
  <div id="app">
    <h2>----------------App 内容-------------</h2>
    <h2>{{message}}</h2>
    <h2>{{$store.state.counter}}</h2>
    <!--    <button @click="$store.state.counter++">+</button>-->
    <!--    <button @click="$store.state.counter&#45;&#45;">-</button>-->
    <button @click="addition">+</button>
    <button @click="subtraction">-</button>

    <h2>----------------Hello Vuex 内容-------------</h2>
    <!--子组件能调用父组件的属性，是因为父组件向子组件传值了，是有关系的，但是如果没有关系，就要使用vuex-->
    <hello-vuex :counter="counter"/> <!-- 显示两行-->
    <hello-vuex/> <!--显示一行-->


  </div>
</template>

<script>
  import HelloVuex from "./components/HelloVuex";

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
        this.$store.commit('increment')
      },
      // 响应式 自减
      subtraction() {
        this.$store.commit('decrement')
      },

    },
    components: {
      HelloVuex
    }
  }
</script>

<style>

</style>
```

## 3. getters 操作
1. app.vue
```html
<template>
  <div id="app">
    <h2>----------------App 内容-------------</h2>
    <h2>{{message}}</h2>
    <h2>{{$store.state.counter}}</h2>
    <!--    <button @click="$store.state.counter++">+</button>-->
    <!--    <button @click="$store.state.counter&#45;&#45;">-</button>-->
    <button @click="addition">+</button>
    <button @click="subtraction">-</button>

    <h2>----------------Hello Vuex 内容-------------</h2>
    <!--子组件能调用父组件的属性，是因为父组件向子组件传值了，是有关系的，但是如果没有关系，就要使用vuex-->
    <hello-vuex :counter="counter"/> <!-- 显示两行-->
    <hello-vuex/> <!--显示一行-->

    <h2>----------------App 内容 state.getters 相关信息 -------------</h2>
    <h2>counter 的平方： {{this.$store.getters.powerCounter}}</h2>
    <h2>学生年龄大于 20： {{this.$store.getters.more20stu}}</h2>
    <h2>学生年龄大于 20 的长度： {{this.$store.getters.more20stuLength}}</h2>
    <h2>传入自定义年龄，返回大于传入年龄的 数据： {{this.$store.getters.moreAgeStu(12)}}</h2>

  </div>
</template>

<script>
  import HelloVuex from "./components/HelloVuex";

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
        this.$store.commit('increment')
      },
      // 响应式 自减
      subtraction() {
        this.$store.commit('decrement')
      },
    },
    components: {
      HelloVuex
    }
  }
</script>

<style>

</style>
```
2. store/index.js
```js
import Vue from 'vue'
import Vuex from 'vuex'

// 1. 安装插件
Vue.use(Vuex)

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
    increment(state) {
      state.counter++
    },
    // 自减
    decrement(state) {
      state.counter--
    },
  },
  // 模块化
  modules: {
  }
})

// 3. 导出store
export default store
```

## 4. Mutations传递参数
1. app.vue
测试 下面的 APP 内容中的  `addCount(5)、addCount(10)、addStudent` 方法
```html
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

  </div>
</template>

<script>
  import HelloVuex from "./components/HelloVuex";

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
    },
    components: {
      HelloVuex
    }
  }
</script>

<style>

</style>

```
2. store/index.js
```js
import Vue from 'vue'
import Vuex from 'vuex'

// 1. 安装插件
Vue.use(Vuex)

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
    increment(state) {
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
    }
  },
  // 异步操作
  actions: {
  },
  // 模块化
  /*
  * 这里面的 module a 会放到 store 中的 state， 所以获取是这样 {{$store.state.a.name}}
  * */
  modules: {
  }
})

// 3. 导出store
export default store
```

## 5. Mutations响应规则
1. app.vue
测试 下面的 ：App 内容 state.userInfo 对象 是否是响应式
```html
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
  </div>
</template>

<script>
  import HelloVuex from "./components/HelloVuex";

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

        // 方式五：对方式三的 优化
        this.$store
          .dispatch('a5UpdateUserInfo', '我是携带的信息')
          .then(res => {
            console.log('里面已经完成了提交！！');
            console.log(res)
          })
      }
    },
    components: {
      HelloVuex
    }
  }
</script>

<style>

</style>

```
2. store/index.js
```js
import Vue from 'vue'
import Vuex from 'vuex'

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
    increment(state) {
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
  },
  // 模块化
  /*
  * 这里面的 module a 会放到 store 中的 state， 所以获取是这样 {{$store.state.a.name}}
  * */
  modules: {
  }
})
```

## 6. Mutations常量类型
1. 新建 store/mutations-types.js
```js
export const INCREMENT = 'increment'
```
2.app.vue
引入了 mutations-types.js 中 的 常量，在 addition() 方法中的 commit 方法 中使用。
```html
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

        // 方式五：对方式三的 优化
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

```
3. store/index.js
mutations 中的 修改
```js
import Vue from 'vue'
import Vuex from 'vuex'
import {INCREMENT} from "./mutations-types";

// 1. 安装插件
Vue.use(Vuex)


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
  },
  // 模块化
  /*
  * 这里面的 module a 会放到 store 中的 state， 所以获取是这样 {{$store.state.a.name}}
  * */
  modules: {
  }
})

// 3. 导出store
export default store
```

## 7. action 异步操作
1. app.vue
还是以修改用户信息为例：只修改 app.vue 中的 updateStudent 方法和 只添加 store/index.js 中 actions 方法即可。
使用dispatch() 方法
```html
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

        // 方式五：对方式三的 优化
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

```
2. store/index.js
修改的事 action 中的所有对应方法，
使用 commit() 方法，提交到 mutations 中的方法，其实就是在action异步操作，然后使用 mutations 方法 操作 state中的数据。
```js
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
  }
})

// 3. 导出store
export default store

```

## 8. modules 模块
这里就不细讲了。

# 三、 项目结构抽取
写完上面的代码时，store/index.js 已经有了200多行代码了，这里需要将 mutations、getters、actions、module进行抽取出来；state 就不用抽取了，便于方面查看。
在 store 下 新建 actions.js、getters.js、mutations.js
store/index.js 内容
```js
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

```


# 四、Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
