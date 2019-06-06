import Vue from 'vue'
import Router from 'vue-router'
// import Home from '../views/Home.vue'
import Workshop from '../views/Workshop.vue'
import Editor from '../views/Editor'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Workshop
    },
    {
      path: '/workshop',
      name: 'Workshop',
      component: Workshop
    },
    {
      path: '/editor',
      name: 'Editor',
      component: Editor
    },
  ]
})
