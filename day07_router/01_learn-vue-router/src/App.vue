<template>
  <div id="app">
    <div>我是APP组件</div>
    <!-- 默认渲染成 a 标签， 可以使用tag 属性进行指定渲染成别的标签-->
    <!--  active-class="active" 修改默认 点击后的 class 属性：router-link-active,
          另一种方式就是 在 路由实例上 router/index.js 上添加 linkActiveClass 进行统一修改
    -->
    <!--    <router-link to="/home" tag="button">首页</router-link>-->
    <!--加上 replace 属性，就是让内部 采用 history.replaceState() 进行加载，目的是不能 使用浏览器进行前进和后退-->
    <!--    <router-link to="/about" tag="button" replace >关于</router-link>-->

    <!--    <button @click="homeClick">首页</button>-->
    <!--    <button @click="aboutClick">关于</button>-->

    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
    <!--    <router-link v-bind:to="'/user/'+userId" >用户</router-link>-->
    <!--    <router-link to="/profile" >档案</router-link>-->
    <!--    <router-link v-bind:to="{-->
    <!--          path: '/profile/'+123,-->
    <!--          query: { name: 'feng', age: 18}}">-->
    <!--      档案-->
    <!--    </router-link>-->
    <button @click="userClick">用户</button>
    <button @click="profileClick">档案</button>

    <keep-alive exclude="Profile,User">
      <router-view/>
    </keep-alive>
    <div>我是APP中底部版权信息</div>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        userId: 'zhangsan'
      }
    },
    methods: {
      homeClick() {
        // 通过代码的方式 修改 路由 vue-router
        // push => pushState ，$router 是全局 vue-router 的实例对象
        // this.$router.push('/home')
        this.$router.replace('/home')
        // console.log("homeClick");
      },
      aboutClick() {
        // this.$router.push('/about')
        this.$router.replace('/about')
        // console.log("aboutClick");
      },
      userClick() {
        this.$router.push(
          {path: '/user/' + this.userId},
          onComplete => {
          },
          onAbort => {
          }
        )
      },
      profileClick() {
        this.$router.push({
            path: '/profile/' + 123,
            query: {
              name: 'fengfanli',
              age: 18
            }
          },
          onComplete => {
          },
          onAbort => {
          }
        )
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  .router-link-active {
    color: red;
  }

  .active {
    color: aqua;
  }
</style>
