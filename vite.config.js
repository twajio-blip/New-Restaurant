import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  base: '/New-Restaurant/',
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        menu: 'menu.html',
        foodDetails: 'food-details.html',
      },
    },
  },
})
