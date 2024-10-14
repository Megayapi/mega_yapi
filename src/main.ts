import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
// import { setupLayouts } from 'virtual:generated-layouts'
import App from '../src/App.vue'
import Home from './views/pages/home/index.vue'
import Contact from './views/pages/contact/index.vue'
import About from './views/pages/about/index.vue'
import Projects from './views/pages/projects/index.vue'
import ProjectDetail from './views/pages/projects/[project]/index.vue'
// import generatedRoutes from '~pages'
import type { RVModule } from '~/core/types'

export const app = createApp(App)

// const routes = setupLayouts(generatedRoutes)

export const router = createRouter({
  history: createWebHistory('/'),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        layout: 'default',
      },
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
      meta: {
        layout: 'default',
      },
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      meta: {
        layout: 'default',
      },
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects,
      meta: {
        layout: 'default',
      },
    },
    {
      path: '/projects/:project',
      name: 'project',
      component: ProjectDetail,
      meta: {
        layout: 'default',
      },
    },
  ],
})

// router.beforeEach((to, from, next) => {
//   if (!from.name && to.name === 'project')
//     router.push({ name: 'home' })
//   else next()
// })
Object.values(import.meta.glob<{ install: RVModule }>('./core/modules/*.ts', { eager: true }))
  .forEach(i => i.install?.({ app, router }))

app.mount('#app')
