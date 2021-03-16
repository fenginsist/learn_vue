<template>
  <div>
    <span>我是首页</span>
    <span>我是首页</span><br>
    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">消息</router-link>
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: "Home",
    // 钩子函数，当页面更新时 调用。
    created() {
      console.log('home created');
      // document.title = '首页'
    },
    destroyed() {
      console.log('home destroyed');
    },
    /*
    * 这两个方法，只有该组件被保持了状态使用 keep-alive 时，才是有效的额
    * */
    // 活跃时，执行方法
    activated() {
      // console.log('home activated');
      // this.$router.push(this.path)
    },
    // 不活跃时，执行方法
    deactivated() {
      // console.log('home deactivated');
    },
    // 路由离开时的操作
    beforeRouteLeave(to, from, next){
      console.log(this.$route.path);
      this.path = this.$route.path;
      next()
    }
  }
</script>

<style scoped>

</style>
