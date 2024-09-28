import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { setupLayouts } from 'virtual:generated-layouts'
import App from './App.vue'
import type { RVModule } from '~/core/types'
import generatedRoutes from '~pages'

export const app = createApp(App)

const routes = setupLayouts(generatedRoutes)
export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export const messages = Object.fromEntries(
  Object.entries(
    import.meta.glob<{ default: any }>('/locales/*.y(a)?ml', { eager: true }))
    .map(([key, value]) => {
      const yaml = key.endsWith('.yaml')
      return [key.slice(9, yaml ? -5 : -4), value.default]
    }),
)

Object.values(import.meta.glob<{ install: RVModule }>('./core/modules/*.ts', { eager: true }))
  .forEach(i => i.install?.({ app, router }))

app.mount('#app')
