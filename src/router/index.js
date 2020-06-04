import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login'
import Register from '../components/Register'
import AdminHome from '../components/admin/AdminHome'
import AdminWelcome from '../components/admin/Welcome'
import Stores from '../components/admin/stores/Stores'
import AdminOrders from '../components/admin/orders/Orders'
import Users from '../components/admin/users/Users'
import Report from '../components/admin/report/Report'
// 商家后台
import StoreHome from '../components/store/StoreHome'
import StoreWelcome from '../components/store/Welcome'
import Goods from '../components/store/goods/Goods'

Vue.use(VueRouter)

// const routes = []

const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/login' }, // 根路径跳转到login
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    {
      path: '/admin/home',
      component: AdminHome,
      redirect: '/admin/welcome',
      children: [
        { path: '/admin/welcome', component: AdminWelcome },
        { path: '/admin/users', component: Users },
        { path: '/admin/stores', component: Stores },
        { path: '/admin/orders', component: AdminOrders },
        { path: '/admin/reports', component: Report }
      ]
    },
    {
      path: '/store/home',
      component: StoreHome,
      redirect: '/store/welcome',
      children: [
        { path: '/store/welcome', component: StoreWelcome },
        { path: '/store/goods', component: Goods }
      ]
    }
  ]
})

// 挂载路由导航守卫
// router.beforeEach((to, from, next) => {
//   // to 将要访问的路径
//   // from 代表从哪个路径跳转而来
//   // next 是一个函数，表示放行
//   //     next()  放行    next('/login')  强制跳转
//
//   if (to.path === '/login') return next()
//   // 获取token
//   const tokenStr = window.sessionStorage.getItem('token')
//   if (!tokenStr) return next('/login')
//   next()
// })

export default router
