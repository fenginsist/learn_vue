<template>
  <div>
    <MainTabBar/>
    <router-view/>
  </div>
</template>

<script>
  import MainTabBar from "./components/MainTabBar";

export default {
  name: 'App',
  components: {
    MainTabBar
  }
}
</script>

<style>

</style>
