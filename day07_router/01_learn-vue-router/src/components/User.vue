<template>
  <div>
    <h2>我是用户界面</h2>
    <span>嘿嘿嘿</span>
    <span>{{userId}}</span>
    <span>{{$route.params.abcName}}</span>
    <span>{{message}}</span>
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
        return this.$route.params.abcName
      },
      messages(){
        return this.message
      }
    }
  }
</script>

<style scoped>

</style>
