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
    },
    {
      path: '/info',
      component: () => import('../views/Shopping/Info.vue'),
      meta: {
        title: 'اطلاعات شما'
      }
    },
    {
      path: '/checkout',
      component: () => import('../views/Shopping/Checkout.vue'),
      meta: {
        title: 'پرداخت'
      }
    },
    {
      path: '/success',
      component: () => import('../views/Shopping/Success.vue'),
      meta: {
        title: 'پایان خرید'
      }
    },
    {
      path: '/blogs',
      component: () => import('../views/Blog/Posts.vue'),
      meta: {
        title: 'وبلاگ'
      }
    },
    {
      path: '/blog/:id',
      component: () => import('../views/Blog/Post.vue'),
      meta: {
        title: '. . .'
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  document.title = `فروشگاه هانا | ${to.meta.title}`
  next()
})

export default router
