import * as Vue from 'vue'
import * as VueRouter from 'vue-router'

import VueApexCharts from 'vue3-apexcharts'
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

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes
})

const app = Vue.createApp(App)

app.use(router)
app.use(VueApexCharts)

app.mount('#app')
