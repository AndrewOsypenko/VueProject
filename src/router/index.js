import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/Home.vue')
    },
    // {
    //   path: '/new',
    //   name: 'new',
    //   component: () => import('../views/New.vue')
    // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
