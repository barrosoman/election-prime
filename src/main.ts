import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
import Dashboard from './pages/Dashboard.vue'
import Data from './pages/Data.vue'
import PageNotFound from './pages/PageNotFound.vue'

const routes = [
  {
    path: '/',
    component: Dashboard
  },
  {
    path: '/dashboard',
    component: Dashboard
  },
  {
    path: '/data',
    component: Data
  },
  {
    path: '/:catchAll(.*)',
    component: PageNotFound
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const app = createApp(App)

app.use(router)
app.mount('#app')

// createApp(App).mount('#app')
