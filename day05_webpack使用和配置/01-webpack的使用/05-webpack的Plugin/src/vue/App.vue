<template>
  <div>
    <span>{{message}}</span>
    <button @click="btnClick">按钮</button>
    <span>{{name}}</span>
    <Cpn></Cpn>
  </div>
</template>

<script>
  import Cpn from "./Cpn";
  
  export default {
    name: "App",
    data(){
      return {
        message: '冯凡利 i love you',
        name: '冯安晨'
      }
    },
    components: {
      Cpn
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