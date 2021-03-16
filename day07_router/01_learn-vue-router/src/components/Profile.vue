<template>
  <div>
    <h2>我是profile组件</h2>
    <div>{{$route.params.id}}</div>
    <div>{{$route.query.name}}</div>
    <div>{{$route.query.age}}</div>
  </div>
</template>

<script>
  export default {
    name: "Profile",
    created() {
      console.log('created');
      // document.title = '档案'
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
