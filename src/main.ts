import * as Vue from 'vue'
import * as VueRouter from 'vue-router'

import VueApexCharts from 'vue3-apexcharts'
import App from './App.vue'

import Dashboard from '@/pages/Dashboard.vue'
import Data from '@/pages/Data.vue'
import PageNotFound from '@/pages/PageNotFound.vue'
import Home from '@/pages/Home.vue'
import Insights from '@/pages/Insights.vue'
import DataGenerator from '@/pages/DataGenerator.vue'

const routes = [
  {
    path: '/',
    component: Home,
    meta: {
      title: 'Início - Election Prime'
    }
  },
  {
    path: '/home',
    component: Home,
    meta: {
      title: 'Início - Election Prime'
    }
  },
  {
    path: '/graph',
    component: Dashboard,
    meta: {
      title: 'Infográficos - Election Prime'
    }
  },
  {
    path: '/data',
    component: Data,
    meta: {
      title: 'Dados - Election Prime'
    }
  },
  {
    path: '/insights',
    component: Insights,
    meta: {
      title: 'Insights - Election Prime'
    }
  },
  {
    path: '/datagen',
    component: DataGenerator,
    meta: {
      title: 'Gerador de Dados - Election Prime'
    }
  },
  {
    path: '/:catchAll(.*)',
    component: PageNotFound,
    meta: {
      title: 'Página Não Encontrada - Election Prime'
    }
  }
]

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const componentWithTitle = to.matched
    .slice()
    .reverse()
    .find((r) => r.meta && r.meta.title)

  if (componentWithTitle)
    document.title = componentWithTitle.meta.title as string

  // Do not remove that! Otherwise the page will not render.
  next()
})

const app = Vue.createApp(App)

app.use(router)
app.use(VueApexCharts)

app.mount('#app')
