import Vue from 'vue'
import Router from 'vue-router'

// import Home from '../components/Home'
// import About from "../components/About";
// import User from "../components/User";

const Home = ()=> import('../components/Home')
const About = ()=> import('../components/About')
const User = ()=> import('../components/User')

// 1. 注入插件
Vue.use(Router)

// 2. 定义路由
const routes = [
  {
    path: '',
    // redirect 重定向
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/user/:abcName',
    component: User
  }

]

// 3. 创建路由实例 并 导出路由实例
export default new Router({
  // 配置路由和组件之间的应用关系
  routes,
  mode: 'history',
  linkActiveClass: 'active'
})
