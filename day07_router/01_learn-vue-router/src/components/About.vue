<template>
  <div>
    <span>我是关于</span>
    <span>我是关于</span>
  </div>
</template>

<script>
  export default {
    name: "About",
    created() {
      console.log('created');
      // document.title = '关于'
    },
    // 活跃时，执行方法
    activated() {
      // console.log('home activated');
      // this.$router.push(this.path)
    },
    // 不活跃时，执行方法
    deactivated() {
      // console.log('home deactivated');
    }
  }
</script>

<style scoped>

</style>
