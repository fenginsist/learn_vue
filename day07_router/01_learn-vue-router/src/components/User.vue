<template>
  <div>
    <h2>我是用户界面</h2>
    <span>嘿嘿嘿</span>
    <span>{{userId}}</span>
    <span>{{$route.params.id}}</span>
    <span>{{message}}</span>
    <button @click="btnClick">按钮</button>
  </div>
</template>

<script>
  export default {
    name: "User",
    data(){
      return {
        message: 'da'
      }
    },
    computed: {
      userId(){
        return this.$route.params.id
      },
      messages(){
        return this.message
      }
    },
    methods: {
      btnClick(){
        console.log(this.$router);
        console.log(this.$route);

        // 这里调用 main.js 中，添加上 vue 原型上的数据和方法
        this.test()
        console.log(this.name);
      }
    },
    created() {
      console.log('created');
      // document.title = '用户'
    },
    // 活跃时，执行方法
    activated() {
      // console.log('home activated');
      this.$router.push(this.path)
    },
    // 不活跃时，执行方法
    deactivated() {
      // console.log('home deactivated');
    }
  }
</script>

<style scoped>

</style>
