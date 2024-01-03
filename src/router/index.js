import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '../views/dashboard/AdminDashboardView.vue'
import AdminNotificationView from '@/views/dashboard/AdminNotificationView.vue'
import AdminDashboardView from '@/views/dashboard/AdminDashboardView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/admin-dashboard',
      name: 'admin-dashboard',
      component: AdminDashboardView
    },
    {
      path: '/admin-notification',
      name: 'admin-notification',
      component: AdminNotificationView
    },
  ]
})

export default router
