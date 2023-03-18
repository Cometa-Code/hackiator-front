import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import SelectGameLowCandleView from '../views/SelectGameLowCandleView.vue'
import SelectGameTallCandleView from '../views/SelectGameTallCandleView.vue'
import SelectLevelView from '../views/SelectLevelView.vue'

const routes = [
  {
    path: '/',
    name: 'selectLevel',
    component: SelectLevelView
  },
  {
    path: '/velas-baixas',
    name: 'selectGameLowCandle',
    component: SelectGameLowCandleView
  },
  {
    path: '/velas-altas',
    name: 'selectGameTallCandle',
    component: SelectGameTallCandleView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
