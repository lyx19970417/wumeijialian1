import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../views/index.vue'
Vue.use(VueRouter)

const routes = [
  //首页
  {
    path: '/',
    name: 'index',
    component: index
  },
  //详情页
  {
    path:"/details/:pid",
    name:"details",
    component:()=>import("../views/details.vue")
  },
  //登录页
  {
    path:"/login",
    name:"login",
    component:()=>import("../views/login.vue")
  },
  //注册为页
  {
    path: '/reg',
    name: 'reg',
    component: ()=>import("../views/reg.vue")
  },
  //购物车
  {
    path: '/car',
    name: 'car',
    component: ()=>import("../views/car.vue")
  },
  //搜索页
  {
    path: '/list/:fid',
    name: 'list',
    component: ()=>import("../views/list.vue")
  },
  //支付页
  {
    path: '/pay',
    name: 'pay',
    component: ()=>import("../views/pay.vue")
  },
  //个人中心
  {
    path:'/center',
    name:"center",
    component:()=>import("../views/center.vue")
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
