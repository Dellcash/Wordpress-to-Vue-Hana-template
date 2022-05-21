import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        title: 'صفحه نخست'
      }
    },
    {
      path: '/shop',
      name: 'Shop',
      component: () => import('../views/Shopping/Shop.vue'),
      meta: {
        title: 'محصولات'
      }
    },
    {
      path: '/shop/:id',
      name: 'Item',
      component: () => import('../views/Shopping/Item.vue'),
      meta: {
        title: '. . .'
      }
    },
    {
      path: '/shopping-card',
      component: () => import('../views/Shopping/ShoppingCart.vue'),
      meta: {
        title: 'سبد خرید'
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  document.title = `فروشگاه هانا | ${to.meta.title}`
  next()
})

export default router
