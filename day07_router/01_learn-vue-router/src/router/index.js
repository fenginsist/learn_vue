import Vue from 'vue'
import Router from 'vue-router'

// import Home from '../components/Home'
// import About from "../components/About";
// import User from "../components/User";

const Home = () => import('../components/Home')
const HomeNews = () => import('../components/HomeNews')
const HomeMessage = () => import('../components/HomeMessage')

const About = () => import('../components/About')
const User = () => import('../components/User')
const Profile = () => import('../components/Profile')

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
    component: Home,
    children: [
      {
        path: '',
        // 重定向，默认显示 新闻
        redirect: 'news'
      },
      {
        path: 'news',
        component: HomeNews
      },
      {
        path: 'message',
        component: HomeMessage
      }
    ],
    meta: {
      title: '首页'
    }
  },
  {
    path: '/about',
    component: About,
    meta: {
      title: '关于'
    },
    beforeEnter: (to, from, next) => {
      // console.log('about beforeEnter');
      next()
    }
  },
  {
    path: '/user/:id',
    component: User,
    meta: {
      title: '用户'
    }
  },
  {
    path: '/profile/:id',
    component: Profile,
    meta: {
      title: '档案'
    }
  }
]

// 3. 创建路由实例
const router = new Router({
  // 配置路由和组件之间的应用关系
  routes,
  mode: 'history',
  linkActiveClass: 'active'
})

/*
* 导航守卫，添加每个页面的标题
* beforeEach： 前置钩子（hook）
* */
router.beforeEach(function (to, from, next) {
  window.document.title = to.matched[0].meta.title
  //console.log(to);  // 这个to 就是 route 当前活跃 对象
  // console.log('+++');
  next()
})

// afterEach： 后置钩子（hook）
router.afterEach((to, from) => {
  // console.log('---');
})

// 4. 导出 router 路由实例
export default router
