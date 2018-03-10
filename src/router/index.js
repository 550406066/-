import Vue from 'vue'
import Router from 'vue-router'

const login = () => import('@/components/login')
const form =()=>import('@/components/form')
const main =()=>import('@/components/main')
const table =()=>import('@/components/table')
const texterea =()=>import('@/components/texterea')
const info = () => import('@/components/info')
const canvas = () => import('@/components/canvas')
Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },

    {
      path: '/main',
      name: 'main',
      redirect: '/form',//将原先的路由改为子路由
      component: main,
      children: [
        {
          path: '/form',
          name: 'form',
          component: form
        },
        {
          path: '/canvas',
          name: 'canvas',
          component: canvas
        },
      ]
    },
    {
      path: '/main',
      name: 'main',
      component: main,
      children: [
        {
          path: '/table',
          name: 'table',
          component: table
        },
        {
          path: '/texterea',
          name: 'texterea',
          component: texterea
        },
    ]
    }
  ]
})
