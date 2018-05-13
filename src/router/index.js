import Vue from 'vue'
import Router from 'vue-router'

const login = () => import('@/components/login')
const form = () => import('@/components/form')
const main = () => import('@/components/main')
const table = () => import('@/components/table')
const texterea = () => import('@/components/texterea')
const info = () => import('@/components/info')
const canvas = () => import('@/components/canvas')
const notFind = () => import('@/components/notFind')
const Home = () => import('@/components/Home')




export default new Router({
  routes: [
    {
      path: '/login',
      alias: '/',
      name: 'login',
      component: login,
      leaf:true,
      hidden: true
    },
    {
      path: '/home',
      component: Home,
      name: '主页',
      leaf:false,
      hidden:true,
      children: [
        { path: 'info', component: info , name: 'dsds',leaf:true,hidden:true,}
      ]
    },


    {
      path: '/main',
      name: 'main',
      redirect: '/form',//将原先的路由改为子路由
      component: main,
      leaf:false,
      hidden:true,
      children: [
        {
          path: 'form',
          name: 'form',
          component: form
        },
        {
          path: 'canvas',
          name: 'canvas',
          component: canvas
        },
        {
          path: 'table',
          name: 'table',
          component: table
        },
        {
          path: 'texterea',
          name: 'texterea',
          component: texterea
        },
      ]
    },

    {
      path: "*",
      name: 'notFind',
      component: notFind,
      leaf:true,
      hidden: true
    },

  ]
})
Vue.use(Router)