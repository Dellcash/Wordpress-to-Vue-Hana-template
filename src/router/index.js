import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/shop',
      name: 'Shop',
      component: () => import('../views/Shopping/Shop.vue'),
    },
    {
      path: '/shop/:id',
      name: 'Item',
      component: () => import('../views/Shopping/Item.vue')
    }

  ]
})

export default router
