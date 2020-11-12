import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/templates/Login.vue'
import Tutorial from '../components/templates/Tutorial.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path:'/tutorial',
      name:'tutorial',
      component:Tutorial
    }
    // {
    //   path:'/top',
    //   name:'top',
    //   component
    // }
  ]
})