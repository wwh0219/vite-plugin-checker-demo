import { defineConfig } from 'vite'
import checker from 'vite-plugin-checker'
import vue from '@vitejs/plugin-vue2'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    checker({ vueTsc: true,typescript:true,eslint:false /** or an object config */ })
  ]
})
