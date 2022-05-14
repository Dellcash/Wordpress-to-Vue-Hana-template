import { defineStore } from 'pinia'
import { useShop } from './data'

export const useShopStore = defineStore({
  id: 'Shop',
  state: () => ({
    items: useShop.items
  }),
  getters: {
    getItem: (state) => {
      return (id) => {
        return state.items.filter(item => item.id == id)[0]
      }
    }
  },
  actions: {
  }
})
