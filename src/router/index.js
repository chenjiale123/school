import Vue from 'vue'
import VueRouter from 'vue-router'
import Map from '@/views/Map';
import NotFound from '@/views/NotFound';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import('@/views/Login.vue'),
    meta: {
      title: '登录界面'
    }
  },
  {
    path: '/login',
    redirect: '/'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
    meta: {
      title: '主页'
    }
  },
  {
    path: '/detail',
    name: 'Detail',
    component: () => import('@/views/Detail.vue'),
    meta: {
      title: '卫生防控检测'
    }
  },
  {
    path: '/unusual',
    name: 'Unusual',
    component: () => import('@/views/Unusual.vue'),
    meta: {
      title: '异常防控检测'
    }
  },
  {
    path: '/equip',
    name: 'Equipment',
    component: () => import('@/views/Equipment.vue'),
    meta: {
      title: '设备使用详情'
    }
  },
  // {
  //   path: '/register',
  //   name: 'Register',
  //   component: () => import('@/views/Register.vue'),
  //   meta: {
  //     title: '注册'
  //   }
  // },
 
  {
    path: '/map',
    name: 'Map',
    component: Map,
    meta: {
      title: '区域地图'
    }
  },
  {
    path: '*',
    name: '404',
    component: NotFound,
  }, 
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router

