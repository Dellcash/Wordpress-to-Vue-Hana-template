import { defineStore } from "pinia";
import { useBlog } from "./data";

export const useBlogStore = defineStore({
  id: 'Blog',
  state: () => ({
    posts: useBlog.posts
  }),
  getters: {
    getPost: (state) => {
      return (id) => {
        return state.posts.filter(post => post.id == id)[0]
      }
    },
  }
})