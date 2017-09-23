import Vue from 'vue'
import Router from 'vue-router'


import Login from '@/components/Login/login'
import Home from '@/components/Home/home'
import Me from '@/components/Me/me'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'Login', component: Login},
    {path: '/home', name: 'home', component: Home},
    {path: '/me', name: 'me', component: Me}
  ]
})
