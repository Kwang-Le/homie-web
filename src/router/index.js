import { createRouter, createWebHistory } from 'vue-router'

import AdminNotificationView from '@/views/admin/AdminNotificationView.vue'
import AdminDashboardView from '@/views/admin/AdminDashboardView.vue'
import AdminSettingView from '@/views/admin/AdminSettingView.vue'
import AdminAccountView from '@/views/admin/AdminAccountView.vue'
import AdminStatisticView from '@/views/admin/AdminStatisticView.vue'
import AdminApartmentView from '@/views/admin/AdminApartmentView.vue'
import AdminResidentView from '@/views/admin/AdminResidentView.vue'
import AdminRevenueView from '@/views/admin/AdminRevenueView.vue'
// import AdminStatisticalView from '@/views/admin/AdminStatisticalView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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
      path: '/admin-statistic',
      name: 'admin-statistic',
      component: AdminStatisticView
    },
    // {
    //   path: '/admin-statistical',
    //   name: 'admin-statistical',
    //   component: AdminStatisticalView
    // },
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
