import { defineStore } from 'pinia'
import { useShop } from './data'

function useLocalStorage(cart) {
  localStorage.setItem('cart', JSON.stringify(cart))
}

export const useShopStore = defineStore({
  id: 'Shop',
  state: () => ({
    items: useShop.items,
    cart: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
  }),
  getters: {
    getItem: (state) => {
      return (id) => {
        return state.items.filter(item => item.id == id)[0]
      }
    },
    count(state) {
      return state.cart.length
    }
  },
  actions: {
    addToCart(product) {
      const item = this.cart.find(p => p.id == product.id)
      if (!item) {
        this.cart.push({
          ...product,
          quantity: 1
        })
      } else {
        item.quantity++
      }

      useLocalStorage(this.cart)
    },
    increment(id) {
      const item = this.cart.find(p => p.id == id)
      if (item) {
        item.quantity++
      }

      useLocalStorage(this.cart)
    },
    decrement(id) {
      const item = this.cart.fine(p => p.id == id)
      if (item.quantity > 1) {
        item.quantity--
      }

      useLocalStorage(this.cart)
    },
    removeItem(id) {
      this.cart = this.cart.filter(cart => cart.id != id)
      useLocalStorage(this.cart)
    }
  }
})
