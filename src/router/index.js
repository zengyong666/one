import Vue from 'vue'


import VueRouter from 'vue-router'

Vue.use(VueRouter)

import login from '../views/login'
import layout from '../views/layout'

const router = new VueRouter({
  routes: [
    { path: '*', redirect: login },
    { path: '/login', component: login },
    { path: '/layout', component: layout }
  ]
})

export default router