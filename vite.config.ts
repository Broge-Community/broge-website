import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
// Enable below if you wish to enable VueDevTools (beta functionality)
// import VueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // Disable the above and enable the below to enable VueDevTools (beta functionality)
  //plugins: [vue(), VueDevTools()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        //additionalData: `@import "@/assets/scss/style.scss";`
      }
    }
  },
  base: './'
});
