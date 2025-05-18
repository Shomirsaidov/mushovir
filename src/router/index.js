import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    alias: '/welcome',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/HomeView.vue')
  }
]

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

export default router
