import Vue from 'vue'
import VueRouter from 'vue-router'

// import Cart from "../views/cart/Cart";
// import Category from "../views/category/Category";
// import Home from "../views/home/Home";
// import Profile from "../views/profile/Profile";

/*
* 懒加载方式 导入
* */
const Home = ()=>import('views/home/Home')
const Category = ()=>import('views/category/Category')
const Cart = ()=>import('views/cart/Cart')
const Profile = ()=>import('views/profile/Profile')

// 1. 安装插件
Vue.use(VueRouter)

// 2. 创建路由对象
const routes = [
  {
    path: '',
    redirect: '/Home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/profile',
    component: Profile
  }
]

// 3. 挂载路由
const router = new VueRouter({
  routes,
  mode: 'history'
})

// 4. 导出路由
export default router
