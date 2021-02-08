<template>
  <div>
    <span>{{message}}</span>
    <button @click="btnClick">按钮</button>
    <span>{{name}}</span>
  </div>
</template>

<script>
  export default {
    name: "App",
    data(){
      return {
        message: '冯凡利 i love you',
        name: '冯安晨'
      }
    },
    methods: {
      btnClick(){
        console.log('btnClick')
      }
    }
  }
</script>

<style scoped>

</style>