import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../components/HelloWorld')
    },
    {
      path: '/member-list',
      name: 'MemberList',
      component: () => import('../components/MemberList')
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../components/Login'),
      props: true
    }
  ]
})
