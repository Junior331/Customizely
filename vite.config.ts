import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      "@": "/src",
      utils: "@/utils",
      state: "@/state",
      pages: "@/pages",
      config: "@/config",
      routes: "@/routes",
      styles: "@/styles",
      service: "@/service",
      components: "@/components",
    },
  },
})
