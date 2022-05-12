import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import Unocss from 'unocss/vite'
import { presetUno, presetAttributify, transformerDirectives } from 'unocss'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), Unocss({
    presets: [
      presetAttributify(),
      presetUno()
    ],
    transformers: [
      transformerDirectives()
    ]
  })],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
