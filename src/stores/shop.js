import { defineStore } from 'pinia'
import { useShop } from './data'

export const useShopStore = defineStore({
  id: 'Shop',
  state: () => ({
    items: useShop.items
  }),
  getters: {
    doubleCount: (state) => state.counter * 2
  },
  actions: {
    increment() {
      this.counter++
    }
  }
})
