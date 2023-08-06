import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home/HomeView.vue'),
    meta:{
      title:'Health-Care'
    },
  },
  {
    path: '/Register',
    name: 'Register',
    component: () => import('@/views/RegisterView.vue'),
    meta:{
      title:'Health-Care'
    },
  },
  {
    path: '/Login',
    name: 'Login',
    component: () => import('@/views/LoginView.vue'),
    meta:{
      title:'Health-Care'
    },
  },
  {
    path: '/body',
    name: 'body',
    component: () => import('@/views/Body/IndexView.vue'),
    meta:{
      title:'Health-Care'
    },
  },
  {
    path: '/health',
    name: 'health',
    component: () => import('@/views/Health/IndexView.vue'),
    meta:{
      title:'Health-Care'
    },
  },
  {
    path: '/sport',
    name: 'sport',
    component: () => import('@/views/Sport/IndexView.vue'),
    meta:{
      title:'Health-Care'
    },
  },
  {
    path: '/sport-record',
    name: 'sport-record',
    component: () => import('@/views/Sport-record/IndexView.vue'),
    meta:{
      title:'Health-Care'
    },
  },
  {
    path: '/nutrition',
    name: 'nutrition',
    component: () => import('@/views/Nutrition/IndexView.vue'),
    meta:{
      title:'Health-Care'
    },
  },
  {
    path: '/report',
    name: 'report',
    component: () => import('@/views/Report/IndexView.vue'),
    meta:{
      title:'Health-Care'
    },
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('@/views/Contact/IndexView.vue'),
    meta:{
      title:'Health-Care'
    },
  },
  {
    path: '/link',
    name: 'link',
    component: () => import('@/views/Link/IndexView.vue'),
    meta:{
      title:'Health-Care'
    },
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
