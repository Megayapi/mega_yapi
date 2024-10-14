import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { setupLayouts } from 'virtual:generated-layouts'
import App from './App.vue'
import type { RVModule } from '~/core/types'
import generatedRoutes from '~pages'

export const app = createApp(App)

const routes = setupLayouts(generatedRoutes)

export const router = createRouter({
  history: createWebHistory('/'),
  routes,
})

router.beforeEach((to, from, next) => {
  if (!from.name && to.name === 'project')
    router.push({ name: 'home' })
  else next()
})
Object.values(import.meta.glob<{ install: RVModule }>('./core/modules/*.ts', { eager: true }))
  .forEach(i => i.install?.({ app, router }))

app.mount('#app')
