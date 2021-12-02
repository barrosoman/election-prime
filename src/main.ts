import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'

import App from './App.vue'
import Dashboard from './pages/Dashboard.vue'
import Data from './pages/Data.vue'

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
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

const app = createApp(App)

app.use(router)
app.mount('#app')

// createApp(App).mount('#app')
