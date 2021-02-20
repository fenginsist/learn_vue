<template>
    <div>
        <h2>我是Cpn子组件的标题</h2>
        <span>{{name}}</span>
    </div>
</template>

<script>
    export default {
        name: "Cpn",
        data() {
            return {
                name: '我是cpn子组件的内容'
            }
        }
    }
</script>

<style scoped>

</style>