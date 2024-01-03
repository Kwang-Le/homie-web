import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '../views/dashboard/AdminDashboardView.vue'
import AdminNotificationView from '@/views/dashboard/AdminNotificationView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: DashboardView
    },
  ]
})

export default router
