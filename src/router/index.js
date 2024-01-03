import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '../views/dashboard/DashboardView.vue'
import PersonalInfoViewVue from '@/views/personal-info/PersonalInfoView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: DashboardView
    },
    {
      path: '/personal-info',
      name: 'personal-info',
      component: PersonalInfoViewVue
    },
  ]
})

export default router
