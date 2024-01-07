import { createRouter, createWebHistory } from 'vue-router'

import AdminNotificationView from '@/views/admin/AdminNotificationView.vue'
import AdminDashboardView from '@/views/admin/AdminDashboardView.vue'
import AdminSettingView from '@/views/admin/AdminSettingView.vue'
import AdminAccountView from '@/views/admin/AdminAccountView.vue'
import AdminApartmentView from '@/views/admin/AdminApartmentView.vue'
import AdminResidentView from '@/views/admin/AdminResidentView.vue'
import AdminRevenueView from '@/views/admin/AdminRevenueView.vue'
import AdminStatisticalView from '@/views/admin/AdminStatisticalView.vue'
import AdminLoginFormView from '@/views/admin/form/AdminLoginFormView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: AdminLoginFormView
    },
    {
      path: '/admin-dashboard',
      name: 'admin-dashboard',
      component: AdminDashboardView
    },
    {
      path: '/admin-account',
      name: 'admin-account',
      component: AdminAccountView
    },
    {
      path: '/admin-apartment',
      name: 'admin-apartment',
      component: AdminApartmentView
    },
    {
      path: '/admin-resident',
      name: 'admin-resident',
      component: AdminResidentView
    },
    {
      path: '/admin-revenue',
      name: 'admin-revenue',
      component: AdminRevenueView
    },
    {
      path: '/admin-statistical',
      name: 'admin-statistical',
      component: AdminStatisticalView
    },
    {
      path: '/admin-statistical/apartment/:id',
      name: 'admin-statistical-apartment',
      component: AdminStatisticalView
    },
    {
      path: '/admin-notification',
      name: 'admin-notification',
      component: AdminNotificationView
    },
    {
      path: '/admin-setting',
      name: 'admin-setting',
      component: AdminSettingView
    },
  ]
})

export default router
