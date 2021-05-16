<template>
  <div id="app">
    <h2>hello axios</h2>
    <h2>{{item.message}}</h2>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        item: {
          message: 'im message'
        }
      }
    },
    created() {
      this.test()
    },
    computed: {
      message: function () {
        this.item.message = this.item.message + "123444"
        // return this.item.message + "123444"
      }
    },
    methods: {
      test(){
        console.log(this.item.message);
      }
    }
  }
</script>

<style>
</style>
